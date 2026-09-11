---
id: "slice-83-talk-and-measure"
title: "Talk and measure"
kind: slice
status: frozen
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-80-ios-counter"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-11T21:08:57Z"
---

# Talk and measure

## Why

Native trees demo. Semantics beside the render tree. Text metrics disagree across hosts on purpose.

## Done

A semantics tree exists beside the render tree. Embedder owns a11y plumbing. A per-host text metrics seam exists. CSS is not iOS layout. Font load is not required to block the UI thread.

## Blocked by

[[slice-80-ios-counter]]. [[ticket-68-phase3-apis-unnamed]] promoted here: first-tracer names live on [[rounds-258-name-phase3-apis]] and [[glossary]].

## Non-goals

ARIA-only DOM as the native a11y model. Pretending CSS on iOS. Inventing UIKit class lists. `SemanticsOwner`. Flutter `SemanticsBinding`. RN `AccessibilityInfo`. `accessibilityHint`. `liveRegion`. `Paragraph.layout`. `TextPainter`. Skia for text. A second native a11y prop set.

## Oracle checklist

- [x] O1: semantics tree dump
  CHECK: node --test tests/talk-and-measure/semantics-dump.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/talk-and-measure/semantics-dump.test.mjs; 1 pass 0 fail
- [ ] O2: per-host metrics seam
  CHECK: node --test tests/talk-and-measure/per-host-metrics.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-276-spec-talk-and-measure]]
- [[task-277-red-green-semantics-dump]]
- [[task-278-red-green-per-host-metrics]]

## See also

- [[location-54-accessibility]]
- [[location-55-text]]
- [[location-32-host-leaves]]
- [[ticket-68-phase3-apis-unnamed]]
- [[rounds-258-name-phase3-apis]]
- [[glossary]]
