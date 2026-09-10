import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const engineDir = join(root, "crates/engine");
const embedderDir = join(root, "crates/embedder");
const runtimeDir = join(root, "crates/runtime");

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

function threadId(stdout, label) {
	const match = stdout.match(new RegExp(`${label} ThreadId\\((\\d+)\\)`));
	assert.equal(match !== null, true, `${label} missing`);
	return match[1];
}

test("GPU submit is not on the UI thread", () => {
	assert.equal(existsSync(join(runtimeDir, "Cargo.toml")), true);
	assert.equal(existsSync(join(engineDir, "Cargo.toml")), true);
	assert.equal(existsSync(join(embedderDir, "Cargo.toml")), true);
	assert.equal(rel(runtimeDir).startsWith("crates/"), true);
	assert.notEqual(runtimeDir, engineDir);
	assert.notEqual(runtimeDir, embedderDir);
	assert.notEqual(engineDir, embedderDir);

	const runtimeDeps = depsOf(join(runtimeDir, "Cargo.toml"));
	const engineDeps = depsOf(join(engineDir, "Cargo.toml"));
	const embedderDeps = depsOf(join(embedderDir, "Cargo.toml"));
	assert.equal(runtimeDeps.includes("engine"), false);
	assert.equal(runtimeDeps.includes("embedder"), false);
	assert.equal(engineDeps.includes("runtime"), false);
	assert.equal(engineDeps.includes("embedder"), false);
	assert.equal(embedderDeps.includes("runtime"), true);
	assert.equal(embedderDeps.includes("engine"), true);

	const runtimeSrc = rustSources(runtimeDir).map((path) => readFileSync(path, "utf8")).join("\n");
	const engineSrc = rustSources(engineDir).map((path) => readFileSync(path, "utf8")).join("\n");
	assert.match(runtimeSrc, /\bpost\b/);
	assert.match(runtimeSrc, /\bFnOnce\b/);
	assert.match(engineSrc, /name\("raster"/);
	assert.match(engineSrc, /queue\.submit/);
	assert.equal((engineSrc.match(/extern "C"/g) ?? []).length, 1);
	assert.doesNotMatch(engineSrc, /\bextern "C" fn begin\b|\bextern "C" fn end\b/);
	assert.doesNotMatch(runtimeSrc, /\bSharedSignal\b/);
	assert.doesNotMatch(engineSrc, /\bSharedSignal\b/);

	const run = spawnSync(
		"cargo",
		["run", "-p", "embedder", "--bin", "gpu-not-ui", "--quiet"],
		{ cwd: root, encoding: "utf8", timeout: 600000 },
	);
	assert.equal(run.status, 0, run.stderr);
	assert.match(run.stdout, /frame-job/);
	assert.match(run.stdout, /draw-list 1/);
	const ui = threadId(run.stdout, "ui-thread");
	const record = threadId(run.stdout, "record-thread");
	const raster = threadId(run.stdout, "raster-thread");
	const gpu = threadId(run.stdout, "gpu-submit-thread");
	assert.equal(record, ui);
	assert.equal(gpu, raster);
	assert.notEqual(gpu, ui);
});
