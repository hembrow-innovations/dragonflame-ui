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

Tests for this folder. They will lock `after-desktop.honesty:follow-desktop-honesty`, `after-desktop.host:cfg-siblings`, `after-desktop.types:forbid-public-gate`, `after-desktop.funding:pursue-only-if-native-funded`, `after-desktop.host:no-second-funding-crate`, `after-desktop.types:forbid-public-funding-token`, `after-desktop.phase-3:stay-behind-desktop-honesty`, `after-desktop.host:no-second-gate-crate`, and `after-desktop.types:forbid-public-phase-3-gate`. Oracle commands:

- node --test tests/after-desktop/mobile-follows-desktop-honesty.test.mjs
- node --test tests/after-desktop/mobile-pursued-only-if-native-funded.test.mjs
- node --test tests/after-desktop/phase-3-work-stays-behind-desktop-honesty.test.mjs

## Tests

- **tests/after-desktop/mobile-follows-desktop-honesty.test.mjs**: `mobile follows desktop honesty`
  - **How:** fails if a mobile shell can start from a second crate or a WebView desktop sibling, or if a public AfterDesktop or mayStartMobile type exists. Host shells follow desktop honesty as cfg siblings in `crates/embedder`
  - **Why:** promises `after-desktop.honesty:follow-desktop-honesty`, `after-desktop.host:cfg-siblings`, and `after-desktop.types:forbid-public-gate`
- **tests/after-desktop/mobile-pursued-only-if-native-funded.test.mjs**: `mobile is pursued only if native UI is funded`
  - **How:** fails if mobile work is pursued without Native is funded on [[purpose-desktop-embedder]], or if a public NativeFunded or mayPursueMobile type exists, or if a second funding crate or `docs/specs/ui-framework/funding/` area exists
  - **Why:** promises `after-desktop.funding:pursue-only-if-native-funded`, `after-desktop.host:no-second-funding-crate`, and `after-desktop.types:forbid-public-funding-token`
- **tests/after-desktop/phase-3-work-stays-behind-desktop-honesty.test.mjs**: `Phase 3 work stays behind desktop honesty`
  - **How:** fails if Phase 3 work is scheduled as if a Phase 3 gate were written, or if the Phase 3 bullet on [[overview-ui-framework]] gains already-true, after-human-decision, if-native-funded, or optional words, or if a public Phase3Gate or mayStartPhase3 type exists, or if a second gate crate or `docs/specs/ui-framework/phase-3-gate/` area exists
  - **Why:** promises `after-desktop.phase-3:stay-behind-desktop-honesty`, `after-desktop.host:no-second-gate-crate`, and `after-desktop.types:forbid-public-phase-3-gate`

## Gaps

- Desktop vsync, window, no-WebView, and no-JS-engine oracles stay on [[test-desktop-embedder]].
- iOS no-WebView oracles stay on [[test-ios-embedder]].
- Do not restage [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]] oracles.
