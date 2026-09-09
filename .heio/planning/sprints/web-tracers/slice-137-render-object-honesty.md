---
id: "slice-137-render-object-honesty"
title: "Render object honesty"
kind: slice
status: frozen
sprint: "web-tracers"
blocked_by:
  - "slice-70-counter-on-dom"
tags: []
created_at: "2026-09-10T10:40:00Z"
updated_at: "2026-09-10T10:40:00Z"
---

# Render object honesty

## Why

Honesty demo. The render object already retains. Nested bets still unnamed: immutable config without Flutter Widget as the retained node, and Component stays the function while Render object stays the retained node.

## Done

Tests fail if this checkout treats Flutter Widget as the retained node, or names Widget or Element as the collapse of Component and Render object. No public Widget. No public Element.

## Blocked by

[[slice-70-counter-on-dom]]: a retained host node exists so Widget cannot become it. [[slice-116-patch-attrs-children]] already covers write properties on the same host node; do not repeat those oracles. [[slice-125-component-model-honesty]] already covers Fiber as component identity; do not repeat those oracles. [[slice-71-unmount-disposes]] already covers Fiber as ownership; do not repeat those oracles. [[slice-107-composite-on-dom]] already forbids a public RenderObject type; do not repeat that oracle.

## Non-goals

A public Widget. A public Element. A public RenderObject type. Layout, paint, or hit-test algorithms. Repeating retained-node oracles. Repeating same-host-node patch oracles. Repeating Fiber identity or ownership oracles. Repeating no-public-RenderObject oracles. Native hosts. Implementing a compiler.

## Oracle checklist

- [ ] O1: no Widget as retained node
  CHECK: node --test tests/no-widget-retain.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: no collapsed Component and Render object naming
  CHECK: node --test tests/no-collapsed-render-names.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-138-spec-render-object]]
- [[task-139-red-green-render-object]]

## See also

- [[location-27-render-object]]
- [[location-17-web-component-library]]
- [[slice-70-counter-on-dom]]
- [[slice-116-patch-attrs-children]]
- [[slice-107-composite-on-dom]]
- [[slice-125-component-model-honesty]]
- [[slice-71-unmount-disposes]]
- [[rounds-136-render-object-honesty]]
