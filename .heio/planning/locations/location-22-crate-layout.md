---
id: "location-22-crate-layout"
title: "Crate layout"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Crate layout

## This is working when

The dragonflame-ui library exists first, with no empty Rust crates, and a workspace only when native is funded.

## Nested locations

- **Library first**: this is working when the first package is the dragonflame-ui library.
  - bet: try the library package first; pivot if engine crates ship before the library
- **No empty Rust crates**: this is working when there are no empty Rust crates.
  - bet: try no empty crates; pivot if placeholder engine crates appear before funding
- **Workspace later**: this is working when a Cargo workspace exists only when native is funded.
  - bet: try a workspace only after funding; pivot if a Cargo toolchain workspace is treated as this UI product
- **Engine home**: this is working when the Rust engine, if funded, lives in this repo until keeping it here hurts.
  - bet: try this repo; pivot if a split is forced before it hurts. See [[location-36-engine-home]]

## See also

- **Web parent**: [[location-17-web-component-library]]
- **Native parent**: [[location-18-native-engine-desktop]]
- **Wayfinder**: [[rounds-01-chart-framework]]
- **Architecture**: [[architecture-layer-cake]]
