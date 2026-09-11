---
id: "rounds-279-freeze-platform-view-hatch"
title: "Freeze platform view hatch"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan, design-tree]
created_at: "2026-09-11T21:22:00Z"
updated_at: "2026-09-11T21:22:00Z"
---

# Freeze platform view hatch

Counterpart is the product peer. Notebook is this round.

Pick: [[slice-84-platform-view-hatch]]. Lowest shaping slice whose `blocked_by` is `met`. [[slice-79-oem-hatch-slot]] is met. [[slice-80-ios-counter]] is met. Sprint `mobile-after-desktop` may freeze. Do not rewrite a location destination.

## Vault pack

Query: freeze platform view hatch; mobile wiring of the existing OEM slot; iOS occupy; canvas remains default; no async Bridge
Area: platform-views

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-19-mobile-embedders.md`
- `.heio/planning/locations/location-47-after-desktop.md`
- `.heio/planning/locations/location-44-oem-escape-hatch.md`
- `.heio/planning/locations/location-56-platform-views.md`
- `.heio/planning/sprints/mobile-after-desktop/shape.md`
- `.heio/planning/sprints/mobile-after-desktop/slice-84-platform-view-hatch.md`
- `.heio/archive/planning/sprints/native-if-funded/slice-79-oem-hatch-slot.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`
- `docs/specs/ui-framework/oem-hatch/purpose.md`
- `docs/specs/ui-framework/oem-hatch/contract.md`
- `docs/specs/ui-framework/oem-hatch/test.md`
- `docs/specs/ui-framework/ios-embedder/purpose.md`
- `docs/specs/ui-framework/ios-embedder/contract.md`
- `.heio/planning/rounds/rounds-01-chart-framework.md`

Related:

- `docs/specs/ui-framework/android-embedder/purpose.md`
- `.heio/archive/planning/rounds/rounds-259-freeze-oem-hatch-slot.md`
- `crates/engine/src/scene/adapter.rs`
- `crates/engine/src/scene/layer.rs`
- `crates/embedder/src/ios.rs`
- `tests/oem-hatch/platform-view-slot.test.mjs`
- `tests/ios-embedder/counter-on-simulator.test.mjs`

Excluded: public `UiKitView` or `AndroidView`, Android attach this tracer, async Bridge, web OEM host, scribble, rewriting location destinations, writing `docs/specs/` here.

Next: freeze [[slice-84-platform-view-hatch]] with oracles and tasks. Do not write `docs/specs/`; drain writes the ladder.

No packer script exists. Assembled by hand. Open product questions on the overview are none. Platform-views spec folder does not exist. [[purpose-oem-hatch]] leaves iOS and Android view attach out of scope.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-56-platform-views]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether a platform-views spec folder exists.
4. **Repeat**: Whether canvas-default or slot oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze [[slice-84-platform-view-hatch]]. Mobile wiring of the hatch slot owned by [[slice-79-oem-hatch-slot]]. A platform view occupies that slot on iOS. It is not how all native UI is built. No async Bridge. Not a second OEM model.
2. **Named set**: Layer kind is `platform-view` from [[architecture-layer-cake]]. Occupancy is a slot id from [[contract-oem-hatch]] `oem-hatch.layer:platform-view-slot`. Native default stays canvas from [[location-43-native-canvas-host]] and [[rounds-01-chart-framework]] answer 6. Adapter is native-only from [[location-44-oem-escape-hatch]]. Public `UiKitView` stays unnamed from [[contract-ios-embedder]] `ios-embedder.types:forbid-uikitview`. Smallest reversible default: the host tracer is iOS because [[slice-80-ios-counter]] is met and this slice does not wait on [[slice-81-android-counter]]. The iOS embedder occupies the existing slot by calling the native `Adapter` with a slot id. OS view classes stay unnamed. Simulator is the run oracle, matching [[purpose-ios-embedder]]. Android attach is not this slice.
3. **Ladder**: None for this behaviour. [[purpose-oem-hatch]] out of scope includes iOS and Android view attach. First task writes purpose, contract, and test only under area `platform-views`.
4. **Repeat**: Do not repeat canvas-default or platform-view-slot oracles. Those live on [[purpose-oem-hatch]]. Do not repeat no-webview, no-js-engine, or counter draw-list oracles. Those live on [[purpose-ios-embedder]]. Do not repeat public `UiKitView` absence as the only proof. That lives on [[contract-ios-embedder]].
5. **Wait**: Public `UiKitView`, `AndroidView`, `HtmlElementView`, `NSView`, or `HWND`. Android view attach. Async Bridge, platform channels, or JSI. Web OEM host. OEM widget class lists. Offset, clip, and transform as a public compositor kit. Packed-scene field names. A public `occupyHatch`.

### Candidate A

Embedder-owned occupancy of the existing engine slot. Canvas stays default. No public OS view type.

#### Problem

[[slice-79-oem-hatch-slot]] proved a `platform-view` layer with a slot id on the engine tree. Mobile has not wired that slot. [[location-56-platform-views]] wants platform views as a hatch, not the default, and forbids an async Bridge. [[location-44-oem-escape-hatch]] wants a native-only adapter. Public `UiKitView` is already forbidden. The iOS embedder today submits canvas draw lists and never occupies the hatch.

#### Usage (caller's view)

App code this tracer still submits one packed scene. The iOS host shows counter text through engine draw lists. Occupying the hatch is an embedder call:

```rust
let adapter = engine::Adapter::native();
adapter.hold(slot_id);
```

Tests prove two facts. With no hatch, the iOS host still reports canvas as the default. With a slot occupied, the embedder reports `layer-kind platform-view` and `slot-id`, and does not report a JS bridge. Callers do not import `UiKitView`. Callers do not import a Bridge. The web package does not export the adapter.

#### Shape

Public surface stays one packed `extern "C"` submit plus the existing native `Adapter`. The iOS embedder owns window, vsync, and hatch occupancy. The engine owns compositing and the slot. Complexity hidden: how a slot id maps to an OS view later, how picture and hatch coexist, how default stays canvas when the tree has no hatch. Invariants encoded: canvas is default; OEM is not how all native UI is built; no async Bridge; `UiKitView` stays unnamed; Android attach waits.

#### Red flags

- **Shallow**: avoided. Callers submit a scene. Hatch policy stays in engine plus embedder.
- **Leakage**: avoided if OS view types stay private. Exporting `UiKitView` would leak.
- **Temporal**: one occupancy path, not a public attach-then-bridge-then-composite pipeline.
- **Pass-through**: a public `occupyHatch(slot)` that only forwards a field would be a pass-through. Do not add it. `Adapter.hold` already records the layer.

#### Next implementation step

Spec ladder, then red-green hatch not default on iOS, then red-green slot occupied on iOS.

### Candidate B

Public `UiKitView` component plus an async Bridge. Callers import a platform-view widget and post messages to the embedder.

#### Problem

Same destinations. Candidate A hides attach. Candidate B would export OS view types and a message queue as the hatch API.

#### Usage (caller's view)

```js
import { UiKitView, PlatformChannel } from "dragonflame-ui";

UiKitView({ view: "WKWebView", onMessage: PlatformChannel.send });
```

Default canvas would be a choice the caller must keep making. OEM would look like another host leaf. Frames would wait on a bridge.

#### Shape

Public OS view types plus a channel. Interface grows by names [[contract-oem-hatch]] and [[contract-ios-embedder]] forbade. Callers coordinate attach, messages, and layout to finish one frame. Async Bridge becomes the native path. Web would need stubs.

#### Red flags

- **Shallow**: callers assemble a view class and a channel to finish one occupy.
- **Leakage**: OS view types and bridge protocol become public.
- **Temporal**: attach, then message, then composite as public stages.
- **Pass-through**: `UiKitView` that only wraps a channel adds a layer without policy.

#### Next implementation step

Invent public `UiKitView` and a Bridge. Contradicts [[location-56-platform-views]] hatch-not-default, [[overview-ui-framework]] forbid async Bridge as the default, and [[oem-hatch.types:forbid-os-views]].

## Synthesis

Base is Candidate A. Graft from B nothing. Reject B as the slice shape: it invents public OS view types and an async Bridge, and makes OEM look like the host.

Tradeoffs accepted:

- We accept iOS as the only host tracer this slice in exchange for not waiting on [[slice-81-android-counter]].
- We accept a slot id with no public `UiKitView` in exchange for proving occupy without naming an OS view class.
- We accept not attaching a real UIKit control kit in exchange for embedder occupancy of the existing engine slot.
- We accept node tests that may spawn the simulator runner in exchange for matching [[purpose-ios-embedder]] run oracle, with tasks still `mode: afk`.

Alternatives considered:

- Public `UiKitView` plus async Bridge: leakage and a forbidden default, lost.
- OEM as the iOS default host: rewrites [[location-43-native-canvas-host]] and [[rounds-01-chart-framework]] answer 6, lost.
- Waiting for Android attach in this slice: thickens past the Done "iOS or Android" or, and waits on an active counter slice this file does not name, lost.
- Extending [[purpose-oem-hatch]] instead of a `platform-views` ladder: that purpose already fences iOS attach out of scope, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-56-platform-views]], [[location-44-oem-escape-hatch]], [[purpose-oem-hatch]], and [[purpose-ios-embedder]].

Next implementation step: write purpose, contract, and test for platform views, then red-green hatch not default on iOS, then red-green slot occupied on iOS.

### Tracer bullets

1. Spec ladder for platform views. blocked_by: none. AFK. Purpose, contract, and test only. No product code.
2. Red-green hatch not default on iOS. blocked_by: spec. AFK. Occupying the hatch does not make OEM how all native UI is built. Canvas remains the default host.
3. Red-green slot occupied on iOS. blocked_by: hatch not default. AFK. iOS embedder occupies the existing platform-view slot by slot id. No async Bridge. No public `UiKitView`.

## Confirm

Confirmed.
