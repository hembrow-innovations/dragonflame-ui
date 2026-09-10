---
id: "task-247-align-slice-153-check-paths"
title: "Align slice-153 CHECK paths"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "web-hygiene"
slice: "slice-246-host-config-check-paths"
tags: []
created_at: "2026-09-10T22:53:16Z"
updated_at: "2026-09-10T22:57:40Z"
---

# Align slice-153 CHECK paths

## Blocked by

None.

## Done

Archived [[slice-153-host-config-honesty]] oracle CHECK and EVIDENCE lines name `tests/host-config/no-jsi.test.mjs` and `tests/host-config/no-hermes-host-config.test.mjs`.

## Context

[[ticket-244-slice-153-stale-check-paths]]: CHECK commands still name missing flat `tests/no-jsi.test.mjs` and `tests/no-hermes-host-config.test.mjs`. Spec already names the `tests/host-config/` paths. Those tests pass.

Rewrite only CHECK and EVIDENCE on the archived slice-153 file to the spec commands. Leave Done, Why, and Pool alone. Do not edit `docs/specs/`. Do not add or move tests. Do not add product code. Do not reopen `web-tracers`.

## Verify

The two CHECK commands on archived slice-153 match `docs/specs/ui-framework/host-config/test.md` and each exits 0.

scope: `.heio/archive/planning/sprints/web-tracers/slice-153-host-config-honesty.md`

## Links

- [[slice-246-host-config-check-paths]]
- [[ticket-244-slice-153-stale-check-paths]]
- [[slice-153-host-config-honesty]]
