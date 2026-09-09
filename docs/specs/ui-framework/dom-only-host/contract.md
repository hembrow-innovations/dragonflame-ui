---
id: "contract-dom-only-host"
title: "DOM-only host contract"
kind: contract
description: "Durable, plain-language promises for DOM-only web host honesty. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: dom-only-host
tags: [contract]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# DOM-only host contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `dom-only-host.web:only-web-host`: Web DOM is the only web host. Never a web canvas host.
  test: this checkout does not add a web canvas host
- `dom-only-host.wasm:no-wasm-web`: Web is ordinary JavaScript in the browser, with no WebAssembly, CanvasKit, Skwasm, or engine-in-WASM.
  test: this checkout does not add CanvasKit, Skwasm, or engine-in-WASM as web UI
- `dom-only-host.bindings:js-only`: The web path talks to the DOM through JS-only bindings. A DOM is not put into Host I/O.
  test: this checkout does not put a DOM into Host I/O
- `dom-only-host.paint:browser-paint`: Web raster is browser paint. There is no engine raster on the web path.
  test: this checkout does not add a web canvas host
  test: this checkout does not add CanvasKit, Skwasm, or engine-in-WASM as web UI
