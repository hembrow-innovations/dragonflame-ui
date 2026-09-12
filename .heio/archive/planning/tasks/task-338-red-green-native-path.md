---
id: "task-338-red-green-native-path"
title: "Red-green Native path"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-337-spec-native-path"
sprint: "framework-in-draconic"
slice: "slice-336-native-path"
tags: []
created_at: "2026-09-12T05:33:19Z"
updated_at: "2026-09-12T08:08:29Z"
---

# Red-green Native path

## Blocked by

[[task-337-spec-native-path]]: ladder must assert `renderer-portability.native:extern-c-unboxed` before tests.

## Done

`node --test tests/renderer-portability/native-path.test.mjs` passes.

## Context

Callers keep `h` and `text` from `dragonflame-ui/portable`. The prove is native host mapping: the native path uses `extern "C"` and unboxed numbers and structs. That mapping stays private. No public `extern "C"` symbols on that specifier. No packed-scene field names. No JSI or platform channels as the surface.

Do not point CHECK at `tests/ffi-scene-commands/taffy-rect.test.mjs` or `tests/renderer-portability/portable-import.test.mjs`. Do not restage thin-surface or packed-scene oracles. Do not freeze Web path, Wrong-target hard-error, or location-40 nested grains. Do not implement the compiler.

TDD: red test, then the smallest green that locks the oracle.

## Verify

The oracle command passes. No public FFI types on `dragonflame-ui/portable`. Thin-surface tests still pass.

scope: tests/renderer-portability/native-path.test.mjs

## Links

- [[slice-336-native-path]]
- [[task-337-spec-native-path]]
- [[location-41-renderer-portability]]
- [[rounds-335-freeze-native-path]]

## Agent Brief

**Category:** enhancement
**Summary:** Red-green that the portability API native path uses extern C and unboxed numbers and structs without exporting those types.

**Intent (required when product behaviour changes):**
- Promise ids: `renderer-portability.native:extern-c-unboxed`
- Purpose: [[purpose-renderer-portability]]
- Contract-first: the test named in test.md must pass

**Current behavior:**
Thin-surface compile-against tests exist. Packed-scene submit tests exist under ffi-scene-commands. No test yet that the portability API native path uses `extern "C"` and unboxed numbers and structs behind `dragonflame-ui/portable`.

**Desired behavior:**
The oracle command passes. Named test: native path uses extern C and unboxed numbers and structs. Fail if this checkout exports `extern "C"` symbols, packed-scene types, JSI, or platform channels from `dragonflame-ui/portable`.

**Key interfaces:**
- New test file `tests/renderer-portability/native-path.test.mjs`
- No public `extern "C"` export, packed-scene field names, JSI, or platform channels on `dragonflame-ui/portable`

**Acceptance criteria:**
- [x] `node --test tests/renderer-portability/native-path.test.mjs` passes
- [x] The named test owns the native-path prove, not taffy-rect or thin-surface oracles
- [x] No public FFI types on `dragonflame-ui/portable`
- [x] Thin-surface tests still pass

## Gauntlet

- **round 1**: `node --test tests/renderer-portability/native-path.test.mjs`; win; 1 pass 0 fail. Thin-surface tests still pass. No public FFI on `dragonflame-ui/portable`.

**Out of scope:**
- Pointing this CHECK at `tests/ffi-scene-commands/taffy-rect.test.mjs`
- Pointing this CHECK at `tests/renderer-portability/portable-import.test.mjs`
- Restaging thin-surface or packed-scene oracles
- Implementing the compiler
- Freezing Web path, Wrong-target hard-error, or location-40 nested grains
