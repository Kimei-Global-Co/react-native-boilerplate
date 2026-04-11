---
name: native-profiling
description: "Native performance profiling and optimization for iOS and Android. Use for: TTI measurement, memory leaks, Turbo Modules, threading model, 16kb alignment."
---

# Native Performance & Profiling

Optimization guide for native code, startup time (TTI), and platform-specific performance.

## Quick Reference

| Problem | Start With |
|---------|------------|
| Slow startup (TTI) | `native-measure-tti.md` |
| Native module slow | `native-turbo-modules.md` → `native-threading-model.md` |
| Memory growing (Native) | `native-memory-leaks.md` |
| Android alignment issue | `native-android-16kb-alignment.md` |

## References

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
