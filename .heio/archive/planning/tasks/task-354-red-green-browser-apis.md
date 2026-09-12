---
id: "task-354-red-green-browser-apis"
title: "Red-green Browser APIs"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-353-spec-browser-apis"
sprint: "framework-in-draconic"
slice: "slice-352-browser-apis"
tags: []
created_at: "2026-09-12T06:33:10Z"
updated_at: "2026-09-12T09:32:00Z"
---

# Red-green Browser APIs

## Blocked by

[[task-353-spec-browser-apis]]: ladder must lock `js-backend.browser:uses-apis` before tests.

## Done

`node --test tests/js-backend/browser-apis.test.mjs` passes.

## Context

Callers keep the existing dragonflame-ui import. The prove is unnamed usage: that package uses browser APIs, and the source does not name the API set. No public catalog. No BrowserAPI type. No public compile helper.

Do not point CHECK at `tests/js-backend/frontend-ir-js.test.mjs`, `tests/renderer-portability/web-path.test.mjs`, or `tests/renderer-portability/portable-program.test.mjs`. Do not restage honesty, path, web-path, portable-program, or `counter.js-backend:unnamed-apis` oracles. Do not grep a named global list as the prove. Do not freeze Compile-time split, Not RN-but-bytecode, No eval, Phase 0 assumed, or [[location-28-dom-renderer]] nested grains. Do not implement the compiler.

TDD: red test, then the smallest green that locks the oracle.

## Verify

The oracle command passes. No public catalog. Honesty and path tests still pass.

scope: tests/js-backend/browser-apis.test.mjs

## Links

- [[slice-352-browser-apis]]
- [[task-353-spec-browser-apis]]
- [[location-30-js-backend]]
- [[rounds-351-freeze-browser-apis]]

## Agent Brief

**Category:** enhancement
**Summary:** Red-green that the package uses browser APIs and the source does not name the API set.

**Intent (required when product behaviour changes):**
- Promise ids: `js-backend.browser:uses-apis`
- Purpose: [[purpose-js-backend]]
- Contract-first: the test named in test.md must pass

**Current behavior:**
Honesty and path tests exist under `tests/js-backend/`. No test yet that the package uses browser APIs without naming the API set.

**Desired behavior:**
The oracle command passes. Named test: that package uses browser APIs. The source does not name the API set. Fail if this checkout publishes an API catalog, greps a named global list as the prove, or grows a public compile helper.

**Key interfaces:**
- New test file `tests/js-backend/browser-apis.test.mjs`
- No public catalog, BrowserAPI type, or compile helper

**Acceptance criteria:**
- [x] `node --test tests/js-backend/browser-apis.test.mjs` passes
- [x] The named test owns the Browser APIs prove, not frontend-ir-js, web-path, or portable-program oracles
- [x] No public catalog
- [x] Honesty and path tests still pass

## Gauntlet

- **round 1**: `node --test tests/js-backend/browser-apis.test.mjs` win. Named test locks `js-backend.browser:uses-apis` without a catalog, BrowserAPI type, compile helper, or named global list.

**Out of scope:**
- Pointing this CHECK at `tests/js-backend/frontend-ir-js.test.mjs`
- Pointing this CHECK at `tests/renderer-portability/web-path.test.mjs`
- Pointing this CHECK at `tests/renderer-portability/portable-program.test.mjs`
- Restaging honesty, path, web-path, portable-program, or `counter.js-backend:unnamed-apis` oracles
- Implementing the compiler
- Freezing Compile-time split, Not RN-but-bytecode, No eval, Phase 0 assumed, or location-28 nested grains
