import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const hostDir = join(root, "hosts/android");
const embedderDir = join(root, "crates/embedder");
const gradle = join(hostDir, "app/build.gradle.kts");
const buildScript = join(hostDir, "scripts/build-embedder.mjs");

function walk(dir) {
	const out = [];
	for (const name of readdirSync(dir)) {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) out.push(...walk(path));
		else out.push(path);
	}
	return out;
}

function hasArm64Triple(src) {
	return /(?:^|[^A-Za-z0-9_])aarch64-linux-android(?:[^A-Za-z0-9_]|$)/m.test(src);
}

test("Android arm64-v8a is in scope", () => {
	assert.equal(existsSync(gradle), true);
	assert.equal(existsSync(buildScript), true);
	assert.equal(existsSync(embedderDir), true);
	const gradleSrc = readFileSync(gradle, "utf8");
	const buildSrc = readFileSync(buildScript, "utf8");
	const membership = [...walk(hostDir), ...walk(embedderDir)]
		.map((path) => readFileSync(path, "utf8"))
		.join("\n");
	assert.equal(hasArm64Triple(membership), true);
	assert.equal(hasArm64Triple(buildSrc), true);
	assert.match(buildSrc, /--target/);
	assert.match(buildSrc, /\-p\s+embedder|\bembedder\b/);
	assert.match(gradleSrc, /\babiFilters\b[\s\S]*\barm64-v8a\b/);
});
