---
id: "ticket-215-slice-145-stale-check-paths"
title: "Slice 145 oracle CHECK paths are stale"
kind: ticket
status: open
ticket_type: observation
tags: [afk-verify]
created_at: "2026-09-10T21:54:16.590Z"
updated_at: "2026-09-10T21:54:16.590Z"
---

# Slice 145 oracle CHECK paths are stale

## Signal

[[slice-145-host-leaves-honesty]] oracle CHECK commands still name `tests/no-html-leaves.test.mjs` and `tests/no-uikit-leaves.test.mjs`. Those paths are missing. The same basenames pass under `tests/host-leaves/`.

## Fit

this project, later slice

## Notes

- Slice CHECK lines: `.heio/archive/planning/sprints/web-tracers/slice-145-host-leaves-honesty.md:35`, `:39`
- `node --test tests/no-html-leaves.test.mjs` exit 1, Could not find
- `node --test tests/no-uikit-leaves.test.mjs` exit 1, Could not find
- `node --test tests/host-leaves/no-html-leaves.test.mjs` 1 pass 0 fail
- `node --test tests/host-leaves/no-uikit-leaves.test.mjs` 1 pass 0 fail
- Spec already names the `tests/host-leaves/` paths: `docs/specs/ui-framework/host-leaves/test.md:22-23`
- Honesty slice. Example skipped.
