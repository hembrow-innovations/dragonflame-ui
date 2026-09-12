---
id: "rounds-339-freeze-web-path"
title: "Freeze Web path"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T05:47:51Z"
updated_at: "2026-09-12T05:47:51Z"
---

# Freeze Web path

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN Web path under [[location-41-renderer-portability]]. Sprint `framework-in-draconic` may freeze. Do not rewrite [[location-41-renderer-portability]]. Do not restage `renderer-portability.surface:thin`, `renderer-portability.native:extern-c-unboxed`, or `dom-only-host.bindings:js-only`. Do not freeze Wrong-target hard-error, Portable Program, or [[location-28-dom-renderer]] nested grains.

## Vault pack

Query: Web path: the web path uses JS-only DOM bindings
Area: renderer-portability

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-41-renderer-portability.md`
- `.heio/planning/sprints/framework-in-draconic/shape.md`
- `.heio/planning/locations/location-28-dom-renderer.md`
- `docs/specs/ui-framework/renderer-portability/purpose.md`
- `docs/specs/ui-framework/renderer-portability/contract.md`
- `docs/specs/ui-framework/dom-only-host/purpose.md`
- `docs/specs/ui-framework/dom-only-host/contract.md`
- `docs/specs/ui-framework/host-config/purpose.md`
- `docs/specs/ui-framework/host-config/contract.md`
- `docs/overview/glossary.md`
- `docs/architecture/architecture-layer-cake.md`

Related:

- `.heio/planning/locations/location-18-native-engine-desktop.md`
- `.heio/planning/locations/location-35-host-config.md`
- `.heio/planning/locations/location-30-js-backend.md`
- `docs/overview/overview-ui-framework.md`

Excluded: no packer; no blocking slice; scribble; archive; ADRs none; test.md; native path; wrong-target; Portable Program; sibling sprint slices including frozen slice-332-thin-surface and slice-336-native-path; dom-patch; portability-metal

Next: freeze one Web path slice. Do not write `docs/specs/`.

No packer script exists. Assembled by hand. Open product questions are none.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-41-renderer-portability]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether the renderer-portability spec folder already covers this grain.
4. **Repeat**: Whether JS-only bindings, thin-surface, or native-path oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Web path. Done: the web path uses JS-only DOM bindings. Try JS-only DOM bindings. Pivot if a DOM is put into Host I/O. Portable Programs still import `h` and `text` from `dragonflame-ui/portable`. Web host mapping stays behind that specifier.
2. **Named set**: Locked [[intent]] Web is JS backend, no WASM. [[glossary]] Renderer portability API web path uses JS-only DOM bindings. [[architecture-layer-cake]] web path talks to the DOM through JS-only bindings. [[purpose-renderer-portability]] already lists Web path in scope. [[contract-renderer-portability]] already asserts `renderer-portability.web:js-only-dom` with no test pointer. Smallest reversible defaults: no public `document`, `createElement`, or DOM types on `dragonflame-ui/portable`, no Host I/O as a browser, CHECK lives in `tests/renderer-portability/web-path.test.mjs`, first drain points `renderer-portability.web:js-only-dom` at that named test. All tasks `mode: afk`.
3. **Ladder**: Exists at `docs/specs/ui-framework/renderer-portability/`. Open product questions none. Web path is already in scope. First drain locks the asserted promise. Do not mint a new spec folder. This sitting does not write `docs/specs/`.
4. **Repeat**: Do not restage `renderer-portability.surface:thin` or [[slice-332-thin-surface]]. Do not restage `renderer-portability.native:extern-c-unboxed` or [[slice-336-native-path]]. Do not restage `dom-only-host.bindings:js-only` or `tests/dom-only-host/no-host-io-dom.test.mjs`. Do not point CHECK at `tests/renderer-portability/portable-import.test.mjs` or `tests/renderer-portability/native-path.test.mjs`.
5. **Wait**: Wrong-target hard-error. Portable Program. [[location-28-dom-renderer]] nested grains. A public Host type, canvas switch, or paint API. A public `compile` helper. Host I/O as a browser. Implementing the compiler. A second IR.

### Candidate A

Location-named surface. Web path is target policy of the same import.

#### Problem

Portable UI already compiles against one thin Draconic import, locked as `renderer-portability.surface:thin` on [[contract-renderer-portability]] and frozen by [[slice-332-thin-surface]]. Native path is a sibling frozen grain ([[slice-336-native-path]]). This grain is the nested Web path on [[location-41-renderer-portability]]: that same Renderer portability API talks to the DOM through JS-only bindings. See also [[location-28-dom-renderer]], [[glossary]], [[architecture-layer-cake]], and [[intent]]. The sentence is already asserted as `renderer-portability.web:js-only-dom` with no test pointer. The non-obvious cut is host-contact policy on this API, not a public DOM facade and not restaging `dom-only-host.bindings:js-only`. Bet: try JS-only DOM bindings. Pivot if a DOM is put into Host I/O. Do not rewrite the parent destination.

#### Usage

A portable Program still imports `h` and `text` from `dragonflame-ui/portable` and returns a tree, same as `tests/renderer-portability/portable-import.test.mjs`. Callers do not import `document`, Metal, Host I/O, a public Host type, or a canvas switch. Web compile of that Program talks to the DOM through JS-only bindings behind the import. `compile` stays test harness, not a product export. There is no public `render` on this specifier. CHECK lives under `tests/renderer-portability/`, not `tests/dom-only-host/no-host-io-dom.test.mjs` and not `tests/renderer-portability/portable-wrong-target.test.mjs`.

#### Shape

One public module remains the Renderer portability API. Web path is target policy of that module, not a new specifier and not DOM types on the barrel. Caller data is a Program plus a hyperscript tree. Behind the module, web host contact is JS-only DOM bindings. Web DOM is the only web host. Create-and-patch, only-web-host, no WASM web, and browser paint stay on [[purpose-dom-only-host]] and [[location-28-dom-renderer]]. Wrong-target and Portable Program stay off this sitting. Thin surface and native path stay frozen. First drain may point `renderer-portability.web:js-only-dom` at a named test and keep `renderer-portability.host-io:forbid-browser` as the pivot. Do not mint a spec folder. Do not mint a public Host type, canvas switch, or paint API. The surface is deep by hiding DOM writes, JS emit, and host choice. The interface stays `h` and `text`. No public `document`, Host I/O as a browser, JSI, platform channels, or compile helper.

#### Red flags

Exporting `document`, `createElement`, or DOM node types on `dragonflame-ui/portable` would leak the browser and become Host I/O as a browser, the named pivot. A pass-through wrapper of document APIs adds a layer with no policy. Public bind-then-mount-then-patch stages would be temporal decomposition. Making callers coordinate `h`, HostConfig, and `document` would be shallow. Putting a DOM into Host I/O is the named pivot. Restaging `dom-only-host.bindings:js-only` or `tests/dom-only-host/no-host-io-dom.test.mjs` would steal the sibling honesty prove.

#### Next implementation step

Point `renderer-portability.web:js-only-dom` at a red test under `tests/renderer-portability/` that the portable import's web path uses JS-only DOM bindings.

### Candidate B

Ownership cut. Same destination. Hide JS-only DOM contact inside the renderer package.

#### Problem

The Web path grain under [[location-41-renderer-portability]] is working when that path uses JS-only DOM bindings. See [[location-28-dom-renderer]]. Portable UI already compiles against one thin import, locked as `renderer-portability.surface:thin` and frozen by [[slice-332-thin-surface]]. Native FFI already stays behind that specifier in [[slice-336-native-path]]. If `dragonflame-ui/portable` grows `document`, `createElement`, or a public bindings object, callers learn the browser and the thin surface becomes a pass-through, the Host I/O as a browser pivot named in [[glossary]] and [[purpose-renderer-portability]]. [[intent]] says Web is JS backend, no WASM. [[architecture-layer-cake]] already says the web path talks to the DOM through JS-only bindings. That mapping belongs behind the surface, owned by the renderer package, not by leaves and not as a runtime adapter. This sitting does not restage thin surface, native path, wrong-target, or `tests/dom-only-host/no-host-io-dom.test.mjs`. It does not freeze Wrong-target hard-error or Portable Program.

#### Usage

A portable Program still imports `h` and `text` from `dragonflame-ui/portable` and returns a hyperscript tree. Web callers do the same. They do not import `document`, `createElement`, a bindings object, Host, HostConfig, canvas, JSI, a public `compile` helper, or a public `render` from that specifier. Behind it, a private compile-time web-only module in the renderer package talks to the DOM through JS-only bindings. Leaves stay host-agnostic names. `compile` stays test harness.

#### Shape

One public module remains the Program-facing seam: `dragonflame-ui/portable`. Data on the caller side is a portable Program plus a hyperscript tree of host-agnostic leaves. Data behind the module on web is JS-only DOM contact owned entirely inside `src/renderer/`, not on `src/leaves/` and not as an injected adapter object. Flow is import, return a tree, private renderer mapping. This grain owns the fact that the portability API's web path uses that mapping privately. Encoded in the import: a Program that only uses this module cannot name `document`, a DOM node, Host I/O, or a bindings table. First drain may lock `renderer-portability.web:js-only-dom` on the existing ladder in `docs/specs/ui-framework/renderer-portability/`. Do not mint a new spec folder. Do not mint a public Host type, canvas switch, or paint API. The interface stays `h` and host-agnostic leaves. Depth is hiding `document`, tag mapping, and JS-backend host contact behind that import.

#### Red flags

Exporting `document`, `createElement`, or a bindings object from `dragonflame-ui/portable` is leakage and the named pivot. A pass-through that re-exports the renderer’s DOM calls as Host I/O adds a layer without policy. Public Bind then Mount then Patch stages are temporal decomposition. Callers coordinating `h`, a bindings object, and `createElement` to mount is a shallow module. Restaging `tests/dom-only-host/no-host-io-dom.test.mjs`, `tests/renderer-portability/portable-import.test.mjs`, or growing HostConfig, canvas, JSI, or a public `compile` helper is out.

#### Next implementation step

Extend the existing renderer-portability ladder so a web-target Program still compiles against `h` and `text` from `dragonflame-ui/portable` while only the renderer package talks to the DOM through JS-only bindings, without exporting those bindings.

## Synthesis

Base is Candidate B. Graft from A: Done quotes the [[location-41-renderer-portability]] Web path destination. First drain points `renderer-portability.web:js-only-dom` at a named test. CHECK lives in `tests/renderer-portability/web-path.test.mjs` and fails if this checkout exports `document`, `createElement`, DOM types, or puts a DOM into Host I/O from `dragonflame-ui/portable`.

Reject A as the slice shape: treating DOM bindings as the portable import is leakage and would restage Host I/O as a browser.

Tradeoffs accepted:

- We accept locking the existing renderer-portability ladder in exchange for not minting a new spec folder.
- We accept not restaging `dom-only-host.bindings:js-only` in exchange for a portability web-path prove.
- We accept no public DOM types on `dragonflame-ui/portable` in exchange for hiding host mapping behind the specifier.

Alternatives considered:

- Export `document`, `createElement`, or a bindings object from the portable specifier: leakage, lost.
- Slice CHECK is `tests/dom-only-host/no-host-io-dom.test.mjs`: restage, lost.
- Put a DOM into Host I/O: named pivot, lost.
- Freeze Wrong-target hard-error, Portable Program, or location-28 nested grains in this sitting: different grain, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-41-renderer-portability]], [[purpose-renderer-portability]], [[intent]], and [[architecture-layer-cake]]. Web path is already in scope. First drain only adds the test pointer.

Next implementation step: lock `renderer-portability.web:js-only-dom` on the existing ladder, then red-green `tests/renderer-portability/web-path.test.mjs` so the portable import's web path uses JS-only DOM bindings without exporting those bindings.

### Tracer bullets

1. Point `renderer-portability.web:js-only-dom` at a named test in `docs/specs/ui-framework/renderer-portability/`. blocked_by: none. AFK. Do not write a new spec folder. Do not restage `renderer-portability.surface:thin`, `renderer-portability.native:extern-c-unboxed`, or `dom-only-host.bindings:js-only`. Named test: web path uses JS-only DOM bindings.
2. Red-green `tests/renderer-portability/web-path.test.mjs` so a web-target Program still compiles against `h` and `text` from `dragonflame-ui/portable` while the private renderer mapping talks to the DOM through JS-only bindings. blocked_by: the spec task. AFK. Do not export `document`, `createElement`, or DOM types from that specifier. Do not point CHECK at `tests/dom-only-host/no-host-io-dom.test.mjs`, `tests/renderer-portability/portable-import.test.mjs`, or `tests/renderer-portability/native-path.test.mjs`. Do not freeze Wrong-target hard-error, Portable Program, or location-28 nested grains.

## Confirm

Confirmed.
