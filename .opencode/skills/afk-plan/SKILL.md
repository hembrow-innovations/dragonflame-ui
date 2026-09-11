---
name: afk-plan
description: AFK-plan one frozen slice and its AFK tasks from a ticket, shaping slice, or unnamed location grain. Use when running /afk-plan, an AFK planning sitting, or freezing one slice without implementing.
disable-model-invocation: true
---

# AFK-plan

Plan exactly one slice, publish its AFK tasks, commit, exit. Do not implement product code. Do not write `docs/specs/`.

Load **management** first. Find `.heio` notes per **management**.

Do not load **docs**, **architect**, **design-tree**, **triage**, **to-slices**, **to-tasks**, **vault-pack**, or **principle-intent-ladder-stop** until the step that needs them.

Read `references/` when that step starts. Pass the map walk, pack assembly, and candidate sketches to subagents. Do not add a pick script, coverage index, packer, or next-id batcher.

## 1. Pick

Done when the sitting has one allowed target, or `VERDICT: IDLE`.

If arguments name a path, id, or slug, Read that file. bash `ls` the parent folder when the path is unknown. Use it only if it may freeze. Forbidden: `VERDICT: ESCALATE` or `IDLE`. Do not silently pick a different target.

Otherwise spawn one `explore` subagent. `command` is `afk-plan`. Inline [references/pick-brief.md](references/pick-brief.md). Parent does not walk locations, tickets, or slices.

Trust PICK, ID, SPRINT, LOCATION, and GRAIN. Re-read only the named target plus its sprint `shape.md`. The grain is that nested `this is working when` sentence, not an EVIDENCE paraphrase.

Pick subagent missing or empty: parent follows `references/pick-brief.md` once, then stops scanning.

Ready AFK tasks and existing `frozen` or `active` slices do not idle this sitting.

## 2. Ground

Done when the vault-pack block is printed and every Must-read path has been Read.

Load **principle-intent-ladder-stop** and **vault-pack**. If the pick is an `open` ticket, load **triage**.

Spawn one `explore` subagent. Inline [references/pack-brief.md](references/pack-brief.md) with the pick. Parent Reads Must-read paths from the returned block. Do not grep the vault.

Read `.opencode/skills/design-tree/references/counterpart-product.md`. Do not load **design-tree**.

Empty ladder: freeze anyway. Open product questions: answer in the round from the location destination plus `docs/` or the smallest reversible default.

## 3. Sketch

Done when the round file contains Candidate A, Candidate B, Synthesis, tracer bullets, and `Confirmed.`

Copy the management round template if this topic has no sitting. `sitting_kind: planning`. Tags include `afk-plan`. Never rewrite an earlier round.

Read `.opencode/skills/architect/references/rationale-template.md` and `.opencode/skills/architect/references/design-red-flags.md`. Do not load **architect**. Do not run `/arena`. Do not implement.

Spawn two `general` subagents in parallel. Inline [references/candidate-brief.md](references/candidate-brief.md). They return markdown. They do not write files. Parent writes the round once. Do not paste subagent dumps into chat.

If spawn fails, parent writes both candidates in the same turn.

## 4. Publish

Done when the slice is `frozen`, tasks are `ready` with `mode: afk`, Pool `[[id]]` links exist, and `shape.md` lists the slice.

Load **to-slices** then **to-tasks**. Run `node .opencode/skills/management/scripts/planning-next-id.mjs` immediately before each new file. Never eyeball ids.

Write Done and `EXPECT:` from the location destination plus `docs/` or the smallest reversible default. Then set `status: frozen`. Parent writes these files. Subagents do not.

Promote the source ticket if this sitting started from a ticket.

## 5. Commit

Read [references/lanes.md](references/lanes.md). `git add -- <paths>` then `git commit -m "chore(plan): <slice id>" -- <paths>`. Then exit.

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

## Rules

- One slice. After pick, Read other slice files only for this slice's `blocked_by`.
- Same checkout. See `references/lanes.md`.
- Create a ticket if something belongs to the project, not this slice. Then keep planning this slice.
- Missing notes are silent. Use the smallest reversible default.
- Subagent failure is not ESCALATE. Continue on the parent.
- ESCALATE only if the sitting would rewrite a location destination.
