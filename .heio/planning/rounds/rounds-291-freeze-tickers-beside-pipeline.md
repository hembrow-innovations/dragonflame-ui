---
id: "rounds-291-freeze-tickers-beside-pipeline"
title: "Freeze tickers beside pipeline"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan, design-tree]
created_at: "2026-09-12T09:20:00Z"
updated_at: "2026-09-12T09:20:00Z"
---

# Freeze tickers beside pipeline

Counterpart is the product peer. Notebook is this round.

Pick: [[location-60-animation-clocks]] nested bullet **Vsync tickers**. Lowest leftover nested destination under live sprint parent [[location-17-web-component-library]] whose sentence is not a slice Done or oracle. [[slice-287-aot-host-descriptors]] froze New Architecture steal. [[slice-74-raf-clock]] locked Framework clocks, web rAF, and signals are not the ticker. [[test-animation-clocks]] Gaps still name `animation-clocks.tickers:beside-pipeline`, `animation-clocks.engine:forbid-owned-state`, and `animation-clocks.tickers:forbid-setstate`. Native embedder vsync for clocks stays the **One vsync** leftover. Sprint `framework-in-draconic` names [[location-17-web-component-library]] and may freeze. Do not rewrite a location destination.

## Vault pack

Query: freeze vsync tickers beside pipeline; Clock stays public; engine does not own animation state; setState is not the ticker
Area: animation-clocks

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/locations/location-60-animation-clocks.md`
- `.heio/planning/sprints/framework-in-draconic/shape.md`
- `.heio/archive/planning/sprints/web-tracers/slice-74-raf-clock.md`
- `.heio/archive/planning/sprints/native-if-funded/slice-76-desktop-vsync-window.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`
- `docs/specs/ui-framework/animation-clocks/purpose.md`
- `docs/specs/ui-framework/animation-clocks/contract.md`
- `docs/specs/ui-framework/animation-clocks/test.md`
- `docs/specs/ui-framework/signal-dirtying/purpose.md`
- `docs/specs/ui-framework/desktop-embedder/purpose.md`
- `.heio/planning/rounds/rounds-01-chart-framework.md`

Related:

- `src/clocks/clock.js`
- `tests/animation-clocks/raf-clock.test.mjs`
- `.heio/archive/planning/sprints/web-tracers/slice-129-signal-dirtying-honesty.md`
- `crates/embedder/src/vsync.rs`

Excluded: native embedder vsync for clocks, public Ticker, public SchedulerBinding, public AnimationController, repeating rAF oracles, repeating signals-as-pipeline oracles, repeating desktop window vsync oracles, scribble, rewriting location destinations, writing `docs/specs/` here.

Next: freeze one slice for vsync tickers beside the pipeline. Do not write `docs/specs/`; drain writes the ladder edits.

No packer script exists. Assembled by hand. Open product questions on the overview are none. [[contract-animation-clocks]] already asserts the three leftover promises without tests.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-60-animation-clocks]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether a spec folder exists for this behaviour.
4. **Repeat**: Whether rAF, signals-not-pipeline, or desktop window vsync oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze the Vsync tickers nested bullet. Tracer: vsync tickers exist beside the pipeline, layers, input, and a11y copy. Engine does not own animation state. setState is not the ticker. Callers keep `Clock`. Native embedder vsync for clocks stays the next nested bullet.
2. **Named set**: [[location-60-animation-clocks]] Vsync tickers sentence is locked. [[overview-ui-framework]] copies vsync tickers beside pipeline, layers, input, and a11y. [[architecture-layer-cake]] names animation tickers in the Framework library. [[contract-animation-clocks]] already asserts `animation-clocks.tickers:beside-pipeline`, `animation-clocks.engine:forbid-owned-state`, and `animation-clocks.tickers:forbid-setstate`. Smallest reversible default: public surface stays `Clock`. Do not add `Ticker`, `SchedulerBinding`, or `AnimationController`.
3. **Ladder**: [[purpose-animation-clocks]] exists. Job is web rAF. In scope already lists Vsync tickers. The three leftover promises have no tests. First task edits purpose, contract, and test only. No new spec folder.
4. **Repeat**: Do not repeat rAF or signals-are-not-the-ticker oracles. Those live on [[purpose-animation-clocks]]. Do not repeat signals-are-not-layout oracles. Those live on [[purpose-signal-dirtying]]. Do not repeat desktop window vsync oracles. Those live on [[purpose-desktop-embedder]].
5. **Wait**: Native embedder vsync driving `Clock`. Public `Ticker`. Public `SchedulerBinding`. Public `AnimationController`. Each clock having its own time source.

### Candidate A

Clock stays the public ticker. Tests prove it is beside the pipeline, not the pipeline.

#### Problem

[[slice-74-raf-clock]] proved a Framework `Clock` ticks from rAF and that signals are not the ticker. [[test-animation-clocks]] still leaves `tickers:beside-pipeline`, engine-owned animation state, and setState-as-ticker unfrozen. A public Flutter scheduler would leak Ticker, SchedulerBinding, and AnimationController into app code. The missing tracer is honesty that tickers sit beside pipeline, layers, input, and a11y, that the engine does not store animation state, and that setState is not the ticker.

#### Usage (caller's view)

App code this tracer still writes:

```js
import { Clock } from "dragonflame-ui";

const stop = Clock((t) => {
  // drive a value; do not layout, hit-test, composite, arena, or semantics here
});
stop();
```

Callers do not import `Ticker`. They do not import `SchedulerBinding`. They do not import `AnimationController`. They do not call `setState` to tick. Tests prove three facts. A ticker tick is not layout, hit-test, compositing, gesture arena, or a semantics pass. The engine crate does not own animation state. setState is not the ticker.

```
node --test tests/animation-clocks/tickers-beside-pipeline.test.mjs
node --test tests/animation-clocks/no-engine-animation-state.test.mjs
```

Web callers keep `Clock` on rAF. Native embedder vsync for clocks waits.

#### Shape

Public surface stays `Clock(onTick) => stop`. No second time API.

Private types, derived from that usage:

```
Clock(onTick) -> stop
// onTick is not layout, not hit-test, not composite, not arena, not semantics
// engine has no animation state store
```

Module map:

- **app**: `Clock`.
- **framework clocks** (existing `src/clocks`): vsync tickers. Beside pipeline, not inside it.
- **pipeline** (build, layout, paint, composite, raster): own phases. Tickers do not become them.
- **engine**: raster, glyphs, images, compositing, vsync client. No animation state.
- **embedder**: one vsync. This slice does not retarget `Clock` onto desktop vsync.

Complexity hidden: how a tick is scheduled, that Flutter SchedulerBinding is not a product type, that engine vsync-client is not an animation store. Invariants encoded: tickers are framework clocks; they are not pipeline phases; engine does not own animation state; setState is not the ticker.

#### Red flags

- **Shallow**: avoided. Callers call `Clock`. A public Ticker plus TickerProvider plus SchedulerBinding would make callers assemble the scheduler.
- **Leakage**: avoided if Ticker, SchedulerBinding, and AnimationController stay unnamed. Exporting them would leak the Flutter copy into app code.
- **Temporal**: one Clock module owns ticks. Not public scheduleFrame, then handlePointer, then updateSemantics from the ticker.
- **Pass-through**: a public `Ticker` that only forwards `Clock` would be a pass-through. Do not add it.

#### Next implementation step

Edit the animation-clocks ladder to lock the three leftover promises, then red-green the two oracle tests.

### Candidate B

Public Flutter scheduler surface. Callers own Ticker, TickerProvider, SchedulerBinding, and AnimationController, and drive pipeline phases from ticker callbacks.

#### Problem

Same leftover promises. A deep hidden-clock shape would keep `Clock` as the only public ticker. This candidate exports the copied Flutter scheduler names so apps can attach tickers to render objects and run layout, hit-test, compositing, gestures, and semantics from the frame callback.

#### Usage (caller's view)

```js
import {
  Ticker, TickerProvider, SchedulerBinding, AnimationController, setState
} from "dragonflame-ui";

const binding = SchedulerBinding.instance;
const ticker = TickerProvider().createTicker((elapsed) => {
  setState();
  binding.pipeline.flushLayout();
  binding.pipeline.flushHitTest();
  binding.pipeline.flushComposite();
  binding.arena.sweep();
  binding.semantics.update();
});
const controller = AnimationController({ vsync: ticker, duration: 300 });
controller.forward();
engine.animationState.add(controller);
```

Callers coordinate scheduler, pipeline, arena, and semantics to finish one tick. A later call could move animation state into the Rust engine so both hosts share one store.

#### Shape

Public types and signatures:

- **Ticker.start(onTick): stop**
- **TickerProvider.createTicker(onTick): Ticker**
- **SchedulerBinding.instance: SchedulerBinding**
- **SchedulerBinding.scheduleFrame(): void**
- **Pipeline.flushLayout(): void**
- **Pipeline.flushHitTest(): void**
- **Pipeline.flushComposite(): void**
- **AnimationController({ vsync, duration }): AnimationController**
- **engine.animationState**: engine-owned store
- **setState(): void** as the ticker

Module map:

- **src/scheduler/**: public SchedulerBinding
- **src/ticker/**: public Ticker and TickerProvider
- **src/animation-controller/**: public AnimationController
- **crates/engine/src/animation_state.rs**: engine-owned animation state

Callers coordinate five modules to finish one tick. Complexity is not hidden. Invariants that should stay internal (tickers beside pipeline, engine not owning animation state, setState not the ticker) become public stages and an engine store.

#### Red flags

- **Shallow**: callers call TickerProvider.createTicker, SchedulerBinding.scheduleFrame, and five flush methods to complete one tick `Clock` already owned.
- **Leakage**: Flutter scheduler types and engine animation state leak into app code. Wire types are the public surface.
- **Temporal**: scheduleFrame, then flushLayout, then flushHitTest, then flushComposite as public stages.
- **Pass-through**: Ticker.start only forwards Clock. AnimationController.forward only forwards Ticker.start.

#### Next implementation step

Export public Ticker, SchedulerBinding, AnimationController, and engine animation state. Invents API. Contradicts the Wait list, [[location-60-animation-clocks]] clocks in the Framework library, and [[overview-ui-framework]] reject setState dirtying.

## Synthesis

Base is Candidate A. Graft from B nothing. Reject B as the slice shape: it invents public Flutter scheduler types, puts animation state in the engine, and makes setState the ticker.

Tradeoffs accepted:

- We accept `Clock` as the only public ticker in exchange for not adding Ticker or SchedulerBinding.
- We accept honesty tests for beside-pipeline in exchange for not retargeting `Clock` onto desktop embedder vsync this sitting.
- We accept two oracle files in exchange for not repeating the rAF clock test.

Alternatives considered:

- Public Ticker plus SchedulerBinding plus AnimationController: leakage and temporal decomposition, lost.
- Repeating rAF as the only proof: that oracle already lives on [[purpose-animation-clocks]], lost.
- Folding native embedder vsync into this slice: that destination is the **One vsync** nested bullet, lost.
- A new spec folder beside animation-clocks: the three promises already live on [[contract-animation-clocks]], lost.

Open questions and risks:

- None the product peer cannot answer from [[location-60-animation-clocks]], [[overview-ui-framework]], [[architecture-layer-cake]], and [[contract-animation-clocks]].

Next implementation step: edit purpose, contract, and test for animation-clocks to lock the three leftover promises, then red-green the two oracle tests.

### Tracer bullets

1. Spec ladder edits for animation-clocks leftover promises. blocked_by: none. AFK. Purpose, contract, and test only. No product code.
2. Red-green tickers beside pipeline. blocked_by: spec. AFK. Tickers sit beside pipeline, layers, input, and a11y. Engine does not own animation state. setState is not the ticker.

## Confirm

Confirmed.
