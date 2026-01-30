# 🚀 {{APP_NAME}} Mobile Application

## 📖 Overview

A React Native mobile application using Expo. This README provides setup instructions and development workflows.

## ✅ Prerequisites

## 🛑 Troubleshooting

### 🔑 Environment Variables

- Ensure you have correct permissions for `bun env:pull`

### 🏗️ Build Issues

- 🍏 **iOS:** Verify Xcode and CocoaPods installation
- 🤖 **Android:** Check Android Studio, JDK, and SDK configuration

### 🛠️ Dependency Problems

Try cleaning your installation:

```sh
rm -rf node_modules
bun.lock
bun install
```

## 🤝 Contributing

To maintain a consistent workflow and professional PR format, please use the provided script to create Pull Requests.

### 📝 Automated PR Workflow

1.  **Branch Naming**: Ensure your branch ends with the [**Plane**](https://plane.so/) Task ID (e.g., `feat/VIET-123`).
2.  **Commit Changes**: Make your changes and commit them with descriptive messages.
3.  **Create PR**: Run the following command from the project root:

    ```sh
    sh scripts/create-pr.sh
    ```

This script will automatically:
-   Extract all commits and format them as bullet points.
-   Generate a clickable link to your Plane task.
-   Tag you as the author and assign the PR to you.
-   Apply the professional PR template.

> **Note**: Requires [GitHub CLI (`gh`)](https://cli.github.com/) to be installed and authenticated.
