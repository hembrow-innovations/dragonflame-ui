---
id: "ticket-245-slice-157-stale-check-path"
title: "Slice 157 oracle CHECK path is stale"
kind: ticket
status: open
ticket_type: observation
tags: [afk-verify]
created_at: "2026-09-10T22:53:36.309Z"
updated_at: "2026-09-10T22:53:36.309Z"
---

# Slice 157 oracle CHECK path is stale

## Signal

[[slice-157-portability-metal-honesty]] oracle CHECK still names `tests/portable-metal.test.mjs`. That path is missing. The same basename passes under `tests/portability-metal/`.

## Fit

this project, later slice

## Notes

- Slice CHECK line: `.heio/archive/planning/sprints/web-tracers/slice-157-portability-metal-honesty.md:35`
- `node --test tests/portable-metal.test.mjs` exit 1, Could not find
- `node --test tests/portability-metal/portable-metal.test.mjs` 1 pass 0 fail
- Spec already names the nested path: `docs/specs/ui-framework/portability-metal/test.md:22`
- Honesty slice. Example skipped.
