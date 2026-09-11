import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const hostDir = join(root, "hosts/ios");
const embedderDir = join(root, "crates/embedder");
const pbx = join(hostDir, "Dragonflame.xcodeproj/project.pbxproj");
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

function hasDeviceTriple(src) {
	return /(?:^|[^A-Za-z0-9_])aarch64-apple-ios(?!-sim)/m.test(src);
}

test("iOS arm64 device is in scope", () => {
	assert.equal(existsSync(pbx), true);
	assert.equal(existsSync(buildScript), true);
	assert.equal(existsSync(embedderDir), true);
	const pbxSrc = readFileSync(pbx, "utf8");
	const buildSrc = readFileSync(buildScript, "utf8");
	const membership = [...walk(hostDir), ...walk(embedderDir)]
		.map((path) => readFileSync(path, "utf8"))
		.join("\n");
	assert.equal(hasDeviceTriple(membership), true);
	assert.equal(hasDeviceTriple(buildSrc), true);
	assert.match(buildSrc, /--target/);
	assert.match(buildSrc, /\-p\s+embedder|\bembedder\b/);
	assert.match(pbxSrc, /\bARCHS\s*=\s*"?arm64"?\s*;/);
	assert.match(pbxSrc, /SUPPORTED_PLATFORMS\s*=\s*"[^"]*\biphoneos\b/);
	assert.equal(/SUPPORTED_PLATFORMS\s*=\s*"iphonesimulator"/.test(pbxSrc), false);
});
