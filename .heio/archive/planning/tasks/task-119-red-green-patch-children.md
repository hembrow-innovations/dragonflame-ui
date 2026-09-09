---
id: "task-119-red-green-patch-children"
title: "Red-green: patch children"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-118-red-green-patch-style"
sprint: "web-tracers"
slice: "slice-116-patch-attrs-children"
tags: []
created_at: "2026-09-10T09:15:00Z"
updated_at: "2026-09-10T12:30:00Z"
---

# Red-green: patch children

## Blocked by

[[task-118-red-green-patch-style]]: style patch first so two drain loops do not share the renderer.

## Done

A children signal write patches one host vnode under the same retained parent. The component function does not re-run.

## Context

TDD: write tests/patch-children.test.mjs, red, follow a ui.Signal in `props.children` inside the existing renderer, green. The signal holds one host vnode, not an array. Replace or write that child under the retained parent. Do not add Show. Do not add keyed For. Do not add a public `patch` helper. Do not patch a changing array.

Wait for [[task-118-red-green-patch-style]] to complete before editing product code.

## Verify

`node --test tests/patch-children.test.mjs` pass.

scope: src/renderer/, tests/patch-children.test.mjs

## Links

- [[slice-116-patch-attrs-children]]
- [[task-118-red-green-patch-style]]

## Gauntlet

round 1, `node --test tests/patch-children.test.mjs`, win, children signal write patches one host vnode under the retained parent and the component does not re-run
