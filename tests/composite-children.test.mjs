import assert from "node:assert/strict";
import { test } from "node:test";
import { h, render } from "dragonflame-ui";

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

test("props.children nest through the composite onto DOM", () => {
	const previous = globalThis.document;
	globalThis.document = {
		createElement() {
			return hostNode();
		},
	};
	try {
		const parent = hostNode();
		function Card(props) {
			return h("view", { children: props.children });
		}
		function Title(props) {
			return h("text", { text: props.label });
		}
		function App() {
			return h(Card, {
				children: h(Title, { label: "hi" }),
			});
		}
		render(App, parent);
		assert.equal(parent.textContent, "hi");
	} finally {
		globalThis.document = previous;
	}
});
