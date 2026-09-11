---
id: "task-285-red-green-framework-source"
title: "Red-green: framework source is Draconic"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-284-spec-framework-source"
sprint: "framework-in-draconic"
slice: "slice-283-draconic-framework-source"
tags: []
created_at: "2026-09-11T21:34:15Z"
updated_at: "2026-09-11T21:34:15Z"
---

# Red-green: framework source is Draconic

## Blocked by

[[task-284-spec-framework-source]]: spec first.

## Done

Tests pass only while at least one public export is authored in Draconic and its shipped JavaScript is sibling JS-backend emit.

## Context

TDD: write tests that fail if this checkout has no framework `.drac` sources, or if the chosen public export's shipped JavaScript is hand-written rather than produced by sibling `draconic build --target js`. Run, see red on the current JS-only tree, then author the smallest public export in Draconic and compile it with the sibling CLI. Then slice-283 oracles.

Smallest reversible default: one already-public named export. Remaining modules may stay JavaScript. Callers still import dragonflame-ui. Use the `draconic` CLI from the sibling toolchain. If a required construct cannot compile, file a GitHub issue on the draconic repo and stop. Do not implement the compiler here. Do not copy JS emit into this repo.

Do not add JSX. Do not migrate the whole library. Do not repeat no-eval, no-native-stubs, or no-emit-here tests. Do not fake a general LLVM lowerer.

## Verify

`node --test tests/framework-source/draconic-authored.test.mjs` pass. `node --test tests/framework-source/sibling-compile.test.mjs` pass.

scope: tests/framework-source/, framework `.drac` sources, the shipped JavaScript for that one public export, package export map if the compile output path must be named

## Links

- [[slice-283-draconic-framework-source]]
- [[task-284-spec-framework-source]]
- [[ticket-252-framework-not-draconic]]

## Agent Brief

**Category:** enhancement
**Summary:** One public dragonflame-ui export is authored in Draconic and compiled by the sibling JS backend.

**Intent (required when product behaviour changes):**
- Promise ids: `framework-source` promises asserted by [[task-284-spec-framework-source]]; keep `js-backend.emit:no-emit-here`, `absence.jsx:no-jsx-here`, `absence.lowerer:no-lowerer-here`
- Purpose: [[purpose-framework-source]]
- Contract-first: edit or assert promise, then test, then code

**Current behavior:**
The library package is hand-written JavaScript. There are no framework `.drac` sources. [[intent]] already names Draconic as the framework language.

**Desired behavior:**
At least one public named export is a Draconic module. Sibling `draconic build --target js` produces the JavaScript that package tests import. A test fails if `.drac` framework sources are missing. A test fails if that export's shipped JS is not sibling emit. Other public exports may remain JavaScript. `import("dragonflame-ui")` still works.

**Key interfaces:**
- Public package export map
- Sibling CLI `draconic build --target js`
- Framework `.drac` module that exports one existing public name

**Acceptance criteria:**
- [ ] `node --test tests/framework-source/draconic-authored.test.mjs` pass
- [ ] `node --test tests/framework-source/sibling-compile.test.mjs` pass
- [ ] Promise ids listed above still hold
- [ ] If the sibling toolchain cannot compile the construct, a GitHub issue is filed on draconic and this task does not grow a compiler

**Out of scope:**
- Rewriting every remaining JS module
- Copying JS emit from the sibling toolchain
- JSX
- Implementing the compiler in this repo
- Repeating [[purpose-js-backend]] honesty tests
