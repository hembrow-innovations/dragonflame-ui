---
id: "ticket-205-slice-141-stale-check-paths"
title: "Slice 141 oracle CHECK paths are stale"
kind: ticket
status: promoted
ticket_type: observation
tags: [afk-verify]
created_at: "2026-09-10T21:33:58.788Z"
updated_at: "2026-09-10T22:31:36Z"
---

# Slice 141 oracle CHECK paths are stale

## Signal

[[slice-141-web-layout-honesty]] oracle CHECK commands still name `tests/no-taffy-on-web.test.mjs` and `tests/no-impeller-dom.test.mjs`. Those paths are missing. The same basenames pass under `tests/web-layout/`.

## Fit

Promoted into [[slice-236-web-layout-check-paths]]. Sprint `web-hygiene` is active. Drain claims [[task-237-align-slice-141-check-paths]].

## Notes

- Slice CHECK lines: `.heio/archive/planning/sprints/web-tracers/slice-141-web-layout-honesty.md:35`, `:39`
- `node --test tests/no-taffy-on-web.test.mjs` exit 1, Could not find
- `node --test tests/no-impeller-dom.test.mjs` exit 1, Could not find
- `node --test tests/web-layout/no-taffy-on-web.test.mjs` 1 pass 0 fail
- `node --test tests/web-layout/no-impeller-dom.test.mjs` 1 pass 0 fail
- Spec already names the `tests/web-layout/` paths: `docs/specs/ui-framework/web-layout/test.md:22-23`
- Honesty slice. Example skipped.
