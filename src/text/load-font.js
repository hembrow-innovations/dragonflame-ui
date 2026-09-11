const UI = "ui";
const IO = "io";
let current = UI;

function runOn(thread, fn) {
	const previous = current;
	current = thread;
	try {
		return fn();
	} finally {
		current = previous;
	}
}

export function loadFont({ family, source } = {}) {
	return runOn(IO, () => {
		if (current === UI) throw new Error("font load is not on the UI thread");
		return { family, source, thread: current };
	});
}
