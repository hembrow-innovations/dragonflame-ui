---
id: "contract-git-package"
title: "Git package contract"
kind: contract
description: "Durable, plain-language promises for the git package. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: git-package
tags: [contract]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Git package contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `git-package.identity:name`: The working product name, folder, git package, and GitHub repo are dragonflame-ui.
- `git-package.identity:library-product`: This is a library product in this repo, not a language feature.
- `git-package.identity:forbid-public-site-rewrite`: The public site stays TanStack Start and is not a rewrite destination or a prototype of this framework.
- `git-package.layout:library-first`: The first package is the dragonflame-ui library.
- `git-package.layout:no-empty-crates`: There are no empty Rust crates.
