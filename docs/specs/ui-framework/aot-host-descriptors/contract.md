---
id: "contract-aot-host-descriptors"
title: "AOT host descriptors contract"
kind: contract
description: "Durable, plain-language promises for AOT host descriptors. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: aot-host-descriptors
tags: [contract]
created_at: "2026-09-12"
updated_at: "2026-09-12"
---

# AOT host descriptors contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

Keep `host-config.steal:forbid-jsi` and `host-config.steal:forbid-hermes` on [[contract-host-config]]. Do not repeat them here.

## Behaviour

- `aot-host-descriptors.leaf:typed-aot-ffi`: Native leaf host descriptors are compile-time typed FFI structs behind the leaf adapter. They are not JS host objects and not string tags.
  test: native leaves become compile-time typed FFI structs behind the leaf adapter
- `aot-host-descriptors.layout:sync-runtime-queue`: Layout and measure run synchronously on the Runtime job queue. There is no JS shadow thread. There is no async Bridge for layout or measure.
  test: layout and measure run synchronously on the Runtime job queue
- `aot-host-descriptors.api:forbid-public-fabric`: There is no public HostConfig, no public ShadowTree, and no public measure. Retained render objects plus immutable component config are the shadow tree.
