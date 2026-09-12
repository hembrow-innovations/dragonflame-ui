---
id: "task-395-red-green-engine-images"
title: "Red-green Engine images"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-394-assert-engine-owns-images-promise"
sprint: "mobile-after-desktop"
slice: "slice-393-engine-images"
tags: []
created_at: "2026-09-12T09:18:42Z"
updated_at: "2026-09-12T09:18:42Z"
---

# Red-green Engine images

## Blocked by

[[task-394-assert-engine-owns-images-promise]]: engine-owns images promise first.

## Done

`node --test tests/ffi-scene-commands/engine-images.test.mjs` passes.

## Context

Current: [[purpose-ffi-scene-commands]] names Images in scope and parks image decode on the IO thread as Out of scope for colored-rect oracles. Colored-rect and GPU-not-UI oracles exist. No ownership oracle that the engine owns images, with image decode on the IO thread.

Desired: the test proves `crates/engine` owns a private images store used by raster, that decode runs on the IO thread and not on the UI thread, that `lib.rs` does not `pub use` the store, and that callers still only see `Scene`, `submit`, `DrawRect`, and `recorded_draw_list`. No public Image. No DecodeJob. No `loadImage`. No `docs/specs/ui-framework/engine-images/` area.

Do not restage colored-rect submit or GPU-not-UI. Those live on [[purpose-ffi-scene-commands]]. Do not restage native glyphs. That lives on [[slice-373-engine-glyphs]]. Do not restage IO font load. That lives on [[slice-381-io-font-load]]. Do not restage heavy work off the UI thread as the single-UI-thread cut. That lives on [[slice-385-single-ui-thread]]. Do not invent a public Image. Do not let decode block the UI thread. Do not put decode on the Runtime job queue. Do not make the embedder the decoder.

## Verify

CHECK: node --test tests/ffi-scene-commands/engine-images.test.mjs
EXPECT: pass

scope: tests/ffi-scene-commands/ crates/engine/ docs/specs/ui-framework/ffi-scene-commands/

## Links

- [[slice-393-engine-images]]
- [[task-394-assert-engine-owns-images-promise]]
- [[rounds-392-freeze-engine-images]]
