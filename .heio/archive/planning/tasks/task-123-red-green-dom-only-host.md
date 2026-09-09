---
id: "task-123-red-green-dom-only-host"
title: "Red-green: DOM-only web host"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-122-spec-dom-only-host"
sprint: "web-tracers"
slice: "slice-121-dom-only-web-host"
tags: []
created_at: "2026-09-10T09:25:00Z"
updated_at: "2026-09-09T23:37:39Z"
---

# Red-green: DOM-only web host

## Blocked by

[[task-122-spec-dom-only-host]]: spec first.

## Done

Tests pass only while a web canvas host, CanvasKit, Skwasm, engine-in-WASM as web UI, and a DOM in Host I/O stay absent.

## Context

TDD: write tests that fail if this checkout adds a web canvas host, CanvasKit, Skwasm, or engine-in-WASM as web UI, or puts a DOM into Host I/O. Run, see red if the tree already violates, otherwise implement the checks and green on the current tree. Then slice-121 oracles.

Do not add a public Host type. Do not add a canvas branch. Do not invent a paint API. Do not name the browser API set. Do not repeat portable-wrong-target `document` import oracles. Do not repeat no-emit-here oracles. Do not implement a compiler.

## Verify

`node --test tests/no-web-canvas.test.mjs` pass. `node --test tests/no-wasm-web.test.mjs` pass. `node --test tests/no-host-io-dom.test.mjs` pass.

scope: tests/no-web-canvas.test.mjs, tests/no-wasm-web.test.mjs, tests/no-host-io-dom.test.mjs

## Links

- [[slice-121-dom-only-web-host]]
- [[task-122-spec-dom-only-host]]
