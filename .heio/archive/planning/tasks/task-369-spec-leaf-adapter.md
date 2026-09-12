---
id: "task-369-spec-leaf-adapter"
title: "Spec Leaf Adapter"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "framework-in-draconic"
slice: "slice-368-leaf-adapter"
tags: []
created_at: "2026-09-12T07:44:54Z"
updated_at: "2026-09-12T10:19:48Z"
---

# Spec Leaf Adapter

## Blocked by

None.

## Done

[[contract-leaf-kit]] and [[test-leaf-kit]] lock `leaf-kit.host:config-at-leaves` from [[location-35-host-config]] Leaf adapter and [[rounds-367-freeze-leaf-adapter]].

## Context

Ladder exists at `docs/specs/ui-framework/leaf-kit/`. Do not create a new spec folder. Lock the existing asserted promise for this grain. Quote Leaf adapter: only the leaf adapter knows DOM versus UIView versus engine draw lists.

Keep steal honesty on [[purpose-host-config]]. Do not invent a public HostConfig or Host.

Do not restage `host-config.steal:forbid-jsi`, `host-config.steal:forbid-hermes`, or `leaf-kit.set:closed`. Do not restage [[slice-348-portable-program]].

Public surface stays `h`, `render`, and the closed leaf kit.

TDD: ladder only. No product code.

## Verify

Contract and test.md lock `leaf-kit.host:config-at-leaves` and point it at `node --test tests/leaf-kit/config-at-leaves.test.mjs`. Named test: only the leaf adapter knows DOM versus UIView versus engine draw lists.

scope: docs/specs/ui-framework/leaf-kit/

## Links

- [[slice-368-leaf-adapter]]
- [[location-35-host-config]]
- [[purpose-leaf-kit]]
- [[contract-leaf-kit]]
- [[test-leaf-kit]]
- [[rounds-367-freeze-leaf-adapter]]

## Agent Brief

**Category:** enhancement
**Summary:** Lock the Leaf adapter promise so only the leaf adapter knows DOM versus UIView versus engine draw lists.

**Intent (required when product behaviour changes):**
- Promise ids: lock `leaf-kit.host:config-at-leaves`
- Purpose: [[purpose-leaf-kit]]
- Contract-first: lock `leaf-kit.host:config-at-leaves` then name the test in test.md. No product code

**Current behavior:**
[[contract-leaf-kit]] asserts `leaf-kit.host:config-at-leaves` with no test. [[purpose-host-config]] parks this grain on leaf-kit and owns steal honesty. Locked steal and closed-set promises do not prove adapter ownership.

**Desired behavior:**
[[contract-leaf-kit]] and [[test-leaf-kit]] lock `leaf-kit.host:config-at-leaves`. Oracle command is `node --test tests/leaf-kit/config-at-leaves.test.mjs`. Steal and closed-set promises stay untouched. No public HostConfig or Host.

**Key interfaces:**
- Existing leaf-kit purpose, contract, and test notes
- Promises must not add a public HostConfig or Host

**Acceptance criteria:**
- [x] contract and test.md lock `leaf-kit.host:config-at-leaves`
- [x] test.md names the oracle command above
- [x] locked steal and closed-set promises are not rewritten
- [x] No product code

**Out of scope:**
- Creating a new spec folder
- Restaging `host-config.steal:forbid-jsi` or `host-config.steal:forbid-hermes`
- Restaging `leaf-kit.set:closed`
- Restaging [[slice-348-portable-program]]
- Implementing the compiler
