---
id: "task-379-green-forbid-metal"
title: "Green Forbid Metal"
kind: task
status: ready
mode: afk
blocked_by:
  - task-378-red-forbid-metal
sprint: "framework-in-draconic"
slice: "slice-377-forbid-metal"
tags: []
created_at: "2026-09-12T08:10:57Z"
updated_at: "2026-09-12T08:10:57Z"
---

# Green Forbid Metal

## Blocked by

[[task-378-red-forbid-metal]]: the named test must be red first.

## Done

`node --test tests/portability-metal/portable-metal.test.mjs` passes: this checkout does not let a portable Program import Metal, without a product `compile` export.

## Context

Ladder exists at `docs/specs/ui-framework/portability-metal/`. Do not create a new spec folder. Do not add a promise id. Keep `portability-metal.program:forbid-metal` pointed at the existing named test.

Public names stay `h` and host-agnostic leaves from `dragonflame-ui/portable`. `compile` is not a product export. Private harness under `tests/portability-metal/` owns the Metal-forbid prove. Do not reuse `tests/renderer-portability/compile.mjs` as this CHECK.

Do not restage `renderer-portability.surface:thin`. Do not restage `renderer-portability.native:extern-c-unboxed`. Do not restage `renderer-portability.web:js-only-dom`. Do not restage `renderer-portability.wrong-target:hard-error`. Do not restage [[slice-348-portable-program]]. Do not lock `renderer-portability.program:forbid-os`.

## Verify

CHECK: node --test tests/portability-metal/portable-metal.test.mjs
EXPECT: pass

scope: tests/portability-metal/, src/portability/

## Links

- [[slice-377-forbid-metal]]
- [[task-378-red-forbid-metal]]
- [[ticket-371-portable-metal-compile-import]]
- [[location-41-renderer-portability]]
- [[purpose-portability-metal]]
- [[contract-portability-metal]]
- [[test-portability-metal]]
- [[rounds-376-freeze-forbid-metal]]

## Agent Brief

**Category:** bug
**Summary:** Green that this checkout does not let a portable Program import Metal, without a product compile export.

**Intent (required when product behaviour changes):**
- Promise ids: `portability-metal.program:forbid-metal`. Do not add a promise id. Do not point `renderer-portability.program:forbid-os`.
- Purpose: [[purpose-portability-metal]]
- Contract-first: keep the existing promise, then make the named test pass

**Current behavior:**
[[task-378-red-forbid-metal]] left the named test red. Callers still import `h` and `text` from `dragonflame-ui/portable`. A private harness under `tests/portability-metal/` owns the prove.

**Desired behavior:**
The named test passes. This checkout does not let a portable Program import Metal. The product specifier does not export `compile` or Metal. Callers still import `h` and `text` only.

**Key interfaces:**
- Named test `tests/portability-metal/portable-metal.test.mjs`
- Private harness under `tests/portability-metal/`
- Public names stay `h` and host-agnostic leaves
- No public `compile` helper
- No public Metal

**Acceptance criteria:**
- [ ] `node --test tests/portability-metal/portable-metal.test.mjs` passes
- [ ] The named test does not import `compile` from `dragonflame-ui/portable`
- [ ] `dragonflame-ui/portable` does not export `compile` or Metal
- [ ] `portability-metal.program:forbid-metal` still holds

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
