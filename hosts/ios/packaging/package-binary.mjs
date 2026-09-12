import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../../..");
const host = join(root, "hosts/ios");
const products = join(root, "target/ios-sim");
const env = {
	...process.env,
	DEVELOPER_DIR: process.env.DEVELOPER_DIR ?? "/Applications/Xcode.app/Contents/Developer",
};

const build = spawnSync(
	"xcodebuild",
	[
		"-project",
		join(host, "Dragonflame.xcodeproj"),
		"-target",
		"Dragonflame",
		"-sdk",
		"iphonesimulator",
		"-arch",
		"arm64",
		"-configuration",
		"Debug",
		`CONFIGURATION_BUILD_DIR=${products}`,
		`OBJROOT=${join(products, "obj")}`,
		`SYMROOT=${join(products, "sym")}`,
		"CODE_SIGNING_ALLOWED=NO",
		"ONLY_ACTIVE_ARCH=YES",
		"build",
	],
	{ cwd: root, encoding: "utf8", env, timeout: 600000 },
);
if ((build.status ?? 1) !== 0) {
	process.stderr.write(build.stderr || build.stdout || "xcodebuild failed\n");
	process.exit(build.status ?? 1);
}

const hostBinary = join(products, "Dragonflame.app", "Dragonflame");
if (!existsSync(hostBinary)) {
	process.stderr.write("missing host binary\n");
	process.exit(1);
}

const outDir = join(root, "target/packaging/ios");
mkdirSync(outDir, { recursive: true });
copyFileSync(hostBinary, join(outDir, "packaged-binary"));
