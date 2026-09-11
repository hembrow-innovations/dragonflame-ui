---
id: "task-297-spec-one-vsync"
title: "Spec one vsync"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "framework-in-draconic"
slice: "slice-296-one-vsync"
tags: []
created_at: "2026-09-12T10:30:00Z"
updated_at: "2026-09-12T10:30:00Z"
---

# Spec one vsync

## Blocked by

None.

## Done

Animation-clocks purpose, contract, and test lock `animation-clocks.vsync:one-source` from [[location-60-animation-clocks]] and [[rounds-295-freeze-one-vsync]].

## Context

Edit the existing animation-clocks ladder. Do not add a second spec folder. Quote the One vsync destination: one vsync comes from the embedder, and on web vsync is requestAnimationFrame. Clocks share that one vsync. They do not each have their own time source.

Public surface stays `Clock`. Do not invent `Ticker`, `SchedulerBinding`, `AnimationController`, or a public `VsyncPort`. Do not retarget `Clock` onto desktop embedder vsync. Native embedder vsync waits on funding.

Do not repeat rAF oracles. Those live on [[purpose-animation-clocks]]. Do not repeat tickers-beside-pipeline oracles. Those live on [[slice-292-tickers-beside-pipeline]]. Do not repeat desktop window vsync oracles. Those live on [[purpose-desktop-embedder]]. Do not rewrite [[animation-clocks.vsync:web-raf]]. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Purpose, contract, and test.md name the one-vsync oracle and point `animation-clocks.vsync:one-source` at it. `animation-clocks.vsync:web-raf` stays locked on rAF clock ticks.

scope: docs/specs/ui-framework/animation-clocks/

## Links

- [[slice-296-one-vsync]]
- [[location-60-animation-clocks]]
- [[purpose-animation-clocks]]
- [[contract-animation-clocks]]
- [[test-animation-clocks]]
- [[rounds-295-freeze-one-vsync]]

## Agent Brief

**Category:** enhancement
**Summary:** Lock the leftover animation-clocks promise: clocks share one embedder vsync.

**Intent (required when product behaviour changes):**
- Promise ids: lock `animation-clocks.vsync:one-source`; keep `animation-clocks.framework:in-library`, `animation-clocks.vsync:web-raf`, `animation-clocks.signals:not-tickers`
- Purpose: edit [[purpose-animation-clocks]] in this sitting
- Contract-first: lock `animation-clocks.vsync:one-source` then name the test in test.md. No product code

**Current behavior:**
[[slice-74-raf-clock]] locked rAF clocks. [[contract-animation-clocks]] `animation-clocks.vsync:web-raf` already has a test. Today's `Clock` starts its own rAF per call. [[test-animation-clocks]] Gaps name native embedder vsync, not shared one-source. Slice oracles are named on [[slice-296-one-vsync]].

**Desired behavior:**
The animation-clocks ladder locks one oracle: two `Clock` subscribers share one embedder vsync and the same `t`. Oracle command is `node --test tests/animation-clocks/one-vsync.test.mjs`. Native embedder vsync stays out of scope.

**Key interfaces:**
- Purpose, contract, and test notes for area `animation-clocks`
- Promises must not add a public Ticker, SchedulerBinding, AnimationController, or VsyncPort

**Acceptance criteria:**
- [ ] purpose, contract, and test.md lock `animation-clocks.vsync:one-source`
- [ ] test.md names the oracle command above
- [ ] `animation-clocks.vsync:web-raf` is kept, not repeated as a new oracle
- [ ] No product code

**Out of scope:**
- Native embedder vsync driving Clock
- Repeating [[purpose-animation-clocks]] rAF oracles
- Repeating [[slice-292-tickers-beside-pipeline]] beside-pipeline oracles
- Repeating [[purpose-desktop-embedder]] window vsync oracles
- Implementing the compiler
