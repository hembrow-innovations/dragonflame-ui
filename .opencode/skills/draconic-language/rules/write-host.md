---
title: Host I/O is free globals
impact: CRITICAL
impactDescription: Importing host APIs or free console fails at check or emit
tags: [write, host, globals]
---

## Host I/O is free globals

Host APIs are free identifiers on the global object (`tcpListen`, `stdoutWrite`, `readFileText`, `processArgs`). They are not ESM imports. Browser and JS host objects (`console`, `document`, `localStorage`) are also not in scope as free names: bind them from `globalThis`.

**Incorrect:**

```
import { tcpListen } from "draconic:host";
console.log("hi");
```

**Correct:**

```
let console = globalThis.console;
console.log("hi");
stdoutWrite("ok\n");
let text = readFileText("config.txt");
let s = tcpListen(8080);
```

**Notes.** Listen and server paths are native first. JS hard-errors unsupported host APIs until an explicit bridge exists. Default permission policy is permissive. Networking is sockets-first (`tcpListen` / `tcpAccept` / `tcpConnect` / `tcpRead` / `tcpWrite`), then thin HTTP/1.1 helpers (`httpParseRequest`, `httpWriteResponse`). Not a Node-shaped `http` module as the only entry. See `dual-host-globals`, `host-sockets-first`, `host-permissive-default`. Sibling samples: `~/workbench/draconic/examples/fizzbuzz/main.drac`, `~/workbench/draconic/examples/http-echo/main.drac`, `~/workbench/draconic/examples/flagship-service/portable.drac`.
