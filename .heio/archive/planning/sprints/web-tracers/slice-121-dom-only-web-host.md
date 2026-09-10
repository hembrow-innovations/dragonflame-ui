---
id: "slice-121-dom-only-web-host"
title: "DOM-only web host"
kind: slice
status: met
sprint: "web-tracers"
blocked_by:
  - "slice-70-counter-on-dom"
tags: []
created_at: "2026-09-10T09:25:00Z"
updated_at: "2026-09-10T10:15:00Z"
---

# DOM-only web host

## Why

Honesty demo. DOM is already the web host. Nested bets still unnamed: only web host, JS-only bindings, no WASM web, paint on web.

## Done

Tests fail if this checkout adds a web canvas host, CanvasKit, Skwasm, engine-in-WASM as web UI, or a DOM in Host I/O. No public Host type. Browser paint stays absence of engine raster on web.

## Blocked by

[[slice-70-counter-on-dom]]: a DOM host exists so it can stay the only web host. [[slice-75-portable-web-import]] already covers portable `document` import hard-errors; do not repeat those oracles. [[slice-112-js-backend-honesty]] already covers no copied emit; do not repeat sibling Phase 0 WASM-target oracles.

## Non-goals

A public Host enum. A canvas switch. A paint API. Naming the browser API set. Repeating portable `document` import oracles. Copying JS emit. Show. For. Native hosts.

## Oracle checklist

- [x] O1: no web canvas host
  CHECK: node --test tests/dom-only-host/no-web-canvas.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/dom-only-host/no-web-canvas.test.mjs; 1 pass 0 fail
- [x] O2: no WASM web UI
  CHECK: node --test tests/dom-only-host/no-wasm-web.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/dom-only-host/no-wasm-web.test.mjs; 1 pass 0 fail
- [x] O3: no DOM in Host I/O
  CHECK: node --test tests/dom-only-host/no-host-io-dom.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/dom-only-host/no-host-io-dom.test.mjs; 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-122-spec-dom-only-host]]
- [[task-123-red-green-dom-only-host]]

## See also

- [[location-28-dom-renderer]]
- [[location-17-web-component-library]]
- [[location-41-renderer-portability]]
- [[slice-70-counter-on-dom]]
- [[slice-75-portable-web-import]]
- [[slice-112-js-backend-honesty]]
- [[rounds-120-dom-only-web-host]]
