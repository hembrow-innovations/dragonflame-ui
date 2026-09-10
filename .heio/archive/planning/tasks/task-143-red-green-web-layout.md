---
id: "task-143-red-green-web-layout"
title: "Red-green: web layout honesty"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-142-spec-web-layout"
sprint: "web-tracers"
slice: "slice-141-web-layout-honesty"
tags: []
created_at: "2026-09-10T11:00:00Z"
updated_at: "2026-09-10T12:00:00Z"
---

# Red-green: web layout honesty

## Blocked by

[[task-142-spec-web-layout]]: spec first.

## Done

Tests pass only while this checkout does not force Taffy on web, and does not treat the DOM backend as a pixel-identical Impeller or Skia clone.

## Context

TDD: write tests that fail if this checkout forces Taffy on web, or treats the DOM backend as a pixel-identical Impeller or Skia clone. Run, see red if the tree already violates, otherwise implement the checks and green on the current tree. Then slice-141 oracles.

Do not add a public LayoutEngine. Do not add a pixel-match switch. Do not implement Taffy. Do not lock CSS as the native layout runtime. Do not repeat CSS-on-web leaf oracles. Do not repeat no-canvas and no-WASM oracles. Do not implement a compiler.

## Verify

`node --test tests/no-taffy-on-web.test.mjs` pass. `node --test tests/no-impeller-dom.test.mjs` pass.

scope: tests/no-taffy-on-web.test.mjs, tests/no-impeller-dom.test.mjs

## Links

- [[slice-141-web-layout-honesty]]
- [[task-142-spec-web-layout]]

## Gauntlet

Round 1. `node --test tests/no-taffy-on-web.test.mjs` and `node --test tests/no-impeller-dom.test.mjs`. Win. 1 pass 0 fail each.
