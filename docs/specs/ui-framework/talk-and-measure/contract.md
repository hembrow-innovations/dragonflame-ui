---
id: "contract-talk-and-measure"
title: "Talk and measure contract"
kind: contract
description: "Durable, plain-language promises for the semantics tree dump and per-host text metrics seam. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: talk-and-measure
tags: [contract]
created_at: "2026-09-11"
updated_at: "2026-09-12"
---

# Talk and measure contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `talk-and-measure.tree:semantics-node`: A semantics tree sits beside the render tree. The framework node is `SemanticsNode`. The dump is `toStringDeep`.
  test: SemanticsNode dumps with toStringDeep
- `talk-and-measure.props:reuse`: Native semantics reuse `testID` and `accessibilityLabel`. There is no second native a11y prop set.
  test: SemanticsNode dumps with toStringDeep
- `talk-and-measure.tree:signals-do-not-replace`: Signals do not replace semantics.
  test: SemanticsNode dumps with toStringDeep
- `talk-and-measure.tree:forbid-aria-only`: ARIA-only DOM is not the native a11y model.
  test: SemanticsNode dumps with toStringDeep
- `talk-and-measure.tree:pipeline-copy`: A semantics tree is copied as architecture beside the render tree, with a gesture arena and vsync tickers.
  test: a semantics tree is copied as architecture beside the render tree, with a gesture arena and vsync tickers
- `talk-and-measure.embedder:owns-plumbing`: The embedder owns accessibility plumbing. OS a11y class lists stay unnamed.
- `talk-and-measure.metrics:measure-text`: The per-host metrics seam is `measureText`. Sizes may disagree across DOM, UIKit, and the engine. CSS is not iOS layout.
  test: measureText is per-host and loadFont is not on the UI thread
- `talk-and-measure.fonts:load-on-io`: Font load is `loadFont` on the IO thread. Font load is not on the UI thread.
  test: measureText is per-host and loadFont is not on the UI thread
- `talk-and-measure.surface:forbid-unnamed`: The first tracer does not export `SemanticsOwner`, Flutter `SemanticsBinding`, RN `AccessibilityInfo`, `accessibilityHint`, `liveRegion`, `UIAccessibility`, `AccessibilityNodeInfo`, `Paragraph.layout`, or `TextPainter`.
- `talk-and-measure.engine:forbid-skia-text`: Skia is not pulled in for text. Glyph atlas and font file formats stay unnamed.
