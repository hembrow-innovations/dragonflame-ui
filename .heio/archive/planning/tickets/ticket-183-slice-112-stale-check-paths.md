---
id: "ticket-183-slice-112-stale-check-paths"
title: "Slice 112 oracle CHECK paths are stale"
kind: ticket
status: closed
ticket_type: observation
tags: [ afk-verify ]
created_at: "2026-09-10T21:05:24Z"
updated_at: "2026-09-11T06:33:17Z"
---
# Slice 112 oracle CHECK paths are stale

## Signal

[[slice-112-js-backend-honesty]] oracle CHECK commands still name `tests/no-eval-here.test.mjs`, `tests/no-native-stubs.test.mjs`, and `tests/no-emit-here.test.mjs`. Those paths are missing. The same basenames pass under `tests/js-backend/`.

## Fit

Promoted into [[slice-213-js-backend-check-paths]]. Sprint `web-hygiene` is active. Drain claims [[task-214-align-slice-112-check-paths]].

## Notes

- Slice CHECK lines: `.heio/archive/planning/sprints/web-tracers/slice-112-js-backend-honesty.md:35`, `:39`, `:43`
- `node --test tests/no-eval-here.test.mjs` exit 1, Could not find
- `node --test tests/no-native-stubs.test.mjs` exit 1, Could not find
- `node --test tests/no-emit-here.test.mjs` exit 1, Could not find
- `node --test tests/js-backend/no-eval-here.test.mjs` 1 pass 0 fail
- `node --test tests/js-backend/no-native-stubs.test.mjs` 1 pass 0 fail
- `node --test tests/js-backend/no-emit-here.test.mjs` 1 pass 0 fail
- Spec already names the `tests/js-backend/` paths: `docs/specs/ui-framework/js-backend/test.md:22-24`
- Honesty slice. No throwaway example.
