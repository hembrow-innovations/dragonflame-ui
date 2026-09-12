---
id: "task-366-red-green-pipeline-copy-peers"
title: "Red-green pipeline copy peers"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-365-lock-pipeline-copy-promise"
sprint: "mobile-after-desktop"
slice: "slice-364-pipeline-copy"
tags: []
created_at: "2026-09-12T07:25:41Z"
updated_at: "2026-09-12T07:25:41Z"
---

# Red-green pipeline copy peers

## Blocked by

[[task-365-lock-pipeline-copy-promise]]: pipeline-copy promise first.

## Done

`node --test tests/talk-and-measure/pipeline-copy-peers.test.mjs` passes.

## Context

Current: [[purpose-talk-and-measure]] names Pipeline copy in scope. Dump, metrics, compete, and tickers-beside-pipeline oracles exist. No composition oracle that a semantics tree is copied as architecture beside the render tree, with a gesture arena and vsync tickers.

Desired: the test proves `SemanticsNode`, `GestureArena`, and `Clock` are Framework library peers beside the render tree, and that a11y is not skipped until after store packaging. No public `Pipeline`, `Pipeline.flush*`, or `updateSemantics` as app API. No `docs/specs/ui-framework/pipeline-copy/` area.

Do not restage SemanticsNode dump, prop reuse, or signals-do-not-replace. Those live on [[purpose-talk-and-measure]]. Do not restage press-wins or embedder packets. Those live on [[purpose-gesture-arena]]. Do not restage tickers-beside-pipeline. That lives on [[purpose-animation-clocks]]. Do not restage [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]]. Do not wait on [[slice-82-store-binaries]]. Do not invent SemanticsOwner, SemanticsBinding, AccessibilityInfo, Ticker, SchedulerBinding, or AnimationController.

## Verify

CHECK: node --test tests/talk-and-measure/pipeline-copy-peers.test.mjs
EXPECT: pass

scope: tests/talk-and-measure/ docs/specs/ui-framework/talk-and-measure/

## Links

- [[slice-364-pipeline-copy]]
- [[task-365-lock-pipeline-copy-promise]]
- [[rounds-363-freeze-pipeline-copy]]
