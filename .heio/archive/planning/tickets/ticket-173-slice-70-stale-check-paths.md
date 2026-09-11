---
id: "ticket-173-slice-70-stale-check-paths"
title: "Slice 70 oracle CHECK paths are stale"
kind: ticket
status: closed
ticket_type: observation
tags: [ afk-verify ]
created_at: "2026-09-10T20:08:10Z"
updated_at: "2026-09-11T06:33:17Z"
---
# Slice 70 oracle CHECK paths are stale

## Signal

[[slice-70-counter-on-dom]] oracle CHECK commands still name `tests/counter-static-h.test.mjs`, `tests/counter-signal-patch.test.mjs`, and `tests/counter-run-once.test.mjs`. Those paths are missing. The same basenames pass under `tests/counter/`.

## Fit

Promoted into [[slice-175-counter-check-paths]]. Sprint `web-hygiene` is active. Drain claims [[task-176-align-slice-70-check-paths]].

## Notes

- Slice CHECK lines: `.heio/archive/planning/sprints/web-tracers/slice-70-counter-on-dom.md:35`, `:39`, `:43`
- `node --test tests/counter-static-h.test.mjs` exit 1, Could not find
- `node --test tests/counter-signal-patch.test.mjs` exit 1, Could not find
- `node --test tests/counter-run-once.test.mjs` exit 1, Could not find
- `node --test tests/counter/counter-static-h.test.mjs` 1 pass 0 fail
- `node --test tests/counter/counter-signal-patch.test.mjs` 1 pass 0 fail
- `node --test tests/counter/counter-run-once.test.mjs` 1 pass 0 fail
- Spec already names the `tests/counter/` paths: `docs/specs/ui-framework/counter/test.md:22-24`
- Throwaway example output: `initial 0 runs 1` then `patched 1 runs 1 sameNode true`
