#!/usr/bin/env node
import { pickPlan } from "./pick-plan.mjs";
import { pickSlice } from "./pick-slice.mjs";
import { pickVerify } from "./pick-verify.mjs";

export function pickCycle(root) {
	const slice = pickSlice(root);
	if (slice.ok) {
		return {
			command: "afk-slice",
			next: slice.id,
			reason: "drain",
			path: slice.path,
		};
	}
	const plan = pickPlan(root, null);
	if (plan.ok) {
		return {
			command: "afk-plan",
			next: plan.id,
			reason: plan.kind,
			path: plan.path,
		};
	}
	const verify = pickVerify(root, null);
	if (verify.ok) {
		return {
			command: "afk-verify",
			next: verify.id,
			reason: "audit",
			path: verify.path,
		};
	}
	return { command: null, next: null, reason: "idle", path: null };
}

async function main() {
	const result = pickCycle(process.cwd());
	if (!result.command) {
		process.stderr.write(`${result.reason}\n`);
		process.exit(2);
	}
	process.stdout.write(`${result.command} ${result.next}\n`);
}

const isMain =
	import.meta.url === `file://${process.argv[1]}` ||
	process.argv[1]?.endsWith("pick-cycle.mjs");

if (isMain) {
	main().catch((err) => {
		process.stderr.write(`${err.message || err}\n`);
		process.exit(1);
	});
}
