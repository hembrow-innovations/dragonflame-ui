---
id: "task-91-red-green-signal-patch"
title: "Red-green: signal patches DOM"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-90-red-green-static-h"
sprint: "web-tracers"
slice: "slice-70-counter-on-dom"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T19:42:50Z"
---

# Red-green: signal patches DOM

## Blocked by

[[task-90-red-green-static-h]]: static h() first.

## Done

Component runs once. Signal set patches DOM text. Render object retained. No virtual DOM.

## Context

Desired: a counter whose text follows ui.Signal without re-running the component function.

TDD: write failing `tests/counter-signal-patch.test.mjs` and `tests/counter-run-once.test.mjs`, see red, implement, green. Then run slice-70 oracles. Prose uses ui.Signal. Host API is not named signal. Do not add pressable. Do not add JSX.

## Verify

`node --test tests/counter-signal-patch.test.mjs` pass. `node --test tests/counter-run-once.test.mjs` pass.

scope: library components, signals, renderer, tests/counter-signal-patch.test.mjs, tests/counter-run-once.test.mjs

## Links

- [[slice-70-counter-on-dom]]
- [[task-90-red-green-static-h]]
