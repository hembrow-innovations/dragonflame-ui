---
id: "task-158-spec-portability-metal"
title: "Spec portability metal honesty"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "web-tracers"
slice: "slice-157-portability-metal-honesty"
tags: []
created_at: "2026-09-10T14:30:00Z"
updated_at: "2026-09-10T01:54:36Z"
---

# Spec portability metal honesty

## Blocked by

None.

## Done

Portability-metal spec quotes location-41 nested bet: a portable Program cannot import Metal.

## Context

Write purpose, contract, and test.md from [[location-41-renderer-portability]], intent, [[architecture-layer-cake]], [[overview-ui-framework]], and [[rounds-156-portability-metal-honesty]]. Quote child destination sentences: a portable Program cannot import Metal or `document` directly. This slice locks Metal only.

Do not invent a public Metal. Do not lock native `extern "C"` or unboxed FFI. Do not repeat [[slice-75-portable-web-import]] document-import or thin-surface oracles. Do not repeat [[slice-121-dom-only-web-host]] Host I/O oracles. Do not repeat [[slice-153-host-config-honesty]] JSI oracles. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files exist and name the oracle test.

scope: docs/specs/ui-framework/portability-metal/

## Links

- [[slice-157-portability-metal-honesty]]
- [[rounds-156-portability-metal-honesty]]
