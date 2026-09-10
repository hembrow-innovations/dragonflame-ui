---
id: "rounds-216-slice-116-stale-check-paths"
title: "Slice 116 stale CHECK paths"
kind: round
sitting_kind: planning
status: published
tags: ["afk-plan"]
created_at: "2026-09-10T21:55:34Z"
updated_at: "2026-09-10T21:55:34Z"
---

# Slice 116 stale CHECK paths

Counterpart is the product peer. Notebook is this round.

Pick: [[ticket-187-slice-116-stale-check-paths]]. Unblocked open verify ticket. Does not fit [[slice-175-counter-check-paths]], [[slice-185-unmount-check-path]], [[slice-190-leaf-kit-check-paths]], [[slice-194-testid-check-path]], [[slice-199-raf-check-path]], [[slice-203-portable-check-paths]], [[slice-207-absence-check-paths]], [[slice-210-composite-check-paths]], or [[slice-213-js-backend-check-paths]] (those slices own slice-70 through slice-75, slice-85, slice-107, and slice-112 only). [[ticket-171-gesture-apis-unnamed]] is HITL and native-if-funded forbids freeze of press until APIs are named. [[ticket-67-store-formats-unnamed]] and [[ticket-68-phase3-apis-unnamed]] wait on unmet slices. No unblocked ready AFK task. [[task-214-align-slice-112-check-paths]] is claimed, not ready.

## Vault pack

Query: freeze a slice so slice-116 oracle CHECK paths match the dom-patch spec
Area: dom-patch

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/locations/location-28-dom-renderer.md`
- `.heio/planning/locations/location-29-tests.md`
- `.heio/planning/sprints/web-hygiene/shape.md`
- `.heio/archive/planning/sprints/web-tracers/slice-116-patch-attrs-children.md`
- `.heio/planning/tickets/ticket-187-slice-116-stale-check-paths.md`
- `docs/specs/ui-framework/dom-patch/purpose.md`
- `docs/specs/ui-framework/dom-patch/contract.md`
- `docs/specs/ui-framework/dom-patch/test.md`
- `docs/overview/overview-ui-framework.md`

Related:

- `.heio/planning/sprints/web-hygiene/slice-213-js-backend-check-paths.md`
- `.heio/planning/sprints/web-hygiene/slice-210-composite-check-paths.md`
- `.heio/planning/rounds/rounds-212-slice-112-stale-check-paths.md`
- `.heio/archive/planning/sprints/web-tracers/shape.md`

Excluded: native freeze, gesture APIs, mobile, rewriting location destinations, inventing new dom-patch behaviour.

Next: freeze one hygiene slice. Do not write `docs/specs/`.

No packer script exists. Assembled by hand. Open product questions on the overview and the dom-patch purpose are empty. dom-patch test.md already names the two oracle commands.

## Round 1

### Questions

1. **CHECK paths**: What commands should [[slice-116-patch-attrs-children]] oracle CHECK run.

### Answers

1. **CHECK paths**: The dom-patch spec test.md oracle commands: `node --test tests/dom-patch/patch-style.test.mjs` and `node --test tests/dom-patch/patch-children.test.mjs`. Product peer quotes the spec. Do not invent new tests.

## Candidate A

### Problem

[[slice-116-patch-attrs-children]] is met and archived, but its CHECK lines still name missing flat `tests/patch-style.test.mjs` and `tests/patch-children.test.mjs`. The same basenames pass under `tests/dom-patch/`. Verify cannot treat the met slice as green. Planner must not patch oracles on a slice it did not just freeze.

### Usage (caller's view)

Drain claims one ready AFK task. It rewrites the CHECK and EVIDENCE lines on the archived slice-116 file to the spec paths, then the new slice's oracles are those same commands. Verify later runs the new slice. Nobody resurrects `web-tracers`.

```text
node --test tests/dom-patch/patch-style.test.mjs
node --test tests/dom-patch/patch-children.test.mjs
```

### Shape

One frozen slice in sprint `web-hygiene` grouped on [[location-29-tests]]. Public surface is two CHECK commands copied from the spec. One AFK task owns the archived CHECK rewrite. Complexity hidden: why the paths moved, the closed sprint, the verify ledger. Exposed: the commands and the archived file path.

### Red flags

Not a shallow module: callers run two commands, not an archive resurrection protocol. No leakage of the old flat paths into the new oracles. Not temporal load/validate/save stages. Not a pass-through method.

## Candidate B

### Problem

Same stale CHECK lines.

### Usage (caller's view)

Un-archive `web-tracers`, set slice-116 back to `active` or `shaping`, append a task to its Pool, and drain patches CHECK in place. Verify resumes the original slice.

### Shape

The met slice is the public surface again. Callers must know archive move, status rewind, and that closed sprints can reopen. The closed sprint and the met flag leak into every later sitting.

### Red flags

Temporal decomposition: close, then reopen, then patch, then re-met. Information leakage: archive versus live, and the old flat paths, stay part of the interface. Reject.

## Out of scope

- New dom-patch behaviour
- Editing `docs/specs/`
- Native, mobile, gesture APIs
- Rewriting location destinations
- Other stale CHECK tickets

## Synthesis

Candidate A is the base. Candidate B is rejected: reopening a closed sprint and un-metting slice-116 leaks archive protocol and is temporal decomposition.

Same sprint `web-hygiene` under [[location-29-tests]]. One frozen slice. Oracles are the two spec commands. One AFK task patches archived slice-116 CHECK and EVIDENCE to those paths. No spec ladder task: the dom-patch ladder already names the commands.

### Task-sized cuts

1. **Align slice-116 CHECK paths**. blocked_by: none. AFK. Rewrite the CHECK and EVIDENCE lines on archived [[slice-116-patch-attrs-children]] to the commands named in `docs/specs/ui-framework/dom-patch/test.md`. Do not edit `docs/specs/`. Do not add product code.

## Confirm

Confirmed.

Published [[slice-217-dom-patch-check-paths]] frozen. Pool: [[task-218-align-slice-116-check-paths]]. [[ticket-187-slice-116-stale-check-paths]] promoted.
