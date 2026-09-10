---
id: "task-147-red-green-host-leaves"
title: "Red-green: host leaves honesty"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-146-spec-host-leaves"
sprint: "web-tracers"
slice: "slice-145-host-leaves-honesty"
tags: []
created_at: "2026-09-10T12:15:00Z"
updated_at: "2026-09-10T12:15:00Z"
---

# Red-green: host leaves honesty

## Blocked by

[[task-146-spec-host-leaves]]: spec first.

## Done

Tests pass only while this checkout does not add HTML leaves, and does not treat every UIKit class as the leaf set.

## Context

TDD: write tests that fail if this checkout adds HTML leaves, or treats every UIKit class as the leaf set. Run, see red if the tree already violates, otherwise implement the checks and green on the current tree. Then slice-145 oracles.

Do not add a public registerLeaf. Do not add string host tags. Do not add HTML leaves. Do not implement UIKit. Do not lock host-config compile-time split. Do not repeat six-leaf oracles. Do not repeat composite oracles. Do not implement a compiler.

## Verify

`node --test tests/no-html-leaves.test.mjs` pass. `node --test tests/no-uikit-leaves.test.mjs` pass.

scope: tests/no-html-leaves.test.mjs, tests/no-uikit-leaves.test.mjs

## Links

- [[slice-145-host-leaves-honesty]]
- [[task-146-spec-host-leaves]]
