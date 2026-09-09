---
id: "location-55-text"
title: "Text"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Text

## This is working when

Text exists, with a per-host metrics seam, and without pretending CSS on iOS.

## Nested locations

- **Phase 3 word**: this is working when text exists. The source does not say which APIs.
  - bet: try shipping text with mobile; pivot if a sitting names a different proof
- **Per-host metrics**: this is working when text measurement disagrees across DOM, UIKit, and a native canvas engine, and a per-host metrics seam exists.
  - bet: try a per-host metrics seam; pivot if CSS is treated as iOS layout
- **Engine glyphs**: this is working when native glyphs live in the Rust engine. See [[location-37-rust-engine]]
  - bet: try engine glyphs; pivot if Skia is pulled in for text
- **Text leaf**: this is working when text is a host leaf. See [[location-32-host-leaves]]
  - bet: try text as a leaf; pivot if every UIKit label class is a leaf
- **IO font load**: this is working when font load runs on the IO thread.
  - bet: try IO font load; pivot if font load blocks the UI thread

## See also

- **Parent**: [[location-19-mobile-embedders]]
- **Host leaves**: [[location-32-host-leaves]]
- **Rust engine**: [[location-37-rust-engine]]
- **Architecture**: [[architecture-layer-cake]]
- **Idea**: [[overview-ui-framework]]
