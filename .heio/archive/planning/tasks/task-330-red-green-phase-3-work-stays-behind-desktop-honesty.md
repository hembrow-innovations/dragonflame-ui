---
id: "task-330-red-green-phase-3-work-stays-behind-desktop-honesty"
title: "Red-green Phase 3 work stays behind desktop honesty"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-329-spec-phase-3-gate-unstated"
sprint: "mobile-after-desktop"
slice: "slice-328-phase-3-gate-unstated"
tags: []
created_at: "2026-09-12T05:12:35Z"
updated_at: "2026-09-12T07:36:11Z"
---

# Red-green Phase 3 work stays behind desktop honesty

## Blocked by

[[task-329-spec-phase-3-gate-unstated]]: unstated-gate promise first.

## Done

`node --test tests/after-desktop/phase-3-work-stays-behind-desktop-honesty.test.mjs` passes.

## Context

Current: Desktop honesty is met on [[slice-76-desktop-vsync-window]]. Overview Phase 3 is an unqualified work list. Mobile host shells exist. No unstated-gate oracle.

Desired: the test proves Phase 3 work stays behind desktop honesty. Overview Phase 3 stays unqualified. No public `Phase3Gate` type. No second gate crate. No `docs/specs/ui-framework/phase-3-gate/` area.

Do not repeat desktop vsync, window, no-WebView, or no-JS-engine oracles. Those live on [[purpose-desktop-embedder]]. Do not restage [[slice-300-desktop-first]], [[slice-320-funding]], or [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]]. Do not edit [[contract-desktop-embedder]]. Do not invent Phase 3 already-true, after-human-decision, if-native-funded, or optional words.

## Verify

CHECK: node --test tests/after-desktop/phase-3-work-stays-behind-desktop-honesty.test.mjs
EXPECT: pass

scope: tests/after-desktop/ crates/embedder/ docs/specs/ui-framework/after-desktop/

## Links

- [[slice-328-phase-3-gate-unstated]]
- [[task-329-spec-phase-3-gate-unstated]]
- [[rounds-327-freeze-phase-3-gate-unstated]]

## Gauntlet

- **round 1**: `node --test tests/after-desktop/phase-3-work-stays-behind-desktop-honesty.test.mjs`; win; 1 pass 0 fail
