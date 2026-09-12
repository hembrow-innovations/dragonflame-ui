---
id: "slice-336-native-path"
title: "Native path"
kind: slice
status: met
sprint: "framework-in-draconic"
blocked_by: []
tags: []
created_at: "2026-09-12T05:33:19Z"
updated_at: "2026-09-12T08:09:42Z"
---

# Native path

## Why

Prove the Renderer portability API native path uses `extern "C"` and unboxed numbers and structs. Portable Programs still import the thin surface. Native FFI types stay behind that specifier.

## Done

The native path uses `extern "C"` and unboxed numbers and structs. Callers still use `h` and `text` from `dragonflame-ui/portable`. No public `extern "C"` symbols on that specifier. No packed-scene field names. No JSI or platform channels as the surface.

## Blocked by

None.

## Non-goals

A public `extern "C"` export on `dragonflame-ui/portable`. Packed-scene field names. JSI or platform channels as the surface. Host I/O as a browser. A public `compile` helper. Freezing Web path, Wrong-target hard-error, Portable Program, or [[location-40-ffi-scene-commands]] nested grains. Restaging `renderer-portability.surface:thin` or [[slice-332-thin-surface]]. Restaging `ffi-scene-commands.submit:one-packed-scene`. Pointing this slice CHECK at `tests/ffi-scene-commands/taffy-rect.test.mjs` or `tests/renderer-portability/portable-import.test.mjs`. Implementing the compiler. A second IR. Rewriting [[location-41-renderer-portability]].

## Oracle checklist

- [x] O1: the native path uses `extern "C"` and unboxed numbers and structs
  CHECK: node --test tests/renderer-portability/native-path.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/renderer-portability/native-path.test.mjs pass 1 fail 0

## Pool

Durable links to task ids. Never drop them.

- [[task-337-spec-native-path]]
- [[task-338-red-green-native-path]]

## See also

- [[location-41-renderer-portability]]
- [[location-40-ffi-scene-commands]]
- [[location-18-native-engine-desktop]]
- [[location-17-web-component-library]]
- [[intent]]
- [[glossary]]
- [[architecture-layer-cake]]
- [[purpose-renderer-portability]]
- [[contract-renderer-portability]]
- [[purpose-ffi-scene-commands]]
- [[slice-332-thin-surface]]
- [[rounds-335-freeze-native-path]]
