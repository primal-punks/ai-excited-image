// ai-excited-01 entry — Koi Out of a Teacup
// This program does one simple thing: it takes the finished entry image
// that sits next to this file and copies it, byte for byte, into the
// competition output folder so the judge can see it.

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const source = new URL("./entry.png", import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const destination = join(outputDir, "entry.png");

copyFileSync(source, destination);
console.log(`Wrote ${destination}`);
