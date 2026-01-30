#!/bin/bash

# Styling
BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BOLD='\033[1m'
NC='\033[0m'

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null
then
    echo -e "${RED}Error: GitHub CLI (gh) is not installed. Please install it first (brew install gh).${NC}"
    exit 1
fi

# Get current branch name
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

# Extract Task ID from branch (e.g., feat/VIET-123 -> VIET-123)
TASK_ID=$(echo "$BRANCH_NAME" | awk -F'/' '{print $NF}')
PLANE_LINK="https://plane.kways.vn/vietwow/browse/$TASK_ID"

# Get commit messages (from current branch relative to origin/main or origin/master)
BASE_BRANCH=$(git symbolic-ref refs/remotes/origin/HEAD | sed 's@^refs/remotes/origin/@@' 2>/dev/null || echo "main")

echo -e "${BLUE}----------------------------------------${NC}"
echo -e "🚀 ${BOLD}Preparing Pull Request...${NC}"
echo -e "${BLUE}----------------------------------------${NC}"

# Ensure we have the latest from origin
echo -e "📡 Fetching latest from origin/$BASE_BRANCH..."
git fetch origin "$BASE_BRANCH" --quiet 2>/dev/null

# Check for uncommitted changes FIRST
UNCOMMITTED=$(git status --porcelain -u)
if [ -n "$UNCOMMITTED" ]; then
    echo -e "${YELLOW}⚠️  Uncommitted changes detected:${NC}"
    echo "$UNCOMMITTED"
    echo -e "${BLUE}----------------------------------------${NC}"
    read -p "Do you want to commit them as '$TASK_ID: update'? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git add .
        git commit -m "$TASK_ID: update"
        echo -e "${GREEN}✅ Changes committed.${NC}"
    else
        echo -e "${YELLOW}ℹ️  Proceeding without uncommitted changes.${NC}"
    fi
fi

# Determine the range of commits
if git rev-parse --verify "origin/$BASE_BRANCH" >/dev/null 2>&1; then
    RANGE="origin/$BASE_BRANCH..HEAD"
else
    RANGE="$BASE_BRANCH..HEAD"
fi

COMMITS=$(git log "$RANGE" --pretty=format:"* %s" 2>/dev/null)

# If no commits found
if [ -z "$COMMITS" ]; then
    echo -e "${RED}❌ Error: No new commits found between $BASE_BRANCH and $BRANCH_NAME.${NC}"
    exit 1
fi

# Author info
AUTHOR=$(git config user.name)

# Create PR Body
PR_BODY=$(cat <<EOF
## Summary

$COMMITS

## Metadata

| Property | Value |
| :--- | :--- |
| **Task** | [$TASK_ID]($PLANE_LINK) |
| **Author** | @$AUTHOR |
| **Branch** | \`$BRANCH_NAME\` |
EOF
)

echo -e "${BLUE}========================================${NC}"
echo -e "${BOLD}PULL REQUEST PREVIEW${NC}"
echo -e "${BLUE}========================================${NC}"
printf "  ${BOLD}%-10s${NC} %s\n" "Branch:" "${GREEN}$BRANCH_NAME${NC}"
printf "  ${BOLD}%-10s${NC} %s\n" "Base:" "${GREEN}$BASE_BRANCH${NC}"
printf "  ${BOLD}%-10s${NC} %s\n" "Task ID:" "${GREEN}$TASK_ID${NC}"
echo -e "${BLUE}----------------------------------------${NC}"
echo -e "$PR_BODY"
echo -e "${BLUE}========================================${NC}"

# Ask for confirmation
echo -ne "${BOLD}Create this Pull Request? (y/n): ${NC}"
read -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo -e "${YELLOW}Cancelled.${NC}"
    exit 1
fi

# Create the PR using gh cli
TITLE=$(git log -1 --pretty=%s)
if [[ "$TITLE" != "$TASK_ID"* ]]; then
    TITLE="$TASK_ID: $TITLE"
fi

echo -e "Pushing changes and creating PR..."
gh pr create --title "$TITLE" --body "$PR_BODY" --assignee "@me" --base "$BASE_BRANCH"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}Success: Pull Request created.${NC}"
else
    echo -e "${RED}Error: Failed to create Pull Request.${NC}"
fi
