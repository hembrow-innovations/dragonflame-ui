---
id: "task-403-red-green-engine-vsync-client"
title: "Red-green Engine vsync client"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-402-assert-engine-vsync-client-promise"
sprint: "mobile-after-desktop"
slice: "slice-401-engine-vsync-client"
tags: []
created_at: "2026-09-12T09:50:13Z"
updated_at: "2026-09-12T09:50:13Z"
---

# Red-green Engine vsync client

## Blocked by

[[task-402-assert-engine-vsync-client-promise]]: engine-vsync-client promise first.

## Done

`node --test tests/ffi-scene-commands/engine-vsync-client.test.mjs` passes.

## Context

Current: [[purpose-desktop-embedder]] names Vsync client in scope and [[contract-desktop-embedder]] already locked `desktop-embedder.vsync:embedder-supplies`. [[slice-76-desktop-vsync-window]] already proved the window. [[purpose-ffi-scene-commands]] quotes the grain. No ownership oracle that the engine is a vsync client and one vsync comes from the embedder without restaging that window.

Desired: the test proves `crates/engine` owns a private vsync-client grouping used for wait, wake, and raster handoff, that `lib.rs` does not `pub use` it, that the framework does not own vsync, that one vsync comes from the embedder, and that callers still only see `Scene`, `submit`, `DrawRect`, and `recorded_draw_list`. No public vsync type catalog. Do not treat `present_one_vsync` as this grain. No `docs/specs/ui-framework/vsync-client/` area.

Do not restage the desktop vsync window. That lives on [[slice-76-desktop-vsync-window]] and [[purpose-desktop-embedder]]. Do not restage one vsync or web rAF clocks. Those live on [[slice-296-one-vsync]] and [[purpose-animation-clocks]]. Do not restage engine compositing. That lives on [[slice-397-engine-compositing]]. Do not restage engine images. That lives on [[slice-393-engine-images]]. Do not restage native glyphs. That lives on [[slice-373-engine-glyphs]]. Do not invent a public vsync type catalog. Do not let the framework own vsync. Do not make the engine own the window.

## Verify

CHECK: node --test tests/ffi-scene-commands/engine-vsync-client.test.mjs
EXPECT: pass

scope: tests/ffi-scene-commands/ crates/engine/ docs/specs/ui-framework/ffi-scene-commands/

## Links

- [[slice-401-engine-vsync-client]]
- [[task-402-assert-engine-vsync-client-promise]]
- [[rounds-400-freeze-engine-vsync-client]]
