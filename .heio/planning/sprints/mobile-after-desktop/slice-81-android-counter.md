---
id: "slice-81-android-counter"
title: "Android counter"
kind: slice
status: frozen
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-76-desktop-vsync-window"
  - "slice-70-counter-on-dom"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-11T08:52:52Z"
---

# Android counter

## Why

Same counter, Android host. After desktop honesty. No WebView. No Hermes as the app runtime.

## Done

The counter demo runs on Android x86_64 emulator, with arm64-v8a in scope, behind a thin Gradle shell at `hosts/android/`. Android views are hatch, not default. Embedder owns Activity and Choreographer. Engine owns GPU. Native host binary, not a JS bundle.

## Blocked by

[[slice-76-desktop-vsync-window]]: after desktop honesty. [[slice-70-counter-on-dom]]: same component model. [[ticket-61-native-ui-unfunded]] promoted in [[rounds-160-fund-native]].

## Non-goals

Starting mobile while desktop is still a WebView. Emulator-only as done. iOS. Store packaging. Android view attach. Faking a general LLVM lowerer. OEM widget class lists. Physical-device tap as an oracle.

## Oracle checklist

- [ ] O1: counter on Android emulator
  CHECK: node --test tests/android-embedder/counter-on-emulator.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: no WebView and no JS engine
  CHECK: node --test tests/android-embedder/no-webview-no-js-engine.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O3: arm64-v8a in scope
  CHECK: node --test tests/android-embedder/arm64-v8a-in-scope.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-269-spec-android-embedder]]
- [[task-270-red-green-no-webview-no-js-engine]]
- [[task-271-red-green-arm64-v8a-in-scope]]
- [[task-272-red-green-counter-on-emulator]]

## See also

- [[location-47-after-desktop]]
- [[location-49-android-embedder]]
- [[location-50-xcode-gradle-shells]]
- [[location-52-android-triples]]
- [[location-43-native-canvas-host]]
- [[rounds-268-freeze-android-counter]]
- [[rounds-01-chart-framework]]
- [[architecture-layer-cake]]
- [[glossary]]
