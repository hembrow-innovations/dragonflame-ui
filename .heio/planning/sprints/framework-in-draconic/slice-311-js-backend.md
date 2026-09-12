---
id: "slice-311-js-backend"
title: "JS backend"
kind: slice
status: frozen
sprint: "framework-in-draconic"
blocked_by: []
tags: []
created_at: "2026-09-12T14:00:00Z"
updated_at: "2026-09-12T14:00:00Z"
---

# JS backend

## Why

Prove web compile is the existing sibling path, Frontend to shared IR to the JS backend, and that the browser runs that JavaScript. This package does not own emit.

## Done

Web compile is Frontend to shared IR to the JS backend, and the browser runs that JavaScript. Callers still import dragonflame-ui. No public compile helper. No Frontend type. No IR type.

## Blocked by

None.

## Non-goals

A public compile API. Implementing the compiler here. Copying JS emit. Emitting TypeScript. Forking IR. Naming the browser API set. Freezing Browser APIs, Compile-time split, Not RN-but-bytecode, No eval, or Phase 0 assumed. Restaging `js-backend.eval:no-eval-host`, `js-backend.split:no-native-stubs`, or `js-backend.emit:no-emit-here`. Restaging [[slice-283-draconic-framework-source]]. Restaging [[purpose-absence]] TypeScript, IR-fork, or bytecode-VM filename oracles. Pointing this slice CHECK at `tests/framework-source/sibling-compile.test.mjs`. JSX.

## Oracle checklist

- [ ] O1: web compile is Frontend to shared IR to the JS backend, and the browser runs that JavaScript
  CHECK: node --test tests/js-backend/frontend-ir-js.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-312-spec-js-backend-path]]
- [[task-313-red-green-js-backend-path]]

## See also

- [[location-30-js-backend]]
- [[location-17-web-component-library]]
- [[intent]]
- [[overview-ui-framework]]
- [[architecture-layer-cake]]
- [[purpose-js-backend]]
- [[contract-js-backend]]
- [[test-js-backend]]
- [[slice-283-draconic-framework-source]]
- [[rounds-310-freeze-js-backend]]
