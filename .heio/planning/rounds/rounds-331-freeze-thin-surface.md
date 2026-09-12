---
id: "rounds-331-freeze-thin-surface"
title: "Freeze Thin surface"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T05:19:12Z"
updated_at: "2026-09-12T05:19:12Z"
---

# Freeze Thin surface

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN Thin surface under [[location-41-renderer-portability]]. Sprint `framework-in-draconic` may freeze. Do not rewrite [[location-41-renderer-portability]]. Do not restage `renderer-portability.wrong-target:hard-error` or `tests/renderer-portability/portable-wrong-target.test.mjs`. Do not freeze Native path, Web path, Wrong-target hard-error, or Portable Program.

## Vault pack

Query: Thin surface: the API is a thin Draconic surface between portable UI code and a host
Area: renderer-portability

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-41-renderer-portability.md`
- `.heio/planning/sprints/framework-in-draconic/shape.md`
- `docs/specs/ui-framework/renderer-portability/purpose.md`
- `docs/specs/ui-framework/renderer-portability/contract.md`
- `docs/overview/glossary.md`
- `docs/architecture/architecture-layer-cake.md`

Related:

- `.heio/planning/locations/location-18-native-engine-desktop.md`
- `.heio/planning/locations/location-35-host-config.md`
- `docs/specs/ui-framework/host-config/purpose.md`
- `docs/specs/ui-framework/portability-metal/purpose.md`
- `docs/overview/overview-ui-framework.md`

Excluded: no packer; no blocking slice; scribble; archive; ADRs none; renderer-portability test.md; native extern-C path; sibling sprint slices

Next: freeze one Thin surface slice. Do not write `docs/specs/`.

No packer script exists. Assembled by hand. Open product questions are none.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-41-renderer-portability]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether the renderer-portability spec folder already covers this grain.
4. **Repeat**: Whether wrong-target or other portability oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Thin surface. Done: the API is a thin Draconic surface between portable UI code and a host. Try a thin surface. Pivot if it becomes Host I/O as a browser. A portable Program compiles against `h` and `text` from `dragonflame-ui/portable`. `compile` is test harness, not a product export.
2. **Named set**: Locked [[intent]] Framework library is Draconic. [[glossary]] Renderer portability API is a thin Draconic surface between portable UI code and a host. [[architecture-layer-cake]] portable UI imports this API, not Metal or `document`. Locked [[contract-renderer-portability]] `renderer-portability.surface:thin`. Smallest reversible defaults: no public `compile` helper, no Host I/O as a browser, no public `render` on this specifier, CHECK lives in `tests/renderer-portability/portable-import.test.mjs`. All tasks `mode: afk`.
3. **Ladder**: Exists at `docs/specs/ui-framework/renderer-portability/`. Open product questions none. This grain is already locked as `renderer-portability.surface:thin` with named test `portable Program compiles against the portability API`. First drain does not add a promise id and does not write a new spec folder. This sitting does not write `docs/specs/`.
4. **Repeat**: Do not restage `renderer-portability.wrong-target:hard-error`. Do not point CHECK at `tests/renderer-portability/portable-wrong-target.test.mjs`. Do not restage asserted `renderer-portability.web:js-only-dom`, `renderer-portability.host-io:forbid-browser`, or `renderer-portability.program:forbid-os`.
5. **Wait**: Native path. Web path. Wrong-target hard-error. Portable Program. Host I/O as a browser. Platform channels or JSI. Implementing the compiler. A public `compile` product API.

### Candidate A

Location-named surface. One portable import. Compile-against.

#### Problem

A portable Program has to describe UI once and compile against a host without talking to Metal or `document`. The named object is already the Renderer portability API in [[glossary]], [[location-41-renderer-portability]], [[purpose-renderer-portability]], and [[architecture-layer-cake]]: a thin Draconic surface between portable UI code and a host. This grain only locks `renderer-portability.surface:thin`. The non-obvious constraint is keeping that surface a compile-against import, not a browser or OS facade. The location bet is try a thin surface and pivot if it becomes Host I/O as a browser. Wrong-target hard-error, JS-only DOM, and native `extern "C"` stay off this sitting.

#### Usage

Portable UI imports the Renderer portability API as `dragonflame-ui/portable`. Callers write ordinary components with `h` and `text`. They do not import a host, `document`, or Metal. The locked prove is `tests/renderer-portability/portable-import.test.mjs`: a Program that imports that module compiles, and `h(text, { text: "0" })` is a tree the Program can return. `compile` is the oracle helper, not something portable UI code calls to paint.

#### Shape

One public module is the boundary. Data on the caller side is a portable Program plus a hyperscript tree. Data behind the module is the host. Flow is import, then return a tree, then compile against that API. Host identity, DOM writes, engine draw lists, and `extern "C"` stay inside later grains. The surface is deep by hiding host choice behind a small import. The interface is no larger than the locked prove: `h` and `text` from `dragonflame-ui/portable`. Do not grow it with `document`, Metal, HostConfig, JSI, or a public `compile` product API.

#### Red flags

A pass-through `document.createElement` surface would be Host I/O as a browser, the named pivot. Re-exporting DOM, Metal, JSI, or HostConfig would leak host types. Splitting public Import, Bind, and Mount stages would be temporal decomposition. A barrel that re-exports the whole framework without hiding host policy would be shallow.

#### Next implementation step

Keep a portable Program compiling against `h` and `text` from `dragonflame-ui/portable` as the thin-surface prove. Do not add host types to that import.

### Candidate B

Ownership cut. Same destination. Hide the barrel.

#### Problem

This grain is the thin Draconic surface between portable UI and a host, already named on [[location-41-renderer-portability]] and locked as `renderer-portability.surface:thin`. The non-obvious cut is ownership. Today's `src/portability/surface.js` re-exports the framework barrel and a `compile` helper, which is a pass-through, not a seam. The destination still requires portable UI to import this surface, not Metal or `document`. This sitting does not freeze wrong-target hard-error, the web JS-only DOM prove, or native `extern "C"`. The bet is a thin surface. Pivot if it becomes Host I/O as a browser.

#### Usage

A portable Program's host contact is one Draconic module: the Renderer portability API. Callers import hyperscript `h` and closed host leaves from that module, write a component, and compile against it. They do not import `render`, `compile`, Signal, Owner, Clock, StyleSheet, Host I/O, JSI, or platform channels from this seam. Framework runtime stays on the framework library. Host mounting stays behind the seam. `compile` is test harness, not a product export.

#### Shape

Data is a hyperscript tree whose node types are the portability module's host-agnostic leaves, not DOM nodes and not engine objects. A Program imports that module, returns a tree, and a private host adapter mounts it. This sitting does not name that adapter's web or native form. The specifier is the surface. It is not a second copy of `dragonflame-ui` and not `src/index.js` minus `render`. This module owns portable host contact. Host mapping is hidden. Framework runtime is not this seam. Encoded in the import: a Program that only uses this module cannot name a host. The interface stays small: `h` and host-agnostic leaves.

#### Red flags

A shallow module would make callers coordinate `render`, host config, and leaves to reach a host. Leakage would re-export DOM renderer types, HostConfig, `document`, or framework runtime. Temporal decomposition would split define-leaves-then-gate-imports. A forwarding barrel that re-exports the framework catalog is the current pass-through and is rejected.

#### Next implementation step

Give the portability module its own `h` and `text` as the Program-facing seam so the existing compile-against oracle passes without publishing `compile`, `render`, or host types.

## Synthesis

Base is Candidate B. Graft from A: Done quotes the [[location-41-renderer-portability]] Thin surface destination. Ladder already locks `renderer-portability.surface:thin`. CHECK lives in `tests/renderer-portability/portable-import.test.mjs` and fails if this checkout grows a public `compile` helper, a public `render` on that specifier, Host I/O as a browser, or Metal or `document` on the portable import. No public compile helper.

Reject A as the slice shape: treating `compile` as a product export, or leaving the portable module a framework barrel, is a pass-through.

Tradeoffs accepted:

- We accept no public `compile` helper in exchange for hiding host mapping behind the specifier.
- We accept keeping the existing renderer-portability ladder in exchange for not writing a new spec folder.
- We accept not restaging wrong-target in exchange for a thin-surface prove that is not a pass-through barrel.

Alternatives considered:

- Public `compile`, `render`, or Host I/O as a browser: shallow leakage, lost.
- Slice CHECK is `tests/renderer-portability/portable-wrong-target.test.mjs`: restage, lost.
- Re-export Owner, Signal, Clock, and StyleSheet from the portable specifier: barrel pass-through, lost.
- Freeze Wrong-target hard-error or Web path in this sitting: different grain, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-41-renderer-portability]], [[purpose-renderer-portability]], [[intent]], and [[architecture-layer-cake]].

Next implementation step: red-green `tests/renderer-portability/portable-import.test.mjs` so a portable Program compiles against `h` and `text` without a product `compile` export.

### Tracer bullets

1. Red `tests/renderer-portability/portable-import.test.mjs` so a portable Program compiles against `h` and `text` from `dragonflame-ui/portable` without importing `compile` from that module. blocked_by: none. AFK. Do not write a new spec folder. Do not add a promise id. Do not restage locked wrong-target. Named test: portable Program compiles against the portability API. Fail if this checkout grows a public `compile` helper, a public `render` on that specifier, Host I/O as a browser, or Metal or `document` on the portable import.
2. Green the thin surface so that CHECK passes. blocked_by: the red task. AFK. Public names are `h` and host-agnostic leaves. `compile` is test harness. Do not point CHECK at `tests/renderer-portability/portable-wrong-target.test.mjs`. Do not restage wrong-target, web JS-only DOM, or native `extern "C"`. Do not freeze Native path, Web path, or Wrong-target hard-error.

## Confirm

Confirmed.
