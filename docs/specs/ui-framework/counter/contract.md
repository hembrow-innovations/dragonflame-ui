---
id: "contract-counter"
title: "Counter contract"
kind: contract
description: "Durable, plain-language promises for the counter on DOM demo. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: counter
tags: [contract]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Counter contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `counter.component:run-once`: The component function runs once, creates signals, and later writes flow through the graph.
  test: component function did not re-run on the write
- `counter.signals:ui-signal`: Get subscribes and set notifies, written as ui.Signal in prose. A write patches the same DOM text. Components write properties onto the retained render object rather than recreating it each frame.
  test: signal write patches the same DOM text
- `counter.hyperscript:static-h`: First authoring is `h(type, props)` calls. Emitted JavaScript creates elements and puts static hyperscript text on the DOM.
  test: static hyperscript text on DOM
- `counter.component:forbid-vdom`: There are no class components for UI, no hooks, no Fiber, and no virtual DOM.
- `counter.authoring:forbid-jsx`: JSX is not treated as a present Draconic language feature.
- `counter.dom:only-web-host`: Web DOM is the only web host. Never a web canvas host.
- `counter.host:forbid-wasm`: Web is ordinary JavaScript in the browser, with no WebAssembly, CanvasKit, Skwasm, or engine-in-WASM.
- `counter.embedder:browser-raf`: The browser is the embedder and vsync is requestAnimationFrame.
- `counter.js-backend:unnamed-apis`: The first-version package runs on the JS backend plus browser APIs. The source does not name the API set.
