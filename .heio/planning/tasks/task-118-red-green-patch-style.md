---
id: "task-118-red-green-patch-style"
title: "Red-green: patch style"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-117-spec-dom-patch"
sprint: "web-tracers"
slice: "slice-116-patch-attrs-children"
tags: []
created_at: "2026-09-10T09:15:00Z"
updated_at: "2026-09-10T09:15:00Z"
---

# Red-green: patch style

## Blocked by

[[task-117-spec-dom-patch]]: spec first.

## Done

A style signal write updates style on the same retained host node. The component function does not re-run.

## Context

TDD: write tests/patch-style.test.mjs, red, follow a ui.Signal in `props.style` inside the existing renderer, green. Keep follow private. Do not add a public `patch` helper. Do not invent image `src` or input `value`. Style stays StyleSheet-shaped.

Wait for [[task-117-spec-dom-patch]] to complete before editing product code.

## Verify

`node --test tests/patch-style.test.mjs` pass.

scope: src/renderer/, tests/patch-style.test.mjs

## Links

- [[slice-116-patch-attrs-children]]
- [[task-117-spec-dom-patch]]
