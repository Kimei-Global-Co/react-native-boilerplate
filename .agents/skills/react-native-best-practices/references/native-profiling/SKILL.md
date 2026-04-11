---
name: native-profiling
description: Native performance and profiling (TTI, memory). Use for: Turbo Modules, threading model, 16kb alignment.
---

# Native Performance & Profiling

Optimization guide for native code, startup time (TTI), and platform profiling.

## Priority Guidelines (Native)

| Priority | Category | Impact | Prefix |
|----------|----------|--------|--------|
| 1 | Native Alignment | CRITICAL | `native-android-16kb` |
| 2 | Startup Time (TTI) | HIGH | `native-measure-tti` |
| 3 | Turbo Modules | HIGH | `native-turbo-modules`|
| 4 | Threading Model | HIGH | `native-threading` |
| 5 | Native Profiling | MEDIUM | `native-profiling` |

## Quick Reference: Native & Startup

### Optimization Workflow
- **Measure**: Use Xcode Instruments (Time Profiler) or Android Studio CPU Profiler.
- **TTI**: Use `react-native-performance` markers; measure only cold starts.
- **Views**: Check view flattening to reduce depth of native view hierarchy.

### Common Native Fixes
- **Async Modules**: Prefer async over sync Turbo Module methods to keep JS thread free.
- **Threading**: Offload heavy computations to background threads or use JSI with C++.
- **Navigation**: Use native navigation libraries (e.g., `react-native-screens`).
- **Android**: Disable JS bundle compression to allow Hermes mmap for faster loading.

## References (Native)

| File | Impact | Description |
|------|--------|-------------|
| [native-turbo-modules.md](./native-turbo-modules.md) | HIGH | Building fast native modules |
| [native-sdks-over-polyfills.md](./native-sdks-over-polyfills.md) | HIGH | Native vs JS libraries |
| [native-measure-tti.md](./native-measure-tti.md) | HIGH | TTI measurement setup |
| [native-threading-model.md](./native-threading-model.md) | HIGH | Turbo Module threads |
| [native-profiling.md](./native-profiling.md) | MEDIUM | Xcode/Android Studio profiling |
| [native-platform-setup.md](./native-platform-setup.md) | MEDIUM | iOS/Android tooling guide |
| [native-view-flattening.md](./native-view-flattening.md) | MEDIUM | View hierarchy debugging |
| [native-memory-patterns.md](./native-memory-patterns.md) | MEDIUM | C++/Swift/Kotlin memory |
| [native-memory-leaks.md](./native-memory-leaks.md) | MEDIUM | Native memory leak hunting |
| [native-android-16kb-alignment.md](./native-android-16kb-alignment.md) | CRITICAL | Third-party library alignment for Google Play |

## Problem Mapping

| Problem | Start With |
|---------|------------|
| Slow startup (TTI) | [native-measure-tti.md](./native-measure-tti.md) |
| Native module slow | [native-turbo-modules.md](./native-turbo-modules.md) |
| Memory growing (Native) | [native-memory-leaks.md](./native-memory-leaks.md) |
| Android alignment issue | [native-android-16kb-alignment.md](./native-android-16kb-alignment.md) |

---
*Based on "The Ultimate Guide to React Native Optimization" by Callstack.*
