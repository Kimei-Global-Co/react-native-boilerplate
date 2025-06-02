<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://kimei.vn/">
    <img src="images/logo.png" alt="Logo">
  </a>

  <h3 align="center">This project was developed by KIMEI Global</h3>

  [![Contributors][contributors-shield]][contributors-url]
  [![Issues][issues-shield]][issues-url]
  [![License][license-shield]][license-url]
  [![LinkedIn][linkedin-shield]][linkedin-url]
  <a href="https://deepwiki.com/Kimei-Global-Co/react-native-boilerplate"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"  style="width: 134px; height: 28px;"></a>
  
  [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=kimei-global_react-native-boilerplate&metric=alert_status&token=c74190a55877630cbebcbbc5dc0b7842ef7a14c2)](https://sonarcloud.io/summary/new_code?id=kimei-global_react-native-boilerplate)
  [![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=kimei-global_react-native-boilerplate&metric=ncloc&token=c74190a55877630cbebcbbc5dc0b7842ef7a14c2)](https://sonarcloud.io/summary/new_code?id=kimei-global_react-native-boilerplate)
  [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=kimei-global_react-native-boilerplate&metric=code_smells&token=c74190a55877630cbebcbbc5dc0b7842ef7a14c2)](https://sonarcloud.io/summary/new_code?id=kimei-global_react-native-boilerplate)
  [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=kimei-global_react-native-boilerplate&metric=sqale_rating&token=c74190a55877630cbebcbbc5dc0b7842ef7a14c2)](https://sonarcloud.io/summary/new_code?id=kimei-global_react-native-boilerplate)
  [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=kimei-global_react-native-boilerplate&metric=security_rating&token=c74190a55877630cbebcbbc5dc0b7842ef7a14c2)](https://sonarcloud.io/summary/new_code?id=kimei-global_react-native-boilerplate)
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact-">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This React Native boilerplate is a comprehensive starter template designed to accelerate your mobile app development process. It comes pre-configured with essential tools and best practices that every modern React Native project needs.

Key features include:
* 🚀 Latest React Native version with TypeScript support
* 📱 Expo integration for rapid development and easy deployment
* 🎨 Pre-configured theming and styling system
* 🔐 Authentication flow template
* 📡 API integration setup with Ky
* 🗄️ State management with Redux Toolkit
* 📱 Navigation setup with React Navigation
* 🧪 Testing environment with Jest
* 💅 Code quality tools (ESLint, Prettier, Husky)
* 📁 Scalable project structure
* 🔄 CI/CD setup with GitHub Actions

This boilerplate saves you days of initial setup and configuration, allowing you to focus on building your app's unique features right from the start.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

[![React][React.js]][React-url]
[![React Native][React Native]][React Native-url]
[![Expo]][Expo-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

These instructions will help you set up the project locally.

### Prerequisites

Make sure you have the following installed:

* Node.js (18 or newer)
* Use `bun`
* iOS development environment (for iOS):
  - **Xcode (latest version)**
  - **CocoaPods**
* Android development environment (for Android):
  - **Android Studio**
  - **Android SDK**

### Installation

1. **Use `bun` <mark>[Recommended]</mark>**

- Must installed **bun** before.

   ```sh
   bun create expo **your-project-name** --template Kimei-Global-Co/react-native-boilerplate/tree/main/template
   ```

2. **Use `npm`**

   ```sh 
   npx create-expo-app@latest **your-project-name** --template Kimei-Global-Co/react-native-boilerplate/tree/main/template
   ```

3. **Use `yarn`**
   ```sh 
   yarn create expo-app **your-project-name** --template Kimei-Global-Co/react-native-boilerplate/tree/main/template
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Usage

After installation, you can:

1. Start development server:
```bash
cd your-project-name
bun start
```

2. Run on specific platform:
```bash
# iOS
bun ios

# Android
bun android
```

3. Follow our folder structure:
```
src/
├── api/          # API services, endpoints
├── assets/       # Images, fonts, etc.
├── components/   # Reusable components
├── navigation/   # Navigation configurations
├── screens/      # Screen components
├── store/        # Redux store, slices
├── theme/        # Theme configurations
└── utils/        # Helper functions
```

_For detailed documentation, please refer to our [Wiki](https://github.com/Kimei-Global-Co/react-native-boilerplate/wiki)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Project structure setup
- [x] TypeScript configuration
- [x] Navigation system
- [ ] State management
- [x] API integration
- [ ] Theming system
- [ ] Authentication flow template
- [ ] Offline storage
- [ ] Push notifications
- [ ] CI/CD pipeline
- [ ] E2E testing
- [ ] Performance optimization guides

See the [open issues](https://github.com/Kimei-Global-Co/react-native-boilerplate/issues) for a full list of proposed features and known issues.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

We welcome contributions to make this boilerplate even better! Here's how you can help:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/amazing-feature`)
3. Follow our coding standards
4. Add proper documentation
5. Add tests if needed
6. Commit your Changes (`git commit -m 'feat: add amazing feature'`)
7. Push to the Branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request with detailed description

### Using the Generator

When contributing new components, use our Plop generator to maintain consistency:

```bash
bun plop # Generate project files
```

The generator enforces our conventions:
- Component names in kebab-case (e.g., `my-component`)
- Standard file structure:
  ```
  my-component/
  ├── my-component.tsx
  ├── my-component.styles.ts
  └── my-component.types.ts
  ```

Please make sure to follow our [Code of Conduct](./CODE_OF_CONDUCT.md) and [Contributing Guidelines](./CONTRIBUTING.md).

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
## Contact 📱

We'd love to hear from you! Here's how you can reach us:

<div align="center">
  <a href="https://kimei.vn/get-in-touch">
    <img src="https://img.shields.io/badge/Website-kimei.vn-blue?style=for-the-badge&logo=html5" alt="Website Badge"/>
  </a>
  <a href="mailto:info@kimei.vn">
    <img src="https://img.shields.io/badge/Email-info@kimei.vn-red?style=for-the-badge&logo=gmail" alt="Email Badge"/>
  </a>
  <a href="https://www.linkedin.com/company/kimei-global">
    <img src="https://img.shields.io/badge/LinkedIn-KIMEI_Global-blue?style=for-the-badge&logo=linkedin" alt="LinkedIn Badge"/>
  </a>
</div>

<div align="center">
  <br />
  <strong>🌟 Have a project in mind? Let's build something amazing together! 🌟</strong>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Kimei-Global-Co/react-native-boilerplate.svg?style=for-the-badge
[contributors-url]: https://github.com/Kimei-Global-Co/react-native-boilerplate/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/Kimei-Global-Co/react-native-boilerplate.svg?style=for-the-badge
[issues-url]: https://github.com/Kimei-Global-Co/react-native-boilerplate/issues
[license-shield]: https://img.shields.io/github/license/Kimei-Global-Co/react-native-boilerplate.svg?style=for-the-badge
[license-url]: https://github.com/Kimei-Global-Co/react-native-boilerplate/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/mduc-dev
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React Native]: https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[React Native-url]: https://reactnative.dev/
[Expo]: https://img.shields.io/badge/Expo-20232A?style=for-the-badge&logo=expo
[Expo-url]: https://docs.expo.dev/
