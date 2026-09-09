---
id: "location-47-after-desktop"
title: "After desktop"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# After desktop

## This is working when

Mobile starts only after the desktop embedder is honest.

## Nested locations

- **Desktop first**: this is working when mobile follows desktop honesty. See [[location-39-desktop-embedder]]
  - bet: try mobile after desktop; pivot if mobile starts while desktop is still a WebView
- **Funding**: this is working when mobile is pursued only if native UI is funded.
  - bet: try after funding and desktop; pivot if native UI is never funded
- **Phase 3 gate unstated**: this is working when Phase 3 work stays behind desktop honesty. The overview Phase 3 bullet has no already-true, after-human-decision, if-native-funded, or optional words.
  - bet: try not inventing a Phase 3 gate; pivot if mobile is scheduled as if the gate were written

## See also

- **Parent**: [[location-19-mobile-embedders]]
- **Desktop embedder**: [[location-39-desktop-embedder]]
- **Wayfinder**: [[rounds-01-chart-framework]]
- **Idea**: [[overview-ui-framework]]
