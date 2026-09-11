---
id: "ticket-252-framework-not-draconic"
title: "Framework source is not Draconic"
kind: ticket
status: open
ticket_type: observation
blocked_by: []
tags: []
created_at: "2026-09-11T06:43:12Z"
updated_at: "2026-09-11T06:43:12Z"
---

# Framework source is not Draconic

## Signal

Counterpart asked why nothing is written in Draconic. [[intent]] says the Framework library is Draconic. [[architecture-layer-cake]] says framework source is Draconic and web build is the JS backend. This checkout has no Draconic sources. The git package under `src/` is hand-written JavaScript.

## Fit

Unknown until triage. Likely this project, later slice under [[location-17-web-component-library]]. Does not rewrite a destination: [[location-30-js-backend]] already says web compile is Frontend to shared IR to the JS backend. The nested bet was prove the library on JS first.

## Notes

Facts only. [[contract-js-backend]] locks `js-backend.emit:no-emit-here`: this repo does not copy JS emit from the sibling toolchain. Drain does not claim this ticket. Do not implement the compiler here.
