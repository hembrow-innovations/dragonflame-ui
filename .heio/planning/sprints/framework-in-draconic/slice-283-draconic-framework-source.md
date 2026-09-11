---
id: "slice-283-draconic-framework-source"
title: "Draconic framework source"
kind: slice
status: active
sprint: "framework-in-draconic"
blocked_by: []
tags: []
created_at: "2026-09-11T21:34:15Z"
updated_at: "2026-09-12T08:20:00Z"
---

# Draconic framework source

## Why

Prove the library is a Draconic git-package product that compiles through the sibling JS backend. The JS-first stand-in is no longer the source of truth for at least one public export.

## Done

At least one public dragonflame-ui export is authored in Draconic and produced by `draconic build --target js` from the sibling toolchain. Tests fail if the checkout has no framework `.drac` sources, or if that export's shipped JavaScript is hand-written rather than sibling emit. Callers still import dragonflame-ui. Remaining JS modules wait on later slices.

## Blocked by

None.

## Non-goals

Migrating every remaining JS module. Implementing the compiler in this repo. Copying JS emit from the sibling toolchain. JSX. A second IR. Changing the public import name. Repeating [[purpose-js-backend]] no-eval, no-native-stubs, or no-emit-here oracles. Repeating [[purpose-absence]] no-jsx-here or no-lowerer-here oracles.

## Oracle checklist

- [ ] O1: authored in Draconic
  CHECK: node --test tests/framework-source/draconic-authored.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: sibling JS backend compiles it
  CHECK: node --test tests/framework-source/sibling-compile.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-284-spec-framework-source]]
- [[task-285-red-green-framework-source]]

## See also

- [[ticket-252-framework-not-draconic]]
- [[intent]]
- [[location-17-web-component-library]]
- [[location-21-git-package]]
- [[location-30-js-backend]]
- [[architecture-layer-cake]]
- [[purpose-js-backend]]
- [[purpose-absence]]
- [[purpose-git-package]]
