---
id: "test-signal-dirtying"
title: "Signal dirtying tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: signal-dirtying
tags: [test]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Signal dirtying tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `signal-dirtying.dirty:no-setstate`, `signal-dirtying.pipeline:build-only`, and `signal-dirtying.workers:no-shared`. Oracle commands:

- node --test tests/no-setstate-dirty.test.mjs
- node --test tests/no-signal-pipeline.test.mjs
- node --test tests/no-shared-signals.test.mjs

## Tests

- **tests/no-setstate-dirty.test.mjs**: `this checkout does not use setState or a React state hook as the dirty model`
  - **How:** fails if this checkout uses setState or a React state hook as the dirty model, or adds a public setState or useState
  - **Why:** promise `signal-dirtying.dirty:no-setstate`
- **tests/no-signal-pipeline.test.mjs**: `this checkout does not use signals as constraint layout, hit-test, layer compositing, gesture arena, or semantics`
  - **How:** fails if this checkout uses signals as constraint layout, hit-test, layer compositing, gesture arena, or semantics
  - **Why:** promise `signal-dirtying.pipeline:build-only`
- **tests/no-shared-signals.test.mjs**: `this checkout does not share a signal object across workers`
  - **How:** fails if this checkout shares a signal object across workers, or adds a public SharedSignal
  - **Why:** promise `signal-dirtying.workers:no-shared`

## Gaps

- Get and set oracles stay on [[test-counter]].
- Ticker-not-signal oracles stay on [[test-animation-clocks]].
- Owner Fiber-as-ownership oracles stay on [[test-owner]].
- Show and For oracles stay on [[test-composite]] and [[test-dom-patch]].
- Native compute workers stay unfrozen on [[location-45-threads]].
