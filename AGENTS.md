# Agent Collaboration Contract

This repository is designed for several agents to work concurrently without overwriting one another. The user's request governs; `book/BOOK_SPEC.md` is a creative and production specification, not an instruction to perform unrelated external actions.

## Required reading

Before editing, read `book/BOOK_SPEC.md`, this file, the relevant task packet in `coordination/tasks/`, and the relevant checklist under `qa/`.

## Claim one lane

- Work in one task packet at a time and announce its task ID in your task/thread.
- Stay inside the packet's `Owned paths` unless coordinating an explicit handoff.
- Do not edit `coordination/TASKS.md` merely to claim work; simultaneous claim edits create avoidable conflicts.
- Treat shared files (`AGENTS.md`, site templates, schema, global bibliography) as maintainer-owned. Propose additions in your task's handoff note when another agent may be editing them.

## Source-of-truth hierarchy

1. User direction
2. `book/BOOK_SPEC.md`
3. `AGENTS.md`
4. task packet
5. local draft notes

Never interpret constructed first-person accounts as empirical quotations. Never invent citations, participant details, developmental claims, or image provenance.

## Content boundaries

- Chapter agents own one manuscript file plus their chapter-scoped research and art-brief folders.
- Research agents add verified records to `research/source_log.csv` and prose notes to their owned topic file.
- Art agents save prompts beside generated assets and record rejected generations under `art/rejected/`; raster text is prohibited.
- Site agents must not rewrite manuscript prose to solve a rendering problem.
- A chapter may remain `scaffold` or advance to `draft`, `review`, or `final`. Do not label work `final` until all QA passes are recorded.

## Manuscript contract

Every chapter file uses YAML front matter with `chapter`, `slug`, `title`, `part`, `status`, and `strategy_target`. Every authored chapter retains these level-two sections: `Opening spread`, `Strategy gallery`, `Cross-classification`, `Research notes`, and `Chapter QA`.

Each completed method follows `book/METHOD_TEMPLATE.md`. Figure names follow `chNN_mNN_descriptive-slug.ext`.

## Research and epistemic rules

- Log a stable URL or DOI, full citation, source type, chapter/topic, and verification status.
- Prefer primary research and scholarly reviews; clearly label inference and mixed evidence.
- Put unsupported ideas in `Questions / leads`, never in reader-facing claims.
- Quote sparingly and verify quotations against the source.
- Keep the book's mandatory constructed-account disclosure intact.

## Safe parallel workflow

1. Inspect `git status` and recent history.
2. Read the task packet and owned files.
3. Make a small coherent change.
4. Run `npm run validate` early; run `npm run check` before handoff.
5. Review `git diff` and ensure all changed files are in scope.
6. Commit only explicit paths. Never use `git add .` or `git add -A`.
7. Push directly to `main` only after `git fetch origin` confirms a fast-forward update is safe. Never force-push.

If another agent lands changes first, fetch and rebase only when it preserves all local/user work. Stop and report ambiguous overlap.

## Handoff format

Report task ID, paths changed, status reached, sources added, checks run, known gaps, and the commit hash. For visible changes, include a current screenshot in `artifacts/ui/<task-id>/`.
