---
id: "ticket-196-slice-129-stale-check-paths"
title: "Slice 129 oracle CHECK paths are stale"
kind: ticket
status: promoted
ticket_type: observation
tags: [afk-verify]
created_at: "2026-09-10T21:20:50.579Z"
updated_at: "2026-09-10T22:13:26Z"
---

# Slice 129 oracle CHECK paths are stale

## Signal

[[slice-129-signal-dirtying-honesty]] oracle CHECK commands still name `tests/no-setstate-dirty.test.mjs`, `tests/no-signal-pipeline.test.mjs`, and `tests/no-shared-signals.test.mjs`. Those paths are missing. The same basenames pass under `tests/signal-dirtying/`.

## Fit

Promoted into [[slice-227-signal-dirtying-check-paths]]. Sprint `web-hygiene` is active. Drain claims [[task-228-align-slice-129-check-paths]].

## Notes

- Slice CHECK lines: `.heio/archive/planning/sprints/web-tracers/slice-129-signal-dirtying-honesty.md:35`, `:39`, `:43`
- `node --test tests/no-setstate-dirty.test.mjs` exit 1, Could not find
- `node --test tests/no-signal-pipeline.test.mjs` exit 1, Could not find
- `node --test tests/no-shared-signals.test.mjs` exit 1, Could not find
- `node --test tests/signal-dirtying/no-setstate-dirty.test.mjs` 1 pass 0 fail
- `node --test tests/signal-dirtying/no-signal-pipeline.test.mjs` 1 pass 0 fail
- `node --test tests/signal-dirtying/no-shared-signals.test.mjs` 1 pass 0 fail
- Spec already names the `tests/signal-dirtying/` paths: `docs/specs/ui-framework/signal-dirtying/test.md:22-24`
- Honesty slice. Example skipped.
