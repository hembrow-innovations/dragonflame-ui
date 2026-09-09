import { Owner, onCleanup } from "../owner/owner.js";

let listener = null;

export function Signal(value) {
	const listeners = new Set();
	return {
		get() {
			if (listener) {
				listeners.add(listener);
				listener.sources?.add(listeners);
			}
			return value;
		},
		set(next) {
			value = next;
			for (const notify of listeners) notify();
		},
	};
}

export function follow(compute, apply) {
	Owner(() => {
		let disposed = false;
		const run = () => {
			if (disposed) return;
			const prev = listener;
			listener = run;
			run.sources ??= new Set();
			try {
				apply(compute());
			} finally {
				listener = prev;
			}
		};
		run();
		onCleanup(() => {
			disposed = true;
			for (const listeners of run.sources ?? []) listeners.delete(run);
			run.sources?.clear();
		});
	});
}
