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

test("signal write patches the same DOM text", () => {
	const previous = globalThis.document;
	globalThis.document = {
		createElement() {
			return hostNode();
		},
	};
	try {
		const parent = hostNode();
		let count;
		function Counter() {
			count = Signal(0);
			return h("text", { text: count });
		}
		render(Counter, parent);
		const node = parent.childNodes[0];
		assert.equal(parent.textContent, "0");
		count.set(1);
		assert.equal(parent.textContent, "1");
		assert.equal(parent.childNodes[0], node);
	} finally {
		globalThis.document = previous;
	}
});
