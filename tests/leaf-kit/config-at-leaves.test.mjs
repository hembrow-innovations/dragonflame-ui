import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import * as ui from "dragonflame-ui";
import { h, image, pressable, render, scroll, text, textInput, view } from "dragonflame-ui";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const srcDir = join(root, "src");
const rendererDir = join(srcDir, "renderer");
const leavesDir = join(srcDir, "leaves");
const hostToken =
	/"div"|"span"|"img"|"button"|"input"|\bHTMLElement\b|\bUIView\b|\bdrawList\b|draw lists?/;
const hostImport = /\bHostConfig\b|\bUIView\b|\bHTMLElement\b|from\s+["'][^"']*host/i;

function walk(dir) {
	const out = [];
	for (const name of readdirSync(dir)) {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) out.push(...walk(path));
		else out.push(path);
	}
	return out;
}

function rel(path) {
	return relative(root, path).split("\\").join("/");
}

test("only the leaf adapter knows DOM versus UIView versus engine draw lists", () => {
	assert.equal(typeof h, "function");
	assert.equal(typeof render, "function");
	assert.equal(view, "view");
	assert.equal(text, "text");
	assert.equal(image, "image");
	assert.equal(scroll, "scroll");
	assert.equal(textInput, "text-input");
	assert.equal(pressable, "pressable");
	assert.equal("HostConfig" in ui, false);
	assert.equal("Host" in ui, false);
	assert.equal("hostTag" in ui, false);

	const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
	assert.deepEqual(
		Object.keys(pkg.exports ?? {}).filter((key) => /hostconfig|\bhost\b/i.test(key)),
		[],
	);

	const kitFiles = [...walk(rendererDir), ...walk(leavesDir)];
	const holders = kitFiles.filter((path) => hostToken.test(readFileSync(path, "utf8")));
	assert.equal(holders.length, 1);
	const adapterSrc = readFileSync(holders[0], "utf8");
	assert.doesNotMatch(adapterSrc, /\bexport function render\b/);
	assert.doesNotMatch(adapterSrc, /\bHostConfig\b/);
	assert.doesNotMatch(adapterSrc, /\bexport \{ Host \}/);

	const indexSrc = readFileSync(join(srcDir, "index.js"), "utf8");
	assert.doesNotMatch(indexSrc, /\bHostConfig\b/);
	assert.doesNotMatch(indexSrc, /\bexport \{ Host \}/);
	assert.equal(indexSrc.includes(rel(holders[0])), false);

	const shared = walk(srcDir).filter((path) => {
		const r = rel(path);
		return !r.startsWith("src/renderer/") && !r.startsWith("src/leaves/") && !r.startsWith("src/portability/");
	});
	assert.deepEqual(
		shared.filter((path) => hostImport.test(readFileSync(path, "utf8"))),
		[],
	);
});
