---
id: "task-250-align-slice-157-check-path"
title: "Align slice-157 CHECK path"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "web-hygiene"
slice: "slice-249-portability-metal-check-path"
tags: []
created_at: "2026-09-10T22:58:36Z"
updated_at: "2026-09-10T23:02:53Z"
---

# Align slice-157 CHECK path

## Blocked by

None.

## Done

Archived [[slice-157-portability-metal-honesty]] oracle CHECK and EVIDENCE lines name `tests/portability-metal/portable-metal.test.mjs`.

## Context

[[ticket-245-slice-157-stale-check-path]]: CHECK still names missing flat `tests/portable-metal.test.mjs`. Spec already names `tests/portability-metal/portable-metal.test.mjs`. That test passes.

Rewrite only CHECK and EVIDENCE on the archived slice-157 file to the spec command. Leave Done, Why, and Pool alone. Do not edit `docs/specs/`. Do not add or move tests. Do not add product code. Do not reopen `web-tracers`.

## Verify

The CHECK command on archived slice-157 matches `docs/specs/ui-framework/portability-metal/test.md` and exits 0.

scope: `.heio/archive/planning/sprints/web-tracers/slice-157-portability-metal-honesty.md`

## Links

- [[slice-249-portability-metal-check-path]]
- [[ticket-245-slice-157-stale-check-path]]
- [[slice-157-portability-metal-honesty]]
