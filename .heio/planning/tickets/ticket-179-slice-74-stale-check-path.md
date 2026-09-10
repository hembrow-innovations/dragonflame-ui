---
id: "ticket-179-slice-74-stale-check-path"
title: "Slice 74 oracle CHECK path is stale"
kind: ticket
status: open
ticket_type: observation
tags: [afk-verify]
created_at: "2026-09-10T20:43:18Z"
updated_at: "2026-09-10T20:43:18Z"
---

# Slice 74 oracle CHECK path is stale

## Signal

[[slice-74-raf-clock]] oracle CHECK still names `tests/raf-clock.test.mjs`. That path is missing. The same basename passes under `tests/animation-clocks/`.

## Fit

this project, later slice

## Notes

- Slice CHECK line: `.heio/archive/planning/sprints/web-tracers/slice-74-raf-clock.md:35`
- `node --test tests/raf-clock.test.mjs` exit 1, Could not find
- `node --test tests/animation-clocks/raf-clock.test.mjs` 2 pass 0 fail
- Spec already names the `tests/animation-clocks/` path: `docs/specs/ui-framework/animation-clocks/test.md:22`
- Throwaway example output: `{"scheduled":1,"ticks":1,"time":16,"signalGet":1,"framesAfterSet":2}`
