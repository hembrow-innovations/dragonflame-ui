---
title: Host APIs are free globals
impact: CRITICAL
impactDescription: Importing host I/O invents a module that does not exist
tags: [dual, host, globals]
---

## Host APIs are free globals

Host APIs are free identifiers on the global object. They are not ESM imports.

**Incorrect:**

```
import { tcpListen } from "draconic:host";
```

**Correct:**

```
tcpListen(8080);
```

**Notes.** Unavailable on a target is a hard-error. Listen and server paths are native first. See `write-host` and `host-sockets-first`.
