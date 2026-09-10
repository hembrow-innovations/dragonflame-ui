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
updated_at: "2026-09-11T18:00:00Z"
---

# Native a11y and text APIs are unnamed

## Signal

[[location-54-accessibility]] and [[location-55-text]] exist as Phase 3 words. Semantics tree, per-host metrics, and no CSS on iOS are locked. Concrete APIs are unnamed.

## Fit

Open and blocked until [[slice-80-ios-counter]] is met, and sprint `mobile-after-desktop` may freeze. Then /afk-plan freezes [[slice-83-talk-and-measure]] AFK. Oracles quote those locations only: semantics tree beside the render tree, embedder plumbing, per-host metrics seam, no CSS on iOS, font load not on the UI thread. Do not invent UIKit class lists.

## Notes

Web a11y and test ID props belong to [[slice-73-testid-pressable]], not here.
