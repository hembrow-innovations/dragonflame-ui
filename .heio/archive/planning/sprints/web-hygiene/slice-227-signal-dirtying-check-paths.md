---
id: "slice-227-signal-dirtying-check-paths"
title: "Signal dirtying CHECK paths"
kind: slice
status: met
sprint: "web-hygiene"
blocked_by:
  - "slice-129-signal-dirtying-honesty"
tags: []
created_at: "2026-09-10T22:13:26Z"
updated_at: "2026-09-10T22:18:59Z"
---

# Signal dirtying CHECK paths

## Why

Verify can re-run the signal-dirtying oracles. Archived CHECK lines still name missing flat test paths.

## Done

[[slice-129-signal-dirtying-honesty]] oracle CHECK and EVIDENCE lines run the three commands named in `docs/specs/ui-framework/signal-dirtying/test.md`. Those same commands pass.

## Blocked by

[[slice-129-signal-dirtying-honesty]]: signal dirtying honesty already met. [[ticket-196-slice-129-stale-check-paths]] promoted.

## Non-goals

New signal-dirtying behaviour. Editing `docs/specs/`. Reopening `web-tracers`. Product code. Other stale CHECK tickets.

## Oracle checklist

- [x] O1: no setState dirty model
  CHECK: node --test tests/signal-dirtying/no-setstate-dirty.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/signal-dirtying/no-setstate-dirty.test.mjs; 1 pass 0 fail
- [x] O2: signals do not replace the pipeline
  CHECK: node --test tests/signal-dirtying/no-signal-pipeline.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/signal-dirtying/no-signal-pipeline.test.mjs; 1 pass 0 fail
- [x] O3: no shared signal objects
  CHECK: node --test tests/signal-dirtying/no-shared-signals.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/signal-dirtying/no-shared-signals.test.mjs; 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-228-align-slice-129-check-paths]]

## See also

- [[location-24-signals]]
- [[location-29-tests]]
- [[location-17-web-component-library]]
- [[slice-129-signal-dirtying-honesty]]
- [[ticket-196-slice-129-stale-check-paths]]
- [[rounds-226-slice-129-stale-check-paths]]
