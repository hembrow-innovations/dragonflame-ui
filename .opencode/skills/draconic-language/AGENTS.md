# Draconic language reference

Reference only. Prefer `SKILL.md` write steps and `rules/<id>.md`.

Do not load this file unless you are stuck and the router plus two or three rules were not enough.

## Write a Program

This pack's write branch is how an agent authors `.drac`. Workflow stays in sibling skills. Load them; do not copy their bodies here:

- `tdd` red-green
- `gauntlet-loop` implement-and-verify
- `diagnose` hard bugs
- `docs` / `domain-modeling` UI glossary and ADRs

Prove with PATH `draconic` (the installed stable CLI). Never `cargo run` `~/workbench/draconic`.

Language docs are the sibling checkout `~/workbench/draconic`, not this folder:

- Glossary: `CONTEXT.md`
- Learn: `website/learn.md`, `website/from-javascript.md`, `website/from-systems.md`
- Reference: `website/cli.md`, `website/types.md`, `website/dual-world-rules.md`
- Contracts: `docs/specs/draconic/language/`
- Locked decisions: `docs/adr/`
- Copy-ready Programs: `examples/**/*.drac`

This product (dragonflame-ui):

- UI glossary: `docs/overview/glossary.md`
- Trees: `h(type, props)`. JSX is not a language feature.
- Default emit: `draconic build --target js`
- Compiler bugs: GitHub issue on the draconic repo, then stop
