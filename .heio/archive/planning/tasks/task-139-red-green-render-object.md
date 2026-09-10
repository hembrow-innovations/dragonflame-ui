---
id: "task-139-red-green-render-object"
title: "Red-green: render object honesty"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-138-spec-render-object"
sprint: "web-tracers"
slice: "slice-137-render-object-honesty"
tags: []
created_at: "2026-09-10T10:40:00Z"
updated_at: "2026-09-10T12:30:00Z"
---

# Red-green: render object honesty

## Blocked by

[[task-138-spec-render-object]]: spec first.

## Done

Tests pass only while this checkout does not treat Flutter Widget as the retained node, and does not name Widget or Element as the collapse of Component and Render object.

## Context

TDD: write tests that fail if this checkout treats Flutter Widget as the retained node, or names Widget or Element as the collapse of Component and Render object. Run, see red if the tree already violates, otherwise implement the checks and green on the current tree. Then slice-137 oracles.

Do not add a public Widget. Do not add a public Element. Do not add a public RenderObject type. Do not repeat retained-node oracles. Do not repeat same-host-node patch oracles. Do not repeat Fiber identity or ownership oracles. Do not implement layout, paint, or hit-test algorithms. Do not implement a compiler.

## Verify

`node --test tests/no-widget-retain.test.mjs` pass. `node --test tests/no-collapsed-render-names.test.mjs` pass.

scope: tests/no-widget-retain.test.mjs, tests/no-collapsed-render-names.test.mjs

## Links

- [[slice-137-render-object-honesty]]
- [[task-138-spec-render-object]]

## Gauntlet

Round 1. `node --test tests/no-widget-retain.test.mjs` and `node --test tests/no-collapsed-render-names.test.mjs`. Win. 1 pass 0 fail each.
