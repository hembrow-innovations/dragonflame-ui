---
id: "slice-287-aot-host-descriptors"
title: "AOT host descriptors"
kind: slice
status: frozen
sprint: "framework-in-draconic"
blocked_by:
  - "slice-77-draw-a-rect"
  - "slice-153-host-config-honesty"
tags: []
created_at: "2026-09-12T08:30:00Z"
updated_at: "2026-09-12T08:30:00Z"
---

# AOT host descriptors

## Why

New Architecture steal, now that native is funded. Typed host descriptors as AOT FFI. Layout and measure stay on the Runtime job queue. No JS shadow thread.

## Done

Native leaf host descriptors are compile-time typed FFI structs behind the leaf adapter. Layout and measure run synchronously on the Runtime job queue. There is no JS shadow thread and no async Bridge for layout or measure. Callers still use `h` and one packed submit. No public HostConfig. No public ShadowTree. No public measure.

## Blocked by

[[slice-77-draw-a-rect]]: in-process packed submit exists so descriptors can stay AOT FFI without a second host entry. [[slice-153-host-config-honesty]]: JSI and Hermes are already forbidden as host config; do not repeat those oracles.

## Non-goals

A public HostConfig. A public ShadowTree. A public measure. Repeating no-JSI or no-Hermes oracles. Repeating Taffy-rect or GPU-not-UI oracles. Repeating run-once oracles. Repeating no-Widget retained-node oracles. StyleSheet objects feeding Taffy. Packed-scene field names. OEM widget class lists. Implementing a compiler.

## Oracle checklist

- [ ] O1: typed leaf FFI
  CHECK: node --test tests/aot-host-descriptors/typed-leaf-ffi.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: sync UI layout
  CHECK: node --test tests/aot-host-descriptors/sync-ui-layout.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-288-spec-aot-host-descriptors]]
- [[task-289-red-green-typed-leaf-ffi]]
- [[task-290-red-green-sync-ui-layout]]

## See also

- [[location-35-host-config]]
- [[location-17-web-component-library]]
- [[location-27-render-object]]
- [[location-45-threads]]
- [[purpose-host-config]]
- [[purpose-ffi-scene-commands]]
- [[rounds-286-freeze-aot-host-descriptors]]
- [[overview-ui-framework]]
- [[architecture-layer-cake]]
- [[glossary]]
