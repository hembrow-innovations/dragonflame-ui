---
title: Sockets first, then thin HTTP
impact: MEDIUM
impactDescription: HTTP-only host I/O hides the socket layer
tags: [host, tcp, http]
---

## Sockets first, then thin HTTP

Host networking lands TCP listen/accept/connect/read/write first, then thin HTTP/1.1 helpers on those sockets. Not a Node-shaped `http` module as the only entry.

**Incorrect:** only `serve()` with listen/accept owned by a non-Draconic host process.

**Correct:** global `tcpListen` / connect / read / write; HTTP helpers on top. Native first for listen/server; JS hard-errors unsupported host APIs until a bridge exists.

**Notes.** v1 HTTP is plaintext HTTP/1.1. See `dual-host-globals`.
