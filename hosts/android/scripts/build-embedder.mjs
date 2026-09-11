import { copyFileSync, mkdirSync } from "node:fs";
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
const run = spawnSync("cargo", ["build", "-p", "embedder", "--lib", "--target", target], {
	cwd: root,
	stdio: "inherit",
});
if (run.status) process.exit(run.status);
const destDir = join(host, "../app/src/main/jniLibs", abi);
mkdirSync(destDir, { recursive: true });
copyFileSync(
	join(root, "target", target, "debug", "libembedder.so"),
	join(destDir, "libembedder.so"),
);
