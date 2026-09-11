import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../../..");
const host = join(root, "hosts/ios");
const env = {
	...process.env,
	DEVELOPER_DIR: process.env.DEVELOPER_DIR ?? "/Applications/Xcode.app/Contents/Developer",
};

function run(cmd, args, opts = {}) {
	const result = spawnSync(cmd, args, {
		cwd: opts.cwd ?? root,
		encoding: "utf8",
		env,
		timeout: opts.timeout ?? 120000,
	});
	if ((result.status ?? 1) !== 0 && opts.ok !== true) {
		process.stderr.write(result.stderr || result.stdout || `${cmd} failed\n`);
		process.exit(result.status ?? 1);
	}
	return result;
}

function pickPhone() {
	const list = run("xcrun", ["simctl", "list", "devices", "available", "-j"]);
	const data = JSON.parse(list.stdout);
	for (const devices of Object.values(data.devices ?? {})) {
		for (const device of devices) {
			if (device.isAvailable && /^iPhone (?!SE)/.test(device.name)) return device;
		}
	}
	process.stderr.write("no iPhone simulator\n");
	process.exit(1);
}

const phone = pickPhone();
const products = join(root, "target/ios-sim");
mkdirSync(products, { recursive: true });
run(
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
	{ timeout: 600000 },
);

const app = join(products, "Dragonflame.app");
if (!existsSync(app)) {
	process.stderr.write("missing Dragonflame.app\n");
	process.exit(1);
}

run("xcrun", ["simctl", "boot", phone.udid], { ok: true });
run("xcrun", ["simctl", "bootstatus", phone.udid, "-b"], { timeout: 180000 });
run("xcrun", ["simctl", "install", phone.udid, app], { timeout: 120000 });
const launch = run(
	"xcrun",
	["simctl", "launch", "--console", "--terminate-running-process", phone.udid, "ui.dragonflame.host"],
	{ timeout: 180000 },
);
process.stdout.write(launch.stdout ?? "");
process.stderr.write(launch.stderr ?? "");
process.exit(launch.status ?? 1);
