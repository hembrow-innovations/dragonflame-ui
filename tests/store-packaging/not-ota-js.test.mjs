import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
	existsSync,
	mkdtempSync,
	readFileSync,
	readdirSync,
	rmSync,
	statSync,
	writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const iosHost = join(root, "hosts/ios");
const androidHost = join(root, "hosts/android");
const iosPackDir = join(iosHost, "packaging");
const androidPackDir = join(androidHost, "packaging");
const iosUpdate = join(iosPackDir, "update-binary.mjs");
const androidUpdate = join(androidPackDir, "update-binary.mjs");
const iosArtifact = join(root, "target/packaging/ios/packaged-binary");
const androidArtifact = join(root, "target/packaging/android/packaged-binary");

function walk(dir) {
	const out = [];
	for (const name of readdirSync(dir)) {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) out.push(...walk(path));
		else out.push(path);
	}
	return out;
}

function rel(path) {
	return relative(root, path).split("\\").join("/");
}

function isNativeBinary(path) {
	const buf = readFileSync(path);
	if (buf.length < 4) return false;
	const magic = buf.readUInt32BE(0);
	const elf = buf[0] === 0x7f && buf[1] === 0x45 && buf[2] === 0x4c && buf[3] === 0x46;
	const macho =
		magic === 0xcffaedfe ||
		magic === 0xcefaedfe ||
		magic === 0xfeedface ||
		magic === 0xfeedfacf ||
		magic === 0xcafebabe ||
		magic === 0xbebafeca;
	return elf || macho;
}

function isOtaJsUpdatePath(r) {
	return /expo-updates|codepush|eas-update|jsbundle|js-bundle/i.test(r);
}

function isOtaJsUpdateSource(src) {
	return /expo-updates|codepush|eas-update|jsbundle|js-bundle|downloadBundle/i.test(src);
}

function writeMachO(path, tag) {
	const buf = Buffer.alloc(16, 0);
	buf.writeUInt32BE(0xcffaedfe, 0);
	buf.write(tag, 4);
	writeFileSync(path, buf);
}

function writeElf(path, tag) {
	const buf = Buffer.alloc(16, 0);
	buf[0] = 0x7f;
	buf[1] = 0x45;
	buf[2] = 0x4c;
	buf[3] = 0x46;
	buf.write(tag, 4);
	writeFileSync(path, buf);
}

function runUpdate(script, src) {
	return spawnSync("node", [script, src], {
		cwd: root,
		encoding: "utf8",
		timeout: 10000,
	});
}

test("native updates are new binaries, not Expo-style OTA of a JS bundle", () => {
	assert.equal(existsSync(join(iosHost, "Dragonflame.xcodeproj/project.pbxproj")), true);
	assert.equal(existsSync(join(androidHost, "settings.gradle.kts")), true);
	assert.equal(existsSync(iosUpdate), true);
	assert.equal(existsSync(androidUpdate), true);

	const packFiles = [...walk(iosPackDir), ...walk(androidPackDir)];
	assert.deepEqual(
		packFiles.filter((path) => isOtaJsUpdatePath(rel(path))),
		[],
	);
	assert.deepEqual(
		packFiles.filter((path) => isOtaJsUpdateSource(readFileSync(path, "utf8"))),
		[],
	);

	const dir = mkdtempSync(join(tmpdir(), "store-packaging-"));
	const jsBundle = join(dir, "update.js");
	const iosFirst = join(dir, "ios-first");
	const iosNext = join(dir, "ios-next");
	const androidFirst = join(dir, "android-first");
	const androidNext = join(dir, "android-next");
	writeFileSync(jsBundle, "export default 1;\n");
	writeMachO(iosFirst, "AAA1");
	writeMachO(iosNext, "BBB2");
	writeElf(androidFirst, "CCC3");
	writeElf(androidNext, "DDD4");

	rmSync(iosArtifact, { force: true });
	rmSync(androidArtifact, { force: true });

	const iosJs = runUpdate(iosUpdate, jsBundle);
	assert.notEqual(iosJs.status, 0);
	assert.equal(existsSync(iosArtifact), false);

	const androidJs = runUpdate(androidUpdate, jsBundle);
	assert.notEqual(androidJs.status, 0);
	assert.equal(existsSync(androidArtifact), false);

	const iosA = runUpdate(iosUpdate, iosFirst);
	assert.equal(iosA.status, 0, iosA.stderr || iosA.stdout);
	const androidA = runUpdate(androidUpdate, androidFirst);
	assert.equal(androidA.status, 0, androidA.stderr || androidA.stdout);
	assert.equal(isNativeBinary(iosArtifact), true);
	assert.equal(isNativeBinary(androidArtifact), true);
	assert.equal(readFileSync(iosArtifact).equals(readFileSync(iosFirst)), true);
	assert.equal(readFileSync(androidArtifact).equals(readFileSync(androidFirst)), true);

	const iosB = runUpdate(iosUpdate, iosNext);
	assert.equal(iosB.status, 0, iosB.stderr || iosB.stdout);
	const androidB = runUpdate(androidUpdate, androidNext);
	assert.equal(androidB.status, 0, androidB.stderr || androidB.stdout);
	assert.equal(isNativeBinary(iosArtifact), true);
	assert.equal(isNativeBinary(androidArtifact), true);
	assert.equal(readFileSync(iosArtifact).equals(readFileSync(iosNext)), true);
	assert.equal(readFileSync(androidArtifact).equals(readFileSync(androidNext)), true);
	assert.equal(readFileSync(iosArtifact).equals(readFileSync(iosFirst)), false);
	assert.equal(readFileSync(androidArtifact).equals(readFileSync(androidFirst)), false);

	rmSync(dir, { recursive: true, force: true });
});
