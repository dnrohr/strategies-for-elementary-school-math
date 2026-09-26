# Task `QA-IMAGE-PASS-CHNN` — complete picture pass for the next chapter

## Selection

Read `coordination/chapter-image-passes/PROGRESS.md`. Resume an `in_progress` or `blocked` row; otherwise select the lowest-numbered `queued` chapter. Do not skip ahead. Resolve its manuscript filename through `book/CHAPTERS.json`.

## Objective

Audit, mark up, revise, and visually verify every reader-facing picture in the selected chapter, in order, so the art is mathematically exact, faithful to the thought it represents, effective, beautiful, proportionate, clearly labeled, accessible, and consistent with the book.

## Owned paths

For the selected `chNN` only:

- `book/manuscript/{chapter-file}.md`
- `art/vectors/chNN/**`
- `art/composites/chNN/**`
- `art/raster/chNN/**`
- `art/prompts/chNN/**`
- `art/rejected/chNN/**`
- `qa/reports/chNN_picture_improvement_audit.md`
- `qa/reports/chNN-image-markups/**`
- `artifacts/ui/QA-IMAGE-PASS-CHNN/**`
- the selected row in `coordination/chapter-image-passes/PROGRESS.md`
- new, non-duplicative entries in `coordination/chapter-image-passes/LESSONS.md`

The existing `qa/reports/image_review_chNN.md` is read-only historical input. Do not overwrite it. Do not edit other chapters, shared templates, schema, or global bibliography.

## Required reading

Read completely before editing:

- `AGENTS.md`
- `book/BOOK_SPEC.md`
- `qa/art_checklist.md`
- `coordination/chapter-image-passes/README.md`
- `coordination/chapter-image-passes/PROGRESS.md`
- `coordination/chapter-image-passes/LESSONS.md`
- this packet
- the selected manuscript and chapter-scoped prompt/ledger/provenance files
- the historical `qa/reports/image_review_chNN.md`

If raster generation or editing is needed, read and follow the image-generation skill before touching that asset.

## Deliverables

1. A reconciled inventory of the opening picture plus every method picture.
2. A new detailed audit with one ordered entry per picture.
3. One numbered markup SVG per picture, mapped to the audit findings.
4. Implemented revisions for all accepted findings; retained-as-is decisions explicitly justified.
5. Synchronized manuscript briefs, accessible metadata, prompts, ledgers, and provenance.
6. Current final renders and material grayscale/narrow checks in the task evidence directory.
7. An updated progress row and any genuinely new reusable lessons.
8. A structured handoff with task ID, paths, coverage counts, sources, checks, gaps, evidence, and commit hashes.

## Non-negotiable checks

- Exact mathematics and quantities take priority over novelty.
- Inspect every picture individually at full intended size.
- Inspect raster hands/bodies at original resolution for anatomy, digit count, laterality, gesture continuity, and object count.
- Labels and equations remain vector/selectable; raster text is prohibited.
- Color is never the only information channel.
- Arrowheads, paths, labels, and objects must not obscure one another.
- Apply the editorial-framing lesson to the selected chapter when the repeated disclaimer line is present.
- Run `npm run check` after the final edit and include current visual evidence.

## Publishing sequence

1. Fetch and confirm `origin/main` has not advanced unexpectedly.
2. Commit explicit chapter/audit/evidence paths as `Complete CHNN image-quality pass`.
3. Record that implementation hash in `PROGRESS.md`; add only new lessons.
4. Commit the tracker/lesson update as `Record CHNN image-pass completion`.
5. Push both commits directly to `main` if fast-forward remains safe. Never force-push.
