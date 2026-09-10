import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const engineDir = join(root, "crates/engine");
const embedderDir = join(root, "crates/embedder");

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

test("a desktop window opens with a GPU surface and one vsync from the embedder", () => {
	assert.equal(process.platform, "darwin");
	assert.equal(existsSync(join(root, "Cargo.toml")), true);
	assert.match(readFileSync(join(root, "Cargo.toml"), "utf8"), /members\s*=/);
	assert.equal(existsSync(join(engineDir, "Cargo.toml")), true);
	assert.equal(existsSync(join(embedderDir, "Cargo.toml")), true);
	assert.equal(rel(engineDir).startsWith("crates/"), true);
	assert.equal(rel(engineDir).includes("draconic"), false);

	const engineDeps = depsOf(join(engineDir, "Cargo.toml"));
	const embedderDeps = depsOf(join(embedderDir, "Cargo.toml"));
	assert.equal(engineDeps.includes("wgpu"), true);
	assert.equal(engineDeps.includes("winit"), false);
	assert.equal(embedderDeps.includes("winit"), true);
	assert.equal(embedderDeps.includes("wgpu"), false);

	const engineSrc = rustSources(engineDir).map((path) => readFileSync(path, "utf8")).join("\n");
	const embedderSrc = rustSources(embedderDir).map((path) => readFileSync(path, "utf8")).join("\n");
	assert.match(engineSrc, /\bwgpu\b/);
	assert.match(embedderSrc, /\bwinit\b/);
	assert.match(embedderSrc, /RedrawRequested/);

	const run = spawnSync(
		"cargo",
		["run", "-p", "embedder", "--bin", "vsync-window", "--quiet"],
		{ cwd: root, encoding: "utf8", timeout: 600000 },
	);
	assert.equal(run.status, 0, run.stderr);
	assert.match(run.stdout, /gpu-surface/);
	assert.match(run.stdout, /vsync/);
});
