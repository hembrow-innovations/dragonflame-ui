const hosts = {
	dom: (text) => ({ width: text.length * 7, height: 16, host: "dom" }),
	uikit: (text) => ({ width: text.length * 8, height: 18, host: "uikit" }),
	engine: (text) => ({ width: text.length * 6, height: 14, host: "engine" }),
};

export function measureText({ text, host } = {}) {
	return hosts[host](String(text ?? ""));
}
