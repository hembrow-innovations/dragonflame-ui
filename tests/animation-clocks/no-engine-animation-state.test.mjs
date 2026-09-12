import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import * as ui from "dragonflame-ui";
import { Clock } from "dragonflame-ui";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const engineDir = join(root, "crates/engine");
const clocksDir = join(root, "src/clocks");

function walk(dir) {
	const out = [];
	for (const name of readdirSync(dir)) {
		if (name === "target") continue;
		const path = join(dir, name);
		if (statSync(path).isDirectory()) out.push(...walk(path));
		else out.push(path);
	}
	return out;
}

function rel(path) {
	return relative(root, path).split("\\").join("/");
}

function isAnimationStatePath(r) {
	return /animat/i.test(r) || /ticker/i.test(r) || /scheduler[-_]?binding/i.test(r);
}

function isAnimationStateSource(src) {
	return /\bAnimationController\b|\bTicker\b|\bSchedulerBinding\b|\bAnimationState\b/.test(src);
}

function hasSetState(src) {
	return /\bsetState\b/.test(src);
}

function mockRaf() {
	const frames = [];
	const previousRaf = globalThis.requestAnimationFrame;
	const previousCancel = globalThis.cancelAnimationFrame;
	globalThis.requestAnimationFrame = (cb) => {
		frames.push(cb);
		return frames.length;
	};
	globalThis.cancelAnimationFrame = (id) => {
		frames[id - 1] = null;
	};
	return {
		frames,
		restore() {
			globalThis.requestAnimationFrame = previousRaf;
			globalThis.cancelAnimationFrame = previousCancel;
		},
	};
}

test("engine does not own animation state", () => {
	const files = walk(engineDir);
	assert.deepEqual(
		files.filter((path) => isAnimationStatePath(rel(path))),
		[],
	);
	assert.deepEqual(
		files.filter((path) => isAnimationStateSource(readFileSync(path, "utf8"))),
		[],
	);
});

test("setState is not the ticker", () => {
	assert.equal("setState" in ui, false);
	assert.equal(typeof Clock.setState, "undefined");
	assert.deepEqual(
		walk(clocksDir).filter((path) => hasSetState(readFileSync(path, "utf8"))),
		[],
	);
	const raf = mockRaf();
	try {
		let ticks = 0;
		const stop = Clock(() => {
			ticks += 1;
		});
		assert.equal(typeof stop, "function");
		assert.equal("setState" in stop, false);
		raf.frames[0](16);
		assert.equal(ticks, 1);
		stop();
	} finally {
		raf.restore();
	}
});
