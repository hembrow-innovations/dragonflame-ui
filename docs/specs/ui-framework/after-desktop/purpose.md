---
id: "purpose-after-desktop"
title: "After desktop purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for the after-desktop gate. Mobile follows desktop honesty. Mobile is pursued only if native UI is funded. Phase 3 work stays behind desktop honesty."
status: active
domain: ui-framework
area: after-desktop
tags: [purpose]
created_at: "2026-09-12"
updated_at: "2026-09-12"
---

# After desktop purpose

## Job

Mobile follows desktop honesty. Mobile is pursued only if native UI is funded. Phase 3 work stays behind desktop honesty.

Planning sitting [[rounds-299-freeze-desktop-first]], [[rounds-319-freeze-funding]], [[rounds-327-freeze-phase-3-gate-unstated]], [[location-47-after-desktop]], and locked [[purpose-desktop-embedder]]:

- **Desktop first**: mobile follows desktop honesty. Mobile hosts start only after the desktop embedder is honest.
- **Bet**: try mobile after desktop; pivot if mobile starts while desktop is still a WebView.
- **Desktop honesty**: met on [[slice-76-desktop-vsync-window]] and locked on [[purpose-desktop-embedder]].
- **No public gate type**: no public `AfterDesktop` or `mayStartMobile` type.
- **Sequencing**: lives in the existing embedder crate host tree as cfg siblings, not a second crate.
- **Funding**: mobile is pursued only if native UI is funded.
- **Funding bet**: try after funding and desktop; pivot if native UI is never funded.
- **Native is funded**: stays on [[purpose-desktop-embedder]].
- **No public funding type**: no public `NativeFunded` or `mayPursueMobile` type.
- **Phase 3 gate unstated**: Phase 3 work stays behind desktop honesty.
- **Phase 3 bet**: try not inventing a Phase 3 gate; pivot if mobile is scheduled as if the gate were written.
- **Unqualified Phase 3**: the Phase 3 bullet stays on [[overview-ui-framework]] with no already-true, after-human-decision, if-native-funded, or optional words.
- **No public Phase 3 gate type**: no public `Phase3Gate` or `mayStartPhase3` type.

## In scope

Child destination sentences from [[location-47-after-desktop]]:

- **Desktop first**: mobile follows desktop honesty.
- **Working**: mobile starts only after the desktop embedder is honest.
- **Funding**: mobile is pursued only if native UI is funded.
- **Phase 3 gate unstated**: Phase 3 work stays behind desktop honesty. The overview Phase 3 bullet has no already-true, after-human-decision, if-native-funded, or optional words.

This area's oracles prove mobile follows desktop honesty. They also prove mobile is pursued only if native UI is funded, and that Phase 3 work stays behind desktop honesty. They do not prove desktop vsync, window, no-WebView, or no-JS-engine. Those live on [[purpose-desktop-embedder]]. They do not re-prove Native is funded. That lives on [[purpose-desktop-embedder]]. They do not prove iOS no-WebView. That lives on [[purpose-ios-embedder]].

## Out of scope

- Restaging [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], or [[slice-84-platform-view-hatch]].
- Repeating desktop vsync, window, no-WebView, or no-JS-engine oracles. Those live on [[purpose-desktop-embedder]].
- Re-proving Native is funded. That lives on [[purpose-desktop-embedder]].
- Repeating iOS no-WebView oracles. Those live on [[purpose-ios-embedder]].
- A public `AfterDesktop` or `mayStartMobile` type.
- A public `NativeFunded` or `mayPursueMobile` type.
- A public `Phase3Gate` or `mayStartPhase3` type.
- Editing [[contract-desktop-embedder]].
- A second honesty crate.
- A second funding crate.
- A second gate crate.
- A public honesty token.
- A `docs/specs/ui-framework/funding/` area.
- A `docs/specs/ui-framework/phase-3-gate/` area.
- WebView shells. Expo OTA.

## Surfaces

Later mobile work starts only after desktop honesty. Later mobile work is pursued only if native UI is funded. Phase 3 work stays behind desktop honesty. Callers do not import `AfterDesktop` or `mayStartMobile`. Callers do not import `NativeFunded` or `mayPursueMobile`. Callers do not import `Phase3Gate` or `mayStartPhase3`. Host sequencing lives in the existing embedder crate host tree as cfg siblings. Callers do not start a mobile host from a second crate or a WebView desktop sibling. The funded fact stays on [[purpose-desktop-embedder]]. The unqualified Phase 3 bullet stays on [[overview-ui-framework]].

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-299-freeze-desktop-first]], [[rounds-319-freeze-funding]], [[rounds-327-freeze-phase-3-gate-unstated]], [[location-47-after-desktop]], [[location-19-mobile-embedders]], [[purpose-desktop-embedder]], [[overview-ui-framework]], [[intent]], and [[architecture-layer-cake]].

## Open product questions

- (none)
