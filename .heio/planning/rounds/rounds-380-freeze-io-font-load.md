---
id: "rounds-380-freeze-io-font-load"
title: "Freeze IO font load"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T08:29:13Z"
updated_at: "2026-09-12T08:29:13Z"
---

# Freeze IO font load

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN IO font load under [[location-55-text]]. Sprint `mobile-after-desktop` may freeze. [[slice-76-desktop-vsync-window]] is met. Do not restage [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], or [[slice-373-engine-glyphs]]. Do not rewrite a location destination.

## Vault pack

Query: this is working when font load runs on the IO thread.
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
- `.heio/planning/locations/location-32-host-leaves.md`
- `.heio/planning/locations/location-37-rust-engine.md`
- `.heio/planning/locations/location-45-threads.md`
- `docs/overview/glossary.md`
- `.heio/planning/sprints/mobile-after-desktop/slice-373-engine-glyphs.md`
- `.heio/planning/sprints/mobile-after-desktop/slice-83-talk-and-measure.md`

Excluded: scribble, archive, ADRs none, no packer in package.json, no blocking slice, restaging met slice-83 loadFont oracle, engine glyphs, per-host metrics, text leaf, Phase 3 word, tests

Next: freeze grain IO font load on location-55-text. Do not write docs/specs in this sitting. talk-and-measure quotes the grain and already locks `talk-and-measure.fonts:load-on-io`. Open product questions are none.

No packer script exists. Assembled by hand. Open product questions are none. [[purpose-talk-and-measure]] already lists IO font load in scope. [[slice-83-talk-and-measure]] Done is the weaker cut: font load is not required to block the UI thread.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-55-text]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether a spec folder exists for this behaviour.
4. **Repeat**: Whether dump, metrics, or engine-glyphs oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze IO font load. Done: font load runs on the IO thread. Bet: try IO font load; pivot if font load blocks the UI thread. Dump, per-host metrics, engine glyphs, text leaf, and image decode stay out.
2. **Named set**: [[location-55-text]] IO font load sentence is locked. Public fonts seam stays `loadFont`. No public Thread, IoLane, FontJob, or FontLoader. No `Paragraph.layout`. No `TextPainter`. Glyph atlas and font file formats stay unnamed. Smallest reversible defaults: private engine IO module in `crates/engine`, not `pub use`d; keep `talk-and-measure.fonts:load-on-io` on the existing talk-and-measure ladder; CHECK lives in `tests/talk-and-measure/io-font-load.test.mjs`. All tasks `mode: afk`. Do not wait on [[slice-83-talk-and-measure]] or [[slice-373-engine-glyphs]].
3. **Ladder**: [[purpose-talk-and-measure]] and [[contract-talk-and-measure]] exist. `talk-and-measure.fonts:load-on-io` is locked with a test pointer at the combined per-host-metrics CHECK. This sitting does not write specs. First drain may retarget only that promise's test pointer to the dedicated CHECK. Do not rewrite dump or measureText promises.
4. **Repeat**: Do not restage SemanticsNode dump, prop reuse, signals-do-not-replace, or measureText. Those live on [[purpose-talk-and-measure]] and [[slice-83-talk-and-measure]]. Do not restage native glyphs in the Rust engine. That lives on [[slice-373-engine-glyphs]]. Do not restage image decode. That lives on [[location-45-threads]].
5. **Wait**: Image decode. Public Thread. Glyph atlas. Font file formats. `Paragraph.layout`. `TextPainter`. Skia for text. Text leaf. Engine glyphs as this grain. Phase 3 word. Per-host metrics as this grain. Restaging [[slice-83-talk-and-measure]]. Restaging [[slice-373-engine-glyphs]]. Rewriting the location destination. Writing `docs/specs/` here. A `docs/specs/ui-framework/io-font-load/` area.

### Candidate A

Already-named surface. Callers keep `loadFont`. No public thread type.

#### Problem

[[location-55-text]] IO font load is leftover after [[slice-83-talk-and-measure]] froze dump and metrics. That slice Done is weaker: font load is not required to block the UI thread. The grain is that font load runs on the IO thread. The bet pivots if font load blocks the UI thread. [[purpose-talk-and-measure]] already lists that sentence in scope. [[contract-talk-and-measure]] already locks `talk-and-measure.fonts:load-on-io`. A public thread API or a `thread` field as the proof would leak scheduling into app code.

#### Usage

App and tests keep the existing fonts seam. They import `loadFont` and do not pass a thread, import `Paragraph.layout`, or import `TextPainter`.

```js
import { loadFont } from "dragonflame-ui";

loadFont({ family: "Inter", source: "inter.ttf" });
```

`measureText` stays the talk-and-measure seam from [[slice-83-talk-and-measure]]. This grain does not restage it. Callers do not restage dump or engine glyphs.

#### Shape

No new public names. `loadFont` hides which thread owns the load.

- **framework**: public `loadFont` on the talk-and-measure seam. Does not run the load body on the UI thread.
- **engine**: IO thread runs font load, per [[architecture-layer-cake]].
- **embedder**: window, vsync, a11y plumbing. Not the font-load queue.

Invariants: the load job executes on IO and is not on UI. Image decode may share that IO thread as architecture, but this grain does not prove decode. Atlas and font file formats stay unnamed. Callers never see `Paragraph.layout` or `TextPainter`. Leftover proof owner is [[purpose-talk-and-measure]]. No new spec area.

#### Red flags

- **Shallow**: a `thread: "io"` label on the return, or a public `loadFontOnIo`.
- **Leakage**: exporting UI, IO, or raster types.
- **Temporal**: public load-then-wait-then-complete stages.
- **Pass-through**: a Fonts object that only forwards to `loadFont`.
- **Skip**: pointing CHECK at [[slice-83-talk-and-measure]] tests.

#### Next implementation step

Add a CHECK that calling `loadFont` runs the load job on the IO thread, not a return label and not the weaker not-required-to-block cut, without restaging `measureText`.

### Candidate B

Hide the IO thread behind `loadFont`. Engine owns font load as a private IO capability. No new caller type.

#### Problem

Same leftover grain. [[slice-83-talk-and-measure]] already shipped `loadFont` and the weaker Done line. The non-obvious cut is proving IO execution without a public Thread type, without restaging dump or `measureText`, and without putting font load on the Runtime as a language job kind.

#### Usage

App and framework keep the existing seam. They never import a thread type.

```js
import { loadFont } from "dragonflame-ui";

const loaded = loadFont({ family: "Inter", source: "inter.ttf" });
```

Callers use the family. They do not read a thread field. Inside `crates/engine`, font load is a private IO module. `lib.rs` does not `pub use` it.

#### Shape

`crates/engine` owns font load as a private IO module. Public engine surface stays `Scene`, `submit`, `DrawRect`, `recorded_draw_list`. Public fonts seam stays `loadFont`. Proof is the load body runs on the engine IO thread, not on the Runtime job queue, and no public thread export. Depth: zero new names hide where the load runs. Does not prove image decode, text-as-leaf, or engine glyphs. Leftover promise `talk-and-measure.fonts:load-on-io` on [[purpose-talk-and-measure]]. No new spec folder.

#### Red flags

- **Shallow**: exporting `Thread` plus `loadFont` plus a schedule helper.
- **Leakage**: keeping `thread: "io"` as the public proof, or `pub use` of an engine font-load type.
- **Temporal**: public Load, then Bind, then Raster stages.
- **Pass-through**: `loadFont` that only forwards the same args and stamps a thread field.
- **Skip**: a Runtime IO lane that makes font load a language job kind.

#### Next implementation step

Add a talk-and-measure CHECK that `loadFont` work does not run on the Runtime job queue, then put the load body in a private engine IO module that is not `pub use`d, without touching dump, `measureText`, or glyphs.

## Synthesis

Base is Candidate A. Graft from B: private engine IO module in `crates/engine` that is not `pub use`d; no public Thread type; CHECK that the load body runs on the IO thread and not on the Runtime job queue; promise id `talk-and-measure.fonts:load-on-io`; test path `tests/talk-and-measure/io-font-load.test.mjs`.

Reject B as the slice shape: proving only a private module without the destination sentence as Done understates that font load runs on the IO thread. The private module is evidence, not the cut. Do not wait on [[slice-83-talk-and-measure]]; that slice is met dump-and-metrics and is not restaged. Do not wait on [[slice-373-engine-glyphs]]; that slice is engine glyphs, not this IO cut.

Tradeoffs accepted:

- We accept the existing public `loadFont` seam in exchange for not adding a public Thread type.
- We accept one ownership oracle in exchange for not repeating dump, metrics, or engine-glyphs tests.
- We accept talk-and-measure owning the leftover proof in exchange for not minting an io-font-load spec folder.
- We accept keeping the existing `talk-and-measure.fonts:load-on-io` promise in exchange for not inventing a second promise id.

Alternatives considered:

- Public Thread plus schedule helpers: leakage and shallow, lost.
- Waiting on [[slice-83-talk-and-measure]]: that slice is dump and metrics, not this IO cut, lost.
- A new spec folder beside talk-and-measure: second owner for a sentence already in [[purpose-talk-and-measure]], lost.
- Restaging measureText or engine glyphs as this grain: mixes cuts, lost.
- A Runtime IO lane that makes font load a language job kind: collapses engine IO onto Runtime, lost.
- A `thread: "io"` return label as the oracle: shallow prove, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-55-text]], [[purpose-talk-and-measure]], [[overview-ui-framework]], and [[architecture-layer-cake]]. Smallest reversible default: one CHECK under `tests/talk-and-measure/` that font load runs on the IO thread as a private engine IO module used by `loadFont`, and that the load body is not on the UI thread.

Next implementation step: keep `talk-and-measure.fonts:load-on-io` on the talk-and-measure ladder, then red-green the IO oracle.

### Tracer bullets

1. Keep load-on-io promise on talk-and-measure. blocked_by: none besides desktop honesty. AFK. Point [[contract-talk-and-measure]] `talk-and-measure.fonts:load-on-io` at the dedicated CHECK. Purpose and contract already exist. No product code. Do not mint an io-font-load spec folder. Do not rewrite dump, metrics, or engine-glyphs promises.
2. Red-green font load runs on the IO thread. blocked_by: keep promise. AFK. `tests/talk-and-measure/io-font-load.test.mjs`. Private engine IO module in `crates/engine`, not `pub use`d. `loadFont` stays the public seam. No public Thread type. Do not restage dump, metrics, or engine-glyphs oracles. Do not wait on [[slice-83-talk-and-measure]] or [[slice-373-engine-glyphs]].

## Confirm

Confirmed.
