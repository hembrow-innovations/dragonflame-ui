import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const engineDir = join(root, "crates/engine");
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

test("platform-view slot exists", () => {
	assert.equal(existsSync(join(engineDir, "Cargo.toml")), true);

	const engineSrc = rustSources(engineDir)
		.map((path) => readFileSync(path, "utf8"))
		.join("\n");
	assert.equal((engineSrc.match(/extern "C"/g) ?? []).length, 1);
	assert.match(engineSrc, /extern "C"[\s\S]*?\bfn submit\b/);
	assert.doesNotMatch(
		engineSrc,
		/\bpub struct (AndroidView|UiKitView|HtmlElementView|NSView|HWND|PlatformViewLayer|OffsetLayer|PictureLayer)\b/,
	);
	assert.match(engineSrc, /platform-view/);
	assert.match(engineSrc, /\bpub struct Adapter\b/);
	assert.doesNotMatch(engineSrc, /\bBridge\b|\bJSI\b|platform.?channel/i);

	const jsSrc = jsSources(srcDir)
		.map((path) => readFileSync(path, "utf8"))
		.join("\n");
	assert.doesNotMatch(jsSrc, /\bNSView\b|\bAndroidView\b/);
	assert.doesNotMatch(jsSrc, /\bAdapter\b|\bBridge\b|\bJSI\b/);

	const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
	assert.deepEqual(
		[
			...Object.keys(pkg.exports ?? {}),
			...Object.keys(pkg.dependencies ?? {}),
			...Object.keys(pkg.devDependencies ?? {}),
		].filter((key) => /adapter|hatch|oem|platform-view|bridge/i.test(key)),
		[],
	);

	const run = spawnSync(
		"cargo",
		["run", "-p", "engine", "--bin", "platform-view-slot", "--quiet"],
		{ cwd: root, encoding: "utf8", timeout: 600000 },
	);
	assert.equal(run.status, 0, run.stderr);
	assert.match(run.stdout, /layer-kind platform-view/);
	assert.match(run.stdout, /slot-id \d+/);
	assert.match(run.stdout, /adapter native/);
	assert.doesNotMatch(run.stdout, /js-bridge/i);
});
