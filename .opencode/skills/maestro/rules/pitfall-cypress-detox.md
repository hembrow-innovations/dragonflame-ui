---
title: Do not introduce Cypress or Detox
impact: CRITICAL
impactDescription: second E2E stacks split the suite
tags: [pitfall, e2e]
---

## Do not introduce Cypress or Detox

Web and desktop E2E is Playwright. Mobile E2E is Maestro. Cypress and Detox are absent on purpose.

**Incorrect:** Adding `cypress` or `detox` to a package.json because a blog post used them.

**Correct:** Playwright specs under `tests/e2e/` for web or desktop. Maestro YAML under `tests/e2e/mobile/` for device. Interactive web debug uses playwright-cli, not Cypress.

Notes: Do not add Jest on web or Vitest on native either. Runner split is already decided. See `pitfall-no-detox-appium`.
