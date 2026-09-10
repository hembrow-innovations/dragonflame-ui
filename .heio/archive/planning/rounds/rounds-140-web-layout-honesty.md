---
id: "rounds-140-web-layout-honesty"
title: "Web layout honesty"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan, design-tree]
created_at: "2026-09-10T11:00:00Z"
updated_at: "2026-09-10T11:00:00Z"
---

# Web layout honesty

Counterpart is the product peer. Notebook is this round.

Pick: [[location-31-web-layout]]. Nested layout honesty. CSS on web is named by [[slice-72-leaf-kit-on-dom]]. Remaining unnamed nested bets: not pixel-identical, and copy the DOM backend as an idea not as Impeller. Taffy on web is a [[slice-72-leaf-kit-on-dom]] non-goal, not an oracle. [[location-17-web-component-library]] is funded. Sprint [[web-tracers]] may freeze. Open tickets are parked. Native and mobile sprints say do not freeze. [[location-20-authoring-sugar]] is unlinked but already covered by [[slice-85-first-version-without-sugar]]. [[location-21-git-package]] public-site nested grain is already locked by git-package oracles. [[location-22-crate-layout]] workspace honesty is named by [[slice-133-crate-workspace-honesty]]. [[location-23-components]] model honesty is named by [[slice-125-component-model-honesty]]. [[location-24-signals]] dirtying honesty is named by [[slice-129-signal-dirtying-honesty]]. [[location-25-owner]] is named by [[slice-71-unmount-disposes]]. [[location-26-hyperscript]] is named by [[slice-70-counter-on-dom]] and [[slice-85-first-version-without-sugar]]. [[location-27-render-object]] retain honesty is named by [[slice-137-render-object-honesty]]. [[location-28-dom-renderer]] host honesty is named by [[slice-121-dom-only-web-host]]. [[location-29-tests]] unnamed suite stays [[ticket-65-first-tests-unnamed]]. [[location-30-js-backend]] honesty is named by [[slice-112-js-backend-honesty]].

## Vault pack

Query: web versus native may disagree; copy DOM backend idea, not Impeller pixel-identical
Area: ui-framework

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-31-web-layout.md`
- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/sprints/web-tracers/shape.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`
- `docs/specs/ui-framework/leaf-kit/purpose.md`
- `docs/specs/ui-framework/leaf-kit/contract.md`
- `docs/specs/ui-framework/leaf-kit/test.md`

Related:

- `.heio/planning/sprints/web-tracers/slice-72-leaf-kit-on-dom.md`
- `.heio/planning/sprints/web-tracers/slice-121-dom-only-web-host.md`
- `.heio/planning/locations/location-28-dom-renderer.md`
- `.heio/planning/locations/location-42-native-layout.md`

Excluded: native Taffy algorithm, parked tickets as freeze targets, scribble.

Next: freeze one web-tracers slice for web layout honesty. Do not write `docs/specs/`; drain writes the ladder.

No packer script exists. Assembled by hand. Open product questions on the overview and the matching purpose files are empty.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-31-web-layout]] is still unnamed by a slice.
2. **Taffy on web**: Whether forcing Taffy on web belongs here or stays a leaf-kit non-goal.
3. **CSS as native**: Whether this slice locks CSS as not the native layout runtime.
4. **Public LayoutEngine**: Whether callers get a unified layout type.
5. **Leaf CSS oracles**: Whether this slice repeats view-and-text CSS proofs.

### Answers

1. **Next grain**: Not pixel-identical, and copy the DOM backend as an idea not as Impeller. CSS on web already has oracles. [[slice-72-leaf-kit-on-dom]] Done names pixel-identical as not required without a CHECK. Leaf-kit contract asserts `leaf-kit.layout:not-pixel-identical` without a test.
2. **Taffy on web**: Fold in. Location-31 pivot is forcing Taffy on web to chase pixel-identical native. [[slice-72-leaf-kit-on-dom]] lists Taffy on web as a non-goal, not an oracle. Do not implement Taffy.
3. **CSS as native**: Out. That destination is [[location-42-native-layout]]. Native sprint says do not freeze. Do not invent a native CSS runtime oracle here.
4. **Public LayoutEngine**: None. Callers keep `h`, `render`, leaves, and StyleSheet-shaped style. A public layout engine would leak host layout.
5. **Leaf CSS oracles**: Do not repeat. [[slice-72-leaf-kit-on-dom]] already proves CSS on web through view and text.

### Candidate A

Absence oracles. No new public API.

#### Problem

The package already lays out web leaves with CSS. Nested layout honesty is unnamed: pixel-identical web and native, DOM made to look like Impeller, Taffy forced onto web. [[slice-72-leaf-kit-on-dom]] proves CSS on web. It does not lock the disagreement.

#### Usage (caller's view)

```js
import { h, render, view, text } from "dragonflame-ui";

function App() {
	return h(view, { style: { padding: 8 } }, [h(text, { text: "hi" })]);
}

render(App, parent);
```

Callers do not import Taffy. They do not import a LayoutEngine. They do not ask web layout to match a native engine.

#### Shape

Public surface stays `h`, `render`, the closed leaf kit, and StyleSheet-shaped style. Honesty lives in tests that fail if this checkout forces Taffy on web, or treats the DOM backend as a pixel-identical Impeller or Skia clone. Complexity hidden: web layout stays CSS because the browser already has it. Invariants: no public LayoutEngine; web versus native may disagree.

#### Red flags

- **Shallow**: avoided. Callers still call `h` and `render`. Layout policy stays behind tests.
- **Leakage**: avoided if tests do not export Taffy or Impeller types.
- **Temporal**: one web layout model, not CSS-then-Taffy-then-pixel-match stages.
- **Pass-through**: a public `layout()` that only forwards CSS would be a pass-through. Do not add it.

#### Next implementation step

Spec ladder, then red-green absence tests for Taffy on web and Impeller-shaped DOM.

### Candidate B

Public LayoutEngine. Callers pick CSS or Taffy so hosts can match pixels.

#### Problem

Same destinations, but Candidate A never shows a layout engine. Candidate B would export `LayoutEngine` and `pixelMatch`.

#### Usage (caller's view)

```js
import { h, render, view, text, LayoutEngine, pixelMatch } from "dragonflame-ui";

LayoutEngine.use("taffy");
pixelMatch(true);
render(() => h(view, {}, [h(text, { text: "hi" })]), parent);
```

A later call could force Taffy on web to chase native.

#### Shape

A public LayoutEngine and a pixel-match switch. Callers coordinate CSS, Taffy, and host agreement. Interface grows by layout-runtime names the web package does not need. Web layout becomes a second algorithm beside CSS.

#### Red flags

- **Shallow**: callers pick Taffy versus CSS to complete layout the browser already did.
- **Leakage**: Taffy and Impeller pixel-match leak into app code.
- **Temporal**: style, then engine pick, then pixel-match, as public stages.
- **Pass-through**: `pixelMatch(true)` forwards a host policy `render` should not expose.

#### Next implementation step

Add public LayoutEngine and pixelMatch. Invents API. Contradicts architecture trade-off that web versus native may disagree.

## Synthesis

Base is Candidate A. Graft from B nothing. Reject B as the slice shape: it invents a unified layout engine and rewrites the web layout destination.

Tradeoffs accepted:

- We accept absence oracles in exchange for no public LayoutEngine.
- We accept not repeating CSS-on-web leaf oracles in exchange for Taffy-on-web and Impeller-DOM absence checks.
- We accept leaving CSS-as-native-layout out in exchange for not freezing native pipeline tasks.
- We accept a new spec folder in exchange for not patching met [[slice-72-leaf-kit-on-dom]] oracles.

Alternatives considered:

- Public LayoutEngine plus pixelMatch: leaks host layout and rewrites CSS-on-web, lost.
- Folding these oracles into [[slice-72-leaf-kit-on-dom]]: that slice is already met as the closed leaf kit, lost.
- Freezing CSS-as-native-layout here: would rewrite [[location-42-native-layout]] while native is unfunded, lost.

Open questions and risks:

- None the product peer cannot answer from location destinations and `docs/`. Native Taffy stays out.

Next implementation step: write purpose, contract, and test for web layout honesty, then red-green absence tests.

### Tracer bullets

1. Spec ladder for web layout honesty. blocked_by: none. AFK. Purpose, contract, and test only. No product code.
2. Red-green web layout honesty. blocked_by: spec. AFK. Tests fail if this checkout forces Taffy on web, or treats the DOM backend as a pixel-identical Impeller or Skia clone.

## Confirm

Confirmed.

Destination: [[location-31-web-layout]] nested not pixel-identical, and copy the DOM backend as an idea not as Impeller. Not a rewrite of the parent sentence.

Slice Done: tests fail if this checkout forces Taffy on web, or treats the DOM backend as a pixel-identical Impeller or Skia clone. No public LayoutEngine.

Prefer AFK. Prefactoring is not required. First task is the spec ladder.
