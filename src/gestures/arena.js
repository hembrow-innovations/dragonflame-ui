let current = null;
const pending = new WeakMap();
const home = new WeakMap();
const resolvers = new WeakMap();

export function GestureArena() {
	const byPointer = new Map();

	function entry(pointer) {
		let e = byPointer.get(pointer);
		if (!e) {
			e = { members: [], closed: false, resolved: false };
			byPointer.set(pointer, e);
		}
		return e;
	}

	function enroll(pointer, member) {
		const e = entry(pointer);
		if (e.closed || e.resolved || e.members.some((m) => m.member === member)) return;
		e.members.push({ member, state: "pending" });
		home.set(member, self);
	}

	function flush(pointer) {
		const list = pending.get(self) ?? [];
		pending.set(self, []);
		for (const member of list) enroll(pointer, member);
	}

	function win(e, pointer, slot) {
		if (e.resolved) return;
		e.resolved = true;
		for (const m of e.members) {
			if (m === slot) {
				m.state = "accepted";
				m.member.acceptGesture(pointer);
			} else if (m.state !== "rejected") {
				m.state = "rejected";
				m.member.rejectGesture(pointer);
			}
		}
	}

	function settle(pointer) {
		const e = byPointer.get(pointer);
		if (!e || e.resolved) return;
		const still = e.members.filter((m) => m.state !== "rejected");
		if (still.length === 1) win(e, pointer, still[0]);
		else if (still.length === 0) e.resolved = true;
	}

	function resolve(member, disposition) {
		for (const [pointer, e] of byPointer) {
			if (e.resolved) continue;
			const slot = e.members.find((m) => m.member === member);
			if (!slot || slot.state !== "pending") continue;
			if (disposition === "accepted") win(e, pointer, slot);
			else {
				slot.state = "rejected";
				member.rejectGesture(pointer);
				settle(pointer);
			}
			return;
		}
	}

	const self = {
		add(pointer, member) {
			flush(pointer);
			enroll(pointer, member);
		},
		close(pointer) {
			flush(pointer);
			entry(pointer).closed = true;
			settle(pointer);
		},
		sweep(pointer) {
			const e = byPointer.get(pointer);
			if (!e || e.resolved) return;
			const still = e.members.filter((m) => m.state !== "rejected");
			if (still[0]) win(e, pointer, still[0]);
		},
	};
	resolvers.set(self, resolve);
	current = self;
	return self;
}

export function joinMember(member) {
	if (!current) return;
	const list = pending.get(current) ?? [];
	list.push(member);
	pending.set(current, list);
}

export function resolveMember(member, disposition) {
	resolvers.get(home.get(member))?.(member, disposition);
}
