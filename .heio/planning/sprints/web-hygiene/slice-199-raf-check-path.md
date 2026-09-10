---
id: "slice-199-raf-check-path"
title: "rAF CHECK path"
kind: slice
status: frozen
sprint: "web-hygiene"
blocked_by:
  - "slice-74-raf-clock"
tags: []
created_at: "2026-09-10T21:26:57Z"
updated_at: "2026-09-10T21:26:57Z"
---

# rAF CHECK path

## Why

Verify can re-run the rAF clock oracles. Archived CHECK still names a missing flat test path.

## Done

[[slice-74-raf-clock]] oracle CHECK and EVIDENCE lines run the command named in `docs/specs/ui-framework/animation-clocks/test.md`. That same command passes.

## Blocked by

[[slice-74-raf-clock]]: rAF clock demo already met. [[ticket-179-slice-74-stale-check-path]] promoted.

## Non-goals

New animation-clock behaviour. Editing `docs/specs/`. Reopening `web-tracers`. Product code. Other stale CHECK tickets.

## Oracle checklist

- [ ] O1: rAF clock ticks
  CHECK: node --test tests/animation-clocks/raf-clock.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-200-align-slice-74-check-path]]

## See also

- [[location-60-animation-clocks]]
- [[location-29-tests]]
- [[location-17-web-component-library]]
- [[slice-74-raf-clock]]
- [[ticket-179-slice-74-stale-check-path]]
- [[rounds-198-slice-74-stale-check-path]]
