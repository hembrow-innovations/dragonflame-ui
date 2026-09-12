---
id: "rounds-359-freeze-android-not-toolchain-d04"
title: "Freeze Android not toolchain D04"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T07:06:39Z"
updated_at: "2026-09-12T07:06:39Z"
---

# Freeze Android not toolchain D04

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN Not toolchain D04 under [[location-52-android-triples]]. Sprint `mobile-after-desktop` may freeze. [[slice-76-desktop-vsync-window]] is met. [[slice-356-not-toolchain-d04]] is iOS only and left this grain. Do not restage [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], or [[slice-356-not-toolchain-d04]]. Do not rewrite a location destination.

## Vault pack

Query: Not toolchain D04: Android triples are this product's mobile packaging, not toolchain D04
Area: ui-framework/android-embedder

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-52-android-triples.md`
- `.heio/planning/sprints/mobile-after-desktop/shape.md`
- `docs/specs/ui-framework/android-embedder/purpose.md`
- `docs/specs/ui-framework/android-embedder/contract.md`
- `docs/overview/overview-ui-framework.md`

Related:

- `.heio/planning/locations/location-19-mobile-embedders.md`
- `.heio/planning/locations/location-49-android-embedder.md`
- `.heio/planning/rounds/rounds-01-chart-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/overview-vault.md`
- `docs/specs/ui-framework/android-embedder/test.md`
- `.heio/planning/sprints/mobile-after-desktop/slice-81-android-counter.md`
- `.heio/planning/sprints/mobile-after-desktop/slice-82-store-binaries.md`

Excluded: scribble, archive, slice-356 iOS D04 sibling, store-packaging format names, no packer in package.json

Next: freeze grain Not toolchain D04 on location-52-android-triples. Do not write `docs/specs/` in this sitting. Promise `android-embedder.triples:not-toolchain` is asserted with no test. First drain locks it with a test from the location destination plus `docs/`.

No packer script exists. Assembled by hand. Open product questions are none. Matching promise is `android-embedder.triples:not-toolchain`. No blocking slice besides desktop honesty. No vault:pack script.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-52-android-triples]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether an android-embedder spec folder exists and whether `android-embedder.triples:not-toolchain` is locked.
4. **Repeat**: Whether emulator, arm64-v8a, or crate-workspace not-toolchain oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Not toolchain D04. Done: these triples are this product's mobile packaging, not toolchain D04. Bet: try product packaging; pivot if triples are filed on the language ROADMAP. Emulator and arm64-v8a membership stay out.
2. **Named set**: [[purpose-android-embedder]] already names `hosts/android/`, the embedder crate android module, `aarch64-linux-android`, and Gradle abiFilters arm64-v8a. [[contract-android-embedder]] already asserts `android-embedder.triples:not-toolchain`. Smallest reversible defaults: no public `TargetTriple`, `AndroidTriple`, or `shippedTriples()` type. No `docs/specs/ui-framework/android-triples/` area. No second crate. Test path is `tests/android-embedder/`. Do not edit [[contract-ios-embedder]]. Do not grep a sibling toolchain ROADMAP as this product's CHECK. All tasks `mode: afk`.
3. **Ladder**: [[purpose-android-embedder]] and [[contract-android-embedder]] exist. `android-embedder.triples:not-toolchain` is asserted with no `test:` pointer. This sitting does not write specs. First drain locks that promise with a test.
4. **Repeat**: Do not restage emulator or arm64-v8a membership. Those live on `android-embedder.triples:emulator` and `android-embedder.triples:arm64-v8a`. Do not restage crate-workspace identity. That lives on [[crate-workspace.identity:not-toolchain]]. Do not restage store binaries, Android counter, or iOS D04.
5. **Wait**: Restaging [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], and [[slice-356-not-toolchain-d04]]. Store names and formats. A public triple type. Rustc target strings on the framework API. Filing triples on the language ROADMAP. A general LLVM lowerer. Public `AndroidView`.

### Candidate A

Product packaging at `hosts/android/` plus the embedder android module owns the triples. No public triple type.

#### Problem

Emulator and arm64-v8a membership are already locked on [[contract-android-embedder]] as `android-embedder.triples:emulator` and `android-embedder.triples:arm64-v8a`. The remaining grain on [[location-52-android-triples]] is ownership: those triples must stay this product's mobile packaging, not toolchain D04. The strings `aarch64-linux-android` and Gradle abiFilters `arm64-v8a` look like compiler targets, so a later sitting could file them on the language ROADMAP and still look done. [[intent]] already refuses filing this work into the draconic toolchain ROADMAP. The asserted promise `android-embedder.triples:not-toolchain` still has no test pointer. Sibling [[slice-356-not-toolchain-d04]] is iOS only and left this grain. Do not rewrite the location destination.

#### Usage

Callers are this product's Android packaging and AFK drain, not app code. They do not import a D04 table or a triple type. The thin Gradle shell at `hosts/android/` maps abiFilters to product triples. Device ABI is `aarch64-linux-android` plus Gradle abiFilters `arm64-v8a`. Emulator `x86_64` stays the run oracle. The existing embedder crate android module is what that shell links. Tests under `tests/android-embedder/` prove packaging membership in this checkout. First drain locks `android-embedder.triples:not-toolchain` with a test from the grain destination plus `docs/`. Suggested Done: these triples are this product's mobile packaging, not toolchain D04.

#### Shape

Public surface is the already-named Android embedder packaging: `hosts/android/` plus the embedder crate's android module. That surface owns which triples are in scope. The abiFilters to cargo `--target` map stays private behind the shell. `android-embedder.triples:not-toolchain` is the ownership promise. First drain locks it with a test. Analog: [[crate-workspace.identity:not-toolchain]], not a new API. Engine, Runtime, and Embedder stay uncollapsed. This slice does not restage emulator or arm64-v8a oracles, does not file on the language ROADMAP, does not fake a general LLVM lowerer, does not name stores, does not name public `AndroidView`, and does not take iOS's twin grain on [[slice-356-not-toolchain-d04]]. Wait list: public `TargetTriple`; filing D04 on the language ROADMAP; restaging locked membership tests.

#### Red flags

A public `TargetTriple` or `AndroidTriple` catalog on the embedder crate is shallow leakage of compiler vocabulary. Filing D04 on the language ROADMAP contradicts the nested bet and [[intent]]. Two modules, register targets then package, are temporal decomposition. A pass-through `packageAndroid(triple)` that forwards to cargo `--target` adds a layer with no policy. Restaging locked emulator or arm64-v8a tests as the D04 proof mixes cuts.

#### Next implementation step

First AFK drain task locks `android-embedder.triples:not-toolchain` with a test under `tests/android-embedder/`, then points [[contract-android-embedder]] at it.

### Candidate B

Hide the closed Android set behind `hosts/android/` packaging. The embedder crate does not publish which targets exist.

#### Problem

The Not toolchain D04 grain under [[location-52-android-triples]] is working when these triples are this product's mobile packaging, not toolchain D04. Emulator and arm64-v8a membership are already locked. The asserted gap is `android-embedder.triples:not-toolchain`. The non-obvious cut is ownership: who may name the closed Android set, without a public triple type, without restaging [[slice-81-android-counter]], and without treating rustc target strings as framework API.

#### Usage

App authors still import the library. They do not import triples. The Android host is the thin Gradle shell at `hosts/android/`. Packaging asks that shell which Android this product ships. It does not ask the embedder crate for a triple enum, and it does not take rustc target strings from `dragonflame-ui`. The AFK drain adds the missing oracle:

```
node --test tests/android-embedder/not-toolchain-triples.test.mjs
```

That test fails if this checkout files Android triples as toolchain D04 or language ROADMAP work, or if the closed set is published as a framework type outside `hosts/android/` packaging. It does not restage arm64-v8a or emulator membership tests. Suggested Done: these triples are this product's mobile packaging, not toolchain D04.

#### Shape

No public triple type on the embedder crate. No `AndroidTriple`, no shipped-triple list, no rustc strings on the framework API. Public surface is product packaging at `hosts/android/`: one closed policy that already joins Gradle abiFilters arm64-v8a plus x86_64 with cargo Android targets. The embedder crate's android module compiles for what that shell asks. It does not publish which targets exist. Do not mint `docs/specs/ui-framework/android-triples/`. Do not add a second crate. Do not fake a general LLVM lowerer. Do not grep a sibling toolchain ROADMAP as this product's CHECK. Pivot if a sitting files these triples on the language ROADMAP.

#### Red flags

A public triple enum, rustc re-export, or `shippedTriples()` list is leakage and a shallow module. Split resolve-abi then map-cargo then assert-not-D04 stages are temporal decomposition. A helper that only forwards a ROADMAP grep is a pass-through. Restaging [[slice-81-android-counter]] membership tests fakes progress. Inventing store names or public `AndroidView` contradicts [[purpose-android-embedder]]. Filing the set on the language ROADMAP is the named pivot, not the try.

#### Next implementation step

Red-green `tests/android-embedder/not-toolchain-triples.test.mjs` for `android-embedder.triples:not-toolchain`, then point that promise at the test on [[contract-android-embedder]] without a new spec folder or public triple type.

## Synthesis

Base is Candidate A. Graft from B: no public `TargetTriple`, `AndroidTriple`, or `shippedTriples()` type; no rustc target strings on the framework API; no `docs/specs/ui-framework/android-triples/` area; do not grep a sibling toolchain ROADMAP as this product's CHECK; do not restage emulator or arm64-v8a membership tests; oracle path `tests/android-embedder/not-toolchain-triples.test.mjs`.

Reject B as the slice shape: hiding the closed set only as a shell policy understates that [[purpose-android-embedder]] already named `hosts/android/` plus the embedder android module as the packaging surface. Ownership still lives on that named surface.

Tradeoffs accepted:

- We accept an ownership oracle on the existing packaging surface in exchange for not minting a public triple type.
- We accept rustc strings remaining private in the host shell map in exchange for not teaching framework callers `aarch64-linux-android`.
- We accept proving this checkout does not file the work, in the spirit of crate-workspace identity, in exchange for not making a sibling ROADMAP file this product's CHECK.
- We accept leaving iOS not-toolchain on [[slice-356-not-toolchain-d04]] in exchange for one grain.
- We accept locking the asserted promise with a test in exchange for not minting a triples spec folder.

Alternatives considered:

- Public `TargetTriple` API: shallow leakage of compiler vocabulary, lost.
- Filing D04 on the language ROADMAP: contradicts [[intent]] and the nested bet, lost.
- `docs/specs/ui-framework/android-triples/` area: second owner for a promise already on [[contract-android-embedder]], lost.
- Grep the sibling toolchain ROADMAP as the product CHECK: couples this repo to another tree, lost.
- Restaging [[slice-81-android-counter]] membership tests as this grain: mixes cuts, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-52-android-triples]], [[purpose-android-embedder]], [[contract-android-embedder]], [[intent]], and [[overview-ui-framework]]. Smallest reversible default: the oracle fails on a claim that these triples are language ROADMAP work in this checkout, not on the purpose grain sentence naming D04.

Next implementation step: lock `android-embedder.triples:not-toolchain` with a test, then red-green these triples are this product's mobile packaging, not toolchain D04.

### Tracer bullets

1. Lock not-toolchain promise on android-embedder. blocked_by: none besides desktop honesty. AFK. Point [[contract-android-embedder]] `android-embedder.triples:not-toolchain` at a test. Purpose and contract already exist. No product code. Do not mint `android-triples/` specs. Do not rewrite emulator or arm64-v8a promises.
2. Red-green these triples are this product's mobile packaging, not toolchain D04. blocked_by: lock promise. AFK. `tests/android-embedder/not-toolchain-triples.test.mjs`. No public triple type. Do not restage emulator, arm64-v8a, or crate-workspace identity oracles. Do not grep a sibling toolchain ROADMAP.

## Confirm

Confirmed.
