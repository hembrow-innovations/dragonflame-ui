---
id: "rounds-372-freeze-engine-glyphs"
title: "Freeze Engine glyphs"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T08:00:25Z"
updated_at: "2026-09-12T08:00:25Z"
---

# Freeze Engine glyphs

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN Engine glyphs under [[location-55-text]]. Sprint `mobile-after-desktop` may freeze. [[slice-76-desktop-vsync-window]] is met. Do not restage [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], or [[slice-364-pipeline-copy]]. Do not rewrite a location destination.

## Vault pack

Query: this is working when native glyphs live in the Rust engine.
Area: talk-and-measure

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-55-text.md`
- `.heio/planning/sprints/mobile-after-desktop/shape.md`
- `docs/specs/ui-framework/talk-and-measure/purpose.md`
- `docs/specs/ui-framework/talk-and-measure/contract.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`

Related:

- `.heio/planning/locations/location-19-mobile-embedders.md`
- `.heio/planning/locations/location-37-rust-engine.md`
- `.heio/planning/locations/location-32-host-leaves.md`
- `.heio/planning/locations/location-18-native-engine-desktop.md`
- `docs/overview/glossary.md`
- `.heio/planning/sprints/mobile-after-desktop/slice-83-talk-and-measure.md`

Excluded: scribble, archive, ADRs none, no packer in package.json, no blocking slice, restaging met slice-83, glyph atlas and font file formats, Skia for text, per-host metrics, text leaf, IO font load, tests

Next: freeze grain Engine glyphs on location-55-text. Do not write docs/specs in this sitting. talk-and-measure quotes the grain and does not prove it. Matching promise talk-and-measure.engine:forbid-skia-text is asserted. Open product questions are none.

No packer script exists. Assembled by hand. Open product questions are none. [[purpose-talk-and-measure]] already lists Engine glyphs in scope and says this area does not prove it.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-55-text]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether a spec folder exists for this behaviour.
4. **Repeat**: Whether dump, metrics, or forbid-skia oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Engine glyphs. Done: native glyphs live in the Rust engine. Bet: try engine glyphs; pivot if Skia is pulled in for text. Dump, per-host metrics, text leaf, and IO font load stay out.
2. **Named set**: [[location-55-text]] Engine glyphs sentence is locked. Public engine surface stays `Scene`, `submit`, `DrawRect`, and `recorded_draw_list`. No public Glyphs type. No `Paragraph.layout`. No `TextPainter`. Glyph atlas and font file formats stay unnamed. Smallest reversible defaults: private glyphs module in `crates/engine`, not `pub use`d; lock `talk-and-measure.engine:forbid-skia-text` on the existing talk-and-measure ladder; CHECK lives in `tests/talk-and-measure/engine-glyphs.test.mjs`. All tasks `mode: afk`. Do not wait on [[slice-83-talk-and-measure]].
3. **Ladder**: [[purpose-talk-and-measure]] and [[contract-talk-and-measure]] exist. Engine glyphs is in scope with no matching test. `talk-and-measure.engine:forbid-skia-text` is asserted with no test pointer. This sitting does not write specs. First drain locks that promise from the location destination plus [[overview-ui-framework]] and [[architecture-layer-cake]].
4. **Repeat**: Do not restage SemanticsNode dump, prop reuse, signals-do-not-replace, measureText, or loadFont. Those live on [[purpose-talk-and-measure]] and [[slice-83-talk-and-measure]]. Do not restage desktop or mobile `engine:forbid-skia` (no Skia requirement at all). Those live on [[purpose-desktop-embedder]], [[purpose-ios-embedder]], and [[purpose-android-embedder]]. Do not restage FFI packed-scene submit. That lives on [[purpose-ffi-scene-commands]] and does not prove glyphs.
5. **Wait**: Glyph atlas. Font file formats. Public Glyphs. `Paragraph.layout`. `TextPainter`. Skia for text. Text leaf. IO font load as this grain. Phase 3 word. Restaging [[slice-83-talk-and-measure]]. Rewriting the location destination. Writing `docs/specs/` here. A `docs/specs/ui-framework/engine-glyphs/` area.

### Candidate A

Already-named surface. Callers keep the existing text and scene path. No public glyph type.

#### Problem

[[location-55-text]] Engine glyphs is leftover after [[slice-83-talk-and-measure]] froze dump and metrics. The grain is that native glyphs live in the Rust engine. The bet pivots if Skia is pulled in for text. [[purpose-talk-and-measure]] already lists that sentence in scope and says this area's oracles do not prove it. [[contract-talk-and-measure]] already asserts `talk-and-measure.engine:forbid-skia-text` with no test. A public glyph store, atlas, or `Paragraph.layout` would leak Flutter text types into app code.

#### Usage

App and tests keep the existing native scene path. They do not import a glyph store, Skia types, `Paragraph.layout`, or `TextPainter`.

```js
import { submit, Scene, DrawRect } from "engine";

submit(Scene({ rects: [DrawRect({ x: 0, y: 0, w: 1, h: 1 })] }));
```

`measureText` and `loadFont` stay the talk-and-measure seam from [[slice-83-talk-and-measure]]. This grain does not restage them. Framework does not raster glyphs. The embedder does not own the glyph store.

#### Shape

No new public names. Glyphs are a private Engine capability on the native path in [[architecture-layer-cake]].

- **engine**: owns the glyph store and native glyph raster. Public surface stays `Scene`, `submit`, `DrawRect`, `recorded_draw_list`.
- **framework**: talks through the existing renderer portability surface. Does not raster glyphs.
- **embedder**: window, vsync, a11y plumbing. Not the glyph store.

Invariants: Skia is not a text dependency. Atlas and font file formats stay unnamed. Callers never see `Paragraph.layout` or `TextPainter`. Leftover proof owner is [[purpose-talk-and-measure]]. No new spec area.

#### Red flags

- **Shallow**: a public glyph store, atlas, or format enum would make callers assemble text raster.
- **Leakage**: exporting Skia types, `Paragraph.layout`, or `TextPainter`.
- **Temporal**: public load-then-shape-then-raster steps.
- **Pass-through**: a framework `drawText` that only forwards to Skia or Flutter text types.
- **Skip**: pointing CHECK at [[slice-83-talk-and-measure]] tests.

#### Next implementation step

Assert from the location destination plus `docs/` that native glyphs live in the Rust engine and Skia is not pulled in for text, then red-green one ownership oracle.

### Candidate B

Hide glyphs entirely behind the existing engine crate. Prove ownership with a private module and a no-Skia crate graph. No new caller type.

#### Problem

Same leftover grain. [[slice-83-talk-and-measure]] already proved `measureText` and `loadFont`. The non-obvious cut is proving engine ownership without a new caller type, without restaging slice 83, and without naming atlas, formats, `Paragraph.layout`, or `TextPainter`.

#### Usage

App and framework keep the existing seams. They never import a glyph type.

```js
import { measureText } from "dragonflame-ui";
const m = measureText({ text: "Hi", host: "engine" });
```

Inside `crates/engine`, raster and scene record call a private glyphs capability. `Cargo.toml` stays pollster, taffy, wgpu. No Skia.

#### Shape

`crates/engine` owns glyphs as a private module. `lib.rs` does not `pub use` it. Public engine surface stays `Scene`, `submit`, `DrawRect`, `recorded_draw_list`. Proof is the private module is used, the crate graph has no Skia, and no public glyph export. Depth: zero new names hide where glyphs live. Does not prove text-as-leaf or IO font load. Does not grow `DrawRect` into a glyph type. Leftover promise `talk-and-measure.engine:forbid-skia-text` on [[purpose-talk-and-measure]]. No new spec folder.

#### Red flags

- **Shallow**: a no-Skia `Cargo.toml` with no used private module.
- **Leakage**: re-exporting glyph store types beside `DrawRect`.
- **Temporal**: public load-then-measure-then-paint stages.
- **Pass-through**: a `measureText` wrapper that only forwards the stub.
- **Skip**: a public Glyphs type, which is Candidate A, not this cut.

#### Next implementation step

First drain locks `talk-and-measure.engine:forbid-skia-text` from the location destination plus docs, then red-green a CHECK that `crates/engine` owns a private glyphs module used by raster and paint, with no Skia dep and no public glyph type.

## Synthesis

Base is Candidate A. Graft from B: private glyphs module in `crates/engine` that is not `pub use`d; crate graph has no Skia; CHECK that the private module is used by raster and paint; promise id `talk-and-measure.engine:forbid-skia-text`; test path `tests/talk-and-measure/engine-glyphs.test.mjs`.

Reject B as the slice shape: proving only a cargo graph without the destination sentence as Done understates that native glyphs live in the Rust engine. The cargo graph is evidence, not the cut. Do not wait on [[slice-83-talk-and-measure]]; that slice is met dump-and-metrics and is not restaged.

Tradeoffs accepted:

- We accept the existing public scene constructors in exchange for not adding a public Glyphs type.
- We accept one ownership oracle in exchange for not repeating dump, metrics, or loadFont tests.
- We accept talk-and-measure owning the leftover proof in exchange for not minting an engine-glyphs spec folder.
- We accept locking the existing forbid-skia-text promise in exchange for not inventing a second promise id.

Alternatives considered:

- Public Glyphs plus atlas and format enums: leakage and shallow, lost.
- Waiting on [[slice-83-talk-and-measure]]: that slice is dump and metrics, not this ownership cut, lost.
- A new spec folder beside talk-and-measure: second owner for a sentence already in [[purpose-talk-and-measure]], lost.
- Restaging measureText or loadFont as this grain: mixes cuts, lost.
- Cargo.toml no-Skia with no used glyphs module: shallow prove, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-55-text]], [[purpose-talk-and-measure]], [[overview-ui-framework]], and [[architecture-layer-cake]]. Smallest reversible default: one CHECK under `tests/talk-and-measure/` that native glyphs live in the Rust engine as a private module used by raster and paint, and that Skia is not pulled in for text.

Next implementation step: lock `talk-and-measure.engine:forbid-skia-text` on the talk-and-measure ladder, then red-green the ownership oracle.

### Tracer bullets

1. Lock forbid-skia-text promise on talk-and-measure. blocked_by: none besides desktop honesty. AFK. Point [[contract-talk-and-measure]] `talk-and-measure.engine:forbid-skia-text` at a test. Purpose and contract already exist. No product code. Do not mint an engine-glyphs spec folder. Do not rewrite dump, metrics, or loadFont promises.
2. Red-green native glyphs live in the Rust engine. blocked_by: lock promise. AFK. `tests/talk-and-measure/engine-glyphs.test.mjs`. Private glyphs module in `crates/engine`, not `pub use`d. No Skia. No public Glyphs type. Do not restage dump, metrics, or loadFont oracles. Do not wait on [[slice-83-talk-and-measure]].

## Confirm

Confirmed.
