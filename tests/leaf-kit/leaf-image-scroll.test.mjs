import assert from "node:assert/strict";
import { readdirSync } from "node:fs";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { h, render, image, scroll, text } from "dragonflame-ui";

const closed = new Set(["view", "text", "image", "scroll", "text-input", "pressable"]);

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

test("image and scroll", () => {
	withDocument(() => {
		const parent = hostNode();
		function App() {
			return h(scroll, {
				children: [h(image, {}), h(text, { text: "hi" })],
			});
		}
		render(App, parent);
		const box = parent.childNodes[0];
		const pic = box.childNodes[0];
		assert.equal(box.localName, "div");
		assert.equal(pic.localName, "img");
		assert.equal(parent.textContent, "hi");
	});
});

test("extra leaf types outside the closed set fail", () => {
	withDocument(() => {
		const parent = hostNode();
		assert.throws(() => {
			render(() => h("div", {}), parent);
		});
	});
	const dir = fileURLToPath(new URL("../../src/leaves", import.meta.url));
	for (const file of readdirSync(dir)) {
		assert.equal(file.endsWith(".js"), true);
		assert.equal(closed.has(file.slice(0, -3)), true);
	}
});
