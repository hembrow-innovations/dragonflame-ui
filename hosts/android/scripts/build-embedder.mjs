import { copyFileSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { homedir } from "node:os";
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const host = dirname(fileURLToPath(import.meta.url));
const root = join(host, "../../..");
const abi = process.env.ANDROID_ABI ?? "x86_64";
const targets = {
	x86_64: "x86_64-linux-android",
	"arm64-v8a": "aarch64-linux-android",
};
const target = targets[abi] ?? "x86_64-linux-android";
const sdk =
	process.env.ANDROID_HOME ??
	process.env.ANDROID_SDK_ROOT ??
	join(homedir(), "Library/Android/sdk");

function ndkHome() {
	if (process.env.ANDROID_NDK_HOME) return process.env.ANDROID_NDK_HOME;
	const ndkRoot = join(sdk, "ndk");
	const versions = existsSync(ndkRoot) ? readdirSync(ndkRoot).sort() : [];
	if (!versions.length) {
		process.stderr.write("missing Android NDK\n");
		process.exit(1);
	}
	return join(ndkRoot, versions.at(-1));
}

function prebuilt(ndk) {
	const base = join(ndk, "toolchains/llvm/prebuilt");
	const tags = ["darwin-arm64", "darwin-x86_64", "linux-x86_64", "windows-x86_64"];
	return tags.map((tag) => join(base, tag)).find((path) => existsSync(path));
}

const ndk = ndkHome();
const llvm = prebuilt(ndk);
if (!llvm) {
	process.stderr.write("missing NDK clang\n");
	process.exit(1);
}
const linker = join(llvm, "bin", `${target}24-clang`);
const triple = target.replace(/-/g, "_").toUpperCase();
const env = {
	...process.env,
	ANDROID_HOME: sdk,
	ANDROID_NDK_HOME: ndk,
	ANDROID_NDK_ROOT: ndk,
	[`CARGO_TARGET_${triple}_LINKER`]: linker,
	[`CARGO_TARGET_${triple}_RUSTFLAGS`]: "-C link-arg=-static-libstdc++",
};
const run = spawnSync("cargo", ["build", "-p", "embedder", "--lib", "--target", target], {
	cwd: root,
	env,
	stdio: "inherit",
});
if (run.status) process.exit(run.status);
const destDir = join(root, "target/android-jniLibs", abi);
mkdirSync(destDir, { recursive: true });
copyFileSync(
	join(root, "target", target, "debug", "libembedder.so"),
	join(destDir, "libembedder.so"),
);
