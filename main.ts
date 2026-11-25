// The new line is an exit interview gone sideways on paper.
// HR hears a polished reason for leaving and files a snack shortage instead.
// The gag is the official record disagreeing with what was actually said.
// Biscuits become the documented cause of departure, and nobody corrects it.
// This script reads the joke from entry.txt so the words stay editable.
// If the joke is missing, blank, or too long for the gate, we stop loudly.
// The output folder comes from the environment, never from a hardcoded path.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const entryPath = join(here, "entry.txt");
const text = readFileSync(entryPath, "utf8");
const trimmed = text.trim();

if (trimmed.length === 0) {
  console.error("entry.txt is empty or whitespace-only");
  process.exit(1);
}

if (Array.from(trimmed).length > 200) {
  console.error("entry.txt exceeds 200 characters");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), trimmed + "\n", "utf8");
