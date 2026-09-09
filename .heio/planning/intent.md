---
id: "intent"
title: "Intent"
kind: intent
status: active
tags: []
created_at: "2026-09-09T12:00:00Z"
updated_at: "2026-09-09T09:43:04Z"
---

# Intent

## Why this project exists

A Flutter-shaped multiplatform UI whose framework library is Draconic. Working product name: Draconflame UI. One component model.

- **Web**: JS backend, no WASM.
- **Native**: LLVM binary, no WebView, no JS engine (Hermes, JSC, or V8).
- **Framework**: components, signals, layout policy, gestures, and animation, in Draconic.
- **Engine**: GPU, text, and images, in Rust.
- **Embedder**: one per OS.
- **Runtime**: the language GC and job queue, not the graphics engine.

## Success looks like

A Program of function components and signals compiles to ordinary JavaScript for the browser and, when native is funded, to a real binary with no JS engine at runtime. Same components, two hosts.

## We will not

- **Dart VM**: not a product requirement, and not Dart JIT or Dart isolates as the memory model.
- **Dirty model**: not `setState` or InheritedWidget as the dirty model.
- **JS engines on native**: not Hermes, V8, or JSC as the app runtime.
- **WebView native**: not WKWebView, Chromium Embedded, or a WebView shell as native.
- **WASM web UI**: not WebAssembly as the web UI plan.
- **CanvasKit / Skwasm**: not engine-in-WASM as the browser backend.
- **Second IR**: not a second IR or a UI bytecode.
- **OTA JS bundle**: not Expo-style OTA of a JS bundle.
- **CSS as native layout**: not CSS as the native layout runtime.
- **Public TanStack site**: not treating the public TanStack site as a prototype of this framework.
- **Collapsed layers**: not collapsing engine, Runtime, and embedder.
- **Toolchain ROADMAP**: not filing this work into the draconic toolchain ROADMAP.

## See also

- **Sibling toolchain**: `/Users/jaredhembrow/workbench/draconic`
- **Committed vault**: `docs/overview/` in this repo, especially [[overview-ui-framework]]
- **Scribble this intent is proposed from**: `docs/99_scribble/ideas-ui-framework.md` in this repo
- **Open questions**: remain; this intent is proposed from a scribble. Chart them in [[rounds-01-chart-framework]]
