---
id: "test-aot-host-descriptors"
title: "AOT host descriptors tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: aot-host-descriptors
tags: [test]
created_at: "2026-09-12"
updated_at: "2026-09-12"
---

# AOT host descriptors tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They lock `aot-host-descriptors.leaf:typed-aot-ffi` and `aot-host-descriptors.layout:sync-runtime-queue`. Oracle commands:

- node --test tests/aot-host-descriptors/typed-leaf-ffi.test.mjs
- node --test tests/aot-host-descriptors/sync-ui-layout.test.mjs

## Tests

- **tests/aot-host-descriptors/typed-leaf-ffi.test.mjs**: `native leaves become compile-time typed FFI structs behind the leaf adapter`
  - **How:** fails unless native leaves become compile-time typed FFI structs behind the leaf adapter, not JS host objects or string tags. Callers still use `h` and one packed submit. They do not import HostConfig
  - **Why:** promise `aot-host-descriptors.leaf:typed-aot-ffi`
- **tests/aot-host-descriptors/sync-ui-layout.test.mjs**: `layout and measure run synchronously on the Runtime job queue`
  - **How:** fails unless layout and measure run on the Runtime job queue in the same in-process job that records the draw list. There is no JS shadow thread. There is no async Bridge for layout or measure. Callers do not call measure()
  - **Why:** promise `aot-host-descriptors.layout:sync-runtime-queue`

## Gaps

- No test yet for `aot-host-descriptors.api:forbid-public-fabric`.
- No-JSI and no-Hermes oracles stay on [[test-host-config]].
- Taffy-rect and GPU-not-UI oracles stay on [[test-ffi-scene-commands]].
- Run-once oracles stay on [[test-counter]].
- No-Widget retained-node oracles stay on [[test-render-object]].
- StyleSheet objects feeding Taffy stay unnamed this tracer.
