---
id: "task-280-spec-platform-views"
title: "Spec platform views"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "mobile-after-desktop"
slice: "slice-84-platform-view-hatch"
tags: []
created_at: "2026-09-11T21:22:00Z"
updated_at: "2026-09-11T21:22:00Z"
---

# Spec platform views

## Blocked by

None.

## Done

Platform-views spec folder exists from [[location-56-platform-views]], [[location-44-oem-escape-hatch]], [[purpose-oem-hatch]], and [[rounds-279-freeze-platform-view-hatch]]: iOS embedder occupies the existing platform-view slot, canvas remains default, no async Bridge.

## Context

Write purpose, contract, and test.md from [[rounds-279-freeze-platform-view-hatch]] and [[location-56-platform-views]]. Quote child destination sentences.

First tracer: the iOS embedder occupies the existing engine slot by slot id. Canvas remains the default host. Occupying the hatch is not how all native UI is built. No async Bridge. Public `UiKitView` stays unnamed. Simulator is the run oracle.

Do not invent public `UiKitView`, `AndroidView`, `HtmlElementView`, `NSView`, or `HWND`. Do not invent Android view attach. Do not invent a web OEM host. Do not invent async Bridge, platform channels, or JSI. Do not invent a public `occupyHatch`. Do not repeat canvas-default or platform-view-slot oracles. Those live on [[purpose-oem-hatch]]. Do not repeat no-webview, no-js-engine, or counter draw-list oracles. Those live on [[purpose-ios-embedder]]. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files exist and name the two oracle tests.

scope: docs/specs/ui-framework/platform-views/

## Links

- [[slice-84-platform-view-hatch]]
- [[rounds-279-freeze-platform-view-hatch]]
- [[location-56-platform-views]]
- [[purpose-oem-hatch]]

## Agent Brief

**Category:** enhancement
**Summary:** Assert the platform-views ladder: iOS occupy of the existing hatch slot, canvas remains default, no async Bridge.

**Intent (required when product behaviour changes):**
- Promise ids: assert `platform-views` promises from [[location-56-platform-views]]; do not invent OS view class names
- Purpose: write [[purpose-platform-views]] in this sitting
- Contract-first: assert promise then name tests in test.md. No product code

**Current behavior:**
[[purpose-oem-hatch]] proves a desktop slot id and leaves iOS attach out of scope. No platform-views spec folder exists. Slice oracles are named on [[slice-84-platform-view-hatch]].

**Desired behavior:**
A spec folder locks two oracles: occupying the hatch does not make OEM the default host, and the iOS embedder occupies the existing platform-view slot with no async Bridge. Oracle commands are `node --test tests/platform-views/hatch-not-default.test.mjs` and `node --test tests/platform-views/slot-occupied-on-ios.test.mjs`.

**Key interfaces:**
- Purpose, contract, and test notes for area `platform-views`
- Promises must not name `UiKitView` or `AndroidView`

**Acceptance criteria:**
- [ ] purpose, contract, and test.md exist for platform-views
- [ ] test.md names both oracle commands above
- [ ] Public OS view types stay unnamed
- [ ] No product code

**Out of scope:**
- Implementing occupy
- Android attach
- Repeating [[purpose-oem-hatch]] slot oracles
- Repeating [[purpose-ios-embedder]] host oracles
