---
id: "rounds-184-slice-71-stale-check-path"
title: "Slice 71 stale CHECK path"
kind: round
sitting_kind: planning
status: published
tags: ["afk-plan"]
created_at: "2026-09-10T21:07:00Z"
updated_at: "2026-09-10T21:07:00Z"
---

# Slice 71 stale CHECK path

Counterpart is the product peer. Notebook is this round.

Pick: [[ticket-175-slice-71-stale-check-path]]. Unblocked open verify ticket. Does not fit [[slice-175-counter-check-paths]] (that slice owns slice-70 only). [[ticket-171-gesture-apis-unnamed]] is HITL and native-if-funded forbids freeze of press until APIs are named.

## Vault pack

Query: freeze a slice so slice-71 oracle CHECK path matches the owner spec
Area: owner

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/locations/location-25-owner.md`
- `.heio/planning/locations/location-29-tests.md`
- `.heio/planning/sprints/web-hygiene/shape.md`
- `.heio/archive/planning/sprints/web-tracers/slice-71-unmount-disposes.md`
- `.heio/planning/tickets/ticket-175-slice-71-stale-check-path.md`
- `docs/specs/ui-framework/owner/purpose.md`
- `docs/specs/ui-framework/owner/contract.md`
- `docs/specs/ui-framework/owner/test.md`
- `docs/overview/overview-ui-framework.md`

Related:

- `.heio/planning/sprints/web-hygiene/slice-175-counter-check-paths.md`
- `.heio/planning/rounds/rounds-174-slice-70-stale-check-paths.md`
- `.heio/archive/planning/sprints/web-tracers/shape.md`

Excluded: native freeze, gesture APIs, mobile, JSX, scribble, rewriting location destinations, inventing new owner behaviour.

Next: freeze one hygiene slice. Do not write `docs/specs/`.

No packer script exists. Assembled by hand. Open product questions on the overview and the owner purpose are empty. Owner test.md already names `tests/owner/` oracle command.

## Round 1

### Questions

1. **CHECK path**: What command should [[slice-71-unmount-disposes]] oracle CHECK run.

### Answers

1. **CHECK path**: The owner spec test.md oracle command: `node --test tests/owner/owner-dispose.test.mjs`. Product peer quotes the spec. Do not invent new tests.

## Candidate A

### Problem

[[slice-71-unmount-disposes]] is met and archived, but its CHECK line still names missing flat `tests/owner-dispose.test.mjs`. The same basename passes under `tests/owner/`. Verify cannot treat the met slice as green. Planner must not patch oracles on a slice it did not just freeze.

### Usage (caller's view)

Drain claims one ready AFK task. It rewrites the CHECK and EVIDENCE lines on the archived slice-71 file to the spec path, then the new slice's oracle is that same command. Verify later runs the new slice. Nobody resurrects `web-tracers`.

```text
node --test tests/owner/owner-dispose.test.mjs
```

### Shape

One frozen slice in sprint `web-hygiene` grouped on [[location-29-tests]]. Public surface is one CHECK command copied from the spec. One AFK task owns the archived CHECK rewrite. Complexity hidden: why the path moved, the closed sprint, the verify ledger. Exposed: the command and the archived file path.

### Red flags

Not a shallow module: callers run one command, not an archive resurrection protocol. No leakage of the old flat path into the new oracle. Not temporal load/validate/save stages. Not a pass-through method.

## Candidate B

### Problem

Same stale CHECK line.

### Usage (caller's view)

Un-archive `web-tracers`, set slice-71 back to `active` or `shaping`, append a task to its Pool, and drain patches CHECK in place. Verify resumes the original slice.

### Shape

The met slice is the public surface again. Callers must know archive move, status rewind, and that closed sprints can reopen. The closed sprint and the met flag leak into every later sitting.

### Red flags

Temporal decomposition: close, then reopen, then patch, then re-met. Information leakage: archive versus live, and the old flat path, stay part of the interface. Reject.

## Out of scope

- New owner behaviour
- Editing `docs/specs/`
- Native, mobile, gesture APIs
- Rewriting location destinations
- Other stale CHECK tickets

## Synthesis

Candidate A is the base. Candidate B is rejected: reopening a closed sprint and un-metting slice-71 leaks archive protocol and is temporal decomposition.

Same sprint `web-hygiene` under [[location-29-tests]]. One frozen slice. Oracle is the spec command. One AFK task patches archived slice-71 CHECK and EVIDENCE to that path. No spec ladder task: the owner ladder already names the command.

### Task-sized cuts

1. **Align slice-71 CHECK path** — `blocked_by`: none — AFK — rewrite the CHECK and EVIDENCE lines on archived [[slice-71-unmount-disposes]] to the `tests/owner/` command named in `docs/specs/ui-framework/owner/test.md`. Do not edit `docs/specs/`. Do not add product code.

## Confirm

Confirmed.

Published [[slice-185-unmount-check-path]] frozen. Pool: [[task-186-align-slice-71-check-path]]. [[ticket-175-slice-71-stale-check-path]] promoted.
