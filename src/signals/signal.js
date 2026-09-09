let listener = null;

export function Signal(value) {
	const listeners = new Set();
	return {
		get() {
			if (listener) listeners.add(listener);
			return value;
		},
		set(next) {
			value = next;
			for (const notify of listeners) notify();
		},
	};
}

export function follow(compute, apply) {
	const run = () => {
		const prev = listener;
		listener = run;
		try {
			apply(compute());
		} finally {
			listener = prev;
		}
	};
	run();
}
