---
id: "purpose-renderer-portability"
title: "Renderer portability purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for the portable import surface. Native path uses extern C and unboxed numbers and structs. Web path uses JS-only DOM bindings."
status: active
domain: ui-framework
area: renderer-portability
tags: [purpose]
created_at: "2026-09-10"
updated_at: "2026-09-12"
---

# Renderer portability purpose

## Job

A portable Program imports a thin Draconic surface, not Metal or `document`, and wrong-target use hard-errors.

## In scope

Child destination sentences from [[location-41-renderer-portability]]:

- **Thin surface**: the API is a thin Draconic surface between portable UI code and a host.
- **Native path**: the native path uses `extern "C"` and unboxed numbers and structs.
- **Web path**: the web path uses JS-only DOM bindings.
- **Wrong-target hard-error**: wrong-target use hard-errors.
- **Portable Program**: a portable Program cannot import Metal or `document` directly.

This area's oracles prove a portable Program compiles against the portability API, that importing `document` from portable code hard-errors, that the native path uses `extern "C"` and unboxed numbers and structs, and that the web path uses JS-only DOM bindings. They do not prove one packed-scene submit. Those live on [[purpose-ffi-scene-commands]].

## Out of scope

- A public `extern "C"` export on `dragonflame-ui/portable`.
- A public `document` export on `dragonflame-ui/portable`.
- Packed-scene field names.
- Restaging `renderer-portability.surface:thin`. Those live on this folder's thin-surface oracle.
- Restaging `renderer-portability.native:extern-c-unboxed`. Those live on this folder's native-path oracle.
- Restaging `dom-only-host.bindings:js-only`. Those live on [[purpose-dom-only-host]].
- Restaging `ffi-scene-commands.submit:one-packed-scene`. Those live on [[purpose-ffi-scene-commands]].
- Host I/O as a browser.
- Putting a DOM into Host I/O.
- Platform channels or JSI as the surface.
- Wrong-target use as a runtime no-op.
- Portable code talking to the OS.
- Second IR.
- Implementing the compiler in this repo.
- Rewriting [[location-41-renderer-portability]].

## Surfaces

The portable Program compiling against the portability API. Callers keep `h` and `text` from `dragonflame-ui/portable`. Native host mapping stays behind that specifier. Web host mapping stays behind that specifier.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[location-41-renderer-portability]], [[location-40-ffi-scene-commands]], [[location-28-dom-renderer]], [[location-35-host-config]], [[intent]], [[glossary]], and [[architecture-layer-cake]].

## Open product questions

- (none)
