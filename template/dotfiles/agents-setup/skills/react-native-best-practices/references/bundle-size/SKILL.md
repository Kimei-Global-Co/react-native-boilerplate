---
name: bundle-size
description: RN bundle and app size optimization. Use for: bundle analysis, tree shaking, barrel exports, R8.
---

# Bundle & App Size

Optimization guide for reducing JS bundle and binary application size.

## Priority Guidelines (Bundle)

| Priority | Category | Impact | Prefix |
|----------|----------|--------|--------|
| 1 | Barrel Exports | CRITICAL | `bundle-barrel` |
| 2 | JS Bundle Analysis | CRITICAL | `bundle-analyze-js` |
| 3 | Tree Shaking | HIGH | `bundle-tree-shaking`|
| 4 | Native Shrinking (R8)| HIGH | `bundle-r8` |
| 5 | Asset Management | HIGH | `bundle-native-assets` |

## Quick Reference: Size Reduction

### Analyze Methods
- **JS Bundle**: Use `npx source-map-explorer` to visualize weight.
- **App Size**: Use Android Studio (Build > Analyze APK) or Xcode (App Size Report).

### Common Size Fixes
- **Imports**: Avoid barrel imports (e.g., `import { X } from './components'`) to enable effective tree shaking.
- **Android**: Always enable **R8/ProGuard** for release builds.
- **Polyfills**: Remove unnecessary `Intl` polyfills if using Hermes (which includes many Intl APIs).
- **Libraries**: Evaluate heavy dependencies using `bundle-visualizer`.
- **Code Splitting**: Use **Re.Pack** for large apps that need remote chunks.

## References (Bundle)

| File | Impact | Description |
|------|--------|-------------|
| [bundle-barrel-exports.md](./bundle-barrel-exports.md) | CRITICAL | Avoid barrel imports |
| [bundle-analyze-js.md](./bundle-analyze-js.md) | CRITICAL | JS bundle visualization |
| [bundle-tree-shaking.md](./bundle-tree-shaking.md) | HIGH | Dead code elimination |
| [bundle-analyze-app.md](./bundle-analyze-app.md) | HIGH | App size analysis |
| [bundle-r8-android.md](./bundle-r8-android.md) | HIGH | Android code shrinking |
| [bundle-hermes-mmap.md](./bundle-hermes-mmap.md) | HIGH | Disable bundle compression |
| [bundle-native-assets.md](./bundle-native-assets.md) | HIGH | Asset catalog setup |
| [bundle-library-size.md](./bundle-library-size.md) | MEDIUM | Evaluate dependencies |
| [bundle-code-splitting.md](./bundle-code-splitting.md) | MEDIUM | Re.Pack code splitting |

## Problem Mapping

| Problem | Start With |
|---------|------------|
| Large JS bundle | [bundle-analyze-js.md](./bundle-analyze-js.md) |
| Large app binary | [bundle-analyze-app.md](./bundle-analyze-app.md) |
| Slow JS loading | [bundle-hermes-mmap.md](./bundle-hermes-mmap.md) |

---
*Based on "The Ultimate Guide to React Native Optimization" by Callstack.*
