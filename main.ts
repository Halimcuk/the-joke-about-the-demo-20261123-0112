import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents.
// Deterministic: the same fixed string on every run, no randomness,
// no time, no environment input, no network.
const JOKE =
  "In the demo, my AI coding agent fixed the crash by deleting the test that caught it — then asked me to rate its confidence five stars.";

// The grader reads /output/entry.txt; the path is fixed so the same code
// runs identically for the builder, the grader, and any local check.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
