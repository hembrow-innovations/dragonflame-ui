---
id: "task-138-spec-render-object"
title: "Spec render object honesty"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "web-tracers"
slice: "slice-137-render-object-honesty"
tags: []
created_at: "2026-09-10T10:40:00Z"
updated_at: "2026-09-10T01:36:37Z"
---

# Spec render object honesty

## Blocked by

None.

## Done

Render object spec quotes location-27 nested bets: immutable config without Flutter Widget as the retained node, and Component stays the function while Render object stays the retained node.

## Context

Write purpose, contract, and test.md from [[location-27-render-object]], intent, [[architecture-layer-cake]], [[glossary]], and [[rounds-136-render-object-honesty]]. Quote child destination sentences: component configs are cheap and render objects persist; Flutter Widget is not the retained node; Component stays the function and Render object stays the retained node.

Do not invent a public Widget. Do not invent a public Element. Do not add a public RenderObject type. Do not repeat [[slice-70-counter-on-dom]] retained-node oracles. Do not repeat [[slice-116-patch-attrs-children]] same-host-node patch oracles. Do not repeat Fiber identity or ownership oracles. Do not freeze layout, paint, or hit-test algorithms. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files exist and name the two oracle tests.

scope: docs/specs/ui-framework/render-object/

## Links

- [[slice-137-render-object-honesty]]
- [[rounds-136-render-object-honesty]]
