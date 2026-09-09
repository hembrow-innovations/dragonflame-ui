---
id: "test-absence"
title: "Absence tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: absence
tags: [test]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Absence tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They lock `absence.jsx:no-jsx-here`, `absence.lowerer:no-lowerer-here`, and `absence.hot-reload:not-v1-gate`. Oracle commands:

- node --test tests/no-jsx-here.test.mjs
- node --test tests/no-lowerer-here.test.mjs
- node --test tests/git-package.test.mjs

## Tests

- **tests/no-jsx-here.test.mjs**: `this checkout does not add JSX to the draconic parser`
  - **How:** fails if this checkout adds JSX to the draconic parser
  - **Why:** promise `absence.jsx:no-jsx-here`
- **tests/no-lowerer-here.test.mjs**: `this repo does not fake a general LLVM lowerer`
  - **How:** fails if this checkout fakes a general LLVM lowerer, emits TypeScript, forks IR, or ships Draconic bytecode on a VM
  - **Why:** promise `absence.lowerer:no-lowerer-here`
- **tests/git-package.test.mjs**: `dragonflame-ui imports as a library product in this repo`
  - **How:** `import("dragonflame-ui")` from this checkout. Import does not require hot reload
  - **Why:** promise `absence.hot-reload:not-v1-gate`

## Gaps

- No test yet for `absence.jsx:later-sugar` or `absence.hot-reload:forbid-ota`.
