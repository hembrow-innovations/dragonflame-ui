import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import * as ui from "dragonflame-ui";
import { Clock, GestureArena, SemanticsNode, h, view } from "dragonflame-ui";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const pipelineCopyArea = join(root, "docs/specs/ui-framework/pipeline-copy");
const skip = new Set([".git", "node_modules", "target", "99_scribble"]);
const leakedExport =
	/\bexport\s+(?:\{[^}]*\b(?:Pipeline|updateSemantics)\b|(?:default\s+)?(?:function|const|class|let|var)\s+(?:Pipeline|updateSemantics))\b/;
const afterStoreA11y = /skip(?:ping)? (?:a11y|accessibility) until after store packaging/i;

function walk(dir) {
	const out = [];
	for (const name of readdirSync(dir)) {
		if (skip.has(name)) continue;
		const path = join(dir, name);
		if (statSync(path).isDirectory()) out.push(...walk(path));
		else out.push(path);
	}
	return out;
}

function rel(path) {
	return relative(root, path).split("\\").join("/");
}

test("a semantics tree is copied as architecture beside the render tree, with a gesture arena and vsync tickers", () => {
	assert.equal(typeof SemanticsNode, "function");
	assert.equal(typeof GestureArena, "function");
	assert.equal(typeof Clock, "function");
	assert.equal("Pipeline" in ui, false);
	assert.equal("updateSemantics" in ui, false);
	assert.equal("flushLayout" in ui, false);
	assert.equal("flushPaint" in ui, false);
	assert.equal("flushHitTest" in ui, false);
	assert.equal("flushComposite" in ui, false);
	assert.equal(existsSync(pipelineCopyArea), false);

	const renderTree = h(view, {});
	const semantics = SemanticsNode({});
	const arena = GestureArena();
	assert.notEqual(semantics, renderTree);
	assert.equal(typeof arena.add, "function");

	assert.equal(existsSync(join(root, "src/semantics/node.js")), true);
	assert.equal(existsSync(join(root, "src/gestures/arena.js")), true);
	assert.equal(existsSync(join(root, "src/clocks/clock.js")), true);

	const srcFiles = walk(join(root, "src")).filter((path) => path.endsWith(".js"));
	assert.deepEqual(
		srcFiles.filter((path) => leakedExport.test(readFileSync(path, "utf8"))),
		[],
	);
	assert.deepEqual(
		srcFiles.filter((path) => /packaging/i.test(rel(path))),
		[],
	);
	assert.deepEqual(
		srcFiles.filter((path) => afterStoreA11y.test(readFileSync(path, "utf8"))),
		[],
	);
});
