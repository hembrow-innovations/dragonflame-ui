---
id: "ticket-177-slice-72-stale-check-paths"
title: "Slice 72 oracle CHECK paths are stale"
kind: ticket
status: open
ticket_type: observation
tags: [afk-verify]
created_at: "2026-09-10T20:18:21Z"
updated_at: "2026-09-10T20:18:21Z"
---

# Slice 72 oracle CHECK paths are stale

## Signal

[[slice-72-leaf-kit-on-dom]] oracle CHECK commands still name `tests/leaf-view-text-style.test.mjs`, `tests/leaf-image-scroll.test.mjs`, and `tests/leaf-input-pressable.test.mjs`. Those paths are missing. The same basenames pass under `tests/leaf-kit/`.

## Fit

this project, later slice

## Notes

- Slice CHECK lines: `.heio/archive/planning/sprints/web-tracers/slice-72-leaf-kit-on-dom.md:35`, `:39`, `:43`
- `node --test tests/leaf-view-text-style.test.mjs` exit 1, Could not find
- `node --test tests/leaf-image-scroll.test.mjs` exit 1, Could not find
- `node --test tests/leaf-input-pressable.test.mjs` exit 1, Could not find
- `node --test tests/leaf-kit/leaf-view-text-style.test.mjs` 1 pass 0 fail
- `node --test tests/leaf-kit/leaf-image-scroll.test.mjs` 2 pass 0 fail
- `node --test tests/leaf-kit/leaf-input-pressable.test.mjs` 1 pass 0 fail
- Spec already names the `tests/leaf-kit/` paths: `docs/specs/ui-framework/leaf-kit/test.md:22-24`
- Throwaway example output: `div span img div button input column hisc`
