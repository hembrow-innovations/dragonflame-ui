---
id: "task-104-spec-absence"
title: "Spec first-version absence"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-88-green-package-import"
sprint: "sugar-later"
slice: "slice-85-first-version-without-sugar"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# Spec first-version absence

## Blocked by

[[task-88-green-package-import]]: import exists so hot reload is not required for it.

## Done

Absence spec quotes intent and rounds-01: no JSX here, no faked lowerer, hot reload not a v1 gate.

## Context

Write purpose, contract, and test.md from [[location-57-jsx-later]], [[location-58-hot-reload]], [[location-59-llvm-lowerer]], and intent non-goals. Do not write a lowerer. Do not add JSX. Stop rather than invent Embed or JS-debug.

TDD: ladder only.

## Verify

Spec files exist and name no-jsx-here and no-lowerer-here tests.

scope: docs/specs/ui-framework/absence/

## Links

- [[slice-85-first-version-without-sugar]]
- [[ticket-62-jsx-later-human]]
- [[ticket-63-do-not-fake-llvm]]
- [[ticket-64-hot-reload-not-v1]]
