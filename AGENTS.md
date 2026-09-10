# Agents


## Skills

Load the matching skill before the work it covers.

- **docs**: committed vault under `docs/`
- **domain-modeling**: glossary and ADRs
- **management**: planning notes under `.heio/`
- **design-tree**: counterpart and notebook are branches
- **principle-intent-ladder-stop**: stop when purpose or contracts are missing
- **codebase-design**: module seams and interfaces
- **diagnose**: hard bugs and performance regressions
- **gauntlet-loop**: bounded implement-then-critic until the bar wins
- **spec**: purpose, contract, and test folders
- **vault-pack**: small vault context pack before coding or planning
- **tdd**: test-first work
- **afk-plan**: one next slice plus its tasks from the map, then exit
- **afk-verify**: re-run one met slice's oracles, file tickets for afk-plan, then exit
- **to-slices**: publish slice notes from a settled grouping
- **to-tasks**: publish the task pool from frozen slices
- **to-tickets**: file inbound signals as tickets
- **triage**: ticket status enums
- **rust-development**: Cargo crates when this product needs Rust
- **frontend-development**: TypeScript UI when this product needs it
- **create-skill**: writing and editing skills

`draconic-language`, `draconic-loop`, and `roadmap-audit` are present because they were copied with the rest of the skill set. This repo is **not** the Draconic toolchain. Do not treat those skills as the Loop for this product.

## Domain docs

Use the docs-skill default layout. Glossary is `docs/overview/glossary.md`. Locked decisions live in `docs/decisions/adr/` when they exist. Do not create `CONTEXT.md`. Do not invent ADRs.

## Product

This repo is the dragonflame-ui framework product. The language toolchain lives in the sibling `~/workbench/draconic`. Do not implement the compiler here. Do not add Roadmap rows to the toolchain repo.

## Planning

Completeness and day-to-day planning live in `.heio/planning/` (intent, roadmap, locations, rounds, tickets). `docs/` is committed truth. Do not put tickets in docs.

Open product questions are non-empty until a wayfinder or planning sitting closes them. Do not invent product rules. Load **principle-intent-ladder-stop**.

## Draconic Language

`draconic` is being developed in `~/workbench/draconic`, this should act as the truth behind `draconic` as a language.  If bugs are found submit a github issue to the github repo so that a fix can be planned and implemented. build it from there if needed.

## Rules

- TDD, DRY, YAGNI; prefer one-liner solutions when clear
- for scripting only use js/mjs not bash or sh
- Markdown: never tables — use `- **{text}**: {text}`
- Commits as work packages: `<type>(<scope>): <description>` — `feat` | `fix` | `test` | `refactor` | `chore` 
- No `Co-Authored-By` lines
- No CI/CD or GitHub Actions
- Do not invent work when the user did not name a task and planning has not published ready tasks
- Extremely concise output
- No em dashes (`—`)
- Prefer matching this repo's existing patterns over inventing new ones.
- Do not commit secrets or credentials.
- Always keep the rust's `target/` directory below 10GB
- File size target ≤1000 LOC, hard limit 1250 (prove fails over 1200)
- Also create sub folders in packages so that its no one flat file list
- tests/ uses named subfolders matching the spec area under docs/specs/; never a flat tests/ dump
- AFter each slice, task or ticket work/change do housekeeping on `.heio/` and commit
