---
id: overview-ui-framework
title: UI framework idea
kind: overview
domain: ui-framework
area: overview
tags: [overview]
created_at: "2026-09-09"
updated_at: "2026-09-09"
---

# UI framework idea

Cold-reader orientation. This is a proposed idea, not a locked product and not an ADR. Terms live in [[glossary]]. The proposed stack is [[architecture-layer-cake]]. Vault layout is [[overview-vault]].

The working folder name is dragons-egg. The working product name is an open question.

## What this is

Proposed shape: one app language, one component model, two compile targets.

- **Web**: Frontend to shared IR to the JS backend. The browser runs that JavaScript. Not WebAssembly. Not an extra VM.
- **Native**: Frontend to the same IR to LLVM. A real binary, linked with the Runtime, a Rust engine, and a platform embedder. No Hermes, no JavaScriptCore, no V8, no WKWebView.

The Framework library (components, signals, layout policy, gestures, animation clocks) is proposed in Draconic. The Engine that talks to Metal, Vulkan, text, images, and the GPU is proposed in Rust. The Embedder is per OS. Terms are in [[glossary]].

Authoring is proposed as React-like to read: function components, props in, children in. Reactivity is proposed as Leptos and Solid-like Signal graphs: a component function runs once, creates signals, and returns a tree. Later writes flow through the graph. No virtual DOM. No Fiber. No hooks. No class components for UI.

There is no JSX in Draconic today. Proposed first authoring is Hyperscript: `h(type, props)`. JSX later would be sugar for the same calls, erased before IR, and is a human decision. That choice is still an open product question below.

Native Draconic still has a tracing GC for language values. That is not a JavaScript interpreter. What "no JS runtime on native" means, given that GC, is an open product question. Do not throw the GC away to satisfy a slogan.

## What to copy and reject

Summary only. Not a schedule. Not an ADR.

### Flutter, copy the architecture

- **Three-way split**: framework in the app language, engine in a systems language, embedder per OS.
- **Composition**: nested children, not subclassing Button into PrimaryButton.
- **Immutable config plus retained render objects**: cheap component configs; render objects persist for layout, paint, and hit-test.
- **Pipeline, layers, input, a11y**: build then layout then paint then composite then raster; a layer tree; a gesture arena; vsync tickers; a semantics tree beside the render tree.
- **Single UI thread for framework**: heavy work off that thread. Platform views as an escape hatch, not the default. FFI for hot paths rather than platform channels as the primary native bridge.
- **Hot reload later**: do not block a first version on it.

### Flutter, reject

- **Dart VM, Dart JIT as a product requirement, Dart isolates as the memory model.**
- **`setState` dirtying an Element subtree, InheritedWidget as the dirty bit.**
- **Platform channels as the primary native bridge.**
- **Naming the UI primitive `signal` at the host-API level.** Prefer `ui.Signal` in prose. Host SIGINT is not this.
- **CanvasKit, Skwasm, engine-in-WASM as the browser backend.**
- **WebView, WKWebView, Chromium Embedded as "native."**
- **Flutter HTML renderer as a pixel-identical Skia clone.** Copy the idea of a DOM backend, not the attempt to make DOM look like Impeller.
- **A second IR or a UI bytecode.**

### React Native, steal the model, compile it

- **Component, props, children**: a function returns a tree. One source, several hosts.
- **Small host primitive set**: view, text, image, scroll, text input, pressable. Not HTML and not every UIKit class.
- **Style as data**: StyleSheet-shaped objects. On native they feed layout and paint. They must not become a CSS engine.
- **Accessibility and test IDs as first-class props.**
- **Host config**: only the leaf adapter knows DOM versus UIView versus engine draw lists.
- **Platform as compile-time split**, not a runtime JS bundle with dead native stubs.
- **New Architecture lessons to steal**: immutable shadow tree, synchronous layout and measure on the UI thread, mounting separate from reconcile, typed host descriptors as AOT FFI, in-process typed synchronous framework-to-host calls. Do not steal JSI. Do not steal Hermes.

### React Native, forbid

- **Hermes, V8, JavaScriptCore on device as the app or UI runtime.**
- **Async Bridge as the default.** Layout, hit-testing, and frames are not message-queue work.
- **WebView shells**: Cordova, Capacitor, Tauri-webview, Expo-web-in-WKWebView.
- **CSS as the native layout runtime.** Web may use CSS because the browser already has it.
- **Expo-style OTA of a JS bundle.** Native updates are new binaries.
- **WASM as the web UI plan.**
- **"Draconic bytecode on a VM" as a drop-in for Hermes.**
- **Embed `eval` as a mini-Hermes.**
- **The public site's TanStack Start app as a prototype of this framework.**

The false path is React Native but our bytecode: keep a JS thread, a shadow thread, a UI thread, replace Hermes with a Draconic interpreter, keep a bridge. IR is not bytecode. The Runtime is not a VM. Native emit is LLVM plus linked C. See [[architecture-layer-cake]].

## Proposed phasing

Not a schedule. Not the next toolchain Loop atom. Proposed only, after a human product decision.

- **Phase 0, already true**: JS emit into a browser. No JSX. No WASM web target.
- **Phase 1, after a human product decision**: git package for components and reactivity, hyperscript, DOM renderer, tests. JS backend plus browser APIs.
- **Phase 2**: canvas-in-JS renderer if paint fidelity on web is needed.
- **Phase 3, only if native UI is funded**: Rust engine, desktop embedder, FFI scene commands.
- **Phase 4**: iOS and Android embedders, store packaging, accessibility, text, platform views.
- **Phase 5, optional**: JSX sugar, hot reload via Embed or JS-debug, a general LLVM lowerer so more of the framework runs as one native program.

Layout algorithm (Yoga versus Taffy versus Draconic) is not chosen. Native default (OEM widgets, custom engine, or bindgen) is not chosen.

## Open product questions

Mark these undecided. Do not invent rules.

- **Working name** for the framework.
- **Language feature versus library product.** Vault purpose docs have no UI job.
- **What “no JS runtime on native” means**, given ADR-0003 still requires GC for JS values.
- **JSX, hyperscript, or function components with no markup syntax.**
- **Web renderer**: DOM-first like todo, or custom canvas that still emits JavaScript.
- **Native default**: OEM widgets, custom engine, or Draconic calling C through bindgen.
- **Layout algorithm**: Yoga versus Taffy versus Draconic.
- **iOS and Android packaging, app shells, and triples.** Not D04.
- **Threading**: UI on the main isolate only, or shared memory later.
- **Does the public site stay TanStack Start**, or would it ever be rewritten in this framework.
- **Who owns windowing and GPU.** Host I/O currently says not a browser. Nothing says Skia, Metal, or a Flutter embedder.
