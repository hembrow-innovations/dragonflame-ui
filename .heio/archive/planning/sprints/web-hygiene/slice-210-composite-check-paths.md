---
id: "slice-210-composite-check-paths"
title: "Composite CHECK paths"
kind: slice
status: met
sprint: "web-hygiene"
blocked_by:
  - "slice-107-composite-on-dom"
tags: []
created_at: "2026-09-10T21:42:07Z"
updated_at: "2026-09-11T23:20:00Z"
---

# Composite CHECK paths

## Why

Verify can re-run the composite oracles. Archived CHECK lines still name missing flat test paths.

## Done

[[slice-107-composite-on-dom]] oracle CHECK and EVIDENCE lines run the three commands named in `docs/specs/ui-framework/composite/test.md`. Those same commands pass.

## Blocked by

[[slice-107-composite-on-dom]]: composite demo already met. [[ticket-182-slice-107-stale-check-paths]] promoted.

## Non-goals

New composite behaviour. Editing `docs/specs/`. Reopening `web-tracers`. Product code. Other stale CHECK tickets.

## Oracle checklist

- [x] O1: function type mounts to host leaves
  CHECK: node --test tests/composite/composite-h.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/composite/composite-h.test.mjs; 1 pass 0 fail
- [x] O2: props.children nest through the composite onto DOM
  CHECK: node --test tests/composite/composite-children.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/composite/composite-children.test.mjs; 1 pass 0 fail
- [x] O3: composite function did not re-run on a text patch
  CHECK: node --test tests/composite/composite-run-once.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/composite/composite-run-once.test.mjs; 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-211-align-slice-107-check-paths]]

## See also

- [[location-23-components]]
- [[location-29-tests]]
- [[location-17-web-component-library]]
- [[slice-107-composite-on-dom]]
- [[ticket-182-slice-107-stale-check-paths]]
- [[rounds-209-slice-107-stale-check-paths]]
