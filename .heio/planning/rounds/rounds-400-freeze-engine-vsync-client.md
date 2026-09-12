---
id: "rounds-400-freeze-engine-vsync-client"
title: "Freeze Engine vsync client"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T09:50:13Z"
updated_at: "2026-09-12T09:50:13Z"
---

# Freeze Engine vsync client

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN Vsync client under [[location-37-rust-engine]]. Sprint `mobile-after-desktop` may freeze. [[slice-76-desktop-vsync-window]] is met. Do not restage [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], [[slice-385-single-ui-thread]], [[slice-389-input]], [[slice-393-engine-images]], or [[slice-397-engine-compositing]]. Do not rewrite a location destination.

## Vault pack

Query: this is working when the engine is a vsync client and one vsync comes from the embedder.
Area: desktop-embedder

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-37-rust-engine.md`
- `.heio/planning/sprints/mobile-after-desktop/shape.md`
- `docs/specs/ui-framework/desktop-embedder/purpose.md`
- `docs/specs/ui-framework/desktop-embedder/contract.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`

Related:

- `.heio/planning/locations/location-18-native-engine-desktop.md`
- `.heio/planning/locations/location-36-engine-home.md`
- `.heio/planning/locations/location-38-wgpu.md`
- `.heio/planning/locations/location-45-threads.md`
- `docs/overview/overview-ui-framework.md`
- `docs/specs/ui-framework/ffi-scene-commands/purpose.md`
- `.heio/planning/sprints/mobile-after-desktop/slice-397-engine-compositing.md`

Excluded: scribble, archive, ADRs none, no packer in package.json, no blocking slice, restaging met slice-76 vsync window, restaging slice-296 one-vsync, restaging frozen slice-397 compositing, raster glyphs images GPU surface as this grain, native Clock retarget, location-39 Vsync as this grain, Skia, tests

Next: freeze grain Vsync client on location-37-rust-engine. Do not write docs/specs in this sitting. desktop-embedder already locks desktop-embedder.vsync:embedder-supplies. ffi-scene-commands quotes the grain and does not prove it. Do not restage slice-76. Open product questions are none.

No packer script exists. Assembled by hand. Open product questions are none. [[purpose-desktop-embedder]] already lists Vsync client in scope and proves the window plus one embedder vsync. [[contract-desktop-embedder]] `desktop-embedder.vsync:embedder-supplies` is locked. This sitting does not restage that window.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-37-rust-engine]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether a spec folder exists for this behaviour.
4. **Repeat**: Whether vsync-window, one-vsync, clocks, or compositing oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Engine vsync client. Done: the engine is a vsync client and one vsync comes from the embedder. Bet: try one vsync from the embedder; pivot if the framework owns vsync. Window opening, GPU surface, raster as this grain, glyphs, images, compositing, and web rAF stay out.
2. **Named set**: [[location-37-rust-engine]] Vsync client sentence is locked. Public engine surface stays `Scene`, `submit`, `DrawRect`, and `recorded_draw_list`. No public `VsyncClient`. No `VsyncPort`. No `Ticker`. No `SchedulerBinding`. No `AnimationController`. Packed-scene vsync fields stay unnamed. Later FFI vsync commands stay unnamed. `present_one_vsync` stays the existing embedder-to-engine call, not this grain's surface. Smallest reversible defaults: private vsync-client grouping in `crates/engine`, not `pub use`d; assert `ffi-scene-commands.vsync:engine-client` on the existing ffi-scene-commands ladder; CHECK lives in `tests/ffi-scene-commands/engine-vsync-client.test.mjs`. All tasks `mode: afk`. Do not wait on [[slice-397-engine-compositing]], [[slice-393-engine-images]], or [[slice-373-engine-glyphs]]. Do not rewrite `desktop-embedder.vsync:embedder-supplies`.
3. **Ladder**: [[purpose-desktop-embedder]] and [[contract-desktop-embedder]] exist. `desktop-embedder.vsync:embedder-supplies` already locks the sentence and [[slice-76-desktop-vsync-window]] already proved the window. [[purpose-ffi-scene-commands]] quotes the grain and does not prove engine-as-client. This sitting does not write specs. First drain asserts that leftover promise from the location destination plus [[architecture-layer-cake]] and [[glossary]]. No `docs/specs/ui-framework/vsync-client/` area.
4. **Repeat**: Do not restage the desktop vsync window. That lives on [[slice-76-desktop-vsync-window]] and [[purpose-desktop-embedder]]. Do not restage one vsync or web rAF clocks. Those live on [[slice-296-one-vsync]] and [[purpose-animation-clocks]]. Do not restage engine compositing. That lives on [[slice-397-engine-compositing]]. Do not restage native glyphs. That lives on [[slice-373-engine-glyphs]]. Do not restage engine images. That lives on [[slice-393-engine-images]]. Do not retarget `Clock` onto desktop vsync.
5. **Wait**: Public `VsyncClient`. `VsyncPort`. `Ticker`. `SchedulerBinding`. `AnimationController`. Treating `present_one_vsync` as this grain's surface. Packed-scene vsync fields. Later FFI vsync commands. GPU surface as this grain. Raster as this grain. Glyphs as this grain. Images as this grain. Compositing as this grain. Framework owning vsync. Engine owning the window. Native Clock retarget. Location-39 Vsync as this grain. Skia. Flutter Engine. Restaging [[slice-76-desktop-vsync-window]]. Restaging [[slice-296-one-vsync]]. Restaging [[slice-397-engine-compositing]]. Rewriting the location destination. Writing `docs/specs/` here. A `docs/specs/ui-framework/vsync-client/` area.

### Candidate A

Already-named surface. Engine is a vsync client. One vsync comes from the embedder. No public vsync type kit.

#### Problem

[[location-37-rust-engine]] Vsync client is leftover after glyphs, images, and compositing froze in `mobile-after-desktop`. The grain is that the engine is a vsync client and one vsync comes from the embedder. The bet pivots if the framework owns vsync. [[purpose-ffi-scene-commands]] already quotes that sentence and parks repeating vsync-window oracles as out of scope. Those live on [[purpose-desktop-embedder]]. [[contract-desktop-embedder]] already locked `desktop-embedder.vsync:embedder-supplies` and [[slice-76-desktop-vsync-window]] already proved the window opens. This sitting must not restage that cut. GPU surface stays a later grain. Animation clocks stay in the Framework library on [[purpose-animation-clocks]]. A public `VsyncClient`, `VsyncPort`, or embedder raster loop would leak tick policy into app code and collapse the layer cake.

#### Usage

App and tests keep the existing native packed-scene path. They do not import a vsync type, a ticker kit, Metal, Skia, or Flutter Engine types. They do not retarget `Clock` onto desktop vsync.

```js
import { submit, Scene, DrawRect } from "engine";

submit(Scene({ rects: [DrawRect({ x: 0, y: 0, w: 1, h: 1 })] }));
```

The embedder supplies one vsync and the engine consumes it. Hosts already reach that client through `engine::present_one_vsync` in `crates/engine`. Callers do not schedule vsync, do not own a raster loop, and do not wait then raster then present as three public steps. Framework keeps `Clock` beside the pipeline. Web rAF stays on [[purpose-animation-clocks]]. This grain is native engine only. Window opening stays on [[slice-76-desktop-vsync-window]]. Raster, glyphs, images, compositing, and GPU surface stay other grains.

#### Shape

No new public names. The public surface is the client relationship named by [[location-37-rust-engine]] and [[architecture-layer-cake]]: Engine is the vsync client. One vsync comes from the embedder. Public engine scene surface stays `Scene`, `submit`, `DrawRect`, `recorded_draw_list`. `present_one_vsync` stays the existing embedder-to-engine call, not a new clock API.

- **engine**: vsync client. Consumes one embedder tick. Does not own vsync. Does not own animation state. Does not export a ticker.
- **embedder**: supplies one vsync. Owns the window. Is not the raster loop.
- **framework**: animation clocks and vsync tickers beside the pipeline. Does not own vsync.
- **runtime**: language GC and jobs. A frame callback is a job on that queue. Not graphics. Not vsync.

Invariants: Engine, Runtime, and Embedder stay uncollapsed. Skia is not a product dependency. Flutter Engine is not a product dependency. Signals do not replace tickers. Framework does not own vsync. Packed-scene vsync fields stay unnamed. Later FFI commands stay unnamed. Do not mint `VsyncClient`, `VsyncPort`, `Ticker`, `SchedulerBinding`, or `AnimationController`. First drain writes the leftover promise on the existing ffi-scene-commands ladder. No docs or specs in this sitting. No `docs/specs/ui-framework/vsync-client/` area.

Depth: one ownership cut hides host tick sources and that raster is engine work after a client tick. Callers still submit one packed colored rect. The embedder still supplies one vsync.

#### Red flags

- **Shallow**: a public `VsyncClient` kit of `wait`, `onTick`, and `present` that makes callers drive the frame.
- **Leakage**: exporting winit redraw, CADisplayLink, Choreographer, rAF, `Clock`, or GPU surface types as the engine vsync API.
- **Temporal**: public wait-vsync then raster then present stages.
- **Pass-through**: a framework `requestVsync` that only forwards to the embedder, or an embedder `raster` that only forwards GPU submit.
- **Skip**: restaging [[slice-76-desktop-vsync-window]], [[purpose-animation-clocks]] rAF or one-vsync oracles, GPU surface, raster, glyphs, images, or compositing.

#### Next implementation step

Assert from the [[location-37-rust-engine]] Vsync client sentence plus `docs/` that the engine is a vsync client and one vsync comes from the embedder, and that the framework does not own vsync, then red-green one ownership oracle under `tests/ffi-scene-commands/` without restaging the vsync-window tests.

### Candidate B

Hide vsync-wait, frame-wake, and raster-thread handoff behind one private engine client grouping. Not a vsync type catalog.

#### Problem

[[location-37-rust-engine]] Vsync client is leftover after glyphs, images, and compositing. The grain is that the engine is a vsync client and one vsync comes from the embedder. The bet tries one vsync from the embedder and pivots if the framework owns vsync. `desktop-embedder.vsync:embedder-supplies` already locked that sentence on [[contract-desktop-embedder]] via met [[slice-76-desktop-vsync-window]]. This slice must not restage that window. `present_one_vsync` in `crates/engine` takes a window handle and presents GPU, which leaks window into the engine and belongs to the later GPU surface grain. A public `VsyncPort`, `Ticker`, or engine `Clock` would leak delivery, animation, and winit into callers and contradict [[contract-animation-clocks]].

#### Usage

App and tests keep the packed-scene submit. They do not import a vsync port, a ticker, or a window as the engine client argument. Framework still owns `Clock` in the library. Embedder still owns `open_vsync_window` in `crates/embedder`. This CHECK does not open that window again.

```js
import { submit, Scene, DrawRect } from "engine";
submit(Scene({ rects: [DrawRect({ x: 0, y: 0, w: 1, h: 1 })] }));
```

Callers do not pass a winit window into the engine to wait. They do not start `Clock` from the engine. They do not call wait, then wake, then raster-handoff. Inside `crates/engine`, the client waits for the next vsync. The embedder delivers that vsync. Runtime posts the native frame callback as a job. Web stays `requestAnimationFrame` on [[purpose-animation-clocks]]. Glyphs, images, compositing, and GPU surface stay other grains.

#### Shape

`crates/engine` owns vsync-wait, frame-wake, and raster-thread handoff as one private client grouping. `lib.rs` does not `pub use` it. Public engine surface stays `Scene`, `submit`, `DrawRect`, `recorded_draw_list`. Do not mint `VsyncPort`, `Ticker`, `SchedulerBinding`, or `VsyncClient`. Do not treat `present_one_vsync` as this grain's surface.

- **engine**: waits for the next vsync. Groups wait, wake, and raster handoff as one knowledge cut. Does not own the window. Does not own animation state.
- **embedder**: delivers one vsync. Owns the window. Does not become the client.
- **runtime**: the native frame callback is a job on the UI thread queue [[location-45-threads]]. Not graphics.
- **framework**: `Clock` and vsync tickers stay in the Draconic library. Tickers sit beside the pipeline. Signals do not replace tickers.

Invariants: Engine, Runtime, and Embedder stay uncollapsed [[architecture-layer-cake]] [[glossary]]. One vsync from the embedder. Framework does not own vsync. Engine does not own the window. No Skia. No Flutter Engine. No `pub use` of winit or wgpu types. Empty dedicated vsync-client spec. Do not rewrite [[contract-desktop-embedder]]. First drain asserts leftover engine-wait on the existing ffi-scene-commands ladder from this destination plus `docs/`. Depth: zero new public names hide how a tick arrives, how a frame job wakes, and how raster consumes it. Callers still submit one packed scene.

#### Red flags

- **Shallow**: public wait, then wake, then raster-handoff methods that make callers coordinate one frame.
- **Leakage**: exporting winit, wgpu, Skia, Flutter, `Clock`, `Ticker`, `VsyncPort`, or treating `present_one_vsync(window)` as the vsync-client API.
- **Temporal**: public wait-then-wake-then-submit stages. That is the stage cut this seat rejects.
- **Pass-through**: an engine wait that only forwards to winit redraw or to Framework `Clock`.
- **Skip**: restaging [[slice-76-desktop-vsync-window]], retargeting `Clock` onto desktop vsync, GPU surface as this grain, glyphs, images, compositing, or letting Framework own vsync.

#### Next implementation step

First drain asserts leftover engine-client wait on the existing ffi-scene-commands ladder from the [[location-37-rust-engine]] Vsync client sentence plus [[architecture-layer-cake]], then red-green that `crates/engine` waits for the next vsync behind one private client grouping, with embedder still delivering, Runtime still owning the frame job, and no window, `Clock`, or `present_one_vsync` as this surface.

## Synthesis

Base is Candidate A. Graft from B: private vsync-client grouping in `crates/engine` that is not `pub use`d; wait, wake, and raster handoff stay one knowledge grouping; CHECK that the engine is a vsync client and the framework does not own vsync; promise id `ffi-scene-commands.vsync:engine-client`; test path `tests/ffi-scene-commands/engine-vsync-client.test.mjs`. Do not treat `present_one_vsync` as this grain's surface.

Reject B as the slice shape: proving only a private wait grouping without the destination sentence as Done understates that the engine is a vsync client and one vsync comes from the embedder. The private grouping is evidence, not the cut. Do not wait on [[slice-397-engine-compositing]], [[slice-393-engine-images]], or [[slice-373-engine-glyphs]].

Tradeoffs accepted:

- We accept the existing public scene constructors in exchange for not adding a public vsync type catalog.
- We accept one ownership oracle in exchange for not repeating vsync-window, one-vsync, clocks, or compositing tests.
- We accept ffi-scene-commands owning the leftover proof in exchange for not minting a vsync-client spec folder and not rewriting [[contract-desktop-embedder]].
- We accept asserting a new promise on the existing ffi-scene-commands ladder in exchange for not restaging `desktop-embedder.vsync:embedder-supplies`.
- We accept leaving `present_one_vsync` as the existing embedder-to-engine call in exchange for not treating GPU present as this grain's surface.

Alternatives considered:

- Public VsyncClient plus wait plus onTick plus present: leakage and shallow, lost.
- Waiting on [[slice-397-engine-compositing]] or [[slice-393-engine-images]]: those slices are compositing and images, not this vsync-client cut, lost.
- A new spec folder beside ffi-scene-commands or desktop-embedder: second owner for a sentence already in [[purpose-desktop-embedder]] and quoted by [[purpose-ffi-scene-commands]], lost.
- Framework as the vsync owner: the named pivot, lost.
- Engine owning the window: contradicts embedder owns window, lost.
- Restaging [[slice-76-desktop-vsync-window]]: that slice already proved the window, lost.
- Treating `present_one_vsync` as this grain: restages GPU surface, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-37-rust-engine]], [[purpose-desktop-embedder]], [[purpose-ffi-scene-commands]], [[architecture-layer-cake]], and [[glossary]]. Smallest reversible default: one CHECK under `tests/ffi-scene-commands/` that the engine is a vsync client, that one vsync comes from the embedder, that the framework does not own vsync, and that `present_one_vsync` is not this grain's surface.

Next implementation step: assert `ffi-scene-commands.vsync:engine-client` on the ffi-scene-commands ladder, then red-green the ownership oracle.

### Tracer bullets

1. Assert vsync-client promise on ffi-scene-commands. blocked_by: none besides desktop honesty. AFK. Point [[contract-ffi-scene-commands]] `ffi-scene-commands.vsync:engine-client` at a test. Purpose and contract already exist. No product code. Do not mint a vsync-client spec folder. Do not rewrite desktop-embedder, one-vsync, clocks, or compositing promises.
2. Red-green the engine vsync client. blocked_by: assert promise. AFK. `tests/ffi-scene-commands/engine-vsync-client.test.mjs`. Private vsync-client grouping in `crates/engine`, not `pub use`d. Wait, wake, and raster handoff as one grouping. Framework does not own vsync. No public vsync type catalog. Do not restage vsync-window, one-vsync, clocks, or compositing oracles. Do not wait on [[slice-397-engine-compositing]], [[slice-393-engine-images]], or [[slice-373-engine-glyphs]].

## Confirm

Confirmed.
