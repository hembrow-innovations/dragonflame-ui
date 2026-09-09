---
id: "task-127-red-green-component-model"
title: "Red-green: component model honesty"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-126-spec-component-model"
sprint: "web-tracers"
slice: "slice-125-component-model-honesty"
tags: []
created_at: "2026-09-10T09:40:00Z"
updated_at: "2026-09-09T23:56:07Z"
---
# Red-green: component model honesty

## Blocked by

[[task-126-spec-component-model]]: spec first.

## Done

Tests pass only while class components, hooks, Fiber as a component identity, a virtual DOM, and a second authoring tree stay absent.

## Context

TDD: write tests that fail if this checkout adds class components for UI, hooks, Fiber as a component identity, a virtual DOM, or a second authoring tree. Run, see red if the tree already violates, otherwise implement the checks and green on the current tree. Then slice-125 oracles.

Do not add a public Component class. Do not add web tree or native tree factories. Do not repeat run-once oracles. Do not repeat owner-dispose Fiber oracles. Do not repeat JSX parser oracles. Do not implement a compiler.

## Verify

`node --test tests/no-class-components.test.mjs` pass. `node --test tests/no-fiber-vdom.test.mjs` pass. `node --test tests/no-forked-tree.test.mjs` pass.

scope: tests/no-class-components.test.mjs, tests/no-fiber-vdom.test.mjs, tests/no-forked-tree.test.mjs

## Links

- [[slice-125-component-model-honesty]]
- [[task-126-spec-component-model]]
