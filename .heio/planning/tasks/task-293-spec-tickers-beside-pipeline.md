---
id: "task-293-spec-tickers-beside-pipeline"
title: "Spec tickers beside pipeline"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "framework-in-draconic"
slice: "slice-292-tickers-beside-pipeline"
tags: []
created_at: "2026-09-12T09:20:00Z"
updated_at: "2026-09-12T09:20:00Z"
---

# Spec tickers beside pipeline

## Blocked by

None.

## Done

Animation-clocks purpose, contract, and test lock `animation-clocks.tickers:beside-pipeline`, `animation-clocks.engine:forbid-owned-state`, and `animation-clocks.tickers:forbid-setstate` from [[location-60-animation-clocks]] and [[rounds-291-freeze-tickers-beside-pipeline]].

## Context

Edit the existing animation-clocks ladder. Do not add a second spec folder. Quote the Vsync tickers destination: vsync tickers exist beside the pipeline, layers, input, and a11y copy. Engine does not own animation state. setState is not the ticker.

Public surface stays `Clock`. Do not invent `Ticker`, `SchedulerBinding`, or `AnimationController`. Do not retarget `Clock` onto desktop embedder vsync. That nested bullet is One vsync.

Do not repeat rAF oracles. Those live on [[purpose-animation-clocks]]. Do not repeat signals-are-not-layout oracles. Those live on [[purpose-signal-dirtying]]. Do not repeat desktop window vsync oracles. Those live on [[purpose-desktop-embedder]]. Do not rewrite [[animation-clocks.vsync:web-raf]]. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Purpose, contract, and test.md name the two oracle tests and point the three leftover promises at them.

scope: docs/specs/ui-framework/animation-clocks/

## Links

- [[slice-292-tickers-beside-pipeline]]
- [[location-60-animation-clocks]]
- [[purpose-animation-clocks]]
- [[contract-animation-clocks]]
- [[test-animation-clocks]]

## Agent Brief

**Category:** enhancement
**Summary:** Lock the leftover animation-clocks promises: tickers beside pipeline, engine does not own animation state, setState is not the ticker.

**Intent (required when product behaviour changes):**
- Promise ids: lock `animation-clocks.tickers:beside-pipeline`, `animation-clocks.engine:forbid-owned-state`, `animation-clocks.tickers:forbid-setstate`; keep `animation-clocks.framework:in-library`, `animation-clocks.vsync:web-raf`, `animation-clocks.signals:not-tickers`
- Purpose: edit [[purpose-animation-clocks]] in this sitting
- Contract-first: lock the three leftover promises then name tests in test.md. No product code

**Current behavior:**
[[slice-74-raf-clock]] locked rAF clocks and signals-are-not-the-ticker. [[contract-animation-clocks]] asserts the three leftover promises without tests. [[test-animation-clocks]] Gaps name those ids. Slice oracles are named on [[slice-292-tickers-beside-pipeline]].

**Desired behavior:**
The animation-clocks ladder locks two oracles: tickers sit beside pipeline, layers, input, and a11y, and the engine does not own animation state (setState is not the ticker). Oracle commands are `node --test tests/animation-clocks/tickers-beside-pipeline.test.mjs` and `node --test tests/animation-clocks/no-engine-animation-state.test.mjs`.

**Key interfaces:**
- Purpose, contract, and test notes for area `animation-clocks`
- Promises must not add a public Ticker, SchedulerBinding, or AnimationController

**Acceptance criteria:**
- [ ] purpose, contract, and test.md lock the three leftover promises
- [ ] test.md names both oracle commands above
- [ ] `animation-clocks.vsync:web-raf` is kept, not repeated as a new oracle
- [ ] No product code

**Out of scope:**
- Retargeting Clock onto desktop embedder vsync
- Repeating [[purpose-animation-clocks]] rAF oracles
- Repeating [[purpose-signal-dirtying]] pipeline oracles
- Repeating [[purpose-desktop-embedder]] window vsync oracles
- Implementing the compiler
