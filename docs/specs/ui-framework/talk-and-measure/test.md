---
id: "test-talk-and-measure"
title: "Talk and measure tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: talk-and-measure
tags: [test]
created_at: "2026-09-11"
updated_at: "2026-09-12"
---

# Talk and measure tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `talk-and-measure.tree:semantics-node`, `talk-and-measure.props:reuse`, `talk-and-measure.tree:signals-do-not-replace`, `talk-and-measure.tree:forbid-aria-only`, `talk-and-measure.tree:pipeline-copy`, `talk-and-measure.metrics:measure-text`, `talk-and-measure.fonts:load-on-io`, and `talk-and-measure.engine:forbid-skia-text`. Oracle commands:

- node --test tests/talk-and-measure/semantics-dump.test.mjs
- node --test tests/talk-and-measure/per-host-metrics.test.mjs
- node --test tests/talk-and-measure/pipeline-copy-peers.test.mjs
- node --test tests/talk-and-measure/engine-glyphs.test.mjs

## Tests

- **tests/talk-and-measure/semantics-dump.test.mjs**: `SemanticsNode dumps with toStringDeep`
  - **How:** a `SemanticsNode` tree sits beside the render tree and dumps with `toStringDeep`. `testID` and `accessibilityLabel` are reused. Signals do not replace the dump. Fails if ARIA-only DOM is the native a11y model. No second native a11y prop set
  - **Why:** promises `talk-and-measure.tree:semantics-node`, `talk-and-measure.props:reuse`, `talk-and-measure.tree:signals-do-not-replace`, and `talk-and-measure.tree:forbid-aria-only`
- **tests/talk-and-measure/per-host-metrics.test.mjs**: `measureText is per-host and loadFont is not on the UI thread`
  - **How:** `measureText` is the per-host metrics seam. Sizes may disagree across DOM, UIKit, and the engine. Fails if CSS is iOS layout. `loadFont` runs on the IO thread, not the UI thread
  - **Why:** promises `talk-and-measure.metrics:measure-text` and `talk-and-measure.fonts:load-on-io`
- **tests/talk-and-measure/pipeline-copy-peers.test.mjs**: `a semantics tree is copied as architecture beside the render tree, with a gesture arena and vsync tickers`
  - **How:** `SemanticsNode`, `GestureArena`, and `Clock` are Framework library peers beside the render tree. Accessibility is not skipped until after store packaging. Fails if a public `Pipeline`, `Pipeline.flush*`, or `updateSemantics` is app API. Does not restage dump, press-wins, or tickers-beside-pipeline oracles
  - **Why:** promise `talk-and-measure.tree:pipeline-copy`
- **tests/talk-and-measure/engine-glyphs.test.mjs**: `native glyphs live in the Rust engine and Skia is not pulled in for text`
  - **How:** native glyphs live in the Rust engine as a private module used by raster and paint. Skia is not pulled in for text. Fails if a public Glyphs type, `Paragraph.layout`, or `TextPainter` is exported, or if `docs/specs/ui-framework/engine-glyphs/` exists. Glyph atlas and font file formats stay unnamed. Does not restage dump, measureText, or loadFont oracles
  - **Why:** promise `talk-and-measure.engine:forbid-skia-text`

## Gaps

- No test yet for `talk-and-measure.embedder:owns-plumbing` or `talk-and-measure.surface:forbid-unnamed`.
- O2 `tests/talk-and-measure/per-host-metrics.test.mjs` is not in the repo yet.
- Web a11y and test ID oracles stay on [[test-a11y-test-ids]].
- iOS host honesty oracles stay on [[test-ios-embedder]].
- Six-leaf oracles stay on [[test-leaf-kit]].
- Signal-dirtying oracles stay on [[test-signal-dirtying]].
- Press-wins and embedder packet oracles stay on [[test-gesture-arena]].
- Tickers-beside-pipeline oracles stay on [[test-animation-clocks]].
