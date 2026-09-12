---
id: "task-321-spec-funding-after-desktop"
title: "Spec funding after-desktop"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-301-spec-after-desktop"
sprint: "mobile-after-desktop"
slice: "slice-320-funding"
tags: []
created_at: "2026-09-12T04:10:34Z"
updated_at: "2026-09-12T04:10:34Z"
---

# Spec funding after-desktop

## Blocked by

[[task-301-spec-after-desktop]]: after-desktop purpose, contract, and test first.

## Done

After-desktop purpose, contract, and test include the funding promise. Mobile is pursued only if native UI is funded.

## Context

Empty funding ladder. Extend `docs/specs/ui-framework/after-desktop/purpose.md`, `contract.md`, and `test.md` from [[location-47-after-desktop]] Funding plus `docs/` or the smallest reversible default.

Current: Native is funded on [[purpose-desktop-embedder]]. Desktop honesty is met on [[slice-76-desktop-vsync-window]]. [[task-301-spec-after-desktop]] writes the after-desktop folder for Desktop first. Funding is out of scope there.

Desired: the funding gate is promised. Mobile is pursued only if native UI is funded. Pivot if native UI is never funded.

Locked defaults from [[rounds-319-freeze-funding]]: no public `NativeFunded` or `mayPursueMobile` type. No `docs/specs/ui-framework/funding/` area. The funded fact stays on [[purpose-desktop-embedder]]. Do not edit [[contract-desktop-embedder]]. Do not invent Phase 3 already-true, after-human-decision, if-native-funded, or optional words. Do not rewrite Desktop first promises.

Out of scope: product code. Phase 3 gate unstated. Restaging [[slice-300-desktop-first]] or [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]]. Repeating desktop vsync, window, no-WebView, or no-JS-engine oracles. Re-proving Native is funded.

## Verify

The after-desktop spec files exist. Contract promise ids name the funding gate. Open product questions are none. No product code. Desktop first promises still hold.

scope: docs/specs/ui-framework/after-desktop/

## Links

- [[slice-320-funding]]
- [[task-301-spec-after-desktop]]
- [[rounds-319-freeze-funding]]
- [[location-47-after-desktop]]
- [[purpose-desktop-embedder]]
