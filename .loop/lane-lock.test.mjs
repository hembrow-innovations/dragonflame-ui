import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { laneLockPath, withLaneLock } from "./lane-lock.mjs";

function tempRoot() {
	return mkdtempSync(join(tmpdir(), "lane-lock-"));
}

test("serializes overlapping lock holders", async () => {
	const root = tempRoot();
	const order = [];
	let inside = 0;
	const one = withLaneLock(async () => {
		inside++;
		order.push("a-start");
		assert.equal(inside, 1);
		await new Promise((r) => setTimeout(r, 40));
		assert.equal(inside, 1);
		order.push("a-end");
		inside--;
	}, { root });
	const two = withLaneLock(async () => {
		inside++;
		order.push("b-start");
		assert.equal(inside, 1);
		order.push("b-end");
		inside--;
	}, { root });
	await Promise.all([one, two]);
	assert.deepEqual(order, ["a-start", "a-end", "b-start", "b-end"]);
});

test("reentrant lock does not deadlock", async () => {
	const root = tempRoot();
	const value = await withLaneLock(async () => {
		return withLaneLock(async () => "ok", { root });
	}, { root });
	assert.equal(value, "ok");
});

test("steals a lock whose pid is dead", async () => {
	const root = tempRoot();
	mkdirSync(join(root, ".loop"), { recursive: true });
	writeFileSync(laneLockPath(root), "99999999\n");
	const value = await withLaneLock(async () => "stolen", {
		root,
		timeoutMs: 1000,
	});
	assert.equal(value, "stolen");
	assert.throws(() => readFileSync(laneLockPath(root)));
});
