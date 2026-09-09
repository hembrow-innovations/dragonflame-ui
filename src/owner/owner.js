let current = null;

function dispose(owner) {
	if (owner.disposed) return;
	owner.disposed = true;
	for (const child of owner.children) dispose(child);
	owner.children.length = 0;
	for (const fn of owner.cleanups) fn();
	owner.cleanups.length = 0;
}

export function Owner(fn) {
	const owner = {
		parent: current,
		children: [],
		cleanups: [],
		disposed: false,
	};
	if (current) current.children.push(owner);
	const prev = current;
	current = owner;
	try {
		fn?.();
	} finally {
		current = prev;
	}
	return () => dispose(owner);
}

export function onCleanup(fn) {
	current?.cleanups.push(fn);
}
