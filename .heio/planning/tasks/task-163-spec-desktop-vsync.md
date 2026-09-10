---
id: "task-163-spec-desktop-vsync"
title: "Spec desktop vsync window"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-161-spec-crate-workspace-funded"
sprint: "native-if-funded"
slice: "slice-76-desktop-vsync-window"
tags: []
created_at: "2026-09-11T12:00:00Z"
updated_at: "2026-09-11T19:00:00Z"
---

# Spec desktop vsync window

## Blocked by

[[task-161-spec-crate-workspace-funded]]: funded workspace promises first.

## Done

Desktop vsync spec folder exists from wayfinder: embedder owns window and vsync, engine owns GPU, wgpu, engine in this repo, no WebView, no JS engine, tracing GC stays.

## Context

Write purpose, contract, and test.md from [[rounds-01-chart-framework]] answers 3, 6, 11, and 16, [[rounds-160-fund-native]], and locations 36, 37, 38, 39, 22, 60. Quote child destination sentences, not shorter parent bullets.

Quote [[task-164-hitl-name-desktop-window]] Answers: first desktop OS is macOS; window crate is winit. Do not invent Taffy rect FFI. Do not add Skia or a Flutter embedder. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files exist and name the two oracle tests. No WebView. No Hermes, JSC, or V8.

scope: docs/specs/ui-framework/desktop-embedder/

## Links

- [[slice-76-desktop-vsync-window]]
- [[rounds-160-fund-native]]
