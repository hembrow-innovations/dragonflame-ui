---
id: "slice-213-js-backend-check-paths"
title: "JS backend CHECK paths"
kind: slice
status: met
sprint: "web-hygiene"
blocked_by:
  - "slice-112-js-backend-honesty"
tags: []
created_at: "2026-09-10T21:48:35Z"
updated_at: "2026-09-10T21:56:00Z"
---

# JS backend CHECK paths

## Why

Verify can re-run the js-backend oracles. Archived CHECK lines still name missing flat test paths.

## Done

[[slice-112-js-backend-honesty]] oracle CHECK and EVIDENCE lines run the three commands named in `docs/specs/ui-framework/js-backend/test.md`. Those same commands pass.

## Blocked by

[[slice-112-js-backend-honesty]]: honesty demo already met. [[ticket-183-slice-112-stale-check-paths]] promoted.

## Non-goals

New js-backend behaviour. Editing `docs/specs/`. Reopening `web-tracers`. Product code. Other stale CHECK tickets.

## Oracle checklist

- [x] O1: no eval host
  CHECK: node --test tests/js-backend/no-eval-here.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/js-backend/no-eval-here.test.mjs; 1 pass 0 fail
- [x] O2: no dead native stubs
  CHECK: node --test tests/js-backend/no-native-stubs.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/js-backend/no-native-stubs.test.mjs; 1 pass 0 fail
- [x] O3: emit stays in the sibling toolchain
  CHECK: node --test tests/js-backend/no-emit-here.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/js-backend/no-emit-here.test.mjs; 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-214-align-slice-112-check-paths]]

## See also

- [[location-30-js-backend]]
- [[location-29-tests]]
- [[location-17-web-component-library]]
- [[slice-112-js-backend-honesty]]
- [[ticket-183-slice-112-stale-check-paths]]
- [[rounds-212-slice-112-stale-check-paths]]
