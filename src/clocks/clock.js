export function Clock(onTick) {
	let id;
	const frame = (t) => {
		onTick(t);
		id = requestAnimationFrame(frame);
	};
	id = requestAnimationFrame(frame);
	return () => cancelAnimationFrame(id);
}
