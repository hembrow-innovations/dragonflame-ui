---
id: "test-leaf-kit"
title: "Leaf kit tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: leaf-kit
tags: [test]
created_at: "2026-09-10"
updated_at: "2026-09-12"
---

# Leaf kit tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `leaf-kit.set:closed`, `leaf-kit.layout:css-on-web`, `leaf-kit.style:stylesheet-shaped`, `leaf-kit.text:is-leaf`, and `leaf-kit.host:config-at-leaves`. Oracle commands:

- node --test tests/leaf-kit/leaf-view-text-style.test.mjs
- node --test tests/leaf-kit/leaf-image-scroll.test.mjs
- node --test tests/leaf-kit/leaf-input-pressable.test.mjs
- node --test tests/leaf-kit/config-at-leaves.test.mjs

## Tests

- **tests/leaf-kit/leaf-view-text-style.test.mjs**: `view and text with style data on CSS`
  - **How:** view and text leaves render on DOM. Style is StyleSheet-shaped objects. Web layout is CSS
  - **Why:** promises `leaf-kit.set:closed`, `leaf-kit.layout:css-on-web`, `leaf-kit.style:stylesheet-shaped`, and `leaf-kit.text:is-leaf`
- **tests/leaf-kit/leaf-image-scroll.test.mjs**: `image and scroll`
  - **How:** image and scroll leaves render on DOM
  - **Why:** promise `leaf-kit.set:closed`
- **tests/leaf-kit/leaf-input-pressable.test.mjs**: `text input and pressable`
  - **How:** text input and pressable leaves render on DOM
  - **Why:** promise `leaf-kit.set:closed`
- **tests/leaf-kit/config-at-leaves.test.mjs**: `only the leaf adapter knows DOM versus UIView versus engine draw lists`
  - **How:** fails unless only the leaf adapter knows DOM versus UIView versus engine draw lists. Callers keep `h`, `render`, and the closed leaf kit. Fails if this checkout exports HostConfig or Host, lets host tokens appear outside the private leaf adapter, or lets composites import the host. Does not point CHECK at `tests/host-config/no-jsi.test.mjs`, `tests/host-config/no-hermes-host-config.test.mjs`, `tests/leaf-kit/leaf-view-text-style.test.mjs`, or `tests/renderer-portability/portable-program.test.mjs`
  - **Why:** promise `leaf-kit.host:config-at-leaves`

## Gaps

- No test yet for `leaf-kit.text:per-host-metrics`, `leaf-kit.set:forbid-html`, `leaf-kit.layout:forbid-taffy-on-web`, `leaf-kit.style:forbid-css-engine`, `leaf-kit.layout:not-pixel-identical`, or `leaf-kit.host:forbid-jsi-hermes`.
- Steal oracles stay on [[test-host-config]].
- Portable Program oracles stay on [[test-renderer-portability]].
- The oracle tests are not in the repo yet. This folder is ladder only.
- No test yet that extra leaf types outside the closed set fail.
