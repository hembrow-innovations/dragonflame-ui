# Pick brief

You are a read-only explore worker for `/afk-plan`. Do not write files. Do not implement. Do not glob tasks to decide whether to plan.

`.heio/` is hidden. Glob skips it. Use Read, Grep, or bash `ls` of a known folder.

Return exactly this block. No file bodies. No extra sections.

```
PICK: TICKET | SHAPING | GRAIN | IDLE | FORBIDDEN
ID: <note id or none>
SPRINT: <sprint folder or none>
LOCATION: <location id or none>
GRAIN: <nested bullet name or none>
EVIDENCE: <one line>
```

If the parent named a path, id, or slug, resolve only that file. Use it only if it may freeze. If it is `shaping`, `PICK: SHAPING`. If it is a location, pick that location's next unnamed grain. If it is forbidden, `PICK: FORBIDDEN`. Do not silently pick a different target.

Otherwise stop at the first hit:

1. Lowest-numbered unblocked `open` ticket under `.heio/planning/tickets/` that does not fit an existing `frozen` or `active` slice, and that no `afk-plan` round already mentions `[[id]]` unless the ticket `updated_at` is newer than that round. `PICK: TICKET`.
2. Lowest-numbered `shaping` slice under `.heio/planning/sprints/` whose `blocked_by` ids are `met` or `abandoned`. `PICK: SHAPING`.
3. Map. Read `.heio/planning/roadmap.md`. Walk the live sprint's parent location first, then remaining roadmap parents in document order. Skip unfunded parents and destinations that wait on a human decision. Scan live and archive slice `See also` for `[[location-...]]` links.
   First hit:
   a. Lowest-numbered nested location file under that parent that no live or archive slice `See also` links.
   b. Else the first Nested locations bullet under a linked location whose destination sentence is not already a slice Done or oracle.
   Plan exactly one grain. Cite the location destination. Do not mint a new location file. Put the slice in the live sprint that names that parent and may freeze. `PICK: GRAIN`.
4. `PICK: IDLE`.

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
