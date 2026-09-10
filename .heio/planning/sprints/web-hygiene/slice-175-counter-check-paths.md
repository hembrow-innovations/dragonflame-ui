---
id: "slice-175-counter-check-paths"
title: "Counter CHECK paths"
kind: slice
status: met
sprint: "web-hygiene"
blocked_by:
  - "slice-70-counter-on-dom"
tags: []
created_at: "2026-09-10T20:14:00Z"
updated_at: "2026-09-11T12:15:00Z"
---

# Counter CHECK paths

## Why

Verify can re-run the counter oracles. Archived CHECK lines still name missing flat test paths.

## Done

[[slice-70-counter-on-dom]] oracle CHECK and EVIDENCE lines run the three commands named in `docs/specs/ui-framework/counter/test.md`. Those same commands pass.

## Blocked by

[[slice-70-counter-on-dom]]: counter demo already met. [[ticket-173-slice-70-stale-check-paths]] promoted.

## Non-goals

New counter behaviour. Editing `docs/specs/`. Reopening `web-tracers`. Product code.

## Oracle checklist

- [x] O1: static hyperscript text on DOM
  CHECK: node --test tests/counter/counter-static-h.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/counter/counter-static-h.test.mjs; 1 pass 0 fail
- [x] O2: signal write patches the same DOM text
  CHECK: node --test tests/counter/counter-signal-patch.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/counter/counter-signal-patch.test.mjs; 1 pass 0 fail
- [x] O3: component function did not re-run on the write
  CHECK: node --test tests/counter/counter-run-once.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/counter/counter-run-once.test.mjs; 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-176-align-slice-70-check-paths]]

## See also

- [[location-29-tests]]
- [[location-17-web-component-library]]
- [[slice-70-counter-on-dom]]
- [[ticket-173-slice-70-stale-check-paths]]
- [[rounds-174-slice-70-stale-check-paths]]
