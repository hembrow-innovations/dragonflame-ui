---
id: "slice-116-patch-attrs-children"
title: "Patch attrs and children"
kind: slice
status: frozen
sprint: "web-tracers"
blocked_by:
  - "slice-72-leaf-kit-on-dom"
tags: []
created_at: "2026-09-10T09:15:00Z"
updated_at: "2026-09-10T09:15:00Z"
---

# Patch attrs and children

## Why

Create-and-patch demo. Text already patches. Attributes and children must patch on the retained host node.

## Done

A style signal write patches the same retained host node. A children signal write patches one host vnode under the same retained parent. No Show. No For. No public patch API.

## Blocked by

[[slice-72-leaf-kit-on-dom]]: style and host children exist at mount. [[slice-70-counter-on-dom]] already patches text.

## Non-goals

Show, keyed For, child-list patch of a changing array, a public patch or reconcile API, inventing image src or input value, layout paint or hit-test algorithms, virtual DOM.

## Oracle checklist

- [ ] O1: style signal write patches the same host node
  CHECK: node --test tests/patch-style.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: children signal write patches one child under the same parent
  CHECK: node --test tests/patch-children.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-117-spec-dom-patch]]
- [[task-118-red-green-patch-style]]
- [[task-119-red-green-patch-children]]

## See also

- [[location-28-dom-renderer]]
- [[location-27-render-object]]
- [[location-17-web-component-library]]
- [[slice-70-counter-on-dom]]
- [[slice-72-leaf-kit-on-dom]]
- [[slice-107-composite-on-dom]]
- [[rounds-115-patch-attrs-children]]
