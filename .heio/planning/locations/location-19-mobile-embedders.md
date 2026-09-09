---
id: "location-19-mobile-embedders"
title: "Mobile embedders"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:00:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Mobile embedders

## This is working when

iOS and Android hosts exist with no WebView, thin Xcode and Gradle shells, iOS arm64 device plus simulator, Android arm64-v8a plus x86_64 emulator, and store packaging, after desktop honesty.

## Nested locations

- **[[location-47-after-desktop|After desktop]]**: this is working when mobile starts only after the desktop embedder is honest.
  - bet: try mobile after desktop honesty; pivot if native UI is never funded
- **[[location-48-ios-embedder|iOS embedder]]**: this is working when an iOS host exists with no WebView and no JS engine.
  - bet: try a real iOS embedder; pivot if the host is WKWebView, Cordova, Capacitor, or Expo-web-in-WKWebView
- **[[location-49-android-embedder|Android embedder]]**: this is working when an Android host exists with no WebView and no JS engine.
  - bet: try a real Android embedder; pivot if the host is a WebView shell
- **[[location-50-xcode-gradle-shells|Xcode and Gradle shells]]**: this is working when thin Xcode and Gradle shells exist.
  - bet: try thin shells; pivot if store packaging demands a Flutter embedder
- **[[location-51-ios-triples|iOS triples]]**: this is working when iOS arm64 device plus simulator are in scope.
  - bet: try those triples; pivot if a sitting names a different device set
- **[[location-52-android-triples|Android triples]]**: this is working when Android arm64-v8a plus x86_64 emulator are in scope.
  - bet: try those triples; pivot if a sitting names a different ABI set
- **[[location-53-store-packaging|Store packaging]]**: this is working when store packaging exists.
  - bet: try store packaging after the shells; pivot if native updates become Expo-style OTA of a JS bundle
- **[[location-54-accessibility|Accessibility]]**: this is working when accessibility exists, with a semantics tree beside the render tree, not ARIA-only DOM as the native model.
  - bet: try a semantics tree; pivot if native a11y is ARIA-only DOM
- **[[location-55-text|Text]]**: this is working when text exists, with a per-host metrics seam, and without pretending CSS on iOS.
  - bet: try a per-host metrics seam; pivot if CSS is treated as iOS layout
- **[[location-56-platform-views|Platform views]]**: this is working when platform views exist as an escape hatch, not the default.
  - bet: try platform views as hatch; pivot if OEM views become the native default
- **[[location-39-desktop-embedder|Desktop embedder]]**: this is working when desktop honesty exists first.
  - bet: try mobile after desktop; pivot if mobile starts while desktop is still a WebView
- **[[location-44-oem-escape-hatch|OEM escape hatch]]**: this is working when UIView and Android views stay an escape hatch on mobile too.
  - bet: try hatch not default; pivot if OEM is the mobile default

## See also

- **Intent**: [[intent]]
- **Roadmap**: [[roadmap]]
- **Wayfinder**: [[rounds-01-chart-framework]]
- **Idea**: [[overview-ui-framework]]
- **Architecture**: [[architecture-layer-cake]]
- **Glossary**: [[glossary]]
