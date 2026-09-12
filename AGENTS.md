# Agents


## Skills

Load the matching skill before the work it covers.

- **docs**: committed vault under `docs/`
- **domain-modeling**: glossary and ADRs
- **management**: planning notes under `.heio/`
- **design-tree**: counterpart and notebook are branches
- **principle-intent-ladder-stop**: stop when purpose or contracts are missing
- **codebase-design**: module seams and interfaces
- **arena**: N parallel attempts, pick a base, graft the rest
- **diagnose**: hard bugs and performance regressions
- **gauntlet-loop**: bounded implement-then-critic until the bar wins
- **spec**: purpose, contract, and test folders
- **afk-plan**: one frozen slice and its AFK tasks from the map
- **vault-pack**: small vault context pack before coding or planning
- **tdd**: Rust and Draconic test-first
- **to-slices**: publish slice notes from a settled grouping
- **to-tasks**: publish the task pool from frozen slices
- **to-tickets**: file inbound signals as tickets
- **triage**: ticket status enums
- **rust-development**: Cargo crates when this product needs Rust
- **draconic-language**: When writing code.
- **create-skill**: writing and editing skills
- **how**: walkthroughs of how a subsystem works
- **why**: design rationale and evidence for why it is that way


## Domain docs

Use the docs-skill default layout. Glossary is `docs/overview/glossary.md`. Locked decisions live in `docs/decisions/adr/` when they exist. Do not create `CONTEXT.md`. Do not invent ADRs.

## Product

This repo is the dragonflame-ui framework product. The language toolchain lives in the sibling `~/workbench/draconic`. Do not implement the compiler here. Do not add Roadmap rows to the toolchain repo.

## Planning

Completeness and day-to-day planning live in `.heio/planning/` (intent, roadmap, locations, rounds, tickets). `docs/` is committed truth. Do not put tickets in docs.

Open product questions may be closed by an AFK planning sitting with the smallest reversible default from the location destination plus `docs/`. Do not contradict a locked promise. Load **principle-intent-ladder-stop**.

## Draconic Language

`draconic` is being developed in `~/workbench/draconic`, this should not act as the truth behind `draconic` as a language, currently the cli is installed and should be the truth - `draconic help`.  If bugs are found submit a github issue to the github repo so that a fix can be planned and implemented. build it from there if needed.

## Rules

### General
- No CI/CD or GitHub Actions
- Markdown: never tables — use `- **{text}**: {text}`
- Do not invent work when the user did not name a task and planning has not published ready tasks, except the afk-cycle campaign
- No em dashes (`—`)
- Prefer matching this repo's existing patterns over inventing new ones.
- After any work or change do housekeeping on `.heio/` and commit in work packages.

### Implementation
- Always write `draconic` for implementation over any other language.
- TDD, DRY, YAGNI; prefer one-liner solutions when clear
- for scripting only use js/mjs not bash or sh
- Always keep the rust's `target/` directory below 10GB
- File size target ≤1000 LOC, hard limit 1250 (prove fails over 1200)
- Also create sub folders in packages so that its no one flat file list
- tests/ uses named subfolders matching the spec area under docs/specs/; never a flat tests/ dump

### Git
- Commits as work packages: `<type>(<scope>): <description>` — `feat` | `fix` | `test` | `refactor` | `chore` 
- No `Co-Authored-By` lines
- If there are move then 25 commits that can be pushed to remote, push them to remote.
- Do not commit secrets or credentials.
