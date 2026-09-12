import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import * as ui from "dragonflame-ui";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const srcRoot = join(root, "src");

function walk(dir) {
	const out = [];
	for (const name of readdirSync(dir)) {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) out.push(...walk(path));
		else out.push(path);
	}
	return out;
}

function exportedNames(src) {
	const names = new Set();
	for (const match of src.matchAll(/export\s+(?:const|let|var|function|class)\s+([A-Za-z_$][\w$]*)/g)) {
		names.add(match[1]);
	}
	for (const match of src.matchAll(/export\s*\{([^}]+)\}/g)) {
		for (const part of match[1].split(",")) {
			const name = part.trim().split(/\s+as\s+/).pop()?.trim();
			if (name) names.add(name);
		}
	}
	return names;
}

export function authoredFrameworkSources() {
	const publicNames = new Set(Object.keys(ui));
	return walk(srcRoot)
		.filter((path) => path.endsWith(".drac"))
		.filter((path) => [...exportedNames(readFileSync(path, "utf8"))].some((name) => publicNames.has(name)));
}

export { root };
