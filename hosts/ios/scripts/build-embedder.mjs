import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../../..");
const env = {
	...process.env,
	DEVELOPER_DIR: process.env.DEVELOPER_DIR ?? "/Applications/Xcode.app/Contents/Developer",
};
const platform = process.env.PLATFORM_NAME ?? "iphoneos";
const arch = (process.env.ARCHS ?? "arm64").trim().split(/\s+/)[0];
const targets = {
	iphoneos: { arm64: "aarch64-apple-ios" },
	iphonesimulator: { arm64: "aarch64-apple-ios-sim" },
};
const target = targets[platform]?.[arch] ?? "aarch64-apple-ios";
const run = spawnSync("cargo", ["build", "-p", "embedder", "--lib", "--target", target], {
	cwd: root,
	env,
	stdio: "inherit",
});
process.exit(run.status ?? 1);
