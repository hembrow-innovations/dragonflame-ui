---
id: "slice-364-pipeline-copy"
title: "Pipeline copy"
kind: slice
status: met
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-76-desktop-vsync-window"
tags: []
created_at: "2026-09-12T07:25:41Z"
updated_at: "2026-09-12T10:14:05Z"
---

# Pipeline copy

## Why

A11y is copied as architecture beside the render tree, with a gesture arena and vsync tickers. Do not skip it until after store packaging.

## Done

A semantics tree is copied as architecture beside the render tree, with a gesture arena and vsync tickers.

## Blocked by

[[slice-76-desktop-vsync-window]]: after desktop honesty.

## Non-goals

Restaging [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], or [[slice-360-android-not-toolchain-d04]]. SemanticsNode dump, prop reuse, or signals-do-not-replace oracles. Press-wins or embedder packet oracles. Tickers-beside-pipeline oracles. SemanticsOwner, SemanticsBinding, AccessibilityInfo, accessibilityHint, liveRegion, UIAccessibility, AccessibilityNodeInfo. Public Ticker, SchedulerBinding, AnimationController. Public Pipeline, Pipeline.flush*, updateSemantics as app API. Skipping a11y until after store packaging. A `docs/specs/ui-framework/pipeline-copy/` area. Rewriting the location destination.

## Oracle checklist

- [x] O1: a semantics tree is copied as architecture beside the render tree, with a gesture arena and vsync tickers
  CHECK: node --test tests/talk-and-measure/pipeline-copy-peers.test.mjs
  EXPECT: pass
  EVIDENCE: pass 1 fail 0

## Pool

Durable links to task ids. Never drop them.

- [[task-365-lock-pipeline-copy-promise]]
- [[task-366-red-green-pipeline-copy-peers]]

## See also

- [[location-54-accessibility]]
- [[location-19-mobile-embedders]]
- [[location-46-gesture-arena]]
- [[location-60-animation-clocks]]
- [[slice-76-desktop-vsync-window]]
- [[slice-83-talk-and-measure]]
- [[rounds-363-freeze-pipeline-copy]]
- [[purpose-talk-and-measure]]
- [[contract-talk-and-measure]]
- [[purpose-gesture-arena]]
- [[purpose-animation-clocks]]
- [[overview-ui-framework]]
- [[architecture-layer-cake]]
