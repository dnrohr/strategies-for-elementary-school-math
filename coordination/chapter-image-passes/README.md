# Serial chapter image-quality passes

This lane applies the Chapter 1 picture-review and revision standard to Chapters 2–14, one complete chapter at a time.

## Source files

- [`PROGRESS.md`](./PROGRESS.md) is the single source of truth for chapter order and completion.
- [`LESSONS.md`](./LESSONS.md) carries reusable visual lessons forward without assuming that every later chapter has the same defect.
- [`GENERIC_GOAL.md`](./GENERIC_GOAL.md) contains the copy-ready goal for launching the next pass.
- [`../tasks/CHAPTER_IMAGE_PASS.md`](../tasks/CHAPTER_IMAGE_PASS.md) is the task packet and acceptance contract.

Existing `qa/reports/image_review_chNN.md` files are historical inputs, not proof that this more detailed pass is complete. A chapter is complete only when its row in `PROGRESS.md` satisfies every required stage below.

## Deterministic chapter selection

1. Read `PROGRESS.md` immediately before starting.
2. If one chapter is `in_progress` or `blocked`, resume that chapter; do not skip it.
3. Otherwise choose the lowest-numbered chapter whose state is `queued`.
4. If every chapter is `complete`, report that the serial lane is finished and make no chapter changes.
5. Use task ID `QA-IMAGE-PASS-CHNN`, with a two-digit chapter number.

This is a serial lane. Do not launch two chapter-image passes concurrently because `PROGRESS.md` and `LESSONS.md` are shared coordination files.

## Required stages for one chapter

### 1. Inventory

Identify the opening picture and every reader-facing method picture from the manuscript, manifest/build mapping, and chapter art folders. Record the expected count before reviewing. Do not omit raster-backed composites.

### 2. Audit every picture in order

Create `qa/reports/chNN_picture_improvement_audit.md`. For every opening/method picture include:

- purpose;
- what already works;
- numbered findings with severity;
- revision target;
- objective acceptance checks.

Assess mathematical accuracy, fidelity to the described thought, communicative effectiveness, book aesthetic, composition and proportions, labels, arrow/path joins, visual hierarchy, accessibility, and raster anatomy/provenance where applicable.

### 3. Mark up every picture

Create one numbered SVG markup per picture under `qa/reports/chNN-image-markups/`. Numbered callouts must map one-to-one to the findings in the audit. Markups may reference rendered previews but must not replace the production asset.

### 4. Implement the audit

Resolve the audit in source order during the same goal. Keep exact quantities, intervals, subdivisions, equations, identities, and gesture states. Update chapter-scoped prompts, ledgers, manuscript illustration briefs, accessible SVG metadata, and provenance records whenever the production change makes them stale.

For organic raster work, use the image-generation skill, inspect the result at full resolution, save the accepted asset inside the repository, save the exact prompt, and record rejected generations under `art/rejected/chNN/`. Keep mathematical labels and equations in vector overlays.

### 5. Visual QA

Render every revised picture at its intended size and inspect it. Add current evidence under `artifacts/ui/QA-IMAGE-PASS-CHNN/`, including a README, one final render per picture, and grayscale or narrow-width samples wherever those checks are material. Never rely only on source inspection or automated tests.

### 6. Verify and publish

- Run `npm run validate` early.
- Run focused tests while editing.
- Run `npm run check` after the final source/doc change.
- Run `git diff --check` and inspect every changed path.
- Commit only explicit paths.
- Fetch and confirm a safe fast-forward before pushing to `main`; never force-push.

### 7. Close the tracker

Commit the chapter implementation first. Then update the chapter row in `PROGRESS.md` with final counts, evidence, and the implementation commit hash; add only genuinely new reusable guidance to `LESSONS.md`. Commit that coordination update separately and push both commits.

If work is genuinely blocked, set the row to `blocked`, describe the exact gap in its Notes cell, and do not start a later chapter.

## Completion definition

A chapter is `complete` only when:

- the inventory reconciles with the current reader-facing chapter;
- audit coverage is 100%;
- markup coverage is 100%;
- every accepted revision is implemented or an explicit retained-as-is rationale is recorded;
- source briefs, metadata, prompts, ledgers, and provenance agree with the art;
- every final picture has been visually inspected;
- `npm run check` passes after the last edit;
- the implementation is committed and pushed;
- `PROGRESS.md` records the evidence and implementation commit.
