import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const engineDir = join(root, "crates/engine");
const adapterPath = join(engineDir, "src/scene/adapter.rs");
const submitPath = join(engineDir, "src/scene/submit.rs");
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

test("layout and measure run synchronously on the Runtime job queue", () => {
	assert.equal(existsSync(adapterPath), true);
	assert.equal(existsSync(submitPath), true);

	const adapterSrc = readFileSync(adapterPath, "utf8");
	assert.match(adapterSrc, /fn layout_and_measure\b[\s\S]*?\bdesc:\s*LeafDesc/);
	assert.doesNotMatch(adapterSrc, /\bpub(?:\s*\([^)]*\))?\s+fn layout_and_measure\b/);
	assert.doesNotMatch(adapterSrc, /\bextern\s+"C"[\s\S]*?\bfn layout_and_measure\b/);
	assert.doesNotMatch(adapterSrc, /\basync\s+fn layout_and_measure\b/);
	assert.doesNotMatch(adapterSrc, /\bthread::spawn\b|\bstd::thread::spawn\b/);

	const submitSrc = readFileSync(submitPath, "utf8");
	const jobSrc = `${adapterSrc}\n${submitSrc}`;
	assert.match(jobSrc, /layout_and_measure\s*\([\s\S]*?\brecord\s*\(/);
	assert.doesNotMatch(jobSrc, /\bBridge\b/);
	assert.doesNotMatch(jobSrc, /\bextern\s+"C"[\s\S]*?\bfn layout_and_measure\b/);
	assert.doesNotMatch(jobSrc, /\bextern\s+"C"[\s\S]*?\bfn measure\b/);

	const engineSrc = rustSources(engineDir)
		.map((path) => readFileSync(path, "utf8"))
		.join("\n");
	assert.equal((engineSrc.match(/extern "C"/g) ?? []).length, 1);
	assert.match(engineSrc, /extern "C"[\s\S]*?\bfn submit\b/);
	assert.doesNotMatch(engineSrc, /\bpub fn measure\b/);
	assert.doesNotMatch(engineSrc, /\bpub struct ShadowTree\b/);
	assert.doesNotMatch(engineSrc, /\bpub struct HostConfig\b/);

	const indexSrc = readFileSync(join(srcDir, "index.js"), "utf8");
	assert.match(indexSrc, /\bexport \{ h \}/);
	assert.doesNotMatch(indexSrc, /\bexport \{ measure \}/);
	assert.doesNotMatch(indexSrc, /\bexport function measure\b/);
	assert.doesNotMatch(indexSrc, /\bShadowTree\b/);
	assert.doesNotMatch(indexSrc, /\bHostConfig\b/);
	assert.doesNotMatch(indexSrc, /\bBridge\b/);

	const jsSrc = jsSources(srcDir)
		.map((path) => readFileSync(path, "utf8"))
		.join("\n");
	assert.doesNotMatch(jsSrc, /\b(?:Worker|SharedWorker|ShadowThread)\b/);
	assert.doesNotMatch(jsSrc, /\bShadowTree\b/);
	assert.doesNotMatch(jsSrc, /\bBridge\b/);
	assert.doesNotMatch(jsSrc, /\bexport \{ measure \}/);
});
