---
id: "task-200-align-slice-74-check-path"
title: "Align slice-74 CHECK path"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "web-hygiene"
slice: "slice-199-raf-check-path"
tags: []
created_at: "2026-09-10T21:26:57Z"
updated_at: "2026-09-10T21:26:57Z"
---

# Align slice-74 CHECK path

## Blocked by

None.

## Done

Archived [[slice-74-raf-clock]] oracle CHECK and EVIDENCE lines name `tests/animation-clocks/raf-clock.test.mjs`.

## Context

[[ticket-179-slice-74-stale-check-path]]: CHECK still names missing flat `tests/raf-clock.test.mjs`. Spec already names the `tests/animation-clocks/` path. That test passes.

Rewrite only CHECK and EVIDENCE on the archived slice-74 file to the spec command. Leave Done, Why, and Pool alone. Do not edit `docs/specs/`. Do not add or move tests. Do not add product code. Do not reopen `web-tracers`.

## Verify

The CHECK command on archived slice-74 matches `docs/specs/ui-framework/animation-clocks/test.md` and exits 0.

scope: `.heio/archive/planning/sprints/web-tracers/slice-74-raf-clock.md`

## Links

- [[slice-199-raf-check-path]]
- [[ticket-179-slice-74-stale-check-path]]
- [[slice-74-raf-clock]]
