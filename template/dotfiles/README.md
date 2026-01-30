# Dotfiles Template

This directory contains configuration files (dotfiles) that are essential for the project but are handled specially to bypass NPM/Expo template limitations.

## Why this exists?

When creating a new project from a template using `npx create-expo` or `npm pack`, files starting with `.` (like `.gitignore`) are often ignored or removed by the package manager during the preparation phase.

To ensure these files are correctly included in your new project, we:
1. Store them here without the leading dot (or in subdirectories).
2. Use the `scripts/clean-up.js` script (which runs automatically on project initialization) to move and rename them to the root of your new project.

## List of handled files:
- `gitignore` -> `.gitignore`
- `biomeignore` -> `.biomeignore`
- `env.example` -> `.env.example`
- `vscode/` -> `.vscode/`
- `husky/` -> `.husky/`
- `agents/` -> `.agents/`
- `codex/` -> `.codex/`
