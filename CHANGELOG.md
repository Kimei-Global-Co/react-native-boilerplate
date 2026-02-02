# Changelog

## 2026-02-02

### ✨ Features
* update dotfiles VS Code settings to use biome as the default formatter for jsonc files ([66d19ce](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/66d19cefd261fc2eaa4e93bb7964eb02a4530431))
* add new UI components including Row, Skeleton, Spacer, Spinner, Switch, Tag, and Typography ([9229ea6](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/9229ea6a123edbef0765f83deede0282a55adfeb))

### 🔨 Chores
* update changelog [skip ci] ([768d0bc](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/768d0bc34dc50ab9dd3af5d294045c15ba2119fb))

## 2026-02-01

### 🔨 Chores
* update changelog [skip ci] ([bf62fad](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/bf62fad742a6a2b78a285fdcca2dc2d90e4ee55d))

### ✨ Features
* re-write component @button, replace api runOnJS from  react-native-reanimated deprecated on @switch ([58d1abd](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/58d1abd713f959bdd0d005e64232630bda51c9cc))
* add VS Code settings for biome formatter and update eas.json for build profiles ([75e00e8](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/75e00e8415953632d8f9268522a1f15b48380523))

## 2026-01-31

### 🔨 Chores
* update changelog [skip ci] ([f3d27d5](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/f3d27d5bb7d981aac11035d02d2ca0d0f2f358e7))
* update dependecies, remove patch files ([23e81c4](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/23e81c44b75278156135e6d073cc49e9e32af7c0))
* skip ci when actor is github-actions[bot] ([361649d](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/361649db4752902312c73625b6c0dea448a0bde0))
* update changelog ([9af49ad](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/9af49ad34579291b907fe49a15ac0ef8a543cf93))

### 🐛 Bug Fixes
* require pull request on update changelog ([d305097](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/d305097f9d0e5f7424c4ade18e224956f1e75071))

### ✨ Features
* add more skill agent ([c8aab60](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/c8aab60539dd2a6cb29c03f67caae741b3b5f764))

## 2026-01-30

### 🔨 Chores
* add configuration files for environment, gitignore, husky, and VSCode settings ([073b775](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/073b775276d9a9a9fe5041b0afe6044f236f6e01))
* move **_`@utils/types.ts`_** to individual type files in **_`types`_** folder ([979e34c](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/979e34c4bcb6b06fd9d006c55a283a1f37ade420))
* add agent skills ([b3a1ab0](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/b3a1ab0265e7dc98c3c986fceb38fbe243816072))

### ♻️ Code Refactoring
* remove clean-up script and update package.json accordingly ([5bd1bfe](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/5bd1bfeddfffd9359a8eb4630ec03d0fd8c09a96))

### 🐛 Bug Fixes
* update import statements to use 'import type' syntax for better clarity ([317246f](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/317246fca43b35671a32176a596fb197b80c5d66))
* nested configuration biome ([3c6dfe6](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/3c6dfe6d8fbf6d1dd5a4f07bfcacb1dbda0cc8a1))
* config path of biome lsp not found ([bb5764c](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/bb5764c6085fb8e426034c48fddcb9a2d01bfac8))

### ✨ Features
* enhance cleanup script and README, add automated PR workflow ([06e93c7](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/06e93c7635c02b201bcb451b4e5f4f9253992e1f))

## 2025-08-11

### ✨ Features
* add new plugins for MMKV and network activity tracking ([9cc44a6](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/9cc44a68b39e9c7a2ba8d231e11e92842e90aca2))

## 2025-08-08

### ✨ Features
* integrate Rozenite metro plugin and update dependencies ([791bfec](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/791bfec046a8ec253f221233d8ba54d08292623e))

## 2025-08-06

### ♻️ Code Refactoring
* replace Text component with Typography across the application ([3ec3d0a](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/3ec3d0aae9295e21ca124aa2f527d9fa44e9a90f))
* update project structure and dependencies ([375597a](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/375597adc1965e7d9d134196e836b58f2c492e1a))

## 2025-06-05

### 🐛 Bug Fixes
* delete 'mode' at card component, because it's unnessacry ([dbe7ae8](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/dbe7ae80e19ae840d82c74738ee32510b4580bfa))

## 2025-06-04

### ✨ Features
* write example for components, not including lingui and typoraphy ([3c14f03](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/3c14f03abede8eb3a1c0c6622baf6b13d81cdb1c))

## 2025-06-02

### 🐛 Bug Fixes
* component text-input, accodion, remove image unneeded ([5d4cbdf](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/5d4cbdfbc61ca3e7f47c95a4fea6801874744a06))

### ✨ Features
* add EAS configuration and update metro config for Lingui support ([e0531f4](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/e0531f4f950ce34cea69a2b9c6ed06658d10755d))

## 2025-05-29

### ✨ Features
* implement header, list, text, text-input, icon, keyboard dismiss ([fe4e7f3](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/fe4e7f388a5c72b2622bcf55dab0d0703bfbbdca))
* Implement component button,text, spinner, spacer, card, empty view ([4bd5b0b](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/4bd5b0b422c77962a82502b67e845ad162b6f954))

## 2025-05-28

### ✨ Features
* Add GitHub Actions for Bun setup, SonarQube scanning, and performance stability checks ([7113d43](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/7113d43fe3541eced131378e43e2e4438f375bb2))
* block, avatar, accodion, row, image component ([dfa7180](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/dfa71806b2e2711bd2f1475c2ecadd7d97a62500))

## 2025-05-22

### 🐛 Bug Fixes
* move file sonar-project.properties to root project ([9992b5d](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/9992b5de0dda77a1dcc5018cfc1458f9f3ba2a23))
* change organization and key project name ([06a3af5](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/06a3af588b977687716a516a3d58d650ee60a01f))

## 2025-05-21

### ✨ Features
* implement Plop generator for creating components and stores ([c64336f](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/c64336fac7cb808ee55265e594192ffaaeaaf361))
* add component generate for plop ([37f57fc](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/37f57fcde34e7c478ed73970d0a45533684ada7d))
* integrate navigation & api ([0897f30](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/0897f303991f9adb4cc8946fdacd1b9e257eca4e))

## 2025-05-15

### 🐛 Bug Fixes
* update template URLs in installation commands in README ([330fe87](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/330fe875ae9ae5bb8ad8b6ee9f30fd5bf385d49d))
* update logo image and installation commands in README ([1c421e0](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/1c421e0d7b966ab10812dcbbf37b6fee231e1d31))

### ✨ Features
* restructure project with new boilerplate setup and essential files ([3b9ceca](https://github.com/Kimei-Global-Co/react-native-boilerplate/commit/3b9ceca68c864c239d30e51966b4dffe5032830b))

