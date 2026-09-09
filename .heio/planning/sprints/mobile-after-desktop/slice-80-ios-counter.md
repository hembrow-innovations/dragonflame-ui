---
id: "slice-80-ios-counter"
title: "iOS counter"
kind: slice
status: shaping
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-76-desktop-vsync-window"
  - "slice-70-counter-on-dom"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# iOS counter

## Why

Same counter, iOS host. After desktop honesty. No WKWebView. No JSC as the app runtime.

## Done

The counter demo runs on iOS simulator, with iOS arm64 device in scope, behind a thin Xcode shell. UIView is hatch, not default.

## Blocked by

[[slice-76-desktop-vsync-window]]: after desktop honesty. [[slice-70-counter-on-dom]]: same component model. [[ticket-61-native-ui-unfunded]].

## Non-goals

Starting mobile while desktop is still a WebView. Simulator-only as done.

## Oracle checklist

- [ ] O1: counter on iOS simulator
  CHECK: command named in the ios spec test.md after freeze
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: no WebView
  CHECK: command named in that spec
  EXPECT: pass
  EVIDENCE: pending

## Pool

None until freeze. Device greens will be hitl.

## See also

- [[location-47-after-desktop]]
- [[location-48-ios-embedder]]
- [[location-50-xcode-gradle-shells]]
- [[location-51-ios-triples]]
