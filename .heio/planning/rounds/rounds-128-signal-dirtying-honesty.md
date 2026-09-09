---
id: "rounds-128-signal-dirtying-honesty"
title: "Signal dirtying honesty"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan, design-tree]
created_at: "2026-09-10T09:50:00Z"
updated_at: "2026-09-10T09:50:00Z"
---

# Signal dirtying honesty

Counterpart is the product peer. Notebook is this round.

Pick: [[location-24-signals]]. Nested dirtying honesty. Get and set and ui.Signal are named by [[slice-70-counter-on-dom]]. Owner is named by [[slice-71-unmount-disposes]]. Ticker-not-signal is named by [[slice-74-raf-clock]]. Remaining unnamed nested bets: build dirtying only for the pipeline, local structure without setState Element subtree dirtying, no shared signal objects. [[location-17-web-component-library]] is funded. Sprint [[web-tracers]] may freeze. Open tickets are parked. Native and mobile sprints say do not freeze. [[location-20-authoring-sugar]] is unlinked but already covered by [[slice-85-first-version-without-sugar]]. [[location-23-components]] model honesty is named by [[slice-125-component-model-honesty]].

## Vault pack

Query: signals replace build dirtying only; no setState Element subtree; no shared signal objects
Area: ui-framework

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-24-signals.md`
- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/sprints/web-tracers/shape.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`
- `docs/specs/ui-framework/counter/purpose.md`
- `docs/specs/ui-framework/animation-clocks/purpose.md`

Related:

- `.heio/planning/sprints/web-tracers/slice-70-counter-on-dom.md`
- `.heio/planning/sprints/web-tracers/slice-74-raf-clock.md`
- `.heio/planning/sprints/web-tracers/slice-71-unmount-disposes.md`
- `.heio/planning/locations/location-45-threads.md`
- `docs/specs/ui-framework/composite/purpose.md`

Excluded: native window work, parked tickets, scribble.

Next: freeze one web-tracers slice for signal dirtying honesty. Do not write `docs/specs/`; drain writes the ladder.

No packer script exists. Assembled by hand. Open product questions on the overview and the matching purpose files are empty.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-24-signals]] is still unnamed by a slice.
2. **Build dirtying only**: What that means on web while native layout is unfunded.
3. **Show and For**: Whether local structure means implement Show and keyed For now.
4. **Shared signals**: Whether no shared signal objects waits on native workers.
5. **Public surface**: Whether callers get setState, useState, or a SharedSignal type.

### Answers

1. **Next grain**: Build dirtying only for the pipeline, no setState Element subtree, no shared signal objects. Get and set already have oracles. [[slice-74-raf-clock]] locks signals as not the ticker, not the pipeline fence. Show and keyed For stay sketch-only.
2. **Build dirtying only**: Signals mark dependents in build. They do not replace constraint layout, hit-test, layer compositing, gesture arena, or semantics. Web layout stays CSS. Do not add a signal-driven layout, hit-test, compositor, arena, or semantics engine. Architecture pipeline plus location-24 nested bet.
3. **Show and For**: Do not implement. Composite and dom-patch already forbid them. Do not repeat those oracles. The local-structure pivot is setState dirtying an Element subtree, not a Show demo.
4. **Shared signals**: Absence now. Architecture: compute workers are native-only and never share a signal object. Do not implement workers. Tests fail if shared-memory signal objects appear. [[location-45-threads]] stays unfunded.
5. **Public surface**: None. Callers keep `Signal` get and set. No public setState, useState, or SharedSignal.

### Candidate A

Absence oracles. No new public API.

#### Problem

The package already patches DOM from ui.Signal writes. Nested dirtying honesty is unnamed: setState and React state hooks as the dirty model, signals as layout or hit-test or compositing or gesture arena or semantics, shared-memory signal objects. [[slice-74-raf-clock]] proves a signal write is not the ticker. [[slice-70-counter-on-dom]] proves get and set.

#### Usage (caller's view)

```js
import { h, render, text, Signal } from "dragonflame-ui";

function App() {
	const n = Signal(0);
	return h(text, { text: n });
}

render(App, parent);
n.set(1);
```

Callers do not call setState. They do not import SharedSignal. They do not drive layout from a signal.

#### Shape

Public surface stays `h`, `render`, the closed leaf kit, and `Signal`. Honesty lives in tests that fail if this checkout adds setState or a React state hook as the dirty model, uses signals as constraint layout, hit-test, layer compositing, gesture arena, or semantics, or shares a signal object across workers. Complexity hidden: what counts as pipeline replacement versus build dirtying. Invariants: get and set only; no public setState; no shared signal objects.

#### Red flags

- **Shallow**: avoided. Callers still call `Signal` get and set. Dirtying policy stays behind the existing surface.
- **Leakage**: avoided if tests do not export a dirty flag or worker handle.
- **Temporal**: one dirtying model, not a setState-then-layout pipeline.
- **Pass-through**: a public `dirty()` that only forwards `set` would be a pass-through. Do not add it.

#### Next implementation step

Spec ladder, then red-green absence tests for setState dirtying, signal-as-pipeline, and shared signal objects.

### Candidate B

Public setState, useState, and SharedSignal. Callers dirty an Element subtree and share signals into workers.

#### Problem

Same destinations, but Candidate A never shows setState or a worker. Candidate B would export `setState`, `useState`, and `SharedSignal`, plus `layoutFromSignal`.

#### Usage (caller's view)

```js
import { h, render, text, setState, SharedSignal, layoutFromSignal } from "dragonflame-ui";

function App() {
	const n = SharedSignal(0);
	layoutFromSignal(n);
	return h(text, { text: n });
}

render(App, parent);
setState(App, { n: 1 });
```

A later call could post the same signal into a worker.

#### Shape

A public setState and a shared signal. Callers coordinate dirtying, layout, and workers. Interface grows by a React state hook shape and a worker type. Native compute becomes a named path even if unimplemented. Build dirtying only is a runtime default instead of a locked model.

#### Red flags

- **Shallow**: callers pass setState and a layout helper to complete a write they already have.
- **Leakage**: Element dirty bits and shared-memory signal objects leak into app code.
- **Temporal**: setState, then dirty subtree, then layout, as public stages.
- **Pass-through**: `layoutFromSignal(n)` forwards a set the renderer already schedules.

#### Next implementation step

Add public setState and SharedSignal. Invents API. Contradicts glossary Signal and architecture build-dirtying-only.

## Synthesis

Base is Candidate A. Graft from B nothing. Reject B as the slice shape: it invents setState and names shared-memory signals as a path.

Tradeoffs accepted:

- We accept absence oracles in exchange for no public setState or SharedSignal.
- We accept not repeating rAF ticker oracles in exchange for pipeline-fence absence checks.
- We accept not implementing Show or For in exchange for locking the setState Element-subtree pivot.
- We accept a shared-signal absence check now in exchange for not freezing native worker tasks.

Alternatives considered:

- Public setState plus SharedSignal plus layoutFromSignal: leaks dirtying and names a forbidden share, lost.
- Folding these oracles into [[slice-74-raf-clock]]: that slice already met as ticker-not-signal, lost.
- Implementing Show and keyed For: still sketch-only and already forbidden by composite and dom-patch, lost.

Open questions and risks:

- None the product peer cannot answer from location destinations and `docs/`. Show and For stay out. Native workers stay out.

Next implementation step: write purpose, contract, and test for signal dirtying honesty, then red-green absence tests.

### Tracer bullets

1. Spec ladder for signal dirtying honesty. blocked_by: none. AFK. Purpose, contract, and test only. No product code.
2. Red-green signal dirtying honesty. blocked_by: spec. AFK. Tests fail if this checkout uses setState or a React state hook as the dirty model, uses signals as constraint layout, hit-test, layer compositing, gesture arena, or semantics, or shares a signal object across workers.

## Confirm

Confirmed.

Destination: [[location-24-signals]] nested build dirtying only, local structure without setState Element subtree dirtying, and no shared signal objects. Not a rewrite of the parent sentence.

Slice Done: tests fail if this checkout uses setState or a React state hook as the dirty model, uses signals as constraint layout, hit-test, layer compositing, gesture arena, or semantics, or shares a signal object across workers. No public setState.

Prefer AFK. Prefactoring is not required. First task is the spec ladder.
