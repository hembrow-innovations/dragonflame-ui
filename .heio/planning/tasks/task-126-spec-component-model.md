---
id: "task-126-spec-component-model"
title: "Spec component model honesty"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "web-tracers"
slice: "slice-125-component-model-honesty"
tags: []
created_at: "2026-09-10T09:40:00Z"
updated_at: "2026-09-10T09:40:00Z"
---

# Spec component model honesty

## Blocked by

None.

## Done

Component model spec quotes location-23 nested bets: one tree, not class components.

## Context

Write purpose, contract, and test.md from [[location-23-components]], intent, [[architecture-layer-cake]], and [[rounds-124-component-model-honesty]]. Quote child destination sentences: one tree, not class components.

Do not invent a public Component class or tree factories. Do not repeat [[slice-70-counter-on-dom]] run-once oracles. Do not repeat [[slice-71-unmount-disposes]] owner Fiber-as-ownership oracles. Do not repeat [[slice-85-first-version-without-sugar]] JSX parser oracles. Counter and composite contracts already assert `counter.component:forbid-vdom`, `composite.component:forbid-vdom`, and `composite.tree:one` without tests; this folder owns the lock. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files exist and name the three oracle tests.

scope: docs/specs/ui-framework/component-model/

## Links

- [[slice-125-component-model-honesty]]
- [[rounds-124-component-model-honesty]]
