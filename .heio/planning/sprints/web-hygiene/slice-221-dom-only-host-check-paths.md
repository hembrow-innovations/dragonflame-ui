---
id: "slice-221-dom-only-host-check-paths"
title: "DOM-only host CHECK paths"
kind: slice
status: frozen
sprint: "web-hygiene"
blocked_by:
  - "slice-121-dom-only-web-host"
tags: []
created_at: "2026-09-10T22:01:56Z"
updated_at: "2026-09-10T22:01:56Z"
---

# DOM-only host CHECK paths

## Why

Verify can re-run the dom-only-host oracles. Archived CHECK lines still name missing flat test paths.

## Done

[[slice-121-dom-only-web-host]] oracle CHECK and EVIDENCE lines run the three commands named in `docs/specs/ui-framework/dom-only-host/test.md`. Those same commands pass.

## Blocked by

[[slice-121-dom-only-web-host]]: DOM-only host honesty already met. [[ticket-188-slice-121-stale-check-paths]] promoted.

## Non-goals

New dom-only-host behaviour. Editing `docs/specs/`. Reopening `web-tracers`. Product code. Other stale CHECK tickets.

## Oracle checklist

- [ ] O1: no web canvas host
  CHECK: node --test tests/dom-only-host/no-web-canvas.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: no WASM web UI
  CHECK: node --test tests/dom-only-host/no-wasm-web.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O3: no DOM in Host I/O
  CHECK: node --test tests/dom-only-host/no-host-io-dom.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-222-align-slice-121-check-paths]]

## See also

- [[location-28-dom-renderer]]
- [[location-29-tests]]
- [[location-17-web-component-library]]
- [[slice-121-dom-only-web-host]]
- [[ticket-188-slice-121-stale-check-paths]]
- [[rounds-220-slice-121-stale-check-paths]]
