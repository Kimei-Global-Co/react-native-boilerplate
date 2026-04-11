---
name: performance
description: React Native JS performance (FPS, re-renders). Use for: FlashList, React Compiler, atomic state, memory leaks.
---

# JS Performance & FPS

Optimization guide for the JavaScript thread and React rendering.

## Priority Guidelines (JS)

| Priority | Category | Impact | Prefix |
|----------|----------|--------|--------|
| 1 | List Virtualization | CRITICAL | `js-lists` |
| 2 | Automatic Memoization| HIGH | `js-react-compiler` |
| 3 | State Management | HIGH | `js-atomic-state` |
| 4 | Concurrent Features | HIGH | `js-concurrent` |
| 5 | FPS Monitoring | HIGH | `js-measure-fps` |

## Quick Reference: JS & Rendering

### Review Guardrails
- Do not suggest `useMemo`/`useCallback` unless profiling shows significant wasted work.
- Favor `FlashList` over `FlatList` for complex lists.
- Avoid stale closures in callbacks by using proper dependency arrays or functional updates.

### Common JS Fixes
- **Lists**: Replace `ScrollView` with `FlashList` for heavy lists.
- **Memoization**: Use **React Compiler** for automatic optimization.
- **State**: Use atomic state (**Jotai**/**Zustand**) to minimize re-render scope.
- **Background**: Use `useDeferredValue` for expensive computations to avoid blocking the UI.

## References (JS)

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
| [js-bottomsheet.md](./js-bottomsheet.md) | HIGH | Bottom sheet optimization |
| [js-uncontrolled-components.md](./js-uncontrolled-components.md) | HIGH | TextInput optimization |

## Problem Mapping

| Problem | Start With |
|---------|------------|
| App feels slow/janky | [js-measure-fps.md](./js-measure-fps.md) |
| Too many re-renders | [js-profile-react.md](./js-profile-react.md) |
| List scroll jank | [js-lists-flatlist-flashlist.md](./js-lists-flatlist-flashlist.md) |
| Bottom sheet jank | [js-bottomsheet.md](./js-bottomsheet.md) |

---
*Based on "The Ultimate Guide to React Native Optimization" by Callstack.*
