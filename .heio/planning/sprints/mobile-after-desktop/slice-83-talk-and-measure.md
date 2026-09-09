---
id: "slice-83-talk-and-measure"
title: "Talk and measure"
kind: slice
status: shaping
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-80-ios-counter"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# Talk and measure

## Why

Native trees demo. Semantics beside the render tree. Text metrics disagree across hosts on purpose.

## Done

A semantics tree exists beside the render tree. Embedder owns a11y plumbing. A per-host text metrics seam exists. CSS is not iOS layout. Font load is not required to block the UI thread.

## Blocked by

[[slice-80-ios-counter]]. [[ticket-68-phase3-apis-unnamed]]: APIs unnamed in the source stay unnamed.

## Non-goals

ARIA-only DOM as the native a11y model. Pretending CSS on iOS. Inventing UIKit class lists.

## Oracle checklist

- [ ] O1: semantics tree dump
  CHECK: command named in the talk-and-measure spec test.md after freeze
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: per-host metrics seam
  CHECK: command named in that spec
  EXPECT: pass
  EVIDENCE: pending

## Pool

None until freeze.

## See also

- [[location-54-accessibility]]
- [[location-55-text]]
