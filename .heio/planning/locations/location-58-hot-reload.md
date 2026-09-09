---
id: "location-58-hot-reload"
title: "Hot reload"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Hot reload

## This is working when

Hot reload via Embed or JS-debug exists later, and does not block a first version.

## Nested locations

- **Not first version**: this is working when hot reload does not block a first version.
  - bet: try a first version without hot reload; pivot if hot reload becomes a first-version gate
- **Embed or JS-debug**: this is working when hot reload, if it exists, is via Embed or JS-debug. The source does not define those names further.
  - bet: try those later paths; pivot if OTA of a JS bundle is used as hot reload
- **Optional Phase 4**: this is working when hot reload stays optional Phase 4.
  - bet: try optional later; pivot if Phase 1 waits on hot reload

## See also

- **Parent**: [[location-20-authoring-sugar]]
- **Idea**: [[overview-ui-framework]]
