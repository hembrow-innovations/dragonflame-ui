---
id: "task-131-red-green-signal-dirtying"
title: "Red-green: signal dirtying honesty"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-130-spec-signal-dirtying"
sprint: "web-tracers"
slice: "slice-129-signal-dirtying-honesty"
tags: []
created_at: "2026-09-10T09:50:00Z"
updated_at: "2026-09-10T01:27:21Z"
---

# Red-green: signal dirtying honesty

## Blocked by

[[task-130-spec-signal-dirtying]]: spec first.

## Done

Tests pass only while setState and React state hooks stay absent as the dirty model, signals stay out of layout hit-test compositing gesture arena and semantics, and signal objects stay unshared across workers.

## Context

TDD: write tests that fail if this checkout uses setState or a React state hook as the dirty model, uses signals as constraint layout, hit-test, layer compositing, gesture arena, or semantics, or shares a signal object across workers. Run, see red if the tree already violates, otherwise implement the checks and green on the current tree. Then slice-129 oracles.

Do not add a public setState. Do not add useState. Do not add SharedSignal. Do not implement Show or keyed For. Do not implement compute workers. Do not repeat rAF ticker oracles. Do not repeat owner-dispose Fiber oracles. Do not repeat Show and For oracles. Do not implement a compiler.

## Verify

`node --test tests/no-setstate-dirty.test.mjs` pass. `node --test tests/no-signal-pipeline.test.mjs` pass. `node --test tests/no-shared-signals.test.mjs` pass.

scope: tests/no-setstate-dirty.test.mjs, tests/no-signal-pipeline.test.mjs, tests/no-shared-signals.test.mjs

## Links

- [[slice-129-signal-dirtying-honesty]]
- [[task-130-spec-signal-dirtying]]

## Gauntlet

Round 1. `node --test tests/no-setstate-dirty.test.mjs` and `node --test tests/no-signal-pipeline.test.mjs` and `node --test tests/no-shared-signals.test.mjs`. Win. 1 pass 0 fail each.
