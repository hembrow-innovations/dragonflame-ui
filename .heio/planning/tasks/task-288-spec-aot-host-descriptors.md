---
id: "task-288-spec-aot-host-descriptors"
title: "Spec AOT host descriptors"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "framework-in-draconic"
slice: "slice-287-aot-host-descriptors"
tags: []
created_at: "2026-09-12T08:30:00Z"
updated_at: "2026-09-12T08:30:00Z"
---

# Spec AOT host descriptors

## Blocked by

None.

## Done

Aot-host-descriptors spec folder exists from [[location-35-host-config]], [[overview-ui-framework]], and [[rounds-286-freeze-aot-host-descriptors]]: native leaf host descriptors are typed AOT FFI, and layout and measure stay synchronous on the Runtime job queue.

## Context

Write purpose, contract, and test.md from [[location-35-host-config]] New Architecture steal, [[overview-ui-framework]] steal list, [[architecture-layer-cake]] UI thread as Runtime job queue, and [[location-27-render-object]] retained objects plus immutable config as the shadow tree. Quote those destination sentences.

First tracer: compile-time typed FFI structs behind the leaf adapter, not JS host objects. Layout and measure on the Runtime job queue. No JS shadow thread. No async Bridge for layout or measure.

Do not invent a public HostConfig. Do not invent a public ShadowTree. Do not invent a public measure. Do not repeat no-JSI or no-Hermes oracles. Those live on [[purpose-host-config]]. Do not repeat Taffy-rect or GPU-not-UI oracles. Those live on [[purpose-ffi-scene-commands]]. Do not repeat run-once oracles. Those live on [[purpose-counter]]. Do not lock StyleSheet feeding Taffy. Do not rewrite [[host-config.steal:forbid-jsi]]. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files exist and name the two oracle tests.

scope: docs/specs/ui-framework/aot-host-descriptors/

## Links

- [[slice-287-aot-host-descriptors]]
- [[location-35-host-config]]
- [[purpose-host-config]]
- [[purpose-ffi-scene-commands]]

## Agent Brief

**Category:** enhancement
**Summary:** Assert the aot-host-descriptors ladder: typed AOT leaf FFI, sync layout and measure on the Runtime job queue.

**Intent (required when product behaviour changes):**
- Promise ids: assert `aot-host-descriptors` promises from [[location-35-host-config]] and [[overview-ui-framework]]; keep `host-config.steal:forbid-jsi` and `host-config.steal:forbid-hermes`
- Purpose: write [[purpose-aot-host-descriptors]] in this sitting
- Contract-first: assert promise then name tests in test.md. No product code

**Current behavior:**
[[location-35-host-config]] steal lessons stayed unfrozen while native was unfunded. [[purpose-host-config]] fences immutable shadow tree, AOT FFI, and UI-thread measure out of scope. Slice oracles are named on [[slice-287-aot-host-descriptors]].

**Desired behavior:**
A spec folder locks two oracles: native leaves become compile-time typed FFI structs behind the leaf adapter, and layout and measure run synchronously on the Runtime job queue with no JS shadow thread and no async Bridge. Oracle commands are `node --test tests/aot-host-descriptors/typed-leaf-ffi.test.mjs` and `node --test tests/aot-host-descriptors/sync-ui-layout.test.mjs`.

**Key interfaces:**
- Purpose, contract, and test notes for area `aot-host-descriptors`
- Promises must not add a public HostConfig, ShadowTree, or measure

**Acceptance criteria:**
- [ ] purpose, contract, and test.md exist for aot-host-descriptors
- [ ] test.md names both oracle commands above
- [ ] `host-config.steal:forbid-jsi` is kept, not repeated as a new oracle
- [ ] No product code

**Out of scope:**
- Implementing LeafDesc
- StyleSheet feeding Taffy
- Repeating [[purpose-host-config]] JSI oracles
- Repeating [[purpose-ffi-scene-commands]] Taffy-rect oracles
- Implementing the compiler
