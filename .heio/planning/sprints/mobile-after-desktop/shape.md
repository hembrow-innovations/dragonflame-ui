---
id: "mobile-after-desktop"
title: "Mobile after desktop"
kind: sprint
status: active
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-12T07:25:41Z"
---

# Mobile after desktop

## Grouping

Location: [[location-19-mobile-embedders]]. Phase 3 demos after desktop honesty. Same counter, new hosts. Freeze when desktop honesty holds. [[slice-76-desktop-vsync-window]] is met.

## Slices in

- [[slice-80-ios-counter]]: counter on iOS sim. blocked_by: [[slice-76-desktop-vsync-window]] and [[slice-70-counter-on-dom]]. met
- [[slice-81-android-counter]]: counter on Android emulator. blocked_by: [[slice-76-desktop-vsync-window]] and [[slice-70-counter-on-dom]]. active
- [[slice-82-store-binaries]]: packaged binary, not OTA JS. blocked_by: [[slice-80-ios-counter]] and [[slice-81-android-counter]]. frozen
- [[slice-83-talk-and-measure]]: semantics tree plus text metrics. blocked_by: [[slice-80-ios-counter]]. frozen
- [[slice-84-platform-view-hatch]]: mobile view in the hatch slot. blocked_by: [[slice-79-oem-hatch-slot]] and [[slice-80-ios-counter]]. frozen
- [[slice-300-desktop-first]]: mobile follows desktop honesty. blocked_by: [[slice-76-desktop-vsync-window]]. frozen
- [[slice-320-funding]]: mobile is pursued only if native UI is funded. blocked_by: [[slice-76-desktop-vsync-window]]. frozen
- [[slice-328-phase-3-gate-unstated]]: Phase 3 work stays behind desktop honesty. blocked_by: [[slice-76-desktop-vsync-window]]. frozen
- [[slice-356-not-toolchain-d04]]: these triples are this product's mobile packaging, not toolchain D04. blocked_by: [[slice-76-desktop-vsync-window]]. frozen
- [[slice-360-android-not-toolchain-d04]]: these triples are this product's mobile packaging, not toolchain D04. blocked_by: [[slice-76-desktop-vsync-window]]. frozen
- [[slice-364-pipeline-copy]]: a semantics tree is copied as architecture beside the render tree, with a gesture arena and vsync tickers. blocked_by: [[slice-76-desktop-vsync-window]]. frozen

## Slices out

- starting mobile before desktop, WebView shells, Expo OTA
