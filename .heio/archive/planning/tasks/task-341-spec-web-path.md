---
id: "task-341-spec-web-path"
title: "Spec Web path"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "framework-in-draconic"
slice: "slice-340-web-path"
tags: []
created_at: "2026-09-12T05:47:51Z"
updated_at: "2026-09-12T08:15:23Z"
---

# Spec Web path

## Blocked by

None.

## Done

Renderer-portability purpose, contract, and test.md cover Web path from [[location-41-renderer-portability]] and [[rounds-339-freeze-web-path]]: the web path uses JS-only DOM bindings.

## Context

Lock `docs/specs/ui-framework/renderer-portability/` from [[location-41-renderer-portability]] Web path, [[glossary]] Renderer portability API, and [[intent]] Web JS backend. Quote the destination: the web path uses JS-only DOM bindings.

Web path is already in scope. Point `renderer-portability.web:js-only-dom` at the named test. Do not mint a new spec folder. Named test: web path uses JS-only DOM bindings.

Do not restage `renderer-portability.surface:thin`. Do not restage `renderer-portability.native:extern-c-unboxed`. Do not restage `dom-only-host.bindings:js-only`. Do not invent a public `document` export on `dragonflame-ui/portable`. Do not rewrite [[location-41-renderer-portability]]. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files name the oracle test and keep Web path in scope.

scope: docs/specs/ui-framework/renderer-portability/

## Links

- [[slice-340-web-path]]
- [[location-41-renderer-portability]]
- [[location-28-dom-renderer]]
- [[purpose-renderer-portability]]
- [[contract-renderer-portability]]
- [[test-renderer-portability]]
- [[purpose-dom-only-host]]
- [[rounds-339-freeze-web-path]]

## Agent Brief

**Category:** enhancement
**Summary:** Lock the renderer-portability ladder so Web path uses JS-only DOM bindings.

**Intent (required when product behaviour changes):**
- Promise ids: lock `renderer-portability.web:js-only-dom`
- Purpose: [[purpose-renderer-portability]] already lists Web path in scope
- Contract-first: point `renderer-portability.web:js-only-dom` at the test in test.md. No product code

**Current behavior:**
[[purpose-renderer-portability]] already lists Web path in scope. [[contract-renderer-portability]] asserts `renderer-portability.web:js-only-dom` with no test pointer. [[contract-dom-only-host]] already locks `dom-only-host.bindings:js-only`.

**Desired behavior:**
The existing folder locks one oracle: the web path uses JS-only DOM bindings. Oracle command is `node --test tests/renderer-portability/web-path.test.mjs`. Thin-surface, native-path, and dom-only-host promises stay untouched.

**Key interfaces:**
- Purpose, contract, and test notes for area `renderer-portability`
- Promises must not add a public `document` export, Host I/O as a browser, Host type, canvas switch, or paint API on `dragonflame-ui/portable`

**Acceptance criteria:**
- [x] purpose, contract, and test.md cover Web path
- [x] test.md names the oracle command above
- [x] locked thin-surface, native-path, and dom-only-host promises are not rewritten
- [x] No product code

**Out of scope:**
- Creating a new spec folder
- Restaging `renderer-portability.surface:thin`
- Restaging `renderer-portability.native:extern-c-unboxed`
- Restaging `dom-only-host.bindings:js-only`
- Freezing Wrong-target hard-error or Portable Program
- Implementing the compiler
