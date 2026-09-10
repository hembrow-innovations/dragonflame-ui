---
id: "slice-249-portability-metal-check-path"
title: "Portability metal CHECK path"
kind: slice
status: frozen
sprint: "web-hygiene"
blocked_by:
  - "slice-157-portability-metal-honesty"
tags: []
created_at: "2026-09-10T22:58:36Z"
updated_at: "2026-09-10T22:58:36Z"
---

# Portability metal CHECK path

## Why

Verify can re-run the portability-metal oracles. Archived CHECK still names a missing flat test path.

## Done

[[slice-157-portability-metal-honesty]] oracle CHECK and EVIDENCE lines run the command named in `docs/specs/ui-framework/portability-metal/test.md`. That same command passes.

## Blocked by

[[slice-157-portability-metal-honesty]]: portability metal honesty already met. [[ticket-245-slice-157-stale-check-path]] promoted.

## Non-goals

New portability-metal behaviour. Editing `docs/specs/`. Reopening `web-tracers`. Product code. Other stale CHECK tickets.

## Oracle checklist

- [ ] O1: no Metal import
  CHECK: node --test tests/portability-metal/portable-metal.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-250-align-slice-157-check-path]]

## See also

- [[location-41-renderer-portability]]
- [[location-29-tests]]
- [[location-17-web-component-library]]
- [[slice-157-portability-metal-honesty]]
- [[ticket-245-slice-157-stale-check-path]]
- [[rounds-248-slice-157-stale-check-path]]
