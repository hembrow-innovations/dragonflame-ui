---
id: "slice-320-funding"
title: "Funding"
kind: slice
status: met
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-76-desktop-vsync-window"
tags: []
created_at: "2026-09-12T04:10:34Z"
updated_at: "2026-09-12T07:11:25Z"
---

# Funding

## Why

After-desktop funding gate. Mobile is pursued only if native UI is funded.

## Done

Mobile is pursued only if native UI is funded.

## Blocked by

[[slice-76-desktop-vsync-window]]: after desktop honesty.

## Non-goals

Phase 3 gate unstated. Restaging [[slice-300-desktop-first]], [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], or [[slice-84-platform-view-hatch]]. WebView shells. Expo OTA. A public `NativeFunded` or `mayPursueMobile` type. Editing [[contract-desktop-embedder]]. A second funding crate. A `docs/specs/ui-framework/funding/` area. Inventing Phase 3 already-true, after-human-decision, if-native-funded, or optional words.

## Oracle checklist

- [x] O1: mobile is pursued only if native UI is funded
  CHECK: node --test tests/after-desktop/mobile-pursued-only-if-native-funded.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/after-desktop/mobile-pursued-only-if-native-funded.test.mjs; 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-321-spec-funding-after-desktop]]
- [[task-322-red-green-mobile-pursued-only-if-native-funded]]

## See also

- [[location-47-after-desktop]]
- [[location-19-mobile-embedders]]
- [[location-39-desktop-embedder]]
- [[slice-76-desktop-vsync-window]]
- [[slice-300-desktop-first]]
- [[rounds-319-freeze-funding]]
- [[purpose-desktop-embedder]]
- [[intent]]
- [[overview-ui-framework]]
