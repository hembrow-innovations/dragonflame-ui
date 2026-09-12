---
id: "task-345-red-wrong-target"
title: "Red Wrong-target hard-error"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "framework-in-draconic"
slice: "slice-344-wrong-target-hard-error"
tags: []
created_at: "2026-09-12T06:01:23Z"
updated_at: "2026-09-12T06:01:23Z"
---

# Red Wrong-target hard-error

## Blocked by

None.

## Done

`tests/renderer-portability/portable-wrong-target.test.mjs` is red: importing `document` from portable code hard-errors without importing `compile` from `dragonflame-ui/portable`.

## Context

Ladder exists at `docs/specs/ui-framework/renderer-portability/`. Do not create a new spec folder. Do not add a promise id. Keep `renderer-portability.wrong-target:hard-error`. Named test: importing document from portable code hard-errors.

Today's wrong-target test imports `compile` from `dragonflame-ui/portable`. The prove must not import `compile` from that module. Fail if this checkout grows a public `compile` helper, a public `document` or Metal export, or treats wrong-target use as a runtime no-op.

Do not restage `renderer-portability.surface:thin`. Do not restage `renderer-portability.native:extern-c-unboxed`. Do not restage `renderer-portability.web:js-only-dom`. Do not freeze Portable Program.

TDD: red test only. No product code.

## Verify

The named test exists and fails without a product `compile` import.

scope: tests/renderer-portability/portable-wrong-target.test.mjs

## Links

- [[slice-344-wrong-target-hard-error]]
- [[location-41-renderer-portability]]
- [[purpose-renderer-portability]]
- [[contract-renderer-portability]]
- [[test-renderer-portability]]
- [[rounds-343-freeze-wrong-target-hard-error]]

## Agent Brief

**Category:** enhancement
**Summary:** Red that importing document from portable code hard-errors without a product compile export.

**Intent (required when product behaviour changes):**
- Promise ids: `renderer-portability.wrong-target:hard-error`
- Purpose: [[purpose-renderer-portability]]
- Contract-first: the test named in test.md must go red before green

**Current behavior:**
`tests/renderer-portability/portable-wrong-target.test.mjs` imports `compile` from `dragonflame-ui/portable`. `src/portability/surface.js` still publishes a product `compile` helper that scans source.

**Desired behavior:**
The named test is red. Importing `document` from portable code hard-errors. It does not import `compile` from `dragonflame-ui/portable`. Fail if this checkout grows a public `compile` helper, a public `document` or Metal export, or treats wrong-target use as a runtime no-op.

**Key interfaces:**
- Existing test file `tests/renderer-portability/portable-wrong-target.test.mjs`
- No public `compile` helper
- No public `document` or Metal on `dragonflame-ui/portable`

**Acceptance criteria:**
- [ ] `tests/renderer-portability/portable-wrong-target.test.mjs` fails without a product `compile` import
- [ ] The named test does not import `compile` from `dragonflame-ui/portable`
- [ ] No product code
- [ ] `tests/renderer-portability/portable-import.test.mjs` is not rewritten

**Out of scope:**
- Pointing this CHECK at `tests/renderer-portability/portable-import.test.mjs`
- Pointing this CHECK at `tests/renderer-portability/native-path.test.mjs`
- Pointing this CHECK at `tests/renderer-portability/web-path.test.mjs`
- Pointing this CHECK at `tests/portability-metal/portable-metal.test.mjs`
- Restaging thin-surface, native-path, or web-path
- Writing a new spec folder
- Adding a promise id
- Freezing Portable Program
- Implementing the compiler
