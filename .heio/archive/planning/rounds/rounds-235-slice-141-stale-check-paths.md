---
id: "rounds-235-slice-141-stale-check-paths"
title: "Slice 141 stale CHECK paths"
kind: round
sitting_kind: planning
status: published
tags: ["afk-plan"]
created_at: "2026-09-10T22:31:36Z"
updated_at: "2026-09-10T22:31:36Z"
---

# Slice 141 stale CHECK paths

Counterpart is the product peer. Notebook is this round.

Pick: [[ticket-205-slice-141-stale-check-paths]]. Unblocked open verify ticket. Does not fit [[slice-175-counter-check-paths]], [[slice-185-unmount-check-path]], [[slice-190-leaf-kit-check-paths]], [[slice-194-testid-check-path]], [[slice-199-raf-check-path]], [[slice-203-portable-check-paths]], [[slice-207-absence-check-paths]], [[slice-210-composite-check-paths]], [[slice-213-js-backend-check-paths]], [[slice-217-dom-patch-check-paths]], [[slice-221-dom-only-host-check-paths]], [[slice-224-component-check-paths]], [[slice-227-signal-dirtying-check-paths]], [[slice-230-crate-workspace-check-paths]], or [[slice-233-render-object-check-paths]] (those slices own slice-70 through slice-75, slice-85, slice-107, slice-112, slice-116, slice-121, slice-125, slice-129, slice-133, and slice-137 only). [[ticket-171-gesture-apis-unnamed]] is HITL and native-if-funded forbids freeze of press until APIs are named. [[ticket-67-store-formats-unnamed]] and [[ticket-68-phase3-apis-unnamed]] wait on unmet slices. No unblocked ready AFK task.

## Vault pack

Query: freeze a slice so slice-141 oracle CHECK paths match the web-layout spec
Area: web-layout

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/locations/location-31-web-layout.md`
- `.heio/planning/locations/location-29-tests.md`
- `.heio/planning/sprints/web-hygiene/shape.md`
- `.heio/archive/planning/sprints/web-tracers/slice-141-web-layout-honesty.md`
- `.heio/planning/tickets/ticket-205-slice-141-stale-check-paths.md`
- `docs/specs/ui-framework/web-layout/purpose.md`
- `docs/specs/ui-framework/web-layout/contract.md`
- `docs/specs/ui-framework/web-layout/test.md`
- `docs/overview/overview-ui-framework.md`

Related:

- `.heio/planning/sprints/web-hygiene/slice-233-render-object-check-paths.md`
- `.heio/planning/rounds/rounds-232-slice-137-stale-check-paths.md`
- `.heio/archive/planning/sprints/web-tracers/shape.md`

Excluded: native freeze, gesture APIs, mobile, rewriting location destinations, inventing new web-layout behaviour.

Next: freeze one hygiene slice. Do not write `docs/specs/`.

No packer script exists. Assembled by hand. Open product questions on the overview and the web-layout purpose are empty. web-layout test.md already names the two oracle commands.

## Round 1

### Questions

1. **CHECK paths**: What commands should [[slice-141-web-layout-honesty]] oracle CHECK run.

### Answers

1. **CHECK paths**: The web-layout spec test.md oracle commands: `node --test tests/web-layout/no-taffy-on-web.test.mjs` and `node --test tests/web-layout/no-impeller-dom.test.mjs`. Product peer quotes the spec. Do not invent new tests.

## Candidate A

### Problem

[[slice-141-web-layout-honesty]] is met and archived, but its CHECK lines still name missing flat `tests/no-taffy-on-web.test.mjs` and `tests/no-impeller-dom.test.mjs`. The same basenames pass under `tests/web-layout/`. Verify cannot treat the met slice as green. Planner must not patch oracles on a slice it did not just freeze.

### Usage (caller's view)

Drain claims one ready AFK task. It rewrites the CHECK and EVIDENCE lines on the archived slice-141 file to the spec paths, then the new slice's oracles are those same commands. Verify later runs the new slice. Nobody resurrects `web-tracers`.

```text
node --test tests/web-layout/no-taffy-on-web.test.mjs
node --test tests/web-layout/no-impeller-dom.test.mjs
```

### Shape

One frozen slice in sprint `web-hygiene` grouped on [[location-29-tests]]. Public surface is two CHECK commands copied from the spec. One AFK task owns the archived CHECK rewrite. Complexity hidden: why the paths moved, the closed sprint, the verify ledger. Exposed: the commands and the archived file path.

### Red flags

Not a shallow module: callers run two commands, not an archive resurrection protocol. No leakage of the old flat paths into the new oracles. Not temporal load/validate/save stages. Not a pass-through method.

## Candidate B

### Problem

Same stale CHECK lines.

### Usage (caller's view)

Freeze a hygiene slice whose oracles only rewrite O1 to `tests/web-layout/no-taffy-on-web.test.mjs`. Leave O2 pointing at missing `tests/no-impeller-dom.test.mjs`. File another ticket later for O2.

### Shape

Callers still see the old flat basename as part of the web-layout surface. Completing one spec area needs two sittings. The second path leaks as a second public cut.

### Red flags

Information leakage: the old flat path stays on the interface after the spec moved both tests. Shallow: the new slice does not hide the folder move. Reject.

## Out of scope

- New web-layout behaviour
- Editing `docs/specs/`
- Native, mobile, gesture APIs
- Rewriting location destinations
- Other stale CHECK tickets

## Synthesis

Candidate A is the base. Candidate B is rejected: leaving O2 on the missing flat path leaks the old layout and leaves verify red.

Same sprint `web-hygiene` under [[location-29-tests]]. One frozen slice. Oracles are the two spec commands. One AFK task patches archived slice-141 CHECK and EVIDENCE to those paths. No spec ladder task: the web-layout ladder already names the commands.

### Task-sized cuts

1. **Align slice-141 CHECK paths**. blocked_by: none. AFK. Rewrite the CHECK and EVIDENCE lines on archived [[slice-141-web-layout-honesty]] to the commands named in `docs/specs/ui-framework/web-layout/test.md`. Do not edit `docs/specs/`. Do not add product code.

## Confirm

Confirmed.

Published [[slice-236-web-layout-check-paths]] frozen. Pool: [[task-237-align-slice-141-check-paths]]. [[ticket-205-slice-141-stale-check-paths]] promoted.
