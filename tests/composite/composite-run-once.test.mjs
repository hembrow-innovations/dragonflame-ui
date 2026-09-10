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

test("composite function did not re-run on a text patch", () => {
	const previous = globalThis.document;
	globalThis.document = {
		createElement() {
			return hostNode();
		},
	};
	try {
		const parent = hostNode();
		let runs = 0;
		let count;
		function Counter(props) {
			runs += 1;
			return h("text", { text: props.count });
		}
		function App() {
			count = Signal(0);
			return h(Counter, { count });
		}
		render(App, parent);
		const node = parent.childNodes[0];
		assert.equal(parent.textContent, "0");
		count.set(1);
		assert.equal(runs, 1);
		assert.equal(parent.textContent, "1");
		assert.equal(parent.childNodes[0], node);
	} finally {
		globalThis.document = previous;
	}
});
