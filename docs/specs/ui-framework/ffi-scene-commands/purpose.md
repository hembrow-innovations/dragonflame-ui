---
id: "purpose-ffi-scene-commands"
title: "FFI scene commands purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for one packed scene submit of a colored rect. Taffy in the engine, one extern C submit, GPU submit on the raster thread."
status: active
domain: ui-framework
area: ffi-scene-commands
tags: [purpose]
created_at: "2026-09-11"
updated_at: "2026-09-11"
---

# FFI scene commands purpose

## Job

A colored rect is laid out by Taffy in the engine, recorded as a draw list, and submitted on the raster thread.

Wayfinder [[rounds-01-chart-framework]] answer 7, planning sitting [[rounds-160-fund-native]], and [[ticket-66-ffi-commands-unnamed]]:

- **Answer 7**: Taffy in the Rust engine. Web keeps CSS.
- **FFI set**: One packed scene struct with a colored rect. One `extern "C"` submit. Engine records the draw list and rasters. Not a begin, fill-rect, end, submit stream.
- **Locked**: `extern "C"`, unboxed numbers and structs, in-process and synchronous, draw list recorded then submitted on the raster thread, not a second IR or bytecode.
- **Synthesis**: Not a second IR. Not UI bytecode. Not JSI. Not platform channels.

## In scope

Child destination sentences from [[location-40-ffi-scene-commands]]:

- **extern C**: the native path uses `extern "C"`.
- **Unboxed numbers and structs**: the native path uses unboxed numbers and structs.
- **Hot paths**: FFI is for hot paths rather than platform channels as the primary native bridge.
- **Command set unnamed**: FFI scene commands exist. The source does not name the command set. [[rounds-160-fund-native]] named the first-tracer set: one packed scene struct with a colored rect and one `extern "C"` submit. Later commands stay unnamed.
- **Sync in-process**: framework-to-host calls are in-process, typed, and synchronous.

Child destination sentences from [[location-42-native-layout]]:

- **Taffy**: native layout is Taffy in the Rust engine.
- **Constraints**: layout takes incoming constraints and is an engine primitive with a frozen algorithm and tests, not user CSS on native.
- **Web keeps CSS**: web layout stays CSS.
- **Signals do not replace layout**: signals do not replace constraint layout.

Child destination sentences from [[location-43-native-canvas-host]]:

- **Draw lists**: native paint records draw lists into the Rust engine.
- **Native default if funded**: canvas engine is the native default, only if native UI is funded.
- **No web canvas**: there is no web canvas host.
- **Raster**: native raster is GPU submit on native.

Child destination sentences from [[location-37-rust-engine]]:

- **Raster**: the engine rasters and GPU submit lives on the raster thread.
- **Glyphs**: the engine owns glyphs.
- **Images**: the engine owns images, with image decode on the IO thread.
- **Compositing**: the engine composites a layer tree of offset, clip, transform, picture, and platform-view.
- **Vsync client**: the engine is a vsync client and one vsync comes from the embedder.
- **GPU surface**: the engine owns the GPU surface. See [[location-38-wgpu]]
- **Not Runtime**: Engine, Runtime, and Embedder stay uncollapsed. Runtime is language GC and jobs.
- **Not Skia**: there is no Skia requirement and no Flutter Engine as a product dependency.

Child destination sentences from [[location-45-threads]]:

- **UI thread**: the UI thread is the Runtime job queue, and framework, signals, layout, and paint-list recording run there.
- **Raster thread**: GPU submit runs on the engine raster thread.
- **IO thread**: image decode and font load run on an IO thread.
- **Compute workers**: native-only worker threads exist and never share a signal object.
- **Not RN threads**: there is not a JS thread, a shadow thread, a UI thread, and a bridge.
- **Frame callback is a job**: on native a frame callback is a job on the Runtime queue.

Child destination sentences from [[location-41-renderer-portability]]:

- **Thin surface**: the API is a thin Draconic surface between portable UI code and a host.
- **Native path**: the native path uses `extern "C"` and unboxed numbers and structs.
- **Web path**: the web path uses JS-only DOM bindings.
- **Wrong-target hard-error**: wrong-target use hard-errors.
- **Portable Program**: a portable Program cannot import Metal or `document` directly.

Child destination sentences from [[location-27-render-object]]:

- **Retained node**: the render object persists for layout, paint, and hit-test.
- **Immutable config**: component configs are cheap and render objects persist.
- **Write properties**: components write properties onto the render object rather than recreating it each frame.
- **Not the component**: Component stays the function and Render object stays the retained node.

Native is funded, so this destination is pursued. This area's oracles prove Taffy lays out a colored rect submitted as one packed scene through one `extern "C"` submit, and that GPU submit is not on the UI thread. They do not prove glyphs, images, compositing, vsync window, IO thread, retained-node honesty, web CSS, portable Metal or `document`, or a web canvas host.

## Out of scope

- A begin, fill-rect, end, submit command stream.
- Later FFI commands beyond one colored-rect scene submit. Do not invent them.
- A second IR or UI bytecode.
- JSI. Platform channels as the primary native bridge.
- CSS as the native layout runtime.
- Field names inside the packed scene struct.
- Glyphs complete.
- Image decode on the IO thread.
- Compositing a layer tree.
- Implementing input, IME, clipboard, or accessibility plumbing.
- Repeating vsync window oracles. Those live on [[purpose-desktop-embedder]].
- Repeating no-webview and no-js-engine oracles. Those live on [[purpose-desktop-embedder]].
- Repeating portable `document` import oracles. Those live on [[purpose-renderer-portability]].
- Repeating portable Metal import oracles. Those live on [[purpose-portability-metal]].
- Repeating no-web-canvas oracles. Those live on [[purpose-dom-only-host]].
- Repeating web CSS oracles. Those live on [[purpose-web-layout]].
- Repeating no-shared-signal oracles. Those live on [[purpose-signal-dirtying]].
- Repeating retained-node honesty. Those live on [[purpose-render-object]] and [[purpose-counter]].
- Repeating no-JSI host-config oracles. Those live on [[purpose-host-config]].
- Repeating thin-surface oracles. Those live on [[purpose-renderer-portability]].
- OEM widgets as the default. OEM widget class list is unnamed.
- Gesture recognizer APIs.
- Mobile embedders.
- Implementing compute workers as a product surface.
- Implementing the compiler in this repo.

## Surfaces

The native host. Framework builds one unboxed scene struct that holds a colored rect and calls one `extern "C"` submit. Engine records a draw list. GPU submit is on the raster thread. Callers do not begin and end a command stream. Callers do not use CSS as native layout.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-01-chart-framework]], [[rounds-160-fund-native]], [[ticket-66-ffi-commands-unnamed]], [[intent]], [[location-27-render-object]], [[location-37-rust-engine]], [[location-40-ffi-scene-commands]], [[location-41-renderer-portability]], [[location-42-native-layout]], [[location-43-native-canvas-host]], [[location-45-threads]], and [[architecture-layer-cake]].

## Open product questions

- (none)
