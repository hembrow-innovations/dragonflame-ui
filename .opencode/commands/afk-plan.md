---
description: Autonomously plan exactly one slice and its AFK tasks from a roadmap, location, or ticket, then exit.
agent: build
argument-hint: "[slice | location | ticket]"
subtask: false
---

You are an autonomous agent planning exactly ONE slice, then exiting.
Load **management** for paths, status, and frontmatter.
Load **docs** before any write under `docs/`.
Load **triage** for working with tickets.
Load **design-tree**, **architect**, **to-slices**, **to-tasks**, **principle-intent-ladder-stop**, **vault-pack**.

Arguments: $ARGUMENTS

This is not `/afk-task`, not `/afk-slice`, and not `/afk-verify`.
Do not implement product code. Do not write `docs/specs/` (drain work).
Do not run scripts under `.loop/`. Glob and read the notes.
Same checkout as `/afk-task` and `/afk-verify`. No git branch. No worktree.
Do not file HITL. Do not park. Do not wait. Do not ask the user. Auto-confirm.
One slice plus its tasks, then exit.

- If a path, id, or slug is given, glob that file. Use it only if it is allowed to freeze. If it is `shaping`, plan that slice out completely. If it is a location, plan one slice from that location's next unnamed grain. If it is forbidden, ESCALATE or IDLE. Do not silently pick a different target.
- Otherwise pick in this order. Stop at the first hit.
  Ready AFK tasks and existing `frozen` or `active` slices do not idle this sitting. Do not glob tasks to decide whether to plan. Drain owns execution. This sitting still plans.
  1. Glob `.heio/planning/tickets/ticket-*.md`. Lowest-numbered unblocked `open` ticket that does not fit an existing `frozen` or `active` slice, and that no `afk-plan` round already mentions `[[id]]` unless the ticket `updated_at` is newer than that round.
  2. Glob `.heio/planning/sprints/**/slice-*.md`. Lowest-numbered `shaping` slice whose `blocked_by` ids are `met` or `abandoned`.
  3. Map. Read `.heio/planning/roadmap.md`, then `.heio/planning/locations/location-*.md`. Scan live and archive slice `See also` for `[[location-...]]` links.
     Walk the live sprint's parent location first, then remaining roadmap parents in document order. Skip unfunded parents and destinations that wait on a human decision.
     First hit:
     a. Lowest-numbered nested location file under that parent that no live or archive slice `See also` links.
     b. Else the first Nested locations bullet under a linked location whose destination sentence is not already a slice Done or oracle.
     Plan exactly one slice for that grain. Cite the location destination. Do not mint a new location file.
     Put the slice in the live sprint that names that parent and may freeze. If that sprint is closed or missing, copy `templates/sprint-shape.md` into a new `active` sprint folder named from the parent location slug, then freeze this one slice into it. Do not reopen an archived sprint folder. Do not open a new sprint to bypass a live shape that says do not freeze.
  4. IDLE. The map has no remaining funded unnamed grain.

A ticket is unblocked when `blocked_by` is empty, or every listed id is `met` (slice) or `completed` (task). Look in live folders and `archive/`.

Do not pick:
- A `parked` ticket
- An `open` ticket with unmet `blocked_by`
- An `open` ticket whose home sprint `shape.md` says do not freeze
- A sprint whose shape says do not freeze
- A location whose parent is unfunded
- A destination that waits on a human decision
- A nested bet already named by a slice Done or oracle
- A second slice
- Work that would rewrite a location destination

IDLE means no pick. End with `VERDICT: IDLE`. Do not copy a round template. Do not append a round. Do not commit.

Allowed writes: `.heio/planning/sprints/`, `tasks/`, `tickets/`, `rounds/`, and archive moves of tickets or rounds. Cite the location destination plus `docs/`. Never rewrite a location destination.

## Workflow

1. Ground. Read intent, roadmap, the target location, the sprint `shape.md`, linked tickets, and the vault pack for that area. Run **vault-pack**. Read every Must-read path. If a path is missing, skip it and keep going. Empty ladder: freeze anyway. Non-empty Open product questions: answer them in the round with the location destination plus `docs/` or the smallest reversible default, then freeze. When `docs/` is silent, still freeze. That default is the product answer for this sitting. Do not stop to ask.

2. Sketch. Copy the management round template if this topic has no sitting. `sitting_kind: planning`. Tags include `afk-plan`. Append a round. Never rewrite an earlier round. Write usage first, then types, signatures, and a module map, per architect `references/rationale-template.md`. Spawn at most two subagents in parallel to write `### Candidate A` and `### Candidate B` in the same round file. If spawn is missing or a subagent does not return, the parent writes that candidate itself in the same turn. Do not wait. Do not open a second sitting. Screen both against architect `references/design-red-flags.md`. Reject shallow modules, leakage, temporal decomposition, and pass-through methods. Prefer the deeper public surface.

3. Synthesize. Pick one candidate. Write the synthesis in the round. Write `Confirmed.` yourself. Do not wait for a human Confirm. List every task-sized cut: title, `blocked_by`, what it delivers. All tasks `mode: afk`. If a cut looks HITL, set `mode: afk` and keep it. Prefactoring is its own first task and blocks the rest. If no spec ladder exists for the behaviour, the first task writes purpose, contract, and test only.

4. Publish. Load **to-slices** then **to-tasks**. Run `node .opencode/skills/management/scripts/planning-next-id.mjs` immediately before each new file. Never eyeball ids. Write Done and `EXPECT:` from the location destination plus `docs/` or the smallest reversible default if they are missing. Then set the slice `status: frozen`. Do not leave a slice in `shaping` because oracles were empty. Wire tasks `ready`, `mode: afk`, `blocked_by` set, durable `[[id]]` links on the slice Pool. List the slice in `shape.md`. Promote the source ticket if this sitting started from a ticket. Do not implement product code. Do not start another slice.

5. `git add -- <paths>` then `git commit -m "chore(plan): <slice id>" -- <paths>`. Paths stay under `.heio/planning/sprints/`, `tasks/`, `tickets/`, `rounds/`, and archive tickets or rounds. Then exit.

## Rules

- One slice. Never touch other slice files except this one's `blocked_by` reads.
- Same checkout. No git branch. No worktree. Do not run an `/afk-plan` sitting beside an `/afk-task` or `/afk-slice` loop.
- Create a ticket if something belongs to the project, not this slice. Then keep planning this slice. Do not follow the new ticket.
- If a required note is missing, treat it as silent and use the smallest reversible default. Missing notes are not a wait.
- If a subagent fails, continue on the parent. Failure of spawn is not ESCALATE.
- ESCALATE only if the sitting would rewrite a location destination. Write `VERDICT: ESCALATE` and stop. Do not park.
- Do not invent product code. Do not write `docs/specs/`.

## Verdict

End with exactly:

```
VERDICT: TASK | TICKET | ESCALATE | VERIFY | IDLE
EVIDENCE: <one line>
```

- **Published one frozen slice and its ready AFK tasks**: `TASK`
- **Sitting started from a ticket and that ticket was promoted into the published slice**: `TICKET`
- **No pickable ticket, shaping slice, or funded unnamed grain**: `IDLE`
- **Sitting would rewrite a location destination**: `ESCALATE`
- **Never from this command**: `VERIFY`

Publishing a slice is not `VERIFY`. `VERIFY` is drain oracles.
