---
id: "purpose-counter"
title: "Counter purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for the counter on DOM demo."
status: active
domain: ui-framework
area: counter
tags: [purpose]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Counter purpose

## Job

A function component runs once, creates a ui.Signal, returns `h(type, props)`, and a signal write patches DOM text.

Wayfinder [[rounds-01-chart-framework]] answers on authoring and web renderer:

- **Answer 4**: hyperscript first. No JSX until a later human decision.
- **Answer 5**: DOM only. Never a web canvas host.

## In scope

Child destination sentences from [[location-23-components]], [[location-24-signals]], [[location-26-hyperscript]], [[location-27-render-object]], [[location-28-dom-renderer]], and [[location-30-js-backend]]:

- **Runs once**: the component function runs once, creates signals, and later writes flow through the graph.
- **Not class components**: there are no class components for UI, no hooks, no Fiber, and no virtual DOM.
- **get and set**: get subscribes and set notifies.
- **ui.Signal in prose**: prose prefers ui.Signal and host SIGINT and SIGTERM are not this.
- **h calls**: first authoring is `h(type, props)` calls.
- **No JSX today**: JSX is not treated as a present Draconic language feature.
- **Retained node**: the render object persists for layout, paint, and hit-test.
- **Write properties**: components write properties onto the render object rather than recreating it each frame.
- **Create and patch**: emitted JavaScript creates elements and patches text, attributes, and children.
- **Only web host**: Web DOM is the only web host.
- **Browser is embedder**: the browser is the embedder and vsync is `requestAnimationFrame`.
- **JS-only bindings**: the web path talks to the DOM through JS-only bindings.
- **No WASM web**: web is ordinary JavaScript in the browser, with no WebAssembly, CanvasKit, Skwasm, or engine-in-WASM.
- **JS backend**: web compile is Frontend to shared IR to the JS backend, and the browser runs that JavaScript.
- **Browser APIs**: that package uses browser APIs. The source does not name the API set.

This demo's oracles prove run-once, static hyperscript text, and a signal write that patches that text. They do not prove attribute patch, child patch, or layout, paint, or hit-test algorithms.

## Out of scope

- Full leaf kit. No click leaf yet.
- Layout, paint, and hit-test algorithms. This demo retains the render object and patches text.
- Owner dispose. [[location-25-owner]] is not this demo.
- JSX. Answer 4: hyperscript first. No JSX until a later human decision.
- Web canvas. Answer 5: DOM only. Never a web canvas host.
- WASM, CanvasKit, Skwasm, or engine-in-WASM.
- Naming a browser API set. [[location-30-js-backend]]: the source does not name the API set.
- Adding JSX to the draconic parser from this repo.
- Implementing the compiler in this repo. JS emit is already true in the sibling toolchain.
- Show and keyed For. Structural change is not this demo.
- Shared signal objects across compute workers.

## Surfaces

The counter demo on the web DOM host.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-01-chart-framework]], [[location-23-components]], [[location-24-signals]], [[location-26-hyperscript]], [[location-27-render-object]], [[location-28-dom-renderer]], and [[location-30-js-backend]].

## Open product questions

- (none)
