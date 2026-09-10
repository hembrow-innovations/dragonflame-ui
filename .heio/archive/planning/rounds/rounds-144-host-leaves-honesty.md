---
id: "rounds-144-host-leaves-honesty"
title: "Host leaves honesty"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan, design-tree]
created_at: "2026-09-10T12:15:00Z"
updated_at: "2026-09-10T12:15:00Z"
---

# Host leaves honesty

Counterpart is the product peer. Notebook is this round.

Pick: [[location-32-host-leaves]]. Nested closed-set honesty. The six leaves are named by [[slice-72-leaf-kit-on-dom]]. Shared composites are named by [[slice-107-composite-on-dom]]. Remaining unnamed nested bets: not HTML, and not every UIKit class as the leaf set. Host config nested grain is [[location-35-host-config]]. Native text metrics are [[location-55-text]]. [[location-17-web-component-library]] is funded. Sprint [[web-tracers]] may freeze. Open tickets are parked. Native and mobile sprints say do not freeze. [[location-20-authoring-sugar]] is unlinked but already covered by [[slice-85-first-version-without-sugar]]. [[location-21-git-package]] through [[location-31-web-layout]] honesty grain is already named.

## Vault pack

Query: small host primitive set is view, text, image, scroll, text input, and pressable; not HTML and not every UIKit class
Area: ui-framework

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-32-host-leaves.md`
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
- `.heio/planning/sprints/web-tracers/slice-107-composite-on-dom.md`
- `.heio/planning/locations/location-35-host-config.md`
- `.heio/planning/locations/location-55-text.md`
- `docs/specs/ui-framework/composite/purpose.md`
- `docs/specs/ui-framework/composite/contract.md`

Excluded: native OEM widgets, parked tickets as freeze targets, scribble.

Next: freeze one web-tracers slice for host leaves honesty. Do not write `docs/specs/`; drain writes the ladder.

No packer script exists. Assembled by hand. Open product questions on the overview and the matching purpose files are empty.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-32-host-leaves]] is still unnamed by a slice.
2. **HTML leaves**: Whether forbidding HTML as the leaf set belongs here or stays a leaf-kit non-goal.
3. **UIKit classes**: Whether forbidding every UIKit class as the leaf set belongs here or waits on native.
4. **Public registerLeaf**: Whether callers get a way to add host tags.
5. **Leaf kit oracles**: Whether this slice repeats the six-leaf proofs.
6. **Host config**: Whether compile-time split and New Architecture steal fold in.

### Answers

1. **Next grain**: Not HTML, and not every UIKit class as the leaf set. The six leaves already have oracles. [[slice-72-leaf-kit-on-dom]] Done names HTML as a non-goal without a CHECK. Leaf-kit contract asserts `leaf-kit.set:forbid-html` without a test. Shared composites are [[slice-107-composite-on-dom]].
2. **HTML leaves**: Fold in. Location-32 pivot is HTML as the leaf set. [[slice-72-leaf-kit-on-dom]] lists HTML as a non-goal, not an oracle. Do not add HTML leaves.
3. **UIKit classes**: Fold in as absence. Overview steal is one sentence: not HTML and not every UIKit class. Do not implement UIKit. Native OEM is [[location-44-oem-escape-hatch]]. Native sprint says do not freeze.
4. **Public registerLeaf**: None. Callers keep `h`, `render`, and the closed leaf kit. A public `registerLeaf` would leak host HTML and UIKit names.
5. **Leaf kit oracles**: Do not repeat. [[slice-72-leaf-kit-on-dom]] already proves view, text, image, scroll, text input, and pressable.
6. **Host config**: Out. That destination is [[location-35-host-config]]. Do not invent compile-time split or New Architecture steal oracles here.

### Candidate A

Absence oracles. No new public API.

#### Problem

The package already mounts the six host leaves on DOM. Nested closed-set honesty is unnamed: HTML as leaves, every UIKit class as the leaf set. [[slice-72-leaf-kit-on-dom]] proves the six leaves. It does not lock the closed-set pivot.

#### Usage (caller's view)

```js
import { h, render, view, text, image, scroll, textInput, pressable } from "dragonflame-ui";

function App() {
	return h(view, {}, [h(text, { text: "hi" })]);
}

render(App, parent);
```

Callers do not import `div`. They do not import `UIView`. They do not register extra host tags.

#### Shape

Public surface stays `h`, `render`, and the closed leaf kit. Honesty lives in tests that fail if this checkout adds HTML leaves, or treats every UIKit class as the leaf set. Complexity hidden: the leaf set stays six primitives. Invariants: no public `registerLeaf`; HTML is not the leaf set; UIKit classes are not the leaf set.

#### Red flags

- **Shallow**: avoided. Callers still call `h` and `render`. Closed-set policy stays behind tests.
- **Leakage**: avoided if tests do not export HTML tags or UIKit types.
- **Temporal**: one closed set, not leaves-then-HTML-then-UIKit stages.
- **Pass-through**: a public `registerLeaf` that only forwards a tag name would be a pass-through. Do not add it.

#### Next implementation step

Spec ladder, then red-green absence tests for HTML leaves and UIKit-as-leaves.

### Candidate B

Public leaf registry. Callers add HTML tags or UIKit class names so the set can grow.

#### Problem

Same destinations, but Candidate A never shows how a seventh leaf appears. Candidate B would export `registerLeaf`.

#### Usage (caller's view)

```js
import { h, render, view, text, registerLeaf } from "dragonflame-ui";

registerLeaf("div");
registerLeaf("UIView");
render(() => h("div", {}, [h(text, { text: "hi" })]), parent);
```

A later call could add every HTML tag or UIKit class.

#### Shape

A public `registerLeaf` and string host tags. Callers coordinate the closed set. Interface grows by host names the web package does not need. The leaf set becomes an open registry.

#### Red flags

- **Shallow**: callers pick HTML versus the kit to complete mounting the kit already did.
- **Leakage**: HTML tags and UIKit class names leak into app code.
- **Temporal**: kit, then register, then mount, as public stages.
- **Pass-through**: `registerLeaf("div")` forwards a host tag `render` should not expose.

#### Next implementation step

Add public `registerLeaf`. Invents API. Contradicts the closed host primitive set.

## Synthesis

Base is Candidate A. Graft from B nothing. Reject B as the slice shape: it invents a leaf registry and rewrites the host-leaves destination.

Tradeoffs accepted:

- We accept absence oracles in exchange for no public `registerLeaf`.
- We accept not repeating six-leaf oracles in exchange for HTML-leaf and UIKit-leaf absence checks.
- We accept leaving host-config compile-time split out in exchange for not inventing [[location-35-host-config]] oracles.
- We accept a new spec folder in exchange for not patching met [[slice-72-leaf-kit-on-dom]] oracles.

Alternatives considered:

- Public `registerLeaf` plus string host tags: leaks HTML and UIKit names and rewrites the closed set, lost.
- Folding these oracles into [[slice-72-leaf-kit-on-dom]]: that slice is already met as the closed leaf kit, lost.
- Freezing host-config compile-time split here: would rewrite [[location-35-host-config]], lost.
- Freezing native OEM widgets here: would rewrite [[location-44-oem-escape-hatch]] while native is unfunded, lost.

Open questions and risks:

- None the product peer cannot answer from location destinations and `docs/`. Native OEM stays out.

Next implementation step: write purpose, contract, and test for host leaves honesty, then red-green absence tests.

### Tracer bullets

1. Spec ladder for host leaves honesty. blocked_by: none. AFK. Purpose, contract, and test only. No product code.
2. Red-green host leaves honesty. blocked_by: spec. AFK. Tests fail if this checkout adds HTML leaves, or treats every UIKit class as the leaf set.

## Confirm

Confirmed.

Destination: [[location-32-host-leaves]] nested not HTML, and not every UIKit class as the leaf set. Not a rewrite of the parent sentence.

Slice Done: tests fail if this checkout adds HTML leaves, or treats every UIKit class as the leaf set. No public registerLeaf.

Prefer AFK. Prefactoring is not required. First task is the spec ladder.
