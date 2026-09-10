---
id: "task-154-spec-host-config"
title: "Spec host config honesty"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "web-tracers"
slice: "slice-153-host-config-honesty"
tags: []
created_at: "2026-09-10T14:20:00Z"
updated_at: "2026-09-10T14:20:00Z"
---

# Spec host config honesty

## Blocked by

None.

## Done

Host config spec quotes location-35 nested bets: do not steal JSI, and do not steal Hermes.

## Context

Write purpose, contract, and test.md from [[location-35-host-config]], intent, [[architecture-layer-cake]], [[overview-ui-framework]], and [[rounds-152-host-config-honesty]]. Quote child destination sentences: only the leaf adapter knows DOM versus UIView versus engine draw lists; New Architecture lessons must not steal JSI or Hermes.

Do not invent a public jsi. Do not invent a public hermesRuntime. Do not invent a public HostConfig. Do not lock immutable shadow tree, AOT FFI, or UI-thread measure. Do not repeat [[slice-72-leaf-kit-on-dom]] leaf-kit oracles. Do not repeat [[slice-75-portable-web-import]] document-import oracles. Do not repeat [[slice-112-js-backend-honesty]] no-eval or compile-time-split oracles. Do not repeat [[slice-121-dom-only-web-host]] no-public-Host oracles. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files exist and name the two oracle tests.

scope: docs/specs/ui-framework/host-config/

## Links

- [[slice-153-host-config-honesty]]
- [[rounds-152-host-config-honesty]]
