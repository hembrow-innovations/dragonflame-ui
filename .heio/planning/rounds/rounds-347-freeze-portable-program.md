---
id: "rounds-347-freeze-portable-program"
title: "Freeze Portable Program"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T06:16:32Z"
updated_at: "2026-09-12T06:16:32Z"
---

# Freeze Portable Program

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN Portable Program under [[location-41-renderer-portability]]. Sprint `framework-in-draconic` may freeze. Do not rewrite [[location-41-renderer-portability]]. Do not restage `renderer-portability.surface:thin`, `renderer-portability.native:extern-c-unboxed`, `renderer-portability.web:js-only-dom`, or `renderer-portability.wrong-target:hard-error`. Do not restage `portability-metal.program:forbid-metal`. Do not freeze [[location-28-dom-renderer]] nested grains.

## Vault pack

Query: Portable Program: a portable Program cannot import Metal or `document` directly; try imports only through the renderer portability API; pivot if portable code talks to the OS
Area: renderer-portability (location-41-renderer-portability); Metal honesty also lives in portability-metal

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-41-renderer-portability.md`
- `.heio/planning/sprints/framework-in-draconic/shape.md`
- `docs/specs/ui-framework/renderer-portability/purpose.md`
- `docs/specs/ui-framework/renderer-portability/contract.md`
- `docs/specs/ui-framework/portability-metal/purpose.md`
- `docs/specs/ui-framework/portability-metal/contract.md`
- `docs/overview/glossary.md`
- `docs/architecture/architecture-layer-cake.md`

Related:

- `.heio/planning/locations/location-18-native-engine-desktop.md`
- `.heio/planning/locations/location-35-host-config.md`
- `.heio/planning/sprints/framework-in-draconic/slice-344-wrong-target-hard-error.md`
- `docs/specs/ui-framework/renderer-portability/test.md`
- `docs/specs/ui-framework/portability-metal/test.md`

Excluded: scribble; archive; ADRs (none); blocking slice (none; Portable Program is not yet in shape.md); restaging frozen siblings slice-332, slice-336, slice-340, slice-344; Host I/O as a browser; compiler work in this repo

Next: freeze one Portable Program slice. Do not write `docs/specs/`.

No packer script exists. Assembled by hand. Open product questions are none.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-41-renderer-portability]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether the renderer-portability spec folder already covers this grain.
4. **Repeat**: Whether thin-surface, native-path, web-path, wrong-target, or Metal-barrel oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Portable Program. Done: a portable Program cannot import Metal or `document` directly. Try imports only through this API. Pivot if portable code talks to the OS. Portable Programs still import `h` and `text` from `dragonflame-ui/portable`. The private package fence rejects Metal or `document` as host modules. `compile` stays test harness, not a product export.
2. **Named set**: Locked [[intent]] Framework library is Draconic. [[glossary]] Renderer portability API. [[architecture-layer-cake]] a portable Program cannot import Metal or `document` directly. Locked [[contract-renderer-portability]] `renderer-portability.wrong-target:hard-error`. Locked [[contract-portability-metal]] `portability-metal.program:forbid-metal`. Asserted [[contract-renderer-portability]] `renderer-portability.program:forbid-os` stays unpointed; that sentence is the named pivot. Smallest reversible defaults: no public `compile` helper, no public Metal, `document`, `fs`, or `process` on `dragonflame-ui/portable`, CHECK lives in `tests/renderer-portability/portable-program.test.mjs`. All tasks `mode: afk`.
3. **Ladder**: Exists at `docs/specs/ui-framework/renderer-portability/` and `docs/specs/ui-framework/portability-metal/`. Open product questions none. First drain does not add a promise id and does not write a new spec folder. This sitting does not write `docs/specs/`.
4. **Repeat**: Do not restage `renderer-portability.surface:thin` or [[slice-332-thin-surface]]. Do not restage `renderer-portability.native:extern-c-unboxed` or [[slice-336-native-path]]. Do not restage `renderer-portability.web:js-only-dom` or [[slice-340-web-path]]. Do not restage `renderer-portability.wrong-target:hard-error` or [[slice-344-wrong-target-hard-error]]. Do not restage `portability-metal.program:forbid-metal`. Do not point CHECK at `tests/renderer-portability/portable-import.test.mjs`, `tests/renderer-portability/native-path.test.mjs`, `tests/renderer-portability/web-path.test.mjs`, `tests/renderer-portability/portable-wrong-target.test.mjs`, or `tests/portability-metal/portable-metal.test.mjs`.
5. **Wait**: [[location-28-dom-renderer]] nested grains. A public Host type, canvas switch, or paint API. A public `compile` helper. Host I/O as a browser. Locking `renderer-portability.program:forbid-os`. Proving `fs` or `process` as this slice's CHECK. Implementing the compiler. A second IR.

### Candidate A

Location-named surface. Metal honesty of the same import.

#### Problem

The Portable Program grain on [[location-41-renderer-portability]] is working when a portable Program cannot import Metal or `document` directly. The bet is try imports only through this API; pivot if portable code talks to the OS. The public surface is already named: `h` and `text` from `dragonflame-ui/portable`, frozen by [[slice-332-thin-surface]] as `renderer-portability.surface:thin`. [[slice-344-wrong-target-hard-error]] already hard-errors `document` as a bindable op on that specifier and Wait-listed this grain for the Metal prove. Locked [[contract-portability-metal]] `portability-metal.program:forbid-metal` already points at `tests/portability-metal/portable-metal.test.mjs`. The non-obvious cut is Program import-graph policy of the same Renderer portability API ([[glossary]], [[architecture-layer-cake]]), not a new specifier and not restaging the document CHECK. Today's `src/portability/surface.js` still publishes `compile`, which [[slice-332-thin-surface]] forbade.

#### Usage

A portable Program still imports `h` and `text` from `dragonflame-ui/portable` and returns a tree, same as `tests/renderer-portability/portable-import.test.mjs`. Callers do not import Metal, `document`, a GPU handle, Host I/O, a public Host type, or `compile` from that specifier or from a host module. A Program whose source does `import { Metal } from "dragonflame-ui/portable"` does not compile. Direct Metal from a host module does not compile either. `document` stays proved on `tests/renderer-portability/portable-wrong-target.test.mjs` and is not restaged. `compile` stays test harness off the product export. CHECK lives in `tests/portability-metal/portable-metal.test.mjs`, named test: this checkout does not let a portable Program import Metal.

#### Shape

One public module remains the Renderer portability API. Caller data is a Program plus a hyperscript tree of host-agnostic leaves. Flow is import only through this API, then return a tree. Behind the module, the renderer package already owns host mappings ([[slice-336-native-path]], [[slice-340-web-path]]) and the document hard-error ([[slice-344-wrong-target-hard-error]]). This grain owns the leftover Metal honesty: Metal is not a bindable op and not a host import. Encoded in the import: a Program that only uses this module cannot name Metal, `document`, a GPU handle, or an OS module. First drain keeps `portability-metal.program:forbid-metal` pointed at the existing named test under `docs/specs/ui-framework/portability-metal/`. Do not mint a spec folder. Do not add a promise id. Do not lock `renderer-portability.program:forbid-os`; that asserted sentence is the named pivot. Do not implement the compiler. The surface is deep by hiding Metal, GPU handles, host modules, and the import gate. The interface stays `h` and `text`.

#### Red flags

Exporting Metal, a GPU handle, or a throwing Metal stub from `dragonflame-ui/portable` is leakage and a public Metal, forbidden by [[purpose-portability-metal]]. A public `compile` that regex-scans source is the current pass-through and restages a helper [[slice-332-thin-surface]] already refused. A second specifier, `isPortable`, or caller-facing `checkImport` is a shallow module: callers would learn the forbid list. Public parse-then-forbid-then-bind stages are temporal decomposition. Restaging `tests/renderer-portability/portable-wrong-target.test.mjs`, `tests/renderer-portability/portable-import.test.mjs`, native-path, or web-path CHECKs would steal sibling proves. Proving `fs` or `process` this sitting is the OS pivot. Minting a new spec folder contradicts the first-drain rule.

#### Next implementation step

Red `tests/portability-metal/portable-metal.test.mjs` so a portable Program cannot import Metal without importing `compile` from `dragonflame-ui/portable`.

### Candidate B

Ownership cut. Same destination. Hide the Program's import graph behind a private fence.

#### Problem

Portable Program under [[location-41-renderer-portability]] is working when a portable Program cannot import Metal or `document` directly. The public surface is already the Renderer portability API: callers compile against `h` and `text` from `dragonflame-ui/portable` ([[slice-332-thin-surface]]), with native and web contact behind that specifier ([[slice-336-native-path]], [[slice-340-web-path]]), and wrong-target use already hard-errors `document` as a bindable op on that specifier ([[slice-344-wrong-target-hard-error]]). Metal-from-barrel already lives on [[purpose-portability-metal]] as `portability-metal.program:forbid-metal`. Treating this grain as another public forbid-list of those names would restage those CHECKs and leave today's `compile` scan in `src/portability/surface.js` as a pass-through. The non-obvious cut is ownership of the Program as a closed unit: legal imports go only through this API. Bet: try imports only through this API. Pivot if portable code talks to the OS ([[contract-renderer-portability]] `renderer-portability.program:forbid-os`). Do not rewrite the parent destination.

#### Usage

A portable Program still imports `h` and `text` from `dragonflame-ui/portable` and returns a tree, same as `tests/renderer-portability/portable-import.test.mjs`. Callers never import Metal, `document`, `fs`, `process`, a GPU handle, Host I/O, JSI, a public Target type, or `compile`. A Program that names Metal or `document` as a host module, not as a name on the portable specifier, does not resolve. The private package fence rejects that graph. It does not bind those hosts as undefined or a no-op. `compile` stays test harness, not a product export. CHECK lives in `tests/renderer-portability/portable-program.test.mjs`, not `tests/renderer-portability/portable-wrong-target.test.mjs`, not `tests/portability-metal/portable-metal.test.mjs`, not `tests/renderer-portability/portable-import.test.mjs`.

#### Shape

Public data stays a Program plus a hyperscript tree on the Renderer portability API ([[glossary]], [[architecture-layer-cake]]). The specifier still exports `h` and `text` only. Behind that module, the package owns one private import fence: a portable Program may resolve only this API. Direct Metal, direct `document`, and OS modules are not legal specifiers. Barrel `document` stays [[slice-344-wrong-target-hard-error]]. Barrel Metal stays [[purpose-portability-metal]]. This grain owns the closed graph, not a second forbid-list. First drain does not add a promise id and does not mint a spec folder. Keep `renderer-portability.program:forbid-os` as the pivot, unpointed. Do not implement the compiler. The surface is deep by hiding legal specifier set, host-module inventory, and resolution versus no-op. The interface stays `h` and `text`.

#### Red flags

A public forbid-list of Metal, `document`, `fs`, or `process` on `dragonflame-ui/portable` is a shallow module and restages [[slice-344-wrong-target-hard-error]] plus `tests/portability-metal/portable-metal.test.mjs`. Exporting those names so they throw, or a public `compile` that regex-scans source, is leakage and the current pass-through. A caller-facing `checkImports` or AllowedSpecifiers type is a shallow module. Public parse-then-validate-then-bind stages are temporal decomposition. A missing export without a fence can look like a runtime no-op. Letting the Program talk to the OS is the named pivot. This cut keeps one private fence, so web, native, and Metal honesty do not each reimplement the graph, and the public specifier never exposes host modules.

#### Next implementation step

Red `tests/renderer-portability/portable-program.test.mjs` so a portable Program cannot import Metal or `document` directly, without a public `compile` helper and without restaging sibling CHECKs.

## Synthesis

Base is Candidate B. Graft from A: Done quotes the [[location-41-renderer-portability]] Portable Program destination. CHECK lives in `tests/renderer-portability/portable-program.test.mjs` and fails if this checkout lets a portable Program import Metal or `document` as a host module, grows a public `compile` helper, or treats a missing host as a runtime no-op.

Reject A as the slice shape: treating this grain as the leftover Metal barrel prove restages `portability-metal.program:forbid-metal` and `tests/portability-metal/portable-metal.test.mjs`. The grain is a closed import graph, not a second forbid-list.

Tradeoffs accepted:

- We accept locking the existing renderer-portability and portability-metal ladders in exchange for not minting a new spec folder.
- We accept proving the closed graph in exchange for leaving barrel `document` on [[slice-344-wrong-target-hard-error]] and barrel Metal on [[purpose-portability-metal]].
- We accept leaving `renderer-portability.program:forbid-os` unpointed in exchange for not proving `fs` or `process` this sitting.

Alternatives considered:

- Point this slice CHECK at `tests/portability-metal/portable-metal.test.mjs`: restage, lost.
- Export Metal or `document` that throws or no-ops: leakage and a public Metal, lost.
- Keep a public `compile` scan on the portable specifier: pass-through, lost.
- Slice CHECK is `tests/renderer-portability/portable-wrong-target.test.mjs` or `tests/renderer-portability/portable-import.test.mjs`: restage, lost.
- Lock `renderer-portability.program:forbid-os` or prove `fs` or `process`: the named pivot, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-41-renderer-portability]], [[purpose-renderer-portability]], [[intent]], and [[architecture-layer-cake]]. First drain does not add a promise id.

Next implementation step: red-green `tests/renderer-portability/portable-program.test.mjs` so a portable Program cannot import Metal or `document` directly at the private package fence, without a product `compile` export.

### Tracer bullets

1. Red `tests/renderer-portability/portable-program.test.mjs` so a portable Program cannot import Metal or `document` directly without importing `compile` from `dragonflame-ui/portable`. blocked_by: none. AFK. Do not write a new spec folder. Do not add a promise id. Do not restage locked thin-surface, native-path, web-path, wrong-target, or Metal-barrel. Named prove: a portable Program cannot import Metal or `document` directly. Fail if this checkout grows a public `compile` helper, a public Metal or `document` host module, or treats a missing host as a runtime no-op.
2. Green the private package fence so that CHECK passes. blocked_by: the red task. AFK. Public names stay `h` and host-agnostic leaves. `compile` is test harness. Do not point CHECK at `tests/renderer-portability/portable-import.test.mjs`, `tests/renderer-portability/native-path.test.mjs`, `tests/renderer-portability/web-path.test.mjs`, `tests/renderer-portability/portable-wrong-target.test.mjs`, or `tests/portability-metal/portable-metal.test.mjs`. Do not lock `renderer-portability.program:forbid-os`.

## Confirm

Confirmed.
