---
id: "rounds-193-slice-73-stale-check-path"
title: "Slice 73 stale CHECK path"
kind: round
sitting_kind: planning
status: published
tags: ["afk-plan"]
created_at: "2026-09-10T21:18:40Z"
updated_at: "2026-09-10T21:18:40Z"
---

# Slice 73 stale CHECK path

Counterpart is the product peer. Notebook is this round.

Pick: [[ticket-178-slice-73-stale-check-path]]. Unblocked open verify ticket. Does not fit [[slice-175-counter-check-paths]], [[slice-185-unmount-check-path]], or [[slice-190-leaf-kit-check-paths]] (those slices own slice-70, slice-71, and slice-72 only). [[ticket-171-gesture-apis-unnamed]] is HITL and native-if-funded forbids freeze of press until APIs are named. [[ticket-67-store-formats-unnamed]] and [[ticket-68-phase3-apis-unnamed]] wait on unmet slices.

## Vault pack

Query: freeze a slice so slice-73 oracle CHECK path matches the a11y-test-ids spec
Area: a11y-test-ids

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/locations/location-29-tests.md`
- `.heio/planning/locations/location-34-a11y-test-ids.md`
- `.heio/planning/sprints/web-hygiene/shape.md`
- `.heio/archive/planning/sprints/web-tracers/slice-73-testid-pressable.md`
- `.heio/planning/tickets/ticket-178-slice-73-stale-check-path.md`
- `docs/specs/ui-framework/a11y-test-ids/purpose.md`
- `docs/specs/ui-framework/a11y-test-ids/contract.md`
- `docs/specs/ui-framework/a11y-test-ids/test.md`
- `docs/overview/overview-ui-framework.md`

Related:

- `.heio/planning/sprints/web-hygiene/slice-175-counter-check-paths.md`
- `.heio/planning/sprints/web-hygiene/slice-185-unmount-check-path.md`
- `.heio/planning/sprints/web-hygiene/slice-190-leaf-kit-check-paths.md`
- `.heio/planning/rounds/rounds-174-slice-70-stale-check-paths.md`
- `.heio/planning/rounds/rounds-184-slice-71-stale-check-path.md`
- `.heio/planning/rounds/rounds-189-slice-72-stale-check-paths.md`

Excluded: native freeze, gesture APIs, mobile, JSX, scribble, rewriting location destinations, inventing new a11y behaviour.

Next: freeze one hygiene slice. Do not write `docs/specs/`.

No packer script exists. Assembled by hand. Open product questions on the overview and the a11y-test-ids purpose are empty. A11y-test-ids test.md already names `tests/a11y-test-ids/` oracle command.

## Round 1

### Questions

1. **CHECK path**: What command should [[slice-73-testid-pressable]] oracle CHECK run.

### Answers

1. **CHECK path**: The a11y-test-ids spec test.md oracle command: `node --test tests/a11y-test-ids/testid-a11y.test.mjs`. Product peer quotes the spec. Do not invent new tests.

## Candidate A

### Problem

[[slice-73-testid-pressable]] is met and archived, but its CHECK line still names missing flat `tests/testid-a11y.test.mjs`. The same basename passes under `tests/a11y-test-ids/`. Verify cannot treat the met slice as green. Planner must not patch oracles on a slice it did not just freeze.

### Usage (caller's view)

Drain claims one ready AFK task. It rewrites the CHECK and EVIDENCE lines on the archived slice-73 file to the spec path, then the new slice's oracle is that same command. Verify later runs the new slice. Nobody resurrects `web-tracers`.

```text
node --test tests/a11y-test-ids/testid-a11y.test.mjs
```

### Shape

One frozen slice in sprint `web-hygiene` grouped on [[location-29-tests]]. Public surface is one CHECK command copied from the spec. One AFK task owns the archived CHECK rewrite. Complexity hidden: why the path moved, the closed sprint, the verify ledger. Exposed: the command and the archived file path.

### Red flags

Not a shallow module: callers run one command, not an archive resurrection protocol. No leakage of the old flat path into the new oracle. Not temporal load/validate/save stages. Not a pass-through method.

## Candidate B

### Problem

Same stale CHECK line.

### Usage (caller's view)

Un-archive `web-tracers`, set slice-73 back to `active` or `shaping`, append a task to its Pool, and drain patches CHECK in place. Verify resumes the original slice.

### Shape

The met slice is the public surface again. Callers must know archive move, status rewind, and that closed sprints can reopen. The closed sprint and the met flag leak into every later sitting.

### Red flags

Temporal decomposition: close, then reopen, then patch, then re-met. Information leakage: archive versus live, and the old flat path, stay part of the interface. Reject.

## Out of scope

- New a11y or test ID behaviour
- Editing `docs/specs/`
- Native, mobile, gesture APIs
- Rewriting location destinations
- Other stale CHECK tickets

## Synthesis

Candidate A is the base. Candidate B is rejected: reopening a closed sprint and un-metting slice-73 leaks archive protocol and is temporal decomposition.

Same sprint `web-hygiene` under [[location-29-tests]]. One frozen slice. Oracle is the spec command. One AFK task patches archived slice-73 CHECK and EVIDENCE to that path. No spec ladder task: the a11y-test-ids ladder already names the command.

### Task-sized cuts

1. **Align slice-73 CHECK path**. blocked_by: none. AFK. Rewrite the CHECK and EVIDENCE lines on archived [[slice-73-testid-pressable]] to the `tests/a11y-test-ids/` command named in `docs/specs/ui-framework/a11y-test-ids/test.md`. Do not edit `docs/specs/`. Do not add product code.

## Confirm

Confirmed.

Published [[slice-194-testid-check-path]] frozen. Pool: [[task-195-align-slice-73-check-path]]. [[ticket-178-slice-73-stale-check-path]] promoted.
