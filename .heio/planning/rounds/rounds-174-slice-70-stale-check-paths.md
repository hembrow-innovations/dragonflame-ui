---
id: "rounds-174-slice-70-stale-check-paths"
title: "Slice 70 stale CHECK paths"
kind: round
sitting_kind: planning
status: published
tags: ["afk-plan"]
created_at: "2026-09-10T20:13:34Z"
updated_at: "2026-09-10T20:14:00Z"
---

# Slice 70 stale CHECK paths

Counterpart is the product peer. Notebook is this round.

Pick: [[ticket-173-slice-70-stale-check-paths]]. Unblocked open verify ticket. Does not fit [[slice-76-desktop-vsync-window]] or [[slice-77-draw-a-rect]].

## Vault pack

Query: freeze a slice so slice-70 oracle CHECK paths match the counter spec
Area: counter

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/locations/location-29-tests.md`
- `.heio/archive/planning/sprints/web-tracers/shape.md`
- `.heio/archive/planning/sprints/web-tracers/slice-70-counter-on-dom.md`
- `.heio/planning/tickets/ticket-173-slice-70-stale-check-paths.md`
- `docs/specs/ui-framework/counter/purpose.md`
- `docs/specs/ui-framework/counter/contract.md`
- `docs/specs/ui-framework/counter/test.md`
- `docs/overview/overview-ui-framework.md`

Related:

- `.heio/planning/sprints/native-if-funded/shape.md`
- `.heio/planning/rounds/rounds-170-afk-verify.md`

Excluded: native freeze, gesture APIs, mobile, JSX, scribble, rewriting location destinations, inventing new counter behaviour.

Next: freeze one hygiene slice. Do not write `docs/specs/`.

No packer script exists. Assembled by hand. Open product questions on the overview and the counter purpose are empty. Counter test.md already names `tests/counter/` oracle commands.

## Round 1

### Questions

1. **CHECK paths**: What commands should [[slice-70-counter-on-dom]] oracle CHECK lines run.

### Answers

1. **CHECK paths**: The counter spec test.md oracle commands: `node --test tests/counter/counter-static-h.test.mjs`, `node --test tests/counter/counter-signal-patch.test.mjs`, `node --test tests/counter/counter-run-once.test.mjs`. Product peer quotes the spec. Do not invent new tests.

## Candidate A

### Problem

[[slice-70-counter-on-dom]] is met and archived, but its CHECK lines still name missing flat `tests/counter-*.test.mjs` paths. The same basenames pass under `tests/counter/`. Verify cannot treat the met slice as green. Planner must not patch oracles on a slice it did not just freeze.

### Usage (caller's view)

Drain claims one ready AFK task. It rewrites the three CHECK and EVIDENCE lines on the archived slice-70 file to the spec paths, then the new slice's oracles are those same three commands. Verify later runs the new slice. Nobody resurrects `web-tracers`.

```text
node --test tests/counter/counter-static-h.test.mjs
node --test tests/counter/counter-signal-patch.test.mjs
node --test tests/counter/counter-run-once.test.mjs
```

### Shape

One frozen slice in a new sprint `web-hygiene` grouped on [[location-29-tests]]. Public surface is three CHECK commands copied from the spec. One AFK task owns the archived CHECK rewrite. Complexity hidden: why the paths moved, the closed sprint, the verify ledger. Exposed: the three commands and the archived file path.

### Red flags

Not a shallow module: callers run three commands, not an archive resurrection protocol. No leakage of the old flat paths into the new oracles. Not temporal load/validate/save stages. Not a pass-through method.

## Candidate B

### Problem

Same stale CHECK lines.

### Usage (caller's view)

Un-archive `web-tracers`, set slice-70 back to `active` or `shaping`, append a task to its Pool, and drain patches CHECK in place. Verify resumes the original slice.

### Shape

The met slice is the public surface again. Callers must know archive move, status rewind, and that closed sprints can reopen. The closed sprint and the met flag leak into every later sitting.

### Red flags

Temporal decomposition: close, then reopen, then patch, then re-met. Information leakage: archive versus live, and the old flat paths, stay part of the interface. Reject.

## Out of scope

- New counter behaviour
- Editing `docs/specs/`
- Native, mobile, gesture APIs
- Rewriting location destinations

## Synthesis

Candidate A is the base. Candidate B is rejected: reopening a closed sprint and un-metting slice-70 leaks archive protocol and is temporal decomposition.

New sprint `web-hygiene` under [[location-29-tests]]. One frozen slice. Oracles are the three spec commands. One AFK task patches archived slice-70 CHECK and EVIDENCE to those paths. No spec ladder task: the counter ladder already names the commands.

### Task-sized cuts

1. **Align slice-70 CHECK paths** — `blocked_by`: none — AFK — rewrite the three CHECK and EVIDENCE lines on archived [[slice-70-counter-on-dom]] to the `tests/counter/` commands named in `docs/specs/ui-framework/counter/test.md`. Do not edit `docs/specs/`. Do not add product code.

## Confirm

Confirmed.

Published [[slice-175-counter-check-paths]] frozen. Pool: [[task-176-align-slice-70-check-paths]]. [[ticket-173-slice-70-stale-check-paths]] promoted.
