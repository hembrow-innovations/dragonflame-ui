import assert from "node:assert/strict";
import { test } from "node:test";
import { h, render, textInput, pressable } from "dragonflame-ui";

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

function withDocument(run) {
	const previous = globalThis.document;
	globalThis.document = {
		createElement(type) {
			const node = hostNode();
			node.localName = type;
			return node;
		},
	};
	try {
		return run();
	} finally {
		globalThis.document = previous;
	}
}

test("text input and pressable", () => {
	withDocument(() => {
		const parent = hostNode();
		function App() {
			return h(pressable, {
				children: h(textInput, {}),
			});
		}
		render(App, parent);
		const tap = parent.childNodes[0];
		const field = tap.childNodes[0];
		assert.equal(tap.localName, "button");
		assert.equal(field.localName, "input");
	});
});
