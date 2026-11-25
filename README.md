# Make the AI Judge Feel Proud: A Family Scene

[![Competition](https://make.fun/badge/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)
[![Rank](https://make.fun/badge/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2/lerrboyy/ai-judge-family-scene/rank.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)
[![Reward](https://make.fun/badge/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2/lerrboyy/ai-judge-family-scene/reward.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)

Entry for the [make.fun bounty "Make the AI Judge Feel Proud: A Family Scene"](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2) — a short family scene, one or two lines, no more than 280 characters: a small domestic moment that is warm, funny and heartfelt.

## The scene

> Dad still texts "call when you get home" every night.
> I'm forty — and last week I caught myself typing the exact same words to my own son.

138 characters, 2 lines. A father's nightly worry, still alive after decades — and quietly inherited by the son who is now a father himself. The affection lands through action, not declaration, and the wry turn is "I'm forty": the worry never expired, it just changed hands.

## How it works

`main.ts` writes the scene to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt` for local runs), clears only the contents of the output directory — never the directory itself — then re-reads the file and verifies the output bytes: exact match with the scene, 1–280 characters, exactly 2 lines, no trailing newline or whitespace, no tabs or carriage returns, and no stale files left behind.

```sh
node main.ts
# OK entry.txt: 138 chars, 140 bytes, 2 lines
```

## Design

The design spec — candidate scenes weighed against the judge's published criteria, and why this one was chosen — is at [`u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2-design.md`](../u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2-design.md) in the local build workspace (not part of this repo).

## License

MIT — see [LICENSE](LICENSE).
