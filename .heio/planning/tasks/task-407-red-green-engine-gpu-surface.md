---
id: "task-407-red-green-engine-gpu-surface"
title: "Red-green Engine GPU surface"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-406-assert-engine-gpu-surface-promise"
sprint: "mobile-after-desktop"
slice: "slice-405-engine-gpu-surface"
tags: []
created_at: "2026-09-12T10:06:12Z"
updated_at: "2026-09-12T10:06:12Z"
---

# Red-green Engine GPU surface

## Blocked by

[[task-406-assert-engine-gpu-surface-promise]]: engine-gpu-surface promise first.

## Done

`node --test tests/ffi-scene-commands/engine-gpu-surface.test.mjs` passes.

## Context

Current: [[purpose-desktop-embedder]] names GPU surface in scope and [[contract-desktop-embedder]] already locked `desktop-embedder.gpu:engine-owns`. [[slice-76-desktop-vsync-window]] already proved the window. [[purpose-ffi-scene-commands]] quotes the grain. No ownership oracle that the engine owns the GPU surface without restaging that window.

Desired: the test proves `crates/engine` owns a private GPU grouping used for instance, adapter, device, queue, surface, swapchain, and present, that `lib.rs` does not `pub use` it, that the embedder does not own GPU, that callers never see wgpu types, and that callers still only see `Scene`, `submit`, `DrawRect`, and `recorded_draw_list`. No public GPU type catalog. `present_one_vsync` stays the existing embedder-to-engine call that uses that grouping. No `docs/specs/ui-framework/gpu-surface/` area.

Do not restage the desktop vsync window. That lives on [[slice-76-desktop-vsync-window]] and [[purpose-desktop-embedder]]. Do not restage engine vsync client. That lives on [[slice-401-engine-vsync-client]]. Do not restage engine compositing. That lives on [[slice-397-engine-compositing]]. Do not restage engine images. That lives on [[slice-393-engine-images]]. Do not restage native glyphs. That lives on [[slice-373-engine-glyphs]]. Do not invent a public GPU type catalog. Do not let the embedder own GPU. Do not make the engine own the window. Do not mint a [[location-38-wgpu]] slice.

## Verify

CHECK: node --test tests/ffi-scene-commands/engine-gpu-surface.test.mjs
EXPECT: pass

scope: tests/ffi-scene-commands/ crates/engine/ docs/specs/ui-framework/ffi-scene-commands/

## Links

- [[slice-405-engine-gpu-surface]]
- [[task-406-assert-engine-gpu-surface-promise]]
- [[rounds-404-freeze-engine-gpu-surface]]
