---
name: performance
description: "React Native JavaScript performance, FPS, re-renders, and memory management. Use for: FlatList/FlashList, React Compiler, atomic state, uncontrolled components, memory leaks."
---

# JS Performance & FPS

Optimization guide for the JavaScript thread and React rendering.

## Quick Reference

| Problem | Start With |
|---------|------------|
| App feels slow/janky | `js-measure-fps.md` → `js-profile-react.md` |
| Too many re-renders | `js-profile-react.md` → `js-react-compiler.md` |
| List scroll jank | `js-lists-flatlist-flashlist.md` |
| TextInput lag | `js-uncontrolled-components.md` |
| Memory growing (JS) | `js-memory-leaks.md` |

## References

| File | Impact | Description |
|------|--------|-------------|
| [js-lists-flatlist-flashlist.md](./js-lists-flatlist-flashlist.md) | CRITICAL | Replace ScrollView with virtualized lists |
| [js-profile-react.md](./js-profile-react.md) | MEDIUM | React DevTools profiling |
| [js-measure-fps.md](./js-measure-fps.md) | HIGH | FPS monitoring and measurement |
| [js-memory-leaks.md](./js-memory-leaks.md) | MEDIUM | JS memory leak hunting |
| [js-atomic-state.md](./js-atomic-state.md) | HIGH | Jotai/Zustand patterns |
| [js-concurrent-react.md](./js-concurrent-react.md) | HIGH | useDeferredValue, useTransition |
| [js-react-compiler.md](./js-react-compiler.md) | HIGH | Automatic memoization |
| [js-animations-reanimated.md](./js-animations-reanimated.md) | MEDIUM | Reanimated worklets |
| [js-uncontrolled-components.md](./js-uncontrolled-components.md) | HIGH | TextInput optimization |
