import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../../..");
const run = spawnSync("cargo", ["build", "-p", "embedder", "--lib"], {
	cwd: root,
	stdio: "inherit",
});
process.exit(run.status ?? 1);
