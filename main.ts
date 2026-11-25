import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Per company policy, I have reported this incident to HR. HR is me. I have let myself off with a warning.";

// Guard: the bounty requires one line, 1-159 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 159) {
  throw new Error(`entry must be 1-159 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${outPath}`);
