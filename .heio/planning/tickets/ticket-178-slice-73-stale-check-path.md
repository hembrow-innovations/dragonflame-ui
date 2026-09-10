---
id: "ticket-178-slice-73-stale-check-path"
title: "Slice 73 oracle CHECK path is stale"
kind: ticket
status: open
ticket_type: observation
tags: [afk-verify]
created_at: "2026-09-10T20:22:33Z"
updated_at: "2026-09-10T20:22:33Z"
---

# Slice 73 oracle CHECK path is stale

## Signal

[[slice-73-testid-pressable]] oracle CHECK still names `tests/testid-a11y.test.mjs`. That path is missing. The same basename passes under `tests/a11y-test-ids/`.

## Fit

this project, later slice

## Notes

- Slice CHECK line: `.heio/archive/planning/sprints/web-tracers/slice-73-testid-pressable.md:35`
- `node --test tests/testid-a11y.test.mjs` exit 1, Could not find
- `node --test tests/a11y-test-ids/testid-a11y.test.mjs` 2 pass 0 fail
- Spec already names the `tests/a11y-test-ids/` path: `docs/specs/ui-framework/a11y-test-ids/test.md:22`
- Throwaway example output: `{"found":true,"localName":"button","testID":"save","ariaLabel":"Save"}`
