---
id: "slice-85-first-version-without-sugar"
title: "First version without sugar"
kind: slice
status: frozen
sprint: "sugar-later"
blocked_by:
  - "slice-69-importable-package"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# First version without sugar

## Why

Absence demo. First version is hyperscript. Hot reload does not gate import. This repo does not fake a general LLVM lowerer.

## Done

Tests fail if this checkout adds JSX to the draconic parser, emits TypeScript, forks IR, ships bytecode on a VM, or makes hot reload required to import dragonflame-ui.

## Blocked by

[[slice-69-importable-package]]: import exists so hot reload is not required for it.

## Non-goals

Implementing JSX. Implementing a lowerer. Implementing hot reload.

## Oracle checklist

- [ ] O1: no JSX from this repo
  CHECK: node --test tests/no-jsx-here.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: no faked lowerer
  CHECK: node --test tests/no-lowerer-here.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O3: hot reload not required to import
  CHECK: node --test tests/git-package.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

- [[task-104-spec-absence]]
- [[task-105-red-green-no-sugar-fakes]]

## See also

- [[location-57-jsx-later]]
- [[location-58-hot-reload]]
- [[location-59-llvm-lowerer]]
- [[location-26-hyperscript]]
- [[ticket-62-jsx-later-human]]
- [[ticket-63-do-not-fake-llvm]]
- [[ticket-64-hot-reload-not-v1]]
