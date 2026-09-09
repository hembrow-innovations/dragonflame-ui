---
id: "slice-141-web-layout-honesty"
title: "Web layout honesty"
kind: slice
status: frozen
sprint: "web-tracers"
blocked_by:
  - "slice-72-leaf-kit-on-dom"
tags: []
created_at: "2026-09-10T11:00:00Z"
updated_at: "2026-09-10T11:00:00Z"
---

# Web layout honesty

## Why

Honesty demo. Web layout is already CSS. Nested bets still unnamed: not pixel-identical, and copy the DOM backend as an idea not as Impeller.

## Done

Tests fail if this checkout forces Taffy on web, or treats the DOM backend as a pixel-identical Impeller or Skia clone. No public LayoutEngine.

## Blocked by

[[slice-72-leaf-kit-on-dom]]: CSS on web exists so it can stay CSS and not become Taffy or Impeller. [[slice-72-leaf-kit-on-dom]] already covers CSS on web through view and text; do not repeat those oracles. [[slice-121-dom-only-web-host]] already covers no web canvas and no WASM web UI; do not repeat those oracles.

## Non-goals

A public LayoutEngine. A pixel-match switch. Implementing Taffy. CSS as the native layout runtime. Repeating CSS-on-web leaf oracles. Repeating no-canvas and no-WASM oracles. Native hosts. Implementing a compiler.

## Oracle checklist

- [ ] O1: no Taffy on web
  CHECK: node --test tests/no-taffy-on-web.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: no Impeller DOM
  CHECK: node --test tests/no-impeller-dom.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-142-spec-web-layout]]
- [[task-143-red-green-web-layout]]

## See also

- [[location-31-web-layout]]
- [[location-17-web-component-library]]
- [[slice-72-leaf-kit-on-dom]]
- [[slice-121-dom-only-web-host]]
- [[rounds-140-web-layout-honesty]]
