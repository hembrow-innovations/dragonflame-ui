---
id: "slice-230-crate-workspace-check-paths"
title: "Crate workspace CHECK paths"
kind: slice
status: frozen
sprint: "web-hygiene"
blocked_by:
  - "slice-133-crate-workspace-honesty"
tags: []
created_at: "2026-09-10T22:18:12Z"
updated_at: "2026-09-10T22:18:12Z"
---

# Crate workspace CHECK paths

## Why

Verify can re-run the crate-workspace oracles. Archived CHECK lines still name missing flat test paths, and O1 still names the unfunded no-cargo-workspace command.

## Done

[[slice-133-crate-workspace-honesty]] oracle CHECK and EVIDENCE lines run the two commands named in `docs/specs/ui-framework/crate-workspace/test.md`. Those same commands pass.

## Blocked by

[[slice-133-crate-workspace-honesty]]: crate workspace honesty already met. [[ticket-197-slice-133-stale-check-path]] promoted.

## Non-goals

New crate-workspace behaviour. Editing `docs/specs/`. Reopening `web-tracers`. Product code. Other stale CHECK tickets.

## Oracle checklist

- [ ] O1: a Cargo workspace may exist because native is funded
  CHECK: node --test tests/crate-workspace/funded-cargo-workspace.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: not a toolchain workspace
  CHECK: node --test tests/crate-workspace/no-toolchain-workspace.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-231-align-slice-133-check-paths]]

## See also

- [[location-22-crate-layout]]
- [[location-29-tests]]
- [[location-17-web-component-library]]
- [[slice-133-crate-workspace-honesty]]
- [[ticket-197-slice-133-stale-check-path]]
- [[rounds-229-slice-133-stale-check-paths]]
