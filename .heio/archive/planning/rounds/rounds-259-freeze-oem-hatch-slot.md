---
id: "rounds-259-freeze-oem-hatch-slot"
title: "Freeze OEM hatch slot"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan, design-tree]
created_at: "2026-09-11T07:41:56Z"
updated_at: "2026-09-11T07:41:56Z"
---

# Freeze OEM hatch slot

Counterpart is the product peer. Notebook is this round.

Pick: [[slice-79-oem-hatch-slot]]. Lowest shaping slice whose `blocked_by` is `met`. [[slice-77-draw-a-rect]] is met. Sprint `native-if-funded` may freeze OEM. Widget class lists stay later. Do not freeze [[slice-84-platform-view-hatch]]. Do not rewrite a location destination.

## Vault pack

Query: freeze OEM hatch slot; canvas remains default; platform-view layer in the composite tree; native-only adapter; no JS bridge
Area: oem-hatch

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-18-native-engine-desktop.md`
- `.heio/planning/locations/location-37-rust-engine.md`
- `.heio/planning/locations/location-43-native-canvas-host.md`
- `.heio/planning/locations/location-44-oem-escape-hatch.md`
- `.heio/planning/locations/location-56-platform-views.md`
- `.heio/planning/sprints/native-if-funded/shape.md`
- `.heio/planning/sprints/native-if-funded/slice-79-oem-hatch-slot.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`
- `.heio/planning/rounds/rounds-01-chart-framework.md`

Related:

- `docs/specs/ui-framework/ffi-scene-commands/purpose.md`
- `docs/specs/ui-framework/desktop-embedder/purpose.md`
- `docs/specs/ui-framework/host-leaves/purpose.md`
- `.heio/planning/sprints/native-if-funded/slice-77-draw-a-rect.md`
- `.heio/planning/sprints/mobile-after-desktop/slice-84-platform-view-hatch.md`
- `crates/engine/src/scene/packed.rs`

Excluded: OEM widget class lists, iOS and Android view attach, web OEM host, scribble, rewriting location destinations, writing `docs/specs/` here.

Next: freeze [[slice-79-oem-hatch-slot]] with oracles and tasks. Do not write `docs/specs/`; drain writes the ladder.

No packer script exists. Assembled by hand. Open product questions on the overview are none. Hatch spec folder does not exist.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-44-oem-escape-hatch]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether an oem-hatch spec folder exists.
4. **Repeat**: Whether canvas-default or compositing oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze [[slice-79-oem-hatch-slot]]. OEM widgets are a native-only adapter and are not the default host. The composite layer tree accepts a platform-view layer. No JS bridge. Canvas stays default. Mobile attach of UIView or Android views is [[slice-84-platform-view-hatch]].
2. **Named set**: Layer kind is `platform-view` from [[architecture-layer-cake]]. Native default is the custom Rust engine canvas path from [[rounds-01-chart-framework]] answer 6 and [[location-43-native-canvas-host]]. Adapter is native-only from [[location-44-oem-escape-hatch]]. One packed scene, one `extern "C"` submit, not a begin and end stream, from [[purpose-ffi-scene-commands]]. Smallest reversible default: occupying the hatch is a slot id on that platform-view layer, not an NSView, HWND, UIView, or Android view class. Packed-scene field names stay unnamed. Offset, clip, and transform layer kinds stay later. Desktop counterpart this tracer is the slot, not a widget kit.
3. **Ladder**: None. First task writes purpose, contract, and test only.
4. **Repeat**: Do not repeat Taffy-rect or GPU-not-UI oracles. Those live on [[purpose-ffi-scene-commands]]. Do not repeat no-webview or no-js-engine oracles. Those live on [[purpose-desktop-embedder]]. Do not repeat not-every-UIKit-class as the leaf set. Those live on [[purpose-host-leaves]]. Compositing a full layer tree of offset, clip, transform, and picture is named on [[location-37-rust-engine]] but ffi-scene-commands left compositing out of scope; this slice only proves picture remains default and platform-view can occupy a slot.
5. **Wait**: OEM widget class lists. Public `AndroidView`, `UiKitView`, `HtmlElementView`, `NSView`, or `HWND` types. Web host as OEM. Async Bridge, platform channels, or JSI for the slot. iOS and Android view attach. Offset, clip, and transform layers as a public compositor kit. Packed-scene field names.

### Candidate A

One deep engine layer tree. One packed submit. Default remains picture. Hatch is a native-only platform-view slot.

#### Problem

Native default is canvas. OEM must exist as a hatch without becoming the host. [[location-44-oem-escape-hatch]] wants a platform-view layer in the composite tree and a native-only adapter, not a JS bridge. The current packed scene is one colored rect. Widget class lists stay later. Mobile attach is a later slice.

#### Usage (caller's view)

```js
import { submit } from "dragonflame-ui/native";

submit(sceneWithColoredRect);
```

App code this tracer still submits one packed scene. Default records a canvas draw list. Tests occupy a hatch by giving the engine a platform-view layer with a slot id. Callers do not import `NSView`. They do not import `AndroidView`. They do not import a JS bridge. The web package does not export the adapter.

#### Shape

Public surface is the existing one packed `extern "C"` submit, plus the engine accepting a `platform-view` layer with a slot id. Engine owns compositing. Framework does not call Metal. Native-only: the hatch type lives in the engine crate, not the JS package. Complexity hidden: how a slot id maps to an OS view later, how picture and hatch coexist in one tree, how default stays canvas when the tree has no hatch. Invariants: canvas is default; OEM is not the web host; no async Bridge for the slot; widget classes stay unnamed.

#### Red flags

- **Shallow**: avoided. Callers submit a scene. Hatch policy stays in the engine.
- **Leakage**: avoided if packed field names and OS view types stay private. Exporting `NSView` would leak.
- **Temporal**: one module owns default picture and hatch slot, not a public build-layers-then-composite pipeline.
- **Pass-through**: a public `occupyHatch(slot)` that only forwards a field would be a pass-through. Do not add it.

#### Next implementation step

Spec ladder, then red-green canvas remains default, then red-green platform-view slot.

### Candidate B

Public layer kit plus OEM widget classes. Callers assemble OffsetLayer, PictureLayer, and PlatformViewLayer, and pick NSView or HWND.

#### Problem

Same destinations. Candidate A hides compositing. Candidate B would export layer types and desktop widget classes as the hatch API.

#### Usage (caller's view)

```js
import { OffsetLayer, PictureLayer, PlatformViewLayer, DesktopView } from "dragonflame-ui";

const tree = new OffsetLayer();
tree.append(new PictureLayer(rect));
tree.append(new PlatformViewLayer(new DesktopView()));
```

Default canvas would be a PictureLayer the caller must choose. OEM would look like another host leaf.

#### Shape

Five public layer types plus desktop widget classes. Interface grows by names [[shape.md]] left unnamed. Callers coordinate methods to complete one frame. Widget class lists become the product. Web would need stubs or a forbidden OEM host.

#### Red flags

- **Shallow**: callers assemble layers and pick a widget class to finish one frame.
- **Leakage**: OS view types and layer protocol become public. Contradicts Wait: widget class lists stay later.
- **Temporal**: build layers, then composite, as public stages.
- **Pass-through**: `PlatformViewLayer` that only wraps `DesktopView` adds a layer without policy.

#### Next implementation step

Invent public widget classes. Contradicts sprint grouping and [[location-44-oem-escape-hatch]] native-only adapter without a JS bridge becoming a second host.

## Synthesis

Base is Candidate A. Graft from B nothing. Reject B as the slice shape: it invents OEM widget class lists and splits one submit into public layer stages.

Tradeoffs accepted:

- We accept a slot id with no public OS view type in exchange for proving the hatch without naming NSView or HWND.
- We accept not implementing offset, clip, and transform layers this slice in exchange for picture default plus platform-view slot.
- We accept not naming packed-scene field names in exchange for tests observing default canvas versus hatch occupancy.
- We accept leaving iOS and Android attach to [[slice-84-platform-view-hatch]] in exchange for one desktop slot.

Alternatives considered:

- Public layer kit plus OEM widget classes: unnamed and temporally decomposed, lost.
- OEM as the native default host: rewrites [[location-43-native-canvas-host]] and [[rounds-01-chart-framework]] answer 6, lost.
- JS bridge or platform channels for the slot: rewrites [[location-44-oem-escape-hatch]] no-JS-bridge bet, lost.
- Web OEM adapter: rewrites native-only adapter, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-44-oem-escape-hatch]], [[location-43-native-canvas-host]], [[architecture-layer-cake]], and [[rounds-01-chart-framework]].

Next implementation step: write purpose, contract, and test for the OEM hatch, then red-green canvas remains default, then red-green platform-view slot.

### Tracer bullets

1. Spec ladder for the OEM hatch. blocked_by: none. AFK. Purpose, contract, and test only. No product code.
2. Red-green canvas remains default. blocked_by: spec. AFK. Packed scene with no hatch still records the canvas draw list. OEM is not the default host.
3. Red-green platform-view slot. blocked_by: canvas default. AFK. Layer tree holds a platform-view layer with a slot id. Native-only. No JS bridge.

## Confirm

Confirmed.
