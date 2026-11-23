// Dad Joke Showdown — make.fun u-mfnakmal-dad-joke-showdown-1d2ce3e5
// Writes exactly one original dad joke (112 chars) to /output/entry.txt.
// Fully offline and deterministic: no network, no clock, no randomness,
// no environment reads. The joke is a fixed string literal below.
// The pun: a band called The Leftovers only plays "covers" (cold food
// covers / song covers) and "reheats" its greatest hits.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE =
  "I started a band called The Leftovers. We only play covers — cold ones — and we always reheat our greatest hits.";

if (JOKE.length > 200) throw new Error(`joke too long: ${JOKE.length} chars`);
if (JOKE.trim().length === 0) throw new Error("joke is empty");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Self-check the sealed gate locally: UTF-8, 1-200 chars, not only whitespace.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== JOKE) throw new Error("round-trip mismatch");
if (back.length < 1 || back.length > 200) throw new Error(`gate length: ${back.length}`);
if (back.trim().length === 0) throw new Error("gate: only whitespace");
console.log(`wrote ${JOKE.length} chars to /output/entry.txt`);
