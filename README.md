<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://kimei-global.com/">
    <img src="images/logo.png" alt="Logo">
  </a>

  <h3 align="center">KIMEI Global React Native Boilerplate</h3>

  <p align="center">
    A premium, production-ready React Native / Expo boilerplate optimized for performance and developer experience.
    <br />
    <a href="https://github.com/Kimei-Global-Co/react-native-boilerplate/issues">Report Bug</a>
    ·
    <a href="https://github.com/Kimei-Global-Co/react-native-boilerplate/issues">Request Feature</a>
  </p>

  [![Contributors][contributors-shield]][contributors-url]
  [![Issues][issues-shield]][issues-url]
  [![License][license-shield]][license-url]
  [![LinkedIn][linkedin-shield]][linkedin-url]
  <a href="https://deepwiki.com/Kimei-Global-Co/react-native-boilerplate"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"  style="width: 134px; height: 28px;"></a>
  
  [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=kimei-global_react-native-boilerplate&metric=alert_status&token=c74190a55877630cbebcbbc5dc0b7842ef7a14c2)](https://sonarcloud.io/summary/new_code?id=kimei-global_react-native-boilerplate)
  [![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=kimei-global_react-native-boilerplate&metric=ncloc&token=c74190a55877630cbebcbbc5dc0b7842ef7a14c2)](https://sonarcloud.io/summary/new_code?id=kimei-global_react-native-boilerplate)
  [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=kimei-global_react-native-boilerplate&metric=code_smells&token=c74190a55877630cbebcbbc5dc0b7842ef7a14c2)](https://sonarcloud.io/summary/new_code?id=kimei-global_react-native-boilerplate)
</div>

<!-- TABLE OF CONTENTS -->
<details open>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#technical-excellence">Technical Excellence</a></li>
    <li><a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a>
      <ul>
        <li><a href="#folder-structure">Folder Structure</a></li>
      </ul>
    </li>
    <li><a href="#scripts">Available Scripts</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This React Native boilerplate is a comprehensive starter template designed to accelerate mobile app development using the **New Architecture**. It comes pre-configured with industry-standard tools and high-performance patterns.

### Key Features
* 🚀 **Expo SDK 55** & **React Native 0.83** with full TypeScript support.
* 📦 **Bun** integration for lightning-fast package management.
* 🧠 **Zustand** for lightweight and scalable state management.
* 📡 **TanStack Query (v5)** for robust server state and caching.
* 🗺️ **React Navigation (v7)** with typed navigation patterns.
* 🌍 **Lingui JS** for type-safe internationalization (i18n).
* 💅 **Theme-first Design** using design tokens and **Reanimated 4**.
* ⚡ **Performance Optimized** with FlashList, Reassure (Perf Testing), and Expo Atlas.
* 🛠️ **Modern Toolchain**: Biome (Linting & Formatting), Husky, Commitlint, and Danger JS.
* 📁 **Feature-based Architecture** for clean and scalable codebases.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![React Native][React-Native-badge]][React-Native-url]
[![Expo][Expo-badge]][Expo-url]
[![TypeScript][TypeScript-badge]][TypeScript-url]
[![Bun][Bun-badge]][Bun-url]
[![Zustand][Zustand-badge]][Zustand-url]
[![TanStack Query][Query-badge]][Query-url]
[![Biome][Biome-badge]][Biome-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technical Excellence

### ⚡ Performance & Quality
- **FlashList**: Highly optimized list rendering.
- **MMKV**: Super fast, synchronous key-value storage.
- **Reassure**: Performance regression testing for React Native components.
- **Expo Atlas**: Visualizer for bundle size and dependency analysis.
- **React Compiler**: Leverages the latest React 19 compilation features.

### 🛡️ Developer Experience (DX)
- **Biome**: 100x faster linting and formatting than ESLint/Prettier.
- **Plop Generators**: Scaffold components and stores with a single command.
- **Vision Camera 4**: Next-gen camera implementation with worklets.
- **Keyboard Controller**: Native performance keyboard handling.
- **Danger JS**: Automated code review feedback on Pull Requests.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
* **Node.js**: >= 20
* **Bun**: `npm install -g bun`
* **iOS**: Xcode & CocoaPods
* **Android**: Android Studio & SDK

### Installation

1. **Use `bun` (Recommended)**
   ```sh
   bun create expo my-app --template Kimei-Global-Co/react-native-boilerplate/tree/main/template
   ```

2. **Use `npx`**
   ```sh
   npx create-expo@latest my-app --template Kimei-Global-Co/react-native-boilerplate/tree/main/template
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

### Folder Structure
```
src/
├── assets/       # Static assets (images, fonts, icons)
├── components/   # Shared UI components (Atomic design)
├── features/     # Feature-driven modules (Logic + UI)
├── locale/       # Lingui i18n configuration & translations
├── navigation/   # Navigation stacks and route definitions
├── shared/       # Cross-feature hooks, utils, types, and services
└── theme/        # Design system (colors, typography, layout)
```

### Developing
```bash
# Start the development server
bun start

# Run on iOS
bun ios

# Run on Android
bun android
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Scripts

| Script | Description |
| :--- | :--- |
| `bun lint` | Run Biome linting checks |
| `bun intl:build` | Extract and compile translations |
| `bun perf-test` | Run Reassure performance tests |
| `bun bundle:visualizer` | Open Expo Atlas to analyze bundle |
| `bun plop` | Scaffold new components or modules |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Expo SDK 55 Integration
- [x] New Architecture Support
- [x] Zustand & TanStack Query Setup
- [x] Lingui JS Internationalization
- [x] Reassure Performance Testing
- [x] Biome DX Tooling
- [x] Auth Flow Template
- [ ] Push Notifications (Coming Soon)
- [ ] E2E Testing (Playwright/Maestro)
- [ ] Offline Synchronization Patterns

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Note**: Use `bun plop` to generate components and maintain consistent file structure.

### Top contributors:

<a href="https://github.com/Kimei-Global-Co/react-native-boilerplate/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Kimei-Global-Co/react-native-boilerplate" alt="top contributes image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the Unlicense License. See [`LICENSE`](./LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

<div align="center">
  <a href="https://kimei-global.com/">
    <img src="https://img.shields.io/badge/Website-kimei--global.com-5C2D91?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Website"/>
  </a>
  <a href="mailto:ducnmanh@kimei.vn">
    <img src="https://img.shields.io/badge/Email-ducnmanh@kimei.vn-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/>
  </a>
  <a href="https://linkedin.com/in/mduc-engineer/">
    <img src="https://img.shields.io/badge/LinkedIn-mduc--engineer-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/Kimei-Global-Co/react-native-boilerplate.svg?style=for-the-badge
[contributors-url]: https://github.com/Kimei-Global-Co/react-native-boilerplate/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/Kimei-Global-Co/react-native-boilerplate.svg?style=for-the-badge
[issues-url]: https://github.com/Kimei-Global-Co/react-native-boilerplate/issues
[license-shield]: https://img.shields.io/github/license/Kimei-Global-Co/react-native-boilerplate.svg?style=for-the-badge
[license-url]: https://github.com/Kimei-Global-Co/react-native-boilerplate/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/mduc-engineer/
[React-Native-badge]: https://img.shields.io/badge/React_Native-0.83-20232A?style=for-the-badge&logo=react
[React-Native-url]: https://reactnative.dev/
[Expo-badge]: https://img.shields.io/badge/Expo-55-000020?style=for-the-badge&logo=expo
[Expo-url]: https://expo.dev/
[TypeScript-badge]: https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Bun-badge]: https://img.shields.io/badge/Bun-1.x-f9f1e1?style=for-the-badge&logo=bun&logoColor=black
[Bun-url]: https://bun.sh/
[Zustand-badge]: https://img.shields.io/badge/Zustand-State-black?style=for-the-badge&logo=react
[Zustand-url]: https://github.com/pmndrs/zustand
[Query-badge]: https://img.shields.io/badge/TanStack_Query-5-FF4154?style=for-the-badge&logo=react-query&logoColor=white
[Query-url]: https://tanstack.com/query/latest
[Biome-badge]: https://img.shields.io/badge/Biome-DX-60A5FA?style=for-the-badge&logo=biome&logoColor=white
[Biome-url]: https://biomejs.dev/

