---
id: "slice-373-engine-glyphs"
title: "Engine glyphs"
kind: slice
status: active
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-76-desktop-vsync-window"
tags: []
created_at: "2026-09-12T08:00:25Z"
updated_at: "2026-09-12T12:00:00Z"
---

# Engine glyphs

## Why

Native glyphs live in the Rust engine. Do not pull Skia in for text.

## Done

Native glyphs live in the Rust engine.

## Blocked by

[[slice-76-desktop-vsync-window]]: after desktop honesty.

## Non-goals

Restaging [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], or [[slice-364-pipeline-copy]]. SemanticsNode dump, measureText, or loadFont oracles. Text leaf. IO font load as this grain. Phase 3 word. Public Glyphs. Glyph atlas. Font file formats. `Paragraph.layout`. `TextPainter`. Skia for text. A `docs/specs/ui-framework/engine-glyphs/` area. Rewriting the location destination.

## Oracle checklist

- [ ] O1: native glyphs live in the Rust engine
  CHECK: node --test tests/talk-and-measure/engine-glyphs.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-374-lock-engine-glyphs-promise]]
- [[task-375-red-green-engine-glyphs]]

## See also

- [[location-55-text]]
- [[location-37-rust-engine]]
- [[location-19-mobile-embedders]]
- [[slice-76-desktop-vsync-window]]
- [[slice-83-talk-and-measure]]
- [[rounds-372-freeze-engine-glyphs]]
- [[purpose-talk-and-measure]]
- [[contract-talk-and-measure]]
- [[overview-ui-framework]]
- [[architecture-layer-cake]]
