---
id: "task-349-red-portable-program"
title: "Red Portable Program"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "framework-in-draconic"
slice: "slice-348-portable-program"
tags: []
created_at: "2026-09-12T06:16:32Z"
updated_at: "2026-09-12T06:16:32Z"
---

# Red Portable Program

## Blocked by

None.

## Done

`tests/renderer-portability/portable-program.test.mjs` is red: a portable Program cannot import Metal or `document` directly without importing `compile` from `dragonflame-ui/portable`.

## Context

Ladder exists at `docs/specs/ui-framework/renderer-portability/` and `docs/specs/ui-framework/portability-metal/`. Do not create a new spec folder. Do not add a promise id. Named prove: a portable Program cannot import Metal or `document` directly.

The private package fence rejects Metal or `document` as host modules. The prove must not import `compile` from `dragonflame-ui/portable`. Fail if this checkout grows a public `compile` helper, a public Metal or `document` host module, or treats a missing host as a runtime no-op.

Do not restage `renderer-portability.surface:thin`. Do not restage `renderer-portability.native:extern-c-unboxed`. Do not restage `renderer-portability.web:js-only-dom`. Do not restage `renderer-portability.wrong-target:hard-error`. Do not restage `portability-metal.program:forbid-metal`. Do not lock `renderer-portability.program:forbid-os`.

TDD: red test only. No product code.

## Verify

The named test exists and fails without a product `compile` import.

scope: tests/renderer-portability/portable-program.test.mjs

## Links

- [[slice-348-portable-program]]
- [[location-41-renderer-portability]]
- [[purpose-renderer-portability]]
- [[contract-renderer-portability]]
- [[test-renderer-portability]]
- [[purpose-portability-metal]]
- [[contract-portability-metal]]
- [[rounds-347-freeze-portable-program]]

## Agent Brief

**Category:** enhancement
**Summary:** Red that a portable Program cannot import Metal or document directly without a product compile export.

**Intent (required when product behaviour changes):**
- Promise ids: none added. Keep existing renderer-portability and portability-metal promises. Do not point `renderer-portability.program:forbid-os`.
- Purpose: [[purpose-renderer-portability]]
- Contract-first: the named prove must go red before green

**Current behavior:**
Portable Programs import `h` and `text` from `dragonflame-ui/portable`. Barrel `document` is [[slice-344-wrong-target-hard-error]]. Barrel Metal is [[purpose-portability-metal]]. There is no `tests/renderer-portability/portable-program.test.mjs`. `src/portability/surface.js` still publishes a product `compile` helper that scans source.

**Desired behavior:**
The named test is red. A portable Program cannot import Metal or `document` directly. It does not import `compile` from `dragonflame-ui/portable`. Fail if this checkout grows a public `compile` helper, a public Metal or `document` host module, or treats a missing host as a runtime no-op.

**Key interfaces:**
- New test file `tests/renderer-portability/portable-program.test.mjs`
- No public `compile` helper
- No public Metal or `document` host module

**Acceptance criteria:**
- [ ] `tests/renderer-portability/portable-program.test.mjs` fails without a product `compile` import
- [ ] The named test does not import `compile` from `dragonflame-ui/portable`
- [ ] No product code
- [ ] Sibling CHECKs are not rewritten

**Out of scope:**
- Pointing this CHECK at `tests/renderer-portability/portable-import.test.mjs`
- Pointing this CHECK at `tests/renderer-portability/native-path.test.mjs`
- Pointing this CHECK at `tests/renderer-portability/web-path.test.mjs`
- Pointing this CHECK at `tests/renderer-portability/portable-wrong-target.test.mjs`
- Pointing this CHECK at `tests/portability-metal/portable-metal.test.mjs`
- Restaging thin-surface, native-path, web-path, wrong-target, or Metal-barrel
- Writing a new spec folder
- Adding a promise id
- Locking `renderer-portability.program:forbid-os`
- Proving `fs` or `process`
- Implementing the compiler
