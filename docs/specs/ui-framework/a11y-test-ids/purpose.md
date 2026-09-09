---
id: "purpose-a11y-test-ids"
title: "A11y test IDs purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for first-class a11y and test ID props on web leaves."
status: active
domain: ui-framework
area: a11y-test-ids
tags: [purpose]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# A11y test IDs purpose

## Job

Accessibility and test IDs are first-class props on the web package leaves.

## In scope

Child destination sentences from [[location-34-a11y-test-ids]] and the test-ID grain of [[location-29-tests]]:

- **First-class props**: accessibility and test IDs are first-class props.
- **Web props**: those props exist on the web package leaves.
- **Not bolted on**: props are not bolted on after the host leaves.

This area's oracle proves a test finds a pressable by test ID. It does not prove a native semantics tree.

## Out of scope

- Native semantics tree. That is [[location-54-accessibility]].
- ARIA-only DOM as the native model.
- Native accessibility APIs. The source does not name them.
- Bolting props on after a second leaf pass.

## Surfaces

First-class props on the web package leaves.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[location-34-a11y-test-ids]], [[location-29-tests]], and [[location-54-accessibility]].

## Open product questions

- (none)
