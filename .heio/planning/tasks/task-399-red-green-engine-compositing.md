---
id: "task-399-red-green-engine-compositing"
title: "Red-green Engine compositing"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-398-assert-engine-composites-promise"
sprint: "mobile-after-desktop"
slice: "slice-397-engine-compositing"
tags: []
created_at: "2026-09-12T09:33:44Z"
updated_at: "2026-09-12T09:33:44Z"
---

# Red-green Engine compositing

## Blocked by

[[task-398-assert-engine-composites-promise]]: engine-composites promise first.

## Done

`node --test tests/ffi-scene-commands/engine-compositing.test.mjs` passes.

## Context

Current: [[purpose-ffi-scene-commands]] names Compositing in scope and parks compositing a layer tree as Out of scope for colored-rect oracles. Colored-rect and GPU-not-UI oracles exist. Hatch `Layer` and `recorded_layer_tree` exist for the platform-view slot. No ownership oracle that the engine composites a layer tree of offset, clip, transform, picture, and platform-view.

Desired: the test proves `crates/engine` owns a private compositor used by raster, that the tree contents are offset, clip, transform, picture, and platform-view as one grouping, that `lib.rs` does not `pub use` the compositor, that the framework does not composite, and that callers still only see `Scene`, `submit`, `DrawRect`, and `recorded_draw_list`. No public Layer catalog. Do not grow hatch `Layer` into this grain. No `docs/specs/ui-framework/engine-compositing/` area.

Do not restage colored-rect submit or GPU-not-UI. Those live on [[purpose-ffi-scene-commands]]. Do not restage hatch slot attach. That lives on [[slice-84-platform-view-hatch]]. Do not restage pipeline-copy. That lives on [[slice-364-pipeline-copy]]. Do not restage engine images. That lives on [[slice-393-engine-images]]. Do not restage native glyphs. That lives on [[slice-373-engine-glyphs]]. Do not prove this grain with [[purpose-composite]] function-component tests. Do not invent a public Layer catalog. Do not let the framework composite. Do not make the embedder the compositor.

## Verify

CHECK: node --test tests/ffi-scene-commands/engine-compositing.test.mjs
EXPECT: pass

scope: tests/ffi-scene-commands/ crates/engine/ docs/specs/ui-framework/ffi-scene-commands/

## Links

- [[slice-397-engine-compositing]]
- [[task-398-assert-engine-composites-promise]]
- [[rounds-396-freeze-engine-compositing]]
