---
id: "task-102-spec-port-web"
title: "Spec portable web import"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-91-red-green-signal-patch"
sprint: "web-tracers"
slice: "slice-75-portable-web-import"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# Spec portable web import

## Blocked by

[[task-91-red-green-signal-patch]]: a portable tree first.

## Done

Portability spec exists: thin surface, JS-only DOM bindings, wrong-target hard-error.

## Context

Write purpose, contract, and test.md from [[location-41-renderer-portability]] child sentence, including Metal-or-document and hard-errors. Web path only. Native extern C waits on funding. Do not put a DOM into Host I/O.

TDD: ladder only.

## Verify

Spec files exist and name portable-import and portable-wrong-target tests.

scope: docs/specs/ui-framework/renderer-portability/

## Links

- [[slice-75-portable-web-import]]
- [[location-41-renderer-portability]]
