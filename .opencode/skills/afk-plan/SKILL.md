---
name: afk-plan
description: afk-plan publishes one next slice and its tasks from the roadmap, locations, or tickets, then exits. Use when /afk-plan, a planner loop beside afk-task or afk-slice, or dual AFK loops on one checkout.
---

# afk-plan

One sitting. One next slice plus its tasks. Then exit. Drain is `/afk-task` or `/afk-slice` in another loop on this same checkout.

Load **management** before any write under `.heio/`. Load **design-tree**, **architect**, **to-slices**, **to-tasks**, **principle-intent-ladder-stop**, and **vault-pack**. Load **docs** before any write under `docs/`. Do not write `docs/specs/`; that is drain work.

Same checkout. No git branch. No worktree. Coordination is write lanes and `.loop` lock helpers. Read [references/lanes.md](references/lanes.md) before claiming, allocating ids, or committing.

Counterpart is the **product** peer. Notebook is a round file. Auto-confirm only when the location destination and `docs/` answer the frontier. If they do not, file a HITL ticket and exit. Do not invent product rules.

## 1. Pick

Done when one target slice is named, or the sitting is IDLE.

Arguments may name a slice, location, or ticket. Otherwise pick in this order:

1. If any unblocked `ready` + `mode: afk` task exists, IDLE. Drain owns those.
2. An unblocked `open` ticket that does not fit an existing `frozen` or `active` slice
3. The lowest-numbered `active` location that no slice `See also` links, whose sprint is allowed to freeze
4. IDLE

A ticket is unblocked when `blocked_by` is empty, or every listed id is `met` (slice) or `completed` (task). Look in live folders and `archive/`.

Do not pick:

- A `parked` ticket
- An `open` ticket with unmet `blocked_by`
- An `open` ticket whose home sprint `shape.md` says do not freeze
- A sprint whose shape says do not freeze
- A location whose parent is unfunded
- A second slice
- Work that would rewrite a location destination

IDLE means ready AFK tasks may already exist for drain. Do not invent work. End with `VERDICT: IDLE`.

## 2. Ground

Done when intent, roadmap, the target location, the sprint `shape.md`, linked tickets, and the vault pack for that area have been read in full.

Run **vault-pack**. Read every Must-read path. Empty ladder or a non-empty Open product questions section that this grain needs: file a HITL ticket (`mode` does not apply on tickets; the task would be `mode: hitl` later). Do not freeze. `VERDICT: TICKET`.

## 3. Sketch

Done when the round notebook holds two structurally distinct candidates, each screened against architect `references/design-red-flags.md`.

Copy the management round template if this topic has no sitting. `sitting_kind: planning`. Tags include `afk-plan`. Append a round. Never rewrite an earlier round.

Write usage first, then types, signatures, and a module map, per architect `references/rationale-template.md`. Spawn at most two subagents if useful. They write under `### Candidate A` and `### Candidate B` in the round file. Never create a branch or worktree. If spawn is missing, the parent writes both candidates.

Reject shallow modules, leakage, temporal decomposition, and pass-through methods. Prefer the deeper public surface.

## 4. Synthesize

Done when the round has one synthesis, Confirm says `Confirmed.`, and every task-sized cut is listed: title, `blocked_by`, AFK or HITL, what it delivers.

Prefer AFK. Prefactoring is its own first task and blocks the rest. If no spec ladder exists for the behaviour, the first task writes purpose, contract, and test only.

Open questions the product peer cannot answer stay a HITL ticket. Do not freeze those.

## 5. Publish

Done when exactly one slice is `frozen` with oracles, its task files exist, and `shape.md` lists the slice.

Load **to-slices** then **to-tasks**. Run `node .opencode/skills/management/scripts/planning-next-id.mjs` under the lane lock immediately before each new file. Never eyeball ids.

- Slice status `frozen` only when Done and `EXPECT:` exist. Otherwise leave `shaping` and do not publish tasks
- Tasks `ready`, `mode: afk` or `mode: hitl`, `blocked_by` wired, durable `[[id]]` links on the slice Pool
- Promote the source ticket if this sitting was a ticket
- Do not implement product code
- Do not start another slice

Commit with `node .loop/commit-lane.mjs plan -m "chore(plan): <slice id>" -- <paths>`.

## Loop

End with:

```
VERDICT: TASK | TICKET | ESCALATE | VERIFY | IDLE
EVIDENCE: <one line>
```

Publishing a slice is not VERIFY. VERIFY is drain oracles. ESCALATE if the sitting would rewrite a location destination. IDLE if step 1 found nothing.
