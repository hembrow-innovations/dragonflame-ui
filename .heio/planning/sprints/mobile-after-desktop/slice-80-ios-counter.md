---
id: "slice-80-ios-counter"
title: "iOS counter"
kind: slice
status: active
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-76-desktop-vsync-window"
  - "slice-70-counter-on-dom"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-11T22:00:00Z"
---

# iOS counter

## Why

Same counter, iOS host. After desktop honesty. No WKWebView. No JSC as the app runtime.

## Done

The counter demo runs on iOS simulator, with iOS arm64 device in scope, behind a thin Xcode shell at `hosts/ios/`. UIView is hatch, not default. Embedder owns UIWindow and CADisplayLink. Engine owns GPU. Native host binary, not a JS bundle.

## Blocked by

[[slice-76-desktop-vsync-window]]: after desktop honesty. [[slice-70-counter-on-dom]]: same component model. [[ticket-61-native-ui-unfunded]] promoted in [[rounds-160-fund-native]].

## Non-goals

Starting mobile while desktop is still a WebView. Simulator-only as done. Android. Store packaging. UIView attach. Faking a general LLVM lowerer. OEM widget class lists. Physical-device tap as an oracle.

## Oracle checklist

- [ ] O1: counter on iOS simulator
  CHECK: node --test tests/ios-embedder/counter-on-simulator.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: no WebView and no JS engine
  CHECK: node --test tests/ios-embedder/no-webview-no-js-engine.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O3: arm64 device in scope
  CHECK: node --test tests/ios-embedder/arm64-device-in-scope.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-264-spec-ios-embedder]]
- [[task-265-red-green-no-webview-no-js-engine]]
- [[task-266-red-green-arm64-device-in-scope]]
- [[task-267-red-green-counter-on-simulator]]

## See also

- [[location-47-after-desktop]]
- [[location-48-ios-embedder]]
- [[location-50-xcode-gradle-shells]]
- [[location-51-ios-triples]]
- [[location-43-native-canvas-host]]
- [[rounds-263-freeze-ios-counter]]
- [[rounds-01-chart-framework]]
- [[architecture-layer-cake]]
- [[glossary]]
