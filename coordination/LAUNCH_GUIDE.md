# Launching parallel agents

Use one task/thread per lane. Give every agent the repository root and a task-specific prompt; do not ask multiple agents to edit the same manuscript or shared source log.

## Coordinator prompt

> Read `AGENTS.md`, `book/BOOK_SPEC.md`, and `coordination/TASKS.md`. Coordinate the current production wave. Assign each worker exactly one task packet and owned path set, prevent overlapping edits, require `npm run check`, and collect handoffs with commit hashes and unresolved gaps. Do not invent research or mark scaffolds final.

## Chapter worker prompt

> Take task `CHNN`. Read `AGENTS.md`, the full book spec, `coordination/tasks/CHAPTER_TEMPLATE.md`, and the current chapter scaffold named in `book/CHAPTERS.json`. Work only in the packet's owned paths. Build a non-duplicative strategy inventory and advance the manuscript only as far as verified evidence permits. Run `npm run check`, visually inspect the generated page, and report a structured handoff.

## Research worker prompt

> Take task `R0N` from `coordination/tasks/RESEARCH.md`. Research only the assigned topic using authoritative sources. Record stable identifiers, locators, supported claims, caveats, and verification status. Use an inbox CSV if another agent owns the global source log. Do not draft unsupported reader-facing claims. Run `npm run check` and provide a structured handoff.

## Recommended first run

Start `R01`, `R02`, `R03`, and `DESIGN` together. Once their first verified handoffs land, fan out chapter agents in batches that fit the available concurrency. Keep one coordinator slot free when conflict resolution or shared-file merges are likely.

## Merge discipline

Agents authorized to publish should fetch immediately before a direct push to `main`, stage explicit owned paths only, and never force-push. If two agents need a shared file, one produces an inbox/handoff artifact and the designated maintainer performs the merge.

## Serial chapter image-quality lane

For a full picture-by-picture audit, markup, implementation, and visual-QA pass, use the copy-ready goal in `coordination/chapter-image-passes/GENERIC_GOAL.md`. This lane is intentionally serial: the progress file chooses the next chapter, and one agent completes that chapter before another run advances the sequence.
