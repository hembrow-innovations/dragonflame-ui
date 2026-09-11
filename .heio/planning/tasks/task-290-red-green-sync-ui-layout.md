---
id: "task-290-red-green-sync-ui-layout"
title: "Red-green sync UI layout"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-289-red-green-typed-leaf-ffi"
sprint: "framework-in-draconic"
slice: "slice-287-aot-host-descriptors"
tags: []
created_at: "2026-09-12T08:30:00Z"
updated_at: "2026-09-12T08:30:00Z"
---

# Red-green sync UI layout

## Blocked by

[[task-289-red-green-typed-leaf-ffi]]: typed descriptors first.

## Done

O2 `tests/aot-host-descriptors/sync-ui-layout.test.mjs` passes: layout and measure run synchronously on the Runtime job queue. No JS shadow thread. No async Bridge for layout or measure.

## Context

[[slice-287-aot-host-descriptors]] O2. UI thread is the Runtime job queue. Layout, measure, and paint-list recording run there, in-process, synchronous. GPU submit stays off this thread (already oracled). There is no JS shadow thread. Layout is not Bridge work.

Do not add a public measure. Do not add a public ShadowTree. Do not add an async Bridge. Do not repeat GPU-not-UI oracles. Do not repeat no-shared-signal oracles. Do not implement StyleSheet feeding Taffy.

TDD: red then green.

## Verify

node --test tests/aot-host-descriptors/sync-ui-layout.test.mjs

scope: tests/aot-host-descriptors/ and layout on the Runtime job queue

## Links

- [[slice-287-aot-host-descriptors]]
- [[task-289-red-green-typed-leaf-ffi]]
- [[location-45-threads]]

## Agent Brief

**Category:** enhancement
**Summary:** Red-green sync layout and measure on the Runtime job queue with no JS shadow thread.

**Intent (required when product behaviour changes):**
- Promise ids: the `aot-host-descriptors` sync-ui-layout promise from the ladder this slice's spec task writes
- Purpose: [[purpose-aot-host-descriptors]]
- Contract-first: edit/assert promise then test then code

**Current behavior:**
Typed leaf FFI exists after the previous task. GPU submit is already not on the UI thread. Layout and measure are not yet proven synchronous on the Runtime job queue, and a JS shadow thread is not yet forbidden by this area's oracle.

**Desired behavior:**
`node --test tests/aot-host-descriptors/sync-ui-layout.test.mjs` passes. Layout and measure run synchronously on the Runtime job queue. There is no JS shadow thread. There is no async Bridge for layout or measure. Callers do not call measure().

**Key interfaces:**
- Runtime job queue as the UI thread
- Existing packed submit stays the only host entry
- No public measure, ShadowTree, or Bridge

**Acceptance criteria:**
- [ ] O2 command passes
- [ ] No public measure
- [ ] No JS shadow thread
- [ ] No async Bridge for layout or measure
- [ ] `ffi-scene-commands.threads:gpu-not-ui` still holds, not repeated as a new oracle

**Out of scope:**
- Repeating GPU-not-UI tests
- StyleSheet feeding Taffy
- Public HostConfig
- Implementing the compiler
