---
id: "task-88-green-package-import"
title: "Green: package import"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-87-red-package-import"
sprint: "web-tracers"
slice: "slice-69-importable-package"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# Green: package import

## Blocked by

[[task-87-red-package-import]]: red first.

## Done

Import passes. No empty Rust crates. Folder, package, and repo stay dragonflame-ui. Public site untouched.

## Context

Re-run the red tests, confirm red, implement library identity only, re-run green. Then run slice oracles.

TDD: green the red tests. Do not add a renderer. Do not add a Cargo workspace.

## Verify

`node --test tests/git-package.test.mjs` pass. `node --test tests/crate-layout.test.mjs` pass.

scope: README.md, library manifest the spec names, tests/git-package.test.mjs, tests/crate-layout.test.mjs

## Links

- [[slice-69-importable-package]]
- [[task-87-red-package-import]]
