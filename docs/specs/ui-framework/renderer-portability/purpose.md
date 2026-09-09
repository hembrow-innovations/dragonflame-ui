---
id: "purpose-renderer-portability"
title: "Renderer portability purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for the portable web import surface."
status: active
domain: ui-framework
area: renderer-portability
tags: [purpose]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Renderer portability purpose

## Job

A portable Program imports a thin Draconic surface, not Metal or `document`, and wrong-target use hard-errors.

## In scope

Child destination sentences from [[location-41-renderer-portability]], web path only:

- **Thin surface**: the API is a thin Draconic surface between portable UI code and a host.
- **Web path**: the web path uses JS-only DOM bindings.
- **Wrong-target hard-error**: wrong-target use hard-errors.
- **Portable Program**: a portable Program cannot import Metal or `document` directly.

This area's oracles prove a portable Program compiles against the portability API and that importing `document` from portable code hard-errors. They do not prove native `extern "C"`.

## Out of scope

- Native `extern "C"` path and unboxed numbers and structs. That waits on funding. See [[location-40-ffi-scene-commands]].
- Host I/O as a browser.
- Putting a DOM into Host I/O.
- Platform channels or JSI as the surface.
- Wrong-target use as a runtime no-op.
- Portable code talking to the OS.
- Second IR.
- Implementing the compiler in this repo.

## Surfaces

The portable Program on the web host, compiling against the portability API.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[location-41-renderer-portability]], [[location-28-dom-renderer]], [[location-35-host-config]], and [[architecture-layer-cake]].

## Open product questions

- (none)
