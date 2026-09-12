---
id: "slice-381-io-font-load"
title: "IO font load"
kind: slice
status: frozen
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-76-desktop-vsync-window"
tags: []
created_at: "2026-09-12T08:29:13Z"
updated_at: "2026-09-12T08:29:13Z"
---

# IO font load

## Why

Font load runs on the IO thread. Do not block the UI thread.

## Done

Font load runs on the IO thread.

## Blocked by

[[slice-76-desktop-vsync-window]]: after desktop honesty.

## Non-goals

Restaging [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], or [[slice-373-engine-glyphs]]. SemanticsNode dump, measureText, or engine-glyphs oracles. Image decode. Text leaf. Phase 3 word. Public Thread. Glyph atlas. Font file formats. `Paragraph.layout`. `TextPainter`. Skia for text. A `docs/specs/ui-framework/io-font-load/` area. Rewriting the location destination.

## Oracle checklist

- [ ] O1: font load runs on the IO thread
  CHECK: node --test tests/talk-and-measure/io-font-load.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-382-keep-load-on-io-promise]]
- [[task-383-red-green-io-font-load]]

## See also

- [[location-55-text]]
- [[location-45-threads]]
- [[location-19-mobile-embedders]]
- [[slice-76-desktop-vsync-window]]
- [[slice-83-talk-and-measure]]
- [[slice-373-engine-glyphs]]
- [[rounds-380-freeze-io-font-load]]
- [[purpose-talk-and-measure]]
- [[contract-talk-and-measure]]
- [[overview-ui-framework]]
- [[architecture-layer-cake]]
