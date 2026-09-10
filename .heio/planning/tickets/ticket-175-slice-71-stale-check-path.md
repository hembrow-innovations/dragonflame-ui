---
id: "ticket-175-slice-71-stale-check-path"
title: "Slice 71 oracle CHECK path is stale"
kind: ticket
status: promoted
ticket_type: observation
tags: [afk-verify]
created_at: "2026-09-10T20:14:33Z"
updated_at: "2026-09-10T21:07:00Z"
---

# Slice 71 oracle CHECK path is stale

## Signal

[[slice-71-unmount-disposes]] oracle CHECK still names `tests/owner-dispose.test.mjs`. That path is missing. The same basename passes under `tests/owner/`.

## Fit

Promoted into [[slice-185-unmount-check-path]]. Sprint `web-hygiene` is active. Drain claims [[task-186-align-slice-71-check-path]].

## Notes

- Slice CHECK line: `.heio/archive/planning/sprints/web-tracers/slice-71-unmount-disposes.md:35`
- `node --test tests/owner-dispose.test.mjs` exit 1, Could not find
- `node --test tests/owner/owner-dispose.test.mjs` 1 pass 0 fail
- Spec already names the `tests/owner/` path: `docs/specs/ui-framework/owner/test.md:22`
- Throwaway example output: `mounted 0` then `updated 1` then `after-unmount 1`
