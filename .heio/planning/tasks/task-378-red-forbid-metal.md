---
id: "task-378-red-forbid-metal"
title: "Red Forbid Metal"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "framework-in-draconic"
slice: "slice-377-forbid-metal"
tags: []
created_at: "2026-09-12T08:10:57Z"
updated_at: "2026-09-12T08:10:57Z"
---

# Red Forbid Metal

## Blocked by

None.

## Done

`tests/portability-metal/portable-metal.test.mjs` is red: this checkout does not let a portable Program import Metal without importing `compile` from `dragonflame-ui/portable`.

## Context

Ladder exists at `docs/specs/ui-framework/portability-metal/`. Do not create a new spec folder. Do not add a promise id. Keep `portability-metal.program:forbid-metal` pointed at the existing named test. Named prove: this checkout does not let a portable Program import Metal.

The named test must load without importing `compile` from `dragonflame-ui/portable`. Private harness under `tests/portability-metal/`. Fail if this checkout grows a public `compile` helper or a public Metal.

Do not restage `renderer-portability.surface:thin`. Do not restage `renderer-portability.native:extern-c-unboxed`. Do not restage `renderer-portability.web:js-only-dom`. Do not restage `renderer-portability.wrong-target:hard-error`. Do not restage [[slice-348-portable-program]]. Do not lock `renderer-portability.program:forbid-os`. Do not reuse `tests/renderer-portability/compile.mjs` as this CHECK.

TDD: red test only. No product code.

## Verify

The named test exists and fails without a product `compile` import.

scope: tests/portability-metal/

## Links

- [[slice-377-forbid-metal]]
- [[ticket-371-portable-metal-compile-import]]
- [[location-41-renderer-portability]]
- [[purpose-portability-metal]]
- [[contract-portability-metal]]
- [[test-portability-metal]]
- [[rounds-376-freeze-forbid-metal]]

## Agent Brief

**Category:** bug
**Summary:** Red that this checkout does not let a portable Program import Metal without a product compile export.

**Intent (required when product behaviour changes):**
- Promise ids: `portability-metal.program:forbid-metal`. Do not add a promise id. Do not point `renderer-portability.program:forbid-os`.
- Purpose: [[purpose-portability-metal]]
- Contract-first: the named prove must go red before green

**Current behavior:**
Portable Programs import `h` and `text` from `dragonflame-ui/portable`. That specifier no longer exports `compile`. `tests/portability-metal/portable-metal.test.mjs` still imports `{ compile }` from that specifier and fails to load.

**Desired behavior:**
The named test is red. This checkout does not let a portable Program import Metal. The test does not import `compile` from `dragonflame-ui/portable`. A private harness under `tests/portability-metal/` owns the prove. Fail if this checkout grows a public `compile` helper or a public Metal.

**Key interfaces:**
- Named test `tests/portability-metal/portable-metal.test.mjs`
- Private harness under `tests/portability-metal/`
- No public `compile` helper
- No public Metal

**Acceptance criteria:**
- [ ] `tests/portability-metal/portable-metal.test.mjs` fails without a product `compile` import
- [ ] The named test does not import `compile` from `dragonflame-ui/portable`
- [ ] No product code
- [ ] Sibling CHECKs are not rewritten

**Out of scope:**
- Pointing this CHECK at `tests/renderer-portability/portable-program.test.mjs`
- Pointing this CHECK at `tests/renderer-portability/portable-import.test.mjs`
- Pointing this CHECK at `tests/renderer-portability/native-path.test.mjs`
- Pointing this CHECK at `tests/renderer-portability/web-path.test.mjs`
- Pointing this CHECK at `tests/renderer-portability/portable-wrong-target.test.mjs`
- Reusing `tests/renderer-portability/compile.mjs` as this CHECK
- Restaging thin-surface, native-path, web-path, wrong-target, or portable-program
- Writing a new spec folder
- Adding a promise id
- Locking `renderer-portability.program:forbid-os`
- Proving `fs` or `process`
- Implementing the compiler
