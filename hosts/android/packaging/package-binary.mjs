import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { homedir } from "node:os";
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../../..");
const host = join(root, "hosts/android");
const abi = process.env.ANDROID_ABI ?? "x86_64";
const cache = join(root, "target/android-gradle-cache");

function walkFiles(dir, out = []) {
	if (!existsSync(dir)) return out;
	for (const name of readdirSync(dir)) {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) walkFiles(path, out);
		else out.push(path);
	}
	return out;
}

function findGradle() {
	if (process.env.GRADLE) return process.env.GRADLE;
	const dists = join(homedir(), ".gradle/wrapper/dists");
	const found = walkFiles(dists).filter((path) => path.endsWith("/bin/gradle"));
	found.sort();
	return found.at(-1);
}

const gradle = findGradle();
if (!gradle) {
	process.stderr.write("missing gradle\n");
	process.exit(1);
}

const build = spawnSync(
	gradle,
	["-p", host, "buildEmbedder", `-PandroidAbi=${abi}`, "--project-cache-dir", cache],
	{ cwd: root, encoding: "utf8", timeout: 600000, env: process.env },
);
if ((build.status ?? 1) !== 0) {
	process.stderr.write(build.stderr || build.stdout || "gradle failed\n");
	process.exit(build.status ?? 1);
}

const hostBinary = join(root, "target/android-jniLibs", abi, "libembedder.so");
if (!existsSync(hostBinary)) {
	process.stderr.write("missing host binary\n");
	process.exit(1);
}

const outDir = join(root, "target/packaging/android");
mkdirSync(outDir, { recursive: true });
copyFileSync(hostBinary, join(outDir, "packaged-binary"));
