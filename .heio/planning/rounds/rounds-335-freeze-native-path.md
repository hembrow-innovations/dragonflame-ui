---
id: "rounds-335-freeze-native-path"
title: "Freeze Native path"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T05:33:19Z"
updated_at: "2026-09-12T05:33:19Z"
---

# Freeze Native path

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN Native path under [[location-41-renderer-portability]]. Sprint `framework-in-draconic` may freeze. Do not rewrite [[location-41-renderer-portability]]. Do not restage `renderer-portability.surface:thin`, `renderer-portability.wrong-target:hard-error`, or `ffi-scene-commands.submit:one-packed-scene`. Do not freeze Web path, Wrong-target hard-error, Portable Program, or [[location-40-ffi-scene-commands]] nested grains.

## Vault pack

Query: Native path: the native path uses `extern "C"` and unboxed numbers and structs
Area: renderer-portability

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-41-renderer-portability.md`
- `.heio/planning/sprints/framework-in-draconic/shape.md`
- `docs/specs/ui-framework/renderer-portability/purpose.md`
- `docs/specs/ui-framework/renderer-portability/contract.md`
- `docs/specs/ui-framework/ffi-scene-commands/purpose.md`
- `docs/specs/ui-framework/ffi-scene-commands/contract.md`
- `docs/overview/glossary.md`
- `docs/architecture/architecture-layer-cake.md`

Related:

- `.heio/planning/locations/location-40-ffi-scene-commands.md`
- `.heio/planning/locations/location-18-native-engine-desktop.md`
- `.heio/planning/locations/location-35-host-config.md`
- `docs/specs/ui-framework/host-config/purpose.md`
- `docs/overview/overview-ui-framework.md`

Excluded: no packer; no blocking slice; scribble; archive; ADRs none; test.md; web path; wrong-target; Portable Program; sibling sprint slices including frozen slice-332-thin-surface

Next: freeze one Native path slice. Do not write `docs/specs/`.

No packer script exists. Assembled by hand. Open product questions are none. Native is funded. [[purpose-renderer-portability]] still lists native `extern "C"` as out of scope.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-41-renderer-portability]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether the renderer-portability spec folder already covers this grain.
4. **Repeat**: Whether packed-scene, Taffy, GPU, or thin-surface oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Native path. Done: the native path uses `extern "C"` and unboxed numbers and structs. Try the native path. Pivot if platform channels or JSI are the surface. Portable Programs still import `h` and `text` from `dragonflame-ui/portable`. Native host mapping stays behind that specifier.
2. **Named set**: Locked [[intent]] Native is LLVM binary, no WebView, no JS engine. [[glossary]] Renderer portability API native path uses `extern "C"` and unboxed numbers and structs. [[architecture-layer-cake]] native path calls the engine through that convention. Native is funded on [[purpose-desktop-embedder]]. Smallest reversible defaults: no public `extern "C"` symbols on `dragonflame-ui/portable`, no packed-scene field names, no public JSI or platform channels, CHECK lives in `tests/renderer-portability/native-path.test.mjs`, first drain asserts `renderer-portability.native:extern-c-unboxed`. All tasks `mode: afk`.
3. **Ladder**: Exists at `docs/specs/ui-framework/renderer-portability/`. Open product questions none. Native path is out of scope there and still says it waits on funding. First drain extends that folder for funded native. Do not mint a new spec folder. This sitting does not write `docs/specs/`.
4. **Repeat**: Do not restage `renderer-portability.surface:thin` or [[slice-332-thin-surface]]. Do not restage `renderer-portability.wrong-target:hard-error`. Do not restage `ffi-scene-commands.submit:one-packed-scene`, `ffi-scene-commands.layout:taffy`, or `ffi-scene-commands.raster:gpu-not-ui`. Do not point CHECK at `tests/ffi-scene-commands/taffy-rect.test.mjs` or `tests/renderer-portability/portable-import.test.mjs`.
5. **Wait**: Web path. Wrong-target hard-error. Portable Program. [[location-40-ffi-scene-commands]] nested grains. Packed-scene field names. A public `compile` helper. Host I/O as a browser. Platform channels or JSI. Implementing the compiler. A second IR.

### Candidate A

Location-named surface. Native path is target policy of the same import.

#### Problem

Portable UI already compiles against one thin Draconic import, locked as `renderer-portability.surface:thin` on [[contract-renderer-portability]] and frozen by [[slice-332-thin-surface]]. Native is funded on [[purpose-desktop-embedder]], but [[purpose-renderer-portability]] is still web-path only and still says native `extern "C"` waits on funding. This grain is the nested Native path on [[location-41-renderer-portability]]: that same Renderer portability API uses `extern "C"` and unboxed numbers and structs. See also [[location-40-ffi-scene-commands]], [[glossary]], [[architecture-layer-cake]], and [[intent]]. The non-obvious cut is host-contact policy on this API, not a second public FFI surface and not restaging `ffi-scene-commands.submit:one-packed-scene`. Bet: try the native path; pivot if platform channels or JSI are the surface. Do not rewrite the parent destination.

#### Usage

A portable Program still imports `h` and `text` from `dragonflame-ui/portable` and returns a tree, same as `tests/renderer-portability/portable-import.test.mjs`. Callers do not import Metal or `document`, do not call `extern "C"`, and do not name a packed scene. Native compile of that Program reaches the engine through `extern "C"` and unboxed numbers and structs behind the import. `compile` stays test harness, not a product export. There is no public `render` on this specifier. CHECK lives under `tests/renderer-portability/`, not `tests/ffi-scene-commands/taffy-rect.test.mjs`.

#### Shape

One public module remains the Renderer portability API. Native path is target policy of that module, not a new specifier and not engine types on the barrel. Caller data is a Program plus a hyperscript tree. Behind the module, native host contact is `extern "C"` plus unboxed numbers and structs. Packed-scene fields, one submit, Taffy, and GPU-not-UI stay on [[purpose-ffi-scene-commands]]. Nested grains on [[location-40-ffi-scene-commands]] stay unfrozen. Wrong-target and web JS-only DOM stay off this sitting. First drain may extend [[purpose-renderer-portability]] and [[contract-renderer-portability]] with the location sentence. Do not mint a spec folder. The surface is deep by hiding calling convention, LLVM versus JS emit, and engine FFI. The interface stays `h` and `text`. No public JSI, platform channels, Host I/O as a browser, packed-scene field names, compile helper, or second IR.

#### Red flags

Exporting `extern "C"` symbols, unboxed scene types, or submit on `dragonflame-ui/portable` would leak [[location-40-ffi-scene-commands]] and restage its submit promise. A pass-through wrapper of one packed-scene submit adds a layer with no policy. Public compile-then-bind-then-submit stages would be temporal decomposition. Making callers coordinate `h`, submit, and unboxed structs would be shallow. Platform channels or JSI as the surface is the named pivot.

#### Next implementation step

Extend the renderer-portability ladder for this native-path sentence, then write a red test under `tests/renderer-portability/` that the portable import's native path uses `extern "C"` and unboxed numbers and structs.

### Candidate B

Ownership cut. Same destination. Hide native FFI behind the specifier.

#### Problem

The Native path grain under [[location-41-renderer-portability]] is working when that path uses `extern "C"` and unboxed numbers and structs. See also [[location-40-ffi-scene-commands]]. Native is funded. [[purpose-renderer-portability]] still treats native as out of scope. The non-obvious cut is ownership, not the FFI vocabulary. If `dragonflame-ui/portable` grows packed scene structs and `extern "C"` signatures, callers learn engine types and the frozen thin surface in [[slice-332-thin-surface]] becomes a pass-through. [[intent]] says Native is LLVM binary, no WebView, no JS engine. [[glossary]] and [[architecture-layer-cake]] already name the Renderer portability API as the thin Draconic surface, with native calling the engine through `extern "C"` and unboxed numbers and structs. That mapping belongs behind the surface. This sitting does not restage `renderer-portability.surface:thin`, wrong-target, web JS-only DOM, Taffy, GPU-not-UI, or `tests/ffi-scene-commands/taffy-rect.test.mjs`. It does not freeze Web path, Wrong-target hard-error, or Portable Program.

#### Usage

A portable Program still imports `h` and `text` from `dragonflame-ui/portable` and returns a hyperscript tree. Native callers do the same. They do not import scene structs, engine types, `extern "C"` symbols, JSI, platform channels, Metal, `document`, a public `compile` helper, or a public `render`. Behind that specifier, a private native host mapping talks to the engine with `extern "C"` and unboxed numbers and structs. Packed-scene field names stay unnamed. `compile` stays test harness.

#### Shape

One public module remains the Program-facing seam: `dragonflame-ui/portable`. Data on the caller side is a portable Program plus a hyperscript tree of host-agnostic leaves. Data behind the module on native is unboxed numbers and structs plus one in-process `extern "C"` submit already owned by [[purpose-ffi-scene-commands]]. Flow is import, return a tree, private native mapping. This module owns portable host contact. Native FFI types are not this seam. Location-40 owns packed-scene submit. This grain owns the fact that the portability API's native path uses that mapping privately. Encoded in the import: a Program that only uses this module cannot name a scene struct, JSI, or engine type. First drain may extend `docs/specs/ui-framework/renderer-portability/` for funded native. Do not mint a new spec folder. Do not invent a second IR. The interface stays `h` and host-agnostic leaves. Depth is hiding native FFI, Dual-worlds unboxing, and host choice behind that import.

#### Red flags

Exporting `extern "C"` signatures or packed scene structs from `dragonflame-ui/portable` is leakage. A pass-through that forwards the same packed-scene submit as [[contract-ffi-scene-commands]] adds a layer without policy. Public Pack then Submit then Raster stages are temporal decomposition. Callers coordinating `h`, a scene struct, and submit to draw is a shallow module. Restaging `tests/ffi-scene-commands/taffy-rect.test.mjs` or growing JSI, platform channels, Host I/O as a browser, or a public `compile` helper is out.

#### Next implementation step

Extend the existing renderer-portability ladder so a native-target Program still compiles against `h` and `text` from `dragonflame-ui/portable` while the private native mapping uses `extern "C"` and unboxed numbers and structs, without exporting those types.

## Synthesis

Base is Candidate B. Graft from A: Done quotes the [[location-41-renderer-portability]] Native path destination. First drain extends [[purpose-renderer-portability]] and [[contract-renderer-portability]] with `renderer-portability.native:extern-c-unboxed`. CHECK lives in `tests/renderer-portability/native-path.test.mjs` and fails if this checkout exports `extern "C"` symbols, packed-scene types, JSI, or platform channels from `dragonflame-ui/portable`.

Reject A as the slice shape: treating native FFI types as the portable import is leakage and would restage [[location-40-ffi-scene-commands]].

Tradeoffs accepted:

- We accept extending the existing renderer-portability ladder in exchange for not minting a new spec folder.
- We accept not restaging Taffy or one packed-scene submit in exchange for a portability native-path prove.
- We accept no public FFI types on `dragonflame-ui/portable` in exchange for hiding host mapping behind the specifier.

Alternatives considered:

- Export `extern "C"` or packed scene structs from the portable specifier: leakage, lost.
- Slice CHECK is `tests/ffi-scene-commands/taffy-rect.test.mjs`: restage, lost.
- Platform channels or JSI as the surface: named pivot, lost.
- Freeze Web path, Wrong-target hard-error, or location-40 nested grains in this sitting: different grain, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-41-renderer-portability]], [[purpose-renderer-portability]], [[intent]], and [[architecture-layer-cake]]. Native is funded, so the purpose out-of-scope line that waits on funding is stale. First drain drops that wait.

Next implementation step: extend the renderer-portability ladder, then red-green `tests/renderer-portability/native-path.test.mjs` so the portable import's native path uses `extern "C"` and unboxed numbers and structs without exporting those types.

### Tracer bullets

1. Extend `docs/specs/ui-framework/renderer-portability/` so Native path is in scope and `renderer-portability.native:extern-c-unboxed` is asserted. blocked_by: none. AFK. Do not write a new spec folder. Do not restage `renderer-portability.surface:thin` or `ffi-scene-commands.submit:one-packed-scene`. Named test: native path uses extern C and unboxed numbers and structs. Drop the purpose line that native waits on funding.
2. Red-green `tests/renderer-portability/native-path.test.mjs` so a native-target Program still compiles against `h` and `text` from `dragonflame-ui/portable` while the private native mapping uses `extern "C"` and unboxed numbers and structs. blocked_by: the spec task. AFK. Do not export FFI types from that specifier. Do not point CHECK at `tests/ffi-scene-commands/taffy-rect.test.mjs` or `tests/renderer-portability/portable-import.test.mjs`. Do not freeze Web path, Wrong-target hard-error, or location-40 nested grains.

## Confirm

Confirmed.
