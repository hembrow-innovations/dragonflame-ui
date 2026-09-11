import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const engineDir = join(root, "crates/engine");

function walk(dir) {
	const out = [];
	for (const name of readdirSync(dir)) {
		if (name === "target") continue;
		const path = join(dir, name);
		if (statSync(path).isDirectory()) out.push(...walk(path));
		else out.push(path);
	}
	return out;
}

function rustSources(dir) {
	return walk(dir).filter((path) => path.endsWith(".rs"));
}

test("canvas remains default", () => {
	assert.equal(existsSync(join(engineDir, "Cargo.toml")), true);

	const engineSrc = rustSources(engineDir)
		.map((path) => readFileSync(path, "utf8"))
		.join("\n");
	assert.equal((engineSrc.match(/extern "C"/g) ?? []).length, 1);
	assert.match(engineSrc, /extern "C"[\s\S]*?\bfn submit\b/);
	assert.doesNotMatch(
		engineSrc,
		/\bpub struct (AndroidView|UiKitView|HtmlElementView|NSView|HWND)\b/,
	);

	const run = spawnSync(
		"cargo",
		["run", "-p", "engine", "--bin", "canvas-default", "--quiet"],
		{ cwd: root, encoding: "utf8", timeout: 600000 },
	);
	assert.equal(run.status, 0, run.stderr);
	assert.match(run.stdout, /packed-scene/);
	assert.match(run.stdout, /default-host canvas/);
	assert.doesNotMatch(run.stdout, /default-host oem/i);
	assert.match(run.stdout, /draw-list 1/);
});
