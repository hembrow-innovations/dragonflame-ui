---
id: "task-285-red-green-framework-source"
title: "Red-green: framework source is Draconic"
kind: task
status: completed
mode: hitl
blocked_by:
  - "task-284-spec-framework-source"
sprint: "framework-in-draconic"
slice: "slice-283-draconic-framework-source"
tags: []
created_at: "2026-09-11T21:34:15Z"
updated_at: "2026-09-12T21:45:00Z"
---

# Red-green: framework source is Draconic

## Blocked by

[[task-284-spec-framework-source]]: spec first.

## Done

Tests pass while at least one public export is authored in Draconic and PATH `draconic check` plus `draconic build --target js` prove that source.

## Context

HITL corrected the prove tool: installed PATH `draconic`, not `cargo run` of the sibling checkout. Emit still strips `export`, so the package barrel stays JavaScript. Do not copy emit into this repo.

TDD: tests fail if this checkout has no framework `.drac` sources for a public export, or if PATH `draconic` does not check and build that source. Author the smallest public export in Draconic. Then slice-283 oracles.

Smallest reversible default: one already-public named export. Remaining modules may stay JavaScript. Callers still import dragonflame-ui. If a required construct cannot compile, file a GitHub issue on the draconic repo and stop. Do not implement the compiler here.

Do not add JSX. Do not migrate the whole library. Do not repeat no-eval, no-native-stubs, or no-emit-here tests. Do not fake a general LLVM lowerer.

## Verify

`node --test tests/framework-source/draconic-authored.test.mjs` pass. `node --test tests/framework-source/path-compile.test.mjs` pass.

scope: tests/framework-source/, framework `.drac` sources for one public export

## Links

- [[slice-283-draconic-framework-source]]
- [[task-284-spec-framework-source]]
- [[ticket-252-framework-not-draconic]]

## Agent Brief

**Category:** enhancement
**Summary:** One public dragonflame-ui export is authored in Draconic and proved by PATH `draconic`.

**Intent (required when product behaviour changes):**
- Promise ids: `framework-source.authoring:draconic`, `framework-source.compile:path-draconic`; keep `js-backend.emit:no-emit-here`, `absence.jsx:no-jsx-here`, `absence.lowerer:no-lowerer-here`
- Purpose: [[purpose-framework-source]]
- Contract-first: edit or assert promise, then test, then code

**Current behavior:**
`src/leaves/view.drac` exports `view`. PATH `draconic` checks and builds it. Callers still import dragonflame-ui. Other public exports remain JavaScript.

**Desired behavior:**
Same as current after this task.

**Key interfaces:**
- Public package export map
- PATH CLI `draconic check` and `draconic build --target js`
- Framework `.drac` module that exports one existing public name

**Acceptance criteria:**
- [x] `node --test tests/framework-source/draconic-authored.test.mjs` pass
- [x] `node --test tests/framework-source/path-compile.test.mjs` pass
- [x] Promise ids listed above still hold
- [x] If emit cannot preserve `export`, the package barrel stays JavaScript and this task does not grow a compiler

**Out of scope:**
- Rewriting every remaining JS module
- Copying JS emit into this checkout
- JSX
- Implementing the compiler in this repo
- Repeating [[purpose-js-backend]] honesty tests

## Gauntlet

- **round 1**: sibling emit as the shipped barrel. lose. Emit strips ESM `export`. https://github.com/hembrow-innovations/draconic/issues/1. Did not grow a compiler here. Did not copy JS emit.
- **round 2**: `node --test tests/framework-source/draconic-authored.test.mjs tests/framework-source/path-compile.test.mjs`. win. PATH `draconic` proves `src/leaves/view.drac`. Barrel stays JS.
