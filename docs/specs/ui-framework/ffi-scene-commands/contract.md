---
id: "contract-ffi-scene-commands"
title: "FFI scene commands contract"
kind: contract
description: "Durable, plain-language promises for one packed scene submit of a colored rect. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: ffi-scene-commands
tags: [contract]
created_at: "2026-09-11"
updated_at: "2026-09-11"
---

# FFI scene commands contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `ffi-scene-commands.submit:one-packed-scene`: The native path uses `extern "C"` and unboxed numbers and structs. Framework talks one packed scene struct with a colored rect and one `extern "C"` submit. Framework-to-host calls are in-process, typed, and synchronous. Engine records the draw list.
  test: Taffy lays out a rect
- `ffi-scene-commands.layout:taffy`: Native layout is Taffy in the Rust engine. Layout takes incoming constraints and is an engine primitive with a frozen algorithm and tests. CSS is not the native layout runtime. Signals do not replace constraint layout.
  test: Taffy lays out a rect
- `ffi-scene-commands.paint:draw-lists`: Native paint records draw lists into the Rust engine.
  test: Taffy lays out a rect
- `ffi-scene-commands.raster:gpu-not-ui`: The engine rasters and GPU submit lives on the raster thread, not the UI thread. Native raster is GPU submit on native.
  test: GPU submit is not on the UI thread
- `ffi-scene-commands.threads:frame-is-job`: The UI thread is the Runtime job queue. Framework, signals, layout, and paint-list recording run there. On native a frame callback is a job on the Runtime queue.
  test: GPU submit is not on the UI thread
- `ffi-scene-commands.set:forbid-begin-end`: The first-tracer set is not a begin, fill-rect, end, submit stream. Later commands stay unnamed.
- `ffi-scene-commands.ir:forbid-second-ir`: The native path is not a second IR or UI bytecode.
- `ffi-scene-commands.bridge:forbid-jsi-channels`: FFI is for hot paths rather than platform channels as the primary native bridge. The native path does not steal JSI.
- `ffi-scene-commands.layers:uncollapsed`: Engine, Runtime, and Embedder stay uncollapsed. Runtime is language GC and jobs. There is not a JS thread, a shadow thread, a UI thread, and a bridge.
