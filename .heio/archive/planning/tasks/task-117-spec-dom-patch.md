---
id: "task-117-spec-dom-patch"
title: "Spec DOM patch"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "web-tracers"
slice: "slice-116-patch-attrs-children"
tags: []
created_at: "2026-09-10T09:15:00Z"
updated_at: "2026-09-10T12:30:00Z"
---

# Spec DOM patch

## Blocked by

None.

## Done

DOM patch spec folder exists: style signal write patches the same retained host node, children signal write patches one host vnode under the same parent, no Show, no For, no public patch API.

## Context

Write purpose, contract, and test.md from [[location-28-dom-renderer]] and [[location-27-render-object]]. Quote child destination sentences: create and patch, write properties onto a retained node. Counter purpose already says attribute patch and child patch are unproven. Composite purpose already forbids Show, keyed For, and child-list patch of a changing array.

Attribute is StyleSheet-shaped `style` already applied at mount. Do not invent image `src` or input `value`. Children stay in `props.children` as one host vnode in a ui.Signal. `h(type, props)` stays the authoring form. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files exist and name the two oracle tests.

scope: docs/specs/ui-framework/dom-patch/

## Links

- [[slice-116-patch-attrs-children]]
- [[rounds-115-patch-attrs-children]]
