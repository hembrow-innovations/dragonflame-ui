---
id: "task-142-spec-web-layout"
title: "Spec web layout honesty"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "web-tracers"
slice: "slice-141-web-layout-honesty"
tags: []
created_at: "2026-09-10T11:00:00Z"
updated_at: "2026-09-10T00:31:34Z"
---

# Spec web layout honesty

## Blocked by

None.

## Done

Web layout spec quotes location-31 nested bets: not pixel-identical, and copy the DOM backend as an idea not as Impeller.

## Context

Write purpose, contract, and test.md from [[location-31-web-layout]], intent, [[architecture-layer-cake]], [[overview-ui-framework]], and [[rounds-140-web-layout-honesty]]. Quote child destination sentences: web versus native is allowed to disagree because web is CSS on the DOM and native is Taffy in the engine; copy the DOM backend as an idea, not as an attempt to make DOM look like Impeller. Fold Taffy on web as the pixel-identical pivot.

Do not invent a public LayoutEngine. Do not invent a pixel-match switch. Do not implement Taffy. Do not lock CSS as the native layout runtime. Do not repeat [[slice-72-leaf-kit-on-dom]] CSS-on-web leaf oracles. Do not repeat [[slice-121-dom-only-web-host]] canvas or WASM oracles. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files exist and name the two oracle tests.

scope: docs/specs/ui-framework/web-layout/

## Links

- [[slice-141-web-layout-honesty]]
- [[rounds-140-web-layout-honesty]]
