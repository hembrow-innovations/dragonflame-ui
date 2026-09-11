import assert from "node:assert/strict";
import { test } from "node:test";
import {
	h,
	pressable,
	Signal,
	GestureArena,
	TapGestureRecognizer,
	HorizontalDragGestureRecognizer,
} from "dragonflame-ui";

test("press wins the arena", () => {
	const tap = TapGestureRecognizer();
	const drag = HorizontalDragGestureRecognizer();
	assert.equal(typeof tap.addPointer, "function");
	assert.equal(typeof tap.acceptGesture, "function");
	assert.equal(typeof tap.rejectGesture, "function");
	assert.equal(typeof tap.resolve, "function");
	assert.equal(typeof drag.addPointer, "function");
	assert.equal(typeof drag.acceptGesture, "function");
	assert.equal(typeof drag.rejectGesture, "function");
	assert.equal(typeof drag.resolve, "function");

	let pressed = 0;
	const arena = GestureArena();
	const tree = h(pressable, { onPress: () => { pressed += 1; } });
	assert.equal(tree.type, pressable);
	const pointer = 1;
	arena.add(pointer, drag);

	const down = { pointer, x: 0, y: 0, kind: "down" };
	const move = { pointer, x: 1, y: 0, kind: "move" };
	const up = { pointer, x: 1, y: 0, kind: "up" };
	tap.addPointer(down);
	drag.addPointer(down);
	tap.addPointer(move);
	drag.addPointer(move);
	tap.addPointer(up);
	drag.addPointer(up);

	arena.close(pointer);
	arena.sweep(pointer);
	assert.equal(pressed, 1);

	const count = Signal(0);
	count.set(1);
	assert.equal(pressed, 1);
	assert.equal(count.get(), 1);
});
