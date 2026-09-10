---
id: "slice-77-draw-a-rect"
title: "Draw a rect"
kind: slice
status: active
sprint: "native-if-funded"
blocked_by:
  - "slice-76-desktop-vsync-window"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-11T23:30:00Z"
---

# Draw a rect

## Why

Scene demo. Same retained render object, now drawing through FFI into the canvas host with Taffy constraints.

## Done

A colored rect is laid out by Taffy in the engine, recorded as a draw list, submitted on the raster thread. Framework talks one packed scene struct and one `extern "C"` submit, unboxed numbers and structs, in-process, synchronous. Frame callback is a job on the Runtime queue. Workers never share a signal object. CSS is not the native layout runtime.

## Blocked by

[[slice-76-desktop-vsync-window]]. [[ticket-66-ffi-commands-unnamed]] promoted: first-tracer set is one packed scene submit of a colored rect.

## Non-goals

Second IR. UI bytecode. CSS as native layout. Begin/end command stream. Later scene commands beyond one colored rect.

## Oracle checklist

- [x] O1: Taffy lays out a rect
  CHECK: command named in the scene spec test.md
  EXPECT: pass
  EVIDENCE: `node --test tests/ffi-scene-commands/taffy-rect.test.mjs` 1 pass 0 fail
- [x] O2: GPU submit is not on the UI thread
  CHECK: command named in that spec
  EXPECT: pass
  EVIDENCE: `node --test tests/ffi-scene-commands/gpu-not-ui.test.mjs` 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-167-spec-scene-submit]]
- [[task-168-red-green-taffy-rect]]
- [[task-169-red-green-gpu-not-ui]]

## See also

- [[location-27-render-object]]
- [[location-37-rust-engine]]
- [[location-40-ffi-scene-commands]]
- [[location-41-renderer-portability]]
- [[location-42-native-layout]]
- [[location-43-native-canvas-host]]
- [[location-45-threads]]
- [[rounds-160-fund-native]]
- [[ticket-66-ffi-commands-unnamed]]
