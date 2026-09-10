---
id: "slice-185-unmount-check-path"
title: "Unmount CHECK path"
kind: slice
status: frozen
sprint: "web-hygiene"
blocked_by:
  - "slice-71-unmount-disposes"
tags: []
created_at: "2026-09-10T21:07:00Z"
updated_at: "2026-09-10T21:07:00Z"
---

# Unmount CHECK path

## Why

Verify can re-run the unmount oracles. Archived CHECK still names a missing flat test path.

## Done

[[slice-71-unmount-disposes]] oracle CHECK and EVIDENCE lines run the command named in `docs/specs/ui-framework/owner/test.md`. That same command passes.

## Blocked by

[[slice-71-unmount-disposes]]: unmount demo already met. [[ticket-175-slice-71-stale-check-path]] promoted.

## Non-goals

New owner behaviour. Editing `docs/specs/`. Reopening `web-tracers`. Product code. Other stale CHECK tickets.

## Oracle checklist

- [ ] O1: unmount disposes
  CHECK: node --test tests/owner/owner-dispose.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-186-align-slice-71-check-path]]

## See also

- [[location-25-owner]]
- [[location-29-tests]]
- [[location-17-web-component-library]]
- [[slice-71-unmount-disposes]]
- [[ticket-175-slice-71-stale-check-path]]
- [[rounds-184-slice-71-stale-check-path]]
