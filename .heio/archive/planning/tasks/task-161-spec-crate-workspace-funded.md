---
id: "task-161-spec-crate-workspace-funded"
title: "Spec crate workspace funded"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "native-if-funded"
slice: "slice-76-desktop-vsync-window"
tags: []
created_at: "2026-09-11T12:00:00Z"
updated_at: "2026-09-11T21:00:00Z"
---

# Spec crate workspace funded

## Blocked by

None.

## Done

Crate workspace spec quotes location-22: a Cargo workspace may exist because native is funded, and this checkout is not a Cargo toolchain workspace.

## Context

Edit purpose, contract, and test.md in the crate-workspace spec folder from [[location-22-crate-layout]], [[rounds-160-fund-native]], and [[ticket-61-native-ui-unfunded]] promoted. Quote child destination sentences: a Cargo workspace exists only when native is funded; do not treat a Cargo toolchain workspace as this UI product. Native is funded, so the no-workspace-while-unfunded promise must change first.

Do not invent a public workspace helper. Do not add a Cargo.toml `[workspace]` yet. Do not repeat library-first or no-empty-crate oracles. Do not name a window crate. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files exist and name the funded workspace tests. Engine home stays this repo.

scope: docs/specs/ui-framework/crate-workspace/

## Links

- [[slice-76-desktop-vsync-window]]
- [[rounds-160-fund-native]]
