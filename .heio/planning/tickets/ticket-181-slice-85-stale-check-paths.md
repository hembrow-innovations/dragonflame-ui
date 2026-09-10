---
id: "ticket-181-slice-85-stale-check-paths"
title: "Slice 85 oracle CHECK paths are stale"
kind: ticket
status: open
ticket_type: observation
tags: [afk-verify]
created_at: "2026-09-11T22:10:00Z"
updated_at: "2026-09-11T22:10:00Z"
---

# Slice 85 oracle CHECK paths are stale

## Signal

[[slice-85-first-version-without-sugar]] oracle CHECK commands still name `tests/no-jsx-here.test.mjs`, `tests/no-lowerer-here.test.mjs`, and `tests/git-package.test.mjs`. Those paths are missing. The same basenames pass under `tests/absence/` and `tests/git-package/`.

## Fit

this project, later slice

## Notes

- Slice CHECK lines: `.heio/archive/planning/sprints/sugar-later/slice-85-first-version-without-sugar.md:33`, `:37`, `:41`
- `node --test tests/no-jsx-here.test.mjs` exit 1, Could not find
- `node --test tests/no-lowerer-here.test.mjs` exit 1, Could not find
- `node --test tests/git-package.test.mjs` exit 1, Could not find
- `node --test tests/absence/no-jsx-here.test.mjs` 1 pass 0 fail
- `node --test tests/absence/no-lowerer-here.test.mjs` 1 pass 0 fail
- `node --test tests/git-package/git-package.test.mjs` 3 pass 0 fail
- Spec already names the moved paths: `docs/specs/ui-framework/absence/test.md:22-24`
- Honesty or absence Done. No throwaway example.
