---
id: "slice-239-host-leaves-check-paths"
title: "Host leaves CHECK paths"
kind: slice
status: met
sprint: "web-hygiene"
blocked_by:
  - "slice-145-host-leaves-honesty"
tags: []
created_at: "2026-09-10T22:40:10Z"
updated_at: "2026-09-11T08:55:00Z"
---

# Host leaves CHECK paths

## Why

Verify can re-run the host-leaves oracles. Archived CHECK lines still name missing flat test paths.

## Done

[[slice-145-host-leaves-honesty]] oracle CHECK and EVIDENCE lines run the two commands named in `docs/specs/ui-framework/host-leaves/test.md`. Those same commands pass.

## Blocked by

[[slice-145-host-leaves-honesty]]: host leaves honesty already met. [[ticket-215-slice-145-stale-check-paths]] promoted.

## Non-goals

New host-leaves behaviour. Editing `docs/specs/`. Reopening `web-tracers`. Product code. Other stale CHECK tickets.

## Oracle checklist

- [x] O1: no HTML leaves
  CHECK: node --test tests/host-leaves/no-html-leaves.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/host-leaves/no-html-leaves.test.mjs; 1 pass 0 fail
- [x] O2: no UIKit as leaf set
  CHECK: node --test tests/host-leaves/no-uikit-leaves.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/host-leaves/no-uikit-leaves.test.mjs; 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-240-align-slice-145-check-paths]]

## See also

- [[location-32-host-leaves]]
- [[location-29-tests]]
- [[location-17-web-component-library]]
- [[slice-145-host-leaves-honesty]]
- [[ticket-215-slice-145-stale-check-paths]]
- [[rounds-238-slice-145-stale-check-paths]]
