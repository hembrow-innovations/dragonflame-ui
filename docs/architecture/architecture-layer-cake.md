---
id: architecture-layer-cake
title: Proposed layer cake
kind: architecture
description: Proposed Flutter-shaped stack: Draconic framework, Rust engine, per-OS embedder, language Runtime kept separate, two compile targets. Not an ADR.
domain: ui-framework
area: architecture
tags: [architecture]
created_at: "2026-09-09"
updated_at: "2026-09-09"
---

# Proposed layer cake

## Overview

Proposed architecture, not an ADR. Do not treat this note as a locked decision.

From the top of an app down to the OS, the scribble proposes a Flutter-shaped split: app and Framework library in Draconic, a thin Renderer portability API, a Rust Engine on native only, the language Runtime for GC and jobs, and a per-OS Embedder. Cold-reader idea: [[overview-ui-framework]]. Terms: [[glossary]].

Do not collapse Engine, Runtime, and Embedder. Runtime is language GC and jobs. Engine is graphics. Embedder is the OS window.

## Context

The problem the idea is trying to solve: one component model authored once, compiled twice.

- **Web host**: ordinary JavaScript in the browser. No WebAssembly. No extra VM. The browser is the embedder.
- **Native host**: LLVM machine code linked with Runtime, Engine, and Embedder. No WebView. No JS engine at runtime.

This product is not the Draconic toolchain. Toolchain dual-worlds and backends are assumed as already locked there. This note does not redefine them.

## Design

### Layers, top down

- **App**: a Draconic Program. Function components and signals. One component tree, not a web tree and a native tree.
- **Framework library**: Draconic. Components, the signal graph, retained component identity, retained render objects, constraint layout, a gesture arena, animation tickers, a semantics tree.
- **Renderer portability API**: thin Draconic surface. Native path calls the engine through `extern "C"` and unboxed numbers and structs. Web path talks to the DOM through JS-only bindings. Wrong-target use hard-errors.
- **Engine**: Rust, native only. Raster, glyphs, images, compositing, vsync client, GPU surface. wgpu when native is funded. Not Skia. Not the language Runtime.
- **Runtime**: tracing GC, job queue, promises, timers. On native, a frame callback is a job on that queue.
- **Embedder**: per platform. Window, GPU surface, vsync, input, IME, clipboard, accessibility. iOS, Android, desktop. No WebView. No JS engine.
- **Toolchain**: already locked elsewhere. Frontend, one IR, then JS emit or LLVM.

### Web versus native hosts

Shared code is composite components. Host leaves are a closed set. Native default, if funded, is the engine path:

- **Web DOM**: emitted JavaScript creates elements and patches text, attributes, and children. This is the only web host. No web canvas.
- **Native canvas**: draw lists into the Rust engine. This is the native default if funded.
- **Native OEM views**: UIView, Android views, desktop counterparts as an escape hatch. This adapter is native-only.

Portable UI code is components, signals, layout, and gestures. A portable Program cannot import Metal or `document` directly. It imports the renderer portability API.

Text measurement disagrees across DOM, UIKit, and a native canvas engine. The scribble asks for a per-host metrics seam. Do not pretend CSS on iOS.

### Pipeline phases

Proposed frame pipeline, copied as architecture not as a Dart type hierarchy:

- **Build**: signal writes mark dependents. Structural change is local (`Show` and keyed `For` only in the sketch).
- **Layout**: incoming constraints. Treat layout as an engine primitive with a frozen algorithm and tests, not as user CSS on native. Native layout is Taffy. Web layout is CSS.
- **Paint**: record draw lists or patch host leaves.
- **Composite**: layer tree (offset, clip, transform, picture, platform-view). Engine composites. Framework does not call Metal.
- **Raster**: GPU submit on native. Browser paint on web.

One vsync from the embedder. On web, vsync is `requestAnimationFrame`. Signals replace the build dirtying mechanism only. They do not replace constraint layout, hit-test, layer compositing, gesture arena, or semantics.

Native threads:

- **UI thread**: Runtime job queue. Framework, signals, layout, paint-list recording.
- **Raster thread**: engine. GPU submit.
- **IO thread**: image decode, font load.
- **Compute**: native-only worker threads. Workers never share a signal object.

### False path

"React Native, but our bytecode." Keep a JS thread, a shadow thread, a UI thread, replace Hermes with a Draconic interpreter, keep a bridge. That reintroduces startup cost, GC on a VM thread, async boundary pressure, and OTA temptation.

IR is not bytecode. The Runtime is not a VM. Native emit is LLVM plus linked C.

Subtler false paths named in the scribble: ship Hermes for the UI package because React is JS. Make web WASM so both targets are the same VM. `eval` screens from strings.

True path in the sketch: framework source is Draconic. Native build is LLVM machine code talking to views or a renderer with synchronous layout. Web build is the JS backend. Same components, two hosts.

## Trade-offs

What this sketch optimises for: one authoring model, compile-time platform split, no JS engine on native, no WASM on web.

What it sacrifices: pixel-identical web versus native, because web is CSS on the DOM and native is Taffy in the engine. Native default is a custom engine with OEM as an escape hatch. Native wording is no JS engine, not no managed runtime; GC stays.

Open product questions stay unanswered on [[overview-ui-framework]]. Do not invent winners here.

## Consequences

Until a human sitting files decisions, this note may describe a sibling-library draft. It must not be read as an ADR. It must not add JSX, fork IR, emit TypeScript, target WASM for web, put a DOM into Host I/O, or treat a Cargo toolchain workspace as this UI product.

Proposed phasing (not a schedule) lives on [[overview-ui-framework]].
