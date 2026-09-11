---
id: "task-302-red-green-mobile-follows-desktop-honesty"
title: "Red-green mobile follows desktop honesty"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-301-spec-after-desktop"
sprint: "mobile-after-desktop"
slice: "slice-300-desktop-first"
tags: []
created_at: "2026-09-11T23:43:50Z"
updated_at: "2026-09-11T23:43:50Z"
---

# Red-green mobile follows desktop honesty

## Blocked by

[[task-301-spec-after-desktop]]: purpose, contract, and test first.

## Done

`node --test tests/after-desktop/mobile-follows-desktop-honesty.test.mjs` passes.

## Context

Current: desktop honesty holds. Mobile host shells exist. No after-desktop oracle.

Desired: the test proves mobile follows desktop honesty. Host shells follow that honesty as cfg siblings in `crates/embedder`. No public `AfterDesktop` type. No second honesty crate.

Do not repeat desktop vsync, window, no-WebView, or no-JS-engine oracles. Those live on [[purpose-desktop-embedder]]. Do not repeat iOS no-WebView oracles. Do not restage [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]]. Do not edit [[contract-desktop-embedder]].

## Verify

CHECK: node --test tests/after-desktop/mobile-follows-desktop-honesty.test.mjs
EXPECT: pass

scope: tests/after-desktop/ crates/embedder/ docs/specs/ui-framework/after-desktop/

## Links

- [[slice-300-desktop-first]]
- [[task-301-spec-after-desktop]]
- [[rounds-299-freeze-desktop-first]]
