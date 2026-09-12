import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const iosHost = join(root, "hosts/ios");
const androidHost = join(root, "hosts/android");
const iosPack = join(iosHost, "packaging/package-binary.mjs");
const androidPack = join(androidHost, "packaging/package-binary.mjs");
const iosArtifact = join(root, "target/packaging/ios/packaged-binary");
const androidArtifact = join(root, "target/packaging/android/packaged-binary");

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

test("a packaged binary hangs off the thin Xcode and Gradle shells", () => {
	assert.equal(existsSync(join(iosHost, "Dragonflame.xcodeproj/project.pbxproj")), true);
	assert.equal(existsSync(join(androidHost, "settings.gradle.kts")), true);
	assert.equal(existsSync(iosPack), true);
	assert.equal(existsSync(androidPack), true);
	assert.match(readFileSync(iosPack, "utf8"), /\bxcodebuild\b/);
	assert.match(readFileSync(androidPack, "utf8"), /\bgradle\b/);
	rmSync(iosArtifact, { force: true });
	rmSync(androidArtifact, { force: true });

	const ios = spawnSync("node", [iosPack], {
		cwd: root,
		encoding: "utf8",
		timeout: 900000,
		env: {
			...process.env,
			DEVELOPER_DIR: process.env.DEVELOPER_DIR ?? "/Applications/Xcode.app/Contents/Developer",
		},
	});
	assert.equal(ios.status, 0, ios.stderr || ios.stdout);

	const android = spawnSync("node", [androidPack], {
		cwd: root,
		encoding: "utf8",
		timeout: 900000,
	});
	assert.equal(android.status, 0, android.stderr || android.stdout);

	assert.equal(existsSync(iosArtifact), true);
	assert.equal(existsSync(androidArtifact), true);
	assert.equal(isNativeBinary(iosArtifact), true);
	assert.equal(isNativeBinary(androidArtifact), true);
});
