---
id: "slice-233-render-object-check-paths"
title: "Render object CHECK paths"
kind: slice
status: frozen
sprint: "web-hygiene"
blocked_by:
  - "slice-137-render-object-honesty"
tags: []
created_at: "2026-09-10T22:25:24Z"
updated_at: "2026-09-10T22:25:24Z"
---

# Render object CHECK paths

## Why

Verify can re-run the render-object oracles. Archived CHECK lines still name missing flat test paths.

## Done

[[slice-137-render-object-honesty]] oracle CHECK and EVIDENCE lines run the two commands named in `docs/specs/ui-framework/render-object/test.md`. Those same commands pass.

## Blocked by

[[slice-137-render-object-honesty]]: render object honesty already met. [[ticket-201-slice-137-stale-check-paths]] promoted.

## Non-goals

New render-object behaviour. Editing `docs/specs/`. Reopening `web-tracers`. Product code. Other stale CHECK tickets.

## Oracle checklist

- [ ] O1: no Widget as retained node
  CHECK: node --test tests/render-object/no-widget-retain.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: no collapsed Component and Render object naming
  CHECK: node --test tests/render-object/no-collapsed-render-names.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-234-align-slice-137-check-paths]]

## See also

- [[location-27-render-object]]
- [[location-29-tests]]
- [[location-17-web-component-library]]
- [[slice-137-render-object-honesty]]
- [[ticket-201-slice-137-stale-check-paths]]
- [[rounds-232-slice-137-stale-check-paths]]
