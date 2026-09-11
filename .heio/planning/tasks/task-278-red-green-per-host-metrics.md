---
id: "task-278-red-green-per-host-metrics"
title: "Red-green: per-host metrics seam"
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

# Red-green: per-host metrics seam

## Blocked by

[[task-276-spec-talk-and-measure]]: spec first. [[task-267-red-green-counter-on-simulator]]: iOS host first.

## Done

`measureText` is the per-host metrics seam. Sizes may disagree across hosts. CSS is not iOS layout. `loadFont` runs on the IO thread.

## Context

TDD: write the O2 tests named in the talk-and-measure spec. Red, then implement. Per-host metrics seam is `measureText`. Font load is `loadFont` on the IO thread, not the UI thread. CSS is not iOS layout.

Do not prove the semantics dump; that is [[task-277-red-green-semantics-dump]]. Do not invent `Paragraph.layout`, `TextPainter`, or Skia for text. Do not invent UIKit class lists. Do not pretend CSS on iOS.

## Verify

O2 command named in the talk-and-measure spec test.md passes.

scope: tests/ named by that spec, plus the measureText and loadFont seam this task must add

## Links

- [[slice-83-talk-and-measure]]
- [[task-276-spec-talk-and-measure]]
- [[ticket-68-phase3-apis-unnamed]]

## Gauntlet

- round 1: `node --test tests/talk-and-measure/per-host-metrics.test.mjs` win. Promise `measureText` is per-host and `loadFont` is not on the UI thread.

## Agent Brief

**Category:** enhancement
**Summary:** Prove measureText is a per-host seam and loadFont runs on the IO thread.

**Intent (required when product behaviour changes):**
- Promise ids: the metrics and font promises named by [[task-276-spec-talk-and-measure]]
- Purpose: [[purpose-talk-and-measure]]
- Contract-first: assert promise then test then code

**Current behavior:**
Text is a host leaf. Native text metrics and IO font load are unnamed in source. CSS is forbidden as native layout.

**Desired behavior:**
O2 passes: `measureText` may disagree across DOM, UIKit, and the engine. CSS is not iOS layout. `loadFont` runs on the IO thread.

**Key interfaces:**
- `measureText` as the per-host metrics seam
- `loadFont` on the IO thread

**Acceptance criteria:**
- [ ] `node --test tests/talk-and-measure/per-host-metrics.test.mjs` passes
- [ ] CSS is not treated as iOS layout
- [ ] Promise ids from the spec still hold

**Out of scope:**
- O1 semantics dump
- `Paragraph.layout`, `TextPainter`, Skia for text
- UIKit class lists
- Glyph atlas and font file formats
