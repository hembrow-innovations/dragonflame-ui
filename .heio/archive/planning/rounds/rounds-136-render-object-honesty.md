---
id: "rounds-136-render-object-honesty"
title: "Render object honesty"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan, design-tree]
created_at: "2026-09-10T10:40:00Z"
updated_at: "2026-09-10T10:40:00Z"
---

# Render object honesty

Counterpart is the product peer. Notebook is this round.

Pick: [[location-27-render-object]]. Nested retain honesty. Retained node is named by [[slice-70-counter-on-dom]]. Write properties on the same retained host node are named by [[slice-70-counter-on-dom]] and [[slice-116-patch-attrs-children]]. Remaining unnamed nested bets: immutable config without Flutter Widget as the retained node, and Component stays the function while Render object stays the retained node. [[location-17-web-component-library]] is funded. Sprint [[web-tracers]] may freeze. Open tickets are parked. Native and mobile sprints say do not freeze. [[location-20-authoring-sugar]] is unlinked but already covered by [[slice-85-first-version-without-sugar]]. [[location-21-git-package]] public-site nested grain is already locked by git-package oracles. [[location-22-crate-layout]] workspace honesty is named by [[slice-133-crate-workspace-honesty]]. [[location-23-components]] model honesty is named by [[slice-125-component-model-honesty]]. [[location-24-signals]] dirtying honesty is named by [[slice-129-signal-dirtying-honesty]]. [[location-25-owner]] is named by [[slice-71-unmount-disposes]]. [[location-26-hyperscript]] is named by [[slice-70-counter-on-dom]] and [[slice-85-first-version-without-sugar]].

## Vault pack

Query: immutable config plus retained render objects; Flutter Widget is not the retained node; Component stays the function
Area: ui-framework

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-27-render-object.md`
- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/sprints/web-tracers/shape.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`
- `docs/specs/ui-framework/counter/purpose.md`
- `docs/specs/ui-framework/counter/contract.md`
- `docs/specs/ui-framework/composite/purpose.md`
- `docs/specs/ui-framework/dom-patch/purpose.md`

Related:

- `.heio/planning/sprints/web-tracers/slice-70-counter-on-dom.md`
- `.heio/planning/sprints/web-tracers/slice-116-patch-attrs-children.md`
- `.heio/planning/sprints/web-tracers/slice-107-composite-on-dom.md`
- `.heio/planning/sprints/web-tracers/slice-125-component-model-honesty.md`
- `.heio/planning/rounds/rounds-106-composite-props-children.md`

Excluded: native layout paint hit-test algorithms, parked tickets as freeze targets, scribble.

Next: freeze one web-tracers slice for render object honesty. Do not write `docs/specs/`; drain writes the ladder.

No packer script exists. Assembled by hand. Open product questions on the overview and the matching purpose files are empty.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-27-render-object]] is still unnamed by a slice.
2. **Immutable config**: What that means on web while native layout is unfunded.
3. **Public RenderObject**: Whether callers get a RenderObject type.
4. **Fiber overlap**: Whether Widget and Element naming repeats Fiber oracles.
5. **Public surface**: Whether callers get Widget or Element.

### Answers

1. **Next grain**: Immutable config plus retained objects. Flutter Widget is not the retained node. Component stays the function and Render object stays the retained node. Retained node and write-properties already have oracles.
2. **Immutable config**: Cheap configs are `h` return values. Web retain stays the DOM node, matching [[rounds-106-composite-props-children]]. Do not treat Flutter Widget as the retained node. Do not add a third public RenderObject graph on web. Layout, paint, and hit-test algorithms stay out.
3. **Public RenderObject**: None. [[slice-107-composite-on-dom]] already forbids a public RenderObject type. Do not repeat that oracle. Do not add Widget or Element as a public retain type.
4. **Fiber overlap**: Do not repeat. [[slice-125-component-model-honesty]] locks Fiber as component identity. [[slice-71-unmount-disposes]] locks Fiber as ownership. This slice locks Widget-as-retain and Widget or Element naming that collapses Component and Render object.
5. **Public surface**: None. Callers keep `h`, `render`, and the closed leaf kit. No public Widget. No public Element.

### Candidate A

Absence oracles. No new public API.

#### Problem

The package already retains a host node and patches properties onto it. Nested retain honesty is unnamed: Flutter Widget as the retained node, and Widget or Element naming that collapses Component and Render object. [[slice-70-counter-on-dom]] proves the render object is retained. [[slice-116-patch-attrs-children]] proves writes patch the same host node.

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

Callers do not import Widget. They do not subclass a retained node. They do not construct a RenderObject.

#### Shape

Public surface stays `h`, `render`, the closed leaf kit, and `Signal`. Honesty lives in tests that fail if this checkout treats Flutter Widget as the retained node, or names Widget or Element as the collapse of Component and Render object. Complexity hidden: config is cheap and the host node persists. Invariants: no public Widget; no public Element; web retain stays the DOM node.

#### Red flags

- **Shallow**: avoided. Callers still call `h` and `render`. Retain policy stays behind tests.
- **Leakage**: avoided if tests do not export a Widget or Element type.
- **Temporal**: one retain model, not a config-then-Widget-then-DOM pipeline.
- **Pass-through**: a public `widget()` that only forwards `h` would be a pass-through. Do not add it.

#### Next implementation step

Spec ladder, then red-green absence tests for Widget-as-retain and collapsed Component and Render object naming.

### Candidate B

Public Widget and RenderObject. Callers build a Flutter-shaped tree, then paint DOM.

#### Problem

Same destinations, but Candidate A never shows Widget. Candidate B would export `Widget` and `RenderObject`, plus `toElement`.

#### Usage (caller's view)

```js
import { h, render, text, Widget, RenderObject, toElement } from "dragonflame-ui";

class App extends Widget {
	createRenderObject() {
		return new RenderObject();
	}
}

render(App, parent);
toElement(App);
```

A later call could treat Widget as the retained node.

#### Shape

A public Widget and a public RenderObject. Callers coordinate config, retain, and host. Interface grows by Flutter class names the web package does not need. Web retain becomes a third graph beside the DOM node. Immutable config is a runtime default instead of a locked split.

#### Red flags

- **Shallow**: callers pass Widget and RenderObject to complete a retain they already have on the DOM node.
- **Leakage**: Flutter Widget and Element naming leak into app code.
- **Temporal**: config, then Widget, then RenderObject, then DOM, as public stages.
- **Pass-through**: `toElement(App)` forwards the host node `render` already owns.

#### Next implementation step

Add public Widget and RenderObject. Invents API. Contradicts glossary Render object avoid list and [[rounds-106-composite-props-children]] web retain.

## Synthesis

Base is Candidate A. Graft from B nothing. Reject B as the slice shape: it invents Widget as retain and a third public RenderObject graph on web.

Tradeoffs accepted:

- We accept absence oracles in exchange for no public Widget or Element.
- We accept not repeating retained-node and same-host-node patch oracles in exchange for Widget-as-retain absence checks.
- We accept not repeating Fiber identity or ownership oracles in exchange for naming-collapse absence checks.
- We accept leaving layout, paint, and hit-test algorithms out in exchange for not freezing native pipeline tasks.

Alternatives considered:

- Public Widget plus RenderObject plus toElement: leaks Flutter retain names and rewrites web retain, lost.
- Folding these oracles into [[slice-70-counter-on-dom]]: that slice already active as retained node and text patch, lost.
- Adding a public RenderObject graph on web: rejected by [[rounds-106-composite-props-children]] and would rewrite the web retain model, lost.

Open questions and risks:

- None the product peer cannot answer from location destinations and `docs/`. Native layout, paint, and hit-test stay out.

Next implementation step: write purpose, contract, and test for render object honesty, then red-green absence tests.

### Tracer bullets

1. Spec ladder for render object honesty. blocked_by: none. AFK. Purpose, contract, and test only. No product code.
2. Red-green render object honesty. blocked_by: spec. AFK. Tests fail if this checkout treats Flutter Widget as the retained node, or names Widget or Element as the collapse of Component and Render object.

## Confirm

Confirmed.

Destination: [[location-27-render-object]] nested immutable config without Flutter Widget as the retained node, and Component stays the function while Render object stays the retained node. Not a rewrite of the parent sentence.

Slice Done: tests fail if this checkout treats Flutter Widget as the retained node, or names Widget or Element as the collapse of Component and Render object. No public Widget. No public Element.

Prefer AFK. Prefactoring is not required. First task is the spec ladder.
