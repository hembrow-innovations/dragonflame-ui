---
id: "rounds-408-freeze-not-runtime"
title: "Freeze Not Runtime"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T10:24:00Z"
updated_at: "2026-09-12T10:24:00Z"
---

# Freeze Not Runtime

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN Not Runtime under [[location-37-rust-engine]]. Sprint `mobile-after-desktop` may freeze. [[slice-76-desktop-vsync-window]] is met. Do not restage [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], [[slice-385-single-ui-thread]], [[slice-389-input]], [[slice-393-engine-images]], [[slice-397-engine-compositing]], [[slice-401-engine-vsync-client]], or [[slice-405-engine-gpu-surface]]. Do not rewrite a location destination.

## Vault pack

Query: this is working when Engine, Runtime, and Embedder stay uncollapsed. Runtime is language GC and jobs.
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
- `docs/specs/ui-framework/ffi-scene-commands/contract.md`
- `.heio/planning/sprints/mobile-after-desktop/slice-405-engine-gpu-surface.md`

Excluded: scribble, archive, ADRs none, no packer in package.json, no blocking slice, restaging met slice-76 vsync window, restaging frozen glyphs/images/compositing/vsync/gpu-surface, restaging ios/android layers:uncollapsed, restaging location-45 Not RN threads, raster Not Skia as this grain, tests

Next: freeze grain Not Runtime on location-37-rust-engine. Do not write docs/specs in this sitting. desktop-embedder asserts desktop-embedder.layers:uncollapsed with no test yet. ffi-scene-commands quotes the grain and asserts ffi-scene-commands.layers:uncollapsed with no test yet. Do not restage slice-76. Open product questions are none.

No packer script exists. Assembled by hand. Open product questions are none. [[purpose-desktop-embedder]] already lists Not Runtime in scope. [[contract-desktop-embedder]] `desktop-embedder.layers:uncollapsed` is asserted with no test pointer. This sitting does not restage the vsync window.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-37-rust-engine]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether a spec folder exists for this behaviour.
4. **Repeat**: Whether vsync-window, gpu-surface, raster, or Not Skia oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Not Runtime. Done: Engine, Runtime, and Embedder stay uncollapsed. Runtime is language GC and jobs. Bet: try that split; pivot if Runtime is treated as graphics. Window opening, GPU surface as this grain, glyphs, images, compositing, vsync client, raster, and Not Skia stay out.
2. **Named set**: [[location-37-rust-engine]] Not Runtime sentence is locked. Public engine surface stays `Scene`, `submit`, `DrawRect`, and `recorded_draw_list`. No public `LayerCake`. No `Layers`. No `RuntimeHandle`. No `EngineHandle`. No `EmbedderHandle`. Smallest reversible defaults: crate-seam evidence in `crates/engine`, `crates/runtime`, and `crates/embedder`, not a Layers API; point existing `desktop-embedder.layers:uncollapsed` at a test; CHECK lives in `tests/desktop-embedder/layers-uncollapsed.test.mjs`. All tasks `mode: afk`. Do not wait on [[slice-405-engine-gpu-surface]], [[slice-401-engine-vsync-client]], [[slice-397-engine-compositing]], [[slice-393-engine-images]], or [[slice-373-engine-glyphs]]. Do not rewrite `desktop-embedder.layers:uncollapsed` sentence. Do not mint a not-runtime spec folder.
3. **Ladder**: [[purpose-desktop-embedder]] and [[contract-desktop-embedder]] exist. `desktop-embedder.layers:uncollapsed` already asserts the sentence with no test. This sitting does not write specs. First drain adds the `test:` pointer from the location destination plus [[architecture-layer-cake]] and [[glossary]]. No `docs/specs/ui-framework/not-runtime/` area.
4. **Repeat**: Do not restage the desktop vsync window. That lives on [[slice-76-desktop-vsync-window]] and [[purpose-desktop-embedder]]. Do not restage engine GPU surface. That lives on [[slice-405-engine-gpu-surface]]. Do not restage engine vsync client. That lives on [[slice-401-engine-vsync-client]]. Do not restage engine compositing. That lives on [[slice-397-engine-compositing]]. Do not restage native glyphs. That lives on [[slice-373-engine-glyphs]]. Do not restage engine images. That lives on [[slice-393-engine-images]]. Do not freeze Not Skia or raster as this grain. Do not restage no-webview or no-JS-engine host forbids as this grain.
5. **Wait**: Public `LayerCake`. `Layers`. `RuntimeHandle`. `EngineHandle`. `EmbedderHandle`. Collapsing layers. Treating Runtime as graphics. Treating Engine as GC. Treating Embedder as Engine. Not Skia as this grain. Raster as this grain. Glyphs as this grain. Images as this grain. Compositing as this grain. Vsync client as this grain. GPU surface as this grain. Window opening as this grain. Restaging [[slice-76-desktop-vsync-window]]. Restaging [[slice-405-engine-gpu-surface]]. Rewriting the location destination. Writing `docs/specs/` here. A `docs/specs/ui-framework/not-runtime/` area. Minting a JS engine as this Runtime.

### Candidate A

Already-named surface. Engine, Runtime, and Embedder stay uncollapsed. No public layer-catalog type kit. Runtime is language GC and jobs.

#### Problem

[[location-37-rust-engine]] Not Runtime is leftover after GPU surface froze in `mobile-after-desktop`. The grain is that Engine, Runtime, and Embedder stay uncollapsed. Runtime is language GC and jobs. The bet tries that split and pivots if Runtime is treated as graphics. [[purpose-desktop-embedder]] already lists Not Runtime in scope and [[contract-desktop-embedder]] already locked `desktop-embedder.layers:uncollapsed` with no test pointer. This sitting must not rewrite that promise. First drain may add a test pointer on the existing ladder. [[architecture-layer-cake]] and [[glossary]] already name the three-way cut: Engine is GPU, text, and images in Rust. Runtime is tracing GC, job queue, promises, and timers. Embedder is the OS window. A public `LayerCake`, `Layers`, `RuntimeHandle`, `EngineHandle`, or `EmbedderHandle` kit would leak the catalog into app code. Restaging [[slice-76-desktop-vsync-window]], [[slice-405-engine-gpu-surface]], glyphs, images, compositing, vsync, ios, android, raster, or Not Skia would freeze those grains as this cut.

#### Usage

App and tests keep the existing native packed-scene path. They do not import a layer-catalog type kit, `RuntimeHandle`, `EngineHandle`, `EmbedderHandle`, Hermes, JSC, or V8. They do not treat Runtime as graphics.

```js
import { submit, Scene, DrawRect } from "engine";

submit(Scene({ rects: [DrawRect({ x: 0, y: 0, w: 1, h: 1 })] }));
```

The embedder owns the window. Engine owns graphics. On native, a frame callback is a job on the Runtime queue. Callers do not construct Engine then Runtime then Embedder as public steps. Framework still only submits one packed colored rect. Window opening stays on [[slice-76-desktop-vsync-window]]. GPU surface stays on [[slice-405-engine-gpu-surface]]. Glyphs, images, compositing, vsync, ios, android, raster, and Not Skia stay other grains.

#### Shape

No new public names. The public surface is the three-way uncollapsed ownership cut named by [[location-37-rust-engine]] and [[architecture-layer-cake]]: Engine is graphics. Runtime is language GC and jobs. Embedder is the OS window. Public engine scene surface stays `Scene`, `submit`, `DrawRect`, `recorded_draw_list`. Do not mint `LayerCake`, `Layers`, `RuntimeHandle`, `EngineHandle`, or `EmbedderHandle`.

- **engine**: GPU, text, images, compositing, vsync client, GPU surface. Native only. Not GC. Not the OS window.
- **runtime**: tracing GC, job queue, promises, timers. A frame callback is a job on that queue. Not graphics.
- **embedder**: per platform. Window, vsync, input, IME, clipboard, accessibility. Does not own Engine. Does not own Runtime.
- **framework**: packed-scene submit. Does not collapse the three. Does not call Metal or treat Runtime as a raster loop.

Invariants: Engine, Runtime, and Embedder stay uncollapsed. Runtime is not graphics. Engine is not GC. Embedder is not Engine. No JS engine means no Hermes, JSC, or V8, not the absence of this Runtime. Do not rewrite `desktop-embedder.layers:uncollapsed`. First drain adds a test pointer on that existing ladder. No docs or specs in this sitting. No `docs/specs/ui-framework/not-runtime/` area.

Depth: one ownership cut hides GC, jobs, GPU, and OS window as three owners. Callers still submit one packed colored rect.

#### Red flags

- **Shallow**: a public `LayerCake` or handle kit of `engine()`, `runtime()`, `embedder()` that makes callers assemble the layers.
- **Leakage**: treating Runtime as graphics, Engine as GC, or Embedder as Engine; exporting Hermes, JSC, or V8 as this Runtime.
- **Temporal**: public construct-engine then start-runtime then attach-embedder stages.
- **Pass-through**: a `RuntimeHandle` that only forwards GC, or an `EngineHandle` that only forwards the scene crate.
- **Skip**: restaging [[slice-76-desktop-vsync-window]], [[slice-405-engine-gpu-surface]], glyphs, images, compositing, vsync, ios, android, raster, or Not Skia; rewriting the location destination; writing docs/specs here.

#### Next implementation step

Assert from the [[location-37-rust-engine]] Not Runtime sentence plus `docs/` that Engine, Runtime, and Embedder stay uncollapsed and Runtime is language GC and jobs, then red-green one ownership oracle on the existing desktop-embedder ladder without rewriting `desktop-embedder.layers:uncollapsed`.

### Candidate B

Hide the Engine, Runtime, and Embedder split behind crate seams so callers never see a Layers API.

#### Problem

[[location-37-rust-engine]] Not Runtime is leftover after GPU surface froze in `mobile-after-desktop`. The grain is working when Engine, Runtime, and Embedder stay uncollapsed, and Runtime is language GC and jobs. The bet tries that split and pivots if Runtime is treated as graphics. [[purpose-desktop-embedder]] already lists that sentence in scope. [[contract-desktop-embedder]] already asserts `desktop-embedder.layers:uncollapsed` with no `test:` pointer. Do not rewrite that promise. [[architecture-layer-cake]] and [[glossary]] already say Engine is graphics, Runtime is not graphics, and no JS engine means no Hermes, JSC, or V8, not the absence of this Runtime. A public `Layers` enum, `LayerCake`, `RuntimeHandle`, `EngineHandle`, or `EmbedderHandle` would leak the catalog into app code. Restaging [[slice-76-desktop-vsync-window]], [[slice-405-engine-gpu-surface]], glyphs, images, compositing, vsync, raster, ios, android, or Not Skia would treat those cuts as this grain.

#### Usage

App and tests keep the packed-scene submit. They do not import `Layers`, `LayerCake`, `RuntimeHandle`, `EngineHandle`, or `EmbedderHandle`. This CHECK does not open the vsync window again.

```js
import { submit, Scene, DrawRect } from "engine";
submit(Scene({ rects: [DrawRect({ x: 0, y: 0, w: 1, h: 1 })] }));
```

Callers do not name the three layers. They do not construct engine, then runtime, then embedder handles. Inside the workspace, `crates/engine` owns graphics and has no GC or job-queue types. `crates/runtime` owns tracing GC and the job queue and is not imported as graphics. `crates/embedder` owns the OS window and does not own raster, glyphs, or images. Proof is a crate-boundary or compile-fail oracle on those seams, not a public catalog. Glyphs, images, compositing, vsync client, GPU surface, raster, Not Skia, and the desktop vsync window stay other grains.

#### Shape

The three-way split lives in crate and module ownership. `crates/engine/src/lib.rs` does not `pub use` a Layers API. Public engine surface stays `Scene`, `submit`, `DrawRect`, `recorded_draw_list`. Do not mint `Layers`, `LayerCake`, `RuntimeHandle`, `EngineHandle`, or `EmbedderHandle`. Existing `open_vsync_window` and runtime `Queue` stay their crates' surfaces, not this grain's catalog.

- **engine**: owns GPU, text, and images in Rust. Encodes no GC or job-queue types. Does not depend on `runtime` as graphics.
- **runtime**: owns language tracing GC and jobs. Does not import engine scene or GPU types.
- **embedder**: owns the OS window. May depend on both crates to wire them. Does not own raster, glyphs, or images.
- **framework**: packed-scene submit. Does not collapse the three crates.

Invariants: Engine, Runtime, and Embedder stay uncollapsed [[architecture-layer-cake]] [[glossary]]. Runtime is not graphics. Engine is not GC. Embedder is not Engine. No public layer catalog. No `docs/specs/ui-framework/not-runtime/` area. Do not rewrite [[contract-desktop-embedder]]. First drain adds a `test:` pointer on the existing `desktop-embedder.layers:uncollapsed` ladder. Depth: zero new public names hide which crate owns GC versus GPU versus window. Callers still submit one packed scene.

#### Red flags

- **Shallow**: a public `Layers` enum or three handle types that make callers pick Engine, then Runtime, then Embedder to finish one submit.
- **Leakage**: GC or job-queue types on `crates/engine`, graphics types on `crates/runtime`, raster, glyphs, or images owned by `crates/embedder`, or `pub use` of `LayerCake`, `Layers`, `RuntimeHandle`, `EngineHandle`, or `EmbedderHandle`.
- **Temporal**: public uncollapse-then-wire-then-submit stages. That is the stage cut this seat rejects.
- **Pass-through**: a `Layers.engine()` that only forwards to the engine crate, or an embedder method that only re-exports `submit`.
- **Skip**: restaging [[slice-76-desktop-vsync-window]], [[slice-405-engine-gpu-surface]], glyphs, images, compositing, vsync, raster, ios, android, or Not Skia as this grain, treating Runtime as graphics, rewriting the location destination, or writing docs/specs here.

#### Next implementation step

First drain adds a `test:` pointer on existing `desktop-embedder.layers:uncollapsed` from the [[location-37-rust-engine]] Not Runtime sentence plus [[architecture-layer-cake]], then red-green a crate-boundary oracle under `tests/desktop-embedder/` that `crates/engine` has no GC or job-queue types, `crates/runtime` is not imported as graphics, and `crates/embedder` does not own raster, glyphs, or images, with callers never seeing a Layers API.

## Synthesis

Base is Candidate A. Graft from B: crate-seam evidence that `crates/engine` has no GC or job-queue types, `crates/runtime` is not imported as graphics, and `crates/embedder` does not own raster, glyphs, or images; CHECK that Engine, Runtime, and Embedder stay uncollapsed and Runtime is language GC and jobs; promise id `desktop-embedder.layers:uncollapsed`; test path `tests/desktop-embedder/layers-uncollapsed.test.mjs`. Do not mint a Layers API. Do not rewrite the promise sentence.

Reject B as the slice shape: proving only crate seams without the destination sentence as Done understates that Engine, Runtime, and Embedder stay uncollapsed. The crate seams are evidence, not the cut. Do not wait on [[slice-405-engine-gpu-surface]], [[slice-401-engine-vsync-client]], [[slice-397-engine-compositing]], [[slice-393-engine-images]], or [[slice-373-engine-glyphs]].

Tradeoffs accepted:

- We accept the existing public scene constructors in exchange for not adding a public layer-catalog type kit.
- We accept one ownership oracle in exchange for not repeating vsync-window, gpu-surface, raster, glyphs, images, compositing, or vsync-client tests.
- We accept desktop-embedder owning the leftover proof in exchange for not minting a not-runtime spec folder and not rewriting the `desktop-embedder.layers:uncollapsed` sentence.
- We accept adding a `test:` pointer on the existing ladder in exchange for not asserting a second layers promise.
- We accept crate-seam evidence in exchange for not minting `LayerCake` or handle types.
- We accept leaving Runtime as language GC and jobs in exchange for not treating no-JS-engine as the absence of this Runtime.

Alternatives considered:

- Public LayerCake plus engine plus runtime plus embedder handles: leakage and shallow, lost.
- Waiting on [[slice-405-engine-gpu-surface]] or [[slice-401-engine-vsync-client]]: those slices are GPU surface and vsync-client, not this uncollapsed-layers cut, lost.
- A new spec folder beside desktop-embedder: second owner for a sentence already in [[purpose-desktop-embedder]], lost.
- Treating Runtime as graphics: the named pivot, lost.
- Collapsing Engine into Embedder: contradicts intent Collapsed layers, lost.
- Restaging [[slice-76-desktop-vsync-window]]: that slice already proved the window, lost.
- Minting Hermes, JSC, or V8 as this Runtime: contradicts no JS engine, lost.
- Not Skia as this grain: that nested bullet is a different cut, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-37-rust-engine]], [[purpose-desktop-embedder]], [[architecture-layer-cake]], and [[glossary]]. Smallest reversible default: one CHECK under `tests/desktop-embedder/` that Engine, Runtime, and Embedder stay uncollapsed, that Runtime is language GC and jobs, that callers never see a Layers API, and that crate seams keep GC off the engine crate and graphics off the runtime crate.

Next implementation step: point `desktop-embedder.layers:uncollapsed` at a test on the desktop-embedder ladder, then red-green the ownership oracle.

### Tracer bullets

1. Lock layers-uncollapsed promise. blocked_by: none besides desktop honesty. AFK. Point [[contract-desktop-embedder]] `desktop-embedder.layers:uncollapsed` at a test. Purpose and contract already exist. No product code. Do not mint a not-runtime spec folder. Do not rewrite the promise sentence. Do not rewrite gpu-surface, vsync-client, raster, glyphs, images, or compositing promises.
2. Red-green uncollapsed layers. blocked_by: lock promise. AFK. `tests/desktop-embedder/layers-uncollapsed.test.mjs`. Crate-seam evidence in `crates/engine`, `crates/runtime`, and `crates/embedder`. No public layer catalog. Do not restage vsync-window, gpu-surface, raster, glyphs, images, compositing, or vsync-client oracles. Do not wait on [[slice-405-engine-gpu-surface]], [[slice-401-engine-vsync-client]], [[slice-397-engine-compositing]], [[slice-393-engine-images]], or [[slice-373-engine-glyphs]].

## Confirm

Confirmed.
