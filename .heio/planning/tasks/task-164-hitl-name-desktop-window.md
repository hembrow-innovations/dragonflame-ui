---
id: "task-164-hitl-name-desktop-window"
title: "HITL: name desktop window host"
kind: task
status: ready
mode: hitl
blocked_by:
  - "task-163-spec-desktop-vsync"
sprint: "native-if-funded"
slice: "slice-76-desktop-vsync-window"
tags: []
created_at: "2026-09-11T12:00:00Z"
updated_at: "2026-09-11T12:00:00Z"
---

# HITL: name desktop window host

## Blocked by

[[task-163-spec-desktop-vsync]]: spec exists so the named host can lock into that ladder.

## Done

Counterpart names the first desktop OS and the window crate. Drain may then open a window. AFK must not invent either name.

## Context

[[location-39-desktop-embedder]] says the embedder owns the window, vsync, and input. It does not name macOS versus other desktop, and it does not name a window crate. wgpu is already named.

Do not pick winit, raw AppKit, or an OS to make the demo compile. Record the names on this task and in the desktop vsync spec. Then [[task-166-red-green-vsync-window]] can proceed.

## Verify

First desktop OS and window crate are written here in Answers. Spec quotes those names. No extra product rules.

scope: this task note, docs/specs/ui-framework/desktop-embedder/

## Links

- [[slice-76-desktop-vsync-window]]
- [[task-163-spec-desktop-vsync]]
- [[rounds-160-fund-native]]
