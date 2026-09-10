---
id: "ticket-188-slice-121-stale-check-paths"
title: "Slice 121 oracle CHECK paths are stale"
kind: ticket
status: open
ticket_type: observation
tags: [afk-verify]
created_at: "2026-09-10T21:13:22Z"
updated_at: "2026-09-10T21:13:22Z"
---

# Slice 121 oracle CHECK paths are stale

## Signal

[[slice-121-dom-only-web-host]] oracle CHECK commands still name `tests/no-web-canvas.test.mjs`, `tests/no-wasm-web.test.mjs`, and `tests/no-host-io-dom.test.mjs`. Those paths are missing. The same basenames pass under `tests/dom-only-host/`.

## Fit

this project, later slice

## Notes

- Slice CHECK lines: `.heio/archive/planning/sprints/web-tracers/slice-121-dom-only-web-host.md:35`, `:39`, `:43`
- `node --test tests/no-web-canvas.test.mjs` exit 1, Could not find
- `node --test tests/no-wasm-web.test.mjs` exit 1, Could not find
- `node --test tests/no-host-io-dom.test.mjs` exit 1, Could not find
- `node --test tests/dom-only-host/no-web-canvas.test.mjs` 1 pass 0 fail
- `node --test tests/dom-only-host/no-wasm-web.test.mjs` 1 pass 0 fail
- `node --test tests/dom-only-host/no-host-io-dom.test.mjs` 1 pass 0 fail
- Spec already names the `tests/dom-only-host/` paths: `docs/specs/ui-framework/dom-only-host/test.md:22-24`
- Honesty slice. Example skipped.
