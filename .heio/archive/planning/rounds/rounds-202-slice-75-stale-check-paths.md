---
id: "rounds-202-slice-75-stale-check-paths"
title: "Slice 75 stale CHECK paths"
kind: round
sitting_kind: planning
status: published
tags: ["afk-plan"]
created_at: "2026-09-10T21:31:30Z"
updated_at: "2026-09-10T21:31:30Z"
---

# Slice 75 stale CHECK paths

Counterpart is the product peer. Notebook is this round.

Pick: [[ticket-180-slice-75-stale-check-paths]]. Unblocked open verify ticket. Does not fit [[slice-175-counter-check-paths]], [[slice-185-unmount-check-path]], [[slice-190-leaf-kit-check-paths]], [[slice-194-testid-check-path]], or [[slice-199-raf-check-path]] (those slices own slice-70 through slice-74 only). [[ticket-171-gesture-apis-unnamed]] is HITL and native-if-funded forbids freeze of press until APIs are named. [[ticket-67-store-formats-unnamed]] and [[ticket-68-phase3-apis-unnamed]] wait on unmet slices.

## Vault pack

Query: freeze a slice so slice-75 oracle CHECK paths match the renderer-portability spec
Area: renderer-portability

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/locations/location-29-tests.md`
- `.heio/planning/locations/location-41-renderer-portability.md`
- `.heio/planning/sprints/web-hygiene/shape.md`
- `.heio/archive/planning/sprints/web-tracers/slice-75-portable-web-import.md`
- `.heio/planning/tickets/ticket-180-slice-75-stale-check-paths.md`
- `docs/specs/ui-framework/renderer-portability/purpose.md`
- `docs/specs/ui-framework/renderer-portability/contract.md`
- `docs/specs/ui-framework/renderer-portability/test.md`
- `docs/overview/overview-ui-framework.md`

Related:

- `.heio/planning/sprints/web-hygiene/slice-175-counter-check-paths.md`
- `.heio/planning/sprints/web-hygiene/slice-185-unmount-check-path.md`
- `.heio/planning/sprints/web-hygiene/slice-190-leaf-kit-check-paths.md`
- `.heio/planning/sprints/web-hygiene/slice-194-testid-check-path.md`
- `.heio/planning/sprints/web-hygiene/slice-199-raf-check-path.md`
- `.heio/planning/rounds/rounds-174-slice-70-stale-check-paths.md`
- `.heio/planning/rounds/rounds-184-slice-71-stale-check-path.md`
- `.heio/planning/rounds/rounds-189-slice-72-stale-check-paths.md`
- `.heio/planning/rounds/rounds-193-slice-73-stale-check-path.md`
- `.heio/planning/rounds/rounds-198-slice-74-stale-check-path.md`

Excluded: native freeze, gesture APIs, mobile, JSX, scribble, rewriting location destinations, inventing new portability behaviour.

Next: freeze one hygiene slice. Do not write `docs/specs/`.

No packer script exists. Assembled by hand. Open product questions on the overview and the renderer-portability purpose are empty. Renderer-portability test.md already names `tests/renderer-portability/` oracle commands.

## Round 1

### Questions

1. **CHECK paths**: What commands should [[slice-75-portable-web-import]] oracle CHECK run.

### Answers

1. **CHECK paths**: The renderer-portability spec test.md oracle commands: `node --test tests/renderer-portability/portable-import.test.mjs` and `node --test tests/renderer-portability/portable-wrong-target.test.mjs`. Product peer quotes the spec. Do not invent new tests.

## Candidate A

### Problem

[[slice-75-portable-web-import]] is met and archived, but its CHECK lines still name missing flat `tests/portable-import.test.mjs` and `tests/portable-wrong-target.test.mjs`. The same basenames pass under `tests/renderer-portability/`. Verify cannot treat the met slice as green. Planner must not patch oracles on a slice it did not just freeze.

### Usage (caller's view)

Drain claims one ready AFK task. It rewrites the CHECK and EVIDENCE lines on the archived slice-75 file to the spec paths, then the new slice's oracles are those same commands. Verify later runs the new slice. Nobody resurrects `web-tracers`.

```text
node --test tests/renderer-portability/portable-import.test.mjs
node --test tests/renderer-portability/portable-wrong-target.test.mjs
```

### Shape

One frozen slice in sprint `web-hygiene` grouped on [[location-29-tests]]. Public surface is two CHECK commands copied from the spec. One AFK task owns the archived CHECK rewrite. Complexity hidden: why the paths moved, the closed sprint, the verify ledger. Exposed: the commands and the archived file path.

### Red flags

Not a shallow module: callers run two commands, not an archive resurrection protocol. No leakage of the old flat paths into the new oracles. Not temporal load/validate/save stages. Not a pass-through method.

## Candidate B

### Problem

Same stale CHECK lines.

### Usage (caller's view)

Un-archive `web-tracers`, set slice-75 back to `active` or `shaping`, append a task to its Pool, and drain patches CHECK in place. Verify resumes the original slice.

### Shape

The met slice is the public surface again. Callers must know archive move, status rewind, and that closed sprints can reopen. The closed sprint and the met flag leak into every later sitting.

### Red flags

Temporal decomposition: close, then reopen, then patch, then re-met. Information leakage: archive versus live, and the old flat paths, stay part of the interface. Reject.

## Out of scope

- New renderer-portability behaviour
- Editing `docs/specs/`
- Native, mobile, gesture APIs
- Rewriting location destinations
- Other stale CHECK tickets

## Synthesis

Candidate A is the base. Candidate B is rejected: reopening a closed sprint and un-metting slice-75 leaks archive protocol and is temporal decomposition.

Same sprint `web-hygiene` under [[location-29-tests]]. One frozen slice. Oracles are the two spec commands. One AFK task patches archived slice-75 CHECK and EVIDENCE to those paths. No spec ladder task: the renderer-portability ladder already names the commands.

### Task-sized cuts

1. **Align slice-75 CHECK paths**. blocked_by: none. AFK. Rewrite the CHECK and EVIDENCE lines on archived [[slice-75-portable-web-import]] to the `tests/renderer-portability/` commands named in `docs/specs/ui-framework/renderer-portability/test.md`. Do not edit `docs/specs/`. Do not add product code.

## Confirm

Confirmed.

Published [[slice-203-portable-check-paths]] frozen. Pool: [[task-204-align-slice-75-check-paths]]. [[ticket-180-slice-75-stale-check-paths]] promoted.
