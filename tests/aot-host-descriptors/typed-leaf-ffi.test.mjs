import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const engineDir = join(root, "crates/engine");
const adapterPath = join(engineDir, "src/scene/adapter.rs");
const srcDir = join(root, "src");

function walk(dir) {
	const out = [];
	for (const name of readdirSync(dir)) {
		if (name === "target" || name === "node_modules") continue;
		const path = join(dir, name);
		if (statSync(path).isDirectory()) out.push(...walk(path));
		else out.push(path);
	}
	return out;
}

function rustSources(dir) {
	return walk(dir).filter((path) => path.endsWith(".rs"));
}

function jsSources(dir) {
	return walk(dir).filter((path) => path.endsWith(".js"));
}

test("native leaves become compile-time typed FFI structs behind the leaf adapter", () => {
	assert.equal(existsSync(adapterPath), true);

	const adapterSrc = readFileSync(adapterPath, "utf8");
	assert.match(adapterSrc, /#\[repr\(C\)\]\s*struct LeafDesc\s*;/);
	assert.doesNotMatch(adapterSrc, /\bpub(?:\s*\([^)]*\))?\s+struct LeafDesc\b/);
	assert.match(adapterSrc, /\bfn describe\b[\s\S]*?-> LeafDesc/);
	assert.match(adapterSrc, /\benum NativeLeaf\b/);
	assert.match(adapterSrc, /\bNativeLeaf::View\b/);
	assert.match(adapterSrc, /\bNativeLeaf::Text\b/);
	assert.match(adapterSrc, /\bNativeLeaf::Image\b/);
	assert.match(adapterSrc, /\bNativeLeaf::Scroll\b/);
	assert.match(adapterSrc, /\bNativeLeaf::TextInput\b/);
	assert.match(adapterSrc, /\bNativeLeaf::Pressable\b/);
	assert.doesNotMatch(adapterSrc, /\bHostConfig\b/);
	assert.doesNotMatch(adapterSrc, /\bHostObject\b|\bjsi::/i);
	assert.doesNotMatch(adapterSrc, /\bstruct LeafDesc\s*\{/);

	const engineSrc = rustSources(engineDir)
		.map((path) => readFileSync(path, "utf8"))
		.join("\n");
	assert.equal((engineSrc.match(/extern "C"/g) ?? []).length, 1);
	assert.match(engineSrc, /extern "C"[\s\S]*?\bfn submit\b/);
	assert.doesNotMatch(engineSrc, /\bpub struct HostConfig\b/);

	const indexSrc = readFileSync(join(srcDir, "index.js"), "utf8");
	assert.match(indexSrc, /\bexport \{ h \}/);
	assert.match(indexSrc, /\bexport \{ view \}/);
	assert.doesNotMatch(indexSrc, /\bHostConfig\b/);

	const jsSrc = jsSources(srcDir)
		.map((path) => readFileSync(path, "utf8"))
		.join("\n");
	assert.doesNotMatch(jsSrc, /\bHostConfig\b/);

	const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
	assert.deepEqual(
		[
			...Object.keys(pkg.exports ?? {}),
			...Object.keys(pkg.dependencies ?? {}),
			...Object.keys(pkg.devDependencies ?? {}),
		].filter((key) => /hostconfig|host-config|leafdesc/i.test(key)),
		[],
	);
});
