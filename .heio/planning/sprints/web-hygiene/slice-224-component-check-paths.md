---
id: "slice-224-component-check-paths"
title: "Component model CHECK paths"
kind: slice
status: frozen
sprint: "web-hygiene"
blocked_by:
  - "slice-125-component-model-honesty"
tags: []
created_at: "2026-09-10T22:07:00Z"
updated_at: "2026-09-10T22:07:00Z"
---

# Component model CHECK paths

## Why

Verify can re-run the component-model oracles. Archived CHECK lines still name missing flat test paths.

## Done

[[slice-125-component-model-honesty]] oracle CHECK and EVIDENCE lines run the three commands named in `docs/specs/ui-framework/component-model/test.md`. Those same commands pass.

## Blocked by

[[slice-125-component-model-honesty]]: component model honesty already met. [[ticket-192-slice-125-stale-check-paths]] promoted.

## Non-goals

New component-model behaviour. Editing `docs/specs/`. Reopening `web-tracers`. Product code. Other stale CHECK tickets.

## Oracle checklist

- [ ] O1: no class components
  CHECK: node --test tests/component-model/no-class-components.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: no Fiber or virtual DOM as identity
  CHECK: node --test tests/component-model/no-fiber-vdom.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O3: one component tree
  CHECK: node --test tests/component-model/no-forked-tree.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-225-align-slice-125-check-paths]]

## See also

- [[location-23-components]]
- [[location-29-tests]]
- [[location-17-web-component-library]]
- [[slice-125-component-model-honesty]]
- [[ticket-192-slice-125-stale-check-paths]]
- [[rounds-223-slice-125-stale-check-paths]]
