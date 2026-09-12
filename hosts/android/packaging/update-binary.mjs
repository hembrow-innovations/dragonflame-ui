import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../../..");
const src = process.argv[2];
if (!src || !existsSync(src)) {
	process.stderr.write("missing binary\n");
	process.exit(1);
}

const buf = readFileSync(src);
if (buf.length < 4) {
	process.stderr.write("not a native binary\n");
	process.exit(1);
}
const magic = buf.readUInt32BE(0);
const elf = buf[0] === 0x7f && buf[1] === 0x45 && buf[2] === 0x4c && buf[3] === 0x46;
const macho =
	magic === 0xcffaedfe ||
	magic === 0xcefaedfe ||
	magic === 0xfeedface ||
	magic === 0xfeedfacf ||
	magic === 0xcafebabe ||
	magic === 0xbebafeca;
if (!elf && !macho) {
	process.stderr.write("not a native binary\n");
	process.exit(1);
}

const outDir = join(root, "target/packaging/android");
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "packaged-binary"));
