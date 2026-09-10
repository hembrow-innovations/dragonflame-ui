---
id: "task-159-red-green-portability-metal"
title: "Red-green: portability metal honesty"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-158-spec-portability-metal"
sprint: "web-tracers"
slice: "slice-157-portability-metal-honesty"
tags: []
created_at: "2026-09-10T14:30:00Z"
updated_at: "2026-09-10T14:30:00Z"
---

# Red-green: portability metal honesty

## Blocked by

[[task-158-spec-portability-metal]]: spec first.

## Done

Tests pass only while this checkout hard-errors a Metal import from portable code.

## Context

TDD: write tests that fail if this checkout lets a portable Program import Metal. Run, see red if the tree already violates, otherwise implement the checks and green on the current tree. Then slice-157 oracles.

Do not add a public Metal. Do not lock native `extern "C"`. Do not repeat document-import oracles. Do not repeat thin-surface oracles. Do not repeat Host I/O oracles. Do not repeat JSI oracles. Do not implement a compiler.

## Verify

`node --test tests/portable-metal.test.mjs` pass.

scope: tests/portable-metal.test.mjs

## Links

- [[slice-157-portability-metal-honesty]]
- [[task-158-spec-portability-metal]]
