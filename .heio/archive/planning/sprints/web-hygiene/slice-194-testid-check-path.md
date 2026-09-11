---
id: "slice-194-testid-check-path"
title: "Test ID CHECK path"
kind: slice
status: met
sprint: "web-hygiene"
blocked_by:
  - "slice-73-testid-pressable"
tags: []
created_at: "2026-09-10T21:18:40Z"
updated_at: "2026-09-11T07:35:00Z"
---

# Test ID CHECK path

## Why

Verify can re-run the test ID oracles. Archived CHECK still names a missing flat test path.

## Done

[[slice-73-testid-pressable]] oracle CHECK and EVIDENCE lines run the command named in `docs/specs/ui-framework/a11y-test-ids/test.md`. That same command passes.

## Blocked by

[[slice-73-testid-pressable]]: test ID demo already met. [[ticket-178-slice-73-stale-check-path]] promoted.

## Non-goals

New a11y or test ID behaviour. Editing `docs/specs/`. Reopening `web-tracers`. Product code. Other stale CHECK tickets.

## Oracle checklist

- [x] O1: test ID and a11y props
  CHECK: node --test tests/a11y-test-ids/testid-a11y.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/a11y-test-ids/testid-a11y.test.mjs; 2 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-195-align-slice-73-check-path]]

## See also

- [[location-34-a11y-test-ids]]
- [[location-29-tests]]
- [[location-17-web-component-library]]
- [[slice-73-testid-pressable]]
- [[ticket-178-slice-73-stale-check-path]]
- [[rounds-193-slice-73-stale-check-path]]
