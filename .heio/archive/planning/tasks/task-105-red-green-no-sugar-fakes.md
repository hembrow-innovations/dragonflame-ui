---
id: "task-105-red-green-no-sugar-fakes"
title: "Red-green: no sugar fakes"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-104-spec-absence"
sprint: "sugar-later"
slice: "slice-85-first-version-without-sugar"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-10T12:00:00Z"
---

# Red-green: no sugar fakes

## Blocked by

[[task-104-spec-absence]]: spec first.

## Done

Tests pass only while those non-goals hold.

## Context

TDD: write tests that fail if JSX parser work, TypeScript emit, IR fork, bytecode VM, or a reloader gate appears in this checkout. Run, see red if the tree already violates, otherwise implement the checks and green on the current tree. Then slice-85 oracles. Do not implement JSX, a lowerer, or hot reload.

## Verify

`node --test tests/no-jsx-here.test.mjs` pass. `node --test tests/no-lowerer-here.test.mjs` pass. `node --test tests/git-package.test.mjs` pass.

scope: tests/no-jsx-here.test.mjs, tests/no-lowerer-here.test.mjs

## Links

- [[slice-85-first-version-without-sugar]]
- [[task-104-spec-absence]]
