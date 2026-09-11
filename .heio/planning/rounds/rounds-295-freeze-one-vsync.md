---
id: "rounds-295-freeze-one-vsync"
title: "Freeze one vsync"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T10:30:00Z"
updated_at: "2026-09-12T10:30:00Z"
---

# Freeze one vsync

Counterpart is the product peer. Notebook is this round.

Pick: [[location-60-animation-clocks]] nested bullet **One vsync**. Lowest leftover nested destination under live sprint parent [[location-17-web-component-library]] after [[slice-292-tickers-beside-pipeline]] froze Vsync tickers. Destination: one vsync comes from the embedder, and on web vsync is `requestAnimationFrame`. Bet: try one vsync; pivot if each clock has its own time source. [[contract-animation-clocks]] already locked `animation-clocks.vsync:web-raf` on the rAF clock ticks oracle. Native embedder vsync waits on funding. Live sprint `framework-in-draconic` names [[location-17-web-component-library]] and may freeze. Do not rewrite a location destination.

## Vault pack

Query: one vsync from the embedder driving Clock; on web vsync is requestAnimationFrame
Area: animation-clocks

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-60-animation-clocks.md`
- `.heio/planning/sprints/framework-in-draconic/shape.md`
- `.heio/planning/sprints/framework-in-draconic/slice-292-tickers-beside-pipeline.md`
- `docs/specs/ui-framework/animation-clocks/purpose.md`
- `docs/specs/ui-framework/animation-clocks/contract.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`

Related:

- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/locations/location-18-native-engine-desktop.md`
- `.heio/planning/locations/location-45-threads.md`
- `.heio/archive/planning/sprints/web-tracers/slice-74-raf-clock.md`
- `.heio/archive/planning/sprints/native-if-funded/slice-76-desktop-vsync-window.md`
- `docs/specs/ui-framework/animation-clocks/test.md`
- `docs/specs/ui-framework/desktop-embedder/purpose.md`

Excluded: scribble, repeating rAF oracles, repeating tickers-beside-pipeline oracles, repeating desktop window vsync oracles, each clock having its own time source, public Ticker, public SchedulerBinding, public AnimationController, implementing the compiler, rewriting location destinations, writing docs/specs here, mobile-after-desktop host work

Next: freeze one slice for shared one-vsync honesty on the web host. Web rAF is already locked. Do not write docs/specs; drain writes the ladder edits.

No packer script exists. Assembled by hand. Open product questions are none. Smallest reversible default: clocks share one embedder vsync. They do not each own a time source. Do not retarget Clock onto a desktop vsync window.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-60-animation-clocks]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether a spec folder exists for this behaviour.
4. **Repeat**: Whether rAF, beside-pipeline, or desktop window vsync oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze the One vsync nested bullet on the web host. Tracer: clocks share one embedder vsync. On web that vsync is requestAnimationFrame. They do not each have their own time source. Callers keep `Clock`. Native embedder vsync driving `Clock` stays unfunded.
2. **Named set**: [[location-60-animation-clocks]] One vsync sentence is locked. [[architecture-layer-cake]] already says one vsync from the embedder, and on web vsync is requestAnimationFrame. [[contract-animation-clocks]] already locked `animation-clocks.vsync:web-raf` on rAF clock ticks. Public surface stays `Clock`. Smallest reversible default: a private vsync owner fans one `t` to every `Clock` subscriber. Do not add `Ticker`, `SchedulerBinding`, `AnimationController`, or a public `VsyncPort`.
3. **Ladder**: [[purpose-animation-clocks]] exists. Job is web rAF. In scope already lists One vsync. Native embedder vsync stays out of scope pending funding. First task edits purpose, contract, and test only. No new spec folder. Assert `animation-clocks.vsync:one-source`. Do not rewrite `animation-clocks.vsync:web-raf`.
4. **Repeat**: Do not repeat rAF oracles. Those live on [[purpose-animation-clocks]]. Do not repeat tickers-beside-pipeline oracles. Those live on [[slice-292-tickers-beside-pipeline]]. Do not repeat desktop window vsync oracles. Those live on [[purpose-desktop-embedder]].
5. **Wait**: Native embedder vsync driving `Clock`. Public `Ticker`. Public `SchedulerBinding`. Public `AnimationController`. Public `VsyncPort`. Signals do not replace tickers is already locked.

### Candidate A

Clock stays public. The Clock module owns the one web rAF loop. Subscribers share it.

#### Problem

The One vsync grain under [[location-60-animation-clocks]] is working when one vsync comes from the embedder, and on web that vsync is `requestAnimationFrame`. The live public surface is already named: `Clock(onTick)` returns `stop`, callers import `Clock` from `dragonflame-ui`, and `src/clocks/clock.js` plus `tests/animation-clocks/raf-clock.test.mjs` lock that. [[contract-animation-clocks]] already locked `animation-clocks.vsync:web-raf` on the rAF clock ticks oracle, so this sitting cannot retarget `Clock` or add a second public time API. The non-obvious cut is ownership: today's `Clock` starts its own rAF loop per call, which is the location pivot (each clock has its own time source) and the Wait leftover from [[slice-292-tickers-beside-pipeline]]. [[purpose-animation-clocks]] keeps native embedder vsync out of scope pending [[slice-76-desktop-vsync-window]]. Live sprint is web. Do not retarget `Clock` onto a desktop vsync window.

#### Usage (caller's view)

Callers keep the README they already have. They import `Clock` from `dragonflame-ui`, pass one `onTick`, and hold the returned `stop`. A leaf animation and a scrolling fade both call `Clock`. Both callbacks see the same frame time `t` from one host vsync. Calling `stop` on one unsubscribes only that callback. The other keeps ticking. When the last subscriber stops, ticks end. No caller starts vsync, names rAF, or talks to a port. Forbidden names stay unpublished: no public `Ticker`, `SchedulerBinding`, `AnimationController`, or `VsyncPort`.

#### Shape

Public surface stays `Clock(onTick) => stop` from `src/clocks/clock.js`. Data is a private subscriber set plus one shared rAF id owned by the clocks module. Flow: first `Clock` subscribe arms one `requestAnimationFrame`; each frame fans the same embedder timestamp to every `onTick`; last `stop` cancels that id. Invariants encoded here, not in caller types: one web vsync source, shared `t` per frame, clocks do not own time. The system does not do native embedder vsync, a desktop window, or a second public time API. Interface depth: one function hides loop lifetime, fan-in, cancel policy, and rAF identity.

#### Red flags

Per-call rAF in current `Clock` leaks time-source ownership and fails One vsync. A public `VsyncPort` or `Ticker` is a shallow pass-through the location forbids. Splitting start-vsync then subscribe is temporal decomposition. Wrapping rAF in a second exported scheduler is a pass-through. Repeating rAF clock ticks, beside-pipeline oracles, or desktop window vsync oracles is out of this grain.

#### Next implementation step

Add a new `tests/animation-clocks/` oracle that two `Clock` subscribers share one `requestAnimationFrame` and the same `t`, then fold that shared loop into `src/clocks/clock.js` without rewriting the locked rAF clock ticks test.

### Candidate B

Clock stays the only public import. A private vsync source owns the one embedder pulse. Clock is only a subscriber.

#### Problem

Same destination. Today each `Clock` starts and cancels its own rAF loop, which is the pivot the location forbids. The non-obvious cut is sharing one embedder pulse without a new public type and without retargeting Clock onto a desktop window.

#### Usage (caller's view)

```js
import { Clock } from "dragonflame-ui";

const stopBanner = Clock((t) => banner.paint(t));
const stopChart = Clock((t) => chart.paint(t));
stopBanner();
```

Two widgets do not coordinate a time source. Each calls `Clock`. One embedder frame delivers the same `t` to both. Stopping one leaves the other ticking. Tests may construct one private source and drive both callbacks from one pulse. That import is not part of `dragonflame-ui`.

#### Shape

Public signature stays `Clock(onTick) => stop`. Private data, not exported: a subscriber set, one pulse handle, and one adapter. The private vsync source owns the one embedder vsync. It starts the pulse on first subscriber and cancels on last. It fans one `t` to every subscriber. Web default adapter is `requestAnimationFrame`. Clock registers `onTick`, returns `stop` that unsubscribes, and does not request frames. Injection lives on the private module so tests can replace the shared source without widening `Clock`. Native embedder vsync is not built this sitting. The private source is the later bind point. Do not export `VsyncPort`, `Ticker`, `SchedulerBinding`, or `AnimationController`.

Depth: callers still learn one function. Hidden behind it is shared-pulse policy, subscriber lifetime, adapter choice, and the future native bind. Clock is not a pass-through of `subscribe`; it owns the caller contract. The source owns the pulse.

#### Red flags

Shallow module: refused. The public surface does not grow. Information leakage: refused if `Clock(onTick, vsync)` or a package export of the source appears. Temporal decomposition: refused. Do not publish schedule-then-dispatch modules. Pass-through: refused. If Clock only forwards `source.subscribe` with the same shape, collapse them or give Clock the stop and arity policy. Do not prove this grain with another rAF-ticks oracle, beside-pipeline oracle, or desktop window vsync oracle.

#### Next implementation step

Add a private vsync owner under `src/clocks/` that `Clock` subscribes to, then prove two `Clock` callbacks share one injected pulse without repeating `tests/animation-clocks/raf-clock.test.mjs`.

## Synthesis

Base is Candidate B. Graft from A the rule that `Clock` owns subscribe and stop so it is not a pass-through of a private `subscribe`. Reject exporting the vsync source. Reject a public `VsyncPort`. Reject retargeting `Clock` onto a desktop vsync window.

Tradeoffs accepted:

- We accept a private vsync owner in exchange for not giving each `Clock` its own rAF loop.
- We accept web-host one-vsync honesty in exchange for not implementing native embedder vsync this sitting.
- We accept one new oracle file in exchange for not repeating the rAF clock test.

Alternatives considered:

- Clock module owns the shared rAF id with no separate source: hides less, and has no later bind point, lost as the base.
- Public VsyncPort or Ticker: leakage, lost.
- Folding native desktop vsync into this slice: unfunded, and repeats [[slice-76-desktop-vsync-window]], lost.
- A new spec folder beside animation-clocks: One vsync already lives on [[purpose-animation-clocks]], lost.

Open questions and risks:

- None the product peer cannot answer from [[location-60-animation-clocks]], [[architecture-layer-cake]], [[purpose-animation-clocks]], and [[contract-animation-clocks]].

Next implementation step: edit the animation-clocks ladder to lock `animation-clocks.vsync:one-source`, then red-green one oracle that two `Clock` callbacks share one pulse.

### Tracer bullets

1. Spec ladder edits for animation-clocks one-vsync. blocked_by: none. AFK. Purpose, contract, and test only. No product code.
2. Red-green one vsync. blocked_by: spec. AFK. Two `Clock` subscribers share one embedder vsync and the same `t`. Private vsync owner. No public VsyncPort.

## Confirm

Confirmed.
