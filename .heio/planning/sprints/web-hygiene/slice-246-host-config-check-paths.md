---
id: "slice-246-host-config-check-paths"
title: "Host config CHECK paths"
kind: slice
status: met
sprint: "web-hygiene"
blocked_by:
  - "slice-153-host-config-honesty"
tags: []
created_at: "2026-09-10T22:53:16Z"
updated_at: "2026-09-11T09:05:00Z"
---

# Host config CHECK paths

## Why

Verify can re-run the host-config oracles. Archived CHECK lines still name missing flat test paths.

## Done

[[slice-153-host-config-honesty]] oracle CHECK and EVIDENCE lines run the two commands named in `docs/specs/ui-framework/host-config/test.md`. Those same commands pass.

## Blocked by

[[slice-153-host-config-honesty]]: host config honesty already met. [[ticket-244-slice-153-stale-check-paths]] promoted.

## Non-goals

New host-config behaviour. Editing `docs/specs/`. Reopening `web-tracers`. Product code. Other stale CHECK tickets.

## Oracle checklist

- [x] O1: no JSI
  CHECK: node --test tests/host-config/no-jsi.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/host-config/no-jsi.test.mjs; 1 pass 0 fail
- [x] O2: no Hermes host config
  CHECK: node --test tests/host-config/no-hermes-host-config.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/host-config/no-hermes-host-config.test.mjs; 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-247-align-slice-153-check-paths]]

## See also

- [[location-35-host-config]]
- [[location-29-tests]]
- [[location-17-web-component-library]]
- [[slice-153-host-config-honesty]]
- [[ticket-244-slice-153-stale-check-paths]]
- [[rounds-245-slice-153-stale-check-paths]]
