---
id: "task-365-lock-pipeline-copy-promise"
title: "Lock pipeline-copy promise"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "mobile-after-desktop"
slice: "slice-364-pipeline-copy"
tags: []
created_at: "2026-09-12T07:25:41Z"
updated_at: "2026-09-12T07:25:41Z"
---

# Lock pipeline-copy promise

## Blocked by

None.

## Done

[[contract-talk-and-measure]] `talk-and-measure.tree:pipeline-copy` points at a test. A semantics tree is copied as architecture beside the render tree, with a gesture arena and vsync tickers.

## Context

Empty pipeline-copy promise. Point [[purpose-talk-and-measure]], [[contract-talk-and-measure]], and [[test-talk-and-measure]] at the composition oracle from [[location-54-accessibility]] Pipeline copy plus `docs/` or the smallest reversible default.

Current: [[purpose-talk-and-measure]] already lists Pipeline copy in scope and says this area's oracles do not prove the gesture arena or vsync tickers. Dump, metrics, compete, and tickers-beside-pipeline are already locked elsewhere. No `talk-and-measure.tree:pipeline-copy` promise.

Desired: the leftover promise is locked. A semantics tree is copied as architecture beside the render tree, with a gesture arena and vsync tickers. Pivot if a11y is skipped until after store packaging.

Locked defaults from [[rounds-363-freeze-pipeline-copy]]: public surface stays `SemanticsNode`, `GestureArena`, and `Clock`. No public `Pipeline`, `Pipeline.flush*`, or `updateSemantics` as app API. No `docs/specs/ui-framework/pipeline-copy/` area. Test path is `tests/talk-and-measure/pipeline-copy-peers.test.mjs`. Do not rewrite dump, metrics, compete, or tickers-beside-pipeline promises. Do not wait on [[slice-82-store-binaries]].

Out of scope: product code. Restaging [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], or [[slice-360-android-not-toolchain-d04]]. Repeating SemanticsNode dump, press-wins, or tickers-beside-pipeline oracles.

## Verify

Contract promise `talk-and-measure.tree:pipeline-copy` has a `test:` pointer. [[test-talk-and-measure]] names the CHECK. Open product questions are none. No product code. Dump, metrics, compete, and tickers-beside-pipeline promises still hold.

scope: docs/specs/ui-framework/talk-and-measure/

## Links

- [[slice-364-pipeline-copy]]
- [[rounds-363-freeze-pipeline-copy]]
- [[location-54-accessibility]]
- [[purpose-talk-and-measure]]
- [[contract-talk-and-measure]]
- [[overview-ui-framework]]
- [[architecture-layer-cake]]
