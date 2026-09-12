---
id: "task-334-green-thin-surface"
title: "Green Thin surface"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-333-red-thin-surface"
sprint: "framework-in-draconic"
slice: "slice-332-thin-surface"
tags: []
created_at: "2026-09-12T05:19:12Z"
updated_at: "2026-09-12T05:19:12Z"
---

# Green Thin surface

## Blocked by

[[task-333-red-thin-surface]]: the portable-import oracle must be red before green.

## Done

`node --test tests/renderer-portability/portable-import.test.mjs` passes.

## Context

Public names are `h` and host-agnostic leaves on `dragonflame-ui/portable`. `compile` is test harness, not a product export. Framework runtime stays on the framework library. Host mapping stays behind the seam.

Do not point CHECK at `tests/renderer-portability/portable-wrong-target.test.mjs`. Do not restage wrong-target, web JS-only DOM, or native `extern "C"`. Do not freeze Native path, Web path, or Wrong-target hard-error.

TDD: smallest green that locks the oracle.

## Verify

The oracle command passes. No public `compile` helper. Wrong-target tests still pass.

scope: src/portability/surface.js

## Links

- [[slice-332-thin-surface]]
- [[task-333-red-thin-surface]]
- [[location-41-renderer-portability]]
- [[rounds-331-freeze-thin-surface]]

## Agent Brief

**Category:** enhancement
**Summary:** Green the thin Draconic portability surface so a portable Program compiles against h and text.

**Intent (required when product behaviour changes):**
- Promise ids: `renderer-portability.surface:thin`
- Purpose: [[purpose-renderer-portability]]
- Contract-first: the test named in test.md must pass

**Current behavior:**
`src/portability/surface.js` re-exports the framework barrel and a product `compile` helper.

**Desired behavior:**
The oracle command passes. Named test: portable Program compiles against the portability API. Public names are `h` and host-agnostic leaves. Fail if this checkout grows a public `compile` helper, a public `render` on that specifier, Host I/O as a browser, or Metal or `document` on the portable import.

**Key interfaces:**
- `dragonflame-ui/portable` exports `h` and host-agnostic leaves
- No public `compile` helper
- No Host I/O as a browser

**Acceptance criteria:**
- [ ] `node --test tests/renderer-portability/portable-import.test.mjs` passes
- [ ] The named test owns the thin-surface prove, not the wrong-target oracle
- [ ] No public `compile` helper
- [ ] `tests/renderer-portability/portable-wrong-target.test.mjs` still passes

**Out of scope:**
- Pointing this CHECK at `tests/renderer-portability/portable-wrong-target.test.mjs`
- Restaging wrong-target, web JS-only DOM, or native `extern "C"`
- Freezing Native path, Web path, or Wrong-target hard-error
- Implementing the compiler
