---
id: "rounds-156-portability-metal-honesty"
title: "Portability metal honesty"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan, design-tree]
created_at: "2026-09-10T14:30:00Z"
updated_at: "2026-09-10T14:30:00Z"
---

# Portability metal honesty

Counterpart is the product peer. Notebook is this round.

Pick: [[location-41-renderer-portability]]. Nested Metal-import honesty. Thin surface, wrong-target hard-error, and `document` import are named by [[slice-75-portable-web-import]]. JS-only DOM and no DOM in Host I/O are named by [[slice-121-dom-only-web-host]]. Remaining unnamed nested bet: a portable Program cannot import Metal. Native `extern "C"` stays behind [[ticket-61-native-ui-unfunded]]. [[location-60-animation-clocks]] remaining grain is native embedder vsync, unfunded. [[location-17-web-component-library]] is funded. Sprint [[web-tracers]] may freeze. Open tickets are parked. Native and mobile sprints say do not freeze. [[location-20-authoring-sugar]] is unlinked but already covered by [[slice-85-first-version-without-sugar]]. [[location-21-git-package]] through [[location-35-host-config]] honesty grain is already named.

## Vault pack

Query: portable Program cannot import Metal; thin surface not Metal or document

Area: ui-framework

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-41-renderer-portability.md`
- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/sprints/web-tracers/shape.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`
- `docs/specs/ui-framework/renderer-portability/purpose.md`
- `docs/specs/ui-framework/renderer-portability/contract.md`
- `docs/specs/ui-framework/renderer-portability/test.md`

Related:

- `.heio/planning/sprints/web-tracers/slice-75-portable-web-import.md`
- `.heio/planning/sprints/web-tracers/slice-121-dom-only-web-host.md`
- `.heio/planning/sprints/web-tracers/slice-153-host-config-honesty.md`
- `.heio/planning/locations/location-35-host-config.md`
- `.heio/planning/tickets/ticket-61-native-ui-unfunded.md`
- `docs/specs/ui-framework/leaf-kit/purpose.md`

Excluded: native extern C, parked tickets as freeze targets, scribble.

Next: freeze one web-tracers slice for Metal-import honesty. Do not write `docs/specs/`; drain writes the ladder.

No packer script exists. Assembled by hand. Open product questions on the overview and the matching purpose files are empty.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-41-renderer-portability]] is still unnamed by a slice.
2. **Metal**: Whether forbidding a Metal import belongs here.
3. **Document**: Whether this slice repeats the `document` hard-error.
4. **OS talk**: Whether forbidding portable code talking to the OS beyond Metal folds in.
5. **Native path**: Whether `extern "C"` and unboxed numbers fold in.
6. **Public Metal**: Whether callers get a Metal or GPU export.
7. **Named oracles**: Whether this slice repeats thin-surface, document, Host I/O, or JSI proofs.

### Answers

1. **Next grain**: A portable Program cannot import Metal. Thin surface, `document` hard-error, and wrong-target as not a runtime no-op already have oracles on [[slice-75-portable-web-import]]. Renderer-portability tests name a Metal gap. Native `extern "C"` stays unfunded.
2. **Metal**: Fold in. Location-41 destination and nested Portable Program name Metal beside `document`. Architecture says a portable Program cannot import Metal. Do not add Metal bindings.
3. **Document**: Out. [[slice-75-portable-web-import]] already hard-errors `document` import. Do not repeat those oracles.
4. **OS talk**: Out as a new API. The named instance is Metal. Do not invent fs, process, or Vulkan oracles.
5. **Native path**: Out. [[ticket-61-native-ui-unfunded]] is parked. Do not invent `extern "C"` or unboxed FFI oracles here.
6. **Public Metal**: None. Callers keep the thin surface. A public `Metal` or GPU handle would leak the engine.
7. **Named oracles**: Do not repeat. [[slice-75-portable-web-import]] already covers thin surface and `document`. [[slice-121-dom-only-web-host]] already covers no DOM in Host I/O. [[slice-153-host-config-honesty]] already covers no JSI as host config.

### Candidate A

Absence oracles. No new public API.

#### Problem

The package already compiles portable UI against a thin surface and hard-errors `document`. Nested honesty is unnamed: Metal import. [[slice-75-portable-web-import]] names the surface. It does not lock the Metal half of the wrong-target promise.

#### Usage (caller's view)

```js
import { h, view, text, compile } from "dragonflame-ui/portable";

function App() {
	return h(view, {}, [h(text, { text: "hi" })]);
}

compile(`import { h } from "dragonflame-ui/portable";`);
```

Callers do not import Metal. They do not construct a GPU handle.

#### Shape

Public surface stays the thin portable import. Honesty lives in tests that fail if this checkout lets a portable Program import Metal. Complexity hidden: wrong-target policy stays behind `compile`. Invariants: no public `Metal`; Metal import hard-errors; not a runtime no-op.

#### Red flags

- **Shallow**: avoided. Callers still import the thin surface. Metal policy stays behind tests.
- **Leakage**: avoided if tests do not export Metal or GPU types.
- **Temporal**: one wrong-target rule, not compile-then-bind-Metal stages.
- **Pass-through**: a public `Metal` that only forwards engine calls would be a pass-through. Do not add it.

#### Next implementation step

Spec ladder, then red-green absence tests for Metal import.

### Candidate B

Public Metal surface. Callers import Metal so portable code can talk to the GPU.

#### Problem

Same destinations, but Candidate A never shows how a GPU API enters portable UI. Candidate B would export `Metal` or a GPU handle.

#### Usage (caller's view)

```js
import { h, view, text, Metal } from "dragonflame-ui/portable";

Metal.draw(h(view, {}, [h(text, { text: "hi" })]));
```

A later call could import Metal from app code so both hosts share a GPU API.

#### Shape

A public `Metal` export. Callers coordinate GPU calls. Interface grows by an engine backend the web package does not need. The portability API becomes Metal.

#### Red flags

- **Shallow**: callers pick Metal versus the thin surface to complete drawing the kit already did.
- **Leakage**: Metal and GPU types leak into app code.
- **Temporal**: import Metal, bind a device, then mount, as public stages.
- **Pass-through**: `Metal.draw` forwards engine calls `compile` should not expose.

#### Next implementation step

Add public `Metal`. Invents API. Contradicts portable-Program-not-Metal and the thin-surface destination.

## Synthesis

Base is Candidate A. Graft from B nothing. Reject B as the slice shape: it invents Metal host wiring and rewrites the portable-Program destination.

Tradeoffs accepted:

- We accept absence oracles in exchange for no public `Metal`.
- We accept not repeating document, thin-surface, Host I/O, or JSI oracles in exchange for Metal-import absence checks.
- We accept leaving native `extern "C"` out in exchange for not inventing FFI oracles while native is unfunded.
- We accept a new spec folder in exchange for not patching frozen [[slice-75-portable-web-import]] oracles.

Alternatives considered:

- Public `Metal` plus GPU handle: leaks engine types and rewrites the portable-Program destination, lost.
- Folding these oracles into [[slice-75-portable-web-import]]: that slice is frozen as `document` hard-error plus thin surface, lost.
- Folding Metal into [[slice-121-dom-only-web-host]] Host I/O oracles: that slice already covers DOM in Host I/O, not Metal import, lost.
- Freezing native `extern "C"` here: would rewrite native destinations while native is unfunded, lost.

Open questions and risks:

- None the product peer cannot answer from location destinations and `docs/`. Native FFI stays out.

Next implementation step: write purpose, contract, and test for Metal-import honesty, then red-green absence tests.

### Tracer bullets

1. Spec ladder for Metal-import honesty. blocked_by: none. AFK. Purpose, contract, and test only. No product code.
2. Red-green Metal-import honesty. blocked_by: spec. AFK. Tests fail if this checkout lets a portable Program import Metal.

## Confirm

Confirmed.

Destination: [[location-41-renderer-portability]] nested a portable Program cannot import Metal. Not a rewrite of the parent sentence.

Slice Done: tests fail if this checkout lets a portable Program import Metal. No public Metal.

Prefer AFK. Prefactoring is not required. First task is the spec ladder.
