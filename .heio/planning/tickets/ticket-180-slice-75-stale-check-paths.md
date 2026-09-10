---
id: "ticket-180-slice-75-stale-check-paths"
title: "Slice 75 oracle CHECK paths are stale"
kind: ticket
status: promoted
ticket_type: observation
tags: [afk-verify]
created_at: "2026-09-10T20:48:22.336Z"
updated_at: "2026-09-10T21:31:30Z"
---

# Slice 75 oracle CHECK paths are stale

## Signal

[[slice-75-portable-web-import]] oracle CHECK commands still name `tests/portable-import.test.mjs` and `tests/portable-wrong-target.test.mjs`. Those paths are missing. The same basenames pass under `tests/renderer-portability/`.

## Fit

Promoted into [[slice-203-portable-check-paths]]. Sprint `web-hygiene` is active. Drain claims [[task-204-align-slice-75-check-paths]].

## Notes

- Slice CHECK lines: `.heio/archive/planning/sprints/web-tracers/slice-75-portable-web-import.md:35`, `:39`
- `node --test tests/portable-import.test.mjs` exit 1, Could not find
- `node --test tests/portable-wrong-target.test.mjs` exit 1, Could not find
- `node --test tests/renderer-portability/portable-import.test.mjs` 1 pass 0 fail
- `node --test tests/renderer-portability/portable-wrong-target.test.mjs` 1 pass 0 fail
- Spec already names the `tests/renderer-portability/` paths: `docs/specs/ui-framework/renderer-portability/test.md:22-23`
- Throwaway example output: `compile-ok true` / `document-hard-error true wrong-target`
