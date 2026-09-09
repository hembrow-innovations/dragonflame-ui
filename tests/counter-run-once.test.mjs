import assert from "node:assert/strict";
import { test } from "node:test";
import { h, render, Signal } from "dragonflame-ui";

function hostNode() {
	const node = {
		childNodes: [],
		get textContent() {
			return this.childNodes.length
				? this.childNodes.map((child) => child.textContent).join("")
				: (this._text ?? "");
		},
		set textContent(value) {
			this._text = String(value);
			this.childNodes = [];
		},
		appendChild(child) {
			this.childNodes.push(child);
			return child;
		},
	};
	return node;
}

test("component function did not re-run on the write", () => {
	const previous = globalThis.document;
	globalThis.document = {
		createElement() {
			return hostNode();
		},
	};
	try {
		const parent = hostNode();
		let runs = 0;
		let count;
		function Counter() {
			runs += 1;
			count = Signal(0);
			return h("text", { text: count });
		}
		render(Counter, parent);
		count.set(1);
		assert.equal(runs, 1);
	} finally {
		globalThis.document = previous;
	}
});
