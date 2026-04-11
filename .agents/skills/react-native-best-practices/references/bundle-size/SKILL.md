---
name: bundle-size
description: "React Native bundle and app size optimization. Use for: bundle analysis, tree shaking, barrel exports, R8/ProGuard, Hermes mmap."
---

# Bundle & App Size

Optimization guide for reducing the JavaScript bundle size and overall application binary size.

## Quick Reference

| Problem | Start With |
|---------|------------|
| Large JS bundle | `bundle-analyze-js.md` → `bundle-tree-shaking.md` |
| Large app binary | `bundle-analyze-app.md` → `bundle-r8-android.md` |
| Slow JS loading | `bundle-hermes-mmap.md` |

## References

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
