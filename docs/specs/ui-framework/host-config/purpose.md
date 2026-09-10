---
id: "purpose-host-config"
title: "Host config purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for host config honesty. Do not steal JSI, and do not steal Hermes."
status: active
domain: ui-framework
area: host-config
tags: [purpose]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Host config purpose

## Job

Host config already lives at the leaf adapter. Nested honesty is do not steal JSI, and do not steal Hermes.

Planning sitting [[rounds-152-host-config-honesty]] and [[intent]]:

- **Honesty nested bets**: do not steal JSI, and do not steal Hermes. The leaf adapter is already named.
- **Intent we will not**: not Hermes, V8, or JSC as the app runtime.
- **Architecture**: shared code is composite components. Host leaves are a closed set. The renderer portability API is the thin surface. Do not steal JSI. Do not steal Hermes.

## In scope

Child destination sentences from [[location-35-host-config]]:

- **Leaf adapter**: only the leaf adapter knows DOM versus UIView versus engine draw lists.
- **Do not steal JSI**: New Architecture lessons must not steal JSI.
- **Do not steal Hermes**: New Architecture lessons must not steal Hermes.

This area's oracles prove this checkout does not steal JSI as host config, and does not steal Hermes as host config. They do not prove the leaf adapter. [[purpose-leaf-kit]] already asserts `leaf-kit.host:config-at-leaves`. [[purpose-leaf-kit]] asserts `leaf-kit.host:forbid-jsi-hermes` without tests; this folder owns the lock.

## Out of scope

- A public jsi.
- A public hermesRuntime.
- A public HostConfig.
- Repeating leaf-kit oracles. Those live on [[purpose-leaf-kit]].
- Repeating portable `document` import oracles. Those live on [[purpose-renderer-portability]].
- Repeating no-eval or compile-time-split oracles. Those live on [[purpose-js-backend]].
- Repeating no-public-Host oracles. Those live on [[purpose-dom-only-host]].
- Immutable shadow tree.
- Synchronous layout and measure APIs.
- AOT FFI host descriptors.
- Native UIView versus engine draw lists.
- Native hosts.
- Implementing the compiler in this repo.

## Surfaces

The first-version dragonflame-ui package on the web DOM host. Callers keep `h`, `render`, and the closed leaf kit. They do not import `jsi`. They do not import `hermesRuntime`. They do not construct a `HostConfig`.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-152-host-config-honesty]], [[intent]], [[location-35-host-config]], [[architecture-layer-cake]], and [[overview-ui-framework]].

## Open product questions

- (none)
