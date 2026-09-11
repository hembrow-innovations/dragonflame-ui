---
id: "task-277-red-green-semantics-dump"
title: "Red-green: semantics tree dump"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-276-spec-talk-and-measure"
  - "task-267-red-green-counter-on-simulator"
sprint: "mobile-after-desktop"
slice: "slice-83-talk-and-measure"
tags: []
created_at: "2026-09-11T10:08:39Z"
updated_at: "2026-09-11T10:08:39Z"
---

# Red-green: semantics tree dump

## Blocked by

[[task-276-spec-talk-and-measure]]: spec first. [[task-267-red-green-counter-on-simulator]]: iOS host first.

## Done

A semantics tree sits beside the render tree. `SemanticsNode` dumps with `toStringDeep`. `testID` and `accessibilityLabel` are reused. Signals do not replace it.

## Context

TDD: write the O1 tests named in the talk-and-measure spec. Red, then implement. Framework node is `SemanticsNode`. Dump is `toStringDeep`. Reuse `testID` and `accessibilityLabel`. Embedder owns plumbing. Do not invent a second native prop set.

Do not prove `measureText` or `loadFont`; that is [[task-278-red-green-per-host-metrics]]. Do not invent `SemanticsOwner`, `AccessibilityInfo`, `accessibilityHint`, `liveRegion`, or UIKit class lists. Do not treat ARIA-only DOM as the native a11y model.

## Verify

O1 command named in the talk-and-measure spec test.md passes.

scope: tests/ named by that spec, plus the semantics tree this task must add

## Links

- [[slice-83-talk-and-measure]]
- [[task-276-spec-talk-and-measure]]
- [[ticket-68-phase3-apis-unnamed]]

## Gauntlet

- round 1: `node --test tests/talk-and-measure/semantics-dump.test.mjs` win. Promise a `SemanticsNode` tree dumps with `toStringDeep` beside the render tree.

## Agent Brief

**Category:** enhancement
**Summary:** Prove a semantics tree beside the render tree dumps through SemanticsNode.toStringDeep.

**Intent (required when product behaviour changes):**
- Promise ids: the semantics-dump promises named by [[task-276-spec-talk-and-measure]]
- Purpose: [[purpose-talk-and-measure]]
- Contract-first: assert promise then test then code

**Current behavior:**
Web leaves have first-class `testID` and `accessibilityLabel`. No native semantics tree exists. Signals are not an a11y tree.

**Desired behavior:**
O1 passes: a `SemanticsNode` tree sits beside the render tree and dumps with `toStringDeep`. Those web props are reused. Signals do not replace semantics. Embedder owns plumbing without a public UIKit class list.

**Key interfaces:**
- `SemanticsNode` with `toStringDeep`
- Reuse of `testID` and `accessibilityLabel`

**Acceptance criteria:**
- [ ] `node --test tests/talk-and-measure/semantics-dump.test.mjs` passes
- [ ] No second native a11y prop set
- [ ] Promise ids from the spec still hold

**Out of scope:**
- O2 measureText and loadFont
- Web-only a11y oracles on [[purpose-a11y-test-ids]]
- `SemanticsOwner`, `AccessibilityInfo`, UIKit class lists
