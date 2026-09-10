---
id: "rounds-120-dom-only-web-host"
title: "DOM-only web host"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan, design-tree]
created_at: "2026-09-10T09:25:00Z"
updated_at: "2026-09-10T09:25:00Z"
---

# DOM-only web host

Counterpart is the product peer. Notebook is this round.

Pick: [[location-28-dom-renderer]]. Nested host honesty. Create-and-patch is named by [[slice-70-counter-on-dom]] and [[slice-116-patch-attrs-children]]. Browser embedder is named by [[slice-70-counter-on-dom]] and [[slice-74-raf-clock]]. Remaining unnamed nested bets: only web host, JS-only bindings, no WASM web, paint on web. [[location-17-web-component-library]] is funded. Sprint [[web-tracers]] may freeze. Open tickets are parked. Native and mobile sprints say do not freeze. [[location-20-authoring-sugar]] is unlinked but already covered by [[slice-85-first-version-without-sugar]]. [[location-21-git-package]] public-site nested grain is already locked by git-package oracles.

## Vault pack

Query: DOM is the only web host; no canvas, CanvasKit, Skwasm, or engine-in-WASM; JS-only DOM bindings
Area: ui-framework

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-28-dom-renderer.md`
- `.heio/planning/locations/location-27-render-object.md`
- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/sprints/web-tracers/shape.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`
- `docs/specs/ui-framework/counter/purpose.md`
- `docs/specs/ui-framework/js-backend/purpose.md`
- `docs/specs/ui-framework/renderer-portability/purpose.md`

Related:

- `.heio/planning/sprints/web-tracers/slice-70-counter-on-dom.md`
- `.heio/planning/sprints/web-tracers/slice-75-portable-web-import.md`
- `.heio/planning/sprints/web-tracers/slice-112-js-backend-honesty.md`
- `.heio/planning/sprints/web-tracers/slice-116-patch-attrs-children.md`

Excluded: native locations, parked tickets, scribble.

Next: freeze one web-tracers slice for DOM-only web host honesty. Do not write `docs/specs/`; drain writes the ladder.

No packer script exists. Assembled by hand. Open product questions on the overview and the matching purpose files are empty.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-28-dom-renderer]] is still unnamed by a slice.
2. **WASM**: Whether WASM oracles belong here or stay Phase 0 in the sibling toolchain.
3. **Bindings**: What JS-only bindings means without repeating portable `document` import oracles.
4. **Paint**: Whether this slice invents a paint API.
5. **Public surface**: Whether callers get a Host type or canvas switch.

### Answers

1. **Next grain**: Only web host, JS-only bindings, no WASM web, paint on web. Create-and-patch is named. Browser as embedder is named. Counter contract asserts `counter.dom:only-web-host` and `counter.host:forbid-wasm` without tests. Wayfinder answer 5: DOM only. Never a web canvas host.
2. **WASM**: Toolchain WASM web target stays Phase 0 in the sibling. [[purpose-js-backend]] already leaves those oracles out of that folder. This slice locks this package's web host: no canvas, no CanvasKit, no Skwasm, no engine-in-WASM as dragonflame-ui web UI. Distinct from copied emit.
3. **Bindings**: The renderer talks to the DOM through JS-only bindings. Do not put a DOM into Host I/O. Do not repeat [[slice-75-portable-web-import]] `document` import hard-errors. Smallest reversible default from architecture consequences.
4. **Paint**: Browser paint. Do not invent a paint or GPU submit API. Absence of engine-in-WASM raster on the web path. Folds into no canvas and no WASM host.
5. **Public surface**: None. Callers keep `h`, `render`, leaves, and ui.Signal. A public Host enum or canvas switch would leak the host.

### Candidate A

Absence oracles. No new public API.

#### Problem

The package already mounts on DOM. Nested host honesty is unnamed: web canvas, CanvasKit, Skwasm, engine-in-WASM, DOM in Host I/O, GPU raster on web. [[slice-70-counter-on-dom]] lists canvas and WASM as non-goals, not oracles. [[slice-112-js-backend-honesty]] does not lock this package's web host.

#### Usage (caller's view)

```js
import { h, render, view, text } from "dragonflame-ui";

function App() {
	return h(view, { children: h(text, { text: "ok" }) });
}

render(App, parent);
```

Callers do not import a host enum. They do not pass a canvas. The web host stays DOM.

#### Shape

Public surface stays `h`, `render`, the closed leaf kit, and ui.Signal. Honesty lives in tests that fail if this checkout adds a web canvas host, CanvasKit, Skwasm, engine-in-WASM, or a DOM in Host I/O. Complexity hidden: what counts as a second web host. Invariants: DOM only; JS-only bindings; browser paint; no public Host type.

#### Red flags

- **Shallow**: avoided. Callers still call `h` and `render`. Host policy stays behind the existing surface.
- **Leakage**: avoided if tests do not export a host tag or canvas adapter.
- **Temporal**: one renderer owns the web host, not a detect-then-switch pipeline.
- **Pass-through**: a public `getHost()` that only returns `"dom"` would be a pass-through. Do not add it.

#### Next implementation step

Spec ladder, then red-green absence tests for canvas, WASM web UI, and DOM in Host I/O.

### Candidate B

Public host module. Callers pick DOM or canvas.

#### Problem

Same destinations, but Candidate A never shows a host switch. Candidate B would export `Host.dom` and `Host.canvas` so `render` takes a host.

#### Usage (caller's view)

```js
import { h, render, view, text, Host } from "dragonflame-ui";

function App() {
	return h(view, { children: h(text, { text: "ok" }) });
}

render(App, parent, { host: Host.dom });
```

A later call could pass `Host.canvas`.

#### Shape

A public host option. Callers coordinate render and host. Interface grows by a host tag. Canvas becomes a named path even if unimplemented. DOM-only is a runtime default instead of a locked host.

#### Red flags

- **Shallow**: callers pass a host tag to complete mount they already have.
- **Leakage**: host tags leak renderer choice into app code.
- **Temporal**: pick host, then render, as public stages.
- **Pass-through**: `{ host: Host.dom }` forwards a constant the renderer already knows.

#### Next implementation step

Add a public Host export and a canvas branch. Invents API. Contradicts wayfinder answer 5.

## Synthesis

Base is Candidate A. Graft from B nothing. Reject B as the slice shape: it invents a host switch and names canvas as a path.

Tradeoffs accepted:

- We accept absence oracles in exchange for no public Host type.
- We accept this package's host lock in exchange for not repeating sibling Phase 0 WASM-target oracles.
- We accept not repeating portable `document` import oracles in exchange for a Host I/O absence check on the renderer side.

Alternatives considered:

- Public Host enum plus canvas switch: leaks the renderer and names a forbidden host, lost.
- Folding these oracles into [[slice-112-js-backend-honesty]]: that slice already froze without them, and js-backend purpose leaves WASM web-target oracles out, lost.
- Inventing a paint API to prove browser paint: location says web raster is browser paint, lost.

Open questions and risks:

- None the product peer cannot answer from location destinations and `docs/`. Show and For stay out. Browser APIs stay unnamed.

Next implementation step: write purpose, contract, and test for DOM-only web host honesty, then red-green absence tests.

### Tracer bullets

1. Spec ladder for DOM-only web host. blocked_by: none. AFK. Purpose, contract, and test only. No product code.
2. Red-green DOM-only web host honesty. blocked_by: spec. AFK. Tests fail if this checkout adds a web canvas host, CanvasKit, Skwasm, engine-in-WASM, or a DOM in Host I/O.

## Confirm

Confirmed.

Destination: [[location-28-dom-renderer]] nested only-web-host, JS-only bindings, no WASM web, and paint on web. Not a rewrite of the parent sentence.

Slice Done: tests fail if this checkout adds a web canvas host, CanvasKit, Skwasm, engine-in-WASM as web UI, or a DOM in Host I/O. No public Host type. Browser paint stays absence of engine raster on web.

Prefer AFK. Prefactoring is not required. First task is the spec ladder.
