---
id: "ticket-09-mobile-packaging"
title: "Mobile packaging"
kind: ticket
status: closed
ticket_type: planning
tags: [wayfinder]
created_at: "2026-09-09T12:00:00Z"
updated_at: "2026-09-09T09:43:04Z"
references: ["rounds-01-chart-framework"]
blocked_by: ["ticket-07-native-default"]
---

# Mobile packaging

## Signal

iOS and Android packaging, app shells, and triples. Not toolchain D04.

## Fit

Wayfinder map decision for [[rounds-01-chart-framework]]. Not a slice yet.

## Notes

After desktop honesty: thin Xcode shell and thin Gradle shell. No React Native template. No Expo. Triples: iOS arm64 device plus simulator; Android arm64-v8a plus x86_64 emulator. Desktop stays on the native engine location.
