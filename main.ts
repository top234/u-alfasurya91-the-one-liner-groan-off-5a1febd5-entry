// The Leftovers — one original one-line dad joke for The One-Liner Groan-Off.
// The program writes the joke to $OUTPUT_DIR/entry.txt (default "/output").
// The joke is a band pun: "reheated hits" plays on leftovers being reheated,
// so the punchline lands in the last two words, as a dad joke should.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE = "My dad started a band called The Leftovers. He says they only play reheated hits.";

const length = [...JOKE].length;
if (length < 1 || length > 140) {
  throw new Error(`Entry must be a one-liner of 1-140 characters, got ${length}.`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
