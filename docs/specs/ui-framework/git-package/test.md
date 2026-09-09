---
id: "test-git-package"
title: "Git package tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: git-package
tags: [test]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Git package tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

No code tests yet. All promises are asserted, not locked: `git-package.identity:name`, `git-package.identity:library-product`, `git-package.identity:forbid-public-site-rewrite`, `git-package.layout:library-first`, `git-package.layout:no-empty-crates`.

## Tests

- (none)

## Gaps

- No test yet for promise `git-package.identity:name`. Planned path: tests/git-package.test.mjs
- No test yet for promise `git-package.identity:library-product`. Planned path: tests/git-package.test.mjs
- No test yet for promise `git-package.identity:forbid-public-site-rewrite`. Planned path: tests/git-package.test.mjs
- No test yet for promise `git-package.layout:library-first`. Planned path: tests/crate-layout.test.mjs
- No test yet for promise `git-package.layout:no-empty-crates`. Planned path: tests/crate-layout.test.mjs
