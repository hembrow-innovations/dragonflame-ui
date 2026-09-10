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
updated_at: "2026-09-11"
---

# Git package tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They lock `git-package.identity:name`, `git-package.identity:library-product`, `git-package.identity:forbid-public-site-rewrite`, `git-package.layout:library-first`, and `git-package.layout:no-empty-crates`. Import and library-first hold.

## Tests

- **tests/git-package/git-package.test.mjs**: `working product name, folder, git package, and GitHub repo are dragonflame-ui`
  - **How:** asserts the checkout folder and GitHub remote are dragonflame-ui, and that package.json names dragonflame-ui
  - **Why:** promise `git-package.identity:name`
- **tests/git-package/git-package.test.mjs**: `dragonflame-ui imports as a library product in this repo`
  - **How:** `import("dragonflame-ui")` from this checkout
  - **Why:** promise `git-package.identity:library-product`
- **tests/git-package/git-package.test.mjs**: `public site stays TanStack Start and is not a rewrite destination`
  - **How:** asserts this repo has no TanStack Start app.config
  - **Why:** promise `git-package.identity:forbid-public-site-rewrite`
- **tests/git-package/crate-layout.test.mjs**: `the first package is the dragonflame-ui library`
  - **How:** asserts package.json exists and its name is dragonflame-ui
  - **Why:** promise `git-package.layout:library-first`
- **tests/git-package/crate-layout.test.mjs**: `there are no empty Rust crates`
  - **How:** walks the tree for Cargo.toml whose crate has no non-empty .rs files
  - **Why:** promise `git-package.layout:no-empty-crates`
- **tests/git-package/crate-layout.test.mjs**: `tests live in spec-area subfolders`
  - **How:** asserts no `*.test.mjs` files sit directly in `tests/`
  - **Why:** support. Navigable layout, not a contract lock

## Gaps

- (none)
