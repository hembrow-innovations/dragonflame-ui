---
name: arena
description: "Arena: N parallel attempts, pick a base, graft the losers. Use for /arena or when another skill needs a synthesized candidate package."
---

# Arena

Fan out N attempts at the same task. Read every candidate end to end. Pick the strongest as the base. Graft the best ideas from the others into it. Verify the synthesized result.

## Runtime

Spawn with the Task tool. Foreground. Do not set `background`. Fresh session per candidate (omit `task_id`). `command` is `arena`. Do not pass `model`.

If dest agents matching `arena runners` exist, use those as `subagent_type`. Otherwise candidates use `general`. The cross-judge uses `explore` (readonly). Use `arena runners` and `arena cross-judge pool` from `.pi/heio-models.md` when that file is present.

If Task is denied or missing, sketch 2 to 3 shapes yourself, pick one, and write `skip: no spawn runtime` on the unused arms. Do not invent child transcripts.

## Start

Open a todolist with one entry per phase before launching anything. The arena runs autonomously and the list keeps phases from silently disappearing.

1. Frame
2. Fan out
3. Cross-judge
4. Pick
5. Graft
6. Verify

## Phase A: Frame

Done when the artifact, rubric, runners, and isolated output paths are written down.

The N candidates will receive the same prompt, so the prompt is the contract. Get it right before spawning anything.

1. State the artifact each candidate is producing.
2. Derive the rubric. State what success looks like for *this* task, then turn it into 3-6 concrete gradeable criteria. Concrete: `Adds a --dry-run flag that skips writes`. Vague: `code is correct`. The rubric is the picker's tool in Phase D; candidates only see the task.
3. Pick the runners. Use `arena runners` from `.pi/heio-models.md` when present. Otherwise default to dest agents when those slugs exist, or N `general` arms. Spawn more when the arena covers multiple design directions. Same model N times when the work is generation-bound rather than judgment-sensitive.
4. Assign output paths. Each candidate writes to its own location (a git worktree where possible, otherwise `/tmp/arena-<slug>/candidate-<n>/`). N candidates writing to the same path is shared mutable state and fails the **separate-before-serializing-shared-state** principle [`references/separate-before-serializing-shared-state.md`](references/separate-before-serializing-shared-state.md).

## Phase B: Fan out

Done when the wave has returned N or N-1 candidates, each with an artifact and a rationale, or a named dropout.

Spawn all N candidates in one turn as parallel Task calls. Each gets the task, the path to the shared grounding, its own output path, and instructions to produce both the artifact and a short rationale.

```
Task({ description: "arena-1", subagent_type: "general", command: "arena", prompt: "Task. Grounding path. Output path. Artifact plus rationale. Name alternatives considered and rejected." })
Task({ description: "arena-2", subagent_type: "general", command: "arena", prompt: "Task. Grounding path. Output path. Artifact plus rationale. Name alternatives considered and rejected." })
```

The rationale is mandatory. Without it, the parent cannot tell whether a candidate's structure is principled or accidental, which makes Phase E grafting unreliable. Each rationale names the alternatives the candidate considered and what it rejected.

If a candidate fails to produce output, proceed with N-1 and note the dropout in the synthesis record.

Workers do the candidate. They do not spawn children.

## Phase C: Cross-judge

Done when one readonly judge has scored every criterion and recommended a base with rationale.

After all Phase B candidates complete, choose one model from the `arena cross-judge pool` in `.pi/heio-models.md` when present. Prefer a dest agent from a different family than the parent. Otherwise spawn `explore`. It sees the rubric and the candidates by path label, scores each criterion, and recommends a base with rationale. It runs in parallel with the parent's reading in Phase D, not with the candidates themselves. Spawning while candidates are still writing means the judge sees partial or empty outputs and reports them as dropouts.

## Phase D: Pick a base

Done when a base is recorded with a rubric score, a comparison to the cross-judge, and a reason a maintainer can extend it.

Read every candidate end to end before picking. Skimming N candidates surfaces only the candidate whose surface looks most familiar.

Score each candidate against the rubric criterion by criterion, not on holistic feel. Compare against the cross-judge. Agreement on the base confirms the pick. Disagreement means one of you is biased or the rubric was ambiguous. Read both rationales before deciding.

Pick the base on which candidate a future maintainer can extend most easily without breaking invariants. Prefer the cleaner boundary or smaller surface area when two feel tied, per the **laziness-protocol** principle [`references/laziness-protocol.md`](references/laziness-protocol.md).

Record the pick and the reason in a short synthesis note alongside the base artifact, including the cross-judge's verdict.

## Phase E: Graft

Done when grafts are folded into one coherent base, and each rejection is named.

Walk each losing candidate once more and identify what is worth porting into the base. The signal is usually one or two things per candidate, not most of it.

Fold each graft in by hand, per the **redesign-from-first-principles** principle [`references/redesign-from-first-principles.md`](references/redesign-from-first-principles.md). Don't paste mechanically. The result has to remain coherent under one mental model.

Record what was grafted, from which candidate, and what was rejected and why. The rejection notes are the highest-signal part of the record. Future readers learn from what you considered and dropped, not just what you kept.

When N candidates converge on the same shape, that is a strong agreement signal. Note the convergence in the record and ship the consensus shape. No graft is needed. When N candidates wildly diverge, Phase A was under-specified. Reframe and re-run rather than averaging the divergence.

## Phase F: Verify

Done when the synthesized artifact has been checked on the real surface and the result is in the synthesis note.

The synthesized artifact has to hold up under the same scrutiny as any other output, per the **prove-it-works** principle [`references/prove-it-works.md`](references/prove-it-works.md). The arena does not earn you a pass.

If verification surfaces a problem the arena did not catch, either Phase A was wrong (re-frame and re-run) or one candidate caught it and you missed the graft (go back to Phase E). Don't paper over.

## Outputs

One synthesized artifact. One short synthesis note alongside, naming the base, the grafts (with source candidate), the rejections, the dropouts if any, and the verification result.
