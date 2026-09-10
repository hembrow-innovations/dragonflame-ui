import assert from "node:assert/strict";
import { test } from "node:test";
import { h, render, Signal, Owner } from "dragonflame-ui";

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

test("unmount disposes effects and nested owners", () => {
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
			Owner(() => {});
			return h("text", { text: count });
		}
		const unmount = render(Counter, parent);
		assert.equal(parent.textContent, "0");
		count.set(1);
		assert.equal(parent.textContent, "1");
		unmount();
		count.set(2);
		assert.equal(parent.textContent, "1");
	} finally {
		globalThis.document = previous;
	}
});
