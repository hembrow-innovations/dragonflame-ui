---
id: "task-312-spec-js-backend-path"
title: "Spec JS backend path"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "framework-in-draconic"
slice: "slice-311-js-backend"
tags: []
created_at: "2026-09-12T14:00:00Z"
updated_at: "2026-09-12T06:32:06Z"
---

# Spec JS backend path

## Blocked by

None.

## Done

[[contract-js-backend]] and [[test-js-backend]] lock `js-backend.path:frontend-ir-js` from [[location-30-js-backend]] JS backend and [[rounds-310-freeze-js-backend]].

## Context

Ladder exists at `docs/specs/ui-framework/js-backend/`. Do not create a new spec folder. Add one locked promise for this grain. Quote JS backend: web compile is Frontend to shared IR to the JS backend, and the browser runs that JavaScript.

Do not restage `js-backend.eval:no-eval-host`, `js-backend.split:no-native-stubs`, or `js-backend.emit:no-emit-here`. Do not lock `js-backend.false-path:not-rn-but-bytecode`. TypeScript emit, IR fork, and bytecode VM oracles stay on [[purpose-absence]].

Public surface stays the existing dragonflame-ui import. Do not invent a compile helper, Frontend type, or IR type.

TDD: ladder only. No product code.

## Verify

Contract and test.md lock `js-backend.path:frontend-ir-js` and point it at `node --test tests/js-backend/frontend-ir-js.test.mjs`. Named test: web compile is Frontend to shared IR to the JS backend, and the browser runs that JavaScript.

scope: docs/specs/ui-framework/js-backend/

## Links

- [[slice-311-js-backend]]
- [[location-30-js-backend]]
- [[purpose-js-backend]]
- [[contract-js-backend]]
- [[test-js-backend]]
- [[rounds-310-freeze-js-backend]]

## Agent Brief

**Category:** enhancement
**Summary:** Lock the JS backend path promise so web compile stays Frontend to shared IR to the sibling JS backend and the browser runs that JavaScript.

**Intent (required when product behaviour changes):**
- Promise ids: lock `js-backend.path:frontend-ir-js`
- Purpose: [[purpose-js-backend]]
- Contract-first: lock `js-backend.path:frontend-ir-js` then name the test in test.md. No product code

**Current behavior:**
[[purpose-js-backend]] already includes this grain. Locked honesty promises cover no eval, no native stubs, and no emit here. No locked promise yet for Frontend to shared IR to the JS backend.

**Desired behavior:**
[[contract-js-backend]] and [[test-js-backend]] lock `js-backend.path:frontend-ir-js`. Oracle command is `node --test tests/js-backend/frontend-ir-js.test.mjs`. Honesty promises stay untouched.

**Key interfaces:**
- Existing js-backend purpose, contract, and test notes
- Promises must not add a public compile helper, Frontend type, or IR type

**Acceptance criteria:**
- [x] contract and test.md lock `js-backend.path:frontend-ir-js`
- [x] test.md names the oracle command above
- [x] locked honesty promises are not rewritten
- [x] No product code

**Out of scope:**
- Creating a new spec folder
- Restaging [[slice-283-draconic-framework-source]]
- Restaging [[purpose-absence]] filename oracles
- Freezing Browser APIs
- Implementing the compiler
