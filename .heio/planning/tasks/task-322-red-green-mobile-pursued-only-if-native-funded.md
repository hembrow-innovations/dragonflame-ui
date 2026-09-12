---
id: "task-322-red-green-mobile-pursued-only-if-native-funded"
title: "Red-green mobile pursued only if native funded"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-321-spec-funding-after-desktop"
sprint: "mobile-after-desktop"
slice: "slice-320-funding"
tags: []
created_at: "2026-09-12T04:10:34Z"
updated_at: "2026-09-12T04:10:34Z"
---

# Red-green mobile pursued only if native funded

## Blocked by

[[task-321-spec-funding-after-desktop]]: funding promise first.

## Done

`node --test tests/after-desktop/mobile-pursued-only-if-native-funded.test.mjs` passes.

## Context

Current: Native is funded on [[purpose-desktop-embedder]]. Mobile host shells exist. No funding oracle.

Desired: the test proves mobile is pursued only if native UI is funded. Cite Native is funded. No public `NativeFunded` type. No second funding crate. No `docs/specs/ui-framework/funding/` area.

Do not repeat desktop vsync, window, no-WebView, or no-JS-engine oracles. Those live on [[purpose-desktop-embedder]]. Do not restage [[slice-300-desktop-first]] or [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]]. Do not edit [[contract-desktop-embedder]]. Do not invent Phase 3 already-true, after-human-decision, if-native-funded, or optional words.

## Verify

CHECK: node --test tests/after-desktop/mobile-pursued-only-if-native-funded.test.mjs
EXPECT: pass

scope: tests/after-desktop/ crates/embedder/ docs/specs/ui-framework/after-desktop/

## Links

- [[slice-320-funding]]
- [[task-321-spec-funding-after-desktop]]
- [[rounds-319-freeze-funding]]
