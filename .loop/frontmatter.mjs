export function parseFrontmatter(text) {
	if (!text.startsWith("---")) return {};
	const end = text.indexOf("\n---", 3);
	if (end === -1) return {};
	const out = {};
	let key = null;
	for (const line of text.slice(4, end).split("\n")) {
		const field = line.match(/^([a-z_]+):\s*(.*)$/);
		if (field) {
			key = field[1];
			const raw = field[2];
			if (raw === "" || raw === "[]") out[key] = [];
			else out[key] = unquote(raw);
			continue;
		}
		const item = line.match(/^\s+-\s+(.*)$/);
		if (item && key) {
			if (!Array.isArray(out[key])) out[key] = [];
			out[key].push(unquote(item[1]));
		}
	}
	return out;
}

function unquote(value) {
	return value.replace(/^["']|["']$/g, "").trim();
}

export function taskNumber(name) {
	const match = name.match(/^task-(\d+)/);
	return match ? Number(match[1]) : Number.POSITIVE_INFINITY;
}

export function claimTaskText(text, now = new Date()) {
	const stamp = now.toISOString().replace(/\.\d{3}Z$/, "Z");
	return text
		.replace(/^status:\s*"?ready"?\s*$/m, "status: claimed")
		.replace(/^updated_at:\s*.*$/m, `updated_at: "${stamp}"`);
}
