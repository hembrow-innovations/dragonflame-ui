---
id: "rounds-306-freeze-layout-tests-later"
title: "Freeze layout tests later"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T13:00:00Z"
updated_at: "2026-09-12T13:00:00Z"
---

# Freeze layout tests later

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN Layout tests later under [[location-29-tests]]. Sprint `framework-in-draconic` may freeze. Do not invent a Taffy test list at this location. Do not rewrite [[location-42-native-layout]]. Do not restage [[contract-ffi-scene-commands]] `ffi-scene-commands.layout:taffy` or [[contract-web-layout]].

## Vault pack

Query: this is working when native layout, if funded, is a frozen algorithm with tests, not user CSS on native
Area: tests

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-29-tests.md`
- `.heio/planning/sprints/framework-in-draconic/shape.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/specs/ui-framework/web-layout/purpose.md`
- `docs/specs/ui-framework/web-layout/contract.md`
- `docs/specs/ui-framework/ffi-scene-commands/purpose.md`
- `docs/specs/ui-framework/ffi-scene-commands/contract.md`

Related:

- `.heio/planning/locations/location-42-native-layout.md`
- `.heio/planning/locations/location-31-web-layout.md`
- `.heio/planning/locations/location-17-web-component-library.md`
- `docs/specs/ui-framework/leaf-kit/purpose.md`
- `docs/specs/ui-framework/style-as-data/purpose.md`

Excluded: scribble; archive; no vault packer; no blocking slice in this sprint; do not invent a Taffy test list at this location

Next: freeze grain Layout tests later on location-29-tests. Do not write `docs/specs/` in this sitting. Empty ladder: first drain task asserts purpose, contract, and test from the location destination plus `docs/`.

No packer script exists. Assembled by hand. Open product questions are none.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-29-tests]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether a tests or layout-tests spec folder exists.
4. **Repeat**: Whether native-layout or web-layout oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Layout tests later. Done: native layout, if funded, is a frozen algorithm with tests, not user CSS on native. This tests location does not invent a Taffy test list. Placement of frozen-algorithm CHECKs stays on [[location-42-native-layout]] and [[contract-ffi-scene-commands]]. Pivot if this location invents a Taffy test list now.
2. **Named set**: Locked [[intent]] We will not CSS as native layout. [[architecture-layer-cake]] layout is an engine primitive with a frozen algorithm and tests. [[contract-ffi-scene-commands]] `ffi-scene-commands.layout:taffy` already proves Taffy lays out a rect. [[contract-web-layout]] already locks not-pixel-identical. Native is funded. Smallest reversible defaults: no public LayoutEngine, no Yoga, no `tests/` suite for this location that lists Taffy cases, no slice CHECK that is a pass-through to `tests/ffi-scene-commands/taffy-rect.test.mjs`. CHECK is a placement prove under `tests/layout-tests/`. All tasks `mode: afk`.
3. **Ladder**: Empty. No `docs/specs/ui-framework/layout-tests/` and no `docs/specs/ui-framework/tests/`. First drain task writes purpose, contract, and test from the location destination plus `docs/`. This sitting does not write `docs/specs/`.
4. **Repeat**: Do not restage `ffi-scene-commands.layout:taffy`, Taffy-rect, GPU-not-UI, web-layout not-pixel-identical, or copy-DOM-idea-not-Impeller. Do not restage in-sprint framework-source, host-descriptor, ticker, vsync, or public-site work. Do not freeze First-version tests or Test IDs.
5. **Wait**: A Taffy case list at this location. Rewriting [[location-42-native-layout]]. A public LayoutEngine. CSS as the native layout runtime. The first-version package test suite. Test IDs as first-class props.

### Candidate A

Tests-location fence. Existing Taffy prove. No new module.

#### Problem

[[location-29-tests]] is the tests destination for the first-version git package under [[location-17-web-component-library]], not a layout engine. The grain Layout tests later is working when native layout, if funded, is a frozen algorithm with tests, not user CSS on native. Native is already funded. [[intent]] forbids CSS as native layout. [[architecture-layer-cake]] and [[location-42-native-layout]] already name Taffy in the Rust engine. [[contract-ffi-scene-commands]] `ffi-scene-commands.layout:taffy` already locks that prove. The non-obvious cut is that funding does not move Taffy CHECKs onto location-29, and this sitting must not rewrite location-42 or mint a second Taffy list here.

#### Usage

There is no public LayoutEngine and no layout test API. Drain treats this grain as a fence. Do not add Taffy cases under a location-29 tests folder. Do not import layout helpers from the git package. The existing prove stays `node --test tests/ffi-scene-commands/taffy-rect.test.mjs`. Web honesty stays `tests/web-layout/`. First-version tests and Test IDs grains are out of this sitting.

#### Shape

The named surface is an ownership fence, not a type. Location-29 may later hold package tests for components, hyperscript, and the DOM renderer. Native layout tests stay on the ffi-scene-commands ladder plus [[location-42-native-layout]]. Depth is one rule: if native layout needs more frozen-algorithm CHECKs, they extend [[test-ffi-scene-commands]], not a pass-through at location-29.

#### Red flags

A LayoutEngine or public layout-test helper is a shallow module. Copying a Taffy suite into location-29 leaks the same prove as [[contract-ffi-scene-commands]]. A later-tests stage that only forwards `taffy-rect.test.mjs` is a pass-through. Restaging not-pixel-identical restages [[contract-web-layout]]. Inventing location-42's Taffy suite at location-29 is the grain's named pivot.

#### Next implementation step

First AFK task asserts purpose, contract, and test from the location-29 destination plus existing docs, without inventing a Taffy suite, and records CHECK ownership on `node --test tests/ffi-scene-commands/taffy-rect.test.mjs`.

### Candidate B

Placement owner. Same destination. Deeper cut.

#### Problem

Native is funded, so the time gate on [[location-29-tests]] Layout tests later is open. The destination sentence is almost the Constraints grain on [[location-42-native-layout]], and [[contract-ffi-scene-commands]] already locked `ffi-scene-commands.layout:taffy` at `tests/ffi-scene-commands/taffy-rect.test.mjs`. Treating that CHECK as this location's oracle is a pass-through and rewrites location-42. Inventing a Taffy case list here hits the grain's pivot. The non-obvious cut is placement, not the algorithm.

#### Usage

A sitting on [[location-29-tests]] that wants layout proofs does not import Taffy, does not add files under `tests/` that list Taffy cases, and does not copy `node --test tests/ffi-scene-commands/taffy-rect.test.mjs`. It asks one owner: where frozen native layout may prove live, and what this package tests location must never host. Live proofs stay on [[purpose-ffi-scene-commands]]. Web CSS stays on [[contract-web-layout]]. This location never authors CSS as native layout and never lists Taffy cases.

#### Shape

One owner. No new public types. The load-bearing data is a placement rule.

- **[[location-29-tests]] Layout tests later**: owns forbid-and-route for the web package tests location.
- **[[location-42-native-layout]] / ffi-scene-commands**: already owns Taffy-in-engine and the frozen-algorithm CHECK. Do not rewrite it.
- **[[location-31-web-layout]]**: already owns CSS-on-web honesty. Do not restage [[contract-web-layout]].

Hidden: funding opened the bet's time gate without moving ownership. Exposed: one rule. Native layout tests do not move into this location because native is funded. Depth is the host-split placement policy, not a wrapper around the rect CHECK.

#### Red flags

Reject re-exporting taffy-rect as this slice's oracle. Reject leaking Taffy types into the web tests location. Reject "funded, so add tests here next" as that is the pivot. This cut is deep only if callers never learn the Taffy-rect command to finish the grain.

#### Next implementation step

Freeze Layout tests later as placement honesty: no new CHECK that is taffy-rect, no `docs/specs/` in this sitting, no rewrite of [[location-42-native-layout]].

## Synthesis

Base is Candidate B. Graft from A: empty ladder, so the first drain task writes purpose, contract, and test from the [[location-29-tests]] destination plus `docs/`. CHECK is a placement prove under `tests/layout-tests/`, not a pass-through to `tests/ffi-scene-commands/taffy-rect.test.mjs`. No public LayoutEngine. Do not invent a Taffy test list here.

Reject A as the slice shape: pointing this grain's oracle at taffy-rect is a pass-through and restages [[contract-ffi-scene-commands]].

Tradeoffs accepted:

- We accept a placement fence, not a Taffy suite, in exchange for naming Layout tests later without inventing cases at this location.
- We accept an empty ladder until drain in exchange for not writing `docs/specs/` in this sitting.
- We accept not using taffy-rect as this slice CHECK in exchange for not rewriting [[location-42-native-layout]].

Alternatives considered:

- Public LayoutEngine or layout-test helper: shallow, lost.
- Slice CHECK is `taffy-rect.test.mjs`: pass-through, lost.
- Invent a Taffy case list under location-29 now: named pivot, lost.
- Restage [[contract-web-layout]]: mixes cuts, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-29-tests]], [[location-42-native-layout]], [[intent]], [[architecture-layer-cake]], and [[contract-ffi-scene-commands]].

Next implementation step: assert the placement ladder, then red-green a prove that this tests location does not invent a Taffy test list.

### Tracer bullets

1. Assert placement ladder and prove this tests location does not invent a Taffy test list. blocked_by: none. AFK. Write purpose, contract, and test from the [[location-29-tests]] Layout tests later destination plus `docs/`. CHECK lives in `tests/layout-tests/`. Named test: this tests location does not invent a Taffy test list. Do not point CHECK at `tests/ffi-scene-commands/taffy-rect.test.mjs`. No public LayoutEngine. Do not rewrite [[location-42-native-layout]]. Do not restage `ffi-scene-commands.layout:taffy` or [[contract-web-layout]]. Do not freeze First-version tests or Test IDs.

## Confirm

Confirmed.
