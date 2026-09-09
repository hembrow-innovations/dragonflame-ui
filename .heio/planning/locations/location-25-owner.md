---
id: "location-25-owner"
title: "Owner"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Owner

## This is working when

An ownership node exists for effects and nested reactive scopes, and unmount disposes effects and nested owners.

## Nested locations

- **Effects**: this is working when effects belong to an Owner.
  - bet: try Owner-scoped effects; pivot if effects are Fiber work or Flutter Element dirty flags
- **Nested scopes**: this is working when nested reactive scopes hang off an Owner.
  - bet: try nested owners; pivot if scope is an InheritedWidget dirty bit
- **Unmount disposes**: this is working when unmount disposes effects and nested owners.
  - bet: try dispose on unmount; pivot if teardown is omitted

## See also

- **Signals**: [[location-24-signals]]
- **Parent**: [[location-17-web-component-library]]
- **Glossary**: [[glossary]]
