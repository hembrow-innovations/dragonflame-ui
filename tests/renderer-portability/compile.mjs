export function compile(source) {
	if (/\b(?:document|Metal)\b/.test(source)) throw new Error("wrong-target");
}
