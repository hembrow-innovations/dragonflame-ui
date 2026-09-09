---
id: "task-122-spec-dom-only-host"
title: "Spec DOM-only web host"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "web-tracers"
slice: "slice-121-dom-only-web-host"
tags: []
created_at: "2026-09-10T09:25:00Z"
updated_at: "2026-09-09T23:31:19Z"
---

# Spec DOM-only web host

## Blocked by

None.

## Done

DOM-only web host spec quotes location-28 nested bets: only web host, JS-only bindings, no WASM web, paint on web.

## Context

Write purpose, contract, and test.md from [[location-28-dom-renderer]], intent, [[architecture-layer-cake]], and [[rounds-120-dom-only-web-host]]. Quote child destination sentences: only web host, JS-only bindings, no WASM web, paint on web.

Do not name the browser API set. [[ticket-65-first-tests-unnamed]] stays parked. Do not invent a public Host type or a paint API. Do not repeat [[slice-75-portable-web-import]] `document` import oracles. Do not repeat [[slice-112-js-backend-honesty]] copied-emit oracles. Counter contract already asserts `counter.dom:only-web-host` and `counter.host:forbid-wasm` without tests; this folder owns the lock. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files exist and name the three oracle tests.

scope: docs/specs/ui-framework/dom-only-host/

## Links

- [[slice-121-dom-only-web-host]]
- [[rounds-120-dom-only-web-host]]
- [[ticket-65-first-tests-unnamed]]
