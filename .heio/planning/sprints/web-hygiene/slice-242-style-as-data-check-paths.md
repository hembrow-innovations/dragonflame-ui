---
id: "slice-242-style-as-data-check-paths"
title: "Style as data CHECK paths"
kind: slice
status: met
sprint: "web-hygiene"
blocked_by:
  - "slice-149-style-as-data-honesty"
tags: []
created_at: "2026-09-10T22:45:25Z"
updated_at: "2026-09-10T22:50:20Z"
---

# Style as data CHECK paths

## Why

Verify can re-run the style-as-data oracles. Archived CHECK lines still name missing flat test paths.

## Done

[[slice-149-style-as-data-honesty]] oracle CHECK and EVIDENCE lines run the two commands named in `docs/specs/ui-framework/style-as-data/test.md`. Those same commands pass.

## Blocked by

[[slice-149-style-as-data-honesty]]: style as data honesty already met. [[ticket-219-slice-149-stale-check-paths]] promoted.

## Non-goals

New style-as-data behaviour. Editing `docs/specs/`. Reopening `web-tracers`. Product code. Other stale CHECK tickets.

## Oracle checklist

- [x] O1: no CSS language
  CHECK: node --test tests/style-as-data/no-css-language.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/style-as-data/no-css-language.test.mjs; 1 pass 0 fail
- [x] O2: no CSS engine
  CHECK: node --test tests/style-as-data/no-css-engine.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/style-as-data/no-css-engine.test.mjs; 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-243-align-slice-149-check-paths]]

## See also

- [[location-33-style-as-data]]
- [[location-29-tests]]
- [[location-17-web-component-library]]
- [[slice-149-style-as-data-honesty]]
- [[ticket-219-slice-149-stale-check-paths]]
- [[rounds-241-slice-149-stale-check-paths]]
