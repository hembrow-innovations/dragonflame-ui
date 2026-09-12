---
id: "task-370-red-green-leaf-adapter"
title: "Red-green Leaf Adapter"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-369-spec-leaf-adapter"
sprint: "framework-in-draconic"
slice: "slice-368-leaf-adapter"
tags: []
created_at: "2026-09-12T07:44:54Z"
updated_at: "2026-09-12T10:31:26Z"
---

# Red-green Leaf Adapter

## Blocked by

[[task-369-spec-leaf-adapter]]: ladder must lock `leaf-kit.host:config-at-leaves` before tests.

## Done

`node --test tests/leaf-kit/config-at-leaves.test.mjs` passes.

## Context

Callers keep `h`, `render`, and the closed leaf kit. The prove is adapter ownership: only the leaf adapter knows DOM versus UIView versus engine draw lists. No public HostConfig. No public Host. Host tokens may exist only inside the private adapter. Composites do not import the host.

Do not point CHECK at `tests/host-config/no-jsi.test.mjs`, `tests/host-config/no-hermes-host-config.test.mjs`, `tests/leaf-kit/leaf-view-text-style.test.mjs`, or `tests/renderer-portability/portable-program.test.mjs`. Do not restage steal, closed-set render, thin-surface, web-path, or portable-program oracles. Do not freeze Compile-time platform, New Architecture steal, or Portable import. Do not implement the compiler.

TDD: red test, then the smallest green that locks the oracle.

## Verify

The oracle command passes. No public HostConfig. No public Host. Steal and closed-set tests still pass.

scope: tests/leaf-kit/config-at-leaves.test.mjs src/renderer/ src/leaves/

## Links

- [[slice-368-leaf-adapter]]
- [[task-369-spec-leaf-adapter]]
- [[location-35-host-config]]
- [[rounds-367-freeze-leaf-adapter]]

## Agent Brief

**Category:** enhancement
**Summary:** Red-green that only the leaf adapter knows DOM versus UIView versus engine draw lists.

**Intent (required when product behaviour changes):**
- Promise ids: `leaf-kit.host:config-at-leaves`
- Purpose: [[purpose-leaf-kit]]
- Contract-first: the test named in test.md must pass

**Current behavior:**
Steal tests exist under `tests/host-config/`. Closed-set render tests exist under `tests/leaf-kit/`. No test yet that only the leaf adapter knows DOM versus UIView versus engine draw lists.

**Desired behavior:**
The oracle command passes. Named test: only the leaf adapter knows DOM versus UIView versus engine draw lists. Fail if this checkout exports HostConfig or Host, lets host tokens appear outside the private leaf adapter, or lets composites import the host.

**Key interfaces:**
- New test file `tests/leaf-kit/config-at-leaves.test.mjs`
- No public HostConfig or Host

**Acceptance criteria:**
- [x] `node --test tests/leaf-kit/config-at-leaves.test.mjs` passes
- [x] The named test owns the Leaf adapter prove, not steal, closed-set render, or portable-program oracles
- [x] No public HostConfig or Host
- [x] Steal and closed-set tests still pass

## Gauntlet

- **round 1**: `node --test tests/leaf-kit/config-at-leaves.test.mjs` win. Named test locks `leaf-kit.host:config-at-leaves`. Host tokens live in private `src/renderer/adapter.js`. No public HostConfig or Host. Steal and closed-set tests still pass.

**Out of scope:**
- Pointing this CHECK at `tests/host-config/no-jsi.test.mjs`
- Pointing this CHECK at `tests/host-config/no-hermes-host-config.test.mjs`
- Pointing this CHECK at `tests/leaf-kit/leaf-view-text-style.test.mjs`
- Pointing this CHECK at `tests/renderer-portability/portable-program.test.mjs`
- Restaging steal, closed-set render, thin-surface, web-path, or portable-program oracles
- Implementing the compiler
- Freezing Compile-time platform, New Architecture steal, or Portable import
