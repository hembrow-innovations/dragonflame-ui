---
id: "task-375-red-green-engine-glyphs"
title: "Red-green engine glyphs"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-374-lock-engine-glyphs-promise"
sprint: "mobile-after-desktop"
slice: "slice-373-engine-glyphs"
tags: []
created_at: "2026-09-12T08:00:25Z"
updated_at: "2026-09-12T08:00:25Z"
---

# Red-green engine glyphs

## Blocked by

[[task-374-lock-engine-glyphs-promise]]: forbid-skia-text promise first.

## Done

`node --test tests/talk-and-measure/engine-glyphs.test.mjs` passes.

## Context

Current: [[purpose-talk-and-measure]] names Engine glyphs in scope. Dump, metrics, and loadFont oracles exist. No ownership oracle that native glyphs live in the Rust engine. `crates/engine` public surface is `Scene`, `submit`, `DrawRect`, and `recorded_draw_list`. Cargo deps are pollster, taffy, wgpu.

Desired: the test proves native glyphs live in the Rust engine as a private module used by raster and paint, that Skia is not pulled in for text, and that no public Glyphs type, `Paragraph.layout`, or `TextPainter` is exported. Glyph atlas and font file formats stay unnamed. No `docs/specs/ui-framework/engine-glyphs/` area.

Do not restage SemanticsNode dump, measureText, or loadFont. Those live on [[purpose-talk-and-measure]] and [[slice-83-talk-and-measure]]. Do not restage desktop or mobile no-Skia-at-all oracles. Those live on the embedder specs. Do not restage FFI packed-scene submit. That lives on [[purpose-ffi-scene-commands]]. Do not invent a public Glyphs type. Do not pull Skia in for text.

## Verify

CHECK: node --test tests/talk-and-measure/engine-glyphs.test.mjs
EXPECT: pass

scope: tests/talk-and-measure/ crates/engine/ docs/specs/ui-framework/talk-and-measure/

## Links

- [[slice-373-engine-glyphs]]
- [[task-374-lock-engine-glyphs-promise]]
- [[rounds-372-freeze-engine-glyphs]]
