---
id: "location-18-native-engine-desktop"
title: "Native engine and desktop embedder"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:00:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Native engine and desktop embedder

## This is working when

A Rust engine, a desktop window with GPU and vsync, and FFI scene commands exist; only if native UI is funded.

## Nested locations

- **[[location-36-engine-home|Engine home]]**: this is working when the Rust engine lives in this repo.
  - bet: try this repo; pivot if keeping it here hurts, then split
- **[[location-37-rust-engine|Rust engine]]**: this is working when the native-only graphics stack does raster, glyphs, images, compositing, vsync client, and a GPU surface, and is not the language Runtime.
  - bet: try a custom Rust engine; pivot if Hermes, a JS engine, Skia, or a Flutter embedder creeps in
- **[[location-38-wgpu|wgpu]]**: this is working when GPU work uses wgpu, when native is funded.
  - bet: try wgpu; pivot if a sitting names raw Metal and Vulkan instead after funding
- **[[location-39-desktop-embedder|Desktop embedder]]**: this is working when a desktop host owns the window, vsync, and input, and the engine owns the GPU surface.
  - bet: try embedder-owns-window and engine-owns-GPU; pivot if Host I/O becomes a browser or a WebView shell
- **[[location-40-ffi-scene-commands|FFI scene commands]]**: this is working when the native path calls the engine through `extern "C"` and unboxed numbers and structs.
  - bet: try FFI scene commands; pivot if platform channels or JSI become the primary native bridge
- **[[location-41-renderer-portability|Renderer portability API]]**: this is working when portable UI imports this thin Draconic surface, not Metal or `document`, and wrong-target use hard-errors.
  - bet: try one portable surface with two hosts; pivot if a second IR or UI bytecode appears
- **[[location-42-native-layout|Native layout]]**: this is working when native layout is Taffy in the Rust engine, not user CSS.
  - bet: try Taffy; pivot if CSS becomes the native layout runtime
- **[[location-43-native-canvas-host|Native canvas host]]**: this is working when the native default is draw lists into the Rust engine.
  - bet: try canvas engine as native default; pivot if OEM widgets become the default
- **[[location-44-oem-escape-hatch|OEM escape hatch]]**: this is working when OEM widgets are an escape hatch, not the default.
  - bet: try custom engine first; pivot if OEM is forced as the default host
- **[[location-22-crate-layout|Crate layout]]**: this is working when there are no empty Rust crates, and a workspace exists only when native is funded.
  - bet: try library-first with no empty crates; pivot if empty engine crates appear before funding
- **[[location-45-threads|Threads]]**: this is working when the framework runs on the Runtime job queue, engine raster and IO threads are allowed, and workers never share a signal object.
  - bet: try that split; pivot if a JS thread plus shadow thread plus bridge returns
- **[[location-46-gesture-arena|Gesture arena]]**: this is working when competing recognizers for pointer input exist, and DOM `stopPropagation` is not the native model.
  - bet: try a gesture arena; pivot if native gestures are DOM bubbling
- **[[location-60-animation-clocks|Animation clocks]]**: this is working when animation clocks live in the Framework library and vsync tickers follow embedder vsync.
  - bet: try clocks in the framework; pivot if the engine owns animation state
- **[[location-27-render-object|Render object]]**: this is working when retained layout, paint, and hit-test nodes persist on native too.
  - bet: try retained render objects; pivot if native rebuilds them every frame

## See also

- **Intent**: [[intent]]
- **Roadmap**: [[roadmap]]
- **Wayfinder**: [[rounds-01-chart-framework]]
- **Idea**: [[overview-ui-framework]]
- **Architecture**: [[architecture-layer-cake]]
- **Glossary**: [[glossary]]
