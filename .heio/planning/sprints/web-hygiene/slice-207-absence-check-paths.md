---
id: "slice-207-absence-check-paths"
title: "Absence CHECK paths"
kind: slice
status: met
sprint: "web-hygiene"
blocked_by:
  - "slice-85-first-version-without-sugar"
tags: []
created_at: "2026-09-10T21:37:12Z"
updated_at: "2026-09-11T22:10:00Z"
---

# Absence CHECK paths

## Why

Verify can re-run the absence oracles. Archived CHECK lines still name missing flat test paths.

## Done

[[slice-85-first-version-without-sugar]] oracle CHECK and EVIDENCE lines run the three commands named in `docs/specs/ui-framework/absence/test.md`. Those same commands pass.

## Blocked by

[[slice-85-first-version-without-sugar]]: absence demo already met. [[ticket-181-slice-85-stale-check-paths]] promoted.

## Non-goals

New absence behaviour. Editing `docs/specs/`. Reopening `sugar-later`. Product code. Other stale CHECK tickets.

## Oracle checklist

- [x] O1: no JSX from this repo
  CHECK: node --test tests/absence/no-jsx-here.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/absence/no-jsx-here.test.mjs; 1 pass 0 fail
- [x] O2: no faked lowerer
  CHECK: node --test tests/absence/no-lowerer-here.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/absence/no-lowerer-here.test.mjs; 1 pass 0 fail
- [x] O3: hot reload not required to import
  CHECK: node --test tests/git-package/git-package.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/git-package/git-package.test.mjs; 3 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-208-align-slice-85-check-paths]]

## See also

- [[location-20-authoring-sugar]]
- [[location-29-tests]]
- [[location-17-web-component-library]]
- [[slice-85-first-version-without-sugar]]
- [[ticket-181-slice-85-stale-check-paths]]
- [[rounds-206-slice-85-stale-check-paths]]
