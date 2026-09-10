---
id: "purpose-portability-metal"
title: "Portability metal purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for portability metal honesty. A portable Program cannot import Metal."
status: active
domain: ui-framework
area: portability-metal
tags: [purpose]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Portability metal purpose

## Job

Portable UI already imports a thin surface and hard-errors `document`. Nested honesty is a portable Program cannot import Metal.

Planning sitting [[rounds-156-portability-metal-honesty]] and [[intent]]:

- **Honesty nested bets**: a portable Program cannot import Metal. The thin surface and `document` hard-error are already named.
- **Architecture**: a portable Program cannot import Metal or `document` directly. It imports the renderer portability API.
- **Public Metal**: none. Callers keep the thin surface.

## In scope

Child destination sentences from [[location-41-renderer-portability]]:

- **Portable Program**: a portable Program cannot import Metal or `document` directly.

This area locks Metal only. This area's oracles prove this checkout does not let a portable Program import Metal. They do not prove `document` import. [[purpose-renderer-portability]] already locks `renderer-portability.wrong-target:hard-error` for `document`.

## Out of scope

- A public Metal.
- A public GPU handle.
- Repeating portable `document` import oracles. Those live on [[purpose-renderer-portability]].
- Repeating thin-surface oracles. Those live on [[purpose-renderer-portability]].
- Repeating Host I/O oracles. Those live on [[purpose-dom-only-host]].
- Repeating JSI oracles. Those live on [[purpose-host-config]].
- Native `extern "C"` path and unboxed numbers and structs.
- Vulkan oracles.
- fs or process oracles.
- Native hosts.
- Implementing the compiler in this repo.

## Surfaces

The first-version dragonflame-ui package on the web DOM host. Callers keep the thin portable import. They do not import Metal. They do not construct a GPU handle.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-156-portability-metal-honesty]], [[intent]], [[location-41-renderer-portability]], [[architecture-layer-cake]], and [[overview-ui-framework]].

## Open product questions

- (none)
