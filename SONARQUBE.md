# 🔍 SonarQube / SonarCloud Setup & Usage Guide

Welcome to the **SonarQube** quality analysis integration for this project! This guide will help you run static code analysis to ensure code quality and maintainability.

---

## ⚙️ Prerequisites

- ✅ **SonarScanner** installed on your machine  
- ✅ A **SonarCloud** account and project setup (or SonarQube server)  
- ✅ A valid **SonarCloud token** with **Analyze** permissions
- ✅ **Docker** installed and running (for local workflow testing)
  - [Docker Desktop](https://www.docker.com/products/docker-desktop/) for Windows/Mac
  - [Docker Engine](https://docs.docker.com/engine/install/) for Linux

---

## 📁 Configuration File: sonar-project.properties
Make sure you have a sonar-project.properties file in your project root with contents similar to: 
   ```
sonar.projectKey=your_project_key
sonar.organization=your_organization_key
sonar.host.url=https://sonarcloud.io
sonar.sources=.
sonar.sourceEncoding=UTF-8
   ```

## 🚀 How to Run Analysis

### 1. Direct Scanner Method
```bash
sonar-scanner -Dsonar.token=yourToken
```

### 2. Local Workflow Testing with Act

#### Prerequisites
- ✅ [Act](https://github.com/nektos/act) installed on your machine
- ✅ Docker running on your system

#### Setup and Run
1. Create a `.secrets` file in your project root:
   ```
   SONAR_TOKEN=your_sonar_token
   ```

2. Run the workflow locally:
   ```bash
   # Run the specific workflow that contains SonarQube analysis
   act --env-file .secrets -e sonar-event.json -W '.github/workflows/sonar-scan.yml'
   ```

#### Tips
- Use `act -l` to list all available workflows
- Add `-v` flag for verbose output
- Use `-n` flag for dry-run mode

## 📚 Useful Links

[SonarCloud Documentation](http://docs.sonarsource.com/sonarqube-cloud/)

[Sonar Source](https://www.sonarsource.com/)

### Docker Resources
- [Docker Getting Started](https://docs.docker.com/get-started/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

### Act Resources
- [Act GitHub Repository](https://github.com/nektos/act)
- [Act Installation Guide](https://nektosact.com/installation/index.html)
- [Act Usage Documentation](https://nektosact.com/usage/index.html)


