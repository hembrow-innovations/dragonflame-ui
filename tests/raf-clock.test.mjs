import assert from "node:assert/strict";
import { test } from "node:test";
import { Clock, Signal } from "dragonflame-ui";

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

test("rAF clock ticks", () => {
	const raf = mockRaf();
	try {
		let ticks = 0;
		let time;
		const stop = Clock((t) => {
			ticks += 1;
			time = t;
		});
		assert.equal(raf.frames.length, 1);
		raf.frames[0](16);
		assert.equal(ticks, 1);
		assert.equal(time, 16);
		stop();
	} finally {
		raf.restore();
	}
});

test("signals replace build dirtying only", () => {
	const raf = mockRaf();
	try {
		let ticks = 0;
		Clock(() => {
			ticks += 1;
		});
		const scheduled = raf.frames.length;
		const count = Signal(0);
		count.set(1);
		assert.equal(count.get(), 1);
		assert.equal(ticks, 0);
		assert.equal(raf.frames.length, scheduled);
		raf.frames[0](16);
		assert.equal(ticks, 1);
	} finally {
		raf.restore();
	}
});
