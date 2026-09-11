import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import * as ui from "dragonflame-ui";
import {
	GestureArena,
	TapGestureRecognizer,
	HorizontalDragGestureRecognizer,
} from "dragonflame-ui";

test("embedder packets, not DOM stopPropagation", () => {
	assert.equal("PointerRouter" in ui, false);
	assert.equal("PointerPacket" in ui, false);
	assert.equal("PointerDownEvent" in ui, false);
	assert.equal("PointerMoveEvent" in ui, false);
	assert.equal("PointerUpEvent" in ui, false);

	const kinds = [];
	let winner = null;
	const tap = TapGestureRecognizer({ onPress: () => { winner = "tap"; } });
	const drag = HorizontalDragGestureRecognizer();
	const tapAdd = tap.addPointer.bind(tap);
	const dragAdd = drag.addPointer.bind(drag);
	tap.addPointer = (packet) => {
		kinds.push(`tap:${packet.kind}`);
		tapAdd(packet);
	};
	drag.addPointer = (packet) => {
		kinds.push(`drag:${packet.kind}`);
		dragAdd(packet);
	};

	const arena = GestureArena();
	const pointer = 1;
	arena.add(pointer, tap);
	arena.add(pointer, drag);

	let stopped = 0;
	const down = { pointer, x: 0, y: 0, kind: "down", stopPropagation() { stopped += 1; } };
	const move = { pointer, x: 1, y: 0, kind: "move", stopPropagation() { stopped += 1; } };
	const up = { pointer, x: 1, y: 0, kind: "up", stopPropagation() { stopped += 1; } };
	assert.equal(down.constructor, Object);
	arena.addPointer(down);
	arena.addPointer(move);
	arena.addPointer(up);
	arena.close(pointer);
	arena.sweep(pointer);

	assert.deepEqual(kinds, ["tap:down", "drag:down", "tap:move", "drag:move", "tap:up", "drag:up"]);
	assert.equal(stopped, 0);
	assert.equal(winner, "tap");

	const gestures = join(dirname(fileURLToPath(import.meta.url)), "../../src/gestures");
	for (const name of readdirSync(gestures)) {
		assert.equal(readFileSync(join(gestures, name), "utf8").includes("stopPropagation"), false);
	}
});
