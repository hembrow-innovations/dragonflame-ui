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

test("function type mounts to host leaves", () => {
	const previous = globalThis.document;
	globalThis.document = {
		createElement() {
			return hostNode();
		},
	};
	try {
		const parent = hostNode();
		function Label(props) {
			return h("text", { text: props.label });
		}
		function App() {
			return h(Label, { label: "hello" });
		}
		render(App, parent);
		assert.equal(parent.textContent, "hello");
	} finally {
		globalThis.document = previous;
	}
});
