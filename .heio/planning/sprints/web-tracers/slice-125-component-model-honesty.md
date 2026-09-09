---
id: "slice-125-component-model-honesty"
title: "Component model honesty"
kind: slice
status: met
sprint: "web-tracers"
blocked_by:
  - "slice-107-composite-on-dom"
tags: []
created_at: "2026-09-10T09:40:00Z"
updated_at: "2026-09-10T23:58:00Z"
---
# Component model honesty

## Why

Honesty demo. Function components already mount. Nested bets still unnamed: one tree, not class components.

## Done

Tests fail if this checkout adds class components for UI, hooks, Fiber as a component identity, a virtual DOM, or a second authoring tree. No public Component class.

## Blocked by

[[slice-107-composite-on-dom]]: a function component tree exists so it can stay the only authoring tree. [[slice-70-counter-on-dom]] already covers run-once; do not repeat those oracles. [[slice-71-unmount-disposes]] already covers owner dispose; do not repeat owner Fiber-as-ownership oracles. [[slice-85-first-version-without-sugar]] already covers no JSX from this repo; do not repeat those oracles.

## Non-goals

A public Component class. Web tree and native tree factories. Show. For. Native hosts. Repeating run-once oracles. Repeating owner-dispose Fiber oracles. Repeating JSX parser oracles. Implementing a compiler.

## Oracle checklist
- [x] O1: no class components
  CHECK: node --test tests/no-class-components.test.mjs
  EXPECT: pass
  EVIDENCE: 1 pass 0 fail
- [x] O2: no Fiber or virtual DOM as identity
  CHECK: node --test tests/no-fiber-vdom.test.mjs
  EXPECT: pass
  EVIDENCE: 1 pass 0 fail
- [x] O3: one component tree
  CHECK: node --test tests/no-forked-tree.test.mjs
  EXPECT: pass
  EVIDENCE: 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-126-spec-component-model]]
- [[task-127-red-green-component-model]]

## See also

- [[location-23-components]]
- [[location-17-web-component-library]]
- [[slice-70-counter-on-dom]]
- [[slice-107-composite-on-dom]]
- [[slice-71-unmount-disposes]]
- [[slice-85-first-version-without-sugar]]
- [[rounds-124-component-model-honesty]]
