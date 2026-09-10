---
id: "rounds-115-patch-attrs-children"
title: "Patch attributes and children"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan, design-tree]
created_at: "2026-09-10T09:15:00Z"
updated_at: "2026-09-10T09:15:00Z"
---

# Patch attributes and children

Counterpart is the product peer. Notebook is this round.

Pick: [[location-28-dom-renderer]]. Nested create-and-patch grain. Text patch is already met by [[slice-70-counter-on-dom]]. Attribute patch and child patch are unnamed. [[location-17-web-component-library]] is funded. Sprint [[web-tracers]] may freeze. Open tickets are parked. Native and mobile sprints say do not freeze. [[location-20-authoring-sugar]] is unlinked but already covered by [[slice-85-first-version-without-sugar]].

## Vault pack

Query: patch host attributes and children on the web DOM without Show or For
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
- `docs/specs/ui-framework/composite/purpose.md`
- `docs/specs/ui-framework/leaf-kit/purpose.md`

Related:

- `.heio/planning/sprints/web-tracers/slice-70-counter-on-dom.md`
- `.heio/planning/sprints/web-tracers/slice-72-leaf-kit-on-dom.md`
- `.heio/planning/sprints/web-tracers/slice-107-composite-on-dom.md`

Excluded: native locations, parked tickets, scribble.

Next: freeze one web-tracers slice for attribute and child patch. Do not write `docs/specs/`; drain writes the ladder.

No packer script exists. Assembled by hand. Open product questions on the overview and the matching purpose files are empty.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-28-dom-renderer]] is still unnamed by a slice.
2. **Attribute**: Which host attribute this slice patches, without inventing a new leaf prop.
3. **Children**: What child patch means without Show or keyed For.
4. **Binding**: How a signal reaches an attribute or a child after the component has run once.
5. **Public surface**: Whether callers get a new patch or reconcile API.

### Answers

1. **Next grain**: Attribute patch and child patch. [[location-28-dom-renderer]] destination is create elements and patch text, attributes, and children. Counter oracles prove text only. Composite oracles prove nested children mount, not child patch. Leaf-kit oracles prove style at mount, not a later write.
2. **Attribute**: StyleSheet-shaped `style` already applied at mount. Smallest reversible default. Do not invent `src` or input `value`. testID stays [[slice-73-testid-pressable]].
3. **Children**: A signal-valued `props.children` holding one host vnode. A write patches that child under the same retained parent. Not an array. Not Show. Not keyed For. Composite purpose already forbids child-list patch of a changing array.
4. **Binding**: Same as text. Pass the ui.Signal as the prop. `follow` writes properties onto the retained host node. The component function does not re-run.
5. **Public surface**: None. Callers keep `h`, `render`, leaves, and ui.Signal. A public `patch` or vnode diff would leak the renderer.

### Candidate A

Signal-valued props patch inside the existing renderer.

#### Problem

`follow` already patches `props.text`. Style, testID, and children mount once and never update. Location destinations already require attribute patch and child patch. Show and For stay in the sketch.

#### Usage (caller's view)

```js
import { h, render, view, text, Signal, StyleSheet } from "dragonflame-ui";

const styles = StyleSheet.create({
	box: { padding: 8 },
	wide: { padding: 16 },
});

function App() {
	const box = Signal(styles.box);
	const child = Signal(h(text, { text: "a" }));
	return h(view, { style: box, children: child });
}

render(App, parent);
box.set(styles.wide);
child.set(h(text, { text: "b" }));
```

Callers do not import a patch helper. The parent host node is retained.

#### Shape

Public surface stays `h`, `render`, the closed leaf kit, and ui.Signal. The renderer follows signal-valued `style` and `children` the way it already follows `text`. Complexity hidden: subscribe, dispose, replace one child, write style onto the same node. Invariants: run-once; no virtual DOM; one child vnode in the signal, not an array; no Show; no For.

#### Red flags

- **Shallow**: avoided. Callers still call `h` and `render`. Patch policy stays in the renderer.
- **Leakage**: avoided if style stays StyleSheet-shaped and children stay `props.children`.
- **Temporal**: one renderer owns mount and patch, not a load-then-diff-then-save pipeline.
- **Pass-through**: a public `patch()` that only forwards into the renderer would be a pass-through. Do not add it.

#### Next implementation step

Spec ladder, then red-green tests for style patch and one-child patch on the retained parent.

### Candidate B

Public reconcile module that diffs the last vnode tree against the next.

#### Problem

Same destinations, but Candidate A never shows a tree diff. Candidate B would export `patch(parent, prev, next)` so callers re-render a vnode after every write.

#### Usage (caller's view)

```js
import { h, render, patch, view, text, Signal } from "dragonflame-ui";

function App() {
	const label = Signal("a");
	const tree = () => h(view, { children: h(text, { text: label.get() }) });
	const handle = render(App, parent);
	label.set("b");
	patch(handle, tree());
}
```

The component function is invoked again to produce the next tree.

#### Shape

A public diff of type, props, and children. Callers coordinate `render` then `patch`. Interface grows by a handle and a vnode snapshot. Run-once is lost unless the module secretly caches. Array child diff starts looking like For.

#### Red flags

- **Shallow**: callers coordinate render and patch to complete one write.
- **Leakage**: vnode snapshots and a patch handle leak the renderer.
- **Temporal**: mount then diff then patch as public stages.
- **Pass-through**: `patch` that re-runs the component and forwards into mount is a pass-through plus a false React re-render.

#### Next implementation step

Add a public patch API and re-run the component on writes. Invents API. Breaks run-once.

## Synthesis

Base is Candidate A. Graft from B nothing. Reject B as the slice shape: it invents a reconcile API, re-runs the component, and slides toward virtual DOM and For.

Tradeoffs accepted:

- We accept signal-valued `style` and `children` in exchange for no public patch helper.
- We accept one child vnode in the children signal in exchange for not inventing keyed For.
- We accept style as the attribute demo in exchange for not inventing `src` or input `value`.

Alternatives considered:

- Public `patch` plus vnode diff: leaks the renderer and breaks run-once, lost.
- Array child-list patch: composite purpose forbids it, lost.
- Inventing image `src` as the attribute: leaf-kit never locked that prop, lost.

Open questions and risks:

- None the product peer cannot answer from location destinations and `docs/`. Show and For stay out.

Next implementation step: write purpose, contract, and test for attribute and child patch, then red-green style patch and one-child patch.

### Tracer bullets

1. Spec ladder for attribute and child patch. blocked_by: none. AFK. Purpose, contract, and test only. No product code.
2. Red-green style attribute patch. blocked_by: spec. AFK. A style signal write updates the same retained host node.
3. Red-green one-child patch. blocked_by: style patch. AFK. A children signal write patches one host vnode under the same retained parent. No Show. No For.

## Confirm

Confirmed.

Destination: [[location-28-dom-renderer]] nested create-and-patch, not a rewrite of the parent sentence.

Slice Done: a style signal write patches the same retained host node. A children signal write patches one host vnode under the same retained parent. No Show. No For. No public patch API.

Prefer AFK. Prefactoring is not required. First task is the spec ladder.
