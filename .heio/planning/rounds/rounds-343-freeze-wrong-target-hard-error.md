---
id: "rounds-343-freeze-wrong-target-hard-error"
title: "Freeze Wrong-target hard-error"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T06:01:23Z"
updated_at: "2026-09-12T06:01:23Z"
---

# Freeze Wrong-target hard-error

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN Wrong-target hard-error under [[location-41-renderer-portability]]. Sprint `framework-in-draconic` may freeze. Do not rewrite [[location-41-renderer-portability]]. Do not restage `renderer-portability.surface:thin`, `renderer-portability.native:extern-c-unboxed`, or `renderer-portability.web:js-only-dom`. Do not freeze Portable Program or [[location-28-dom-renderer]] nested grains.

## Vault pack

Query: Wrong-target hard-error: wrong-target use hard-errors
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

Excluded: no packer; no blocking slice; scribble; archive; ADRs none; test.md; Portable Program; sibling sprint slices including frozen slice-332-thin-surface, slice-336-native-path, and slice-340-web-path; restaging thin-surface, native path, or web path

Next: freeze one Wrong-target hard-error slice. Do not write `docs/specs/`.

No packer script exists. Assembled by hand. Open product questions are none.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-41-renderer-portability]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether the renderer-portability spec folder already covers this grain.
4. **Repeat**: Whether thin-surface, native-path, or web-path oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Wrong-target hard-error. Done: wrong-target use hard-errors. Try hard-errors. Pivot if wrong-target use is a runtime no-op. Portable Programs still import `h` and `text` from `dragonflame-ui/portable`. The private renderer gate hard-errors `document` as a bindable op. `compile` stays test harness, not a product export.
2. **Named set**: Locked [[intent]] Framework library is Draconic. [[glossary]] Renderer portability API wrong-target use hard-errors. [[architecture-layer-cake]] wrong-target use hard-errors. Locked [[contract-renderer-portability]] `renderer-portability.wrong-target:hard-error` with named test importing document from portable code hard-errors. Smallest reversible defaults: no public `compile` helper, no public `document` or Metal on `dragonflame-ui/portable`, no runtime no-op, CHECK lives in `tests/renderer-portability/portable-wrong-target.test.mjs`. All tasks `mode: afk`.
3. **Ladder**: Exists at `docs/specs/ui-framework/renderer-portability/`. Open product questions none. This grain is already locked as `renderer-portability.wrong-target:hard-error` with named test `importing document from portable code hard-errors`. First drain does not add a promise id and does not write a new spec folder. This sitting does not write `docs/specs/`.
4. **Repeat**: Do not restage `renderer-portability.surface:thin` or [[slice-332-thin-surface]]. Do not restage `renderer-portability.native:extern-c-unboxed` or [[slice-336-native-path]]. Do not restage `renderer-portability.web:js-only-dom` or [[slice-340-web-path]]. Do not point CHECK at `tests/renderer-portability/portable-import.test.mjs`, `tests/renderer-portability/native-path.test.mjs`, `tests/renderer-portability/web-path.test.mjs`, or `tests/portability-metal/portable-metal.test.mjs`.
5. **Wait**: Portable Program. [[location-28-dom-renderer]] nested grains. A public Host type, canvas switch, or paint API. A public `compile` helper. Host I/O as a browser. A Metal import prove. Implementing the compiler. A second IR.

### Candidate A

Location-named surface. Wrong-target is compile-time export policy of the same import.

#### Problem

This grain is Wrong-target hard-error on [[location-41-renderer-portability]]: portable UI already compiles against one thin Draconic import, frozen by [[slice-332-thin-surface]] as `h` and `text` from `dragonflame-ui/portable`, with native and web contact already behind that specifier in [[slice-336-native-path]] and [[slice-340-web-path]]. The locked promise `renderer-portability.wrong-target:hard-error` on [[contract-renderer-portability]] says wrong-target use hard-errors and is not a runtime no-op, with CHECK reserved at `tests/renderer-portability/portable-wrong-target.test.mjs`. The non-obvious cut is that today's `src/portability/surface.js` still publishes a `compile` helper that scans source for `document` and Metal, which is a public compile helper [[slice-332-thin-surface]] already forbade, not compile-time policy of the same import. Direct OS or browser imports stay the Wait grain Portable Program. Bet: try hard-errors. Pivot if wrong-target use is a runtime no-op. Do not rewrite the parent destination.

#### Usage

A portable Program still imports `h` and `text` from `dragonflame-ui/portable` and returns a tree, same as `tests/renderer-portability/portable-import.test.mjs`. Callers do not import `document`, Metal, a public `compile` helper, `render`, Host I/O, a public Host type, or a canvas switch from that specifier. A Program whose source does `import { document } from "dragonflame-ui/portable"` hard-errors at compile of that Program. It does not bind `document` as undefined or a no-op on native. `compile` stays test harness off the product export. CHECK stays `tests/renderer-portability/portable-wrong-target.test.mjs`, named test importing document from portable code hard-errors, not `tests/renderer-portability/portable-import.test.mjs`, not `tests/portability-metal/portable-metal.test.mjs`.

#### Shape

One public module remains the Renderer portability API. Wrong-target is compile-time export policy of that module, not a new specifier and not a public `document` or Metal binding. Caller data is a Program plus a hyperscript tree of host-agnostic leaves. Behind the module, the legal name set is `h` and those leaves. Taking `document` from this import is a hard error before host contact. Metal import stays the [[purpose-renderer-portability]] gap and the Wait Portable Program grain, plus the existing honesty area under `docs/specs/ui-framework/portability-metal/`. First drain may keep pointing `renderer-portability.wrong-target:hard-error` at the reserved test. Do not mint a spec folder. Do not freeze Portable Program. Do not implement the compiler. The surface is deep by hiding host identity, forbidden names, and the hard-error versus no-op choice. The interface stays `h` and `text`. No public `document`, Metal, Host I/O as a browser, JSI, platform channels, or compile helper.

#### Red flags

Exporting `document` or Metal from `dragonflame-ui/portable` that throws on call, or that no-ops on the wrong host, is leakage and the named pivot. A public `compile` that regex-scans source is the current pass-through and restages a helper [[slice-332-thin-surface]] already refused. A second specifier per target, or a caller-facing `checkWrongTarget`, is a shallow module. Public parse-then-validate-then-bind stages are temporal decomposition. Restaging `tests/renderer-portability/portable-import.test.mjs`, `tests/renderer-portability/native-path.test.mjs`, `tests/renderer-portability/web-path.test.mjs`, or `tests/portability-metal/portable-metal.test.mjs` would steal sibling proves. Freezing Portable Program this sitting would rewrite the Wait list.

#### Next implementation step

Keep CHECK on `tests/renderer-portability/portable-wrong-target.test.mjs` so importing `document` from portable code hard-errors at compile time, without a public `compile`, `document`, or Metal export on `dragonflame-ui/portable`.

### Candidate B

Ownership cut. Same destination. Hide the target gate inside the renderer package.

#### Problem

Wrong-target hard-error under [[location-41-renderer-portability]] is working when wrong-target use hard-errors, not when it is a runtime no-op. Portable UI already compiles against `h` and `text` from `dragonflame-ui/portable` ([[slice-332-thin-surface]]), with native `extern "C"` and web JS-only DOM mappings behind that specifier ([[slice-336-native-path]], [[slice-340-web-path]]). The non-obvious cut is ownership of the fatal policy. Treating the hard-error as import-policy of the public specifier itself makes the barrel a forbid-list and leaves today's `compile` scan in `src/portability/surface.js` as a pass-through. This grain hides the target gate inside the renderer package so the portable specifier never grows target-specific ops or host modules. Locked [[contract-renderer-portability]] `renderer-portability.wrong-target:hard-error` stays pointed, not restaged. Portable Program stays unfrozen.

#### Usage

A portable Program still imports `h` and `text` from `dragonflame-ui/portable` and returns a tree, same as `tests/renderer-portability/portable-import.test.mjs`. Callers never import `document`, Metal, a public Target type, Host I/O, or `compile`. A Program that writes `import { document } from "dragonflame-ui/portable"` does not run. The private renderer gate hard-errors. It does not skip the import. The same gate hard-errors Metal as a bindable op. CHECK lives in `tests/renderer-portability/portable-wrong-target.test.mjs`, the path [[slice-332-thin-surface]] already reserved. `compile` stays test harness, not a product export.

#### Shape

Public data stays a Program plus a hyperscript tree on the Renderer portability API ([[glossary]], [[architecture-layer-cake]]). The specifier still exports `h` and `text` only for this grain. Behind that module, the renderer package owns one private target gate beside the frozen host mappings: web contact is JS-only DOM, native contact is `extern "C"` and unboxed numbers and structs. The gate's invariant is that Metal and `document` are not bindable ops for portable UI. Violation is a hard-error, not a runtime no-op ([[purpose-renderer-portability]]). No public Target type, canvas switch, paint API, or Host type. First drain may point `renderer-portability.wrong-target:hard-error` at the named test. Do not mint a spec folder. Do not freeze Portable Program. The surface is deep by hiding host-op inventory, two compile targets, and the fatal mapping in one private gate. The interface stays `h` and `text`.

#### Red flags

A public Target plus per-host modules is a shallow module: callers would pick a host, then learn Metal or `document`. Re-exporting those names from `dragonflame-ui/portable`, or leaving the regex `compile` on the barrel, is leakage and a pass-through. Splitting specifier forbid-list then host bind repeats one policy across two stages (temporal decomposition). A missing export without a gate can look like a runtime no-op, the location pivot. This cut keeps one private gate next to host mapping, so web and native do not each reimplement the forbid, and the public specifier never exposes target-specific ops.

#### Next implementation step

Point `renderer-portability.wrong-target:hard-error` at `tests/renderer-portability/portable-wrong-target.test.mjs` and red that CHECK so importing `document` from portable code hard-errors at the private renderer gate.

## Synthesis

Base is Candidate B. Graft from A: Done quotes the [[location-41-renderer-portability]] Wrong-target hard-error destination. CHECK lives in `tests/renderer-portability/portable-wrong-target.test.mjs` and fails if this checkout exports `document` or Metal, a public `compile` helper, or treats wrong-target use as a runtime no-op.

Reject A as the slice shape: treating hard-error as a public specifier forbid-list or a product `compile` scan is a pass-through and restages a helper [[slice-332-thin-surface]] already refused.

Tradeoffs accepted:

- We accept locking the existing renderer-portability ladder in exchange for not minting a new spec folder.
- We accept proving `document` in exchange for leaving a Metal import prove on Portable Program.
- We accept no public `compile` helper on `dragonflame-ui/portable` in exchange for hiding the target gate behind the specifier.

Alternatives considered:

- Export `document` that throws or no-ops on the wrong host: leakage and the named pivot, lost.
- Keep a public `compile` scan on the portable specifier: pass-through, lost.
- Slice CHECK is `tests/renderer-portability/portable-import.test.mjs` or `tests/portability-metal/portable-metal.test.mjs`: restage, lost.
- Freeze Portable Program in this sitting: different grain, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-41-renderer-portability]], [[purpose-renderer-portability]], [[intent]], and [[architecture-layer-cake]]. Wrong-target hard-error is already locked. First drain does not add a promise id.

Next implementation step: red-green `tests/renderer-portability/portable-wrong-target.test.mjs` so importing `document` from portable code hard-errors at the private renderer gate, without a product `compile` export.

### Tracer bullets

1. Red `tests/renderer-portability/portable-wrong-target.test.mjs` so importing `document` from portable code hard-errors without importing `compile` from `dragonflame-ui/portable`. blocked_by: none. AFK. Do not write a new spec folder. Do not add a promise id. Do not restage locked thin-surface, native-path, or web-path. Named test: importing document from portable code hard-errors. Fail if this checkout grows a public `compile` helper, a public `document` or Metal export, or treats wrong-target use as a runtime no-op.
2. Green the private renderer gate so that CHECK passes. blocked_by: the red task. AFK. Public names stay `h` and host-agnostic leaves. `compile` is test harness. Do not point CHECK at `tests/renderer-portability/portable-import.test.mjs`, `tests/renderer-portability/native-path.test.mjs`, `tests/renderer-portability/web-path.test.mjs`, or `tests/portability-metal/portable-metal.test.mjs`. Do not freeze Portable Program.

## Confirm

Confirmed.
