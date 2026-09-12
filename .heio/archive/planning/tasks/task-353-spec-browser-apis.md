---
id: "task-353-spec-browser-apis"
title: "Spec Browser APIs"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "framework-in-draconic"
slice: "slice-352-browser-apis"
tags: []
created_at: "2026-09-12T06:33:10Z"
updated_at: "2026-09-12T09:25:37Z"
---

# Spec Browser APIs

## Blocked by

None.

## Done

[[contract-js-backend]] and [[test-js-backend]] lock `js-backend.browser:uses-apis` from [[location-30-js-backend]] Browser APIs and [[rounds-351-freeze-browser-apis]].

## Context

Ladder exists at `docs/specs/ui-framework/js-backend/`. Do not create a new spec folder. Add one locked promise for this grain. Quote Browser APIs: that package uses browser APIs. The source does not name the API set.

Put this grain in purpose in-scope as unnamed usage. Keep naming the API set out of scope. Do not invent a catalog.

Do not restage `js-backend.eval:no-eval-host`, `js-backend.split:no-native-stubs`, `js-backend.emit:no-emit-here`, or `js-backend.path:frontend-ir-js`. Do not lock `js-backend.false-path:not-rn-but-bytecode`. Do not restage `counter.js-backend:unnamed-apis`.

Public surface stays the existing dragonflame-ui import. Do not invent a catalog, BrowserAPI type, or compile helper.

TDD: ladder only. No product code.

## Verify

Contract and test.md lock `js-backend.browser:uses-apis` and point it at `node --test tests/js-backend/browser-apis.test.mjs`. Named test: that package uses browser APIs. The source does not name the API set.

scope: docs/specs/ui-framework/js-backend/

## Links

- [[slice-352-browser-apis]]
- [[location-30-js-backend]]
- [[purpose-js-backend]]
- [[contract-js-backend]]
- [[test-js-backend]]
- [[rounds-351-freeze-browser-apis]]

## Agent Brief

**Category:** enhancement
**Summary:** Lock the Browser APIs promise so the package uses browser APIs and the source does not name the API set.

**Intent (required when product behaviour changes):**
- Promise ids: lock `js-backend.browser:uses-apis`
- Purpose: [[purpose-js-backend]]
- Contract-first: lock `js-backend.browser:uses-apis` then name the test in test.md. No product code

**Current behavior:**
[[purpose-js-backend]] parks naming the API set and does not list Browser APIs in scope. Locked honesty and path promises cover no eval, no native stubs, no emit here, and Frontend to shared IR to the JS backend. No locked promise yet for unnamed browser-API usage.

**Desired behavior:**
[[contract-js-backend]] and [[test-js-backend]] lock `js-backend.browser:uses-apis`. Oracle command is `node --test tests/js-backend/browser-apis.test.mjs`. Honesty and path promises stay untouched. Naming the API set stays out of scope.

**Key interfaces:**
- Existing js-backend purpose, contract, and test notes
- Promises must not add a public catalog, BrowserAPI type, or compile helper

**Acceptance criteria:**
- [x] contract and test.md lock `js-backend.browser:uses-apis`
- [x] test.md names the oracle command above
- [x] locked honesty and path promises are not rewritten
- [x] No product code

**Out of scope:**
- Creating a new spec folder
- Restaging [[slice-311-js-backend]]
- Restaging `counter.js-backend:unnamed-apis`
- Naming the browser API set
- Implementing the compiler
