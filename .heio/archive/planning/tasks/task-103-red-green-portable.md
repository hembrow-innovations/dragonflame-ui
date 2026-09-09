---
id: "task-103-red-green-portable"
title: "Red-green: portable import"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-102-spec-port-web"
sprint: "web-tracers"
slice: "slice-75-portable-web-import"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T20:58:11Z"
---

# Red-green: portable import

## Blocked by

[[task-102-spec-port-web]]: spec first.

## Done

Portable import works. Importing document from portable code hard-errors.

## Context

TDD: failing tests/portable-import.test.mjs and tests/portable-wrong-target.test.mjs, red, implement, green both oracles. Wrong-target is a hard error, not a runtime no-op. Do not implement native FFI.

## Verify

`node --test tests/portable-import.test.mjs` pass. `node --test tests/portable-wrong-target.test.mjs` pass.

scope: library portability module, tests/portable-import.test.mjs, tests/portable-wrong-target.test.mjs

## Links

- [[slice-75-portable-web-import]]
- [[task-102-spec-port-web]]

## Gauntlet

- **round 1**: `node --test tests/portable-import.test.mjs` and `node --test tests/portable-wrong-target.test.mjs` win. 2 pass. Done line holds.
