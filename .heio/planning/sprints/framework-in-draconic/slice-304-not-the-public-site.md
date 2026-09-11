---
id: "slice-304-not-the-public-site"
title: "Not the public site"
kind: slice
status: frozen
sprint: "framework-in-draconic"
blocked_by: []
tags: []
created_at: "2026-09-12T12:10:00Z"
updated_at: "2026-09-12T12:10:00Z"
---

# Not the public site

## Why

Name the fence so drain cannot treat the public TanStack site as a rewrite destination or the first app of this library.

## Done

The public site stays TanStack Start and is not a rewrite destination or a prototype of this framework. Callers still import dragonflame-ui. No public fence helper. No PublicSite type.

## Blocked by

None.

## Non-goals

Rewriting the public site. Treating it as the first app of this library. A public fence API. Editing [[contract-git-package]]. Restaging [[slice-69-importable-package]] name, library-product, library-first, or no-empty-crate oracles. Restaging in-sprint framework-source, host-descriptor, ticker, or vsync work.

## Oracle checklist

- [ ] O1: public site stays TanStack Start
  CHECK: node --test --test-name-pattern "public site stays TanStack Start and is not a rewrite destination" tests/git-package/git-package.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-305-prove-not-the-public-site]]

## See also

- [[location-21-git-package]]
- [[location-17-web-component-library]]
- [[purpose-git-package]]
- [[contract-git-package]]
- [[test-git-package]]
- [[intent]]
- [[overview-ui-framework]]
- [[rounds-303-freeze-not-the-public-site]]
- [[slice-69-importable-package]]
