---
id: "slice-69-importable-package"
title: "Importable package"
kind: slice
status: met
sprint: "web-tracers"
blocked_by: []
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:59:27Z"
---

# Importable package

## Why

Prefactoring demo. Drain can import the git package before any UI.

## Done

The dragonflame-ui git package imports. Folder, package, and repo match. No empty Rust crates. This is a library product in this repo, not a language feature.

## Blocked by

None.

## Non-goals

Renderer, signals, public-site rewrite, engine crates, CI.

## Oracle checklist

- [x] O1: package identity
  CHECK: node --test tests/git-package.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/git-package.test.mjs; 3 pass 0 fail
- [x] O2: no empty Rust crates
  CHECK: node --test tests/crate-layout.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/crate-layout.test.mjs; 2 pass 0 fail

## Pool

- [[task-86-spec-git-package]]
- [[task-87-red-package-import]]
- [[task-88-green-package-import]]

## See also

- [[location-21-git-package]]
- [[location-22-crate-layout]]
- [[intent]]
- [[rounds-01-chart-framework]]
