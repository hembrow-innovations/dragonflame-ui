---
id: "ticket-219-slice-149-stale-check-paths"
title: "Slice 149 oracle CHECK paths are stale"
kind: ticket
status: open
ticket_type: observation
tags: [afk-verify]
created_at: "2026-09-10T21:57:42.372Z"
updated_at: "2026-09-10T21:57:42.372Z"
---

# Slice 149 oracle CHECK paths are stale

## Signal

[[slice-149-style-as-data-honesty]] oracle CHECK commands still name `tests/no-css-language.test.mjs` and `tests/no-css-engine.test.mjs`. Those paths are missing. The same basenames pass under `tests/style-as-data/`.

## Fit

this project, later slice

## Notes

- Slice CHECK lines: `.heio/archive/planning/sprints/web-tracers/slice-149-style-as-data-honesty.md:35`, `:39`
- `node --test tests/no-css-language.test.mjs` exit 1, Could not find
- `node --test tests/no-css-engine.test.mjs` exit 1, Could not find
- `node --test tests/style-as-data/no-css-language.test.mjs` 1 pass 0 fail
- `node --test tests/style-as-data/no-css-engine.test.mjs` 1 pass 0 fail
- Spec already names the `tests/style-as-data/` paths: `docs/specs/ui-framework/style-as-data/test.md:22-23`
- Honesty slice. Example skipped.
