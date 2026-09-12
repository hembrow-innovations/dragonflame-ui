---
id: "rounds-363-freeze-pipeline-copy"
title: "Freeze pipeline copy"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T07:25:41Z"
updated_at: "2026-09-12T07:25:41Z"
---

# Freeze pipeline copy

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN Pipeline copy under [[location-54-accessibility]]. Sprint `mobile-after-desktop` may freeze. [[slice-76-desktop-vsync-window]] is met. Do not restage [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], or [[slice-360-android-not-toolchain-d04]]. Do not rewrite a location destination.

## Vault pack

Query: this is working when a semantics tree is copied as architecture beside the render tree, with a gesture arena and vsync tickers.
Area: talk-and-measure

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-54-accessibility.md`
- `.heio/planning/sprints/mobile-after-desktop/shape.md`
- `docs/specs/ui-framework/talk-and-measure/purpose.md`
- `docs/specs/ui-framework/talk-and-measure/contract.md`
- `docs/specs/ui-framework/gesture-arena/purpose.md`
- `docs/specs/ui-framework/gesture-arena/contract.md`
- `docs/specs/ui-framework/animation-clocks/purpose.md`
- `docs/specs/ui-framework/animation-clocks/contract.md`
- `docs/overview/glossary.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/overview-ui-framework.md`

Related:

- `.heio/planning/locations/location-19-mobile-embedders.md`
- `.heio/planning/locations/location-34-a11y-test-ids.md`
- `.heio/planning/sprints/mobile-after-desktop/slice-83-talk-and-measure.md`
- `.heio/planning/locations/location-46-gesture-arena.md`
- `.heio/planning/locations/location-60-animation-clocks.md`

Excluded: scribble, archive, ADRs none, no packer, no blocking slice besides desktop honesty, store-packaging wait, tests

Next: freeze grain Pipeline copy on location-54-accessibility. Do not write `docs/specs/` in this sitting. First drain asserts the leftover pipeline-copy promise from the location destination plus `docs/`.

No packer script exists. Assembled by hand. Open product questions are none. [[purpose-talk-and-measure]] already lists Pipeline copy in scope and says this area does not prove arena or tickers.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-54-accessibility]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether a spec folder exists for this behaviour.
4. **Repeat**: Whether dump, press-wins, or tickers-beside-pipeline oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Pipeline copy. Done: a semantics tree is copied as architecture beside the render tree, with a gesture arena and vsync tickers. Bet: try that copy; pivot if a11y is skipped until after store packaging. Dump, metrics, compete, and tickers-beside stay out.
2. **Named set**: [[location-54-accessibility]] Pipeline copy sentence is locked. Public surface stays `SemanticsNode`, `toStringDeep`, `GestureArena`, `TapGestureRecognizer`, `HorizontalDragGestureRecognizer`, `h(pressable, { onPress })`, and `Clock`. Smallest reversible defaults: no public `Pipeline`, no `Pipeline.flush*`, no `updateSemantics` as app API. No new spec folder. Promise id `talk-and-measure.tree:pipeline-copy`. Test path `tests/talk-and-measure/`. All tasks `mode: afk`. Do not wait on [[slice-82-store-binaries]].
3. **Ladder**: [[purpose-talk-and-measure]] and [[contract-talk-and-measure]] exist. Pipeline copy is in scope with no matching promise id. This sitting does not write specs. First drain asserts `talk-and-measure.tree:pipeline-copy` with a test from the location destination plus [[overview-ui-framework]] and [[architecture-layer-cake]].
4. **Repeat**: Do not restage SemanticsNode dump, prop reuse, or signals-do-not-replace. Those live on [[purpose-talk-and-measure]]. Do not restage press-wins or embedder packets. Those live on [[purpose-gesture-arena]]. Do not restage tickers-beside-pipeline. That lives on [[purpose-animation-clocks]].
5. **Wait**: SemanticsOwner, SemanticsBinding, AccessibilityInfo, accessibilityHint, liveRegion, UIAccessibility, AccessibilityNodeInfo. Public Ticker, SchedulerBinding, AnimationController. Public Pipeline, Pipeline.flush*, updateSemantics as app API. Skipping a11y until after store packaging. Restaging [[slice-83-talk-and-measure]]. Rewriting the location destination. Writing `docs/specs/` here.

### Candidate A

Already-named sibling surface. Callers keep `SemanticsNode`, `GestureArena`, and `Clock`. No public Pipeline type.

#### Problem

[[location-54-accessibility]] Pipeline copy is leftover after [[slice-83-talk-and-measure]] froze the dump and metrics, and after gesture-arena plus `animation-clocks.tickers:beside-pipeline` locked compete and tickers-beside. The grain is that a11y is copied as architecture beside the render tree, with arena and tickers as siblings, not skipped until after [[slice-82-store-binaries]]. [[purpose-talk-and-measure]] already lists that sentence in scope and says this area's oracles do not prove the arena or tickers. A public Pipeline would leak Flutter scheduler stages into app code.

#### Usage

App and tests import the three named types. They do not flush a pipeline or update semantics.

```js
import {
  SemanticsNode, GestureArena, TapGestureRecognizer,
  HorizontalDragGestureRecognizer, Clock, h, pressable,
} from "dragonflame-ui";

const tree = SemanticsNode({ testID: "app", accessibilityLabel: "App" });
tree.toStringDeep();

h(pressable, { onPress() {} });
const arena = GestureArena();
arena.add(TapGestureRecognizer());
arena.add(HorizontalDragGestureRecognizer());
arena.close(1);
arena.sweep(1);

const stop = Clock((t) => {});
stop();
```

Embedder owns a11y plumbing, pointer packets, and vsync. Callers never import `Pipeline`, `updateSemantics`, `Ticker`, or `SemanticsOwner`.

#### Shape

Keep three deep modules as the public copy, not a coordinator.

- **semantics**: owns the retained semantics tree beside render objects. Public `SemanticsNode` and `toStringDeep`.
- **gestures**: owns compete. Public `GestureArena`, the two recognizers, pressable `onPress` join.
- **clocks**: owns vsync tickers. Public `Clock` only.
- **embedder**: window, input, vsync, a11y plumbing. OS class lists stay unnamed.
- **render objects**: layout, paint, hit-test. Hit-test stays there.

The pipeline copy is ownership, not a type. Build, layout, paint, composite, raster stay private phases. Leftover promise owner is [[purpose-talk-and-measure]]. No new spec area.

#### Red flags

- **Shallow**: a public Pipeline with flushLayout, flushHitTest, flushComposite, updateSemantics would make callers assemble the copy.
- **Leakage**: exporting SemanticsOwner, SemanticsBinding, AccessibilityInfo, Ticker, SchedulerBinding, or AnimationController would leak the Flutter copy.
- **Temporal**: modules named by frame order, or Clock driving arena sweep then semantics update.
- **Pass-through**: updateSemantics that only forwards toStringDeep, or a public Ticker that only forwards Clock.
- **Skip**: blocked_by store packaging. Contradicts the grain bet.

#### Next implementation step

Assert `talk-and-measure.tree:pipeline-copy` on the existing talk-and-measure ladder, then red-green one composition oracle.

### Candidate B

One Framework owner for the peer copy. Callers keep `SemanticsNode`, `Clock`, and `h(pressable)`. No public Pipeline.

#### Problem

Same leftover grain. [[architecture-layer-cake]] copies the frame pipeline as architecture, not as a type hierarchy. Three public constructors without one owner leave the copied-as-architecture invariant with no home. A public Pipeline with flush and updateSemantics would leak Flutter scheduler stages and restage work that is frozen. The missing tracer is the peer-copy invariant itself.

#### Usage

App code this tracer still writes:

```js
import { SemanticsNode, Clock, h, pressable } from "dragonflame-ui";

const node = SemanticsNode({ testID: "save", accessibilityLabel: "Save" });
node.toStringDeep();

h(pressable, { onPress() {} });

const stop = Clock((_t) => {});
stop();
```

Callers do not import Pipeline. Tests prove two facts without re-running dump, press-wins, or tickers-beside-pipeline oracles. SemanticsNode, arena membership via pressable, and Clock are Framework library peers beside the render tree. Store packaging does not own a11y.

```
node --test tests/talk-and-measure/pipeline-copy-peers.test.mjs
node --test tests/talk-and-measure/a11y-not-after-store.test.mjs
```

#### Shape

Public surface stays the locked names. Private owner, not exported, holds the copied-as-architecture invariant from [[overview-ui-framework]] and [[architecture-layer-cake]]. Talk-and-measure keeps dump and metrics. Gesture-arena and animation-clocks keep their oracles. Embedder plumbing is unchanged. Store packaging is not a gate. Leftover promise `talk-and-measure.tree:pipeline-copy` on [[purpose-talk-and-measure]]. No new spec folder.

#### Red flags

- **Shallow**: a public Pipeline with flushLayout, flushPaint, updateSemantics would make callers assemble the frame.
- **Leakage**: Pipeline, SemanticsBinding, and Ticker as product types.
- **Temporal**: public build-then-layout-then-semantics stages, or after-store-then-a11y.
- **Pass-through**: a Pipeline that only forwards to SemanticsNode, GestureArena, and Clock.

#### Next implementation step

Edit the talk-and-measure ladder to lock the leftover pipeline-copy promise, then red-green the two oracles.

## Synthesis

Base is Candidate A. Graft from B: private Framework peer owner that is not exported; promise id `talk-and-measure.tree:pipeline-copy`; two facts in the oracle (three Framework peers, a11y is not gated on store packaging); test path `tests/talk-and-measure/pipeline-copy-peers.test.mjs`.

Reject B as the slice shape: a second private coordinator module understates that the three already-named surfaces are the copy. Ownership still lives on those named surfaces. Do not wait on [[slice-83-talk-and-measure]]; that slice is frozen dump-and-metrics and is not restaged. Do not wait on [[slice-82-store-binaries]].

Tradeoffs accepted:

- We accept three existing public constructors in exchange for not adding a public Pipeline type.
- We accept one composition oracle in exchange for not repeating dump, press-wins, or tickers-beside-pipeline tests.
- We accept talk-and-measure owning the leftover promise in exchange for not minting a pipeline-copy spec folder.
- We accept not waiting on store packaging in exchange for honoring the nested bet.

Alternatives considered:

- Public Pipeline plus flush and updateSemantics: leakage and temporal decomposition, lost.
- Waiting on [[slice-82-store-binaries]]: the named pivot, not the try, lost.
- A new spec folder beside talk-and-measure: second owner for a sentence already in [[purpose-talk-and-measure]], lost.
- Restaging dump, press-wins, or tickers-beside-pipeline as this grain: mixes cuts, lost.
- Blocking on [[slice-83-talk-and-measure]]: that slice is dump and metrics, not this architecture copy, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-54-accessibility]], [[purpose-talk-and-measure]], [[overview-ui-framework]], and [[architecture-layer-cake]]. Smallest reversible default: one CHECK under `tests/talk-and-measure/` that the three named surfaces are Framework peers beside the render tree and that a11y is not skipped until after store packaging.

Next implementation step: assert `talk-and-measure.tree:pipeline-copy` on the talk-and-measure ladder, then red-green the composition oracle.

### Tracer bullets

1. Assert pipeline-copy promise on talk-and-measure. blocked_by: none besides desktop honesty. AFK. Point [[contract-talk-and-measure]] `talk-and-measure.tree:pipeline-copy` at a test. Purpose and contract already exist. No product code. Do not mint a pipeline-copy spec folder. Do not rewrite dump, metrics, compete, or tickers-beside-pipeline promises.
2. Red-green a semantics tree is copied as architecture beside the render tree, with a gesture arena and vsync tickers. blocked_by: assert promise. AFK. `tests/talk-and-measure/pipeline-copy-peers.test.mjs`. No public Pipeline. Do not restage dump, press-wins, or tickers-beside-pipeline oracles. Do not wait on store packaging.

## Confirm

Confirmed.
