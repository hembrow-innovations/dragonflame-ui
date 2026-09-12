---
id: "rounds-392-freeze-engine-images"
title: "Freeze Engine images"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T09:18:42Z"
updated_at: "2026-09-12T09:18:42Z"
---

# Freeze Engine images

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN Images under [[location-37-rust-engine]]. Sprint `mobile-after-desktop` may freeze. [[slice-76-desktop-vsync-window]] is met. Do not restage [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], [[slice-385-single-ui-thread]], or [[slice-389-input]]. Do not rewrite a location destination.

## Vault pack

Query: this is working when the engine owns images, with image decode on the IO thread.
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
- `.heio/planning/locations/location-19-mobile-embedders.md`
- `.heio/planning/locations/location-45-threads.md`
- `docs/overview/overview-ui-framework.md`
- `.heio/planning/sprints/mobile-after-desktop/slice-373-engine-glyphs.md`
- `.heio/planning/sprints/mobile-after-desktop/slice-381-io-font-load.md`
- `.heio/planning/sprints/mobile-after-desktop/slice-385-single-ui-thread.md`

Excluded: scribble, archive, ADRs none, no packer in package.json, no blocking slice, leaf-kit and host-leaves DOM image, restaging met slice-373/381/385, compositing, raster, glyphs as this grain, IO font load as this grain, Skia, tests

Next: freeze grain Images on location-37-rust-engine. Do not write docs/specs in this sitting. ffi-scene-commands quotes the grain and does not prove it. No matching image promise. Open product questions are none.

No packer script exists. Assembled by hand. Open product questions are none. [[purpose-ffi-scene-commands]] already lists Images in scope and parks image decode on the IO thread as Out of scope for colored-rect oracles.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-37-rust-engine]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether a spec folder exists for this behaviour.
4. **Repeat**: Whether colored-rect, glyphs, or IO font-load oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Engine images. Done: the engine owns images, with image decode on the IO thread. Bet: try engine images; pivot if image decode blocks the UI thread. Glyphs, IO font load, compositing, raster as this grain, and later FFI stay out.
2. **Named set**: [[location-37-rust-engine]] Images sentence is locked. Public engine surface stays `Scene`, `submit`, `DrawRect`, and `recorded_draw_list`. No public Image. No `loadImage`. No ImageDecoder. No DecodeJob. No Thread. Packed-scene image fields stay unnamed. Later FFI commands stay unnamed. Smallest reversible defaults: private images store in `crates/engine`, not `pub use`d; assert `ffi-scene-commands.images:engine-owns` on the existing ffi-scene-commands ladder; CHECK lives in `tests/ffi-scene-commands/engine-images.test.mjs`. All tasks `mode: afk`. Do not wait on [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], or [[slice-385-single-ui-thread]].
3. **Ladder**: [[purpose-ffi-scene-commands]] and [[contract-ffi-scene-commands]] exist. Images is in scope with no matching test. Colored-rect oracles do not prove images. This sitting does not write specs. First drain asserts that promise from the location destination plus [[architecture-layer-cake]] and [[glossary]]. No `docs/specs/ui-framework/engine-images/` area.
4. **Repeat**: Do not restage Taffy colored-rect submit or GPU-not-UI. Those live on [[purpose-ffi-scene-commands]]. Do not restage native glyphs. That lives on [[slice-373-engine-glyphs]]. Do not restage IO font load. That lives on [[slice-381-io-font-load]]. Do not restage heavy work off the UI thread as the single-UI-thread cut. That lives on [[slice-385-single-ui-thread]].
5. **Wait**: Public Image. `loadImage`. ImageDecoder. DecodeJob. Thread. Packed-scene image fields. Later FFI image commands. Codec names. Atlas. Texture ids. Skia. Compositing as this grain. Raster as this grain. Glyphs as this grain. IO font load as this grain. Restaging [[slice-373-engine-glyphs]]. Restaging [[slice-381-io-font-load]]. Restaging [[slice-385-single-ui-thread]]. Rewriting the location destination. Writing `docs/specs/` here. A `docs/specs/ui-framework/engine-images/` area.

### Candidate A

Already-named surface. Engine owns images. Decode runs on the IO thread. No public image type.

#### Problem

[[location-37-rust-engine]] Images is leftover after glyphs, IO font load, and single UI thread were frozen in `mobile-after-desktop`. The grain is that the engine owns images, with image decode on the IO thread. The bet pivots if decode blocks the UI thread. [[purpose-ffi-scene-commands]] already quotes that sentence and lists image decode on the IO thread as out of scope. [[contract-ffi-scene-commands]] has no matching image promise. The ladder is empty for this grain. A public image store, decoder, or packed-scene image field would leak codec and thread policy into app code, and would invent later FFI the Wait list forbids.

#### Usage

App and tests keep the existing native packed-scene path. They do not import an image store, a decoder, Skia types, or a thread. They do not add image fields to the packed scene.

```js
import { submit, Scene, DrawRect } from "engine";

submit(Scene({ rects: [DrawRect({ x: 0, y: 0, w: 1, h: 1 })] }));
```

Callers do not begin, fill-rect, and end a command stream. Framework records the paint list on the UI thread and does not decode. The embedder is not the image decoder. Web stays DOM. This grain is native engine only. Glyphs, `loadFont`, and single-UI-thread oracles stay on their own slices.

#### Shape

No new public names. Images are a private Engine capability on the native path in [[architecture-layer-cake]]. Public engine surface stays `Scene`, `submit`, `DrawRect`, `recorded_draw_list`.

- **engine**: owns the image store and image decode. Decode runs on the IO thread named by [[location-45-threads]]. GPU submit stays on the raster thread.
- **framework**: talks through the existing renderer portability surface. Does not decode.
- **embedder**: window, vsync, input plumbing. Not the image decoder.
- **runtime**: language GC and jobs. Not graphics. Not the decode queue.

Invariants: Engine, Runtime, and Embedder stay uncollapsed. Skia is not a product dependency. Flutter Engine is not a product dependency. Packed-scene field names stay unnamed. Later FFI commands stay unnamed. [[glossary]] has no image term yet. Do not mint `loadImage`, `Image`, `ImageDecoder`, or `Thread`. Decode may share the IO thread with font load as architecture. This grain does not prove `loadFont` or glyphs. First drain writes the leftover promise. No docs or specs in this sitting.

Depth: one ownership-and-thread cut hides codec, bytes, GPU upload, and which thread runs decode. Callers still submit one packed colored rect.

#### Red flags

- **Shallow**: a public image store, decoder, format enum, or `thread: "io"` label that makes callers assemble decode.
- **Leakage**: exporting Skia types, Flutter Engine image types, packed-scene image fields, or codec bytes across Framework or Embedder.
- **Temporal**: public load-then-decode-then-upload-then-draw steps.
- **Pass-through**: a framework `decodeImage` that only forwards to an OS or embedder decoder.
- **Skip**: restaging [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], [[slice-385-single-ui-thread]], or the colored-rect packed-scene oracles on [[contract-ffi-scene-commands]].

#### Next implementation step

Assert from the [[location-37-rust-engine]] Images sentence plus `docs/` that the engine owns images and decode runs on the IO thread, not the UI thread, then red-green one ownership-and-thread oracle.

### Candidate B

Hide the whole image pipeline behind engine-owned images. One private store groups codec, decoded cache, and GPU upload. Not a decode-job handle.

#### Problem

[[location-37-rust-engine]] Images is leftover after the packed colored-rect submit. The grain is that the engine owns images, with decode on the IO thread. The bet pivots if decode blocks the UI thread. [[purpose-ffi-scene-commands]] quotes that sentence and lists image decode on the IO thread as out of scope. [[contract-ffi-scene-commands]] has no image promise. A public decode job, codec enum, pixel buffer, or GPU texture id would leak pipeline stages into Framework and Runtime. A job handle would cut the work by time: submit decode, wait, then upload. That repeats one image across three seams. Glyphs, IO font load, and single UI thread stay other slices.

#### Usage

App and tests keep the existing native scene path. They do not import an image type, a decode job, a codec, or a thread.

```js
import { submit, Scene, DrawRect } from "engine";

submit(Scene({ rects: [DrawRect({ x: 0, y: 0, w: 1, h: 1 })] }));
```

Callers do not name a later FFI image command. They do not call `loadImage`. They do not pass bytes onto the Runtime job queue. Inside `crates/engine`, raster and scene record talk to a private images store. Decode runs on the IO thread named in [[architecture-layer-cake]]. Web stays DOM.

#### Shape

`crates/engine` owns images as one private store. `lib.rs` does not `pub use` it. Public engine surface stays `Scene`, `submit`, `DrawRect`, `recorded_draw_list`.

- **engine**: the store owns codec choice, decoded-pixel cache, and GPU upload. IO thread decodes. Raster thread only consumes images the store already made GPU-ready. UI thread never decodes.
- **framework**: one packed scene submit. Does not own images. Does not assemble decode then upload.
- **runtime**: language GC and jobs. Not the image owner. Not an image decode lane.
- **embedder**: window and vsync. Not the image store.

Invariants encoded in ownership, not in a public job type: Engine owns images. Decode is not on the UI thread. No Skia. No Flutter Engine. Engine, Runtime, and Embedder stay uncollapsed. Later FFI commands stay unnamed. Atlas, codecs, and texture ids stay unnamed. Empty ladder: first drain writes the leftover promise from this destination plus [[architecture-layer-cake]] and [[glossary]]. Do not extend the colored-rect CHECK. Depth: zero new public names hide codec, cache, IO decode, and GPU upload as one knowledge grouping.

#### Red flags

- **Shallow**: a public DecodeJob plus codec enum plus upload helper. Callers would assemble the pipeline.
- **Leakage**: exporting pixel buffers, wgpu texture ids, Skia images, or a Framework `Image` beside `DrawRect`.
- **Temporal**: public decode, then cache, then GPU-upload stages. That is the job-handle cut this seat rejects.
- **Pass-through**: a Framework `loadImage` that only forwards bytes into the engine.
- **Skip**: putting decode on the Runtime job queue, or proving this grain with glyphs, `loadFont`, or the colored-rect CHECK.

#### Next implementation step

First drain writes purpose, contract, and test from the Images destination plus [[architecture-layer-cake]], then red-green that `crates/engine` owns a private images store used by raster, with decode on the IO thread and not on the UI thread, and with no public image or decode-job type.

## Synthesis

Base is Candidate A. Graft from B: private images store in `crates/engine` that is not `pub use`d; codec, decoded cache, and GPU upload stay one knowledge grouping; CHECK that decode runs on the IO thread and not on the UI thread; promise id `ffi-scene-commands.images:engine-owns`; test path `tests/ffi-scene-commands/engine-images.test.mjs`.

Reject B as the slice shape: proving only a private store without the destination sentence as Done understates that the engine owns images, with image decode on the IO thread. The private store is evidence, not the cut. Do not wait on [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], or [[slice-385-single-ui-thread]].

Tradeoffs accepted:

- We accept the existing public scene constructors in exchange for not adding a public Image type.
- We accept one ownership-and-thread oracle in exchange for not repeating colored-rect, glyphs, or loadFont tests.
- We accept ffi-scene-commands owning the leftover proof in exchange for not minting an engine-images spec folder.
- We accept asserting a new promise on the existing ladder in exchange for not rewriting the colored-rect oracle fence as this grain.

Alternatives considered:

- Public Image plus codec enum plus DecodeJob: leakage and shallow, lost.
- Waiting on [[slice-373-engine-glyphs]] or [[slice-381-io-font-load]]: those slices are glyphs and font load, not this images cut, lost.
- A new spec folder beside ffi-scene-commands: second owner for a sentence already in [[purpose-ffi-scene-commands]], lost.
- Decode as a Runtime job: collapses Engine and Runtime, lost.
- Embedder as the decoder: contradicts engine owns images, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-37-rust-engine]], [[purpose-ffi-scene-commands]], [[architecture-layer-cake]], and [[glossary]]. Smallest reversible default: one CHECK under `tests/ffi-scene-commands/` that the engine owns images as a private store used by raster, with decode on the IO thread and not on the UI thread.

Next implementation step: assert `ffi-scene-commands.images:engine-owns` on the ffi-scene-commands ladder, then red-green the ownership-and-thread oracle.

### Tracer bullets

1. Assert images promise on ffi-scene-commands. blocked_by: none besides desktop honesty. AFK. Point [[contract-ffi-scene-commands]] `ffi-scene-commands.images:engine-owns` at a test. Purpose and contract already exist. No product code. Do not mint an engine-images spec folder. Do not rewrite colored-rect, raster, or layout promises.
2. Red-green the engine owns images. blocked_by: assert promise. AFK. `tests/ffi-scene-commands/engine-images.test.mjs`. Private images store in `crates/engine`, not `pub use`d. Decode on the IO thread, not the UI thread. No public Image type. Do not restage colored-rect, glyphs, or loadFont oracles. Do not wait on [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], or [[slice-385-single-ui-thread]].

## Confirm

Confirmed.
