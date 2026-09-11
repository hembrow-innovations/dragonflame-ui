---
id: "task-276-spec-talk-and-measure"
title: "Spec talk and measure"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-267-red-green-counter-on-simulator"
sprint: "mobile-after-desktop"
slice: "slice-83-talk-and-measure"
tags: []
created_at: "2026-09-11T10:08:39Z"
updated_at: "2026-09-11T10:08:39Z"
---

# Spec talk and measure

## Blocked by

[[task-267-red-green-counter-on-simulator]]: iOS host first.

## Done

Talk-and-measure spec folder exists from [[location-54-accessibility]], [[location-55-text]], [[rounds-258-name-phase3-apis]], and [[ticket-68-phase3-apis-unnamed]]: `SemanticsNode` dump `toStringDeep`, reuse `testID` and `accessibilityLabel`, `measureText`, `loadFont` on the IO thread.

## Context

Write purpose, contract, and test.md from [[rounds-258-name-phase3-apis]] and [[location-54-accessibility]] plus [[location-55-text]]. Quote child destination sentences.

First tracer: framework node is `SemanticsNode`. Dump is `toStringDeep`. Reuse `testID` and `accessibilityLabel`. Per-host metrics seam is `measureText`. Font load is `loadFont` on the IO thread. Embedder owns a11y plumbing. Signals do not replace semantics. Sizes may disagree across DOM, UIKit, and the engine. CSS is not iOS layout.

Do not invent `SemanticsOwner`, Flutter `SemanticsBinding`, RN `AccessibilityInfo`, `accessibilityHint`, `liveRegion`, `UIAccessibility`, `AccessibilityNodeInfo`, UIKit or Android view class lists, `Paragraph.layout`, or `TextPainter`. Do not invent a second native a11y prop set. Do not repeat web a11y and test ID oracles. Those live on [[purpose-a11y-test-ids]]. Do not repeat iOS host honesty oracles. Those live on [[purpose-ios-embedder]]. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files exist and name the two oracle tests.

scope: docs/specs/ui-framework/talk-and-measure/

## Links

- [[slice-83-talk-and-measure]]
- [[ticket-68-phase3-apis-unnamed]]
- [[rounds-258-name-phase3-apis]]
- [[location-54-accessibility]]
- [[location-55-text]]

## Agent Brief

**Category:** enhancement
**Summary:** Assert the talk-and-measure ladder: SemanticsNode dump, per-host measureText, loadFont on the IO thread.

**Intent (required when product behaviour changes):**
- Promise ids: assert `talk-and-measure` promises from [[location-54-accessibility]] and [[location-55-text]]; do not invent UIKit class lists
- Purpose: write [[purpose-talk-and-measure]] in this sitting
- Contract-first: assert promise then name tests in test.md. No product code

**Current behavior:**
[[glossary]] names `SemanticsNode`, `toStringDeep`, `measureText`, and `loadFont`. No talk-and-measure spec folder exists. Slice oracles are now named commands.

**Desired behavior:**
A spec folder locks two oracles: a semantics tree dump beside the render tree, and a per-host text metrics seam with font load off the UI thread. Oracle commands are `node --test tests/talk-and-measure/semantics-dump.test.mjs` and `node --test tests/talk-and-measure/per-host-metrics.test.mjs`.

**Key interfaces:**
- Purpose, contract, and test notes for area `talk-and-measure`
- Promises must name `SemanticsNode`, `toStringDeep`, reuse of `testID` and `accessibilityLabel`, `measureText`, and `loadFont` on the IO thread
- Promises must not name UIKit class lists or a second native prop set

**Acceptance criteria:**
- [ ] purpose, contract, and test.md exist for talk-and-measure
- [ ] test.md names both oracle commands above
- [ ] First-tracer names match [[rounds-258-name-phase3-apis]]
- [ ] No product code

**Out of scope:**
- Implementing the dump or metrics seam
- Web a11y props on [[purpose-a11y-test-ids]]
- Repeating iOS embedder host oracles
- `SemanticsOwner`, `AccessibilityInfo`, `Paragraph.layout`, `TextPainter`
