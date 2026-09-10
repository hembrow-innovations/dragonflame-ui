---
id: "ticket-182-slice-107-stale-check-paths"
title: "Slice 107 oracle CHECK paths are stale"
kind: ticket
status: open
ticket_type: observation
tags: [afk-verify]
created_at: "2026-09-10T20:58:52Z"
updated_at: "2026-09-10T20:58:52Z"
---

# Slice 107 oracle CHECK paths are stale

## Signal

[[slice-107-composite-on-dom]] oracle CHECK commands still name `tests/composite-h.test.mjs`, `tests/composite-children.test.mjs`, and `tests/composite-run-once.test.mjs`. Those paths are missing. The same basenames pass under `tests/composite/`.

## Fit

this project, later slice

## Notes

- Slice CHECK lines: `.heio/archive/planning/sprints/web-tracers/slice-107-composite-on-dom.md:35`, `:39`, `:43`
- `node --test tests/composite-h.test.mjs` exit 1, Could not find
- `node --test tests/composite-children.test.mjs` exit 1, Could not find
- `node --test tests/composite-run-once.test.mjs` exit 1, Could not find
- `node --test tests/composite/composite-h.test.mjs` 1 pass 0 fail
- `node --test tests/composite/composite-children.test.mjs` 1 pass 0 fail
- `node --test tests/composite/composite-run-once.test.mjs` 1 pass 0 fail
- Spec already names the `tests/composite/` paths: `docs/specs/ui-framework/composite/test.md:22-24`
- Throwaway example output: `mounted hello runs 1` then `patched world runs 1 sameNode true`
