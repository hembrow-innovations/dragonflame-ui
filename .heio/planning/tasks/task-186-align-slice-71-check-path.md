---
id: "task-186-align-slice-71-check-path"
title: "Align slice-71 CHECK path"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "web-hygiene"
slice: "slice-185-unmount-check-path"
tags: []
created_at: "2026-09-10T21:07:00Z"
updated_at: "2026-09-10T21:07:00Z"
---

# Align slice-71 CHECK path

## Blocked by

None.

## Done

Archived [[slice-71-unmount-disposes]] oracle CHECK and EVIDENCE lines name `tests/owner/owner-dispose.test.mjs`.

## Context

[[ticket-175-slice-71-stale-check-path]]: CHECK still names missing flat `tests/owner-dispose.test.mjs`. Spec already names the `tests/owner/` path. That test passes.

Rewrite only CHECK and EVIDENCE on the archived slice-71 file to the spec command. Leave Done, Why, and Pool alone. Do not edit `docs/specs/`. Do not add or move tests. Do not add product code. Do not reopen `web-tracers`.

## Verify

The CHECK command on archived slice-71 matches `docs/specs/ui-framework/owner/test.md` and exits 0.

scope: `.heio/archive/planning/sprints/web-tracers/slice-71-unmount-disposes.md`

## Links

- [[slice-185-unmount-check-path]]
- [[ticket-175-slice-71-stale-check-path]]
- [[slice-71-unmount-disposes]]
