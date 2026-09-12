import { attach, detach } from "./vsync.js";

export function Clock(onTick) {
	const tick = (t) => onTick(t);
	attach(tick);
	return () => detach(tick);
}
