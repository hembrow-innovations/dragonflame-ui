import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import * as ui from "dragonflame-ui";
import { Clock, GestureArena, SemanticsNode } from "dragonflame-ui";

const clockSrc = readFileSync(
	join(dirname(fileURLToPath(import.meta.url)), "../../src/clocks/clock.js"),
	"utf8",
);

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

test("vsync tickers exist beside the pipeline", () => {
	assert.equal(typeof Clock, "function");
	assert.equal("Ticker" in ui, false);
	assert.equal("SchedulerBinding" in ui, false);
	assert.equal("AnimationController" in ui, false);
	assert.equal(typeof GestureArena, "function");
	assert.equal(typeof SemanticsNode, "function");
	assert.doesNotMatch(
		clockSrc,
		/\blayout\b|\bhitTest\b|\bcomposite\b|\bGestureArena\b|\bSemanticsNode\b/,
	);

	const raf = mockRaf();
	try {
		let ticks = 0;
		let sweeps = 0;
		const arena = GestureArena();
		const sweep = arena.sweep.bind(arena);
		arena.sweep = (pointer) => {
			sweeps += 1;
			sweep(pointer);
		};
		const semantics = SemanticsNode({ testID: "app", accessibilityLabel: "App" });
		const dump = semantics.toStringDeep();
		const stop = Clock(() => {
			ticks += 1;
		});
		raf.frames[0](16);
		assert.equal(ticks, 1);
		assert.equal(sweeps, 0);
		assert.equal(semantics.toStringDeep(), dump);
		stop();
	} finally {
		raf.restore();
	}
});
