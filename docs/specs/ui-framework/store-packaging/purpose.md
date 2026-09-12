---
id: "purpose-store-packaging"
title: "Store packaging purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for store packaging. Packaged binary after thin shells. Native updates are new binaries. Stores and formats unnamed."
status: active
domain: ui-framework
area: store-packaging
tags: [purpose]
created_at: "2026-09-12"
updated_at: "2026-09-12"
---

# Store packaging purpose

## Job

Store packaging exists as a packaged binary hanging off thin Xcode and Gradle shells. Native updates are new binaries.

Planning sitting [[rounds-257-settle-store-formats]], [[location-53-store-packaging]], [[location-50-xcode-gradle-shells]], and [[ticket-67-store-formats-unnamed]]:

- **Exists**: store packaging exists. The source does not name stores or formats.
- **New binaries**: native updates are new binaries, not Expo-style OTA of a JS bundle.
- **After shells**: packaging hangs off thin Xcode and Gradle shells. See [[location-50-xcode-gradle-shells]].
- **First tracer**: a packaged binary hanging off the thin shells at `hosts/ios/` and `hosts/android/`.
- **Unnamed**: stores and formats stay unnamed so [[location-53-store-packaging]] is not rewritten.

## In scope

Child destination sentences from [[location-53-store-packaging]]:

- **Exists**: store packaging exists. The source does not name stores or formats.
- **New binaries**: native updates are new binaries, not Expo-style OTA of a JS bundle.
- **After shells**: packaging hangs off thin Xcode and Gradle shells. See [[location-50-xcode-gradle-shells]]

Child destination sentence from [[location-50-xcode-gradle-shells]]:

- **Store packaging later**: store packaging can hang off these shells.

This area's oracles prove a packaged binary artifact exists off the thin shells, and that the native update path is not Expo-style OTA of a JS bundle. They do not prove hot reload is absent as a v1 gate. That lives on [[purpose-absence]]. They do not prove iOS or Android host honesty. Those live on [[purpose-ios-embedder]] and [[purpose-android-embedder]].

## Out of scope

- Naming stores or formats.
- Signing and upload.
- A Flutter embedder as the packaging proof.
- Repeating hot-reload OTA absence. That lives on [[purpose-absence]].
- Repeating iOS or Android host honesty oracles. Those live on [[purpose-ios-embedder]] and [[purpose-android-embedder]].
- Implementing the compiler in this repo.

## Surfaces

A packaged binary artifact hanging off the thin Xcode shell at `hosts/ios/` and the thin Gradle shell at `hosts/android/`. Native updates are new binaries, not Expo-style OTA of a JS bundle. The source does not name stores or formats.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-257-settle-store-formats]], [[location-53-store-packaging]], [[location-50-xcode-gradle-shells]], [[ticket-67-store-formats-unnamed]], [[glossary]], [[intent]], [[purpose-absence]], [[purpose-ios-embedder]], and [[purpose-android-embedder]].

## Open product questions

- (none)
