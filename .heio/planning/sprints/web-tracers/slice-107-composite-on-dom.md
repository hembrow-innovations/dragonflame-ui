---
id: "slice-107-composite-on-dom"
title: "Composite on DOM"
kind: slice
status: frozen
sprint: "web-tracers"
blocked_by:
  - "slice-72-leaf-kit-on-dom"
tags: []
created_at: "2026-09-10T22:30:00Z"
updated_at: "2026-09-10T22:30:00Z"
---

# Composite on DOM

## Why

Shared code is composite components. Props in, children in, nested children, one tree.

## Done

A function component used as `h(type, props)` receives props and children, returns host leaves, and nested children appear on DOM. The composite runs once. A text patch does not re-run it. No Show. No For. No subclassing.

## Blocked by

[[slice-72-leaf-kit-on-dom]]: composites wrap the closed leaf set.

## Non-goals

Show, keyed For, Widget subclassing, a public RenderObject type, native hosts, JSX, HTML leaves.

## Oracle checklist

- [x] O1: function type mounts to host leaves
  CHECK: node --test tests/composite-h.test.mjs
  EXPECT: pass
  EVIDENCE: 1 pass 0 fail
- [ ] O2: props.children nest through the composite onto DOM
  CHECK: node --test tests/composite-children.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [x] O3: composite function did not re-run on a text patch
  CHECK: node --test tests/composite-run-once.test.mjs
  EXPECT: pass
  EVIDENCE: 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-108-spec-composite]]
- [[task-109-red-green-composite-h]]
- [[task-110-red-green-composite-children]]

## See also

- [[location-17-web-component-library]]
- [[location-23-components]]
- [[location-32-host-leaves]]
- [[location-27-render-object]]
- [[location-28-dom-renderer]]
- [[rounds-106-composite-props-children]]
