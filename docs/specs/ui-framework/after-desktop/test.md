---
id: "test-after-desktop"
title: "After desktop tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: after-desktop
tags: [test]
created_at: "2026-09-12"
updated_at: "2026-09-12"
---

# After desktop tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `after-desktop.honesty:follow-desktop-honesty`, `after-desktop.host:cfg-siblings`, and `after-desktop.types:forbid-public-gate`. Oracle commands:

- node --test tests/after-desktop/mobile-follows-desktop-honesty.test.mjs

## Tests

- **tests/after-desktop/mobile-follows-desktop-honesty.test.mjs**: `mobile follows desktop honesty`
  - **How:** fails if a mobile shell can start from a second crate or a WebView desktop sibling, or if a public AfterDesktop or mayStartMobile type exists. Host shells follow desktop honesty as cfg siblings in `crates/embedder`
  - **Why:** promises `after-desktop.honesty:follow-desktop-honesty`, `after-desktop.host:cfg-siblings`, and `after-desktop.types:forbid-public-gate`

## Gaps

- Funding grain stays out.
- Phase 3 gate unstated stays out.
- Desktop vsync, window, no-WebView, and no-JS-engine oracles stay on [[test-desktop-embedder]].
- iOS no-WebView oracles stay on [[test-ios-embedder]].
- Do not restage [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]] oracles.
