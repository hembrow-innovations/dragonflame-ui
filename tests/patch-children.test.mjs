import assert from "node:assert/strict";
import { test } from "node:test";
import { h, render, Signal, text, view } from "dragonflame-ui";

function hostNode() {
	const node = {
		childNodes: [],
		style: {},
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

test("children signal write patches one child under the same parent", () => {
	const previous = globalThis.document;
	globalThis.document = {
		createElement(type) {
			const node = hostNode();
			node.localName = type;
			return node;
		},
	};
	try {
		const parent = hostNode();
		let runs = 0;
		let child;
		function App() {
			runs += 1;
			child = Signal(h(text, { text: "a" }));
			return h(view, { children: child });
		}
		render(App, parent);
		const node = parent.childNodes[0];
		assert.equal(node.localName, "div");
		assert.equal(node.childNodes[0].localName, "span");
		assert.equal(node.textContent, "a");
		child.set(h(text, { text: "b" }));
		assert.equal(runs, 1);
		assert.equal(node.textContent, "b");
		assert.equal(parent.childNodes[0], node);
	} finally {
		globalThis.document = previous;
	}
});
