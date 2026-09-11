---
id: "ticket-67-store-formats-unnamed"
title: "Store names and formats are unnamed"
kind: ticket
status: open
ticket_type: observation
blocked_by:
  - "slice-80-ios-counter"
  - "slice-81-android-counter"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-11T07:00:00Z"
---

# Store names and formats are unnamed

## Signal

[[location-53-store-packaging]] says store packaging exists after shells. Stores and formats are unnamed. Native updates are new binaries, not Expo-style OTA of a JS bundle.

## Fit

Settled on [[rounds-257-settle-store-formats]] and [[glossary]]. Stores and formats stay unnamed so [[location-53-store-packaging]] is not rewritten. Keep open until [[slice-80-ios-counter]] and [[slice-81-android-counter]] are met, and sprint `mobile-after-desktop` may freeze. Then /afk-plan freezes [[slice-82-store-binaries]]. Quote: packaged binary after shells; updates are new binaries; not Expo-style OTA of a JS bundle.

## Notes

Do not invent App Store, Play, IPA, AAB, or APK names. Drain does not claim this ticket.
