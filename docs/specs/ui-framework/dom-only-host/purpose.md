---
id: "purpose-dom-only-host"
title: "DOM-only host purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for DOM-only web host honesty. Only web host, JS-only bindings, no WASM web, paint on web."
status: active
domain: ui-framework
area: dom-only-host
tags: [purpose]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# DOM-only host purpose

## Job

DOM is already the web host. Nested honesty is only web host, JS-only bindings, no WASM web, and paint on web.

Planning sitting [[rounds-120-dom-only-web-host]], wayfinder [[rounds-01-chart-framework]], and [[intent]]:

- **Honesty nested bets**: only web host, JS-only bindings, no WASM web, paint on web. Create-and-patch and browser as embedder are already named.
- **Answer 5**: DOM only. Never a web canvas host.
- **Intent we will not**: not WebAssembly as the web UI plan; not CanvasKit, Skwasm, or engine-in-WASM as the browser backend.

## In scope

Child destination sentences from [[location-28-dom-renderer]]:

- **Only web host**: Web DOM is the only web host.
- **JS-only bindings**: the web path talks to the DOM through JS-only bindings.
- **No WASM web**: web is ordinary JavaScript in the browser, with no WebAssembly, CanvasKit, Skwasm, or engine-in-WASM.
- **Paint on web**: web raster is browser paint.

This area's oracles prove no web canvas host, no CanvasKit, Skwasm, or engine-in-WASM as this package's web UI, and no DOM in Host I/O. Browser paint is absence of engine raster on web. They do not prove create-and-patch or browser-as-embedder. [[purpose-counter]] already asserts `counter.dom:only-web-host` and `counter.host:forbid-wasm` without tests; this folder owns the lock.

## Out of scope

- Naming the browser API set. [[ticket-65-first-tests-unnamed]] stays parked. [[location-30-js-backend]]: the source does not name the API set.
- A public Host type or canvas switch.
- A paint API.
- Repeating portable `document` import oracles. Those live on [[purpose-renderer-portability]].
- Repeating copied-emit oracles. Those live on [[purpose-js-backend]].
- Sibling toolchain WASM web-target oracles. Phase 0 stays in the sibling. This folder locks this package's web host.
- Create-and-patch. Named by [[purpose-counter]] and [[purpose-dom-patch]].
- Browser as embedder and vsync as `requestAnimationFrame`. Named by [[purpose-counter]] and [[purpose-animation-clocks]].
- Show. For. Native hosts.
- Implementing the compiler in this repo.

## Surfaces

The first-version dragonflame-ui package on the web DOM host. Callers keep `h`, `render`, the closed leaf kit, and ui.Signal. They do not import a host enum. They do not pass a canvas.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-120-dom-only-web-host]], [[intent]], [[location-28-dom-renderer]], [[rounds-01-chart-framework]], and [[architecture-layer-cake]].

## Open product questions

- (none)
