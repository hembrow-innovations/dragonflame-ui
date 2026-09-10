---
id: "task-195-align-slice-73-check-path"
title: "Align slice-73 CHECK path"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "web-hygiene"
slice: "slice-194-testid-check-path"
tags: []
created_at: "2026-09-10T21:18:40Z"
updated_at: "2026-09-10T21:18:40Z"
---

# Align slice-73 CHECK path

## Blocked by

None.

## Done

Archived [[slice-73-testid-pressable]] oracle CHECK and EVIDENCE lines name `tests/a11y-test-ids/testid-a11y.test.mjs`.

## Context

[[ticket-178-slice-73-stale-check-path]]: CHECK still names missing flat `tests/testid-a11y.test.mjs`. Spec already names the `tests/a11y-test-ids/` path. That test passes.

Rewrite only CHECK and EVIDENCE on the archived slice-73 file to the spec command. Leave Done, Why, and Pool alone. Do not edit `docs/specs/`. Do not add or move tests. Do not add product code. Do not reopen `web-tracers`.

## Verify

The CHECK command on archived slice-73 matches `docs/specs/ui-framework/a11y-test-ids/test.md` and exits 0.

scope: `.heio/archive/planning/sprints/web-tracers/slice-73-testid-pressable.md`

## Links

- [[slice-194-testid-check-path]]
- [[ticket-178-slice-73-stale-check-path]]
- [[slice-73-testid-pressable]]
