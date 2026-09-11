---
id: "task-284-spec-framework-source"
title: "Spec framework source"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "framework-in-draconic"
slice: "slice-283-draconic-framework-source"
tags: []
created_at: "2026-09-11T21:34:15Z"
updated_at: "2026-09-12T12:30:00Z"
---

# Spec framework source

## Blocked by

None.

## Done

Framework-source spec folder exists from [[intent]], [[architecture-layer-cake]], [[location-17-web-component-library]], and [[ticket-252-framework-not-draconic]]: the Framework library is authored in Draconic and compiled by the sibling JS backend.

## Context

Write purpose, contract, and test.md from [[intent]] (framework library is Draconic), [[architecture-layer-cake]] (framework source is Draconic; web build is the JS backend), and [[location-30-js-backend]] (web compile is Frontend to shared IR to the JS backend). Quote those destination sentences.

First tracer: at least one public dragonflame-ui export is authored as Draconic. Sibling `draconic build --target js` produces the JavaScript callers import. Remaining JS modules stay out of this ladder. The JS-first bet is pivoted; the destination is still run-on-JS-backend.

Do not invent JSX. Do not invent a compiler in this repo. Do not copy JS emit. Do not repeat no-eval, no-native-stubs, or no-emit-here oracles. Those live on [[purpose-js-backend]]. Do not repeat no-jsx-here or no-lowerer-here oracles. Those live on [[purpose-absence]]. Do not rewrite [[git-package.identity:library-product]]. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files exist and name the two oracle tests.

scope: docs/specs/ui-framework/framework-source/

## Links

- [[slice-283-draconic-framework-source]]
- [[ticket-252-framework-not-draconic]]
- [[location-17-web-component-library]]
- [[purpose-js-backend]]
- [[purpose-absence]]

## Agent Brief

**Category:** enhancement
**Summary:** Assert the framework-source ladder: library authored in Draconic, compiled by the sibling JS backend.

**Intent (required when product behaviour changes):**
- Promise ids: assert `framework-source` promises from [[intent]] and [[architecture-layer-cake]]; keep `js-backend.emit:no-emit-here`
- Purpose: write [[purpose-framework-source]] in this sitting
- Contract-first: assert promise then name tests in test.md. No product code

**Current behavior:**
[[intent]] says the Framework library is Draconic. The git package under the library root is hand-written JavaScript. No framework-source spec folder exists. Slice oracles are named on [[slice-283-draconic-framework-source]].

**Desired behavior:**
A spec folder locks two oracles: framework `.drac` sources exist for at least one public export, and that export's shipped JavaScript comes from sibling `draconic build --target js`. Oracle commands are `node --test tests/framework-source/draconic-authored.test.mjs` and `node --test tests/framework-source/sibling-compile.test.mjs`.

**Key interfaces:**
- Purpose, contract, and test notes for area `framework-source`
- Promises must not copy JS emit or add JSX from this repo

**Acceptance criteria:**
- [x] purpose, contract, and test.md exist for framework-source
- [x] test.md names both oracle commands above
- [x] `js-backend.emit:no-emit-here` is kept, not repeated as a new oracle
- [x] No product code

**Out of scope:**
- Implementing `.drac` sources
- Migrating remaining JS modules
- Implementing the compiler
- Repeating [[purpose-js-backend]] emit oracles
- Repeating [[purpose-absence]] JSX oracles
