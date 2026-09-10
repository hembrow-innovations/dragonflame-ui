---
id: "ticket-187-slice-116-stale-check-paths"
title: "Slice 116 oracle CHECK paths are stale"
kind: ticket
status: open
ticket_type: observation
tags: [afk-verify]
created_at: "2026-09-10T21:09:51Z"
updated_at: "2026-09-10T21:09:51Z"
---

# Slice 116 oracle CHECK paths are stale

## Signal

[[slice-116-patch-attrs-children]] oracle CHECK commands still name `tests/patch-style.test.mjs` and `tests/patch-children.test.mjs`. Those paths are missing. The same basenames pass under `tests/dom-patch/`.

## Fit

this project, later slice

## Notes

- Slice CHECK lines: `.heio/archive/planning/sprints/web-tracers/slice-116-patch-attrs-children.md:35`, `:39`
- `node --test tests/patch-style.test.mjs` exit 1, Could not find
- `node --test tests/patch-children.test.mjs` exit 1, Could not find
- `node --test tests/dom-patch/patch-style.test.mjs` 1 pass 0 fail
- `node --test tests/dom-patch/patch-children.test.mjs` 1 pass 0 fail
- Spec already names the `tests/dom-patch/` paths: `docs/specs/ui-framework/dom-patch/test.md:22-23`
- Throwaway example output: `mount { localName: 'div', flexDirection: 'column', padding: 8, text: 'a', runs: 1 }` then `patched { sameNode: true, flexDirection: 'row', padding: 16, text: 'b', runs: 1, hasPatch: 'undefined' }`
