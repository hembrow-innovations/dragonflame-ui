---
id: "ticket-68-phase3-apis-unnamed"
title: "Native a11y and text APIs are unnamed"
kind: ticket
status: open
ticket_type: observation
blocked_by:
  - "slice-80-ios-counter"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-11T07:00:00Z"
---

# Native a11y and text APIs are unnamed

## Signal

[[location-54-accessibility]] and [[location-55-text]] exist as Phase 3 words. Semantics tree, per-host metrics, and no CSS on iOS are locked. Concrete APIs are unnamed.

## Fit

Named on [[rounds-258-name-phase3-apis]] and [[glossary]]. Keep open until [[slice-80-ios-counter]] is met, and sprint `mobile-after-desktop` may freeze. Then /afk-plan freezes [[slice-83-talk-and-measure]]. Quote the named first-tracer set. Do not invent UIKit class lists.

## Notes

First tracer: `SemanticsNode`, dump `toStringDeep`, reuse `testID` and `accessibilityLabel`, `measureText`, `loadFont` on the IO thread. Web a11y and test ID props belong to [[slice-73-testid-pressable]], not a second native prop set. Drain does not claim this ticket.
