---
id: "test-dom-only-host"
title: "DOM-only host tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: dom-only-host
tags: [test]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# DOM-only host tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They lock `dom-only-host.web:only-web-host`, `dom-only-host.wasm:no-wasm-web`, `dom-only-host.bindings:js-only`, and `dom-only-host.paint:browser-paint`. Oracle commands:

- node --test tests/no-web-canvas.test.mjs
- node --test tests/no-wasm-web.test.mjs
- node --test tests/no-host-io-dom.test.mjs

## Tests

- **tests/no-web-canvas.test.mjs**: `this checkout does not add a web canvas host`
  - **How:** fails if this checkout adds a web canvas host
  - **Why:** promises `dom-only-host.web:only-web-host` and `dom-only-host.paint:browser-paint`
- **tests/no-wasm-web.test.mjs**: `this checkout does not add CanvasKit, Skwasm, or engine-in-WASM as web UI`
  - **How:** fails if this checkout adds CanvasKit, Skwasm, or engine-in-WASM as web UI
  - **Why:** promises `dom-only-host.wasm:no-wasm-web` and `dom-only-host.paint:browser-paint`
- **tests/no-host-io-dom.test.mjs**: `this checkout does not put a DOM into Host I/O`
  - **How:** fails if this checkout puts a DOM into Host I/O
  - **Why:** promise `dom-only-host.bindings:js-only`

## Gaps

- No paint API test. Browser paint is absence of engine raster on web and folds into the canvas and WASM oracles.
- Portable `document` import oracles stay on [[test-renderer-portability]]. Copied-emit oracles stay on [[test-js-backend]].
