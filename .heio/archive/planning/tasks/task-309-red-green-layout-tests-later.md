---
id: "task-309-red-green-layout-tests-later"
title: "Red-green layout tests later"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-308-spec-layout-tests-later"
sprint: "framework-in-draconic"
slice: "slice-307-layout-tests-later"
tags: []
created_at: "2026-09-12T13:00:00Z"
updated_at: "2026-09-12T17:45:00Z"
---

# Red-green layout tests later

## Blocked by

[[task-308-spec-layout-tests-later]]: ladder must lock `layout-tests.placement:no-taffy-list` before tests.

## Done

`node --test tests/layout-tests/no-taffy-list.test.mjs` passes.

## Context

Callers get no layout test API. The prove is placement: this tests location does not invent a Taffy test list now that native is funded. Frozen-algorithm CHECKs stay in `tests/ffi-scene-commands/`. `tests/layout-tests/` is the fence, not a Taffy suite.

Do not copy `tests/ffi-scene-commands/taffy-rect.test.mjs`. Do not add a public LayoutEngine. Do not restage `tests/web-layout/no-taffy-on-web.test.mjs`. Do not rewrite [[location-42-native-layout]].

TDD: red test, then the smallest green that locks the oracle.

## Verify

The oracle command passes. No public LayoutEngine. No Taffy case list under `tests/layout-tests/`. taffy-rect stays on ffi-scene-commands.

scope: tests/layout-tests/

## Links

- [[slice-307-layout-tests-later]]
- [[task-308-spec-layout-tests-later]]
- [[location-29-tests]]
- [[rounds-306-freeze-layout-tests-later]]

## Agent Brief

**Category:** enhancement
**Summary:** Red-green placement honesty: this tests location does not invent a Taffy test list.

**Intent (required when product behaviour changes):**
- Promise ids: `layout-tests.placement:no-taffy-list`
- Purpose: [[purpose-layout-tests]] after the spec task
- Contract-first: the test named in test.md must pass

**Current behavior:**
No `tests/layout-tests/` folder. Native is funded. Taffy-rect lives under `tests/ffi-scene-commands/`.

**Desired behavior:**
The oracle command passes. Named test: this tests location does not invent a Taffy test list. `tests/layout-tests/` does not host Taffy algorithm cases. Ownership does not move here because native is funded.

**Key interfaces:**
- New test file `tests/layout-tests/no-taffy-list.test.mjs`
- No public LayoutEngine, Yoga, or layout-test helper

**Acceptance criteria:**
- [x] `node --test tests/layout-tests/no-taffy-list.test.mjs` passes
- [x] The named test owns placement, not a Taffy case list
- [x] No public LayoutEngine
- [x] `tests/ffi-scene-commands/taffy-rect.test.mjs` still passes
- [x] `tests/web-layout/no-taffy-on-web.test.mjs` still passes

**Out of scope:**
- Inventing a Taffy case list
- Pointing this CHECK at taffy-rect
- Restaging web-layout honesty
- Rewriting [[location-42-native-layout]]
- Implementing the compiler

## Gauntlet

- **round 1**: `node --test tests/layout-tests/no-taffy-list.test.mjs`; lose; `no-taffy-on-web` treated `no-taffy-list` as Taffy-on-web
- **round 2**: `node --test tests/layout-tests/no-taffy-list.test.mjs`; win; 1 pass 0 fail; `isTaffyOnWebPath` ignores `no-taffy`
