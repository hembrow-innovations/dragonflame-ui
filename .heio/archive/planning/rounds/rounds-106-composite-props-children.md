---
id: "rounds-106-composite-props-children"
title: "Composite props and children"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan, design-tree]
created_at: "2026-09-10T22:30:00Z"
updated_at: "2026-09-10T22:30:00Z"
---

# Composite props and children

Counterpart is the product peer. Notebook is this round.

Pick: [[location-17-web-component-library]]. Lowest active location no slice See also links. Sprint [[web-tracers]] may freeze. Nested child locations 21-35, 41, and 60 already have met slices. Remaining named grain is composite function components with props and nested children.

## Vault pack

Query: composite components with props and children on the web DOM
Area: ui-framework

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/locations/location-23-components.md`
- `.heio/planning/locations/location-32-host-leaves.md`
- `.heio/planning/locations/location-28-dom-renderer.md`
- `.heio/planning/locations/location-27-render-object.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`
- `docs/specs/ui-framework/counter/purpose.md`
- `docs/specs/ui-framework/leaf-kit/purpose.md`

Related:

- `.heio/planning/sprints/web-tracers/shape.md`
- `.heio/planning/sprints/web-tracers/slice-70-counter-on-dom.md`
- `.heio/planning/sprints/web-tracers/slice-72-leaf-kit-on-dom.md`

Excluded: native locations, parked tickets, scribble.

Next: freeze one web-tracers slice for composites. Do not write `docs/specs/`; drain writes the ladder.

No packer script exists. Assembled by hand. Open product questions on the overview and the matching purpose files are empty.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-17-web-component-library]] is still unnamed by a slice.
2. **Children channel**: How do nested children enter `h(type, props)`.
3. **Composite type**: How a function component enters the tree as shared code over host leaves.
4. **Identity**: What runs once, and what patches, when nested children or text change.
5. **Show and For**: Whether this slice implements local structural change.

### Answers

1. **Next grain**: Composite function components with props and nested children. [[location-23-components]] names props, children, composition, one tree, and retained identity. [[location-32-host-leaves]] names shared composites. [[location-28-dom-renderer]] names child patch. Leaf-kit oracles did not lock composites. Counter oracles did not prove child patch.
2. **Children channel**: `props.children`. Smallest reversible default. `h(type, props)` is the locked authoring form. Existing leaf tests already pass children in props.
3. **Composite type**: `h(CompositeFn, props)` where `type` is a function that runs once, reads props, and returns a tree of host leaves or further composites. React-like to read. Not subclassing Button into PrimaryButton.
4. **Identity**: Nested composites run once. Later writes flow through the graph. Child and text patches write properties onto retained host nodes. No virtual DOM. No Fiber.
5. **Show and For**: Not this slice. Architecture says Show and keyed For are only in the sketch. Counter purpose lists them out of scope. Implementing them would invent APIs.

### Candidate A

Function types expand inside the existing renderer.

#### Problem

`h` already builds `{ type, props }`. `render` mounts only host string types and throws on anything else. Leaf tests nest `h(view, { children: h(text, ...) })` but a user function cannot be `type`. Location destinations already require props in, children in, and shared composites.

#### Usage (caller's view)

```js
import { h, render, view, text } from "dragonflame-ui";

function Card(props) {
	return h(view, { children: props.children });
}

function Title(props) {
	return h(text, { text: props.label });
}

function App() {
	return h(Card, {
		children: h(Title, { label: "hi" }),
	});
}

render(App, parent);
```

A later `ui.Signal` write on `label` patches the text node. `Card` and `Title` do not run again.

#### Shape

Public surface stays `h` and `render`. `type` may be a host leaf string or a function. Mount, private to the DOM renderer, calls a function type with `props` and recurses until a host leaf. `props.children` is the child channel. Complexity hidden: function expansion, nested identity, host child mount. Callers do not import an expander. Invariants: function components run once per mount; host nodes retain; no public RenderObject type this slice.

#### Red flags

- **Shallow**: avoided. Callers still call `h` and `render`.
- **Leakage**: avoided if expansion stays private and host tags stay in the leaf adapter.
- **Temporal**: expand-then-mount as two public stages would be temporal. Keep one mount path.
- **Pass-through**: a public `compose(fn)` that only forwards to `fn` would be a pass-through. Do not add it.

#### Next implementation step

Spec ladder, then make `h(function, props)` mount to host leaves without re-running the function on a text patch.

### Candidate B

Immutable configs plus a public retained RenderObject graph, then DOM paint.

#### Problem

Same destinations, but [[location-27-render-object]] wants a retained layout, paint, and hit-test node distinct from the component function. Candidate A treats the DOM node as that retain.

#### Usage (caller's view)

Same authoring as A. Internally `h` returns an immutable config. A RenderObject module owns child slots and identity. The DOM renderer attaches elements to those objects and patches through them.

```js
function Card(props) {
	return h(view, { children: props.children });
}
render(() => h(Card, { children: h(text, { text: "hi" }) }), parent);
```

Callers still do not construct RenderObjects. Tests would import identity helpers if the graph were public.

#### Shape

Three representations: hyperscript config, RenderObject tree, DOM nodes. Component functions write configs. RenderObjects persist. DOM is a host adapter. Interface depth is higher inside, but the public surface grows or leaks if RenderObject or config types escape. Native later could reuse RenderObject; web would keep a parallel DOM retain.

#### Red flags

- **Leakage**: config, RenderObject, and DOM would share child-list shape unless one module owns children.
- **Temporal**: build-config, inflate-RO, paint-DOM as three modules repeats one tree.
- **Shallow**: a public RenderObject API this slice would teach callers an extra type they do not need for the demo.
- **Pass-through**: RO methods that only forward to DOM `appendChild` add a layer without policy.

#### Next implementation step

Introduce RenderObject and re-seat the DOM renderer on it before composites. Too thick for one sitting.

## Synthesis

Base is Candidate A. Graft from B the rule that a function type is the component and a string type is the host leaf, without a third public RenderObject this slice. Web retain stays the DOM node, matching [[slice-70-counter-on-dom]]. Reject B as the slice shape: it would rewrite the web retain model and is two sittings.

Tradeoffs accepted:

- We accept DOM as the web retained node in exchange for a one-sitting demo and honest CSS layout.
- We accept `props.children` only, not extra `h` child arguments, in exchange for keeping `h(type, props)`.
- We accept Show and For remaining sketch-only in exchange for not inventing structural APIs.

Alternatives considered:

- Public `compose` wrapper: pass-through, lost.
- Child arguments after props: new authoring form, lost.
- Show and keyed For as this slice: sketch-only, would invent APIs, lost.

Open questions and risks:

- None the product peer cannot answer from location destinations and `docs/`. Child-list patch of a changing array without For is not this slice.

Next implementation step: write purpose, contract, and test for composites, then red-green function-type `h` and nested `props.children`.

### Tracer bullets

1. Spec ladder for composites. blocked_by: none. AFK. Purpose, contract, and test only. No product code.
2. Function-type `h` expands to host leaves and runs once. blocked_by: spec. AFK. `h(Card, props)` mounts through to DOM leaves. Card does not re-run on a text patch.
3. Nested `props.children` through a composite onto DOM. blocked_by: function-type `h`. AFK. Children of the composite appear on the host. No Show. No For.

## Confirm

Confirmed.

Destination: [[location-17-web-component-library]] next grain, not a rewrite of the parent sentence.

Slice Done: a function component used as `h(type, props)` takes props and children, returns host leaves, nested children appear on DOM, the composite runs once, text patches without re-running it.

Prefer AFK. Prefactoring is not required. First task is the spec ladder.
