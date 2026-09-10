---
id: "ticket-244-slice-153-stale-check-paths"
title: "Slice 153 oracle CHECK paths are stale"
kind: ticket
status: open
ticket_type: observation
tags: [afk-verify]
created_at: "2026-09-10T22:50:35.167Z"
updated_at: "2026-09-10T22:50:35.167Z"
---

# Slice 153 oracle CHECK paths are stale

## Signal

[[slice-153-host-config-honesty]] oracle CHECK commands still name `tests/no-jsi.test.mjs` and `tests/no-hermes-host-config.test.mjs`. Those paths are missing. The same basenames pass under `tests/host-config/`.

## Fit

this project, later slice

## Notes

- Slice CHECK lines: `.heio/archive/planning/sprints/web-tracers/slice-153-host-config-honesty.md:35`, `:39`
- `node --test tests/no-jsi.test.mjs` exit 1, Could not find
- `node --test tests/no-hermes-host-config.test.mjs` exit 1, Could not find
- `node --test tests/host-config/no-jsi.test.mjs` 1 pass 0 fail
- `node --test tests/host-config/no-hermes-host-config.test.mjs` 1 pass 0 fail
- Spec already names the `tests/host-config/` paths: `docs/specs/ui-framework/host-config/test.md:22-23`
- Honesty slice. Example skipped.
