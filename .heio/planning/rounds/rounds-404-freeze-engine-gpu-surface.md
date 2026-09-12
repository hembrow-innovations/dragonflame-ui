---
id: "rounds-404-freeze-engine-gpu-surface"
title: "Freeze Engine GPU surface"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T10:06:12Z"
updated_at: "2026-09-12T10:06:12Z"
---

# Freeze Engine GPU surface

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN GPU surface under [[location-37-rust-engine]]. Sprint `mobile-after-desktop` may freeze. [[slice-76-desktop-vsync-window]] is met. Do not restage [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], [[slice-385-single-ui-thread]], [[slice-389-input]], [[slice-393-engine-images]], [[slice-397-engine-compositing]], or [[slice-401-engine-vsync-client]]. Do not rewrite a location destination.

## Vault pack

Query: this is working when the engine owns the GPU surface. See [[location-38-wgpu]]
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
- `.heio/planning/sprints/mobile-after-desktop/slice-401-engine-vsync-client.md`

Excluded: scribble, archive, ADRs none, no packer in package.json, no blocking slice, restaging met slice-76 vsync window, restaging frozen slice-401 vsync client, restaging ios/android gpu:engine-owns, raster glyphs images compositing vsync as this grain, location-39 Window as this grain, Skia, CanvasKit, Skwasm, tests

Next: freeze grain GPU surface on location-37-rust-engine. Do not write docs/specs in this sitting. desktop-embedder already locks desktop-embedder.gpu:engine-owns. ffi-scene-commands quotes the grain and does not prove it. Do not restage slice-76. Open product questions are none.

No packer script exists. Assembled by hand. Open product questions are none. [[purpose-desktop-embedder]] already lists GPU surface in scope and proves the window plus one embedder vsync. [[contract-desktop-embedder]] `desktop-embedder.gpu:engine-owns` is locked. This sitting does not restage that window.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-37-rust-engine]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether a spec folder exists for this behaviour.
4. **Repeat**: Whether vsync-window, vsync-client, raster, or location-38 oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Engine GPU surface. Done: the engine owns the GPU surface. Bet: try engine-owns-GPU; pivot if the embedder owns GPU or Skia is required. Window opening, raster as this grain, glyphs, images, compositing, vsync client, location-38 When funded, location-38 Not web GPU, and location-39 Window stay out.
2. **Named set**: [[location-37-rust-engine]] GPU surface sentence is locked. Public engine surface stays `Scene`, `submit`, `DrawRect`, and `recorded_draw_list`. No public `GpuSurface`. No `GpuContext`. No `Swapchain`. No `Device`. No `Queue`. No `Adapter`. Packed-scene GPU fields stay unnamed. Later FFI GPU commands stay unnamed. `present_one_vsync` stays the existing embedder-to-engine call that uses a private GPU grouping. Smallest reversible defaults: private GPU grouping in `crates/engine`, not `pub use`d; assert `ffi-scene-commands.gpu:engine-owns` on the existing ffi-scene-commands ladder; CHECK lives in `tests/ffi-scene-commands/engine-gpu-surface.test.mjs`. All tasks `mode: afk`. Do not wait on [[slice-401-engine-vsync-client]], [[slice-397-engine-compositing]], [[slice-393-engine-images]], or [[slice-373-engine-glyphs]]. Do not rewrite `desktop-embedder.gpu:engine-owns`. Do not mint a [[location-38-wgpu]] slice.
3. **Ladder**: [[purpose-desktop-embedder]] and [[contract-desktop-embedder]] exist. `desktop-embedder.gpu:engine-owns` already locks the sentence and [[slice-76-desktop-vsync-window]] already proved the window. [[purpose-ffi-scene-commands]] quotes the grain and does not prove engine-owns-GPU. This sitting does not write specs. First drain asserts that leftover promise from the location destination plus [[architecture-layer-cake]] and [[glossary]]. No `docs/specs/ui-framework/gpu-surface/` area.
4. **Repeat**: Do not restage the desktop vsync window. That lives on [[slice-76-desktop-vsync-window]] and [[purpose-desktop-embedder]]. Do not restage engine vsync client. That lives on [[slice-401-engine-vsync-client]]. Do not restage engine compositing. That lives on [[slice-397-engine-compositing]]. Do not restage native glyphs. That lives on [[slice-373-engine-glyphs]]. Do not restage engine images. That lives on [[slice-393-engine-images]]. Do not freeze location-38 When funded or Not web GPU as this grain. Do not freeze location-39 Window as this grain.
5. **Wait**: Public `GpuSurface`. `GpuContext`. `Swapchain`. `Device`. `Queue`. `Adapter`. `pub use` of wgpu types. Public `GpuError` stage variants as a catalog. Packed-scene GPU fields. Later FFI GPU commands. Raster as this grain. Glyphs as this grain. Images as this grain. Compositing as this grain. Vsync client as this grain. Embedder owning GPU. Location-38 When funded as this grain. Location-38 Not web GPU as this grain. Location-39 Window as this grain. Skia. Flutter Engine. CanvasKit. Skwasm. Restaging [[slice-76-desktop-vsync-window]]. Restaging [[slice-401-engine-vsync-client]]. Rewriting the location destination. Writing `docs/specs/` here. A `docs/specs/ui-framework/gpu-surface/` area. Minting a [[location-38-wgpu]] slice.

### Candidate A

Already-named surface. Engine owns the GPU surface. No public GPU type kit. GPU present is this grain.

#### Problem

[[location-37-rust-engine]] GPU surface is leftover after vsync client froze in `mobile-after-desktop`. The grain is that the engine owns the GPU surface. The bet tries engine-owns-GPU and pivots if the embedder owns GPU or Skia is required. [[purpose-desktop-embedder]] already lists GPU surface in scope and [[contract-desktop-embedder]] already locked `desktop-embedder.gpu:engine-owns`. [[slice-76-desktop-vsync-window]] already proved the window. This sitting must not restage that cut. [[purpose-ffi-scene-commands]] quotes the grain and does not prove it. [[architecture-layer-cake]] and [[glossary]] still word Embedder as holding GPU surface; honor the locked engine-owns cut and do not rewrite those notes. A public `GpuSurface`, `Device`, `Queue`, or wgpu re-export would leak present policy into app code. Minting a [[location-38-wgpu]] slice would freeze When funded or Not web GPU as this grain.

#### Usage

App and tests keep the existing native packed-scene path. They do not import a GPU type kit, Metal, Skia, CanvasKit, Skwasm, or Flutter Engine types. They do not configure wgpu.

```js
import { submit, Scene, DrawRect } from "engine";

submit(Scene({ rects: [DrawRect({ x: 0, y: 0, w: 1, h: 1 })] }));
```

The embedder owns the window and supplies one vsync. Hosts already reach engine-owned present through `engine::present_one_vsync` in `crates/engine`. Callers do not create instance then adapter then device then surface then present as public steps. Framework still only submits one packed colored rect. Raster-thread GPU submit stays `gpu_submit_recorded` on the raster grain. Window opening stays on [[slice-76-desktop-vsync-window]]. Glyphs, images, compositing, vsync client, location-38 When funded and Not web GPU, and location-39 Window stay other grains.

#### Shape

No new public names. The public surface is the ownership cut named by [[location-37-rust-engine]] and [[architecture-layer-cake]]: Engine owns the GPU surface. Embedder owns the window. Public engine scene surface stays `Scene`, `submit`, `DrawRect`, `recorded_draw_list`. `present_one_vsync` is this grain's existing embedder-to-engine call, not a new `GpuSurface` API. wgpu stays behind that call because native is funded. Do not mint a [[location-38-wgpu]] slice.

- **engine**: owns the GPU surface. Creates, configures, and presents it. Does not own the OS window. Does not export wgpu types.
- **embedder**: owns the window. Supplies one vsync. Hands the window it owns into `present_one_vsync`. Does not own GPU. Does not configure wgpu.
- **framework**: packed-scene submit. Does not own GPU. Does not call Metal or Skia.
- **runtime**: language GC and jobs. Not graphics. Not the GPU surface.

Invariants: Engine, Runtime, and Embedder stay uncollapsed. Skia is not a product dependency. Flutter Engine is not a product dependency. CanvasKit and Skwasm are not this grain. Packed-scene GPU fields stay unnamed. Later FFI GPU commands stay unnamed. Do not mint `GpuSurface`, `SurfaceHandle`, `Device`, `Queue`, or `Adapter` as product types. Do not `pub use` wgpu. Do not rewrite `desktop-embedder.gpu:engine-owns`. First drain writes the leftover promise on the existing ffi-scene-commands ladder. No docs or specs in this sitting. No `docs/specs/ui-framework/gpu-surface/` area.

Depth: one ownership cut hides instance, adapter, device, surface configure, present mode, and backends. Callers still submit one packed colored rect. The embedder still owns the window.

#### Red flags

- **Shallow**: a public `GpuSurface` kit of `create`, `configure`, `acquire`, and `present` that makes callers drive the GPU.
- **Leakage**: exporting wgpu `Surface`, `Device`, `Queue`, or `Instance`, or making the embedder own the GPU surface.
- **Temporal**: public create-instance then request-adapter then configure-surface then present stages.
- **Pass-through**: an embedder `present` that only forwards wgpu, or an engine present that only forwards an embedder-owned surface.
- **Skip**: restaging [[slice-76-desktop-vsync-window]], raster `gpu_submit_recorded`, vsync client, location-38 When funded or Not web GPU, location-39 Window, Skia, CanvasKit, or Skwasm.

#### Next implementation step

Assert from the [[location-37-rust-engine]] GPU surface sentence plus `docs/` that the engine owns the GPU surface and the embedder does not, then red-green one ownership oracle under `tests/ffi-scene-commands/` without restaging the vsync-window tests.

### Candidate B

Hide instance, adapter, device, queue, surface, swapchain, and present behind one private engine GPU grouping. Not a GPU type catalog.

#### Problem

[[location-37-rust-engine]] GPU surface is leftover after vsync client froze. The grain is that the engine owns the GPU surface. The bet tries engine-owns-GPU and pivots if the embedder owns GPU or Skia is required. `desktop-embedder.gpu:engine-owns` already locked that sentence on [[contract-desktop-embedder]] via met [[slice-76-desktop-vsync-window]]. This slice must not restage that window. This sitting freezes the location-37 grain and does not mint a [[location-38-wgpu]] slice. `present_one_vsync` in `crates/engine/src/gpu/surface.rs` currently creates instance, adapter, device, queue, and surface on each call, and `crates/engine/src/lib.rs` `pub use`s `GpuError` variants named Surface, Adapter, Device, and Present. That leaks wgpu lifecycle into the public crate. A public `GpuSurface`, `GpuContext`, `Swapchain`, or `Device` would leak backend choice into app code and contradict Answer 11. Honor the locked engine-owns cut, not glossary Embedder wording that still lists GPU surface.

#### Usage

App and tests keep the packed-scene submit. They do not import wgpu, Metal, Vulkan, Skia, Flutter Engine, `GpuSurface`, `GpuContext`, `Swapchain`, or `Device`. Embedder still owns the window in `crates/embedder`. This CHECK does not open that window again.

```js
import { submit, Scene, DrawRect } from "engine";
submit(Scene({ rects: [DrawRect({ x: 0, y: 0, w: 1, h: 1 })] }));
```

Callers do not create a wgpu instance. They do not request an adapter, then a device, then a queue. They do not configure a swapchain then present. Inside `crates/engine`, one private GPU grouping creates instance, adapter, device, queue, and surface, configures the swapchain, and presents. The embedder passes only a window handle. Raster, glyphs, images, compositing, vsync client, window opening, one-vsync clocks, location-38 When funded and Not web GPU, and location-39 Window stay other grains.

#### Shape

`crates/engine` owns wgpu Instance, Adapter, Device, Queue, Surface creation, swapchain, and present as one private GPU grouping. `lib.rs` does not `pub use` it. Public engine surface stays `Scene`, `submit`, `DrawRect`, `recorded_draw_list`. Do not mint `GpuSurface`, `GpuContext`, `Swapchain`, or `Device`. Do not export wgpu, Metal, Vulkan, Skia, or Flutter Engine types. `present_one_vsync` may remain the embedder-to-engine entry that uses that grouping. It is not a GPU type catalog. Callers never see wgpu types.

- **engine**: owns the GPU surface. Groups instance through present as one knowledge cut. Does not own the window.
- **embedder**: owns the window handle only. Delivers it. Does not own GPU.
- **runtime**: language GC and jobs. Not graphics.
- **framework**: packed-scene submit. Does not own GPU.

Invariants: Engine, Runtime, and Embedder stay uncollapsed [[architecture-layer-cake]] [[glossary]]. Engine owns GPU. Embedder owns window. wgpu because native is funded. No Skia. No Flutter Engine. No CanvasKit. No Skwasm. No `pub use` of wgpu types. Empty dedicated gpu-surface spec. Do not rewrite [[contract-desktop-embedder]]. Do not mint a location-38 slice. First drain asserts leftover engine-owns on the existing ffi-scene-commands ladder from this destination plus `docs/`. Depth: zero new public names hide how a GPU surface is created, configured, and presented. Callers still submit one packed scene. Embedder still owns only the window handle.

#### Red flags

- **Shallow**: public create-instance, request-adapter, request-device, configure-swapchain, and present methods that make callers drive one surface.
- **Leakage**: exporting wgpu, Metal, Vulkan, Skia, Flutter Engine, `GpuSurface`, `GpuContext`, `Swapchain`, `Device`, or `GpuError` stage variants.
- **Temporal**: public instance-then-adapter-then-device-then-swapchain-then-present stages. That is the stage cut this seat rejects.
- **Pass-through**: an engine present that only forwards to wgpu `Surface::present`, or an embedder that creates the device and hands it in.
- **Skip**: restaging [[slice-76-desktop-vsync-window]], raster, glyphs, images, compositing, vsync client, location-38 When funded or Not web GPU as this grain, location-39 Window as this grain, Skia, CanvasKit, Skwasm, or letting the embedder own GPU.

#### Next implementation step

First drain asserts leftover engine-owns GPU on the existing ffi-scene-commands ladder from the [[location-37-rust-engine]] GPU surface sentence plus [[architecture-layer-cake]], then red-green that `crates/engine` keeps instance, adapter, device, queue, surface, swapchain, and present behind one private GPU grouping, with embedder still owning only the window handle and callers never seeing wgpu types.

## Synthesis

Base is Candidate A. Graft from B: private GPU grouping in `crates/engine` that is not `pub use`d; instance, adapter, device, queue, surface, swapchain, and present stay one knowledge grouping; CHECK that the engine owns the GPU surface and the embedder does not; promise id `ffi-scene-commands.gpu:engine-owns`; test path `tests/ffi-scene-commands/engine-gpu-surface.test.mjs`. Do not `pub use` wgpu types or `GpuError` stage variants as a catalog. `present_one_vsync` stays the existing embedder-to-engine call that uses that grouping.

Reject B as the slice shape: proving only a private grouping without the destination sentence as Done understates that the engine owns the GPU surface. The private grouping is evidence, not the cut. Do not wait on [[slice-401-engine-vsync-client]], [[slice-397-engine-compositing]], [[slice-393-engine-images]], or [[slice-373-engine-glyphs]].

Tradeoffs accepted:

- We accept the existing public scene constructors in exchange for not adding a public GPU type catalog.
- We accept one ownership oracle in exchange for not repeating vsync-window, vsync-client, raster, glyphs, images, or compositing tests.
- We accept ffi-scene-commands owning the leftover proof in exchange for not minting a gpu-surface spec folder and not rewriting [[contract-desktop-embedder]].
- We accept asserting a new promise on the existing ffi-scene-commands ladder in exchange for not restaging `desktop-embedder.gpu:engine-owns`.
- We accept leaving `present_one_vsync` as the existing embedder-to-engine call in exchange for not minting `GpuSurface`.
- We accept not minting a [[location-38-wgpu]] slice in exchange for freezing only the location-37 GPU surface grain.

Alternatives considered:

- Public GpuSurface plus create plus configure plus present: leakage and shallow, lost.
- Waiting on [[slice-401-engine-vsync-client]] or [[slice-397-engine-compositing]]: those slices are vsync-client and compositing, not this GPU-surface cut, lost.
- A new spec folder beside ffi-scene-commands or desktop-embedder: second owner for a sentence already in [[purpose-desktop-embedder]] and quoted by [[purpose-ffi-scene-commands]], lost.
- Embedder owning GPU: the named pivot, lost.
- Engine owning the window: contradicts embedder owns window, lost.
- Restaging [[slice-76-desktop-vsync-window]]: that slice already proved the window, lost.
- Minting a [[location-38-wgpu]] slice: freezes When funded or Not web GPU as this grain, lost.
- Skia or Flutter Engine as the GPU stack: contradicts Not Skia, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-37-rust-engine]], [[purpose-desktop-embedder]], [[purpose-ffi-scene-commands]], [[architecture-layer-cake]], and [[glossary]]. Smallest reversible default: one CHECK under `tests/ffi-scene-commands/` that the engine owns the GPU surface, that the embedder owns the window and not GPU, that callers never see wgpu types, and that `present_one_vsync` uses a private GPU grouping.

Next implementation step: assert `ffi-scene-commands.gpu:engine-owns` on the ffi-scene-commands ladder, then red-green the ownership oracle.

### Tracer bullets

1. Assert GPU-surface promise on ffi-scene-commands. blocked_by: none besides desktop honesty. AFK. Point [[contract-ffi-scene-commands]] `ffi-scene-commands.gpu:engine-owns` at a test. Purpose and contract already exist. No product code. Do not mint a gpu-surface spec folder. Do not rewrite desktop-embedder, vsync-client, raster, glyphs, images, or compositing promises.
2. Red-green the engine GPU surface. blocked_by: assert promise. AFK. `tests/ffi-scene-commands/engine-gpu-surface.test.mjs`. Private GPU grouping in `crates/engine`, not `pub use`d. Instance through present as one grouping. Embedder does not own GPU. No public GPU type catalog. Do not restage vsync-window, vsync-client, raster, glyphs, images, or compositing oracles. Do not wait on [[slice-401-engine-vsync-client]], [[slice-397-engine-compositing]], [[slice-393-engine-images]], or [[slice-373-engine-glyphs]].

## Confirm

Confirmed.
