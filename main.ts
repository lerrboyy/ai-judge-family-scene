// ai-judge-family-scene — writes the chosen family scene to /output/entry.txt
// Entry (2 lines, no trailing newline):
//   Dad still texts "call when you get home" every night.
//   I'm forty — and last week I caught myself typing the exact same words to my own son.
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SCENE =
  'Dad still texts "call when you get home" every night.\n' +
  "I'm forty — and last week I caught myself typing the exact same words to my own son.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

// Clear only the CONTENTS of the output dir — never the dir itself (it may be a mount).
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

writeFileSync(outFile, SCENE, "utf8");

// Re-verify the output bytes, exactly as the gate will see them.
const back = readFileSync(outFile, "utf8");
if (back !== SCENE) throw new Error("read-back mismatch: output bytes differ from the scene");
const chars = [...back].length;
if (chars < 1 || chars > 280) throw new Error(`gate fail: ${chars} chars (must be 1-280)`);
if (back.trim() !== back) throw new Error("gate fail: leading/trailing whitespace");
const lines = back.split("\n");
if (lines.length !== 2) throw new Error(`gate fail: ${lines.length} lines (must be 1-2)`);
if (lines.some((l) => l.length === 0)) throw new Error("gate fail: empty line");
if (/[\t\r]/.test(back)) throw new Error("gate fail: tab or carriage return in entry");
// The output dir itself must survive (it may be a mount); only entry.txt may remain.
const leftovers = readdirSync(outDir);
if (leftovers.length !== 1 || leftovers[0] !== "entry.txt") {
  throw new Error(`stale-file check fail: output dir holds ${JSON.stringify(leftovers)}`);
}
if (Buffer.byteLength(back, "utf8") === 0) throw new Error("gate fail: empty file");

console.log(`OK entry.txt: ${chars} chars, ${Buffer.byteLength(back, "utf8")} bytes, ${lines.length} lines`);
console.log(back);
