---
id: "slice-236-web-layout-check-paths"
title: "Web layout CHECK paths"
kind: slice
status: frozen
sprint: "web-hygiene"
blocked_by:
  - "slice-141-web-layout-honesty"
tags: []
created_at: "2026-09-10T22:31:36Z"
updated_at: "2026-09-10T22:31:36Z"
---

# Web layout CHECK paths

## Why

Verify can re-run the web-layout oracles. Archived CHECK lines still name missing flat test paths.

## Done

[[slice-141-web-layout-honesty]] oracle CHECK and EVIDENCE lines run the two commands named in `docs/specs/ui-framework/web-layout/test.md`. Those same commands pass.

## Blocked by

[[slice-141-web-layout-honesty]]: web layout honesty already met. [[ticket-205-slice-141-stale-check-paths]] promoted.

## Non-goals

New web-layout behaviour. Editing `docs/specs/`. Reopening `web-tracers`. Product code. Other stale CHECK tickets.

## Oracle checklist

- [ ] O1: no Taffy on web
  CHECK: node --test tests/web-layout/no-taffy-on-web.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: no Impeller DOM
  CHECK: node --test tests/web-layout/no-impeller-dom.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-237-align-slice-141-check-paths]]

## See also

- [[location-31-web-layout]]
- [[location-29-tests]]
- [[location-17-web-component-library]]
- [[slice-141-web-layout-honesty]]
- [[ticket-205-slice-141-stale-check-paths]]
- [[rounds-235-slice-141-stale-check-paths]]
