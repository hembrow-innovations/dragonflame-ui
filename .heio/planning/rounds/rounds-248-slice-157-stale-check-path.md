---
id: "rounds-248-slice-157-stale-check-path"
title: "Slice 157 stale CHECK path"
kind: round
sitting_kind: planning
status: published
tags: ["afk-plan"]
created_at: "2026-09-10T22:58:36Z"
updated_at: "2026-09-10T22:58:36Z"
---

# Slice 157 stale CHECK path

Counterpart is the product peer. Notebook is this round.

Pick: [[ticket-245-slice-157-stale-check-path]]. Unblocked open verify ticket. Does not fit [[slice-246-host-config-check-paths]] or earlier web-hygiene slices (those slices own slice-70 through slice-75, slice-85, slice-107, slice-112, slice-116, slice-121, slice-125, slice-129, slice-133, slice-137, slice-141, slice-145, slice-149, and slice-153 only). [[ticket-171-gesture-apis-unnamed]] is HITL and native-if-funded forbids freeze of press until APIs are named. [[ticket-67-store-formats-unnamed]] and [[ticket-68-phase3-apis-unnamed]] wait on unmet slices. The live AFK task is claimed, not ready.

## Vault pack

Query: freeze a slice so slice-157 oracle CHECK path matches the portability-metal spec
Area: portability-metal

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/locations/location-41-renderer-portability.md`
- `.heio/planning/locations/location-29-tests.md`
- `.heio/planning/sprints/web-hygiene/shape.md`
- `.heio/archive/planning/sprints/web-tracers/slice-157-portability-metal-honesty.md`
- `.heio/planning/tickets/ticket-245-slice-157-stale-check-path.md`
- `docs/specs/ui-framework/portability-metal/purpose.md`
- `docs/specs/ui-framework/portability-metal/contract.md`
- `docs/specs/ui-framework/portability-metal/test.md`
- `docs/overview/overview-ui-framework.md`

Related:

- `.heio/planning/sprints/web-hygiene/slice-246-host-config-check-paths.md`
- `.heio/planning/rounds/rounds-245-slice-153-stale-check-paths.md`
- `.heio/archive/planning/sprints/web-tracers/shape.md`

Excluded: native freeze, gesture APIs, mobile, rewriting location destinations, inventing new portability-metal behaviour.

Next: freeze one hygiene slice. Do not write `docs/specs/`.

No packer script exists. Assembled by hand. Open product questions on the overview and the portability-metal purpose are empty. portability-metal test.md already names the oracle command.

## Round 1

### Questions

1. **CHECK path**: What command should [[slice-157-portability-metal-honesty]] oracle CHECK run.

### Answers

1. **CHECK path**: The portability-metal spec test.md oracle command: `node --test tests/portability-metal/portable-metal.test.mjs`. Product peer quotes the spec. Do not invent new tests.

## Candidate A

### Problem

[[slice-157-portability-metal-honesty]] is met and archived, but its CHECK line still names missing flat `tests/portable-metal.test.mjs`. The same basename passes under `tests/portability-metal/`. Verify cannot treat the met slice as green. Planner must not patch oracles on a slice it did not just freeze.

### Usage (caller's view)

Drain claims one ready AFK task. It rewrites the CHECK and EVIDENCE lines on the archived slice-157 file to the spec path, then the new slice's oracle is that same command. Verify later runs the new slice. Nobody resurrects `web-tracers`.

```text
node --test tests/portability-metal/portable-metal.test.mjs
```

### Shape

One frozen slice in sprint `web-hygiene` grouped on [[location-29-tests]]. Public surface is one CHECK command copied from the spec. One AFK task owns the archived CHECK rewrite. Complexity hidden: why the path moved, the closed sprint, the verify ledger. Exposed: the command and the archived file path.

### Red flags

Not a shallow module: callers run one command, not an archive resurrection protocol. No leakage of the old flat path into the new oracle. Not temporal load/validate/save stages. Not a pass-through method.

## Candidate B

### Problem

Same stale CHECK line.

### Usage (caller's view)

Un-archive `web-tracers`, set slice-157 back to `active` or `shaping`, append a task to its Pool, and drain patches CHECK in place. Verify resumes the original slice.

### Shape

The met slice is the public surface again. Callers must know archive move, status rewind, and that closed sprints can reopen. The closed sprint and the met flag leak into every later sitting.

### Red flags

Temporal decomposition: close, then reopen, then patch, then re-met. Information leakage: archive versus live, and the old flat path, stay part of the interface. Reject.

## Out of scope

- New portability-metal behaviour
- Editing `docs/specs/`
- Native, mobile, gesture APIs
- Rewriting location destinations
- Other stale CHECK tickets

## Synthesis

Candidate A is the base. Candidate B is rejected: reopening a closed sprint and un-metting slice-157 leaks archive protocol and is temporal decomposition.

Same sprint `web-hygiene` under [[location-29-tests]]. One frozen slice. Oracle is the spec command. One AFK task patches archived slice-157 CHECK and EVIDENCE to that path. No spec ladder task: the portability-metal ladder already names the command.

### Task-sized cuts

1. **Align slice-157 CHECK path**. blocked_by: none. AFK. Rewrite the CHECK and EVIDENCE lines on archived [[slice-157-portability-metal-honesty]] to the command named in `docs/specs/ui-framework/portability-metal/test.md`. Do not edit `docs/specs/`. Do not add product code.

## Confirm

Confirmed.

Published [[slice-249-portability-metal-check-path]] frozen. Pool: [[task-250-align-slice-157-check-path]]. [[ticket-245-slice-157-stale-check-path]] promoted.
