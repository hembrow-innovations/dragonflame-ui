import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import * as ui from "dragonflame-ui";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const skip = new Set([".git", "node_modules", "target"]);
const self = fileURLToPath(import.meta.url);
const leaked = /^(feedToTaffy|toPaint|feedNative|NativeStyle|LayoutEngine|Taffy)$/;
const publicFeed =
	/\b(?:export\s+(?:default\s+)?(?:class|function|const|let|var)\s+|class\s+|function\s+)(?:feedToTaffy|toPaint|feedNative|NativeStyle|LayoutEngine|Taffy)\b/;

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

function isFeedMapperPath(r) {
	return (
		/feed[-_]?to[-_]?taffy/i.test(r) ||
		/feed[-_]?native/i.test(r) ||
		/(^|\/)to[-_]?paint(\.|\/|$)/i.test(r) ||
		/layout[-_]?engine/i.test(r) ||
		/(^|\/)native[-_]?style(\.|\/|$)/i.test(r)
	);
}

test("on native those objects feed layout and paint", () => {
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
		return !r.startsWith("crates/") && !r.startsWith("tests/ffi-scene-commands/");
	});
	assert.deepEqual(
		files.filter((path) => isFeedMapperPath(rel(path))),
		[],
	);
	assert.deepEqual(
		walk(join(root, "src")).filter((path) => publicFeed.test(readFileSync(path, "utf8"))),
		[],
	);
});
