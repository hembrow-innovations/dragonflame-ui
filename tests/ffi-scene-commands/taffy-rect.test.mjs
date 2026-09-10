import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
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

function rel(path) {
	return relative(root, path).split("\\").join("/");
}

function depsOf(manifest) {
	const src = readFileSync(manifest, "utf8");
	const block = src.split("[dependencies]")[1] ?? "";
	return block
		.split("\n")
		.map((line) => line.trim())
		.filter((line) => line && !line.startsWith("[") && !line.startsWith("#"))
		.map((line) => line.split(/[\s=]/)[0]);
}

test("Taffy lays out a rect", () => {
	assert.equal(existsSync(join(engineDir, "Cargo.toml")), true);
	assert.equal(rel(engineDir).startsWith("crates/"), true);

	const engineDeps = depsOf(join(engineDir, "Cargo.toml"));
	assert.equal(engineDeps.includes("taffy"), true);
	assert.equal(engineDeps.includes("lightningcss"), false);
	assert.equal(engineDeps.includes("cssparser"), false);
	assert.equal(engineDeps.includes("stylis"), false);

	const engineSrc = rustSources(engineDir).map((path) => readFileSync(path, "utf8")).join("\n");
	assert.match(engineSrc, /\btaffy\b/);
	assert.match(engineSrc, /compute_layout/);
	assert.match(engineSrc, /#\[repr\(C\)\]/);
	assert.match(engineSrc, /\bf32\b/);
	assert.match(engineSrc, /extern "C"/);
	assert.equal((engineSrc.match(/extern "C"/g) ?? []).length, 1);
	assert.match(engineSrc, /extern "C"[\s\S]*?\bfn submit\b/);
	assert.doesNotMatch(engineSrc, /\bcssparser\b|\blightningcss\b|\bstylis\b/);
	assert.doesNotMatch(engineSrc, /\bextern "C" fn begin\b|\bextern "C" fn end\b/);

	const run = spawnSync(
		"cargo",
		["run", "-p", "engine", "--bin", "submit-rect", "--quiet"],
		{ cwd: root, encoding: "utf8", timeout: 600000 },
	);
	assert.equal(run.status, 0, run.stderr);
	assert.match(run.stdout, /packed-scene/);
	assert.match(run.stdout, /taffy-layout 80 40/);
	assert.match(run.stdout, /draw-list 1/);
	assert.match(run.stdout, /draw-color 1 0 0 1/);
});
