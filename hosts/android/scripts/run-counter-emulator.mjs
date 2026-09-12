import { homedir } from "node:os";
import { spawn, spawnSync } from "node:child_process";
import { existsSync, readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../../..");
const host = join(root, "hosts/android");
const sdk =
	process.env.ANDROID_HOME ??
	process.env.ANDROID_SDK_ROOT ??
	join(homedir(), "Library/Android/sdk");
const adb = join(sdk, "platform-tools", "adb");
const emulatorBin = join(sdk, "emulator", "emulator");
const env = {
	...process.env,
	ANDROID_HOME: sdk,
	ANDROID_SDK_ROOT: sdk,
};

function sleep(ms) {
	Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function run(cmd, args, opts = {}) {
	const result = spawnSync(cmd, args, {
		cwd: opts.cwd ?? root,
		encoding: "utf8",
		env: opts.env ?? env,
		timeout: opts.timeout ?? 120000,
	});
	if ((result.status ?? 1) !== 0 && opts.ok !== true) {
		process.stderr.write(result.stderr || result.stdout || `${cmd} failed\n`);
		process.exit(result.status ?? 1);
	}
	return result;
}

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
	const found = walkFiles(dists).filter((path) => {
		const unix = path.endsWith("/bin/gradle");
		const win = path.endsWith("\\bin\\gradle.bat") || path.endsWith("/bin/gradle.bat");
		return process.platform === "win32" ? win : unix;
	});
	found.sort();
	return found.at(-1);
}

function sdkPath() {
	if (!existsSync(sdk)) {
		process.stderr.write("missing Android SDK\n");
		process.exit(1);
	}
}

function pickAvd() {
	const list = run(emulatorBin, ["-list-avds"]);
	const names = list.stdout
		.split("\n")
		.map((line) => line.trim())
		.filter(Boolean);
	const x86 = names.find((name) => /x86_64/i.test(name));
	return x86 ?? names[0];
}

function adbSerials() {
	const list = run(adb, ["devices"]);
	return list.stdout
		.split("\n")
		.slice(1)
		.map((line) => line.trim())
		.filter((line) => line.endsWith("\tdevice") || line.endsWith(" device"))
		.map((line) => line.split(/\s+/)[0])
		.filter((serial) => serial.startsWith("emulator-"));
}

function waitBoot(serial, timeoutMs) {
	const start = Date.now();
	run(adb, ["-s", serial, "wait-for-device"], { timeout: timeoutMs, ok: true });
	while (Date.now() - start < timeoutMs) {
		const boot = run(adb, ["-s", serial, "shell", "getprop", "sys.boot_completed"], {
			ok: true,
		});
		if ((boot.stdout || "").trim() === "1") return;
		sleep(2000);
	}
	process.stderr.write("emulator boot timeout\n");
	process.exit(1);
}

function deviceAbi(serial) {
	const abi = run(adb, ["-s", serial, "shell", "getprop", "ro.product.cpu.abi"], {
		ok: true,
	});
	const text = (abi.stdout || "").trim();
	if (text.includes("x86_64")) return "x86_64";
	if (text.includes("arm64")) return "arm64-v8a";
	return "x86_64";
}

function ensureEmulator() {
	const existing = adbSerials();
	if (existing.length) return existing[0];
	const avd = pickAvd();
	if (!avd) {
		process.stderr.write("no Android emulator\n");
		process.exit(1);
	}
	spawn(emulatorBin, ["-avd", avd, "-no-audio", "-no-boot-anim", "-gpu", "host"], {
		cwd: root,
		env,
		detached: true,
		stdio: "ignore",
	}).unref();
	const start = Date.now();
	while (Date.now() - start < 300000) {
		const serials = adbSerials();
		if (serials.length) return serials[0];
		sleep(2000);
	}
	process.stderr.write("emulator did not appear\n");
	process.exit(1);
}

function waitLogs(serial, timeoutMs) {
	const start = Date.now();
	let buf = "";
	while (Date.now() - start < timeoutMs) {
		const dump = run(adb, ["-s", serial, "logcat", "-d", "-s", "dragonflame:I"], {
			ok: true,
		});
		buf = `${dump.stdout || ""}\n${dump.stderr || ""}`;
		if (
			/counter-text 0/.test(buf) &&
			/draw-list 1/.test(buf) &&
			/default-host canvas/.test(buf) &&
			/gpu-surface/.test(buf) &&
			/vsync/.test(buf)
		) {
			return buf;
		}
		if (/gpu-present-failed|missing-window|missing-anativewindow/.test(buf)) {
			return buf;
		}
		sleep(1000);
	}
	return buf;
}

sdkPath();
const gradle = findGradle();
if (!gradle) {
	process.stderr.write("missing gradle\n");
	process.exit(1);
}

const serial = ensureEmulator();
waitBoot(serial, 240000);
const abi = deviceAbi(serial);
env.ANDROID_ABI = abi;

const assemble = run(
	gradle,
	["-p", host, "assembleDebug", `-PandroidAbi=${abi}`, `--project-cache-dir`, join(root, "target/android-gradle-cache")],
	{ timeout: 600000, env },
);
process.stdout.write(assemble.stdout ?? "");
process.stderr.write(assemble.stderr ?? "");

const apk = join(root, "target/android-gradle/app/outputs/apk/debug/app-debug.apk");
if (!existsSync(apk)) {
	process.stderr.write("missing app-debug.apk\n");
	process.exit(1);
}

run(adb, ["-s", serial, "logcat", "-c"], { ok: true });
run(adb, ["-s", serial, "install", "-r", "-t", apk], { timeout: 180000 });
run(adb, [
	"-s",
	serial,
	"shell",
	"am",
	"start",
	"-n",
	"ui.dragonflame.host/.MainActivity",
	"-W",
]);
const logs = waitLogs(serial, 120000);
process.stdout.write(logs);
if (
	/counter-text 0/.test(logs) &&
	/draw-list 1/.test(logs) &&
	/default-host canvas/.test(logs) &&
	/gpu-surface/.test(logs) &&
	/vsync/.test(logs)
) {
	process.exit(0);
}
process.exit(1);
