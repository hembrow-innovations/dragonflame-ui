---
id: "rounds-351-freeze-browser-apis"
title: "Freeze Browser APIs"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T06:33:10Z"
updated_at: "2026-09-12T06:33:10Z"
---

# Freeze Browser APIs

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN Browser APIs under [[location-30-js-backend]]. Sprint `framework-in-draconic` may freeze. Do not rewrite [[location-30-js-backend]]. Do not restage [[slice-311-js-backend]], [[slice-340-web-path]], or [[slice-348-portable-program]]. Do not restage locked [[contract-js-backend]] honesty oracles. Do not restage `counter.js-backend:unnamed-apis`. Do not freeze Compile-time split, Not RN-but-bytecode, No eval, or Phase 0 assumed.

## Vault pack

Query: this is working when that package uses browser APIs. The source does not name the API set.
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
- `.heio/planning/sprints/framework-in-draconic/slice-311-js-backend.md`
- `docs/specs/ui-framework/js-backend/test.md`
- `docs/specs/ui-framework/counter/contract.md`

Excluded: scribble; no packer in package.json; no blocking slice; no ADRs; other location-30 nested grains; archived rounds; ticket-65 archived

Next: freeze grain Browser APIs on location-30-js-backend. Do not write `docs/specs/`; js-backend ladder exists and parks naming the API set.

No packer script exists. Assembled by hand. Open product questions are none.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-30-js-backend]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether the js-backend spec folder already covers this grain.
4. **Repeat**: Whether honesty, web-path, portable-program, or counter unnamed-apis oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Browser APIs. Done: that package uses browser APIs. The source does not name the API set. Try proving the library on JS first. Pivot if the JS-backend experiment cannot host the component model. Callers still import dragonflame-ui. No public catalog. No BrowserAPI type. No public compile helper.
2. **Named set**: Locked [[intent]] Web is JS backend, no WASM. [[architecture-layer-cake]] Web DOM is the only web host. [[overview-ui-framework]] Phase 1 is JS backend plus browser APIs. [[purpose-js-backend]] parks naming the API set. [[ticket-65-first-tests-unnamed]] is closed: do not invent a suite or browser API set. Asserted [[contract-counter]] `counter.js-backend:unnamed-apis` is the wrong owner for this CHECK. Smallest reversible defaults: no public catalog, no BrowserAPI type, no public compile helper, callers still import dragonflame-ui, first drain adds `js-backend.browser:uses-apis` on the existing js-backend ladder, CHECK lives in `tests/js-backend/browser-apis.test.mjs`. All tasks `mode: afk`.
3. **Ladder**: Exists at `docs/specs/ui-framework/js-backend/`. Open product questions none. Browser APIs is not in purpose in-scope except as naming parked. Missing a locked promise for this grain. First drain task adds `js-backend.browser:uses-apis` on that ladder. This sitting does not write `docs/specs/`.
4. **Repeat**: Do not restage `js-backend.eval:no-eval-host`, `js-backend.split:no-native-stubs`, `js-backend.emit:no-emit-here`, or `js-backend.path:frontend-ir-js`. Do not restage [[slice-311-js-backend]]. Do not restage `renderer-portability.web:js-only-dom` or [[slice-340-web-path]]. Do not restage [[slice-348-portable-program]]. Do not restage `counter.js-backend:unnamed-apis` or `counter.embedder:browser-raf`. Do not lock `js-backend.false-path:not-rn-but-bytecode` in this sitting.
5. **Wait**: Naming the browser API set. Compile-time split. Not RN-but-bytecode. No eval. Phase 0 assumed. [[location-28-dom-renderer]] nested grains. Leaf-adapter ownership on [[location-35-host-config]]. A public catalog, BrowserAPI type, or compile helper. Implementing the compiler. Copying JS emit. JSX.

### Candidate A

Location-named surface. Existing import. No API catalog.

#### Problem

This grain is already named on [[location-30-js-backend]]: that package uses browser APIs, and the source does not name the API set. The bet is prove the library on JS first; pivot if the JS-backend experiment cannot host the component model. Callers already import dragonflame-ui. [[intent]] is Web as JS backend, no WASM; success is a Program compiled to ordinary JavaScript for the browser. [[purpose-js-backend]] parks naming the set and does not put this grain in scope. [[ticket-65-first-tests-unnamed]] is closed: do not invent a suite or browser API set. [[slice-311-js-backend]] already froze the compile path and left this grain unfrozen. Do not restage [[slice-340-web-path]], [[slice-348-portable-program]], or locked [[contract-js-backend]] honesty oracles. The non-obvious cut is proving unnamed usage without publishing which APIs those are.

#### Usage

The consumer never receives a browser API module, an allowlist, or a bag of host functions. They keep importing dragonflame-ui and run that package in a browser. App code does not import a catalog, pass APIs in, or name `document` or `requestAnimationFrame` as this package's public surface. Tests import the same library. README claim: the first-version package uses browser APIs; this source does not name the set.

#### Shape

Public surface is the existing dragonflame-ui import. Depth comes from hiding the unnamed host-API set behind it. This grain owns unnamed usage, not DOM create-and-patch, not JS-only bindings, not portable-Program import policy. No `BrowserAPI` type, no public compile helper, no Frontend type, no IR type. Empty ladder: freeze anyway. First drain may assert one promise from the location destination plus `docs/`, without minting `docs/specs/` and without naming APIs. Do not restage `counter.js-backend:unnamed-apis` as this CHECK. Do not put a catalog onto [[purpose-js-backend]].

#### Red flags

A public catalog, allowlist, or per-API wrapper is a shallow module and invents the forbidden set. Re-exporting `document` or `requestAnimationFrame` is leakage and restages [[architecture-layer-cake]], [[contract-counter]] `counter.embedder:browser-raf`, and [[slice-348-portable-program]]. Load-then-bind-then-call host stages are temporal decomposition. A pass-through around `createElement` or `requestAnimationFrame` restages [[location-28-dom-renderer]] and [[slice-340-web-path]]. Pointing CHECK at `tests/js-backend/frontend-ir-js.test.mjs` or renderer-portability web-path tests fakes progress.

#### Next implementation step

On first drain, assert one unnamed-usage promise from the [[location-30-js-backend]] Browser APIs grain, with a CHECK that fails if this checkout publishes an API catalog, without new public types.

### Candidate B

Ownership cut. Same destination. Hide browser contact behind the leaf adapter.

#### Problem

This grain on [[location-30-js-backend]] is already true as a running package: that package uses browser APIs, and the source does not name the API set. [[purpose-js-backend]] parks naming. [[ticket-65-first-tests-unnamed]] is closed: do not invent a suite or set. [[slice-311-js-backend]] already froze the JS backend compile path. [[slice-340-web-path]] already froze JS-only DOM bindings. [[slice-348-portable-program]] already froze that a portable Program cannot import `document`. The easy wrong cut is a package-wide uses-APIs honesty scan, or a catalog, which restages those CHECKs or invents the set. The cut that still fits the destination is ownership: browser contact lives behind the existing leaf adapter, so portable source never names APIs, while the running package still uses them.

#### Usage

The consumer keeps the existing dragonflame-ui import. App code still uses `h` and `text` from `dragonflame-ui/portable`. A browser module script loads that same shipped JavaScript. Tests import the library the same way. Nobody imports a browser API list, a Host type, `document`, or a compile helper. README claim: the first-version package runs on the JS backend plus browser APIs. This package does not say which APIs, and app code does not name them.

#### Shape

Ownership cut, not a catalog surface. Public surface stays the existing import. The leaf adapter from [[location-35-host-config]] privately owns browser contact. Portable source never names APIs. This grain's knowledge is only that the running package uses them through that adapter, and that library source does not publish a set. Do not export `document`, `createElement`, Host, Frontend, IR, or a compile helper. Do not freeze [[location-28-dom-renderer]] nested grains. Do not restage `renderer-portability.web:js-only-dom` or `renderer-portability.program:forbid-os`. Empty ladder for this grain: first drain asserts one promise on the existing js-backend ladder, smallest reversible default from the location destination plus [[intent]] and [[architecture-layer-cake]]. CHECK lives in `tests/js-backend/` and must not point at `tests/renderer-portability/web-path.test.mjs` or `tests/renderer-portability/portable-program.test.mjs`. Depth: one import hides all browser contact. The interface stays no larger than the import callers already have.

#### Red flags

A public API catalog, `BrowserAPIs` type, or `getDocument` helper is leakage and a shallow module. Grepping a named global list in the CHECK names the set, which [[purpose-js-backend]] forbids. Pointing this CHECK at the web-path or portable-program tests is a pass-through and restages locked slices. Staging detect-then-bind-then-use modules is temporal decomposition. Freezing create-and-patch, only-web-host, browser-as-embedder, or JS-only bindings here would rewrite [[location-28-dom-renderer]]. Restaging `js-backend.eval:no-eval-host`, `js-backend.split:no-native-stubs`, or `js-backend.emit:no-emit-here` fakes progress.

#### Next implementation step

On first drain, assert one adapter-owns-contact promise on [[contract-js-backend]] and [[test-js-backend]], then red-green a `tests/js-backend/` CHECK that browser contact stays behind the leaf adapter and source does not name an API set.

## Synthesis

Base is Candidate A. Graft from B: CHECK lives in `tests/js-backend/browser-apis.test.mjs` and fails if this checkout publishes an API catalog or greps a named global list as the prove. First drain adds `js-backend.browser:uses-apis` on the existing js-backend ladder. Do not restage web-path or portable-program CHECKs.

Reject B as the slice shape: putting browser-contact ownership on the [[location-35-host-config]] leaf adapter starts freezing [[location-28-dom-renderer]] nested grains. The grain is unnamed usage behind the existing import, not adapter ownership.

Tradeoffs accepted:

- We accept one new promise on the existing js-backend ladder in exchange for not writing a new spec folder in this sitting.
- We accept proving unnamed usage in exchange for leaving catalog invention parked and [[ticket-65-first-tests-unnamed]] closed.
- We accept leaving leaf-adapter ownership on [[location-35-host-config]] in exchange for not rewriting [[location-28-dom-renderer]].
- We accept not restaging `counter.js-backend:unnamed-apis` in exchange for a js-backend-owned CHECK.

Alternatives considered:

- Public catalog, BrowserAPI type, or allowlist: shallow leakage and invents the set, lost.
- Slice CHECK is `tests/js-backend/frontend-ir-js.test.mjs`, `tests/renderer-portability/web-path.test.mjs`, or `tests/renderer-portability/portable-program.test.mjs`: restage, lost.
- Grep a named global list in the CHECK: names the set, lost.
- Point this slice CHECK at `counter.js-backend:unnamed-apis`: wrong owner, lost.
- Freeze Compile-time split, No eval, or DOM renderer grains: different grain, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-30-js-backend]], [[purpose-js-backend]], [[intent]], and [[architecture-layer-cake]]. First drain adds `js-backend.browser:uses-apis`.

Next implementation step: assert `js-backend.browser:uses-apis` on the existing ladder, then red-green a prove that the package uses browser APIs and the source does not name the API set.

### Tracer bullets

1. Assert `js-backend.browser:uses-apis` on the existing js-backend ladder. blocked_by: none. AFK. Do not write a new spec folder. Do not restage locked honesty or path promises. Named test: that package uses browser APIs. The source does not name the API set. CHECK lives in `tests/js-backend/browser-apis.test.mjs`. No public catalog. No BrowserAPI type. No public compile helper.
2. Red-green that CHECK. blocked_by: the spec task. AFK. Fail if this checkout publishes an API catalog, greps a named global list as the prove, or grows a public compile helper. Do not point CHECK at `tests/js-backend/frontend-ir-js.test.mjs`, `tests/renderer-portability/web-path.test.mjs`, or `tests/renderer-portability/portable-program.test.mjs`. Do not restage no-eval, no-native-stubs, no-emit-here, frontend-ir-js, web-path, portable-program, or `counter.js-backend:unnamed-apis`. Do not freeze Compile-time split, Not RN-but-bytecode, No eval, Phase 0 assumed, or [[location-28-dom-renderer]] nested grains.

## Confirm

Confirmed.
