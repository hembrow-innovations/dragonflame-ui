---
id: "task-333-red-thin-surface"
title: "Red Thin surface"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "framework-in-draconic"
slice: "slice-332-thin-surface"
tags: []
created_at: "2026-09-12T05:19:12Z"
updated_at: "2026-09-12T05:19:12Z"
---

# Red Thin surface

## Blocked by

None.

## Done

`tests/renderer-portability/portable-import.test.mjs` is red: a portable Program compiles against `h` and `text` from `dragonflame-ui/portable` without importing `compile` from that module.

## Context

Ladder exists at `docs/specs/ui-framework/renderer-portability/`. Do not create a new spec folder. Do not add a promise id. Keep `renderer-portability.surface:thin`. Named test: portable Program compiles against the portability API.

Today's portable import re-exports the framework barrel and a product `compile` helper. The prove must not import `compile` from `dragonflame-ui/portable`. Fail if this checkout grows a public `compile` helper, a public `render` on that specifier, Host I/O as a browser, or Metal or `document` on the portable import.

Do not restage `renderer-portability.wrong-target:hard-error`. Do not point CHECK at `tests/renderer-portability/portable-wrong-target.test.mjs`. Do not freeze Native path, Web path, or Wrong-target hard-error.

TDD: red test only. No product code.

## Verify

The named test exists and fails on the current barrel plus product `compile` export.

scope: tests/renderer-portability/portable-import.test.mjs

## Links

- [[slice-332-thin-surface]]
- [[location-41-renderer-portability]]
- [[purpose-renderer-portability]]
- [[contract-renderer-portability]]
- [[test-renderer-portability]]
- [[rounds-331-freeze-thin-surface]]

## Agent Brief

**Category:** enhancement
**Summary:** Red that a portable Program compiles against the thin portability API without a product compile export.

**Intent (required when product behaviour changes):**
- Promise ids: `renderer-portability.surface:thin`
- Purpose: [[purpose-renderer-portability]]
- Contract-first: the test named in test.md must go red before green

**Current behavior:**
`tests/renderer-portability/portable-import.test.mjs` imports `compile` from `dragonflame-ui/portable`. `src/portability/surface.js` re-exports the framework barrel and a product `compile` helper.

**Desired behavior:**
The named test is red. It imports `h` and `text` from `dragonflame-ui/portable` and does not import `compile` from that module. Fail if this checkout grows a public `compile` helper, a public `render` on that specifier, Host I/O as a browser, or Metal or `document` on the portable import.

**Key interfaces:**
- Existing test file `tests/renderer-portability/portable-import.test.mjs`
- No public `compile` helper
- No Host I/O as a browser

**Acceptance criteria:**
- [ ] `tests/renderer-portability/portable-import.test.mjs` fails on the current barrel
- [ ] The named test does not import `compile` from `dragonflame-ui/portable`
- [ ] No product code
- [ ] `tests/renderer-portability/portable-wrong-target.test.mjs` is not rewritten

**Out of scope:**
- Pointing this CHECK at `tests/renderer-portability/portable-wrong-target.test.mjs`
- Restaging `renderer-portability.wrong-target:hard-error`
- Writing a new spec folder
- Adding a promise id
- Freezing Native path, Web path, or Wrong-target hard-error
- Implementing the compiler
