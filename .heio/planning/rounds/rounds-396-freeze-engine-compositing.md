---
id: "rounds-396-freeze-engine-compositing"
title: "Freeze Engine compositing"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T09:33:44Z"
updated_at: "2026-09-12T09:33:44Z"
---

# Freeze Engine compositing

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN Compositing under [[location-37-rust-engine]]. Sprint `mobile-after-desktop` may freeze. [[slice-76-desktop-vsync-window]] is met. Do not restage [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], [[slice-385-single-ui-thread]], [[slice-389-input]], or [[slice-393-engine-images]]. Do not rewrite a location destination.

## Vault pack

Query: this is working when the engine composites a layer tree of offset, clip, transform, picture, and platform-view.
Area: ffi-scene-commands

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-37-rust-engine.md`
- `.heio/planning/sprints/mobile-after-desktop/shape.md`
- `docs/specs/ui-framework/ffi-scene-commands/purpose.md`
- `docs/specs/ui-framework/ffi-scene-commands/contract.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`

Related:

- `.heio/planning/locations/location-18-native-engine-desktop.md`
- `.heio/planning/locations/location-36-engine-home.md`
- `.heio/planning/locations/location-38-wgpu.md`
- `.heio/planning/locations/location-45-threads.md`
- `docs/overview/overview-ui-framework.md`
- `docs/specs/ui-framework/oem-hatch/purpose.md`
- `.heio/planning/sprints/mobile-after-desktop/slice-393-engine-images.md`

Excluded: scribble, archive, ADRs none, no packer in package.json, no blocking slice, docs/specs/ui-framework/composite function-component ladder, restaging met slice-373/381/385/393, raster, glyphs, images as this grain, Skia, tests

Next: freeze grain Compositing on location-37-rust-engine. Do not write docs/specs in this sitting. ffi-scene-commands quotes the grain and does not prove it. No matching compositing promise. Open product questions are none.

No packer script exists. Assembled by hand. Open product questions are none. [[purpose-ffi-scene-commands]] already lists Compositing in scope and parks compositing a layer tree as Out of scope for colored-rect oracles.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-37-rust-engine]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether a spec folder exists for this behaviour.
4. **Repeat**: Whether colored-rect, hatch, images, or pipeline-copy oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Engine compositing. Done: the engine composites a layer tree of offset, clip, transform, picture, and platform-view. Bet: try engine composite; pivot if the framework composites. Glyphs, images, raster as this grain, hatch slot attach, pipeline-copy, and later FFI stay out.
2. **Named set**: [[location-37-rust-engine]] Compositing sentence is locked. Public engine surface stays `Scene`, `submit`, `DrawRect`, and `recorded_draw_list`. No public `OffsetLayer`. No `ClipLayer`. No `TransformLayer`. No `PictureLayer`. No `PlatformViewLayer`. No `Compositor`. Packed-scene compositing fields stay unnamed. Later FFI commands stay unnamed. Existing hatch `Layer` and `recorded_layer_tree` stay hatch evidence, not this grain. Smallest reversible defaults: private compositor in `crates/engine`, not `pub use`d; assert `ffi-scene-commands.compositing:engine-composites` on the existing ffi-scene-commands ladder; CHECK lives in `tests/ffi-scene-commands/engine-compositing.test.mjs`. All tasks `mode: afk`. Do not wait on [[slice-84-platform-view-hatch]], [[slice-364-pipeline-copy]], or [[slice-393-engine-images]].
3. **Ladder**: [[purpose-ffi-scene-commands]] and [[contract-ffi-scene-commands]] exist. Compositing is in scope with no matching test. Colored-rect oracles do not prove compositing. This sitting does not write specs. First drain asserts that promise from the location destination plus [[architecture-layer-cake]] and [[glossary]]. No `docs/specs/ui-framework/engine-compositing/` area.
4. **Repeat**: Do not restage Taffy colored-rect submit or GPU-not-UI. Those live on [[purpose-ffi-scene-commands]]. Do not restage hatch slot attach. That lives on [[slice-84-platform-view-hatch]]. Do not restage pipeline-copy. That lives on [[slice-364-pipeline-copy]]. Do not restage engine images. That lives on [[slice-393-engine-images]]. Do not restage native glyphs. That lives on [[slice-373-engine-glyphs]]. Do not prove this grain with [[purpose-composite]] function-component tests.
5. **Wait**: Public `OffsetLayer`. `ClipLayer`. `TransformLayer`. `PictureLayer`. `PlatformViewLayer`. `Compositor`. Growing hatch `Layer` into a type catalog. Proving this grain with `recorded_layer_tree`. Packed-scene compositing fields. Later FFI compositing commands. Skia. Flutter Engine. Framework compositing. Metal from framework. Raster as this grain. Glyphs as this grain. Images as this grain. Restaging [[slice-84-platform-view-hatch]]. Restaging [[slice-364-pipeline-copy]]. Restaging [[slice-393-engine-images]]. Rewriting the location destination. Writing `docs/specs/` here. A `docs/specs/ui-framework/engine-compositing/` area.

### Candidate A

Already-named surface. Engine composites the layer tree. No public Layer type kit.

#### Problem

[[location-37-rust-engine]] Compositing is leftover after images froze in `mobile-after-desktop`. The grain is that the engine composites a layer tree of offset, clip, transform, picture, and platform-view. The bet pivots if the framework composites. [[purpose-ffi-scene-commands]] already quotes that sentence and parks compositing a layer tree as out of scope for colored-rect oracles. [[contract-ffi-scene-commands]] has no matching compositing promise. The ladder is empty for this grain. The location named those five as tree contents, not as exports. A public `Layer`, `OffsetLayer`, `ClipLayer`, `TransformLayer`, `PictureLayer`, or `PlatformViewLayer` kit would leak compositor policy into app code, invent packed-scene compositing field names the Wait list forbids, and restage the hatch slot as this grain.

#### Usage

App and tests keep the existing native packed-scene path. They do not import a compositor kit, Metal, Skia, or Flutter Engine types. They do not add compositing fields to the packed scene.

```js
import { submit, Scene, DrawRect } from "engine";

submit(Scene({ rects: [DrawRect({ x: 0, y: 0, w: 1, h: 1 })] }));
```

Callers do not begin, fill-rect, and end a command stream. They do not assemble offset then clip then transform then picture. Framework records the paint list on the UI thread and does not composite. Framework does not call Metal. The embedder is not the compositor. Web stays DOM. This grain is native engine only. Hatch `platform-view` slot attach stays on [[slice-84-platform-view-hatch]]. Raster, glyphs, images, and vsync stay other grains. Function-component `h` stays on [[purpose-composite]], not this layer tree.

#### Shape

No new public names. Compositing is a private Engine capability on the native path in [[architecture-layer-cake]]. Public engine surface stays `Scene`, `submit`, `DrawRect`, `recorded_draw_list`.

- **engine**: composites the layer tree of offset, clip, transform, picture, and platform-view. Those kinds stay private tree contents in `crates/engine`, not `pub use`d.
- **framework**: talks through the existing renderer portability surface. Records paint lists. Does not composite. Does not call Metal.
- **embedder**: window, vsync, input plumbing. Not the compositor.
- **runtime**: language GC and jobs. Not graphics. Not the layer tree.

Invariants: Engine, Runtime, and Embedder stay uncollapsed. Skia is not a product dependency. Flutter Engine is not a product dependency. Signals do not replace layer compositing. Packed-scene compositing field names stay unnamed. Later FFI commands stay unnamed. Existing hatch `Layer` and `recorded_layer_tree` in `crates/engine` are not this grain's surface and do not prove the five-kind tree. Do not mint public layer types. First drain writes the leftover promise on the existing ffi-scene-commands ladder. No docs or specs in this sitting. No `docs/specs/ui-framework/engine-compositing/` area.

Depth: one ownership cut hides layer-kind policy, clip and transform, picture versus platform-view mix, and that Engine not Framework composites. Callers still submit one packed colored rect.

#### Red flags

- **Shallow**: a public compositor kit of `OffsetLayer`, `ClipLayer`, `TransformLayer`, `PictureLayer`, and `PlatformViewLayer` that makes callers assemble the tree.
- **Leakage**: exporting packed-scene compositing field names, Metal types, Skia or Flutter Engine compositor types, or a Framework layer tree beside `DrawRect`.
- **Temporal**: public paint-then-composite-then-raster steps.
- **Pass-through**: a framework `composite` that only forwards to Metal or to the engine.
- **Skip**: restaging [[slice-84-platform-view-hatch]], [[slice-393-engine-images]], [[slice-373-engine-glyphs]], raster, vsync, or the colored-rect packed-scene oracles on [[contract-ffi-scene-commands]]. Do not prove this grain with [[purpose-composite]] function-component tests.

#### Next implementation step

Assert from the [[location-37-rust-engine]] Compositing sentence plus `docs/` that the engine composites the layer tree of offset, clip, transform, picture, and platform-view, and that the framework does not composite, then red-green one ownership oracle under `tests/ffi-scene-commands/`.

### Candidate B

Hide the whole compositor behind engine-owned compositing. One private compositor groups offset, clip, transform, picture, and platform-view. Not a Layer catalog.

#### Problem

[[location-37-rust-engine]] Compositing is leftover after the packed colored-rect submit. The grain is that the engine composites a layer tree of offset, clip, transform, picture, and platform-view. The bet pivots if the framework composites. [[purpose-ffi-scene-commands]] quotes that sentence and parks compositing a layer tree as out of scope. [[contract-ffi-scene-commands]] has no compositing promise. A public Layer catalog, push-then-pop-then-draw kit, or packed-scene compositing fields would leak tree shape into Framework and invent later FFI the Wait list forbids. Restaging [[slice-84-platform-view-hatch]] would treat the OEM slot as this product surface.

#### Usage

App and tests keep the existing native packed-scene path. They do not import a compositor, a Layer catalog, or Metal. They do not add compositing fields to the packed scene.

```js
import { submit, Scene, DrawRect } from "engine";

submit(Scene({ rects: [DrawRect({ x: 0, y: 0, w: 1, h: 1 })] }));
```

Callers do not push offset, clip, then pop, then draw. They do not name later FFI compositing commands. Inside `crates/engine`, raster talks to a private compositor. Framework still records paint on the UI thread and submits one packed scene. Web stays DOM. Hatch slot occupancy stays on [[slice-84-platform-view-hatch]]. Glyphs, images, pipeline-copy, input, and colored-rect oracles stay on their own slices.

#### Shape

`crates/engine` owns compositing as one private compositor. `lib.rs` does not `pub use` it. Public engine surface stays `Scene`, `submit`, `DrawRect`, `recorded_draw_list`. Do not grow the existing hatch `Layer` into a type catalog. Do not mint `OffsetLayer`, `ClipLayer`, `TransformLayer`, `PictureLayer`, or `Compositor`.

- **engine**: the compositor groups offset, clip, transform, picture, and platform-view as one knowledge grouping. Raster consumes that grouping. Platform-view is a layer kind inside the engine tree, not the OEM hatch product surface.
- **framework**: one packed scene submit. Does not own the compositor. Does not call Metal. Does not assemble push then pop then draw.
- **runtime**: language GC and jobs. Not graphics. Not the compositor.
- **embedder**: window, vsync, input plumbing. Not the layer tree owner.

Invariants encoded in ownership, not in a public Layer type: Engine composites. Framework does not. Signals do not replace layer compositing. No Skia. No Flutter Engine. Engine, Runtime, and Embedder stay uncollapsed. Packed-scene compositing field names stay unnamed. Later FFI stays unnamed. Raster as this grain stays unnamed. Empty ladder: first drain writes the leftover promise from this destination plus [[architecture-layer-cake]] and [[glossary]]. Do not mint `docs/specs/ui-framework/engine-compositing/`. Do not extend the colored-rect CHECK. Depth: zero new public names hide how those five kinds nest and how raster consumes them. Callers still submit one packed colored rect.

#### Red flags

- **Shallow**: a public Layer catalog plus `push`/`pop`/`draw` that makes callers assemble the tree.
- **Leakage**: exporting packed-scene compositing field names, Skia or Flutter Engine layer types, Metal from Framework, or treating hatch `Layer` as the compositing API.
- **Temporal**: public push-offset, then clip, then transform, then picture, then pop stages. That is the stage cut this seat rejects.
- **Pass-through**: a Framework `composite` that only forwards a tree into the engine.
- **Skip**: restaging [[slice-84-platform-view-hatch]], [[slice-364-pipeline-copy]], [[slice-393-engine-images]], glyphs, IO font load, single UI thread, input, or the colored-rect oracles. Letting Framework own the compositor.

#### Next implementation step

First drain asserts the leftover compositing promise on the existing ffi-scene-commands ladder from the [[location-37-rust-engine]] Compositing sentence plus [[architecture-layer-cake]], then red-green that `crates/engine` owns a private compositor used by raster, with no public Layer catalog, and with Framework still submitting one packed scene.

## Synthesis

Base is Candidate A. Graft from B: private compositor in `crates/engine` that is not `pub use`d; offset, clip, transform, picture, and platform-view stay one knowledge grouping; CHECK that the engine composites and the framework does not; promise id `ffi-scene-commands.compositing:engine-composites`; test path `tests/ffi-scene-commands/engine-compositing.test.mjs`.

Reject B as the slice shape: proving only a private compositor without the destination sentence as Done understates that the engine composites a layer tree of offset, clip, transform, picture, and platform-view. The private compositor is evidence, not the cut. Do not wait on [[slice-84-platform-view-hatch]], [[slice-364-pipeline-copy]], or [[slice-393-engine-images]].

Tradeoffs accepted:

- We accept the existing public scene constructors in exchange for not adding a public Layer type catalog.
- We accept one ownership oracle in exchange for not repeating colored-rect, hatch, images, or function-component tests.
- We accept ffi-scene-commands owning the leftover proof in exchange for not minting an engine-compositing spec folder.
- We accept asserting a new promise on the existing ladder in exchange for not rewriting the colored-rect oracle fence as this grain.
- We accept leaving hatch `Layer` and `recorded_layer_tree` as hatch evidence in exchange for not growing that type into the five-kind tree.

Alternatives considered:

- Public OffsetLayer plus ClipLayer plus TransformLayer plus PictureLayer plus PlatformViewLayer: leakage and shallow, lost.
- Waiting on [[slice-84-platform-view-hatch]] or [[slice-393-engine-images]]: those slices are hatch attach and images, not this compositing cut, lost.
- A new spec folder beside ffi-scene-commands: second owner for a sentence already in [[purpose-ffi-scene-commands]], lost.
- Framework as the compositor: the named pivot, lost.
- Embedder as the compositor: contradicts engine composites, lost.
- Growing hatch `Layer` into the five-kind catalog: restages [[slice-84-platform-view-hatch]], lost.

Open questions and risks:

- None the product peer cannot answer from [[location-37-rust-engine]], [[purpose-ffi-scene-commands]], [[architecture-layer-cake]], and [[glossary]]. Smallest reversible default: one CHECK under `tests/ffi-scene-commands/` that the engine composites a private five-kind layer tree used by raster, that the framework does not composite, and that hatch `Layer` is not this grain's surface.

Next implementation step: assert `ffi-scene-commands.compositing:engine-composites` on the ffi-scene-commands ladder, then red-green the ownership oracle.

### Tracer bullets

1. Assert compositing promise on ffi-scene-commands. blocked_by: none besides desktop honesty. AFK. Point [[contract-ffi-scene-commands]] `ffi-scene-commands.compositing:engine-composites` at a test. Purpose and contract already exist. No product code. Do not mint an engine-compositing spec folder. Do not rewrite colored-rect, raster, or layout promises.
2. Red-green the engine composites. blocked_by: assert promise. AFK. `tests/ffi-scene-commands/engine-compositing.test.mjs`. Private compositor in `crates/engine`, not `pub use`d. Five kinds offset, clip, transform, picture, and platform-view as one grouping. Framework does not composite. No public Layer catalog. Do not restage colored-rect, hatch, images, or function-component oracles. Do not wait on [[slice-84-platform-view-hatch]], [[slice-364-pipeline-copy]], or [[slice-393-engine-images]].

## Confirm

Confirmed.
