---
id: "slice-352-browser-apis"
title: "Browser APIs"
kind: slice
status: met
sprint: "framework-in-draconic"
blocked_by: []
tags: []
created_at: "2026-09-12T06:33:10Z"
updated_at: "2026-09-12T09:32:56Z"
---

# Browser APIs

## Why

Prove the first-version package uses browser APIs without naming the API set. Callers still import dragonflame-ui. This source does not publish a catalog.

## Done

That package uses browser APIs. The source does not name the API set. Callers still import dragonflame-ui. No public catalog. No BrowserAPI type. No public compile helper.

## Blocked by

None.

## Non-goals

Naming the browser API set. A public catalog, BrowserAPI type, or compile helper. Grepping a named global list as the prove. Freezing Compile-time split, Not RN-but-bytecode, No eval, or Phase 0 assumed. Freezing [[location-28-dom-renderer]] nested grains. Leaf-adapter ownership on [[location-35-host-config]]. Restaging `js-backend.eval:no-eval-host`, `js-backend.split:no-native-stubs`, `js-backend.emit:no-emit-here`, or `js-backend.path:frontend-ir-js`. Restaging [[slice-311-js-backend]]. Restaging `renderer-portability.web:js-only-dom` or [[slice-340-web-path]]. Restaging [[slice-348-portable-program]]. Restaging `counter.js-backend:unnamed-apis` or `counter.embedder:browser-raf`. Pointing this slice CHECK at `tests/js-backend/frontend-ir-js.test.mjs`, `tests/renderer-portability/web-path.test.mjs`, or `tests/renderer-portability/portable-program.test.mjs`. Implementing the compiler. Copying JS emit. JSX. Rewriting [[location-30-js-backend]].

## Oracle checklist

- [x] O1: that package uses browser APIs and the source does not name the API set
  CHECK: node --test tests/js-backend/browser-apis.test.mjs
  EXPECT: pass
  EVIDENCE: pass 1 fail 0 (node --test tests/js-backend/browser-apis.test.mjs)

## Pool

Durable links to task ids. Never drop them.

- [[task-353-spec-browser-apis]]
- [[task-354-red-green-browser-apis]]

## See also

- [[location-30-js-backend]]
- [[location-17-web-component-library]]
- [[intent]]
- [[overview-ui-framework]]
- [[architecture-layer-cake]]
- [[purpose-js-backend]]
- [[contract-js-backend]]
- [[test-js-backend]]
- [[slice-311-js-backend]]
- [[rounds-351-freeze-browser-apis]]
