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

test("static hyperscript text on DOM", () => {
	const previous = globalThis.document;
	globalThis.document = {
		createElement() {
			return hostNode();
		},
	};
	try {
		const parent = hostNode();
		function Counter() {
			return h("text", { text: "0" });
		}
		render(Counter, parent);
		assert.equal(parent.textContent, "0");
	} finally {
		globalThis.document = previous;
	}
});
