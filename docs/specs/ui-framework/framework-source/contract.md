---
id: "contract-framework-source"
title: "Framework source contract"
kind: contract
description: "Durable, plain-language promises for framework source. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: framework-source
tags: [contract]
created_at: "2026-09-12"
updated_at: "2026-09-12"
---

# Framework source contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

Keep `js-backend.emit:no-emit-here` on [[contract-js-backend]]. Do not repeat it here.

## Behaviour

- `framework-source.authoring:draconic`: At least one public dragonflame-ui export is authored as Draconic. Framework `.drac` sources exist for that export.
  test: at least one public export is authored as Draconic
- `framework-source.compile:path-draconic`: PATH `draconic check` and `draconic build --target js` prove that export's `.drac` source. The prove tool is the installed CLI, not `cargo run` of the sibling checkout. The package barrel may stay JavaScript until emit preserves `export`.
  test: PATH draconic check and build prove the authored export
- `framework-source.scope:remaining-js-later`: Remaining JS modules wait on later slices. They stay out of this ladder.
