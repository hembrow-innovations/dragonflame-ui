const ticks = new Set();
let id;

function pulse(t) {
	for (const tick of ticks) tick(t);
	if (ticks.size) id = requestAnimationFrame(pulse);
}

export function attach(tick) {
	ticks.add(tick);
	if (ticks.size === 1) id = requestAnimationFrame(pulse);
}

export function detach(tick) {
	ticks.delete(tick);
	if (!ticks.size) cancelAnimationFrame(id);
}
