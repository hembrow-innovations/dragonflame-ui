---
id: "purpose-desktop-embedder"
title: "Desktop embedder purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for the desktop vsync window. Embedder owns window and vsync, engine owns GPU."
status: active
domain: ui-framework
area: desktop-embedder
tags: [purpose]
created_at: "2026-09-11"
updated_at: "2026-09-11"
---

# Desktop embedder purpose

## Job

A desktop window opens with a GPU surface and one vsync from the embedder.

Wayfinder [[rounds-01-chart-framework]] answers 3, 6, 11, and 16, planning sitting [[rounds-160-fund-native]], and [[task-164-hitl-name-desktop-window]]:

- **Answer 3**: no JS engine on native; tracing GC stays. No Hermes, JSC, V8, or WebView.
- **Answer 6**: custom Rust engine. OEM widgets are an escape hatch.
- **Answer 11**: embedder owns window. Engine owns GPU. No Skia. No Flutter embedder.
- **Answer 16**: wgpu when native is funded.
- **Funding**: Native is funded. Engine home is this repo.
- **First desktop OS**: macOS
- **Window crate**: winit

## In scope

Child destination sentences from [[location-39-desktop-embedder]]:

- **Window**: the embedder owns the window.
- **Vsync**: the embedder supplies one vsync.
- **Input**: the embedder owns input, IME, clipboard, and accessibility plumbing.
- **No WebView**: desktop native is not WKWebView, Chromium Embedded, Tauri-webview, or a WebView shell.
- **No JS engine**: desktop native has no Hermes, JavaScriptCore, or V8. Tracing GC stays.
- **Phase 2 gate**: this destination is pursued only if native UI is funded.

Child destination sentences from [[location-36-engine-home]]:

- **This repo**: the engine home is this checkout.
- **Split later**: a split happens only if it hurts.
- **Not toolchain**: the engine is not filed as draconic toolchain ROADMAP work.

Child destination sentences from [[location-37-rust-engine]]:

- **Raster**: the engine rasters and GPU submit lives on the raster thread.
- **Glyphs**: the engine owns glyphs.
- **Images**: the engine owns images, with image decode on the IO thread.
- **Compositing**: the engine composites a layer tree of offset, clip, transform, picture, and platform-view.
- **Vsync client**: the engine is a vsync client and one vsync comes from the embedder.
- **GPU surface**: the engine owns the GPU surface. See [[location-38-wgpu]]
- **Not Runtime**: Engine, Runtime, and Embedder stay uncollapsed. Runtime is language GC and jobs.
- **Not Skia**: there is no Skia requirement and no Flutter Engine as a product dependency.

Child destination sentences from [[location-38-wgpu]]:

- **When funded**: wgpu is used when native is funded.
- **Engine owns GPU**: the engine owns the GPU surface and the embedder owns the window.
- **Not web GPU**: wgpu is native-only, not CanvasKit, Skwasm, or engine-in-WASM as the browser backend.

Child destination sentences from [[location-22-crate-layout]]:

- **Library first**: the first package is the dragonflame-ui library.
- **No empty Rust crates**: there are no empty Rust crates.
- **Workspace later**: a Cargo workspace exists only when native is funded.
- **Engine home**: the Rust engine, if funded, lives in this repo until keeping it here hurts.

Child destination sentences from [[location-60-animation-clocks]]:

- **Framework clocks**: animation clocks live in the Draconic Framework library, not in the Rust engine.
- **Vsync tickers**: vsync tickers exist beside the pipeline, layers, input, and a11y copy.
- **One vsync**: one vsync comes from the embedder, and on web vsync is `requestAnimationFrame`.
- **Signals do not replace tickers**: signals replace build dirtying only.

Native is funded, so this destination is pursued. This area's oracles prove a desktop window opens with a GPU surface and one vsync from the embedder, and that desktop native is not a WebView and has no JS engine. They do not prove input plumbing, Taffy rect, glyphs, compositing, raster, images, workspace honesty, or web rAF clocks.

## Out of scope

- Taffy rect FFI. Do not invent it.
- Implementing input, IME, clipboard, or accessibility plumbing.
- Mobile embedders.
- OEM widgets as the default. OEM widget class list is unnamed.
- Glyphs complete.
- Empty engine crates as a warmup.
- Adding Skia or a Flutter embedder.
- CanvasKit, Skwasm, or engine-in-WASM as the browser backend.
- Repeating Cargo workspace oracles. Those live on [[purpose-crate-workspace]].
- Repeating library-first or no-empty-crate oracles. Those live on [[purpose-git-package]].
- Repeating web rAF clock oracles. Those live on [[purpose-animation-clocks]].
- Later FFI commands beyond this window.
- A first desktop OS other than macOS.
- A window crate other than winit.
- Implementing the compiler in this repo.

## Surfaces

A macOS desktop window from the winit embedder. The engine owns the GPU surface. Callers do not open a WebView. Callers do not start Hermes, JSC, JavaScriptCore, or V8.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-01-chart-framework]], [[rounds-160-fund-native]], [[task-164-hitl-name-desktop-window]], [[intent]], [[location-36-engine-home]], [[location-37-rust-engine]], [[location-38-wgpu]], [[location-39-desktop-embedder]], [[location-22-crate-layout]], [[location-60-animation-clocks]], and [[architecture-layer-cake]].

## Open product questions

- (none)
