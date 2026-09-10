---
id: "slice-129-signal-dirtying-honesty"
title: "Signal dirtying honesty"
kind: slice
status: met
sprint: "web-tracers"
blocked_by:
  - "slice-70-counter-on-dom"
tags: []
created_at: "2026-09-10T09:50:00Z"
updated_at: "2026-09-10T11:30:00Z"
---

# Signal dirtying honesty

## Why

Honesty demo. Get and set already patch DOM. Nested bets still unnamed: build dirtying only for the pipeline, no setState Element subtree, no shared signal objects.

## Done

Tests fail if this checkout uses setState or a React state hook as the dirty model, uses signals as constraint layout, hit-test, layer compositing, gesture arena, or semantics, or shares a signal object across workers. No public setState.

## Blocked by

[[slice-70-counter-on-dom]]: get and set exist so they can stay the only dirtying model. [[slice-74-raf-clock]] already covers signals as not the ticker; do not repeat those oracles. [[slice-71-unmount-disposes]] already covers owner dispose; do not repeat owner Fiber-as-ownership oracles. [[slice-107-composite-on-dom]] and [[slice-116-patch-attrs-children]] already forbid Show and keyed For; do not repeat those oracles.

## Non-goals

A public setState. A public useState. A public SharedSignal. Implementing Show or keyed For. Implementing compute workers. Repeating rAF ticker oracles. Repeating owner-dispose Fiber oracles. Repeating Show and For oracles. Native hosts. Implementing a compiler.

## Oracle checklist

- [x] O1: no setState dirty model
  CHECK: node --test tests/no-setstate-dirty.test.mjs
  EXPECT: pass
  EVIDENCE: 1 pass 0 fail
- [x] O2: signals do not replace the pipeline
  CHECK: node --test tests/no-signal-pipeline.test.mjs
  EXPECT: pass
  EVIDENCE: 1 pass 0 fail
- [x] O3: no shared signal objects
  CHECK: node --test tests/no-shared-signals.test.mjs
  EXPECT: pass
  EVIDENCE: 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-130-spec-signal-dirtying]]
- [[task-131-red-green-signal-dirtying]]

## See also

- [[location-24-signals]]
- [[location-17-web-component-library]]
- [[slice-70-counter-on-dom]]
- [[slice-74-raf-clock]]
- [[slice-71-unmount-disposes]]
- [[rounds-128-signal-dirtying-honesty]]
