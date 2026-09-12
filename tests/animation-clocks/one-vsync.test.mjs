import assert from "node:assert/strict";
import { test } from "node:test";
import * as ui from "dragonflame-ui";
import { Clock } from "dragonflame-ui";

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

test("two Clock subscribers share one embedder vsync and the same t", () => {
	assert.equal(typeof Clock, "function");
	assert.equal("Ticker" in ui, false);
	assert.equal("SchedulerBinding" in ui, false);
	assert.equal("AnimationController" in ui, false);
	assert.equal("VsyncPort" in ui, false);

	const raf = mockRaf();
	try {
		const a = [];
		const b = [];
		const stopA = Clock((t) => {
			a.push(t);
		});
		const stopB = Clock((t) => {
			b.push(t);
		});
		assert.equal(raf.frames.length, 1);
		raf.frames[0](16);
		assert.deepEqual(a, [16]);
		assert.deepEqual(b, [16]);
		assert.equal(raf.frames.length, 2);
		stopA();
		raf.frames[1](32);
		assert.deepEqual(a, [16]);
		assert.deepEqual(b, [16, 32]);
		stopB();
		assert.equal(raf.frames[2], null);
	} finally {
		raf.restore();
	}
});
