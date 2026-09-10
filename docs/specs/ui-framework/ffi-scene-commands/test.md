---
id: "test-ffi-scene-commands"
title: "FFI scene commands tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: ffi-scene-commands
tags: [test]
created_at: "2026-09-11"
updated_at: "2026-09-11"
---

# FFI scene commands tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `ffi-scene-commands.submit:one-packed-scene`, `ffi-scene-commands.layout:taffy`, `ffi-scene-commands.paint:draw-lists`, `ffi-scene-commands.raster:gpu-not-ui`, and `ffi-scene-commands.threads:frame-is-job`. Oracle commands:

- node --test tests/ffi-scene-commands/taffy-rect.test.mjs
- node --test tests/ffi-scene-commands/gpu-not-ui.test.mjs

## Tests

- **tests/ffi-scene-commands/taffy-rect.test.mjs**: `Taffy lays out a rect`
  - **How:** fails unless Taffy in the engine lays out a colored rect, the framework submits one packed scene struct through one `extern "C"` submit using unboxed numbers and structs, in-process and synchronous, and the engine records a draw list. CSS is not the native layout runtime
  - **Why:** promises `ffi-scene-commands.submit:one-packed-scene`, `ffi-scene-commands.layout:taffy`, and `ffi-scene-commands.paint:draw-lists`
- **tests/ffi-scene-commands/gpu-not-ui.test.mjs**: `GPU submit is not on the UI thread`
  - **How:** fails unless GPU submit of that draw list runs on the engine raster thread, not the UI thread. The UI thread is the Runtime job queue. A frame callback is a job on that queue
  - **Why:** promises `ffi-scene-commands.raster:gpu-not-ui` and `ffi-scene-commands.threads:frame-is-job`

## Gaps

- No test yet for `ffi-scene-commands.set:forbid-begin-end`, `ffi-scene-commands.ir:forbid-second-ir`, `ffi-scene-commands.bridge:forbid-jsi-channels`, or `ffi-scene-commands.layers:uncollapsed`.
- Later FFI commands stay unnamed.
- Glyphs, images, compositing, and IO-thread decode stay unimplemented.
- Vsync window oracles stay on [[test-desktop-embedder]].
- No-shared-signal oracles stay on [[test-signal-dirtying]].
- Web CSS oracles stay on [[test-web-layout]].
- No-web-canvas oracles stay on [[test-dom-only-host]].
