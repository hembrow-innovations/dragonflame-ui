---
id: "task-382-keep-load-on-io-promise"
title: "Keep load-on-io promise"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "mobile-after-desktop"
slice: "slice-381-io-font-load"
tags: []
created_at: "2026-09-12T08:29:13Z"
updated_at: "2026-09-12T08:29:13Z"
---

# Keep load-on-io promise

## Blocked by

None.

## Done

[[contract-talk-and-measure]] `talk-and-measure.fonts:load-on-io` points at the dedicated IO font load CHECK. Font load runs on the IO thread. Font load is not on the UI thread.

## Context

Locked load-on-io promise whose test pointer is the combined per-host-metrics CHECK. Point [[purpose-talk-and-measure]], [[contract-talk-and-measure]], and [[test-talk-and-measure]] at the dedicated oracle from [[location-55-text]] IO font load plus `docs/` or the smallest reversible default.

Current: [[purpose-talk-and-measure]] already lists IO font load in scope. Dump, metrics, and engine glyphs live elsewhere. `talk-and-measure.fonts:load-on-io` is locked with `test: measureText is per-host and loadFont is not on the UI thread`. [[slice-83-talk-and-measure]] Done is the weaker cut: font load is not required to block the UI thread.

Desired: the promise stays locked and points at `tests/talk-and-measure/io-font-load.test.mjs`. Font load runs on the IO thread. Pivot if font load blocks the UI thread. Image decode stays unnamed here.

Locked defaults from [[rounds-380-freeze-io-font-load]]: public fonts seam stays `loadFont`. No public Thread type. No `Paragraph.layout`. No `TextPainter`. Private engine IO module in `crates/engine`, not `pub use`d. No `docs/specs/ui-framework/io-font-load/` area. Test path is `tests/talk-and-measure/io-font-load.test.mjs`. Do not rewrite dump, metrics, or engine-glyphs promises. Do not wait on [[slice-83-talk-and-measure]] or [[slice-373-engine-glyphs]].

Out of scope: product code. Restaging [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], or [[slice-373-engine-glyphs]]. Repeating SemanticsNode dump, measureText, or engine-glyphs oracles.

## Verify

Contract promise `talk-and-measure.fonts:load-on-io` has a `test:` pointer at the dedicated CHECK. [[test-talk-and-measure]] names the CHECK. Open product questions are none. No product code. Dump, metrics, and engine-glyphs promises still hold.

scope: docs/specs/ui-framework/talk-and-measure/

## Links

- [[slice-381-io-font-load]]
- [[rounds-380-freeze-io-font-load]]
- [[location-55-text]]
- [[location-45-threads]]
- [[purpose-talk-and-measure]]
- [[contract-talk-and-measure]]
- [[overview-ui-framework]]
- [[architecture-layer-cake]]
