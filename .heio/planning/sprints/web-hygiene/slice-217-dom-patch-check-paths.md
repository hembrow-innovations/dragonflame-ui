---
id: "slice-217-dom-patch-check-paths"
title: "DOM patch CHECK paths"
kind: slice
status: met
sprint: "web-hygiene"
blocked_by:
  - "slice-116-patch-attrs-children"
tags: []
created_at: "2026-09-10T21:55:34Z"
updated_at: "2026-09-10T22:01:10Z"
---

# DOM patch CHECK paths

## Why

Verify can re-run the dom-patch oracles. Archived CHECK lines still name missing flat test paths.

## Done

[[slice-116-patch-attrs-children]] oracle CHECK and EVIDENCE lines run the two commands named in `docs/specs/ui-framework/dom-patch/test.md`. Those same commands pass.

## Blocked by

[[slice-116-patch-attrs-children]]: patch demo already met. [[ticket-187-slice-116-stale-check-paths]] promoted.

## Non-goals

New dom-patch behaviour. Editing `docs/specs/`. Reopening `web-tracers`. Product code. Other stale CHECK tickets.

## Oracle checklist

- [x] O1: style signal write patches the same host node
  CHECK: node --test tests/dom-patch/patch-style.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/dom-patch/patch-style.test.mjs; 1 pass 0 fail
- [x] O2: children signal write patches one child under the same parent
  CHECK: node --test tests/dom-patch/patch-children.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/dom-patch/patch-children.test.mjs; 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-218-align-slice-116-check-paths]]

## See also

- [[location-28-dom-renderer]]
- [[location-29-tests]]
- [[location-17-web-component-library]]
- [[slice-116-patch-attrs-children]]
- [[ticket-187-slice-116-stale-check-paths]]
- [[rounds-216-slice-116-stale-check-paths]]
