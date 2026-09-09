---
id: "task-100-spec-raf"
title: "Spec rAF clocks"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-91-red-green-signal-patch"
sprint: "web-tracers"
slice: "slice-74-raf-clock"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T20:40:38Z"
---

# Spec rAF clocks

## Blocked by

[[task-91-red-green-signal-patch]]: signals first.

## Done

Clocks spec exists: framework clocks, rAF vsync, signals do not replace tickers.

## Context

Write purpose, contract, and test.md from [[location-60-animation-clocks]] child sentence, not the shorter parent bullet. Web only. Native embedder vsync waits on funding.

TDD: ladder only.

## Verify

Spec files exist and name tests/raf-clock.test.mjs.

scope: docs/specs/ui-framework/animation-clocks/

## Links

- [[slice-74-raf-clock]]
- [[location-60-animation-clocks]]
