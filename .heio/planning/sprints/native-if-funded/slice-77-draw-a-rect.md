---
id: "slice-77-draw-a-rect"
title: "Draw a rect"
kind: slice
status: shaping
sprint: "native-if-funded"
blocked_by:
  - "slice-76-desktop-vsync-window"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# Draw a rect

## Why

Scene demo. Same retained render object, now drawing through FFI into the canvas host with Taffy constraints.

## Done

A colored rect is laid out by Taffy in the engine, recorded as a draw list, submitted on the raster thread. Framework talks `extern "C"` unboxed numbers and structs, in-process, synchronous. Frame callback is a job on the Runtime queue. Workers never share a signal object. CSS is not the native layout runtime.

## Blocked by

[[slice-76-desktop-vsync-window]]. [[ticket-66-ffi-commands-unnamed]]: do not invent the command set.

## Non-goals

Second IR. UI bytecode. CSS as native layout.

## Oracle checklist

- [ ] O1: Taffy lays out a rect
  CHECK: command named in the scene spec test.md after freeze
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: GPU submit is not on the UI thread
  CHECK: command named in that spec
  EXPECT: pass
  EVIDENCE: pending

## Pool

None until freeze.

## See also

- [[location-27-render-object]]
- [[location-37-rust-engine]]
- [[location-40-ffi-scene-commands]]
- [[location-41-renderer-portability]]
- [[location-42-native-layout]]
- [[location-43-native-canvas-host]]
- [[location-45-threads]]
