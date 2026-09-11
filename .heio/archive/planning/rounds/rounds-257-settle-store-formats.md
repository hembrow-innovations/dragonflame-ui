---
id: "rounds-257-settle-store-formats"
title: "Settle store names and formats"
kind: round
sitting_kind: planning
status: published
tags: []
created_at: "2026-09-11T07:00:00Z"
updated_at: "2026-09-11T07:00:00Z"
---

# Settle store names and formats

Counterpart is the user in chat. Notebook is this round.

Pick: [[ticket-67-store-formats-unnamed]]. Name only what freeze of [[slice-82-store-binaries]] may quote. Do not rewrite [[location-53-store-packaging]]. Sprint `mobile-after-desktop` still says do not freeze. Do not write `docs/specs/`.

## Vault pack

Query: settle first-tracer store packaging without naming stores or formats
Area: ui-framework

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-19-mobile-embedders.md`
- `.heio/planning/locations/location-53-store-packaging.md`
- `.heio/planning/sprints/mobile-after-desktop/shape.md`
- `.heio/planning/sprints/mobile-after-desktop/slice-82-store-binaries.md`
- `.heio/planning/tickets/ticket-67-store-formats-unnamed.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`

Related:

- `.heio/planning/locations/location-50-xcode-gradle-shells.md`
- `.heio/archive/planning/rounds/rounds-160-fund-native.md`

Excluded: App Store, Play, TestFlight, IPA, AAB, APK as product names, mobile freeze, JSX, scribble, rewriting location destinations.

Next: keep ticket open until [[slice-80-ios-counter]] and [[slice-81-android-counter]] are met. Then /afk-plan may freeze [[slice-82-store-binaries]] when the sprint allows freeze.

No packer script exists. Assembled by hand. Open product questions on the overview are empty.

## Round 1

### Questions

1. **Stores**: Whether the first tracer names App Store, Play, or TestFlight.
2. **Formats**: Whether the first tracer names IPA, xcarchive, AAB, or APK.
3. **First tracer**: What freeze of [[slice-82-store-binaries]] may quote.

### Answers

1. **Stores**: Unnamed. Naming them rewrites [[location-53-store-packaging]] nested grain "the source does not name stores or formats."
2. **Formats**: Unnamed. Same grain. IPA, AAB, and APK wait.
3. **First tracer**: A packaged binary hanging off the thin Xcode and Gradle shells. Updates are new binaries, not Expo-style OTA of a JS bundle.

Counterpart said use remaining recommended names. Recommendation is keep stores and formats unnamed.

## Confirm

Confirmed.

## Objectives

Settle the first tracer without rewriting [[location-53-store-packaging]]. Leave freeze to a later /afk-plan when the sprint allows it.

## Decisions so far

- Stores stay unnamed.
- Formats stay unnamed.
- First tracer is a packaged binary after shells, not an OTA JS bundle.

## Not yet specified

- App Store, Play, TestFlight
- IPA, xcarchive, AAB, APK
- Signing and upload flows

## Out of scope

- Freezing [[slice-82-store-binaries]] in this sitting
- Writing `docs/specs/`
- Expo-style OTA of a JS bundle
- Flutter embedder as the packaging proof
