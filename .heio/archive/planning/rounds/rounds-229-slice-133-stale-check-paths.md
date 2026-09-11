---
id: "rounds-229-slice-133-stale-check-paths"
title: "Slice 133 stale CHECK paths"
kind: round
sitting_kind: planning
status: published
tags: ["afk-plan"]
created_at: "2026-09-10T22:18:12Z"
updated_at: "2026-09-10T22:18:12Z"
---

# Slice 133 stale CHECK paths

Counterpart is the product peer. Notebook is this round.

Pick: [[ticket-197-slice-133-stale-check-path]]. Unblocked open verify ticket. Does not fit [[slice-175-counter-check-paths]], [[slice-185-unmount-check-path]], [[slice-190-leaf-kit-check-paths]], [[slice-194-testid-check-path]], [[slice-199-raf-check-path]], [[slice-203-portable-check-paths]], [[slice-207-absence-check-paths]], [[slice-210-composite-check-paths]], [[slice-213-js-backend-check-paths]], [[slice-217-dom-patch-check-paths]], [[slice-221-dom-only-host-check-paths]], [[slice-224-component-check-paths]], or [[slice-227-signal-dirtying-check-paths]] (those slices own slice-70 through slice-75, slice-85, slice-107, slice-112, slice-116, slice-121, slice-125, and slice-129 only). [[ticket-171-gesture-apis-unnamed]] is HITL and native-if-funded forbids freeze of press until APIs are named. [[ticket-67-store-formats-unnamed]] and [[ticket-68-phase3-apis-unnamed]] wait on unmet slices. No unblocked ready AFK task.

## Vault pack

Query: freeze a slice so slice-133 oracle CHECK paths match the crate-workspace spec
Area: crate-workspace

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/locations/location-22-crate-layout.md`
- `.heio/planning/locations/location-29-tests.md`
- `.heio/planning/sprints/web-hygiene/shape.md`
- `.heio/archive/planning/sprints/web-tracers/slice-133-crate-workspace-honesty.md`
- `.heio/planning/tickets/ticket-197-slice-133-stale-check-path.md`
- `docs/specs/ui-framework/crate-workspace/purpose.md`
- `docs/specs/ui-framework/crate-workspace/contract.md`
- `docs/specs/ui-framework/crate-workspace/test.md`
- `docs/overview/overview-ui-framework.md`

Related:

- `.heio/planning/sprints/web-hygiene/slice-227-signal-dirtying-check-paths.md`
- `.heio/planning/rounds/rounds-226-slice-129-stale-check-paths.md`
- `.heio/archive/planning/sprints/web-tracers/shape.md`

Excluded: native freeze, gesture APIs, mobile, rewriting location destinations, inventing new crate-workspace behaviour.

Next: freeze one hygiene slice. Do not write `docs/specs/`.

No packer script exists. Assembled by hand. Open product questions on the overview and the crate-workspace purpose are empty. crate-workspace test.md already names the two oracle commands. Native is funded, so the spec replaced the unfunded no-cargo-workspace command with funded-cargo-workspace.

## Round 1

### Questions

1. **CHECK paths**: What commands should [[slice-133-crate-workspace-honesty]] oracle CHECK run.

### Answers

1. **CHECK paths**: The crate-workspace spec test.md oracle commands: `node --test tests/crate-workspace/funded-cargo-workspace.test.mjs` and `node --test tests/crate-workspace/no-toolchain-workspace.test.mjs`. Product peer quotes the spec. Do not invent new tests.

## Candidate A

### Problem

[[slice-133-crate-workspace-honesty]] is met and archived, but its CHECK lines still name missing flat `tests/no-cargo-workspace.test.mjs` and `tests/no-toolchain-workspace.test.mjs`. The toolchain basename passes under `tests/crate-workspace/`. The unfunded no-cargo-workspace command is gone; the spec names `tests/crate-workspace/funded-cargo-workspace.test.mjs` because native is funded. Verify cannot treat the met slice as green. Planner must not patch oracles on a slice it did not just freeze.

### Usage (caller's view)

Drain claims one ready AFK task. It rewrites the CHECK and EVIDENCE lines on the archived slice-133 file to the spec paths, then the new slice's oracles are those same commands. Verify later runs the new slice. Nobody resurrects `web-tracers`.

```text
node --test tests/crate-workspace/funded-cargo-workspace.test.mjs
node --test tests/crate-workspace/no-toolchain-workspace.test.mjs
```

### Shape

One frozen slice in sprint `web-hygiene` grouped on [[location-29-tests]]. Public surface is two CHECK commands copied from the spec. One AFK task owns the archived CHECK rewrite. Complexity hidden: why the paths moved, why O1 was renamed after funding, the closed sprint, the verify ledger. Exposed: the commands and the archived file path.

### Red flags

Not a shallow module: callers run two commands, not an archive resurrection protocol. No leakage of the old flat paths or the unfunded no-cargo-workspace command into the new oracles. Not temporal load/validate/save stages. Not a pass-through method.

## Candidate B

### Problem

Same stale CHECK lines.

### Usage (caller's view)

Freeze a hygiene slice whose oracles only rewrite O2 to `tests/crate-workspace/no-toolchain-workspace.test.mjs`. Leave O1 pointing at missing `tests/no-cargo-workspace.test.mjs`. File another ticket later for the funded rename.

### Shape

Callers still see the unfunded no-workspace command as part of the crate-workspace surface. Completing one spec area needs two sittings. The funded-workspace rename leaks as a second public cut.

### Red flags

Information leakage: the old unfunded command stays on the interface after the spec replaced it. Shallow: the new slice does not hide the funded rename. Reject.

## Out of scope

- New crate-workspace behaviour
- Editing `docs/specs/`
- Native, mobile, gesture APIs
- Rewriting location destinations
- Other stale CHECK tickets

## Synthesis

Candidate A is the base. Candidate B is rejected: leaving O1 on the missing unfunded command leaks the old rule and leaves verify red.

Same sprint `web-hygiene` under [[location-29-tests]]. One frozen slice. Oracles are the two spec commands. One AFK task patches archived slice-133 CHECK and EVIDENCE to those paths. No spec ladder task: the crate-workspace ladder already names the commands.

### Task-sized cuts

1. **Align slice-133 CHECK paths**. blocked_by: none. AFK. Rewrite the CHECK and EVIDENCE lines on archived [[slice-133-crate-workspace-honesty]] to the commands named in `docs/specs/ui-framework/crate-workspace/test.md`. Update the O1 oracle label to match the funded-workspace test. Do not edit `docs/specs/`. Do not add product code.

## Confirm

Confirmed.

Published [[slice-230-crate-workspace-check-paths]] frozen. Pool: [[task-231-align-slice-133-check-paths]]. [[ticket-197-slice-133-stale-check-path]] promoted.
