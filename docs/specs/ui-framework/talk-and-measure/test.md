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
updated_at: "2026-09-11"
---

# Talk and measure tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `talk-and-measure.tree:semantics-node`, `talk-and-measure.props:reuse`, `talk-and-measure.tree:signals-do-not-replace`, `talk-and-measure.tree:forbid-aria-only`, `talk-and-measure.metrics:measure-text`, and `talk-and-measure.fonts:load-on-io`. Oracle commands:

- node --test tests/talk-and-measure/semantics-dump.test.mjs
- node --test tests/talk-and-measure/per-host-metrics.test.mjs

## Tests

- **tests/talk-and-measure/semantics-dump.test.mjs**: `SemanticsNode dumps with toStringDeep`
  - **How:** a `SemanticsNode` tree sits beside the render tree and dumps with `toStringDeep`. `testID` and `accessibilityLabel` are reused. Signals do not replace the dump. Fails if ARIA-only DOM is the native a11y model. No second native a11y prop set
  - **Why:** promises `talk-and-measure.tree:semantics-node`, `talk-and-measure.props:reuse`, `talk-and-measure.tree:signals-do-not-replace`, and `talk-and-measure.tree:forbid-aria-only`
- **tests/talk-and-measure/per-host-metrics.test.mjs**: `measureText is per-host and loadFont is not on the UI thread`
  - **How:** `measureText` is the per-host metrics seam. Sizes may disagree across DOM, UIKit, and the engine. Fails if CSS is iOS layout. `loadFont` runs on the IO thread, not the UI thread
  - **Why:** promises `talk-and-measure.metrics:measure-text` and `talk-and-measure.fonts:load-on-io`

## Gaps

- No test yet for `talk-and-measure.embedder:owns-plumbing`, `talk-and-measure.surface:forbid-unnamed`, or `talk-and-measure.engine:forbid-skia-text`.
- O2 `tests/talk-and-measure/per-host-metrics.test.mjs` is not in the repo yet.
- Web a11y and test ID oracles stay on [[test-a11y-test-ids]].
- iOS host honesty oracles stay on [[test-ios-embedder]].
- Six-leaf oracles stay on [[test-leaf-kit]].
- Signal-dirtying oracles stay on [[test-signal-dirtying]].
