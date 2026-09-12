---
id: "task-346-green-wrong-target"
title: "Green Wrong-target hard-error"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-345-red-wrong-target"
sprint: "framework-in-draconic"
slice: "slice-344-wrong-target-hard-error"
tags: []
created_at: "2026-09-12T06:01:23Z"
updated_at: "2026-09-12T08:56:38Z"
---

# Green Wrong-target hard-error

## Blocked by

[[task-345-red-wrong-target]]: the wrong-target oracle must be red before green.

## Done

`node --test tests/renderer-portability/portable-wrong-target.test.mjs` passes.

## Context

The private renderer gate hard-errors `document` as a bindable op. Public names stay `h` and host-agnostic leaves on `dragonflame-ui/portable`. `compile` is test harness, not a product export. Wrong-target use is not a runtime no-op.

Do not point CHECK at `tests/renderer-portability/portable-import.test.mjs`, `tests/renderer-portability/native-path.test.mjs`, `tests/renderer-portability/web-path.test.mjs`, or `tests/portability-metal/portable-metal.test.mjs`. Do not restage thin-surface, native-path, or web-path. Do not freeze Portable Program.

TDD: smallest green that locks the oracle.

## Verify

The oracle command passes. No public `compile` helper. No public `document` or Metal on `dragonflame-ui/portable`. Thin-surface tests still pass.

scope: src/portability/surface.js

## Links

- [[slice-344-wrong-target-hard-error]]
- [[task-345-red-wrong-target]]
- [[location-41-renderer-portability]]
- [[rounds-343-freeze-wrong-target-hard-error]]

## Agent Brief

**Category:** enhancement
**Summary:** Green the private renderer gate so importing document from portable code hard-errors.

**Intent (required when product behaviour changes):**
- Promise ids: `renderer-portability.wrong-target:hard-error`
- Purpose: [[purpose-renderer-portability]]
- Contract-first: the test named in test.md must pass

**Current behavior:**
`src/portability/surface.js` still publishes a product `compile` helper that scans source. The public specifier is a forbid-list plus scan, not a private target gate.

**Desired behavior:**
The oracle command passes. Named test: importing document from portable code hard-errors. The private renderer gate owns the hard-error. Fail if this checkout grows a public `compile` helper, a public `document` or Metal export, or treats wrong-target use as a runtime no-op.

**Key interfaces:**
- `dragonflame-ui/portable` exports `h` and host-agnostic leaves
- No public `compile` helper
- No public `document` or Metal

**Acceptance criteria:**
- [x] `node --test tests/renderer-portability/portable-wrong-target.test.mjs` passes
- [x] The named test owns the wrong-target prove, not the thin-surface oracle
- [x] No public `compile` helper
- [x] `tests/renderer-portability/portable-import.test.mjs` still passes

## Gauntlet

- **round 1**: `node --test tests/renderer-portability/portable-wrong-target.test.mjs`; win; 1 pass 0 fail. Thin-surface tests still pass. No public `compile`, `document`, or Metal.

**Out of scope:**
- Pointing this CHECK at `tests/renderer-portability/portable-import.test.mjs`
- Pointing this CHECK at `tests/renderer-portability/native-path.test.mjs`
- Pointing this CHECK at `tests/renderer-portability/web-path.test.mjs`
- Pointing this CHECK at `tests/portability-metal/portable-metal.test.mjs`
- Restaging thin-surface, native-path, or web-path
- Freezing Portable Program
- Implementing the compiler
