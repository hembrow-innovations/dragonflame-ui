import assert from "node:assert/strict";
import { test } from "node:test";
import { h, render, Signal, StyleSheet, view } from "dragonflame-ui";

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

test("style signal write patches the same host node", () => {
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
			next: { flexDirection: "row", padding: 16 },
		});
		const parent = hostNode();
		let runs = 0;
		let style;
		function App() {
			runs += 1;
			style = Signal(styles.box);
			return h(view, { style });
		}
		render(App, parent);
		const node = parent.childNodes[0];
		assert.equal(node.localName, "div");
		assert.equal(node.style.flexDirection, "column");
		assert.equal(node.style.padding, 8);
		style.set(styles.next);
		assert.equal(runs, 1);
		assert.equal(node.style.flexDirection, "row");
		assert.equal(node.style.padding, 16);
		assert.equal(parent.childNodes[0], node);
	} finally {
		globalThis.document = previous;
	}
});
