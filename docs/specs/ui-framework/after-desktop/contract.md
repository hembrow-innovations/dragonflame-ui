---
id: "contract-after-desktop"
title: "After desktop contract"
kind: contract
description: "Durable, plain-language promises for follow-desktop honesty. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: after-desktop
tags: [contract]
created_at: "2026-09-12"
updated_at: "2026-09-12"
---

# After desktop contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `after-desktop.honesty:follow-desktop-honesty`: Mobile hosts start only after the desktop embedder is honest. Mobile follows desktop honesty. Mobile does not start while desktop is still a WebView.
  test: mobile follows desktop honesty
- `after-desktop.host:cfg-siblings`: Mobile host sequencing lives in the existing embedder crate host tree as cfg siblings. There is no second honesty crate.
  test: mobile follows desktop honesty
- `after-desktop.types:forbid-public-gate`: There is no public AfterDesktop or mayStartMobile type.
  test: mobile follows desktop honesty
