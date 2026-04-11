# React Native Best Practices Skill

Production patterns for React Native apps on the New Architecture, by [Software Mansion](https://swmansion.com/).

Add this skill to give your AI coding agent accurate, current guidance for Software Mansion's React Native libraries: Reanimated, Gesture Handler, React Native SVG, ExecuTorch, Audio API, and more.

## Sub-skills

| Sub-skill | Covers | Status |
|-----------|--------|--------|
| [Animations](./references/animations/) | Reanimated 4, CSS transitions, CSS animations, shared values, canvas animations (Skia), GPU shader animations (WebGPU, TypeGPU), layout animations, scroll-driven animations, SVG animations, 120fps, performance flags | Complete |
| [Gestures](./references/gestures/) | Gesture Handler: tap, pan, pinch, rotation, fling, hover, long press, Pressable, RectButton, Swipeable, DrawerLayout, gesture composition, testing | Complete |
| [SVG](./references/svg/) | React Native SVG: when to use vs expo-image/Skia/Lottie/Rive/fonts/WebView, installation, loading (URI/XML/file), touch events, filters, FilterImage, performance pitfalls, iOS memory leaks | Complete |
| [On-device AI](./references/on-device-ai/) | React Native ExecuTorch: LLMs (chat, tool calling, structured output, vision-language models), computer vision (classification, object detection, OCR, semantic/instance segmentation, style transfer, embeddings, text-to-image), speech (STT, TTS, VAD), VisionCamera real-time frame processing, model loading, resource management, error handling, custom models | Complete |
| [Rich Text](./references/rich-text/) | Rich text editing with react-native-enriched, Markdown rendering with react-native-enriched-markdown | Complete |
| [Multithreading](./references/multithreading/) | react-native-worklets: Worker Runtimes, scheduling APIs, shared memory, Serializable, Synchronizable | Complete |
| [Audio](./references/audio/) | React Native Audio API: playback (buffer sources, oscillators, streaming, queued playback), recording (file, data callback, graph processing), effects (gain, filters, delay, convolver, panner, waveshaper), analysis and visualization, worklets (custom processing, synthesis, UIRuntime/AudioRuntime), system integration (sessions, interruptions, notifications, permissions), testing | Complete |
| [Performance](./references/performance/) | JS performance, FPS, re-renders, FlatList, FlashList, React Compiler, atomic state, memory leaks, concurrent React, animations performance | Complete |
| [Bundle Size](./references/bundle-size/) | JS bundle analysis, tree shaking, barrel exports, app size, R8/ProGuard, Hermes mmap, code splitting, asset catalogs | Complete |
| [Native Profiling](./references/native-profiling/) | Native profiling (iOS/Android), TTI measurement, native memory leaks, Turbo Modules, threading model, View flattening, Android 16kb alignment | Complete |
**Complete** = full reference documentation with code examples.

## Structure

```
react-native-best-practices/
├── SKILL.md                              # Entry point: routing table for sub-skills
└── references/
    ├── animations/
    │   ├── SKILL.md                      # When to use, what references to read
    │   ├── animations.md                 # Decision tree, CSS transitions/animations, shared values
    │   ├── animation-functions.md        # Core hooks, withSpring, withTiming, withDecay, composition
    │   ├── layout-animations.md          # Entering/exiting, transitions, keyframes
    │   ├── scroll-and-events.md          # Scroll-driven animations, useAnimatedReaction, useFrameCallback
    │   ├── canvas-animations.md           # Skia canvas animations, path morphing, SKSL shaders, gesture integration
    │   ├── canvas-atlas.md                # Atlas batched sprite/tile animation, useTexture, useRSXformBuffer, RSXform
    │   ├── gpu-animations.md             # Shader animations, react-native-wgpu, TypeGPU, particles
    │   ├── svg-animations.md              # Animating SVG elements and paths with Reanimated
    │   └── animations-performance.md     # 120fps, feature flags, simultaneous animation limits
    ├── gestures/
    │   ├── SKILL.md                      # Version decision tree (v2 Builder vs v3 Hook API)
    │   ├── gestures.md                   # Decision tree, lifecycle, threading, SharedValue config
    │   ├── tap-handling.md               # RectButton, Pressable, tap, double-tap, hit slop
    │   ├── continuous-gestures.md        # Pan, Pinch, Rotation, LongPress, Fling, Hover
    │   ├── gesture-composition.md        # Simultaneous, Race, Exclusive, VirtualGestureDetector
    │   ├── swipeable-and-drawer.md       # ReanimatedSwipeable, ReanimatedDrawerLayout
    │   └── testing.md                    # Jest setup, fireGestureHandler, troubleshooting
    ├── svg/
    │   ├── SKILL.md                      # When to use react-native-svg vs alternatives
    │   ├── when-to-use.md               # Choosing between svg, expo-image, icons, Skia, Lottie
    │   └── svg.md                        # Installation, loading (URI/XML/file), touch events, filters, FilterImage, performance
    ├── on-device-ai/
    │   ├── SKILL.md                      # Decision tree, critical rules, references routing
    │   ├── llm.md                        # LLM chat (functional/managed), tool calling, structured output, token batching
    │   ├── vision.md                     # Classification, object detection, OCR, segmentation, style transfer, embeddings, VisionCamera
    │   ├── speech.md                     # Speech-to-text (batch/streaming), text-to-speech (batch/streaming), VAD
    │   └── setup.md                      # Installation, resource fetcher, model loading, error handling, custom models
    ├── rich-text/
    │   └── SKILL.md                      # Editor and renderer patterns, style customization
    ├── multithreading/
    │   ├── SKILL.md                      # Runtime model, API decision tree, critical rules
    │   ├── threading-api.md              # Scheduling APIs, Worker Runtimes, sync/async
    │   ├── shared-memory.md              # Closures, Serializable, Synchronizable
    │   └── setup-and-advanced.md         # Installation, Babel config, Bundle Mode, Jest
    ├── audio/
    │   ├── SKILL.md                      # When to use, what references to read
    │   ├── audio.md                      # Decision tree, AudioContext lifecycle, singleton, audio graph, decoding
    │   ├── playback.md                   # AudioBufferSourceNode, OscillatorNode, StreamerNode, queued playback, AudioParam, noise
    │   ├── recording.md                  # AudioRecorder modes (file, callback, graph), permissions, file formats
    │   ├── effects-and-analysis.md       # GainNode (ADSR), filters, delay, convolver, panner, AnalyserNode, visualization
    │   ├── worklets.md                   # WorkletNode, WorkletSourceNode, WorkletProcessingNode, runtimes, performance
    │   └── system-and-notifications.md   # AudioManager, sessions, interruptions, notifications, permissions, testing
    ├── performance/
    │   ├── SKILL.md                      # JS performance decision tree and metrics
    │   ├── js-lists-flatlist-flashlist.md # ScrollView vs virtualized lists
    │   ├── js-profile-react.md          # React DevTools profiling
    │   ├── js-measure-fps.md            # FPS monitoring
    │   ├── js-memory-leaks.md           # JS memory leak hunting
    │   ├── js-atomic-state.md           # Jotai/Zustand patterns
    │   ├── js-concurrent-react.md        # Concurrent features
    │   ├── js-react-compiler.md         # Automatic memoization
    │   ├── js-animations-reanimated.md  # Reanimated worklets performance
    │   └── js-uncontrolled-components.md # TextInput optimization
    ├── bundle-size/
    │   ├── SKILL.md                      # Bundle analysis and size reduction
    │   ├── bundle-barrel-exports.md      # Barrel imports optimization
    │   ├── bundle-analyze-js.md         # JS bundle visualization
    │   ├── bundle-tree-shaking.md        # Dead code elimination
    │   ├── bundle-analyze-app.md        # App size analysis
    │   ├── bundle-r8-android.md         # Android code shrinking
    │   ├── bundle-hermes-mmap.md        # Bundle compression
    │   ├── bundle-native-assets.md       # Asset catalogs
    │   ├── bundle-library-size.md       # Dependency evaluation
    │   └── bundle-code-splitting.md      # Re.Pack code splitting
    └── native-profiling/
        ├── SKILL.md                      # Native profiling and TTI
        ├── native-turbo-modules.md       # Fast native modules
        ├── native-sdks-over-polyfills.md # Native vs JS libs
        ├── native-measure-tti.md         # TTI measurement
        ├── native-threading-model.md     # Turbo Module threads
        ├── native-profiling.md           # Xcode/Android profiling
        ├── native-platform-setup.md      # Platform tooling
        ├── native-view-flattening.md     # View hierarchy
        ├── native-memory-patterns.md     # Native memory models
        ├── native-memory-leaks.md        # Native leak hunting
        └── native-android-16kb-alignment.md # Play Store alignment
```

## Adding a Sub-skill

1. **Create the directory**: `references/<your-topic>/`
2. **Write `SKILL.md`** with frontmatter:
   ```yaml
   ---
   name: your-topic
   description: "What it covers and when to trigger. Include specific keywords users might type."
   ---
   ```
3. **Add reference files** for detailed patterns and code examples
4. **Register it** in the parent `SKILL.md` sub-skills table
5. **Keep SKILL.md under 500 lines**. Move detailed content to reference files and link to them with a "when to read" table.

## Libraries Covered

- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) (v4, New Architecture)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)
- [React Native SVG](https://github.com/software-mansion/react-native-svg)
- [React Native Worklets](https://docs.swmansion.com/react-native-worklets/)
- [React Native ExecuTorch](https://docs.swmansion.com/react-native-executorch/)
- [React Native Audio API](https://docs.swmansion.com/react-native-audio-api/)
- [React Native Enriched](https://github.com/software-mansion/react-native-enriched)
- [React Native WGPU](https://github.com/software-mansion/react-native-wgpu) / [TypeGPU](https://docs.swmansion.com/TypeGPU/)
