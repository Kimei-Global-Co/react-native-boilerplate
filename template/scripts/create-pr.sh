#!/bin/bash

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null
then
    echo "Error: GitHub CLI (gh) is not installed. Please install it first (brew install gh)."
    exit 1
fi

# Get current branch name
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

# Extract Task ID from branch (e.g., feat/VIET-123 -> VIET-123)
TASK_ID=$(echo "$BRANCH_NAME" | awk -F'/' '{print $NF}')
PLANE_LINK="https://plane.kways.vn/vietwow/browse/$TASK_ID"

# Get commit messages (from current branch relative to origin/main or origin/master)
BASE_BRANCH=$(git symbolic-ref refs/remotes/origin/HEAD | sed 's@^refs/remotes/origin/@@' 2>/dev/null || echo "main")
COMMITS=$(git log origin/$BASE_BRANCH..HEAD --pretty=format:"* %s")

# If no commits found (e.g., branch not pushed yet), get the last commit
if [ -z "$COMMITS" ]; then
    COMMITS="* $(git log -1 --pretty=%s)"
fi

# Author info
AUTHOR=$(git config user.name)

# Create PR Body
PR_BODY=$(cat <<EOF
## Summary

$COMMITS

## Task ID

[$TASK_ID]($PLANE_LINK)

---
**Author**: @$AUTHOR
EOF
)

echo "----------------------------------------"
echo "Creating PR for branch: $BRANCH_NAME"
echo "Targeting base: $BASE_BRANCH"
echo "Task ID: $TASK_ID"
echo "----------------------------------------"
echo "PR Body Preview:"
echo "$PR_BODY"
echo "----------------------------------------"

# Ask for confirmation
read -p "Do you want to create this PR? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    exit 1
fi

# Create the PR using gh cli
# --fill uses the first commit as title
# --assignee @me assigns it to you
gh pr create --title "$TASK_ID: $(git log -1 --pretty=%s)" --body "$PR_BODY" --assignee "@me" --base "$BASE_BRANCH"
