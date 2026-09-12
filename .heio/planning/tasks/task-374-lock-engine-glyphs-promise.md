---
id: "task-374-lock-engine-glyphs-promise"
title: "Lock forbid-skia-text promise"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "mobile-after-desktop"
slice: "slice-373-engine-glyphs"
tags: []
created_at: "2026-09-12T08:00:25Z"
updated_at: "2026-09-12T08:00:25Z"
---

# Lock forbid-skia-text promise

## Blocked by

None.

## Done

[[contract-talk-and-measure]] `talk-and-measure.engine:forbid-skia-text` points at a test. Native glyphs live in the Rust engine. Skia is not pulled in for text.

## Context

Asserted forbid-skia-text promise with no test pointer. Point [[purpose-talk-and-measure]], [[contract-talk-and-measure]], and [[test-talk-and-measure]] at the ownership oracle from [[location-55-text]] Engine glyphs plus `docs/` or the smallest reversible default.

Current: [[purpose-talk-and-measure]] already lists Engine glyphs in scope and says this area's oracles do not prove it. Dump, metrics, and loadFont are already locked elsewhere. `talk-and-measure.engine:forbid-skia-text` has no `test:` pointer.

Desired: the promise is locked. Native glyphs live in the Rust engine. Pivot if Skia is pulled in for text. Glyph atlas and font file formats stay unnamed.

Locked defaults from [[rounds-372-freeze-engine-glyphs]]: public engine surface stays `Scene`, `submit`, `DrawRect`, and `recorded_draw_list`. No public Glyphs type. No `Paragraph.layout`. No `TextPainter`. Private glyphs module in `crates/engine`, not `pub use`d. No `docs/specs/ui-framework/engine-glyphs/` area. Test path is `tests/talk-and-measure/engine-glyphs.test.mjs`. Do not rewrite dump, metrics, or loadFont promises. Do not wait on [[slice-83-talk-and-measure]].

Out of scope: product code. Restaging [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], or [[slice-364-pipeline-copy]]. Repeating SemanticsNode dump, measureText, or loadFont oracles.

## Verify

Contract promise `talk-and-measure.engine:forbid-skia-text` has a `test:` pointer. [[test-talk-and-measure]] names the CHECK. Open product questions are none. No product code. Dump, metrics, and loadFont promises still hold.

scope: docs/specs/ui-framework/talk-and-measure/

## Links

- [[slice-373-engine-glyphs]]
- [[rounds-372-freeze-engine-glyphs]]
- [[location-55-text]]
- [[location-37-rust-engine]]
- [[purpose-talk-and-measure]]
- [[contract-talk-and-measure]]
- [[overview-ui-framework]]
- [[architecture-layer-cake]]
