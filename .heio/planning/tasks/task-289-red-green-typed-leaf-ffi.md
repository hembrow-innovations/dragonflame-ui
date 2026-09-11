---
id: "task-289-red-green-typed-leaf-ffi"
title: "Red-green typed leaf FFI"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-288-spec-aot-host-descriptors"
sprint: "framework-in-draconic"
slice: "slice-287-aot-host-descriptors"
tags: []
created_at: "2026-09-12T08:30:00Z"
updated_at: "2026-09-12T08:30:00Z"
---

# Red-green typed leaf FFI

## Blocked by

[[task-288-spec-aot-host-descriptors]]: ladder first.

## Done

O1 `tests/aot-host-descriptors/typed-leaf-ffi.test.mjs` passes: native leaves become compile-time typed FFI structs behind the leaf adapter, not JS host objects or string tags.

## Context

[[slice-287-aot-host-descriptors]] O1. Native leaf host descriptors are compile-time typed FFI structs. The leaf adapter owns the mapping. Callers still use `h` and the closed leaf kit. No public HostConfig. No public descriptor registry. Field names inside the struct stay unnamed.

Do not add a public HostConfig. Do not add JSI host function tables. Do not add a second `extern "C"` entry. Do not repeat no-JSI filename oracles. Do not repeat Taffy-rect oracles. Do not implement StyleSheet feeding Taffy.

TDD: red then green.

## Verify

node --test tests/aot-host-descriptors/typed-leaf-ffi.test.mjs

scope: tests/aot-host-descriptors/ and the native leaf adapter

## Links

- [[slice-287-aot-host-descriptors]]
- [[task-288-spec-aot-host-descriptors]]
- [[purpose-host-config]]

## Agent Brief

**Category:** enhancement
**Summary:** Red-green typed AOT leaf FFI behind the leaf adapter.

**Intent (required when product behaviour changes):**
- Promise ids: the `aot-host-descriptors` typed-leaf promise from the ladder this slice's spec task writes
- Purpose: [[purpose-aot-host-descriptors]]
- Contract-first: edit/assert promise then test then code

**Current behavior:**
Native submits one packed scene of a colored rect. Host config honesty forbids JSI and Hermes. Native leaves are not yet proven as compile-time typed FFI structs behind the leaf adapter.

**Desired behavior:**
`node --test tests/aot-host-descriptors/typed-leaf-ffi.test.mjs` passes. Native leaves become compile-time typed FFI structs behind the leaf adapter, not JS host objects or string tags. Callers do not import HostConfig.

**Key interfaces:**
- Private leaf descriptor type, `repr(C)`, fields unnamed
- Existing packed `extern "C"` submit stays the only host entry
- Closed leaf kit stays the caller surface

**Acceptance criteria:**
- [ ] O1 command passes
- [ ] No public HostConfig
- [ ] No second extern C for descriptors
- [ ] `host-config.steal:forbid-jsi` still holds

**Out of scope:**
- Sync UI layout oracle (next task)
- Public measure
- StyleSheet feeding Taffy
- Repeating Taffy-rect tests
- Implementing the compiler
