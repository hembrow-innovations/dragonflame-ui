---
id: "slice-70-counter-on-dom"
title: "Counter on DOM"
kind: slice
status: active
sprint: "web-tracers"
blocked_by:
  - "slice-69-importable-package"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-10T05:45:00Z"
---

# Counter on DOM

## Why

One thin vertical demo through components, signals, hyperscript, a retained render object, the DOM renderer, the JS backend, and tests.

## Done

A function component runs once, creates a ui.Signal, returns `h(type, props)`, and a signal write patches DOM text. The render object is retained. Browser vsync is requestAnimationFrame as embedder. No virtual DOM. No click leaf yet.

## Blocked by

[[slice-69-importable-package]]: package identity first.

## Non-goals

Full leaf kit, Owner dispose, JSX, web canvas, WASM.

## Oracle checklist

- [x] O1: static hyperscript text on DOM
  CHECK: node --test tests/counter-static-h.test.mjs
  EXPECT: pass
  EVIDENCE: pass
- [x] O2: signal write patches the same DOM text
  CHECK: node --test tests/counter-signal-patch.test.mjs
  EXPECT: pass
  EVIDENCE: pass
- [x] O3: component function did not re-run on the write
  CHECK: node --test tests/counter-run-once.test.mjs
  EXPECT: pass
  EVIDENCE: pass

## Pool

- [[task-89-spec-counter]]
- [[task-90-red-green-static-h]]
- [[task-91-red-green-signal-patch]]

## See also

- [[location-23-components]]
- [[location-24-signals]]
- [[location-26-hyperscript]]
- [[location-27-render-object]]
- [[location-28-dom-renderer]]
- [[location-29-tests]]
- [[location-30-js-backend]]
