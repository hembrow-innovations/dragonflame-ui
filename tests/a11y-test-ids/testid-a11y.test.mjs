import assert from "node:assert/strict";
import { test } from "node:test";
import { h, render, pressable, text } from "dragonflame-ui";

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

test("finds a pressable by test ID", () => {
	withDocument(() => {
		const parent = hostNode();
		function App() {
			return h(pressable, {
				testID: "save",
				children: h(text, { text: "Save" }),
			});
		}
		render(App, parent);
		const found = parent.childNodes.find((node) => node["data-testid"] === "save");
		assert.equal(found.localName, "button");
	});
});

test("a11y props present as first-class props", () => {
	withDocument(() => {
		const parent = hostNode();
		function App() {
			return h(pressable, {
				testID: "save",
				accessibilityLabel: "Save",
				children: h(text, { text: "Save" }),
			});
		}
		render(App, parent);
		const tap = parent.childNodes[0];
		assert.equal(tap["data-testid"], "save");
		assert.equal(tap["aria-label"], "Save");
	});
});
