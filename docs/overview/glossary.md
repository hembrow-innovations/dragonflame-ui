---
id: glossary
title: Glossary
kind: overview
domain: ui-framework
area: overview
tags: [overview]
created_at: "2026-09-09"
updated_at: "2026-09-11"
---

# Glossary

Proposed language for this UI-framework idea. These names come from the scribble unless a sitting locked them. They are not locked ADRs. Vault layout is [[overview-vault]]. The idea is [[overview-ui-framework]]. The proposed stack is [[architecture-layer-cake]].

## Product

**dragonflame-ui**:
Working product name, checkout folder, git package name, and GitHub repo for this UI framework.
_Avoid_: Draconflame UI, dragons-egg, Flamework UI

## Language

### Stack

**Framework library**:
Proposed Draconic library of components, signals, layout policy, gestures, and animation clocks. Flutter's `package:flutter` role, not the Dart VM.
_Avoid_: Engine, Runtime, widget toolkit as a Rust crate

**Engine**:
Proposed Rust, native-only graphics stack: raster, glyphs, images, compositing, vsync client, GPU surface. Not the language Runtime.
_Avoid_: Runtime, Embedder, JS renderer, Flutter Engine as a product dependency

**Embedder**:
Proposed per-OS host for the window, GPU surface, vsync, input, IME, clipboard, and accessibility. No WebView. No JS engine.
_Avoid_: Engine, Runtime, WebView shell

**Runtime**:
Language tracing GC, job queue, promises, and timers. On native, a frame callback is a job on that queue. Not graphics. No JS engine means no Hermes, JSC, or V8, not the absence of this Runtime.
_Avoid_: Engine, JS interpreter, VM, Hermes, "no JavaScript at runtime" as a slogan that throws away GC

**Renderer portability API**:
Proposed thin Draconic surface between portable UI code and a host. Native path uses `extern "C"` and unboxed numbers and structs. Web path uses JS-only DOM bindings. Wrong-target use hard-errors.
_Avoid_: platform channel, JSI, Host I/O as a browser

**Host**:
A compile target that mounts leaf primitives. Web host is DOM only. Native default, if funded, is a canvas engine path. OEM views are an escape hatch.
_Avoid_: WebView as native, WASM as the web host, web canvas, OEM widgets as the native default

### Authoring

**Component**:
A function that runs once, creates signals, and returns a tree. React-like to read. Not a class component and not a React function that re-runs on every state change.
_Avoid_: Widget, Element, Fiber node, class component

**Signal**:
Proposed UI reactivity primitive: an object with `get` and `set`. `get` subscribes. `set` notifies. Host process SIGINT and SIGTERM are not this. Prefer `ui.Signal` in prose.
_Avoid_: setState, React state hook, host SIGINT, naming `signal` at the host-API level

**Owner**:
Proposed ownership node for effects and nested reactive scopes. Unmount disposes effects and nested owners.
_Avoid_: React Fiber, Flutter Element dirty flag

**Hyperscript**:
First authoring form: `h(type, props)` calls. There is no JSX in Draconic today. JSX later would be sugar for the same calls, and remains a later human decision.
_Avoid_: JSX as a present language feature

### Trees

**Render object**:
A retained layout, paint, and hit-test node. Components write properties onto it rather than recreating it each frame.
_Avoid_: virtual DOM node, Flutter Widget as the retained node

**Gesture arena**:
Competing pointer recognizers. First tracer is `GestureArena` with `add`, `close`, and `sweep`. Embedder owns input. Framework decides the winner.
_Avoid_: DOM event bubbling as the native gesture model, UIKit `require(toFail:)`

**TapGestureRecognizer**:
First-tracer tap recognizer. Pressable joins when `onPress` is set.
_Avoid_: `onTap` as the app callback, a required `GestureDetector` widget

**HorizontalDragGestureRecognizer**:
First-tracer competitor against tap.
_Avoid_: `UIPanGestureRecognizer`, scroll as this recognizer this tracer

**Semantics tree**:
Accessibility tree beside the render tree. First tracer dumps `SemanticsNode` with `toStringDeep`. Embedder owns plumbing.
_Avoid_: ARIA-only DOM as the native a11y model, `UIAccessibility` as the product API

**SemanticsNode**:
Framework node in the semantics tree. Reuses `testID` and `accessibilityLabel`.
_Avoid_: a second native a11y prop set, RN `AccessibilityInfo`

**measureText**:
Per-host text metrics seam. Sizes may disagree across DOM, UIKit, and the engine.
_Avoid_: CSS as iOS layout, `Paragraph.layout`, `TextPainter`

**loadFont**:
Font load on the IO thread.
_Avoid_: font load on the UI thread

**Store packaging**:
Packaged binary hanging off thin Xcode and Gradle shells. Updates are new binaries, not Expo-style OTA of a JS bundle.
_Avoid_: naming App Store, Play, IPA, AAB, or APK as product names this tracer

### Worlds

**Dual worlds**:
In this tree, component props and JS objects live on the GC heap. Layout sizes, matrices, and colors can be unboxed native scalars on LLVM. This note does not redefine the toolchain dual-worlds ADR.
_Avoid_: throwing away GC to satisfy "no JavaScript at runtime"
