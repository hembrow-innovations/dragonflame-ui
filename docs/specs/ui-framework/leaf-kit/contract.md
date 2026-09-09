---
id: "contract-leaf-kit"
title: "Leaf kit contract"
kind: contract
description: "Durable, plain-language promises for the closed host leaf kit on DOM. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: leaf-kit
tags: [contract]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Leaf kit contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `leaf-kit.set:closed`: Host leaves are view, text, image, scroll, text input, and pressable. They render on DOM.
  test: view and text with style data on CSS
  test: image and scroll
  test: text input and pressable
- `leaf-kit.layout:css-on-web`: Web layout is CSS because the browser already has it.
  test: view and text with style data on CSS
- `leaf-kit.style:stylesheet-shaped`: Style is StyleSheet-shaped objects. Web may use CSS because the browser already has it.
  test: view and text with style data on CSS
- `leaf-kit.text:is-leaf`: Text is a host leaf.
  test: view and text with style data on CSS
- `leaf-kit.host:config-at-leaves`: Only the leaf adapter knows DOM versus UIView versus engine draw lists. Shared code is composite components. A portable Program imports the renderer portability API, not Metal or `document`.
- `leaf-kit.text:per-host-metrics`: Text measurement disagrees across hosts, and a per-host metrics seam exists.
- `leaf-kit.set:forbid-html`: HTML is not the leaf set. Every UIKit class is not the leaf set.
- `leaf-kit.layout:forbid-taffy-on-web`: Web layout is not Taffy.
- `leaf-kit.style:forbid-css-engine`: Mapping style objects to CSS is not a CSS engine product and not a CSS language in the framework.
- `leaf-kit.layout:not-pixel-identical`: Web versus native is allowed to disagree. Copy the DOM backend as an idea, not as an attempt to make DOM look like Impeller.
- `leaf-kit.host:forbid-jsi-hermes`: Host config does not steal JSI or Hermes.
