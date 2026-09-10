---
id: "rounds-152-host-config-honesty"
title: "Host config honesty"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan, design-tree]
created_at: "2026-09-10T14:20:00Z"
updated_at: "2026-09-10T14:20:00Z"
---

# Host config honesty

Counterpart is the product peer. Notebook is this round.

Pick: [[location-35-host-config]]. Nested host-config honesty. Leaf adapter is named by [[slice-72-leaf-kit-on-dom]]. Compile-time platform is named by [[slice-112-js-backend-honesty]]. Portable import is named by [[slice-75-portable-web-import]]. Remaining unnamed nested bets: New Architecture lessons must not steal JSI or Hermes. Native AOT FFI, UI-thread measure, and UIView versus engine draw lists stay behind [[ticket-61-native-ui-unfunded]]. [[location-34-a11y-test-ids]] web grain is named by [[slice-73-testid-pressable]]; native semantics stay unfunded. [[location-17-web-component-library]] is funded. Sprint [[web-tracers]] may freeze. Open tickets are parked. Native and mobile sprints say do not freeze. [[location-20-authoring-sugar]] is unlinked but already covered by [[slice-85-first-version-without-sugar]]. [[location-21-git-package]] through [[location-34-a11y-test-ids]] honesty grain is already named.

## Vault pack

Query: host config at the leaf adapter; New Architecture lessons without JSI or Hermes

Area: ui-framework

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-35-host-config.md`
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
- `.heio/planning/sprints/web-tracers/slice-75-portable-web-import.md`
- `.heio/planning/sprints/web-tracers/slice-112-js-backend-honesty.md`
- `.heio/planning/sprints/web-tracers/slice-121-dom-only-web-host.md`
- `.heio/planning/locations/location-41-renderer-portability.md`
- `.heio/planning/tickets/ticket-61-native-ui-unfunded.md`
- `docs/specs/ui-framework/js-backend/purpose.md`
- `docs/specs/ui-framework/renderer-portability/purpose.md`

Excluded: native AOT FFI, parked tickets as freeze targets, scribble.

Next: freeze one web-tracers slice for host config honesty. Do not write `docs/specs/`; drain writes the ladder.

No packer script exists. Assembled by hand. Open product questions on the overview and the matching purpose files are empty.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-35-host-config]] is still unnamed by a slice.
2. **JSI**: Whether forbidding JSI as host config belongs here.
3. **Hermes steal**: Whether forbidding Hermes stolen with New Architecture belongs here or repeats eval and app-runtime oracles.
4. **Steal lessons**: Whether immutable shadow tree, synchronous layout and measure, mounting separate from reconcile, typed host descriptors as AOT FFI, and in-process typed sync calls fold in.
5. **Public host config**: Whether callers get a HostConfig, jsi, or hermesRuntime export.
6. **Named oracles**: Whether this slice repeats leaf-adapter, portable-import, or compile-time-split proofs.
7. **Native hosts**: Whether UIView versus engine draw lists fold in.

### Answers

1. **Next grain**: Do not steal JSI. Do not steal Hermes. Leaf adapter, compile-time platform, and portable import already have oracles or named slices. [[slice-72-leaf-kit-on-dom]] Why names host config at the leaf adapter. Leaf-kit contract asserts `leaf-kit.host:forbid-jsi-hermes` without a test. Native AOT FFI stays unfunded.
2. **JSI**: Fold in. Location-35 pivot is JSI stolen with New Architecture lessons. Overview steal line says do not steal JSI. Glossary avoids JSI as the portability surface. Do not add JSI.
3. **Hermes steal**: Fold in as host-config absence. Overview says do not steal Hermes. Intent forbids Hermes as the app runtime. Do not repeat [[slice-112-js-backend-honesty]] no-eval oracles. Do not implement Hermes.
4. **Steal lessons**: Out. Those grains need a native host. [[ticket-61-native-ui-unfunded]] is parked. Do not invent shadow-tree, AOT FFI, or UI-thread measure APIs here.
5. **Public host config**: None. Callers keep `h`, `render`, and leaves. A public `jsi`, `hermesRuntime`, or `HostConfig` would leak host wiring.
6. **Named oracles**: Do not repeat. [[slice-72-leaf-kit-on-dom]] already names the leaf adapter. [[slice-75-portable-web-import]] already hard-errors `document` import. [[slice-112-js-backend-honesty]] already covers compile-time split and no eval. [[slice-121-dom-only-web-host]] already covers no public Host type.
7. **Native hosts**: Out. That destination is UIView versus engine draw lists on a funded native path. Do not invent those oracles here.

### Candidate A

Absence oracles. No new public API.

#### Problem

The package already mounts leaves through a leaf adapter. Nested honesty is unnamed: JSI stolen as host config, Hermes stolen with New Architecture lessons. [[slice-72-leaf-kit-on-dom]] names the adapter. It does not lock those pivots.

#### Usage (caller's view)

```js
import { h, render, view, text } from "dragonflame-ui";

function App() {
	return h(view, {}, [h(text, { text: "hi" })]);
}

render(App, parent);
```

Callers do not import `jsi`. They do not import `hermesRuntime`. They do not construct a `HostConfig`.

#### Shape

Public surface stays `h`, `render`, and the closed leaf kit. Honesty lives in tests that fail if this checkout steals JSI or Hermes as host config. Complexity hidden: host wiring stays at the leaf adapter. Invariants: no public `jsi`; no public `hermesRuntime`; no public `HostConfig`.

#### Red flags

- **Shallow**: avoided. Callers still call `h` and `render`. JSI and Hermes policy stays behind tests.
- **Leakage**: avoided if tests do not export JSI handles or Hermes runtime types.
- **Temporal**: one host-config rule, not create-then-jsi-then-hermes stages.
- **Pass-through**: a public `HostConfig` that only forwards DOM calls would be a pass-through. Do not add it.

#### Next implementation step

Spec ladder, then red-green absence tests for JSI and Hermes as host config.

### Candidate B

Public host config. Callers wire JSI or Hermes so New Architecture lessons have a handle.

#### Problem

Same destinations, but Candidate A never shows how a host runtime enters the framework. Candidate B would export `HostConfig`, `jsi`, or `hermesRuntime`.

#### Usage (caller's view)

```js
import { h, render, view, text, HostConfig, jsi, hermesRuntime } from "dragonflame-ui";

const host = HostConfig.create({ jsi, hermesRuntime });
render(() => h(view, {}, [h(text, { text: "hi" })]), parent, host);
```

A later call could require Hermes on web so both hosts share a JS runtime.

#### Shape

A public `HostConfig`, `jsi`, and `hermesRuntime`. Callers coordinate host wiring. Interface grows by a JS-engine host the web package does not need. Host config becomes JSI plus Hermes.

#### Red flags

- **Shallow**: callers pick JSI versus leaf adapter to complete mounting the kit already did.
- **Leakage**: JSI handles and Hermes runtime types leak into app code.
- **Temporal**: create host, bind JSI, then mount, as public stages.
- **Pass-through**: `HostConfig.create({ jsi })` forwards a host runtime `render` should not expose.

#### Next implementation step

Add public `HostConfig`, `jsi`, and `hermesRuntime`. Invents API. Contradicts leaf-adapter host config and the no-JSI no-Hermes steal.

## Synthesis

Base is Candidate A. Graft from B nothing. Reject B as the slice shape: it invents JSI and Hermes host wiring and rewrites the leaf-adapter destination.

Tradeoffs accepted:

- We accept absence oracles in exchange for no public `jsi`, `hermesRuntime`, or `HostConfig`.
- We accept not repeating leaf-adapter, portable-import, compile-time-split, no-eval, or no-public-Host oracles in exchange for JSI and Hermes host-config absence checks.
- We accept leaving New Architecture steal lessons out in exchange for not inventing native shadow-tree or AOT FFI oracles while native is unfunded.
- We accept a new spec folder in exchange for not patching met [[slice-72-leaf-kit-on-dom]] oracles.

Alternatives considered:

- Public `HostConfig` plus `jsi` plus `hermesRuntime`: leaks host wiring and rewrites leaf-adapter host config, lost.
- Folding these oracles into [[slice-72-leaf-kit-on-dom]]: that slice is already met as the closed leaf kit on CSS, lost.
- Folding Hermes into [[slice-112-js-backend-honesty]] no-eval: that slice already covers eval screens, not host-config steal, lost.
- Freezing AOT FFI and UI-thread measure here: would rewrite native destinations while native is unfunded, lost.

Open questions and risks:

- None the product peer cannot answer from location destinations and `docs/`. Native steal lessons stay out.

Next implementation step: write purpose, contract, and test for host config honesty, then red-green absence tests.

### Tracer bullets

1. Spec ladder for host config honesty. blocked_by: none. AFK. Purpose, contract, and test only. No product code.
2. Red-green host config honesty. blocked_by: spec. AFK. Tests fail if this checkout steals JSI or Hermes as host config.

## Confirm

Confirmed.

Destination: [[location-35-host-config]] nested do not steal JSI, and do not steal Hermes. Not a rewrite of the parent sentence.

Slice Done: tests fail if this checkout steals JSI or Hermes as host config. No public jsi. No public hermesRuntime. No public HostConfig.

Prefer AFK. Prefactoring is not required. First task is the spec ladder.
