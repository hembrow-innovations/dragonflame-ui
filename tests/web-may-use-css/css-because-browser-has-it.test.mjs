import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import * as ui from "dragonflame-ui";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const skip = new Set([".git", "node_modules", "target"]);
const self = fileURLToPath(import.meta.url);
const leaked = /^(css|parseCss|toCss|applyCss|StyleApply|applyStyle|CssEngine|LayoutEngine)$/;
const publicCss =
	/\b(?:export\s+(?:default\s+)?(?:class|function|const|let|var)\s+|class\s+|function\s+)(?:css|parseCss|toCss|applyCss|StyleApply|applyStyle|CssEngine|LayoutEngine)\b/;

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

function isNote(path) {
	const r = rel(path);
	return r.startsWith("docs/") || r.startsWith(".heio/") || r.startsWith(".opencode/");
}

function isCssMapperPath(r) {
	return (
		/parse[-_]?css/i.test(r) ||
		/(^|\/)to[-_]?css(\.|\/|$)/i.test(r) ||
		/apply[-_]?css/i.test(r) ||
		/style[-_]?apply/i.test(r) ||
		/apply[-_]?style/i.test(r) ||
		/css[-_]?mapper/i.test(r) ||
		/css[-_]?engine/i.test(r) ||
		/layout[-_]?engine/i.test(r)
	);
}

test("web may use CSS because the browser already has it", () => {
	const { StyleSheet } = ui;
	const styles = StyleSheet.create({
		box: { minWidth: 1 },
	});
	assert.deepEqual(styles.box, { minWidth: 1 });
	assert.deepEqual(Object.keys(ui).filter((key) => leaked.test(key)), []);
	const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
	assert.deepEqual(
		Object.keys(pkg.exports ?? {}).filter((key) => leaked.test(key.replace(/^\.\//, ""))),
		[],
	);
	const files = walk(root).filter((path) => {
		if (path === self || isNote(path)) return false;
		const r = rel(path);
		return !r.startsWith("crates/") && !r.startsWith("tests/leaf-kit/") && !r.startsWith("tests/style-as-data/");
	});
	assert.deepEqual(
		files.filter((path) => isCssMapperPath(rel(path))),
		[],
	);
	assert.deepEqual(
		walk(join(root, "src")).filter((path) => publicCss.test(readFileSync(path, "utf8"))),
		[],
	);
});
