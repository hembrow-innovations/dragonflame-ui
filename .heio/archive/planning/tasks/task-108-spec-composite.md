---
id: "task-108-spec-composite"
title: "Spec composites"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "web-tracers"
slice: "slice-107-composite-on-dom"
tags: []
created_at: "2026-09-10T22:30:00Z"
updated_at: "2026-09-09T22:31:29Z"
---

# Spec composites

## Blocked by

None.

## Done

Composite spec folder exists: function type as `h(type, props)`, props and children in, shared composites over host leaves, run-once, no Show, no For.

## Context

Write purpose, contract, and test.md from [[location-23-components]], [[location-32-host-leaves]], [[location-27-render-object]], and [[location-28-dom-renderer]]. Quote child destination sentences: props and children, composition, one tree, retained identity, shared composites, write properties onto a retained node, patch children.

Do not invent Show or keyed For. Do not add a public RenderObject type. Do not add JSX. Children stay in `props.children`. `h(type, props)` stays the authoring form. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files exist and name the three oracle tests.

scope: docs/specs/ui-framework/composite/

## Links

- [[slice-107-composite-on-dom]]
- [[rounds-106-composite-props-children]]
