---
id: "slice-283-draconic-framework-source"
title: "Draconic framework source"
kind: slice
status: met
sprint: "framework-in-draconic"
blocked_by: []
tags: []
created_at: "2026-09-11T21:34:15Z"
updated_at: "2026-09-12T21:45:00Z"
---

# Draconic framework source

## Why

Prove the library is a Draconic git-package product proved with PATH `draconic`. The JS-first stand-in is no longer the source of truth for at least one public export.

## Done

At least one public dragonflame-ui export is authored in Draconic and proved by PATH `draconic check` and `draconic build --target js`. Tests fail if the checkout has no framework `.drac` sources for that export, or if prove is `cargo run` of the sibling checkout. Callers still import dragonflame-ui. The package barrel may stay JavaScript until emit preserves `export`. Remaining JS modules wait on later slices.

## Blocked by

None.

## Non-goals

Migrating every remaining JS module. Implementing the compiler in this repo. Copying JS emit into this checkout. Replacing the package barrel with emit that does not preserve `export`. JSX. A second IR. Changing the public import name. Repeating [[purpose-js-backend]] no-eval, no-native-stubs, or no-emit-here oracles. Repeating [[purpose-absence]] no-jsx-here or no-lowerer-here oracles.

## Oracle checklist

- [x] O1: authored in Draconic
  CHECK: node --test tests/framework-source/draconic-authored.test.mjs
  EXPECT: pass
  EVIDENCE: `src/leaves/view.drac` exports `view`; `import("dragonflame-ui")` still works
- [x] O2: PATH draconic proves it
  CHECK: node --test tests/framework-source/path-compile.test.mjs
  EXPECT: pass
  EVIDENCE: PATH `draconic check` and `draconic build --target js` on that source; barrel stays JS

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
