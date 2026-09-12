---
id: "task-301-spec-after-desktop"
title: "Spec after-desktop"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "mobile-after-desktop"
slice: "slice-300-desktop-first"
tags: []
created_at: "2026-09-11T23:43:50Z"
updated_at: "2026-09-12T05:50:25Z"
---

# Spec after-desktop

## Blocked by

None.

## Done

Purpose, contract, and test exist for after-desktop. Mobile follows desktop honesty.

## Context

Empty ladder. Write `docs/specs/ui-framework/after-desktop/purpose.md`, `contract.md`, and `test.md` from [[location-47-after-desktop]] Desktop first plus `docs/` or the smallest reversible default.

Current: desktop honesty is met on [[slice-76-desktop-vsync-window]] and locked on [[purpose-desktop-embedder]]. Mobile slices already exist. No after-desktop spec folder.

Desired: the gate is promised. Mobile hosts start only after the desktop embedder is honest. Pivot if mobile starts while desktop is still a WebView.

Locked defaults from [[rounds-299-freeze-desktop-first]]: no public `AfterDesktop` or `mayStartMobile` type. Sequencing lives in the existing embedder crate host tree as cfg siblings, not a second crate. Do not edit [[contract-desktop-embedder]]. Do not invent Phase 3 already-true, after-human-decision, if-native-funded, or optional words.

Out of scope: product code. Funding grain. Phase 3 gate unstated. Restaging [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]]. Repeating desktop vsync, window, no-WebView, or no-JS-engine oracles. Repeating iOS no-WebView oracles.

## Verify

The three spec files exist. Contract promise ids name follow-desktop honesty. Open product questions are none. No product code.

scope: docs/specs/ui-framework/after-desktop/

## Links

- [[slice-300-desktop-first]]
- [[rounds-299-freeze-desktop-first]]
- [[location-47-after-desktop]]
- [[purpose-desktop-embedder]]
