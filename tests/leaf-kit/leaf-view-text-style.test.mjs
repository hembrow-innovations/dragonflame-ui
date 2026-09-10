import assert from "node:assert/strict";
import { test } from "node:test";
import { h, render, view, text, StyleSheet } from "dragonflame-ui";

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

test("view and text with style data on CSS", () => {
	const previous = globalThis.document;
	globalThis.document = {
		createElement(type) {
			const node = hostNode();
			node.localName = type;
			return node;
		},
	};
	try {
		const styles = StyleSheet.create({
			box: { flexDirection: "column", padding: 8 },
			label: { fontSize: 16 },
		});
		const parent = hostNode();
		function App() {
			return h(view, {
				style: styles.box,
				children: h(text, { style: styles.label, text: "hi" }),
			});
		}
		render(App, parent);
		const box = parent.childNodes[0];
		const label = box.childNodes[0];
		assert.equal(parent.textContent, "hi");
		assert.equal(box.localName, "div");
		assert.equal(label.localName, "span");
		assert.equal(box.style.flexDirection, "column");
		assert.equal(box.style.padding, 8);
		assert.equal(label.style.fontSize, 16);
		assert.equal(styles.box.flexDirection, "column");
		assert.equal(styles.label.fontSize, 16);
	} finally {
		globalThis.document = previous;
	}
});
