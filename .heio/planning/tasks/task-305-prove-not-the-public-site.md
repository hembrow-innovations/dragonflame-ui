---
id: "task-305-prove-not-the-public-site"
title: "Prove not the public site"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "framework-in-draconic"
slice: "slice-304-not-the-public-site"
tags: []
created_at: "2026-09-12T12:10:00Z"
updated_at: "2026-09-12T12:10:00Z"
---

# Prove not the public site

## Blocked by

None.

## Done

`node --test --test-name-pattern "public site stays TanStack Start and is not a rewrite destination" tests/git-package/git-package.test.mjs` passes.

## Context

Ladder exists. Do not write purpose, contract, or test.md. Do not edit [[contract-git-package]] `git-package.identity:forbid-public-site-rewrite`.

The named test today only asserts root `app.config.ts` and `app.config.js` are absent. Deepen that one test into a site-boundary prove: this checkout is the library package, contains no public-site app, and does not wire dragonflame-ui as that site's renderer. Start filenames stay private to the test owner.

Callers still `import("dragonflame-ui")`. No public fence helper. No PublicSite type. No `app.config` export.

TDD: red the deeper prove, then the smallest green that locks the oracle.

## Verify

The oracle command passes. No public fence helper. Name, library-product, library-first, and no-empty-crate tests still pass.

scope: tests/git-package/git-package.test.mjs

## Links

- [[slice-304-not-the-public-site]]
- [[location-21-git-package]]
- [[purpose-git-package]]
- [[contract-git-package]]
- [[test-git-package]]
- [[rounds-303-freeze-not-the-public-site]]

## Agent Brief

**Category:** enhancement
**Summary:** Deepen the public-site fence test so this checkout is not a TanStack Start rewrite or the first app of this library.

**Intent (required when product behaviour changes):**
- Promise ids: `git-package.identity:forbid-public-site-rewrite`
- Purpose: [[purpose-git-package]]
- Contract-first: the test named in test.md must pass

**Current behavior:**
`tests/git-package/git-package.test.mjs` asserts root `app.config.ts` and `app.config.js` are absent.

**Desired behavior:**
The oracle command passes. One site-boundary prove: this checkout is the library package, contains no public-site app, and does not wire dragonflame-ui as that site's renderer.

**Key interfaces:**
- Existing named test in `tests/git-package/git-package.test.mjs`
- No public fence helper, PublicSite type, or Start export

**Acceptance criteria:**
- [ ] The oracle command passes
- [ ] The named test owns library-vs-site, no in-tree public-site app, and renderer non-ownership
- [ ] No public fence helper
- [ ] Name, library-product, library-first, and no-empty-crate tests still pass

**Out of scope:**
- Editing [[contract-git-package]]
- Writing purpose, contract, or test.md
- Restaging [[slice-69-importable-package]]
- Rewriting the public site
- Implementing the compiler
