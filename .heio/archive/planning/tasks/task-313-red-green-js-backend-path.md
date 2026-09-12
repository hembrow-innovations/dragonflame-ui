---
id: "task-313-red-green-js-backend-path"
title: "Red-green JS backend path"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-312-spec-js-backend-path"
sprint: "framework-in-draconic"
slice: "slice-311-js-backend"
tags: []
created_at: "2026-09-12T14:00:00Z"
updated_at: "2026-09-12T06:38:26Z"
---

# Red-green JS backend path

## Blocked by

[[task-312-spec-js-backend-path]]: ladder must lock `js-backend.path:frontend-ir-js` before tests.

## Done

`node --test tests/js-backend/frontend-ir-js.test.mjs` passes.

## Context

Callers keep importing dragonflame-ui. The prove is the consumed web artifact: web compile is Frontend to shared IR to the JS backend, and the browser runs that JavaScript. This repo does not own emit. No public compile helper. No Frontend type. No IR type.

Do not point CHECK at `tests/framework-source/sibling-compile.test.mjs`. Do not restage `tests/js-backend/no-eval-here.test.mjs`, `tests/js-backend/no-native-stubs.test.mjs`, or `tests/js-backend/no-emit-here.test.mjs`. Do not restage [[purpose-absence]] filename oracles. Do not freeze Browser APIs.

TDD: red test, then the smallest green that locks the oracle.

## Verify

The oracle command passes. No public compile helper. Honesty tests still pass. Framework-source tests still pass.

scope: tests/js-backend/frontend-ir-js.test.mjs

## Links

- [[slice-311-js-backend]]
- [[task-312-spec-js-backend-path]]
- [[location-30-js-backend]]
- [[rounds-310-freeze-js-backend]]

## Agent Brief

**Category:** enhancement
**Summary:** Red-green that web compile is Frontend to shared IR to the JS backend and the browser runs that JavaScript.

**Intent (required when product behaviour changes):**
- Promise ids: `js-backend.path:frontend-ir-js`
- Purpose: [[purpose-js-backend]]
- Contract-first: the test named in test.md must pass

**Current behavior:**
Honesty tests exist under `tests/js-backend/`. No test yet for Frontend to shared IR to the JS backend. [[slice-283-draconic-framework-source]] already proves one Draconic export compiles through the sibling JS backend.

**Desired behavior:**
The oracle command passes. Named test: web compile is Frontend to shared IR to the JS backend, and the browser runs that JavaScript. Fail if this checkout grows a compile API or Frontend or IR types. The package remains ordinary JavaScript a browser runs.

**Key interfaces:**
- New test file `tests/js-backend/frontend-ir-js.test.mjs`
- No public compile helper, Frontend type, or IR type

**Acceptance criteria:**
- [x] `node --test tests/js-backend/frontend-ir-js.test.mjs` passes
- [x] The named test owns the path prove, not sibling-compile or honesty oracles
- [x] No public compile helper
- [x] `tests/js-backend/no-eval-here.test.mjs` still passes
- [x] `tests/js-backend/no-native-stubs.test.mjs` still passes
- [x] `tests/js-backend/no-emit-here.test.mjs` still passes

**Out of scope:**
- Pointing this CHECK at `tests/framework-source/sibling-compile.test.mjs`
- Restaging honesty oracles
- Restaging [[purpose-absence]] filename oracles
- Freezing Browser APIs
- Implementing the compiler
