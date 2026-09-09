---
id: "task-87-red-package-import"
title: "Red: package import"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-86-spec-git-package"
sprint: "web-tracers"
slice: "slice-69-importable-package"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T19:24:32Z"
---

# Red: package import

## Blocked by

[[task-86-spec-git-package]]: spec ladder first.

## Done

A failing test that dragonflame-ui imports, and a failing check that empty Rust crates must not appear.

## Context

Current: no package tests. Desired: tests named in git-package test.md fail because the import and crate-layout checks are not true yet.

TDD: write failing tests. Run `node --test tests/git-package.test.mjs` and `node --test tests/crate-layout.test.mjs`. See red. Stop. No production files beyond tests.

## Verify

Both commands fail for the missing behavior, not for a syntax error you ignore.

scope: tests/git-package.test.mjs, tests/crate-layout.test.mjs

## Links

- [[slice-69-importable-package]]
- [[task-86-spec-git-package]]
