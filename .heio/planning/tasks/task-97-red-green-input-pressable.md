---
id: "task-97-red-green-input-pressable"
title: "Red-green: input and pressable"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-96-red-green-image-scroll"
sprint: "web-tracers"
slice: "slice-72-leaf-kit-on-dom"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# Red-green: input and pressable

## Blocked by

[[task-96-red-green-image-scroll]]: image and scroll first.

## Done

Text input and pressable render. Host config still only at the adapter. Closed set complete.

## Context

TDD: failing tests/leaf-input-pressable.test.mjs, red, implement, green. Then run slice-72 oracles. Do not steal JSI or Hermes.

## Verify

`node --test tests/leaf-input-pressable.test.mjs` pass. Slice-72 oracles pass.

scope: library host leaves, host config, tests/leaf-input-pressable.test.mjs

## Links

- [[slice-72-leaf-kit-on-dom]]
- [[task-96-red-green-image-scroll]]
