---
id: "rounds-111-js-backend-honesty"
title: "JS backend honesty"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan, design-tree]
created_at: "2026-09-10T08:50:00Z"
updated_at: "2026-09-10T08:50:00Z"
---

# JS backend honesty

Counterpart is the product peer. Notebook is this round.

Pick: [[location-30-js-backend]]. Lowest active location no slice See also links. Parent [[location-17-web-component-library]] is funded. Sprint [[web-tracers]] may freeze. [[location-20-authoring-sugar]] is unlinked but already covered by [[slice-85-first-version-without-sugar]]. Native and mobile sprints say do not freeze.

## Vault pack

Query: JS backend honesty, compile-time split, no eval, not RN-but-bytecode
Area: ui-framework

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-30-js-backend.md`
- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/locations/location-35-host-config.md`
- `.heio/planning/sprints/web-tracers/shape.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`
- `docs/specs/ui-framework/absence/purpose.md`
- `docs/specs/ui-framework/renderer-portability/purpose.md`
- `docs/specs/ui-framework/git-package/purpose.md`

Related:

- `.heio/planning/sprints/sugar-later/slice-85-first-version-without-sugar.md`
- `.heio/planning/sprints/web-tracers/slice-75-portable-web-import.md`
- `.heio/planning/tickets/ticket-65-first-tests-unnamed.md`

Excluded: native locations, parked funding tickets, scribble.

Next: freeze one web-tracers slice for JS backend honesty. Do not write `docs/specs/`; drain writes the ladder.

No packer script exists. Assembled by hand. Open product questions on the overview and the matching purpose files are empty.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-30-js-backend]] is still unnamed by a slice.
2. **Browser APIs**: Whether this slice names the browser API set.
3. **Compile-time split**: How platform split is proven without a native host.
4. **Eval and bytecode**: What false paths this slice locks out.
5. **Emit home**: Whether this repo may copy JS emit from the sibling toolchain.

### Answers

1. **Next grain**: Honesty nested under [[location-30-js-backend]]: compile-time split, not RN-but-bytecode, no eval, Phase 0 assumed. The destination sentence is already true as a running package. Remaining grain is the nested bets. [[slice-85-first-version-without-sugar]] already covers no TypeScript emit, no IR fork, and no bytecode VM. This slice does not repeat those oracles.
2. **Browser APIs**: Do not name them. [[ticket-65-first-tests-unnamed]] stays parked. Demo slices own their cases. Smallest reversible default from the location: the source does not name the API set.
3. **Compile-time split**: Absence of a runtime JS bundle with dead native stubs. Native is unfunded, so do not add a native entry or empty stub. Web package stays web-only. Matches [[location-35-host-config]] compile-time platform nested grain without inventing export maps.
4. **Eval and bytecode**: Lock `eval` is not a mini-Hermes and screens are not eval'd from strings. Lock the false path: JS thread plus shadow thread plus UI thread plus Draconic interpreter plus bridge. IR is not bytecode. Runtime is not a VM. Bytecode-VM filename oracles stay on [[slice-85-first-version-without-sugar]].
5. **Emit home**: Phase 0 is already true in the sibling toolchain. This repo does not rebuild JS emit. Do not invent flags for the sibling JS backend.

### Candidate A

Absence oracles. No new public API.

#### Problem

The package already runs on the JS backend plus browser APIs. Nested honesty is unnamed: eval screens, dead native stubs, copied emit, RN-but-bytecode architecture. [[slice-85-first-version-without-sugar]] does not lock eval or stubs. Naming browser APIs would invent product rules.

#### Usage (caller's view)

```js
import { h, render, view, text } from "dragonflame-ui";

function App() {
	return h(view, { children: h(text, { text: "hi" }) });
}

render(App, parent);
```

Callers keep the existing import. They do not call `eval` to load a screen. They do not import a native stub from the web package. They do not compile this library with an emit tree that lives in this checkout.

#### Shape

Public surface stays `h`, `render`, and the closed leaf kit. Honesty lives in tests that fail if this checkout embeds `eval` as a screen loader, ships dead native stubs in the web package, copies JS emit from the sibling toolchain, or introduces a JS plus shadow plus interpreter plus bridge architecture. Complexity hidden: how the sibling JS backend emits. Callers do not import a platform module. Invariants: web package is web-only while native is unfunded; emit stays in `/Users/jaredhembrow/workbench/draconic`; screens are modules, not eval strings.

#### Red flags

- **Shallow**: avoided. Callers still call `h` and `render`. Tests hide the scan policy.
- **Leakage**: avoided if tests do not name a browser API set and do not re-export toolchain types.
- **Temporal**: one honesty module of tests, not a public load-then-validate-then-emit pipeline.
- **Pass-through**: a public `assertHonest()` that only forwards to tests would be a pass-through. Do not add it.

#### Next implementation step

Spec ladder, then red-green absence tests for eval, dead native stubs, and emit copied into this repo.

### Candidate B

Dual compile-time entry points plus a public platform module.

#### Problem

Same destinations, but [[location-35-host-config]] wants platform as a compile-time split. Candidate A never shows a split surface. Candidate B would add `dragonflame-ui/web` and a platform module so callers import the host at compile time.

#### Usage (caller's view)

```js
import { h, render, view, text } from "dragonflame-ui/web";
import { platform } from "dragonflame-ui";

function App() {
	return h(view, { children: h(text, { text: platform.id }) });
}

render(App, parent);
```

A native entry would hard-error until funded, or exist as an empty module.

#### Shape

Two package entries. `platform` is a compile-time binding. Web entry talks DOM. Native entry is missing or a stub. Interface depth looks higher, but the public surface grows by an entry map and a platform id that docs never named. Native stub is the false path this location forbids.

#### Red flags

- **Leakage**: platform id and export map would leak a host decision into every caller.
- **Temporal**: web-entry then native-entry as two public stages repeats one library.
- **Shallow**: `platform.id` teaches callers an extra type they do not need for the demo.
- **Pass-through**: native entry that only throws or no-ops is a dead stub.

#### Next implementation step

Add package exports and a platform module before honesty tests. Invents API. Risks empty native stubs.

## Synthesis

Base is Candidate A. Graft from B the rule that platform is compile-time, proven as the absence of dead native stubs, without a public platform module or a second entry. Reject B as the slice shape: it invents export maps, and a native entry while unfunded is the stub this location forbids.

Tradeoffs accepted:

- We accept absence oracles in exchange for not inventing a platform API.
- We accept web-only package while native is unfunded in exchange for no dead stubs.
- We accept not naming the browser API set in exchange for leaving [[ticket-65-first-tests-unnamed]] parked.

Alternatives considered:

- Dual package entries: invents API and risks stubs, lost.
- Invoking the sibling compiler from this repo: copies Phase 0 emit, lost.
- Naming the browser API set: location says unnamed, lost.

Open questions and risks:

- None the product peer cannot answer from location destinations and `docs/`. Browser API names stay unnamed.

Next implementation step: write purpose, contract, and test for JS backend honesty, then red-green absence tests.

### Tracer bullets

1. Spec ladder for JS backend honesty. blocked_by: none. AFK. Purpose, contract, and test only. No product code.
2. Red-green absence tests. blocked_by: spec. AFK. Tests fail if eval screens, dead native stubs, or JS emit copied into this checkout appear. Do not repeat slice-85 bytecode-VM oracles.

## Confirm

Confirmed.

Destination: [[location-30-js-backend]] nested honesty, not a rewrite of the parent sentence.

Slice Done: tests fail if this checkout embeds eval as a screen loader, ships dead native stubs in the web package, or copies JS emit from the sibling toolchain. Not RN-but-bytecode. Browser APIs stay unnamed.

Prefer AFK. Prefactoring is not required. First task is the spec ladder.
