---
id: "ticket-201-slice-137-stale-check-paths"
title: "Slice 137 oracle CHECK paths are stale"
kind: ticket
status: closed
ticket_type: observation
tags: [ afk-verify ]
created_at: "2026-09-10T21:30:15.073Z"
updated_at: "2026-09-11T06:33:17Z"
---
# Slice 137 oracle CHECK paths are stale

## Signal

[[slice-137-render-object-honesty]] oracle CHECK commands still name `tests/no-widget-retain.test.mjs` and `tests/no-collapsed-render-names.test.mjs`. Those paths are missing. The same basenames pass under `tests/render-object/`.

## Fit

Promoted into [[slice-233-render-object-check-paths]]. Sprint `web-hygiene` is active. Drain claims [[task-234-align-slice-137-check-paths]].

## Notes

- Slice CHECK lines: `.heio/archive/planning/sprints/web-tracers/slice-137-render-object-honesty.md:35`, `:39`
- `node --test tests/no-widget-retain.test.mjs` exit 1, Could not find
- `node --test tests/no-collapsed-render-names.test.mjs` exit 1, Could not find
- `node --test tests/render-object/no-widget-retain.test.mjs` 1 pass 0 fail
- `node --test tests/render-object/no-collapsed-render-names.test.mjs` 1 pass 0 fail
- Spec already names the `tests/render-object/` paths: `docs/specs/ui-framework/render-object/test.md:22-23`
- Honesty slice. Example skipped.
