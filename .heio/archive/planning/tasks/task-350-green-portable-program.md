---
id: "task-350-green-portable-program"
title: "Green Portable Program"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-349-red-portable-program"
sprint: "framework-in-draconic"
slice: "slice-348-portable-program"
tags: []
created_at: "2026-09-12T06:16:32Z"
updated_at: "2026-09-12T09:16:40Z"
---

# Green Portable Program

## Blocked by

[[task-349-red-portable-program]]: the Portable Program oracle must be red before green.

## Done

`node --test tests/renderer-portability/portable-program.test.mjs` passes.

## Context

The private package fence rejects Metal or `document` as host modules. Public names stay `h` and host-agnostic leaves on `dragonflame-ui/portable`. `compile` is test harness, not a product export. A missing host is not a runtime no-op.

Do not point CHECK at `tests/renderer-portability/portable-import.test.mjs`, `tests/renderer-portability/native-path.test.mjs`, `tests/renderer-portability/web-path.test.mjs`, `tests/renderer-portability/portable-wrong-target.test.mjs`, or `tests/portability-metal/portable-metal.test.mjs`. Do not restage thin-surface, native-path, web-path, wrong-target, or Metal-barrel. Do not lock `renderer-portability.program:forbid-os`.

TDD: smallest green that locks the oracle.

## Verify

The oracle command passes. No public `compile` helper. No public Metal or `document` host module. Thin-surface and wrong-target tests still pass.

scope: src/portability/

## Links

- [[slice-348-portable-program]]
- [[task-349-red-portable-program]]
- [[location-41-renderer-portability]]
- [[rounds-347-freeze-portable-program]]

## Agent Brief

**Category:** enhancement
**Summary:** Green the private package fence so a portable Program cannot import Metal or document directly.

**Intent (required when product behaviour changes):**
- Promise ids: none added. Keep existing renderer-portability and portability-metal promises. Do not point `renderer-portability.program:forbid-os`.
- Purpose: [[purpose-renderer-portability]]
- Contract-first: the named prove must pass

**Current behavior:**
`src/portability/surface.js` still publishes a product `compile` helper that scans source. Direct Metal or `document` as host modules is not fenced as a closed Program graph.

**Desired behavior:**
The oracle command passes. Named prove: a portable Program cannot import Metal or `document` directly. The private package fence owns the closed graph. Fail if this checkout grows a public `compile` helper, a public Metal or `document` host module, or treats a missing host as a runtime no-op.

**Key interfaces:**
- `dragonflame-ui/portable` exports `h` and host-agnostic leaves
- No public `compile` helper
- No public Metal or `document` host module

**Acceptance criteria:**
- [x] `node --test tests/renderer-portability/portable-program.test.mjs` passes
- [x] The named test owns the closed-graph prove, not the thin-surface, wrong-target, or Metal-barrel oracles
- [x] No public `compile` helper
- [x] `tests/renderer-portability/portable-import.test.mjs` still passes
- [x] `tests/renderer-portability/portable-wrong-target.test.mjs` still passes

## Gauntlet

- **round 1**: `node --test tests/renderer-portability/portable-program.test.mjs`; win; 1 pass 0 fail. Thin-surface and wrong-target tests still pass. No public `compile`, `document`, or Metal. Private fence under `src/portability/fence/` throws for Metal and document host modules.

**Out of scope:**
- Pointing this CHECK at `tests/renderer-portability/portable-import.test.mjs`
- Pointing this CHECK at `tests/renderer-portability/native-path.test.mjs`
- Pointing this CHECK at `tests/renderer-portability/web-path.test.mjs`
- Pointing this CHECK at `tests/renderer-portability/portable-wrong-target.test.mjs`
- Pointing this CHECK at `tests/portability-metal/portable-metal.test.mjs`
- Restaging thin-surface, native-path, web-path, wrong-target, or Metal-barrel
- Locking `renderer-portability.program:forbid-os`
- Proving `fs` or `process`
- Implementing the compiler
