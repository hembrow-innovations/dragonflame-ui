import { resolveMember } from "./arena.js";

export function TapGestureRecognizer({ onPress } = {}) {
	const rec = {
		addPointer(packet) {
			if (packet.kind === "up") rec.resolve("accepted");
		},
		acceptGesture() {
			onPress?.();
		},
		rejectGesture() {},
		resolve(disposition) {
			resolveMember(rec, disposition);
		},
	};
	return rec;
}

export function HorizontalDragGestureRecognizer() {
	const rec = {
		addPointer(packet) {
			if (packet.kind === "up") rec.resolve("rejected");
		},
		acceptGesture() {},
		rejectGesture() {},
		resolve(disposition) {
			resolveMember(rec, disposition);
		},
	};
	return rec;
}
