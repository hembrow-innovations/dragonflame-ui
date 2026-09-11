---
id: "rounds-189-slice-72-stale-check-paths"
title: "Slice 72 stale CHECK paths"
kind: round
sitting_kind: planning
status: published
tags: ["afk-plan"]
created_at: "2026-09-10T21:13:00Z"
updated_at: "2026-09-10T21:13:00Z"
---

# Slice 72 stale CHECK paths

Counterpart is the product peer. Notebook is this round.

Pick: [[ticket-177-slice-72-stale-check-paths]]. Unblocked open verify ticket. Does not fit [[slice-175-counter-check-paths]] or [[slice-185-unmount-check-path]] (those slices own slice-70 and slice-71 only). [[ticket-171-gesture-apis-unnamed]] is HITL and native-if-funded forbids freeze of press until APIs are named. [[ticket-67-store-formats-unnamed]] and [[ticket-68-phase3-apis-unnamed]] wait on unmet slices.

## Vault pack

Query: freeze a slice so slice-72 oracle CHECK paths match the leaf-kit spec
Area: leaf-kit

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/locations/location-29-tests.md`
- `.heio/planning/locations/location-32-host-leaves.md`
- `.heio/planning/sprints/web-hygiene/shape.md`
- `.heio/archive/planning/sprints/web-tracers/slice-72-leaf-kit-on-dom.md`
- `.heio/planning/tickets/ticket-177-slice-72-stale-check-paths.md`
- `docs/specs/ui-framework/leaf-kit/purpose.md`
- `docs/specs/ui-framework/leaf-kit/contract.md`
- `docs/specs/ui-framework/leaf-kit/test.md`
- `docs/overview/overview-ui-framework.md`

Related:

- `.heio/planning/sprints/web-hygiene/slice-175-counter-check-paths.md`
- `.heio/planning/sprints/web-hygiene/slice-185-unmount-check-path.md`
- `.heio/planning/rounds/rounds-174-slice-70-stale-check-paths.md`
- `.heio/planning/rounds/rounds-184-slice-71-stale-check-path.md`
- `.heio/planning/locations/location-31-web-layout.md`
- `.heio/planning/locations/location-33-style-as-data.md`

Excluded: native freeze, gesture APIs, mobile, JSX, scribble, rewriting location destinations, inventing new leaf-kit behaviour.

Next: freeze one hygiene slice. Do not write `docs/specs/`.

No packer script exists. Assembled by hand. Open product questions on the overview and the leaf-kit purpose are empty. Leaf-kit test.md already names `tests/leaf-kit/` oracle commands.

## Round 1

### Questions

1. **CHECK paths**: What commands should [[slice-72-leaf-kit-on-dom]] oracle CHECK lines run.

### Answers

1. **CHECK paths**: The leaf-kit spec test.md oracle commands: `node --test tests/leaf-kit/leaf-view-text-style.test.mjs`, `node --test tests/leaf-kit/leaf-image-scroll.test.mjs`, `node --test tests/leaf-kit/leaf-input-pressable.test.mjs`. Product peer quotes the spec. Do not invent new tests.

## Candidate A

### Problem

[[slice-72-leaf-kit-on-dom]] is met and archived, but its CHECK lines still name missing flat `tests/leaf-*.test.mjs` paths. The same basenames pass under `tests/leaf-kit/`. Verify cannot treat the met slice as green. Planner must not patch oracles on a slice it did not just freeze.

### Usage (caller's view)

Drain claims one ready AFK task. It rewrites the three CHECK and EVIDENCE lines on the archived slice-72 file to the spec paths, then the new slice's oracles are those same three commands. Verify later runs the new slice. Nobody resurrects `web-tracers`.

```text
node --test tests/leaf-kit/leaf-view-text-style.test.mjs
node --test tests/leaf-kit/leaf-image-scroll.test.mjs
node --test tests/leaf-kit/leaf-input-pressable.test.mjs
```

### Shape

One frozen slice in sprint `web-hygiene` grouped on [[location-29-tests]]. Public surface is three CHECK commands copied from the spec. One AFK task owns the archived CHECK rewrite. Complexity hidden: why the paths moved, the closed sprint, the verify ledger. Exposed: the three commands and the archived file path.

### Red flags

Not a shallow module: callers run three commands, not an archive resurrection protocol. No leakage of the old flat paths into the new oracles. Not temporal load/validate/save stages. Not a pass-through method.

## Candidate B

### Problem

Same stale CHECK lines.

### Usage (caller's view)

Un-archive `web-tracers`, set slice-72 back to `active` or `shaping`, append a task to its Pool, and drain patches CHECK in place. Verify resumes the original slice.

### Shape

The met slice is the public surface again. Callers must know archive move, status rewind, and that closed sprints can reopen. The closed sprint and the met flag leak into every later sitting.

### Red flags

Temporal decomposition: close, then reopen, then patch, then re-met. Information leakage: archive versus live, and the old flat paths, stay part of the interface. Reject.

## Out of scope

- New leaf-kit behaviour
- Editing `docs/specs/`
- Native, mobile, gesture APIs
- Rewriting location destinations
- Other stale CHECK tickets

## Synthesis

Candidate A is the base. Candidate B is rejected: reopening a closed sprint and un-metting slice-72 leaks archive protocol and is temporal decomposition.

Same sprint `web-hygiene` under [[location-29-tests]]. One frozen slice. Oracles are the three spec commands. One AFK task patches archived slice-72 CHECK and EVIDENCE to those paths. No spec ladder task: the leaf-kit ladder already names the commands.

### Task-sized cuts

1. **Align slice-72 CHECK paths** — `blocked_by`: none — AFK — rewrite the three CHECK and EVIDENCE lines on archived [[slice-72-leaf-kit-on-dom]] to the `tests/leaf-kit/` commands named in `docs/specs/ui-framework/leaf-kit/test.md`. Do not edit `docs/specs/`. Do not add product code.

## Confirm

Confirmed.

Published [[slice-190-leaf-kit-check-paths]] frozen. Pool: [[task-191-align-slice-72-check-paths]]. [[ticket-177-slice-72-stale-check-paths]] promoted.
