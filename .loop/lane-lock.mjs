#!/usr/bin/env node
import { AsyncLocalStorage } from "node:async_hooks";
import {
	closeSync,
	mkdirSync,
	openSync,
	readFileSync,
	unlinkSync,
	writeFileSync,
} from "node:fs";
import { join } from "node:path";

const nested = new AsyncLocalStorage();
const chains = new Map();

export function laneLockPath(root) {
	return join(root, ".loop", "lanes.lock");
}

function pidAlive(pid) {
	if (!Number.isInteger(pid) || pid <= 0) return false;
	try {
		process.kill(pid, 0);
		return true;
	} catch {
		return false;
	}
}

function holderPid(path) {
	try {
		return Number.parseInt(readFileSync(path, "utf8").trim(), 10);
	} catch {
		return 0;
	}
}

function enqueue(root, fn) {
	const prev = chains.get(root) ?? Promise.resolve();
	const next = prev.then(fn, fn);
	chains.set(root, next.catch(() => {}));
	return next;
}

async function withFileLock(root, timeoutMs, fn) {
	const dir = join(root, ".loop");
	const path = laneLockPath(root);
	mkdirSync(dir, { recursive: true });
	const start = Date.now();
	while (true) {
		let fd;
		try {
			fd = openSync(path, "wx");
			writeFileSync(fd, `${process.pid}\n`);
			try {
				return await fn();
			} finally {
				try {
					closeSync(fd);
				} catch {
					/* already closed */
				}
				try {
					unlinkSync(path);
				} catch {
					/* stolen or missing */
				}
			}
		} catch (err) {
			if (fd !== undefined) {
				try {
					closeSync(fd);
				} catch {
					/* ignore */
				}
			}
			if (err.code !== "EEXIST") throw err;
			const holder = holderPid(path);
			if (holder && !pidAlive(holder)) {
				try {
					unlinkSync(path);
				} catch {
					/* raced */
				}
				continue;
			}
			if (Date.now() - start > timeoutMs) {
				throw new Error(`lane lock timeout (${path})`);
			}
			await new Promise((r) => setTimeout(r, 25));
		}
	}
}

export async function withLaneLock(fn, opts = {}) {
	const root = opts.root ?? process.cwd();
	const timeoutMs = opts.timeoutMs ?? 60_000;
	if (nested.getStore()) return fn();
	return enqueue(root, () =>
		nested.run(true, () => withFileLock(root, timeoutMs, fn)),
	);
}
