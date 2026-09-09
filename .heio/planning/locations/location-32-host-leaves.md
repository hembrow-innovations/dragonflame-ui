---
id: "location-32-host-leaves"
title: "Host leaves"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Host leaves

## This is working when

The small host primitive set is view, text, image, scroll, text input, and pressable.

## Nested locations

- **Closed set**: this is working when host leaves are view, text, image, scroll, text input, and pressable.
  - bet: try that closed set; pivot if HTML or every UIKit class becomes the leaf set
- **Shared composites**: this is working when shared code is composite components and host leaves are a closed set.
  - bet: try composites over leaves; pivot if portable code imports Metal or `document` directly
- **Host config**: this is working when only the leaf adapter knows DOM versus UIView versus engine draw lists. See [[location-35-host-config]]
  - bet: try a leaf adapter; pivot if every component knows the host
- **Text leaf**: this is working when text is a host leaf. Native text metrics, if funded, are a per-host seam. See [[location-55-text]]
  - bet: try text as a leaf; pivot if CSS on iOS is pretended

## See also

- **Parent**: [[location-17-web-component-library]]
- **Host config**: [[location-35-host-config]]
- **Idea**: [[overview-ui-framework]]
- **Architecture**: [[architecture-layer-cake]]
- **Glossary**: [[glossary]]
