---
title: Permissive default permissions
impact: MEDIUM
impactDescription: Deno deny-by-default is not the host policy
tags: [host, permissions]
---

## Permissive default permissions

Host filesystem and TCP succeed when a Program runs with no explicit grant subset. `--allow-fs-read` / `--allow-fs-write` / `--allow-net-listen` / `--allow-net-connect` install an opt-in subset.

**Incorrect:** denying fs/net when no flags are passed.

**Correct:** no flags → permissive. Flags → subset.

**Notes.** Not Deno locked-down. See `host-sockets-first`.
