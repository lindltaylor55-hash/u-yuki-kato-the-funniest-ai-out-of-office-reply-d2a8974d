// The Funniest AI Out-of-Office Reply — entry program.
// Copies the out-of-office line (entry.txt) to /output/entry.txt,
// where the grader reads it. One clean line, under 160 characters.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.txt"), join(outDir, "entry.txt"));
const bytes = statSync(join(outDir, "entry.txt")).size;
console.log(`wrote /output/entry.txt (${bytes} bytes)`);
