---
id: "purpose-owner"
title: "Owner purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for owner dispose."
status: active
domain: ui-framework
area: owner
tags: [purpose]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Owner purpose

## Job

An ownership node exists for effects and nested reactive scopes, and unmount disposes effects and nested owners.

## In scope

Child destination sentences from [[location-25-owner]]:

- **Effects**: effects belong to an Owner.
- **Nested scopes**: nested reactive scopes hang off an Owner.
- **Unmount disposes**: unmount disposes effects and nested owners.

This demo's oracle proves unmount disposes effects and nested owners.

## Out of scope

- Fiber. Effects are not Fiber work.
- Flutter Element dirty flags as ownership.
- InheritedWidget as the dirty bit.
- Native persist as a second ownership model.

## Surfaces

Unmount of the counter tree on the web DOM host.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[location-25-owner]], [[location-17-web-component-library]], and [[glossary]].

## Open product questions

- (none)
