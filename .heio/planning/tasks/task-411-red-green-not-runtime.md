---
id: "task-411-red-green-not-runtime"
title: "Red-green Not Runtime"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-410-lock-layers-uncollapsed-promise"
sprint: "mobile-after-desktop"
slice: "slice-409-not-runtime"
tags: []
created_at: "2026-09-12T10:24:00Z"
updated_at: "2026-09-12T10:24:00Z"
---

# Red-green Not Runtime

## Blocked by

[[task-410-lock-layers-uncollapsed-promise]]: layers-uncollapsed promise first.

## Done

`node --test tests/desktop-embedder/layers-uncollapsed.test.mjs` passes.

## Context

Current: [[purpose-desktop-embedder]] names Not Runtime in scope and [[contract-desktop-embedder]] already asserts `desktop-embedder.layers:uncollapsed`. No ownership oracle that Engine, Runtime, and Embedder stay uncollapsed without restaging the vsync window.

Desired: the test proves `crates/engine` has no GC or job-queue types, `crates/runtime` is not imported as graphics, `crates/embedder` does not own raster, glyphs, or images, that callers never see a Layers API, and that callers still only see `Scene`, `submit`, `DrawRect`, and `recorded_draw_list`. Runtime is language GC and jobs. No public layer catalog. No `docs/specs/ui-framework/not-runtime/` area.

Do not restage the desktop vsync window. That lives on [[slice-76-desktop-vsync-window]] and [[purpose-desktop-embedder]]. Do not restage engine GPU surface. That lives on [[slice-405-engine-gpu-surface]]. Do not restage engine vsync client. That lives on [[slice-401-engine-vsync-client]]. Do not restage engine compositing. That lives on [[slice-397-engine-compositing]]. Do not restage engine images. That lives on [[slice-393-engine-images]]. Do not restage native glyphs. That lives on [[slice-373-engine-glyphs]]. Do not invent a public layer catalog. Do not treat Runtime as graphics. Do not collapse Engine into Embedder. Do not mint Hermes, JSC, or V8 as this Runtime.

## Verify

CHECK: node --test tests/desktop-embedder/layers-uncollapsed.test.mjs
EXPECT: pass

scope: tests/desktop-embedder/ crates/engine/ crates/runtime/ crates/embedder/ docs/specs/ui-framework/desktop-embedder/

## Links

- [[slice-409-not-runtime]]
- [[task-410-lock-layers-uncollapsed-promise]]
- [[rounds-408-freeze-not-runtime]]
