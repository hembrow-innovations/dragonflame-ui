---
id: "rounds-310-freeze-js-backend"
title: "Freeze JS backend"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T14:00:00Z"
updated_at: "2026-09-12T14:00:00Z"
---

# Freeze JS backend

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN JS backend under [[location-30-js-backend]]. Sprint `framework-in-draconic` may freeze. Do not rewrite [[location-30-js-backend]]. Do not restage [[slice-283-draconic-framework-source]] or locked [[contract-js-backend]] honesty oracles. Do not freeze Browser APIs.

## Vault pack

Query: this is working when web compile is Frontend to shared IR to the JS backend, and the browser runs that JavaScript.
Area: ui-framework/js-backend

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-30-js-backend.md`
- `.heio/planning/sprints/framework-in-draconic/shape.md`
- `docs/specs/ui-framework/js-backend/purpose.md`
- `docs/specs/ui-framework/js-backend/contract.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`

Related:

- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/locations/location-28-dom-renderer.md`
- `.heio/planning/sprints/framework-in-draconic/slice-283-draconic-framework-source.md`
- `docs/specs/ui-framework/js-backend/test.md`
- `docs/overview/glossary.md`

Excluded: scribble; no packer in package.json; no blocking slice; no ADRs; other location-30 nested grains; archived rounds

Next: freeze grain JS backend on location-30-js-backend. Do not write `docs/specs/`; ladder exists.

No packer script exists. Assembled by hand. Open product questions are none.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-30-js-backend]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether the js-backend spec folder already covers this grain.
4. **Repeat**: Whether honesty or framework-source oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze JS backend. Done: web compile is Frontend to shared IR to the JS backend, and the browser runs that JavaScript. Try the existing JS backend. Pivot if this repo emits TypeScript or forks IR. Ownership of Frontend, IR, and JS emit stays in the sibling toolchain. This package does not grow a compile API.
2. **Named set**: Locked [[intent]] Web is JS backend, no WASM, no second IR. [[architecture-layer-cake]] Frontend, one IR, then JS emit or LLVM. [[overview-ui-framework]] web compile is Frontend to shared IR to the JS backend; the browser runs that JavaScript. [[purpose-js-backend]] already includes this grain. Locked [[contract-js-backend]] honesty: `js-backend.eval:no-eval-host`, `js-backend.split:no-native-stubs`, `js-backend.emit:no-emit-here`. Smallest reversible defaults: no public compile helper, no Frontend type, no IR type, no TypeScript emitter in this repo, callers still import dragonflame-ui, CHECK lives in `tests/js-backend/`. All tasks `mode: afk`.
3. **Ladder**: Exists at `docs/specs/ui-framework/js-backend/`. Open product questions none. Missing a locked promise for this grain. First drain task adds `js-backend.path:frontend-ir-js` on that ladder. This sitting does not write `docs/specs/`.
4. **Repeat**: Do not restage `js-backend.eval:no-eval-host`, `js-backend.split:no-native-stubs`, or `js-backend.emit:no-emit-here`. Do not restage [[slice-283-draconic-framework-source]] authored-in-Draconic or sibling-compile CHECKs. Do not restage [[purpose-absence]] TypeScript, IR-fork, or bytecode-VM filename oracles. Do not lock `js-backend.false-path:not-rn-but-bytecode` in this sitting.
5. **Wait**: Browser APIs. Compile-time split. Not RN-but-bytecode. No eval. Phase 0 assumed. A public compile API. Naming the browser API set. Implementing the compiler here. Copying JS emit. JSX.

### Candidate A

Location-named surface. Existing import. No compile module.

#### Problem

This grain is already named on [[location-30-js-backend]]: web compile is Frontend to shared IR to the JS backend, and the browser runs that JavaScript. The bet is try the existing JS backend; pivot if this repo emits TypeScript or forks IR. Callers already import dragonflame-ui. The sibling toolchain already owns Frontend, one IR, then JS emit. [[purpose-js-backend]] already puts this grain in scope. Locked honesty promises prove no eval host, no dead native stubs, and no emit copied here. [[slice-283-draconic-framework-source]] already proves one public export is authored in Draconic and produced by `draconic build --target js`. The non-obvious cut is proving the pipeline identity without owning it.

#### Usage

The consumer never compiles through dragonflame-ui. They keep importing the library and load the shipped JavaScript in a browser. Compile is the sibling CLI, not a package export. App code does not import Frontend, IR, a compile function, or a TypeScript emitter.

#### Shape

Public surface is the existing dragonflame-ui import. Depth comes from hiding the whole web compile path behind it. This repo is an input to that path, not a second compiler. Keep `js-backend.emit:no-emit-here`. Do not grow a compile module, stage types, or pass-through CLI wrapper. A missing positive pointer for this grain may be added on the existing js-backend ladder on first drain.

#### Red flags

A public compile helper, Frontend type, or IR type is leakage and a shallow module. Staging folders named frontend, ir, then js-emit would be temporal decomposition. A function that only forwards to `draconic build --target js` is a pass-through. Restaging honesty oracles or slice 283 would fake progress.

#### Next implementation step

On first drain, add a promise and test pointer on [[contract-js-backend]] and [[test-js-backend]] for this grain only, failing if this checkout grows a compile API or toolchain types.

### Candidate B

Ownership cut. Same destination. Hide the stages.

#### Problem

Locked CHECKs only prove honesty. The destination still says web compile is Frontend to shared IR to the JS backend, and the browser runs that JavaScript. This repo must not own those stages, must not invent a compile API, and must not restage [[slice-283-draconic-framework-source]] or [[purpose-absence]] filename oracles. The cut that is easy to get wrong is proving the grain by naming pipeline stages here, instead of hiding them.

#### Usage

App code keeps the existing import. A browser module script loads that same package as ordinary JavaScript. Tests import the shipped library the same way. They do not import a pipeline helper from this package. README claim: web UI is JavaScript the browser runs, produced by the existing sibling JS backend. This package does not expose how.

#### Shape

Ownership cut, not a pipeline surface. The sibling toolchain owns Frontend, one IR, and JS emit. This repo never exports those stages and never wraps sibling compile. This grain's knowledge is only the consumed web artifact: ordinary JavaScript a browser runs, produced by that existing backend. First drain may add one promise and test pointer on the existing ladder. Depth: one import hides the whole web compile pipeline.

#### Red flags

Exporting Frontend, IR, or a compile function would be a shallow module. Splitting this repo into frontend, then IR, then emit modules would be temporal decomposition. A public wrapper around sibling `draconic build --target js` would be a pass-through. Restaging `tests/framework-source/` or [[purpose-absence]] filename oracles is the wrong owner.

#### Next implementation step

Add one [[test-js-backend]] CHECK that the shipped web entry is ordinary JavaScript a browser runs, and point a new locked promise at it, without new public types.

## Synthesis

Base is Candidate B. Graft from A: Done quotes the [[location-30-js-backend]] JS backend destination. First drain adds `js-backend.path:frontend-ir-js` on the existing js-backend ladder. CHECK lives in `tests/js-backend/` and fails if this checkout grows a compile API or Frontend or IR types. No public compile helper.

Reject A as the slice shape: naming pipeline stages as this package's surface, or pointing CHECK at `tests/framework-source/sibling-compile.test.mjs`, is leakage or a pass-through.

Tradeoffs accepted:

- We accept no public compile API in exchange for hiding Frontend, IR, and JS emit in the sibling toolchain.
- We accept one new promise on the existing js-backend ladder in exchange for not writing a new spec folder in this sitting.
- We accept not restaging no-emit-here or slice-283 in exchange for a positive artifact prove that is not a pass-through.

Alternatives considered:

- Public compile helper or Frontend or IR type: shallow leakage, lost.
- Slice CHECK is `tests/framework-source/sibling-compile.test.mjs`: pass-through, lost.
- Restage [[purpose-absence]] TypeScript or IR-fork filename oracles: wrong owner, lost.
- Freeze Browser APIs in this sitting: different grain, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-30-js-backend]], [[purpose-js-backend]], [[intent]], and [[architecture-layer-cake]].

Next implementation step: assert `js-backend.path:frontend-ir-js` on the existing ladder, then red-green a prove that web compile is Frontend to shared IR to the JS backend and the browser runs that JavaScript.

### Tracer bullets

1. Assert `js-backend.path:frontend-ir-js` on the existing js-backend ladder. blocked_by: none. AFK. Do not write a new spec folder. Do not restage locked honesty promises. Named test: web compile is Frontend to shared IR to the JS backend, and the browser runs that JavaScript. CHECK lives in `tests/js-backend/`. No public compile helper. No Frontend type. No IR type.
2. Red-green that CHECK. blocked_by: the spec task. AFK. Fail if this checkout grows a compile API or Frontend or IR types. Do not point CHECK at `tests/framework-source/sibling-compile.test.mjs`. Do not restage no-eval, no-native-stubs, no-emit-here, or [[purpose-absence]] filename oracles. Do not freeze Browser APIs.

## Confirm

Confirmed.
