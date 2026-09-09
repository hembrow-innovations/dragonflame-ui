---
id: "rounds-124-component-model-honesty"
title: "Component model honesty"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan, design-tree]
created_at: "2026-09-10T09:40:00Z"
updated_at: "2026-09-10T09:40:00Z"
---

# Component model honesty

Counterpart is the product peer. Notebook is this round.

Pick: [[location-23-components]]. Nested model honesty. Runs once, props and children, and composition are named by [[slice-70-counter-on-dom]] and [[slice-107-composite-on-dom]]. Remaining unnamed nested bets: one tree, not class components. [[location-17-web-component-library]] is funded. Sprint [[web-tracers]] may freeze. Open tickets are parked. Native and mobile sprints say do not freeze. [[location-20-authoring-sugar]] is unlinked but already covered by [[slice-85-first-version-without-sugar]]. [[location-28-dom-renderer]] host honesty is named by [[slice-121-dom-only-web-host]].

## Vault pack

Query: one component tree; no class components, hooks, Fiber, or virtual DOM
Area: ui-framework

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-23-components.md`
- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/sprints/web-tracers/shape.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`
- `docs/specs/ui-framework/counter/purpose.md`
- `docs/specs/ui-framework/composite/purpose.md`

Related:

- `.heio/planning/sprints/web-tracers/slice-70-counter-on-dom.md`
- `.heio/planning/sprints/web-tracers/slice-107-composite-on-dom.md`
- `.heio/planning/sprints/web-tracers/slice-71-unmount-disposes.md`
- `docs/specs/ui-framework/owner/purpose.md`

Excluded: native locations, parked tickets, scribble.

Next: freeze one web-tracers slice for component model honesty. Do not write `docs/specs/`; drain writes the ladder.

No packer script exists. Assembled by hand. Open product questions on the overview and the matching purpose files are empty.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-23-components]] is still unnamed by a slice.
2. **One tree**: What one component tree means while native is unfunded.
3. **Fiber**: Whether Fiber oracles belong here or stay on [[slice-71-unmount-disposes]].
4. **JSX**: Whether class-component honesty repeats no-JSX oracles.
5. **Public surface**: Whether callers get a Component class or a second tree builder.

### Answers

1. **Next grain**: One tree and not class components. [[location-23-components]] destination is a function that runs once, creates signals, and returns a tree. Nested bets still unnamed by oracles: one component tree, not a web tree and a native tree; no class components, hooks, Fiber, or virtual DOM. Counter and composite contracts assert `forbid-vdom` and `composite.tree:one` without tests. Run-once and props-children oracles already exist.
2. **One tree**: Same authoring tree for both hosts. Do not add a web tree API and a native tree API. Native stays unfunded. Absence of a forked authoring tree, not a native host. Architecture: one component model authored once, compiled twice.
3. **Fiber**: This slice locks Fiber as a component identity, with class components, hooks, and virtual DOM. [[slice-71-unmount-disposes]] Done names Fiber as ownership. Owner contract `owner.dispose:forbid-fiber` stays in that folder. Do not repeat owner-dispose Fiber oracles.
4. **JSX**: Do not repeat [[slice-85-first-version-without-sugar]] JSX parser oracles. Hyperscript stays first. Class components are a different false path.
5. **Public surface**: None. Callers keep `h`, `render`, leaves, and ui.Signal. A public Component class or createWebTree and createNativeTree would leak the model.

### Candidate A

Absence oracles. No new public API.

#### Problem

The package already mounts function components on DOM. Nested model honesty is unnamed: class components, hooks, Fiber as identity, virtual DOM, a second authoring tree. [[slice-70-counter-on-dom]] lists no virtual DOM in Done, not as an oracle. [[slice-107-composite-on-dom]] names one tree in Why, not as an oracle.

#### Usage (caller's view)

```js
import { h, render, view, text } from "dragonflame-ui";

function App() {
	return h(view, { children: h(text, { text: "ok" }) });
}

render(App, parent);
```

Callers do not subclass Component. They do not import a web tree and a native tree.

#### Shape

Public surface stays `h`, `render`, the closed leaf kit, and ui.Signal. Honesty lives in tests that fail if this checkout adds class components for UI, hooks, Fiber as a component identity, a virtual DOM, or a second authoring tree. Complexity hidden: what counts as a forked tree or a class component. Invariants: one tree; function plus signals; no public Component class.

#### Red flags

- **Shallow**: avoided. Callers still call `h` and `render`. Model policy stays behind the existing surface.
- **Leakage**: avoided if tests do not export a Component base or tree tag.
- **Temporal**: one authoring model, not a detect-then-pick-tree pipeline.
- **Pass-through**: a public `getTree()` that only returns `"component"` would be a pass-through. Do not add it.

#### Next implementation step

Spec ladder, then red-green absence tests for class components, Fiber and virtual DOM as identity, and a forked authoring tree.

### Candidate B

Public Component class. Callers pick a web tree or a native tree.

#### Problem

Same destinations, but Candidate A never shows a class or a tree switch. Candidate B would export `Component` and `createWebTree` plus `createNativeTree`.

#### Usage (caller's view)

```js
import { h, render, view, text, Component, createWebTree } from "dragonflame-ui";

class App extends Component {
	render() {
		return h(view, { children: h(text, { text: "ok" }) });
	}
}

render(App, parent, { tree: createWebTree() });
```

A later call could pass `createNativeTree()`.

#### Shape

A public Component base and a tree factory. Callers coordinate class lifecycle and host tree. Interface grows by a base class and a tree tag. Native tree becomes a named path even if unimplemented. One tree is a runtime default instead of a locked model.

#### Red flags

- **Shallow**: callers pass a tree tag to complete mount they already have.
- **Leakage**: Component and tree tags leak identity into app code.
- **Temporal**: pick tree, then subclass, then render, as public stages.
- **Pass-through**: `{ tree: createWebTree() }` forwards a constant the renderer already knows.

#### Next implementation step

Add a public Component export and a native tree branch. Invents API. Contradicts glossary Component and architecture one-tree.

## Synthesis

Base is Candidate A. Graft from B nothing. Reject B as the slice shape: it invents a Component class and names a second authoring tree as a path.

Tradeoffs accepted:

- We accept absence oracles in exchange for no public Component class.
- We accept this package's model lock in exchange for not repeating owner-dispose Fiber oracles.
- We accept not repeating JSX parser oracles in exchange for class-component and virtual-DOM absence checks.

Alternatives considered:

- Public Component class plus web and native tree factories: leaks identity and names a forbidden fork, lost.
- Folding these oracles into [[slice-107-composite-on-dom]]: that slice already met without them, lost.
- Folding Fiber identity into [[slice-71-unmount-disposes]]: that slice owns dispose, not the component model, lost.

Open questions and risks:

- None the product peer cannot answer from location destinations and `docs/`. Show and For stay out. Native hosts stay out.

Next implementation step: write purpose, contract, and test for component model honesty, then red-green absence tests.

### Tracer bullets

1. Spec ladder for component model honesty. blocked_by: none. AFK. Purpose, contract, and test only. No product code.
2. Red-green component model honesty. blocked_by: spec. AFK. Tests fail if this checkout adds class components for UI, hooks, Fiber as a component identity, a virtual DOM, or a second authoring tree.

## Confirm

Confirmed.

Destination: [[location-23-components]] nested one tree and not class components. Not a rewrite of the parent sentence.

Slice Done: tests fail if this checkout adds class components for UI, hooks, Fiber as a component identity, a virtual DOM, or a second authoring tree. No public Component class.

Prefer AFK. Prefactoring is not required. First task is the spec ladder.
