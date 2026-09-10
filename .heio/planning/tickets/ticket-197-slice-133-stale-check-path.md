---
id: "ticket-197-slice-133-stale-check-path"
title: "Slice 133 oracle O2 CHECK path is stale"
kind: ticket
status: promoted
ticket_type: observation
tags: [afk-verify]
created_at: "2026-09-10T21:25:53.867Z"
updated_at: "2026-09-10T22:18:12Z"
---

# Slice 133 oracle O2 CHECK path is stale

## Signal

[[slice-133-crate-workspace-honesty]] oracle O2 CHECK still names `tests/no-toolchain-workspace.test.mjs`. That path is missing. The same basename passes under `tests/crate-workspace/`.

## Fit

Promoted into [[slice-230-crate-workspace-check-paths]]. Sprint `web-hygiene` is active. Drain claims [[task-231-align-slice-133-check-paths]].

## Notes

- Slice CHECK line: `.heio/archive/planning/sprints/web-tracers/slice-133-crate-workspace-honesty.md:39`
- `node --test tests/no-toolchain-workspace.test.mjs` exit 1, Could not find
- `node --test tests/crate-workspace/no-toolchain-workspace.test.mjs` 1 pass 0 fail
- Spec already names the `tests/crate-workspace/` path: `docs/specs/ui-framework/crate-workspace/test.md:23`
