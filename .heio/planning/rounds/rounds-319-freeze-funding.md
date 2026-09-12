---
id: "rounds-319-freeze-funding"
title: "Freeze funding"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T04:10:34Z"
updated_at: "2026-09-12T04:10:34Z"
---

# Freeze funding

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN Funding under [[location-47-after-desktop]]. Sprint `mobile-after-desktop` may freeze. [[slice-76-desktop-vsync-window]] is met. Native is funded on [[purpose-desktop-embedder]]. Do not freeze Phase 3 gate unstated. Do not restage [[slice-300-desktop-first]], [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], or [[slice-84-platform-view-hatch]]. Do not rewrite a location destination.

## Vault pack

Query: this is working when mobile is pursued only if native UI is funded
Area: after-desktop

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-47-after-desktop.md`
- `.heio/planning/sprints/mobile-after-desktop/shape.md`
- `docs/overview/overview-ui-framework.md`
- `docs/specs/ui-framework/desktop-embedder/purpose.md`
- `docs/specs/ui-framework/desktop-embedder/contract.md`

Related:

- `.heio/planning/locations/location-19-mobile-embedders.md`
- `.heio/planning/locations/location-39-desktop-embedder.md`
- `.heio/planning/rounds/rounds-01-chart-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `.heio/planning/sprints/mobile-after-desktop/slice-300-desktop-first.md`
- `docs/specs/ui-framework/ios-embedder/purpose.md`

Excluded: scribble; archive; no vault packer; Phase 3 gate unstated; restaging slice-80 through slice-84; Desktop first already sliced; WebView shells; Expo OTA

Next: freeze grain Funding on location-47-after-desktop. Do not write `docs/specs/` in this sitting. Empty after-desktop ladder: first drain task asserts purpose, contract, and test from the location destination plus `docs/`.

No packer script exists. Assembled by hand. Open product questions on the overview are none. after-desktop spec folder does not exist. [[task-301-spec-after-desktop]] will create it for Desktop first only.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-47-after-desktop]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether an after-desktop spec folder exists.
4. **Repeat**: Whether desktop or mobile no-WebView oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Funding. Done: mobile is pursued only if native UI is funded. The after-desktop funding gate. Mobile work is pursued because native UI is funded. Pivot if native UI is never funded. Phase 3 gate unstated, Desktop first, and existing mobile slices stay out.
2. **Named set**: Native is funded on [[purpose-desktop-embedder]]. Phase 2 is only if native UI is funded. [[intent]] Success: when native is funded, a real binary. Desktop honesty is met [[slice-76-desktop-vsync-window]]. Smallest reversible defaults: no public `NativeFunded` or `mayPursueMobile` type. No `docs/specs/ui-framework/funding/` area. The funded fact stays on [[purpose-desktop-embedder]]. Spec area is `after-desktop`, extended after [[task-301-spec-after-desktop]]. Test path is `tests/after-desktop/`. Do not edit [[contract-desktop-embedder]]. Do not invent Phase 3 already-true, after-human-decision, if-native-funded, or optional words. All tasks `mode: afk`.
3. **Ladder**: None. [[task-301-spec-after-desktop]] writes purpose, contract, and test for Desktop first. This sitting does not write specs. First Funding drain task extends that ladder with the funding promise after task-301.
4. **Repeat**: Do not repeat desktop vsync, window, no-WebView, or no-JS-engine oracles. Those live on [[purpose-desktop-embedder]]. Do not re-prove Native is funded. Cite it. Do not restage Desktop first or iOS, Android, store binaries, talk-and-measure, or platform-view hatch oracles.
5. **Wait**: Phase 3 gate unstated. Restaging [[slice-300-desktop-first]] and [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]]. WebView shells. Expo OTA. A public funding token. A second funding crate. A `funding/` spec area.

### Candidate A

Dedicated Funding gate. Callers ask whether mobile may be pursued given native funding. Native is already funded, so the gate is true. No new embedder.

#### Problem

[[location-47-after-desktop]] already named this surface: the Funding gate, not a type. The grain is working when mobile is pursued only if native UI is funded. Pivot if native UI is never funded. Sibling [[slice-300-desktop-first]] already froze Desktop first and listed Funding as a non-goal. [[purpose-desktop-embedder]] already asserts Native is funded, engine home is this repo, and the Phase 2 gate is pursued only if native UI is funded. Overview Phase 2 is only if native UI is funded. Phase 3 has no funding words; do not invent them. [[intent]] Success: when native is funded, compile to a real binary. [[location-19-mobile-embedders]] bets try mobile after desktop honesty and pivot if native UI is never funded. [[task-301-spec-after-desktop]] will write `docs/specs/ui-framework/after-desktop/` for Desktop first only; Funding is out of scope there and that folder does not exist yet. This grain must not grow an embedder, must not edit [[contract-desktop-embedder]], must not restage [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]], and must not rewrite the location destination.

#### Usage

Callers are later mobile work and AFK drain, not app code. They ask one question: given native funding, may mobile be pursued. They do not import desktop window or vsync types, do not call a public `NativeFunded` or `mayPursueMobile` helper, and they do not restage iOS or Android counters. Native is already funded, so the answer is yes. First drain task writes purpose, contract, and test from the grain destination plus `docs/`, or the smallest reversible default. Suggested Done: mobile is pursued only if native UI is funded.

#### Shape

Public surface is the Funding gate only. It hides how funding was locked on [[purpose-desktop-embedder]], Phase 2, and [[intent]]. No public gate token, matching the sibling’s ban on `AfterDesktop` and `mayStartMobile`. Sequencing lives as a funding promise in a dedicated after-desktop funding cut, not on [[contract-desktop-embedder]], and not inside the Desktop first folder [[task-301-spec-after-desktop]] will own. Ownership is this one slice under sprint `mobile-after-desktop` and the Funding grain on [[location-47-after-desktop]]. Empty ladder. No runtime start flag. No new embedder. No second crate. CHECK: native remains funded so pursue is allowed, and in-sprint mobile work names that wait. EXPECT: mobile is pursued only if native UI is funded. Wait list: Phase 3 gate unstated; restaging existing mobile slices; WebView shells; Expo OTA; public `NativeFunded` or `mayPursueMobile`; Phase 3 already-true, after-human-decision, if-native-funded, or optional words.

#### Red flags

A public `NativeFunded` or `mayPursueMobile` pass-through over already-true funding is shallow leakage. Split check-funding then allow-mobile modules are temporal decomposition. Re-exporting the Phase 2 gate or putting this promise on [[contract-desktop-embedder]] leaks desktop-embedder. Folding this into `docs/specs/ui-framework/after-desktop/` mixes grains with Desktop first. Inventing Phase 3 funding words is the other nested grain. A second funding crate is an empty pass-through.

#### Next implementation step

First AFK drain task writes purpose, contract, and test for the dedicated funding cut from that Done sentence plus `docs/`.

### Candidate B

Own the funded fact on [[purpose-desktop-embedder]]. No Funding gate.

#### Problem

The Funding grain under [[location-47-after-desktop]] is working when mobile is pursued only if native UI is funded. That fact already lives on [[purpose-desktop-embedder]] as Native is funded, with engine home this repo, and Phase 2 pursued only if native UI is funded. [[intent]] success is a real binary when native is funded. Overview Phase 2 carries the only-if-funded words; the Phase 3 bullet has none. [[location-19-mobile-embedders]] still bets try mobile after desktop honesty and pivot if native UI is never funded. [[slice-300-desktop-first]] already locked honesty sequencing and left this grain out. A dedicated Funding gate would be a second public surface for a fact the desktop purpose already owns.

#### Usage

Callers are later mobile work and the AFK drain, not app code. They do not import a funding gate, do not call `isNativeFunded()`, and do not take a funding token as a mobile constructor argument. Thin shells at `hosts/ios/` and `hosts/android/` keep linking `crates/embedder`. A sequencing test fails if in-sprint mobile work in `mobile-after-desktop` exists without that already-true Native is funded sentence, or if a public `NativeFunded` type appears. First drain writes purpose, contract, and test from the grain destination plus `docs/`, or the smallest reversible default. Suggested Done: mobile is pursued only if native UI is funded.

#### Shape

No new funding product area and no public `NativeFunded` type. Own the funded fact where it already lives on [[purpose-desktop-embedder]]. This slice’s CHECK is that in-sprint mobile work exists only because that sentence is already true. Hide how funding was decided, including [[rounds-160-fund-native]] and overview Phase 2 wording. Do not put mobile-start or funding-pursuit promises onto [[contract-desktop-embedder]]. Do not invent Phase 3 already-true, after-human-decision, if-native-funded, or optional words. Empty ladder. No second crate. Sequencing stays in the existing embedder crate host tree. All tasks `mode: afk`. Wait list: Phase 3 gate unstated; restaging [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]]; WebView shells; Expo OTA; a second funding area; editing [[contract-desktop-embedder]].

#### Red flags

Reject a public `NativeFunded` or `isNativeFunded()` pass-through. Reject `docs/specs/ui-framework/funding/` as a second area for a fact desktop purpose already owns. Reject putting mobile-start promises onto [[contract-desktop-embedder]]. Reject split decide-funding then allow-mobile modules. Reject a second crate. Reject restaging mobile counters. Reject repeating desktop vsync, window, no-WebView, or no-JS-engine oracles.

#### Next implementation step

Write the empty ladder for this grain, then a red test that in-sprint mobile work exists only because [[purpose-desktop-embedder]] already says Native is funded, with no funding area and no `NativeFunded` type.

## Synthesis

Base is Candidate A. Graft from B: no public `NativeFunded` or `mayPursueMobile` type; the funded fact stays on [[purpose-desktop-embedder]]; no `docs/specs/ui-framework/funding/` area; do not edit [[contract-desktop-embedder]]; no second crate.

Reject B as the slice shape: folding mobile pursuit into desktop-embedder purpose mixes grains. Mobile embedders are out of scope on [[purpose-desktop-embedder]].

Tradeoffs accepted:

- We accept a spec-and-sequencing slice, not a new host, in exchange for locking the unnamed Funding grain without restaging mobile counters.
- We accept no public gate type in exchange for citing Native is funded where it already lives.
- We accept extending `after-desktop` after [[task-301-spec-after-desktop]] in exchange for not minting a second funding area.
- We accept one oracle on `tests/after-desktop/` in exchange for not repeating desktop or iOS no-WebView oracles.

Alternatives considered:

- Public `NativeFunded` API: shallow pass-through, lost.
- Mobile-pursuit promises on [[contract-desktop-embedder]]: mobile is out of scope there, lost.
- `docs/specs/ui-framework/funding/` area: second surface for an already-true fact, lost.
- Second funding crate: empty crate, lost.
- Restaging [[slice-80-ios-counter]] as this grain: mixes cuts, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-47-after-desktop]], [[location-19-mobile-embedders]], [[purpose-desktop-embedder]], and [[intent]].

Next implementation step: extend after-desktop with the funding promise after [[task-301-spec-after-desktop]], then red-green mobile is pursued only if native UI is funded.

### Tracer bullets

1. Spec funding promise on after-desktop. blocked_by: [[task-301-spec-after-desktop]]. AFK. Purpose, contract, and test only. No product code. Do not rewrite Desktop first promises.
2. Red-green mobile is pursued only if native UI is funded. blocked_by: spec. AFK. `tests/after-desktop/mobile-pursued-only-if-native-funded.test.mjs`. Cite Native is funded on [[purpose-desktop-embedder]]. No public `NativeFunded` type. Do not repeat desktop or iOS no-WebView oracles.

## Confirm

Confirmed.
