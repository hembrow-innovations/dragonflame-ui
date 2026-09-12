---
id: "task-342-red-green-web-path"
title: "Red-green Web path"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-341-spec-web-path"
sprint: "framework-in-draconic"
slice: "slice-340-web-path"
tags: []
created_at: "2026-09-12T05:47:51Z"
updated_at: "2026-09-12T05:47:51Z"
---

# Red-green Web path

## Blocked by

[[task-341-spec-web-path]]: ladder must lock `renderer-portability.web:js-only-dom` before tests.

## Done

`node --test tests/renderer-portability/web-path.test.mjs` passes.

## Context

Callers keep `h` and `text` from `dragonflame-ui/portable`. The prove is web host mapping: the web path uses JS-only DOM bindings. That mapping stays private. No public `document`, `createElement`, or DOM types on that specifier. A DOM is not put into Host I/O.

Do not point CHECK at `tests/dom-only-host/no-host-io-dom.test.mjs`, `tests/renderer-portability/portable-import.test.mjs`, or `tests/renderer-portability/native-path.test.mjs`. Do not restage thin-surface, native-path, or dom-only-host oracles. Do not freeze Wrong-target hard-error, Portable Program, or location-28 nested grains. Do not implement the compiler.

TDD: red test, then the smallest green that locks the oracle.

## Verify

The oracle command passes. No public DOM types on `dragonflame-ui/portable`. Thin-surface tests still pass.

scope: tests/renderer-portability/web-path.test.mjs

## Links

- [[slice-340-web-path]]
- [[task-341-spec-web-path]]
- [[location-41-renderer-portability]]
- [[rounds-339-freeze-web-path]]

## Agent Brief

**Category:** enhancement
**Summary:** Red-green that the portability API web path uses JS-only DOM bindings without exporting those bindings.

**Intent (required when product behaviour changes):**
- Promise ids: `renderer-portability.web:js-only-dom`
- Purpose: [[purpose-renderer-portability]]
- Contract-first: the test named in test.md must pass

**Current behavior:**
Thin-surface compile-against tests exist. Native-path tests exist. DOM-only-host honesty tests exist. No test yet that the portability API web path uses JS-only DOM bindings behind `dragonflame-ui/portable`.

**Desired behavior:**
The oracle command passes. Named test: web path uses JS-only DOM bindings. Fail if this checkout exports `document`, `createElement`, DOM types, or puts a DOM into Host I/O from `dragonflame-ui/portable`.

**Key interfaces:**
- New test file `tests/renderer-portability/web-path.test.mjs`
- No public `document` export, Host I/O as a browser, Host type, canvas switch, or paint API on `dragonflame-ui/portable`

**Acceptance criteria:**
- [ ] `node --test tests/renderer-portability/web-path.test.mjs` passes
- [ ] The named test owns the web-path prove, not no-host-io-dom or thin-surface oracles
- [ ] No public DOM types on `dragonflame-ui/portable`
- [ ] Thin-surface tests still pass

**Out of scope:**
- Pointing this CHECK at `tests/dom-only-host/no-host-io-dom.test.mjs`
- Pointing this CHECK at `tests/renderer-portability/portable-import.test.mjs`
- Pointing this CHECK at `tests/renderer-portability/native-path.test.mjs`
- Restaging thin-surface, native-path, or dom-only-host oracles
- Implementing the compiler
- Freezing Wrong-target hard-error, Portable Program, or location-28 nested grains
