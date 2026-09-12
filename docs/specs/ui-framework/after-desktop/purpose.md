---
id: "purpose-after-desktop"
title: "After desktop purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for the after-desktop gate. Mobile follows desktop honesty."
status: active
domain: ui-framework
area: after-desktop
tags: [purpose]
created_at: "2026-09-12"
updated_at: "2026-09-12"
---

# After desktop purpose

## Job

Mobile follows desktop honesty.

Planning sitting [[rounds-299-freeze-desktop-first]], [[location-47-after-desktop]], and locked [[purpose-desktop-embedder]]:

- **Desktop first**: mobile follows desktop honesty. Mobile hosts start only after the desktop embedder is honest.
- **Bet**: try mobile after desktop; pivot if mobile starts while desktop is still a WebView.
- **Desktop honesty**: met on [[slice-76-desktop-vsync-window]] and locked on [[purpose-desktop-embedder]].
- **No public gate type**: no public `AfterDesktop` or `mayStartMobile` type.
- **Sequencing**: lives in the existing embedder crate host tree as cfg siblings, not a second crate.

## In scope

Child destination sentences from [[location-47-after-desktop]]:

- **Desktop first**: mobile follows desktop honesty.
- **Working**: mobile starts only after the desktop embedder is honest.

This area's oracles prove mobile follows desktop honesty. They do not prove desktop vsync, window, no-WebView, or no-JS-engine. Those live on [[purpose-desktop-embedder]]. They do not prove iOS no-WebView. That lives on [[purpose-ios-embedder]].

## Out of scope

- Funding grain.
- Phase 3 gate unstated.
- Restaging [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], or [[slice-84-platform-view-hatch]].
- Repeating desktop vsync, window, no-WebView, or no-JS-engine oracles. Those live on [[purpose-desktop-embedder]].
- Repeating iOS no-WebView oracles. Those live on [[purpose-ios-embedder]].
- A public `AfterDesktop` or `mayStartMobile` type.
- Editing [[contract-desktop-embedder]].
- A second honesty crate.
- A public honesty token.
- WebView shells. Expo OTA.

## Surfaces

Later mobile work starts only after desktop honesty. Callers do not import `AfterDesktop` or `mayStartMobile`. Host sequencing lives in the existing embedder crate host tree as cfg siblings. Callers do not start a mobile host from a second crate or a WebView desktop sibling.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-299-freeze-desktop-first]], [[location-47-after-desktop]], [[location-19-mobile-embedders]], [[purpose-desktop-embedder]], [[intent]], and [[architecture-layer-cake]].

## Open product questions

- (none)
