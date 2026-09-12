---
id: "task-337-spec-native-path"
title: "Spec Native path"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "framework-in-draconic"
slice: "slice-336-native-path"
tags: []
created_at: "2026-09-12T05:33:19Z"
updated_at: "2026-09-12T12:30:00Z"
---

# Spec Native path

## Blocked by

None.

## Done

Renderer-portability purpose, contract, and test.md cover Native path from [[location-41-renderer-portability]] and [[rounds-335-freeze-native-path]]: the native path uses `extern "C"` and unboxed numbers and structs.

## Context

Extend `docs/specs/ui-framework/renderer-portability/` from [[location-41-renderer-portability]] Native path, [[glossary]] Renderer portability API, and [[intent]] Native LLVM binary. Quote the destination: the native path uses `extern "C"` and unboxed numbers and structs.

Native is funded. Drop the purpose line that native `extern "C"` waits on funding. Do not mint a new spec folder. Assert `renderer-portability.native:extern-c-unboxed`. Named test: native path uses extern C and unboxed numbers and structs.

Do not restage `renderer-portability.surface:thin`. Do not restage `ffi-scene-commands.submit:one-packed-scene`. Do not invent a public `extern "C"` export on `dragonflame-ui/portable`. Do not invent packed-scene field names. Do not rewrite [[location-41-renderer-portability]]. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files name the oracle test and bring Native path in scope.

scope: docs/specs/ui-framework/renderer-portability/

## Links

- [[slice-336-native-path]]
- [[location-41-renderer-portability]]
- [[location-40-ffi-scene-commands]]
- [[purpose-renderer-portability]]
- [[contract-renderer-portability]]
- [[test-renderer-portability]]
- [[purpose-ffi-scene-commands]]
- [[rounds-335-freeze-native-path]]

## Agent Brief

**Category:** enhancement
**Summary:** Extend the renderer-portability ladder so Native path is in scope and uses extern C plus unboxed numbers and structs.

**Intent (required when product behaviour changes):**
- Promise ids: assert `renderer-portability.native:extern-c-unboxed`
- Purpose: extend [[purpose-renderer-portability]] in this sitting
- Contract-first: assert `renderer-portability.native:extern-c-unboxed` then name the test in test.md. No product code

**Current behavior:**
[[purpose-renderer-portability]] is web-path only and lists native `extern "C"` as out of scope waiting on funding. [[contract-renderer-portability]] locks thin surface and wrong-target. No renderer-portability promise yet that the native path uses `extern "C"` and unboxed numbers and structs.

**Desired behavior:**
The existing folder locks one new oracle: the native path uses `extern "C"` and unboxed numbers and structs. Oracle command is `node --test tests/renderer-portability/native-path.test.mjs`. Thin-surface and ffi-scene-commands promises stay untouched.

**Key interfaces:**
- Purpose, contract, and test notes for area `renderer-portability`
- Promises must not add a public `extern "C"` export, packed-scene field names, JSI, or platform channels on `dragonflame-ui/portable`

**Acceptance criteria:**
- [x] purpose, contract, and test.md cover Native path
- [x] test.md names the oracle command above
- [x] locked thin-surface and ffi-scene-commands promises are not rewritten
- [x] No product code

**Out of scope:**
- Creating a new spec folder
- Restaging `renderer-portability.surface:thin`
- Restaging [[purpose-ffi-scene-commands]] packed-scene oracles
- Freezing Web path, Wrong-target hard-error, or Portable Program
- Implementing the compiler
