---
id: "slice-203-portable-check-paths"
title: "Portable CHECK paths"
kind: slice
status: met
sprint: "web-hygiene"
blocked_by:
  - "slice-75-portable-web-import"
tags: []
created_at: "2026-09-10T21:31:30Z"
updated_at: "2026-09-11T21:50:00Z"
---

# Portable CHECK paths

## Why

Verify can re-run the portable import oracles. Archived CHECK lines still name missing flat test paths.

## Done

[[slice-75-portable-web-import]] oracle CHECK and EVIDENCE lines run the two commands named in `docs/specs/ui-framework/renderer-portability/test.md`. Those same commands pass.

## Blocked by

[[slice-75-portable-web-import]]: portable import demo already met. [[ticket-180-slice-75-stale-check-paths]] promoted.

## Non-goals

New renderer-portability behaviour. Editing `docs/specs/`. Reopening `web-tracers`. Product code. Other stale CHECK tickets.

## Oracle checklist

- [x] O1: portable import
  CHECK: node --test tests/renderer-portability/portable-import.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/renderer-portability/portable-import.test.mjs; 1 pass 0 fail
- [x] O2: document import hard-errors
  CHECK: node --test tests/renderer-portability/portable-wrong-target.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/renderer-portability/portable-wrong-target.test.mjs; 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-204-align-slice-75-check-paths]]

## See also

- [[location-41-renderer-portability]]
- [[location-29-tests]]
- [[location-17-web-component-library]]
- [[slice-75-portable-web-import]]
- [[ticket-180-slice-75-stale-check-paths]]
- [[rounds-202-slice-75-stale-check-paths]]
