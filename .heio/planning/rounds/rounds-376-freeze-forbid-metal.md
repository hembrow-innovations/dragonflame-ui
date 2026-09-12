---
id: "rounds-376-freeze-forbid-metal"
title: "Freeze Forbid Metal"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T08:10:57Z"
updated_at: "2026-09-12T08:10:57Z"
---

# Freeze Forbid Metal

Counterpart is the product peer. Notebook is this round.

Pick: TICKET [[ticket-371-portable-metal-compile-import]]. Sprint `framework-in-draconic` may freeze. Do not rewrite [[location-41-renderer-portability]]. Do not restage [[slice-348-portable-program]], [[slice-332-thin-surface]], [[slice-336-native-path]], [[slice-340-web-path]], or [[slice-344-wrong-target-hard-error]]. Do not restage `renderer-portability.surface:thin`, `renderer-portability.native:extern-c-unboxed`, `renderer-portability.web:js-only-dom`, or `renderer-portability.wrong-target:hard-error`.

## Vault pack

Query: Portable metal test still imports compile from portable; after task-334-green-thin-surface, dragonflame-ui/portable no longer exports compile; tests/portability-metal/portable-metal.test.mjs still imports { compile } and fails to load
Area: portability-metal (Portable Program on location-41-renderer-portability); no owning frozen or active slice

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-41-renderer-portability.md`
- `.heio/planning/sprints/framework-in-draconic/shape.md`
- `docs/specs/ui-framework/portability-metal/purpose.md`
- `docs/specs/ui-framework/portability-metal/contract.md`
- `docs/specs/ui-framework/renderer-portability/purpose.md`
- `docs/specs/ui-framework/renderer-portability/contract.md`
- `docs/overview/glossary.md`
- `docs/architecture/architecture-layer-cake.md`

Related:

- `.heio/planning/tickets/ticket-371-portable-metal-compile-import.md`
- `.heio/planning/locations/location-18-native-engine-desktop.md`
- `.heio/planning/locations/location-35-host-config.md`
- `.heio/planning/sprints/framework-in-draconic/slice-348-portable-program.md`
- `docs/specs/ui-framework/portability-metal/test.md`

Excluded: no packer; no blocking slice; scribble; archive; ADRs none; restaging slice-332-thin-surface; restaging slice-348 CHECK; Host I/O; compiler work in this repo

Next: parent Reads Must-read. Ticket stays open unblocked for a later Portable Program / portability-metal slice. Do not write docs/specs/.

No packer script exists. Assembled by hand. Open product questions are none.

## Round 1

### Questions

1. **Next grain**: What vertical cut this sitting freezes from [[ticket-371-portable-metal-compile-import]].
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether the portability-metal spec folder already covers this grain.
4. **Repeat**: Whether thin-surface, native-path, web-path, wrong-target, or portable-program oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Forbid Metal. Done: this checkout does not let a portable Program import Metal. The named test loads without importing `compile` from `dragonflame-ui/portable`. Try imports only through the Renderer portability API. Pivot if portable code talks to the OS. Callers still import `h` and `text` from `dragonflame-ui/portable`. No public `compile` helper. No public Metal.
2. **Named set**: Locked [[intent]] Framework library is Draconic. [[glossary]] Renderer portability API. [[architecture-layer-cake]] a portable Program cannot import Metal or `document` directly. Locked [[contract-portability-metal]] `portability-metal.program:forbid-metal`. Locked [[contract-renderer-portability]] `renderer-portability.wrong-target:hard-error` stays on the document CHECK. Smallest reversible defaults: private harness under `tests/portability-metal/`, CHECK lives in `tests/portability-metal/portable-metal.test.mjs`, no public `compile`, no public Metal. All tasks `mode: afk`.
3. **Ladder**: Exists at `docs/specs/ui-framework/portability-metal/`. Open product questions none. First drain does not add a promise id and does not write a new spec folder. Keep `portability-metal.program:forbid-metal` pointed at the existing named test. This sitting does not write `docs/specs/`.
4. **Repeat**: Do not restage `renderer-portability.surface:thin` or [[slice-332-thin-surface]]. Do not restage `renderer-portability.native:extern-c-unboxed` or [[slice-336-native-path]]. Do not restage `renderer-portability.web:js-only-dom` or [[slice-340-web-path]]. Do not restage `renderer-portability.wrong-target:hard-error` or [[slice-344-wrong-target-hard-error]]. Do not restage [[slice-348-portable-program]]. Do not point CHECK at `tests/renderer-portability/portable-program.test.mjs`, `tests/renderer-portability/portable-import.test.mjs`, `tests/renderer-portability/native-path.test.mjs`, `tests/renderer-portability/web-path.test.mjs`, or `tests/renderer-portability/portable-wrong-target.test.mjs`.
5. **Wait**: [[location-28-dom-renderer]] nested grains. A public Host type, canvas switch, or paint API. A public `compile` helper. Host I/O as a browser. Locking `renderer-portability.program:forbid-os`. Proving `fs` or `process` as this slice's CHECK. Implementing the compiler. A second IR.

### Candidate A

Location-named surface. Restage the locked Metal named test off the product `compile` export.

#### Problem

After [[task-334-green-thin-surface]], `dragonflame-ui/portable` no longer exports `compile`, so `tests/portability-metal/portable-metal.test.mjs` fails to load while still importing that helper from the product specifier. [[ticket-371-portable-metal-compile-import]] is that load break. The locked promise `portability-metal.program:forbid-metal` on [[contract-portability-metal]] already points at this checkout does not let a portable Program import Metal. Callers still compile against `h` and `text` from `dragonflame-ui/portable` ([[slice-332-thin-surface]], [[glossary]] Renderer portability API). [[slice-348-portable-program]] already froze the closed import graph in `tests/renderer-portability/portable-program.test.mjs` and forbade restaging this Metal CHECK. The non-obvious cut is keeping that named test honest without putting `compile` back on the specifier and without restaging thin-surface, native-path, web-path, wrong-target, or [[slice-348-portable-program]].

#### Usage

A portable Program still imports `h` and `text` from `dragonflame-ui/portable` and returns a tree. Callers do not import `compile`, Metal, a GPU handle, `document`, Host I/O, or a public Host type from that specifier. The named test in `tests/portability-metal/portable-metal.test.mjs` still fails if this checkout lets a portable Program import Metal. It loads without `import { compile } from "dragonflame-ui/portable"`. `compile` stays test harness, not a product export, same ownership as `tests/renderer-portability/compile.mjs` for [[slice-344-wrong-target-hard-error]]. CHECK for this new slice is that same metal file. Do not point this slice at `tests/renderer-portability/portable-program.test.mjs`.

#### Shape

One public module remains the Renderer portability API. Public names stay `h` and host-agnostic leaves. Behind that module, Metal is not a bindable op and not a host import ([[purpose-portability-metal]], [[architecture-layer-cake]]). This sitting owns the load-and-prove of the existing named test, not a new specifier and not a new promise id. First drain keeps `portability-metal.program:forbid-metal` pointed at `tests/portability-metal/portable-metal.test.mjs` under `docs/specs/ui-framework/portability-metal/`. Do not mint a spec folder. Do not write `docs/specs/`. Do not lock `renderer-portability.program:forbid-os`. Do not implement the compiler. The surface is deep by hiding Metal, GPU handles, and the import gate. The interface stays `h` and `text`.

#### Red flags

Putting `compile` back on `dragonflame-ui/portable` is the current pass-through and restages a helper [[slice-332-thin-surface]] already refused. Exporting Metal, a GPU handle, or a throwing Metal stub is leakage and a public Metal, forbidden by [[purpose-portability-metal]]. A caller-facing `checkImport` or second specifier is a shallow module. Public parse-then-forbid-then-bind stages are temporal decomposition. Pointing this slice CHECK at `tests/renderer-portability/portable-program.test.mjs` restages [[slice-348-portable-program]]. Pointing it at `tests/renderer-portability/portable-import.test.mjs`, `tests/renderer-portability/native-path.test.mjs`, `tests/renderer-portability/web-path.test.mjs`, or `tests/renderer-portability/portable-wrong-target.test.mjs` restages those siblings. Proving `fs` or `process` is the OS pivot. Rewriting [[location-41-renderer-portability]] is out.

#### Next implementation step

Restage `tests/portability-metal/portable-metal.test.mjs` so it loads without importing `compile` from `dragonflame-ui/portable` and still proves this checkout does not let a portable Program import Metal.

### Candidate B

Ownership cut. Same destination. Hide the Metal-forbid prove behind a private test harness.

#### Problem

After [[task-334-green-thin-surface]], `dragonflame-ui/portable` no longer exports `compile`. The locked promise `portability-metal.program:forbid-metal` on [[contract-portability-metal]] still points at `tests/portability-metal/portable-metal.test.mjs`, named test: this checkout does not let a portable Program import Metal. That file still imports `{ compile }` from the product specifier and fails to load. [[slice-348-portable-program]] already froze the closed import graph in `tests/renderer-portability/portable-program.test.mjs` and non-goaled restaging this metal CHECK. [[rounds-347-freeze-portable-program]] rejected pointing that slice at the metal test. The non-obvious cut is ownership of the Metal-forbid prove: it belongs to the portability-metal area as a private harness, not as a product `compile` export, and not as restaging the portable-program fence. Public surface is already `h` and `text` from [[slice-332-thin-surface]]. Public Metal is forbidden by [[purpose-portability-metal]]. Do not rewrite [[location-41-renderer-portability]].

#### Usage

A portable Program still imports `h` and `text` from `dragonflame-ui/portable` and returns a tree, same as `tests/renderer-portability/portable-import.test.mjs`. Callers never import Metal, a Metal stub, a forbid-list, `document`, a GPU handle, Host I/O, or `compile`. The named test stays `tests/portability-metal/portable-metal.test.mjs` with the locked title. That test does not import `compile` from `dragonflame-ui/portable`. It uses a private harness under `tests/portability-metal/`. The harness throws when a Program names Metal. Callers of the product never see that harness. CHECK stays that named file. Do not point CHECK at `tests/renderer-portability/portable-program.test.mjs`, `tests/renderer-portability/portable-wrong-target.test.mjs`, `tests/renderer-portability/portable-import.test.mjs`, native-path, or web-path.

#### Shape

Public data stays a Program plus a hyperscript tree on the Renderer portability API ([[glossary]], [[architecture-layer-cake]]). The specifier still exports `h` and `text` only. Metal barrel honesty is knowledge owned by the portability-metal area, not by the portable-program closed-graph CHECK. Behind the product module, a private test harness in `tests/portability-metal/` owns how this checkout proves a Program cannot import Metal. That harness is not a product export and is not the renderer-portability `tests/renderer-portability/compile.mjs` helper, which also knows `document`. Barrel `document` stays [[slice-344-wrong-target-hard-error]]. Closed Metal-or-document host modules stay [[slice-348-portable-program]]. First drain keeps `portability-metal.program:forbid-metal` pointed at the existing named test. Do not add a promise id. Do not mint a spec folder. Do not implement the compiler. The surface is deep by hiding Metal-forbid policy, how a Program is scanned or resolved, and that `compile` is not a product API. The interface stays `h` and `text`.

#### Red flags

A public `compile` on `dragonflame-ui/portable` is the current pass-through and restages a helper [[slice-332-thin-surface]] already refused. Exporting Metal, a throwing Metal stub, or a forbid-list is leakage and a public Metal, forbidden by [[purpose-portability-metal]]. A caller-facing `checkImport` or AllowedSpecifiers type is a shallow module: callers would learn the forbid list. Public parse-then-forbid-then-bind stages are temporal decomposition. Reusing `tests/renderer-portability/compile.mjs` as this CHECK leaks `document` policy into portability-metal and mixes wrong-target with Metal honesty. Pointing this slice CHECK at `tests/renderer-portability/portable-program.test.mjs` restages [[slice-348-portable-program]]. Restaging thin-surface, native-path, web-path, or wrong-target steals sibling proves. Proving `fs` or `process` is the OS pivot. Minting a new spec folder contradicts first-drain.

#### Next implementation step

Red `tests/portability-metal/portable-metal.test.mjs` so this checkout does not let a portable Program import Metal, using a private harness under `tests/portability-metal/` and without importing `compile` from `dragonflame-ui/portable`.

## Synthesis

Base is Candidate B. Graft from A: CHECK lives in `tests/portability-metal/portable-metal.test.mjs` and fails if that file imports `compile` from `dragonflame-ui/portable`, if `compile` is a product export, or if this checkout lets a portable Program import Metal. First drain keeps `portability-metal.program:forbid-metal` on the existing portability-metal ladder. Do not restage portable-program, thin-surface, native-path, web-path, or wrong-target CHECKs.

Reject A as the slice shape: treating `compile` as the same ownership as `tests/renderer-portability/compile.mjs` leaks `document` policy into portability-metal. The grain is Metal-forbid honesty behind a private harness, not a shared compile helper.

Tradeoffs accepted:

- We accept locking the existing portability-metal ladder in exchange for not minting a new spec folder.
- We accept a private harness under `tests/portability-metal/` in exchange for not putting `compile` back on `dragonflame-ui/portable`.
- We accept leaving the closed import graph on [[slice-348-portable-program]] in exchange for not restaging that CHECK.
- We accept leaving barrel `document` on [[slice-344-wrong-target-hard-error]] in exchange for not proving `document` this sitting.

Alternatives considered:

- Point this slice CHECK at `tests/renderer-portability/portable-program.test.mjs`: restage, lost.
- Keep a public `compile` scan on the portable specifier: pass-through, lost.
- Reuse `tests/renderer-portability/compile.mjs` as this CHECK: leakage of `document` policy, lost.
- Export Metal that throws or no-ops: leakage and a public Metal, lost.
- Lock `renderer-portability.program:forbid-os` or prove `fs` or `process`: the named pivot, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-41-renderer-portability]], [[purpose-portability-metal]], [[intent]], and [[architecture-layer-cake]]. First drain does not add a promise id.

Next implementation step: red-green `tests/portability-metal/portable-metal.test.mjs` so this checkout does not let a portable Program import Metal, using a private harness under `tests/portability-metal/` and without a product `compile` export.

### Tracer bullets

1. Red `tests/portability-metal/portable-metal.test.mjs` so this checkout does not let a portable Program import Metal without importing `compile` from `dragonflame-ui/portable`. blocked_by: none. AFK. Do not write a new spec folder. Do not add a promise id. Do not restage locked thin-surface, native-path, web-path, wrong-target, or portable-program. Named prove: this checkout does not let a portable Program import Metal. Private harness under `tests/portability-metal/`. Fail if this checkout grows a public `compile` helper or a public Metal.
2. Green the private harness so that CHECK passes. blocked_by: the red task. AFK. Public names stay `h` and host-agnostic leaves. `compile` is not a product export. Do not point CHECK at `tests/renderer-portability/portable-program.test.mjs`, `tests/renderer-portability/portable-import.test.mjs`, `tests/renderer-portability/native-path.test.mjs`, `tests/renderer-portability/web-path.test.mjs`, or `tests/renderer-portability/portable-wrong-target.test.mjs`. Do not lock `renderer-portability.program:forbid-os`. Do not reuse `tests/renderer-portability/compile.mjs` as this CHECK.

## Confirm

Confirmed.
