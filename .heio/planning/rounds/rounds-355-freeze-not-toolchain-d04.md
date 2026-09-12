---
id: "rounds-355-freeze-not-toolchain-d04"
title: "Freeze not toolchain D04"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T06:52:16Z"
updated_at: "2026-09-12T06:52:16Z"
---

# Freeze not toolchain D04

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN Not toolchain D04 under [[location-51-ios-triples]]. Sprint `mobile-after-desktop` may freeze. [[slice-76-desktop-vsync-window]] is met. Do not restage [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], or [[slice-328-phase-3-gate-unstated]]. Do not rewrite a location destination.

## Vault pack

Query: Not toolchain D04: iOS triples are this product's mobile packaging, not toolchain D04
Area: ui-framework/ios-embedder

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-51-ios-triples.md`
- `.heio/planning/sprints/mobile-after-desktop/shape.md`
- `docs/specs/ui-framework/ios-embedder/purpose.md`
- `docs/specs/ui-framework/ios-embedder/contract.md`
- `docs/overview/overview-ui-framework.md`

Related:

- `.heio/planning/locations/location-19-mobile-embedders.md`
- `.heio/planning/locations/location-48-ios-embedder.md`
- `.heio/planning/rounds/rounds-01-chart-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/overview-vault.md`
- `docs/specs/ui-framework/ios-embedder/test.md`
- `.heio/planning/sprints/mobile-after-desktop/slice-80-ios-counter.md`
- `.heio/planning/sprints/mobile-after-desktop/slice-82-store-binaries.md`

Excluded: scribble, archive, android-embedder D04 sibling, store-packaging format names, no packer in package.json

Next: freeze grain Not toolchain D04 on location-51-ios-triples. Do not write `docs/specs/` in this sitting. Promise `ios-embedder.triples:not-toolchain` is asserted with no test. First drain locks it with a test from the location destination plus `docs/`.

No packer script exists. Assembled by hand. Open product questions are none. Matching promise is `ios-embedder.triples:not-toolchain`. No blocking slice besides desktop honesty. No vault:pack script.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-51-ios-triples]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether an ios-embedder spec folder exists and whether `ios-embedder.triples:not-toolchain` is locked.
4. **Repeat**: Whether simulator, arm64-device, or crate-workspace not-toolchain oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Not toolchain D04. Done: these triples are this product's mobile packaging, not toolchain D04. Bet: try product packaging; pivot if triples are filed on the language ROADMAP. Simulator and arm64 device membership stay out.
2. **Named set**: [[purpose-ios-embedder]] already names `hosts/ios/`, the embedder crate ios module, `aarch64-apple-ios`, and Xcode arm64 ARCHS. [[contract-ios-embedder]] already asserts `ios-embedder.triples:not-toolchain`. Smallest reversible defaults: no public `TargetTriple`, `IosTriple`, or `shippedTriples()` type. No `docs/specs/ui-framework/ios-triples/` area. No second crate. Test path is `tests/ios-embedder/`. Do not edit [[contract-android-embedder]]. Do not grep a sibling toolchain ROADMAP as this product's CHECK. All tasks `mode: afk`.
3. **Ladder**: [[purpose-ios-embedder]] and [[contract-ios-embedder]] exist. `ios-embedder.triples:not-toolchain` is asserted with no `test:` pointer. This sitting does not write specs. First drain locks that promise with a test.
4. **Repeat**: Do not restage simulator or arm64-device membership. Those live on `ios-embedder.triples:simulator` and `ios-embedder.triples:arm64-device`. Do not restage crate-workspace identity. That lives on [[crate-workspace.identity:not-toolchain]]. Do not restage store binaries, iOS counter, or Android D04.
5. **Wait**: Restaging [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]]. Android not-toolchain on [[location-52-android-triples]]. Store names and formats. A public triple type. Rustc target strings on the framework API. Filing triples on the language ROADMAP. A general LLVM lowerer. `UiKitView`.

### Candidate A

Product packaging at `hosts/ios/` plus the embedder ios module owns the triples. No public triple type.

#### Problem

Simulator and arm64 device membership are already locked on [[contract-ios-embedder]] as `ios-embedder.triples:simulator` and `ios-embedder.triples:arm64-device`. The remaining grain on [[location-51-ios-triples]] is ownership: those triples must stay this product's mobile packaging, not toolchain D04. The strings `aarch64-apple-ios` and Xcode arm64 ARCHS look like compiler targets, so a later sitting could file them on the language ROADMAP and still look done. [[intent]] already refuses filing this work into the draconic toolchain ROADMAP. The asserted promise `ios-embedder.triples:not-toolchain` still has no test pointer. Do not rewrite the location destination.

#### Usage

Callers are this product's iOS packaging and AFK drain, not app code. They do not import a D04 table or a triple type. The thin Xcode shell at `hosts/ios/` maps platform and ARCHS to product triples. Device is `aarch64-apple-ios`. Simulator stays the run oracle. The existing embedder crate ios module is what that shell links. Tests under `tests/ios-embedder/` prove packaging membership in this checkout. First drain locks `ios-embedder.triples:not-toolchain` with a test from the grain destination plus `docs/`. Suggested Done: these triples are this product's mobile packaging, not toolchain D04.

#### Shape

Public surface is the already-named iOS embedder packaging: `hosts/ios/` plus the embedder crate's ios module. That surface owns which triples are in scope. The PLATFORM_NAME and ARCHS to cargo `--target` map stays private behind the shell. `ios-embedder.triples:not-toolchain` is the ownership promise. First drain locks it with a test. Analog: [[crate-workspace.identity:not-toolchain]], not a new API. Engine, Runtime, and Embedder stay uncollapsed. This slice does not restage simulator or arm64-device oracles, does not file on the language ROADMAP, does not fake a general LLVM lowerer, does not name stores, and does not take Android's twin grain on [[location-52-android-triples]]. Wait list: public `TargetTriple`; filing D04 on the language ROADMAP; restaging locked membership tests.

#### Red flags

A public `TargetTriple` catalog on the embedder crate is shallow leakage of compiler vocabulary. Filing D04 on the language ROADMAP contradicts the nested bet and [[intent]]. Two modules, register targets then package, are temporal decomposition. A pass-through `packageIos(triple)` that forwards to cargo `--target` adds a layer with no policy. Restaging locked simulator or arm64-device tests as the D04 proof mixes cuts.

#### Next implementation step

First AFK drain task locks `ios-embedder.triples:not-toolchain` with a test under `tests/ios-embedder/`, then points [[contract-ios-embedder]] at it.

### Candidate B

Hide the closed iOS set behind `hosts/ios/` packaging. The embedder crate does not publish which targets exist.

#### Problem

The Not toolchain D04 grain under [[location-51-ios-triples]] is working when these triples are this product's mobile packaging, not toolchain D04. Simulator and arm64 device membership are already locked. The asserted gap is `ios-embedder.triples:not-toolchain`. The non-obvious cut is ownership: who may name the closed iOS set, without a public triple type, without restaging [[slice-80-ios-counter]], and without treating rustc target strings as framework API.

#### Usage

App authors still import the library. They do not import triples. The iOS host is the thin Xcode shell at `hosts/ios/`. Packaging asks that shell which iOS this product ships. It does not ask the embedder crate for a triple enum, and it does not take rustc target strings from `dragonflame-ui`. The AFK drain adds the missing oracle:

```
node --test tests/ios-embedder/not-toolchain-triples.test.mjs
```

That test fails if this checkout files iOS triples as toolchain D04 or language ROADMAP work, or if the closed set is published as a framework type outside `hosts/ios/` packaging. It does not restage arm64-device or simulator membership tests. Suggested Done: these triples are this product's mobile packaging, not toolchain D04.

#### Shape

No public triple type on `crates/embedder`. No `IosTriple`, no shipped-triple list, no rustc strings on the framework API. Public surface is product packaging at `hosts/ios/`: one closed policy that already joins Xcode arm64 ARCHS plus iphoneos membership with cargo iOS targets. The embedder crate's ios module compiles for what that shell asks. It does not publish which targets exist. Do not mint `docs/specs/ui-framework/ios-triples/`. Do not add a second crate. Do not fake a general LLVM lowerer. Do not grep a sibling toolchain ROADMAP as this product's CHECK. Pivot if a sitting files these triples on the language ROADMAP.

#### Red flags

A public triple enum, rustc re-export, or `shippedTriples()` list is leakage and a shallow module. Split resolve-platform then map-cargo then assert-not-D04 stages are temporal decomposition. A helper that only forwards a ROADMAP grep is a pass-through. Restaging [[slice-80-ios-counter]] membership tests fakes progress. Inventing store names or `UiKitView` contradicts [[purpose-ios-embedder]]. Filing the set on the language ROADMAP is the named pivot, not the try.

#### Next implementation step

Red-green `tests/ios-embedder/not-toolchain-triples.test.mjs` for `ios-embedder.triples:not-toolchain`, then point that promise at the test on [[contract-ios-embedder]] without a new spec folder or public triple type.

## Synthesis

Base is Candidate A. Graft from B: no public `TargetTriple`, `IosTriple`, or `shippedTriples()` type; no rustc target strings on the framework API; no `docs/specs/ui-framework/ios-triples/` area; do not grep a sibling toolchain ROADMAP as this product's CHECK; do not restage simulator or arm64-device membership tests; oracle path `tests/ios-embedder/not-toolchain-triples.test.mjs`.

Reject B as the slice shape: hiding the closed set only as a shell policy understates that [[purpose-ios-embedder]] already named `hosts/ios/` plus the embedder ios module as the packaging surface. Ownership still lives on that named surface.

Tradeoffs accepted:

- We accept an ownership oracle on the existing packaging surface in exchange for not minting a public triple type.
- We accept rustc strings remaining private in the host shell map in exchange for not teaching framework callers `aarch64-apple-ios`.
- We accept proving this checkout does not file the work, in the spirit of crate-workspace identity, in exchange for not making a sibling ROADMAP file this product's CHECK.
- We accept leaving Android not-toolchain on [[location-52-android-triples]] in exchange for one grain.
- We accept locking the asserted promise with a test in exchange for not minting a triples spec folder.

Alternatives considered:

- Public `TargetTriple` API: shallow leakage of compiler vocabulary, lost.
- Filing D04 on the language ROADMAP: contradicts [[intent]] and the nested bet, lost.
- `docs/specs/ui-framework/ios-triples/` area: second owner for a promise already on [[contract-ios-embedder]], lost.
- Grep the sibling toolchain ROADMAP as the product CHECK: couples this repo to another tree, lost.
- Restaging [[slice-80-ios-counter]] membership tests as this grain: mixes cuts, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-51-ios-triples]], [[purpose-ios-embedder]], [[contract-ios-embedder]], [[intent]], and [[overview-ui-framework]]. Smallest reversible default: the oracle fails on a claim that these triples are language ROADMAP work in this checkout, not on the purpose grain sentence naming D04.

Next implementation step: lock `ios-embedder.triples:not-toolchain` with a test, then red-green these triples are this product's mobile packaging, not toolchain D04.

### Tracer bullets

1. Lock not-toolchain promise on ios-embedder. blocked_by: none besides desktop honesty. AFK. Point [[contract-ios-embedder]] `ios-embedder.triples:not-toolchain` at a test. Purpose and contract already exist. No product code. Do not mint `ios-triples/` specs. Do not rewrite simulator or arm64-device promises.
2. Red-green these triples are this product's mobile packaging, not toolchain D04. blocked_by: lock promise. AFK. `tests/ios-embedder/not-toolchain-triples.test.mjs`. No public triple type. Do not restage simulator, arm64-device, or crate-workspace identity oracles. Do not grep a sibling toolchain ROADMAP.

## Confirm

Confirmed.
