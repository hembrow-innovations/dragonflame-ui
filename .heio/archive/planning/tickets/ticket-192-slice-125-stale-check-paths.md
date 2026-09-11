---
id: "ticket-192-slice-125-stale-check-paths"
title: "Slice 125 oracle CHECK paths are stale"
kind: ticket
status: closed
ticket_type: observation
tags: [ afk-verify ]
created_at: "2026-09-10T21:17:30Z"
updated_at: "2026-09-11T06:33:17Z"
---
# Slice 125 oracle CHECK paths are stale

## Signal

[[slice-125-component-model-honesty]] oracle CHECK commands still name `tests/no-class-components.test.mjs`, `tests/no-fiber-vdom.test.mjs`, and `tests/no-forked-tree.test.mjs`. Those paths are missing. The same basenames pass under `tests/component-model/`.

## Fit

Promoted into [[slice-224-component-check-paths]]. Sprint `web-hygiene` is active. Drain claims [[task-225-align-slice-125-check-paths]].

## Notes

- Slice CHECK lines: `.heio/archive/planning/sprints/web-tracers/slice-125-component-model-honesty.md:33`, `:37`, `:41`
- `node --test tests/no-class-components.test.mjs` exit 1, Could not find
- `node --test tests/no-fiber-vdom.test.mjs` exit 1, Could not find
- `node --test tests/no-forked-tree.test.mjs` exit 1, Could not find
- `node --test tests/component-model/no-class-components.test.mjs` 1 pass 0 fail
- `node --test tests/component-model/no-fiber-vdom.test.mjs` 1 pass 0 fail
- `node --test tests/component-model/no-forked-tree.test.mjs` 1 pass 0 fail
- Spec already names the `tests/component-model/` paths: `docs/specs/ui-framework/component-model/test.md:22-24`
- Honesty slice. Example skipped.
