---
name: afk-verify
description: afk-verify re-runs one met slice's oracles, confirms gaps, and files tickets. Use when /afk-verify, a verify loop beside afk-plan or afk-task, or auditing completed slices.
---

# afk-verify

One sitting. One `met` slice. Re-run oracles, run an example, critic-confirm, file tickets. Then exit. Planner is `/afk-plan`. Drain is `/afk-task` or `/afk-slice`. This sitting does not implement.

Load **management** before any write under `.heio/`. Load **to-tickets** before filing. Load **docs** only for ADRs the slice See also names. Do not load **afk-plan**, **tdd**, or **gauntlet-loop**.

Same checkout. No git branch. No worktree. Read `.opencode/skills/afk-plan/references/lanes.md` before allocating ids or committing.

This is not `/verify-ticket` and not `/afk-roadmap`.

Verify writes: new `open` tickets, the afk-verify round ledger. Verify never writes: product code, `docs/specs/`, tests, slices, tasks, `intent` / `roadmap` / locations, `shape.md`, oracles.

## 1. Pick

Done when one `met` slice is named, or the sitting is IDLE.

Arguments:

- Empty or `continue`: `node .loop/pick-verify.mjs`. Lowest-numbered `met` slice not in the ledger.
- A slice id: that slice if `status: met`. Re-audit is allowed.
- A task id: read the task, take its `slice:` field, then pick that slice if `met`.
- `status`: `node .loop/pick-verify.mjs status`. No tests. No tickets. `VERDICT: IDLE`.

If the helper exits 2, end with `VERDICT: IDLE`. Do not pick `frozen`, `active`, `shaping`, or `abandoned`. Do not claim a task.

## 2. Ground

Done when the slice, every Pool task (archive or live), and named spec `test.md` paths have been read.

Run **vault-pack** for the slice area if See also names a spec. Read Must-read paths. Inventory:

- Done line (the claim)
- Each oracle `CHECK` / `EXPECT` / `EVIDENCE`
- Each linked task Done line
- Spec `test.md` commands when a spec folder is named

Empty ladder that this grain needs: file a HITL ticket and exit. `VERDICT: TICKET`. Do not invent product rules.

## 3. Re-run

Done when every oracle has a command result, or a named blocker.

Run each `CHECK` as written. Record exit code and the failing line.

If the CHECK path is missing, glob `tests/**/<basename>`. Do not invent a new test file.

- Written CHECK green and matches `EXPECT` → that oracle holds
- Written CHECK missing, basename exists and green → **GAP** (stale CHECK path)
- Written CHECK missing, no basename → **GAP** (missing test)
- Written CHECK fails → **GAP** (false green or regression)
- Timeout or hang → kill it. **UNKNOWN**. Do not wait out the sitting

Do not treat drain `EVIDENCE` as truth. Re-run.

## 4. Example

Done when a throwaway example has been run, or the slice is honesty/absence and CHECK stands in.

Honesty or absence Done (must not, do not, cannot import, no JSX, no eval) skips this step.

Demo Done (a program the user can run) gets one throwaway script under `.loop/verify/<slice-id>/example.mjs` that exercises the public surface named in Done. Run it. Quote output in the report. Delete the folder before exit. Do not commit it.

Example fail that CHECK missed → **GAP**. Example pass is not a HOLD by itself.

## 5. Score

Done when one sitting verdict is set and every gap is a one-line claim plus citation.

- **HOLD**: every oracle holds, example (if any) holds, Done still true
- **GAP**: stale CHECK, missing test, failing command, example miss, or Done refuted
- **UNKNOWN**: could not run or could not find evidence

No evidence → `UNKNOWN`, not a guess. Cite slice quote, `path:line`, or command output.

## 6. Critic

Done when every GAP is CONFIRMED, REFUTED, or duplicate, by an agent that did not find it.

Spawn one `explore` subagent. It is read-only. It does not file. It does not implement. Give it the gap list and tell it to disconfirm first: already fixed, CHECK path moved on purpose, duplicate ticket, EXPECT still true.

Default to rejecting. A plausible screenshot or a missing file that exists under a new folder is not enough. Finder does not grade finder work.

REFUTED or duplicate → drop that gap. Do not file.

## 7. File

Done when each critic-CONFIRMED gap is a new ticket, a wikilink to an existing ticket, or an explicit "not filed because duplicate of [[id]]".

Search `.heio/planning/tickets/` and `.heio/archive/planning/tickets/` for the slice id, CHECK path, and gap phrase.

One ticket per independent problem. Two failing asserts in the same CHECK are one ticket.

Copy **management** `templates/ticket.md`. Re-run `node .opencode/skills/management/scripts/planning-next-id.mjs` under the lane lock immediately before each write. Never eyeball ids.

- `status: open` so `/afk-plan` can pick it
- `ticket_type: bug` for false greens and missing tests
- `ticket_type: observation` for stale CHECK paths whose basename still passes
- tags include `afk-verify`
- Headings: `## Signal`, `## Fit`, `## Notes`
- Fit is "this project, later slice"
- Notes cite slice id, command, `path:line`, and the example output when one ran
- Do not write an Agent Brief. Do not publish tasks. Do not shape a sprint

After write, re-read the ticket. Every Signal sentence needs a citation in Notes. If it does not, fix the note or do not commit it.

## 8. Close

Done when the ledger line exists, chat report names the next id, and no second slice was started.

Campaign log is one round: `.heio/planning/rounds/rounds-<NN>-afk-verify.md`. Find it by slug `afk-verify` under planning and archive. If missing, copy **management** `templates/round.md`, allocate `<NN>` with `planning-next-id.mjs`. `sitting_kind: planning`. Tags include `afk-verify`. `status: ready-to-resume` until every `met` slice has a ledger line.

```markdown
## Cursor
next: slice-69-importable-package

## Ledger
- **slice-69-importable-package**: HOLD. O1 O2 pass. no tickets
```

Update `next` to the following unaudited id. Re-audit overwrites that id's ledger line.

Commit with `node .loop/commit-lane.mjs audit -m "chore(verify): <slice id>" -- <paths>`. Paths stay under tickets and the afk-verify round.

Chat report, short prose:

- Slice id and status
- Verdict
- What was run and what happened
- Ticket ids filed, or none
- Next id

End with:

```
VERDICT: TICKET | VERIFY | IDLE
EVIDENCE: <slice id> <HOLD|GAP|UNKNOWN> <ticket ids or none>
```

`VERIFY` when HOLD. `TICKET` when any ticket was filed this sitting. `IDLE` when step 1 found nothing.

## Do not

- Claim a ready task or edit a frozen, active, or shaping slice
- Implement product code or add tests under `tests/`
- Promote tickets into slices or tasks
- Run `/afk-slice` and `/afk-task` as this sitting
- Start a second slice
