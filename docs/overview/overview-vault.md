---
id: overview-vault
title: Committed vault
kind: overview
domain: ui-framework
area: overview
tags: [overview]
created_at: "2026-09-09"
updated_at: "2026-09-09"
---

# Committed vault

`docs/` is the committed Obsidian vault for this product. Search it first. Ignore `docs/99_scribble/`. Day-to-day planning lives under `.heio/`, not in this vault.

This product is not the Draconic toolchain. The working folder name is dragons-egg. The working product name is an open question; see [[overview-ui-framework]].

## Layout

This vault uses the docs-skill default layout. Kind is the folder under `docs/`. Domain rides in frontmatter as `domain: ui-framework`. Do not invent `docs/ui-framework/`.

- **Glossary**: [[glossary]]
- **Idea orientation**: [[overview-ui-framework]]
- **Proposed architecture**: [[architecture-layer-cake]]
- **Locked decisions**: none yet. Later ADRs would live under `docs/decisions/adr/`. Do not treat proposed notes as ADRs.
- **Specs**: none yet. Do not invent purpose, contract, or test folders until a sitting locks intent.

Note to note uses `[[wikilinks]]` only. Never relative `.md` paths.

## What this vault is not

- **Not the toolchain repo**: compiler completeness and the language Roadmap live elsewhere.
- **Not a plan tracker**: tickets, slices, tasks, and rounds belong in `.heio/`.
- **Not locked product rules**: proposed language and architecture stay marked as proposed until a human sitting decides.

## Related notes

- **glossary**: [[glossary]]
- **overview-ui-framework**: [[overview-ui-framework]]
- **architecture-layer-cake**: [[architecture-layer-cake]]
