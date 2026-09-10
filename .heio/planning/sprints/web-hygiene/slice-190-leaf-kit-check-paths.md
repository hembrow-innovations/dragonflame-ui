---
id: "slice-190-leaf-kit-check-paths"
title: "Leaf kit CHECK paths"
kind: slice
status: frozen
sprint: "web-hygiene"
blocked_by:
  - "slice-72-leaf-kit-on-dom"
tags: []
created_at: "2026-09-10T21:13:00Z"
updated_at: "2026-09-10T21:13:00Z"
---

# Leaf kit CHECK paths

## Why

Verify can re-run the leaf-kit oracles. Archived CHECK lines still name missing flat test paths.

## Done

[[slice-72-leaf-kit-on-dom]] oracle CHECK and EVIDENCE lines run the three commands named in `docs/specs/ui-framework/leaf-kit/test.md`. Those same commands pass.

## Blocked by

[[slice-72-leaf-kit-on-dom]]: leaf-kit demo already met. [[ticket-177-slice-72-stale-check-paths]] promoted.

## Non-goals

New leaf-kit behaviour. Editing `docs/specs/`. Reopening `web-tracers`. Product code. Other stale CHECK tickets.

## Oracle checklist

- [ ] O1: view and text with style data on CSS
  CHECK: node --test tests/leaf-kit/leaf-view-text-style.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: image and scroll
  CHECK: node --test tests/leaf-kit/leaf-image-scroll.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O3: text input and pressable
  CHECK: node --test tests/leaf-kit/leaf-input-pressable.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-191-align-slice-72-check-paths]]

## See also

- [[location-29-tests]]
- [[location-32-host-leaves]]
- [[location-31-web-layout]]
- [[location-33-style-as-data]]
- [[location-17-web-component-library]]
- [[slice-72-leaf-kit-on-dom]]
- [[ticket-177-slice-72-stale-check-paths]]
- [[rounds-189-slice-72-stale-check-paths]]
