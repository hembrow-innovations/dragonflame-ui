---
id: "rounds-384-freeze-single-ui-thread"
title: "Freeze Single UI thread"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T08:43:09Z"
updated_at: "2026-09-12T08:43:09Z"
---

# Freeze Single UI thread

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN Single UI thread under [[location-56-platform-views]]. Sprint `mobile-after-desktop` may freeze. [[slice-76-desktop-vsync-window]] is met. Do not restage [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], [[slice-373-engine-glyphs]], or [[slice-381-io-font-load]]. Do not rewrite a location destination.

## Vault pack

Query: this is working when heavy work is off the UI thread and platform views stay an escape hatch, not the default.
Area: platform-views

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-56-platform-views.md`
- `.heio/planning/sprints/mobile-after-desktop/shape.md`
- `docs/specs/ui-framework/platform-views/purpose.md`
- `docs/specs/ui-framework/platform-views/contract.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`

Related:

- `.heio/planning/locations/location-19-mobile-embedders.md`
- `.heio/planning/locations/location-44-oem-escape-hatch.md`
- `.heio/planning/locations/location-45-threads.md`
- `docs/specs/ui-framework/oem-hatch/purpose.md`
- `docs/specs/ui-framework/oem-hatch/contract.md`
- `.heio/planning/sprints/mobile-after-desktop/slice-84-platform-view-hatch.md`

Excluded: scribble, archive, ADRs none, no packer in package.json, no blocking slice, Escape hatch / Composite slot / OEM adapter as this grain, Android attach, public UiKitView, WebView shells, Expo OTA

Next: freeze grain Single UI thread on location-56-platform-views. Do not write docs/specs in this sitting. hatch-not-default and slot-occupied are locked. slice-84 is a met sibling, not a blocker. Open product questions are none.

No packer script exists. Assembled by hand. Open product questions are none. [[purpose-platform-views]] already lists Single UI thread in scope. Area oracles do not prove heavy work is off the UI thread.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-56-platform-views]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether a spec folder exists for this behaviour.
4. **Repeat**: Whether occupancy or hatch-not-default oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Single UI thread. Done: heavy work is off the UI thread and platform views stay an escape hatch, not the default. Bet: try hatch; pivot if platform views are how all native UI is built. Occupancy, composite slot, and OEM adapter stay out.
2. **Named set**: [[location-56-platform-views]] Single UI thread sentence is locked. Public surface stays packed-scene `submit`. No public Thread. No `occupyHatch`. No `UiKitView`. No async Bridge. Smallest reversible defaults: Runtime job queue is the one UI thread; raster, IO, and compute stay private in `crates/engine` and never share a signal object; assert `platform-views.thread:heavy-off-ui` on the existing platform-views ladder; CHECK lives in `tests/platform-views/single-ui-thread.test.mjs`. All tasks `mode: afk`. Do not wait on [[slice-84-platform-view-hatch]].
3. **Ladder**: [[purpose-platform-views]] and [[contract-platform-views]] exist. Hatch-not-default and slot-occupied are locked. No matching promise for heavy work off the UI thread. This sitting does not write specs. First drain asserts `platform-views.thread:heavy-off-ui` from the location destination plus [[overview-ui-framework]] and [[architecture-layer-cake]].
4. **Repeat**: Do not restage occupying the hatch or hatch-not-default. Those live on [[purpose-platform-views]] and [[slice-84-platform-view-hatch]]. Do not restage canvas-default or platform-view-slot. Those live on [[purpose-oem-hatch]]. Do not restage IO font load. That lives on [[slice-381-io-font-load]]. Do not restage GPU-not-UI raster. That lives on ffi-scene-commands.
5. **Wait**: Public Thread. `occupyHatch`. `UiKitView`. Android attach. Web OEM. Async Bridge. Escape hatch, Composite slot, or OEM adapter as this grain. Restaging [[slice-84-platform-view-hatch]]. Rewriting the location destination. Writing `docs/specs/` here. A `docs/specs/ui-framework/single-ui-thread/` area.

### Candidate A

Already-named surface. Callers keep packed-scene submit. No public thread type.

#### Problem

[[location-56-platform-views]] Single UI thread is leftover after [[slice-84-platform-view-hatch]] froze occupancy. The grain is that heavy work is off the UI thread and platform views stay an escape hatch, not the default. The bet pivots if platform views are how all native UI is built. [[purpose-platform-views]] already lists that sentence in scope. Locked hatch-not-default and slot-occupied do not prove the leftover. A public Thread or `occupyHatch` would leak scheduling into app code.

#### Usage

App code still submits one packed scene. Hatch occupancy stays embedder slot-id work. Callers do not spawn threads or name an OS view.

```js
import { submit } from "dragonflame-ui"

submit(scene)
```

A scene with no hatch still records the canvas draw list. Decode, GPU submit, and compute do not run on the Runtime job queue. Canvas remains the default host.

#### Shape

No new public names. Policy lives behind packed-scene submit.

- **Runtime**: the job queue is the one UI thread. Framework, signals, layout, paint-list recording.
- **engine**: raster, IO, and compute stay off that queue. Workers never share a signal object.
- **embedder**: occupies the existing `platform-view` slot by slot id. Does not make OEM the default host.

Invariants: heavy work is off the UI thread. Platform views stay hatch, not default. Callers never see Thread, `occupyHatch`, or `UiKitView`. Leftover proof owner is [[purpose-platform-views]]. No new spec area.

#### Red flags

- **Shallow**: restaging hatch-not-default or slot-occupied as this grain.
- **Leakage**: exporting Thread, `occupyHatch`, or OS view types.
- **Temporal**: public Occupy then Offload then Submit stages.
- **Pass-through**: a public offload helper that only forwards onto the Runtime queue.
- **Skip**: pointing CHECK at [[slice-84-platform-view-hatch]] tests.

#### Next implementation step

Assert from the location destination plus `docs/` that heavy work is off the UI thread and hatch stays hatch, then red-green one placement oracle.

### Candidate B

Hide UI-thread ownership behind the existing submit. Prove with Runtime as the one queue and engine-private heavy work. No new caller type.

#### Problem

Same leftover grain. [[slice-84-platform-view-hatch]] already proved occupancy. The non-obvious cut is that the Runtime job queue already is that one UI thread, so occupying a hatch must not grow a second framework thread, export a thread type, or flip canvas off the default host.

#### Usage

App and tests keep packed-scene submit. They never import a thread type.

```js
import { submit } from "dragonflame-ui";

submit(sceneWithHatchSlot);
```

Inside Runtime, framework jobs stay on the job queue. Inside `crates/engine`, raster, IO, and compute stay private and never share a signal object.

#### Shape

Runtime owns the one UI thread as its job queue. Engine owns raster, IO, and compute. Embedder occupancy does not mint a second framework UI thread and does not make OEM the default host. Public surface stays `submit`. Proof is occupy still leaves framework on the job queue, and engine workers never share a signal object. Depth: zero new names hide that topology. Does not restage occupancy. Leftover promise on [[purpose-platform-views]]. No new spec folder.

#### Red flags

- **Shallow**: public Thread plus schedule helpers.
- **Leakage**: `UiKitView` or `pub use` of engine thread types.
- **Temporal**: public Occupy then Schedule then Raster stages.
- **Pass-through**: a UiThread object that only forwards onto the Runtime queue.
- **Skip**: pointing CHECK at slice-84 occupancy tests.

#### Next implementation step

First drain asserts `platform-views.thread:heavy-off-ui` from the location destination plus docs, then red-green a CHECK that occupying a hatch slot still leaves framework work on the Runtime job queue and that engine raster, IO, and compute never share a signal object.

## Synthesis

Base is Candidate A. Graft from B: Runtime job queue is the one UI thread; raster, IO, and compute stay private in `crates/engine` and never share a signal object; occupy does not mint a second framework UI thread; promise id `platform-views.thread:heavy-off-ui`; test path `tests/platform-views/single-ui-thread.test.mjs`.

Reject B as the slice shape: proving only Runtime queue topology without the destination sentence as Done understates that heavy work is off the UI thread and platform views stay an escape hatch. The queue is evidence, not the cut. Do not wait on [[slice-84-platform-view-hatch]]; that slice is met occupancy and is not restaged.

Tradeoffs accepted:

- We accept the existing public `submit` in exchange for not adding a public Thread or `occupyHatch`.
- We accept one placement oracle in exchange for not repeating occupancy or hatch-not-default tests.
- We accept platform-views owning the leftover proof in exchange for not minting a single-ui-thread spec folder.
- We accept asserting a new `platform-views.thread:heavy-off-ui` promise in exchange for not overloading hatch-not-default.

Alternatives considered:

- Public Thread plus offload helpers: leakage and shallow, lost.
- Waiting on [[slice-84-platform-view-hatch]]: that slice is occupancy, not this placement cut, lost.
- A new spec folder beside platform-views: second owner for a sentence already in [[purpose-platform-views]], lost.
- Restaging hatch-not-default or slot-occupied as this grain: mixes cuts, lost.
- Making platform views how all native UI is built: the named pivot, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-56-platform-views]], [[purpose-platform-views]], [[overview-ui-framework]], and [[architecture-layer-cake]]. Smallest reversible default: one CHECK under `tests/platform-views/` that heavy work is off the UI thread while occupying a hatch still leaves canvas the default host.

Next implementation step: assert `platform-views.thread:heavy-off-ui` on the platform-views ladder, then red-green the placement oracle.

### Tracer bullets

1. Assert heavy-off-ui promise on platform-views. blocked_by: none besides desktop honesty. AFK. Point [[contract-platform-views]] `platform-views.thread:heavy-off-ui` at a test. Purpose and contract already exist. No product code. Do not mint a single-ui-thread spec folder. Do not rewrite occupancy or hatch-not-default promises.
2. Red-green heavy work off the UI thread. blocked_by: assert promise. AFK. `tests/platform-views/single-ui-thread.test.mjs`. Runtime job queue is the one UI thread. Engine raster, IO, and compute never share a signal object. Hatch stays hatch. Do not restage occupancy oracles. Do not wait on [[slice-84-platform-view-hatch]].

## Confirm

Confirmed.
