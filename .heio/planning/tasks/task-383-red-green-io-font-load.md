---
id: "task-383-red-green-io-font-load"
title: "Red-green IO font load"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-382-keep-load-on-io-promise"
sprint: "mobile-after-desktop"
slice: "slice-381-io-font-load"
tags: []
created_at: "2026-09-12T08:29:13Z"
updated_at: "2026-09-12T08:29:13Z"
---

# Red-green IO font load

## Blocked by

[[task-382-keep-load-on-io-promise]]: load-on-io promise first.

## Done

`node --test tests/talk-and-measure/io-font-load.test.mjs` passes.

## Context

Current: [[purpose-talk-and-measure]] names IO font load in scope. Dump, metrics, and engine-glyphs oracles exist. No ownership oracle that font load runs on the IO thread. Public fonts seam is `loadFont`. [[slice-83-talk-and-measure]] proves the weaker cut: font load is not required to block the UI thread.

Desired: the test proves font load runs on the IO thread as a private engine IO module used by `loadFont`, that the load body is not on the Runtime job queue, and that no public Thread type, `Paragraph.layout`, or `TextPainter` is exported. Image decode stays unnamed. No `docs/specs/ui-framework/io-font-load/` area.

Do not restage SemanticsNode dump or measureText. Those live on [[purpose-talk-and-measure]] and [[slice-83-talk-and-measure]]. Do not restage native glyphs in the Rust engine. That lives on [[slice-373-engine-glyphs]]. Do not restage image decode. That lives on [[location-45-threads]]. Do not invent a public Thread type. Do not run font load on the UI thread.

## Verify

CHECK: node --test tests/talk-and-measure/io-font-load.test.mjs
EXPECT: pass

scope: tests/talk-and-measure/ crates/engine/ docs/specs/ui-framework/talk-and-measure/

## Links

- [[slice-381-io-font-load]]
- [[task-382-keep-load-on-io-promise]]
- [[rounds-380-freeze-io-font-load]]
