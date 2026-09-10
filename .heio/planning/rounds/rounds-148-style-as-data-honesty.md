---
id: "rounds-148-style-as-data-honesty"
title: "Style as data honesty"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan, design-tree]
created_at: "2026-09-10T13:30:00Z"
updated_at: "2026-09-10T13:30:00Z"
---

# Style as data honesty

Counterpart is the product peer. Notebook is this round.

Pick: [[location-33-style-as-data]]. Nested style honesty. StyleSheet-shaped objects are named by [[slice-72-leaf-kit-on-dom]]. Web CSS layout is named by [[slice-72-leaf-kit-on-dom]] and [[slice-141-web-layout-honesty]]. Remaining unnamed nested bets: style must not become a CSS language in the framework, and style objects must not become a CSS engine product. Native Taffy feed is [[location-42-native-layout]] and stays behind [[ticket-61-native-ui-unfunded]]. [[location-17-web-component-library]] is funded. Sprint [[web-tracers]] may freeze. Open tickets are parked. Native and mobile sprints say do not freeze. [[location-20-authoring-sugar]] is unlinked but already covered by [[slice-85-first-version-without-sugar]]. [[location-21-git-package]] through [[location-32-host-leaves]] honesty grain is already named.

## Vault pack

Query: style is StyleSheet-shaped objects; not a CSS language in the framework; not a CSS engine product

Area: ui-framework

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-33-style-as-data.md`
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
- `.heio/planning/sprints/web-tracers/slice-141-web-layout-honesty.md`
- `.heio/planning/sprints/web-tracers/slice-116-patch-attrs-children.md`
- `.heio/planning/locations/location-31-web-layout.md`
- `.heio/planning/locations/location-42-native-layout.md`
- `.heio/planning/tickets/ticket-61-native-ui-unfunded.md`
- `docs/specs/ui-framework/dom-patch/purpose.md`

Excluded: native Taffy feed, parked tickets as freeze targets, scribble.

Next: freeze one web-tracers slice for style as data honesty. Do not write `docs/specs/`; drain writes the ladder.

No packer script exists. Assembled by hand. Open product questions on the overview and the matching purpose files are empty.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-33-style-as-data]] is still unnamed by a slice.
2. **CSS language**: Whether forbidding a CSS language in the framework belongs here.
3. **CSS engine**: Whether forbidding a CSS engine product belongs here or waits on native.
4. **One CSS engine**: Whether one CSS engine for both hosts belongs here or stays on web-layout honesty.
5. **Public css parser**: Whether callers get a css tagged template or parseCss.
6. **StyleSheet oracles**: Whether this slice repeats StyleSheet-shaped proofs.
7. **Native feed**: Whether native objects feeding Taffy and paint fold in.

### Answers

1. **Next grain**: Not a CSS language in the framework, and not a CSS engine product. StyleSheet-shaped objects already have oracles. [[slice-72-leaf-kit-on-dom]] Done names StyleSheet-shaped style. Leaf-kit contract asserts `leaf-kit.style:forbid-css-engine` without a test. Native Taffy feed stays unfunded.
2. **CSS language**: Fold in. Location-33 pivot is style becoming a CSS language in the framework. Overview steal is StyleSheet-shaped objects. Do not add a CSS language.
3. **CSS engine**: Fold in as absence. Overview says they must not become a CSS engine. Intent forbids CSS as the native layout runtime. Do not implement a CSS engine. Native Taffy is [[location-42-native-layout]]. Native sprint says do not freeze.
4. **One CSS engine**: Out. That grain is [[slice-141-web-layout-honesty]] not pixel-identical and no Taffy on web. Do not repeat those oracles.
5. **Public css parser**: None. Callers keep `h`, `render`, leaves, and `StyleSheet.create`. A public `css` tagged template or `parseCss` would leak a CSS language.
6. **StyleSheet oracles**: Do not repeat. [[slice-72-leaf-kit-on-dom]] already proves StyleSheet-shaped objects on CSS. [[slice-116-patch-attrs-children]] already patches StyleSheet-shaped style.
7. **Native feed**: Out. That destination is [[location-42-native-layout]]. [[ticket-61-native-ui-unfunded]] is parked. Do not invent Taffy feed oracles here.

### Candidate A

Absence oracles. No new public API.

#### Problem

The package already mounts StyleSheet-shaped style on DOM. Nested honesty is unnamed: style as a CSS language in the framework, style objects as a CSS engine product. [[slice-72-leaf-kit-on-dom]] proves StyleSheet shape. It does not lock those pivots.

#### Usage (caller's view)

```js
import { h, render, view, text, StyleSheet } from "dragonflame-ui";

const styles = StyleSheet.create({
	box: { padding: 8 },
});

function App() {
	return h(view, { style: styles.box }, [h(text, { text: "hi" })]);
}

render(App, parent);
```

Callers do not import `css`. They do not call `parseCss`. They do not pass CSS source strings as style.

#### Shape

Public surface stays `h`, `render`, the closed leaf kit, and `StyleSheet.create`. Honesty lives in tests that fail if this checkout treats style as a CSS language in the framework, or maps style objects through a CSS engine product. Complexity hidden: style stays data objects. Invariants: no public `css` tagged template; no public `parseCss`; mapping style objects to CSS is not a CSS engine product.

#### Red flags

- **Shallow**: avoided. Callers still call `h`, `render`, and `StyleSheet.create`. CSS-language policy stays behind tests.
- **Leakage**: avoided if tests do not export CSS parsers or CSS source types.
- **Temporal**: one style-as-data rule, not create-then-parse-then-engine stages.
- **Pass-through**: a public `parseCss` that only forwards a string to the host would be a pass-through. Do not add it.

#### Next implementation step

Spec ladder, then red-green absence tests for CSS language and CSS engine product.

### Candidate B

Public CSS language. Callers write CSS source so style can become a language.

#### Problem

Same destinations, but Candidate A never shows how CSS source enters the framework. Candidate B would export `css` or `parseCss`.

#### Usage (caller's view)

```js
import { h, render, view, text, css, parseCss } from "dragonflame-ui";

const box = css`
	padding: 8px;
`;

render(() => h(view, { style: parseCss("padding: 8px") }, [h(text, { text: "hi" })]), parent);
```

A later call could require one CSS engine for both hosts.

#### Shape

A public `css` tagged template and `parseCss`. Callers coordinate CSS source. Interface grows by a CSS language the web package does not need. Style becomes a CSS engine product.

#### Red flags

- **Shallow**: callers pick CSS source versus StyleSheet data to complete styling the kit already did.
- **Leakage**: CSS grammar and engine types leak into app code.
- **Temporal**: create, parse, then engine, as public stages.
- **Pass-through**: `parseCss("padding: 8px")` forwards a host CSS string `StyleSheet.create` should not expose.

#### Next implementation step

Add public `css` and `parseCss`. Invents API. Contradicts style as StyleSheet-shaped objects.

## Synthesis

Base is Candidate A. Graft from B nothing. Reject B as the slice shape: it invents a CSS language and rewrites the style-as-data destination.

Tradeoffs accepted:

- We accept absence oracles in exchange for no public `css` or `parseCss`.
- We accept not repeating StyleSheet-shaped oracles in exchange for CSS-language and CSS-engine absence checks.
- We accept leaving one-CSS-engine-for-both-hosts out in exchange for not repeating [[slice-141-web-layout-honesty]] oracles.
- We accept leaving native Taffy feed out in exchange for not inventing [[location-42-native-layout]] oracles while native is unfunded.
- We accept a new spec folder in exchange for not patching met [[slice-72-leaf-kit-on-dom]] oracles.

Alternatives considered:

- Public `css` tagged template plus `parseCss`: leaks a CSS language and rewrites style as data, lost.
- Folding these oracles into [[slice-72-leaf-kit-on-dom]]: that slice is already met as StyleSheet-shaped style on CSS, lost.
- Freezing one CSS engine for both hosts here: would repeat [[slice-141-web-layout-honesty]], lost.
- Freezing native Taffy feed here: would rewrite [[location-42-native-layout]] while native is unfunded, lost.

Open questions and risks:

- None the product peer cannot answer from location destinations and `docs/`. Native Taffy feed stays out.

Next implementation step: write purpose, contract, and test for style as data honesty, then red-green absence tests.

### Tracer bullets

1. Spec ladder for style as data honesty. blocked_by: none. AFK. Purpose, contract, and test only. No product code.
2. Red-green style as data honesty. blocked_by: spec. AFK. Tests fail if this checkout treats style as a CSS language in the framework, or maps style objects through a CSS engine product.

## Confirm

Confirmed.

Destination: [[location-33-style-as-data]] nested not a CSS language in the framework, and not a CSS engine product. Not a rewrite of the parent sentence.

Slice Done: tests fail if this checkout treats style as a CSS language in the framework, or maps style objects through a CSS engine product. No public css tagged template. No public parseCss.

Prefer AFK. Prefactoring is not required. First task is the spec ladder.
