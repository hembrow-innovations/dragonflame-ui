---
id: "rounds-299-freeze-desktop-first"
title: "Freeze desktop first"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-11T23:43:50Z"
updated_at: "2026-09-11T23:43:50Z"
---

# Freeze desktop first

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN Desktop first under [[location-47-after-desktop]]. Sprint `mobile-after-desktop` may freeze. [[slice-76-desktop-vsync-window]] is met. Do not freeze Funding or Phase 3 gate unstated. Do not restage [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], or [[slice-84-platform-view-hatch]]. Do not rewrite a location destination.

## Vault pack

Query: mobile follows desktop honesty
Area: ui-framework

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-47-after-desktop.md`
- `.heio/planning/sprints/mobile-after-desktop/shape.md`
- `.heio/archive/planning/sprints/native-if-funded/slice-76-desktop-vsync-window.md`
- `docs/specs/ui-framework/desktop-embedder/purpose.md`
- `docs/specs/ui-framework/desktop-embedder/contract.md`
- `docs/overview/overview-ui-framework.md`

Related:

- `.heio/planning/locations/location-19-mobile-embedders.md`
- `.heio/planning/locations/location-39-desktop-embedder.md`
- `.heio/planning/rounds/rounds-01-chart-framework.md`
- `docs/architecture/architecture-layer-cake.md`

Excluded: scribble, Funding and Phase 3 gate unstated grains, WebView shells, Expo OTA, starting mobile before desktop, picking slice-80 through slice-84

Next: freeze Desktop first with oracles and tasks. Do not write `docs/specs/`; drain writes the ladder.

No packer script exists. Assembled by hand. Open product questions on the overview are none. after-desktop spec folder does not exist.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-47-after-desktop]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether an after-desktop spec folder exists.
4. **Repeat**: Whether desktop or mobile no-WebView oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Desktop first. Done: mobile follows desktop honesty. The after-desktop gate. Mobile hosts start only after the desktop embedder is honest. Pivot if mobile starts while desktop is still a WebView. Funding, Phase 3 gate unstated, and existing mobile slices stay out.
2. **Named set**: Desktop honesty is met [[slice-76-desktop-vsync-window]] plus locked [[contract-desktop-embedder]] promises. Embedder owns window and vsync. Engine owns GPU. No WebView native. No JS engine on native. Tracing GC stays. Smallest reversible defaults: no public `AfterDesktop` or `mayStartMobile` type. Sequencing lives in the existing embedder crate host tree as cfg siblings, not a second crate. Spec area is `after-desktop`. Test path is `tests/after-desktop/`. Do not edit [[contract-desktop-embedder]]. Do not invent Phase 3 already-true, after-human-decision, if-native-funded, or optional words. All tasks `mode: afk`.
3. **Ladder**: None. First task writes purpose, contract, and test only.
4. **Repeat**: Do not repeat desktop vsync, window, no-WebView, or no-JS-engine oracles. Those live on [[purpose-desktop-embedder]]. Do not repeat iOS no-WebView oracles. Those live on [[purpose-ios-embedder]]. Do not restage Android, store binaries, talk-and-measure, or platform-view hatch oracles.
5. **Wait**: Funding grain. Phase 3 gate unstated. Restaging [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]]. WebView shells. Expo OTA. Store names. A general LLVM lowerer. A public honesty token.

### Candidate A

Dedicated after-desktop gate. Callers ask whether mobile hosts may start. No new embedder.

#### Problem

[[location-47-after-desktop]] already named the surface: the after-desktop gate. The Desktop first grain is working when mobile follows desktop honesty. Parent [[location-19-mobile-embedders]] still waits on that honesty. Desktop vsync, window, no WebView, and no JS engine stay on [[purpose-desktop-embedder]]. [[slice-76-desktop-vsync-window]] is met. This grain must not grow an embedder, must not pull [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]], and must not freeze Funding or Phase 3 gate unstated.

#### Usage

Callers are later mobile work and AFK drain, not app code. They ask one question: may mobile hosts start. They do not import desktop window or vsync types, and they do not restage iOS or Android counters. First drain task writes purpose, contract, and test from the grain destination plus `docs/`, or the smallest reversible default. Suggested Done: mobile follows desktop honesty.

#### Shape

Public surface is the after-desktop gate only. It hides how honesty was proven. Ownership is this one slice under sprint `mobile-after-desktop` and [[location-47-after-desktop]]. Empty ladder. CHECK: desktop honesty still holds via met [[slice-76-desktop-vsync-window]], and in-sprint mobile work names that wait. EXPECT: mobile follows desktop honesty. No runtime start flag. Wait list: Funding; Phase 3 gate unstated; existing mobile slices; WebView shells; Expo OTA; new public host names.

#### Red flags

A `mayStartMobile` pass-through over desktop checks is shallow leakage. Split verify-then-allow modules are temporal decomposition. Re-exporting window or vsync types leaks [[contract-desktop-embedder]]. Folding iOS or Android hosts into this gate mixes grains.

#### Next implementation step

First AFK drain task writes purpose, contract, and test for the after-desktop gate from that Done sentence plus `docs/`.

### Candidate B

Host-tree policy in the existing embedder crate. No new gate type.

#### Problem

Honesty is already locked on [[purpose-desktop-embedder]] and met by [[slice-76-desktop-vsync-window]]. A dedicated after-desktop gate area would be a second public surface for a sequencing rule the crate already owns. The missing lock is that host-tree policy, not a new gate type callers learn.

#### Usage

Callers stay the thin shells at `hosts/ios/` and `hosts/android/`. They link `crates/embedder`. They do not import an after-desktop gate, do not call `allowMobile()`, and do not take a desktop window or vsync handle as a mobile constructor argument. A sequencing test fails if a mobile shell can start from a second crate or a WebView desktop sibling.

#### Shape

Own sequencing in the embedder crate host tree, not a new after-desktop product area. Empty ladder. Do not edit [[contract-desktop-embedder]]. Do not mint a public honesty token. Hide cfg, crate graph, and the WebView-start pivot behind that crate. No empty crate. All tasks `mode: afk`.

#### Red flags

Reject a public `AfterDesktop` or `checkHonesty()` pass-through. Reject re-exporting desktop forbid-webview into mobile constructors. Reject a second honesty crate. Reject putting mobile-start promises onto [[contract-desktop-embedder]].

#### Next implementation step

Write the empty ladder for this grain, then a red test that `hosts/ios` and `hosts/android` cannot start except as cfg siblings in `crates/embedder`.

## Synthesis

Base is Candidate A. Graft from B: no public `AfterDesktop` or `mayStartMobile` type; sequencing lives in the existing embedder crate host tree as cfg siblings; do not edit [[contract-desktop-embedder]]; no second crate.

Reject B as the slice shape: restaging iOS and Android host modules is not this grain.

Tradeoffs accepted:

- We accept a spec-and-sequencing slice, not a new host, in exchange for locking the unnamed Desktop first grain without restaging mobile counters.
- We accept no public gate type in exchange for hiding cfg and crate graph behind the existing embedder crate.
- We accept one oracle on `tests/after-desktop/` in exchange for not repeating desktop or iOS no-WebView oracles.

Alternatives considered:

- Public `mayStartMobile` API: shallow pass-through, lost.
- Mobile-start promises on [[contract-desktop-embedder]]: mobile is out of scope there, lost.
- Second honesty crate: empty crate, lost.
- Restaging [[slice-80-ios-counter]] as this grain: mixes cuts, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-47-after-desktop]], [[location-19-mobile-embedders]], [[purpose-desktop-embedder]], and [[intent]].

Next implementation step: write purpose, contract, and test for after-desktop, then red-green mobile follows desktop honesty.

### Tracer bullets

1. Spec ladder for after-desktop. blocked_by: none. AFK. Purpose, contract, and test only. No product code.
2. Red-green mobile follows desktop honesty. blocked_by: spec. AFK. `tests/after-desktop/mobile-follows-desktop-honesty.test.mjs`. Host shells follow desktop honesty as cfg siblings in `crates/embedder`. No public `AfterDesktop` type. Do not repeat desktop or iOS no-WebView oracles.

## Confirm

Confirmed.
