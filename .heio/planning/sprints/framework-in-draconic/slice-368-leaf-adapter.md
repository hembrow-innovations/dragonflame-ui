---
id: "slice-368-leaf-adapter"
title: "Leaf adapter"
kind: slice
status: frozen
sprint: "framework-in-draconic"
blocked_by: []
tags: []
created_at: "2026-09-12T07:44:54Z"
updated_at: "2026-09-12T07:44:54Z"
---

# Leaf adapter

## Why

Prove only the leaf adapter knows DOM versus UIView versus engine draw lists. Callers still import `h`, `render`, and the closed leaf kit. Portable components do not import the host.

## Done

Only the leaf adapter knows DOM versus UIView versus engine draw lists. Callers still import `h`, `render`, and the closed leaf kit. No public HostConfig. No public Host.

## Blocked by

None.

## Non-goals

A public HostConfig or Host. Freezing Compile-time platform, New Architecture steal, or Portable import. Native UIView versus engine draw lists as this folder's proof. Native hosts. Restaging `host-config.steal:forbid-jsi` or `host-config.steal:forbid-hermes`. Restaging `leaf-kit.set:closed` or other locked leaf-kit render oracles. Restaging [[slice-348-portable-program]]. Restaging [[slice-332-thin-surface]]. Restaging [[slice-340-web-path]]. Restaging [[slice-287-aot-host-descriptors]]. Pointing this slice CHECK at `tests/host-config/no-jsi.test.mjs`, `tests/host-config/no-hermes-host-config.test.mjs`, `tests/leaf-kit/leaf-view-text-style.test.mjs`, or `tests/renderer-portability/portable-program.test.mjs`. Implementing the compiler. Copying JS emit. JSX. Rewriting [[location-35-host-config]].

## Oracle checklist

- [ ] O1: only the leaf adapter knows DOM versus UIView versus engine draw lists
  CHECK: node --test tests/leaf-kit/config-at-leaves.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-369-spec-leaf-adapter]]
- [[task-370-red-green-leaf-adapter]]

## See also

- [[location-35-host-config]]
- [[location-17-web-component-library]]
- [[location-32-host-leaves]]
- [[intent]]
- [[overview-ui-framework]]
- [[architecture-layer-cake]]
- [[purpose-leaf-kit]]
- [[contract-leaf-kit]]
- [[test-leaf-kit]]
- [[purpose-host-config]]
- [[contract-host-config]]
- [[slice-348-portable-program]]
- [[rounds-367-freeze-leaf-adapter]]
