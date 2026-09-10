---
id: "contract-signal-dirtying"
title: "Signal dirtying contract"
kind: contract
description: "Durable, plain-language promises for signal dirtying honesty. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: signal-dirtying
tags: [contract]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Signal dirtying contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `signal-dirtying.dirty:no-setstate`: This checkout does not use setState or a React state hook as the dirty model. There is no public setState or useState. Structural change is not setState dirtying an Element subtree.
  test: this checkout does not use setState or a React state hook as the dirty model
- `signal-dirtying.pipeline:build-only`: Signals replace the build dirtying mechanism only. They do not replace constraint layout, hit-test, layer compositing, gesture arena, or semantics.
  test: this checkout does not use signals as constraint layout, hit-test, layer compositing, gesture arena, or semantics
- `signal-dirtying.workers:no-shared`: Compute workers never share a signal object. There is no public SharedSignal.
  test: this checkout does not share a signal object across workers
