---
id: glossary
title: Glossary
kind: overview
domain: ui-framework
area: overview
tags: [overview]
created_at: "2026-09-09"
updated_at: "2026-09-09"
---

# Glossary

Proposed language for this UI-framework idea. These names come from the scribble unless a sitting locked them. They are not locked ADRs. Vault layout is [[overview-vault]]. The idea is [[overview-ui-framework]]. The proposed stack is [[architecture-layer-cake]].

## Product

**Draconflame UI**:
Working product name for this UI framework. The checkout folder remains dragons-egg. The git package name is draconflame-ui.
_Avoid_: Flamework UI, treating the folder name as the product name

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
Proposed model of competing recognizers for pointer input. Not DOM `stopPropagation` as the native model.
_Avoid_: DOM event bubbling as the native gesture model

**Semantics tree**:
Proposed accessibility tree beside the render tree.
_Avoid_: ARIA-only DOM as the native a11y model

### Worlds

**Dual worlds**:
In this tree, component props and JS objects live on the GC heap. Layout sizes, matrices, and colors can be unboxed native scalars on LLVM. This note does not redefine the toolchain dual-worlds ADR.
_Avoid_: throwing away GC to satisfy "no JavaScript at runtime"
