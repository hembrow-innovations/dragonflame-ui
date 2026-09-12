---
id: "slice-300-desktop-first"
title: "Desktop first"
kind: slice
status: met
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-76-desktop-vsync-window"
tags: []
created_at: "2026-09-11T23:43:50Z"
updated_at: "2026-09-12T05:57:30Z"
---

# Desktop first

## Why

After-desktop gate. Mobile hosts start only after the desktop embedder is honest.

## Done

Mobile follows desktop honesty.

## Blocked by

[[slice-76-desktop-vsync-window]]: after desktop honesty.

## Non-goals

Funding grain. Phase 3 gate unstated. Restaging [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], or [[slice-84-platform-view-hatch]]. WebView shells. Expo OTA. A public `AfterDesktop` or `mayStartMobile` type. Editing [[contract-desktop-embedder]]. A second honesty crate.

## Oracle checklist

- [x] O1: mobile follows desktop honesty
  CHECK: node --test tests/after-desktop/mobile-follows-desktop-honesty.test.mjs
  EXPECT: pass
  EVIDENCE: pass 1 fail 0 (2026-09-12T05:57:30Z)

## Pool

Durable links to task ids. Never drop them.

- [[task-301-spec-after-desktop]]
- [[task-302-red-green-mobile-follows-desktop-honesty]]

## See also

- [[location-47-after-desktop]]
- [[location-19-mobile-embedders]]
- [[location-39-desktop-embedder]]
- [[slice-76-desktop-vsync-window]]
- [[rounds-299-freeze-desktop-first]]
- [[purpose-desktop-embedder]]
- [[intent]]
- [[overview-ui-framework]]
