---
id: "slice-75-portable-web-import"
title: "Portable web import"
kind: slice
status: met
sprint: "web-tracers"
blocked_by:
  - "slice-70-counter-on-dom"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-10T01:52:40Z"
---

# Portable web import

## Why

Boundary demo. Portable UI imports the thin Draconic surface, not `document`.

## Done

A portable Program compiles against the portability API. Importing `document` from portable code hard-errors. Wrong-target use is not a runtime no-op.

## Blocked by

[[slice-70-counter-on-dom]]: a portable tree exists first.

## Non-goals

Host I/O as a browser. Native `extern "C"` path. Second IR.

## Oracle checklist

- [x] O1: portable import
  CHECK: node --test tests/renderer-portability/portable-import.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/renderer-portability/portable-import.test.mjs; 1 pass 0 fail
- [x] O2: document import hard-errors
  CHECK: node --test tests/renderer-portability/portable-wrong-target.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/renderer-portability/portable-wrong-target.test.mjs; 1 pass 0 fail

## Pool

- [[task-102-spec-port-web]]
- [[task-103-red-green-portable]]

## See also

- [[location-41-renderer-portability]]
