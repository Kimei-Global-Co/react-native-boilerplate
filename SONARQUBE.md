# 🔍 SonarQube / SonarCloud Setup & Usage Guide

Welcome to the **SonarQube** quality analysis integration for this project! This guide will help you run static code analysis to ensure code quality and maintainability.

---

## ⚙️ Prerequisites

- ✅ **SonarScanner** installed on your machine  
- ✅ A **SonarCloud** account and project setup (or SonarQube server)  
- ✅ A valid **SonarCloud token** with **Analyze** permissions

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
   ```
sonar-scanner -Dsonar.token= yourToken
   ```
## 📚  Useful Links

[SonarCloud Documentation](http://docs.sonarsource.com/sonarqube-cloud/)

[Sonar Source](https://www.sonarsource.com/)


