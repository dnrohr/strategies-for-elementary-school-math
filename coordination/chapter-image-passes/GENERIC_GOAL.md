# Copy-ready generic goal

Use this exact goal for each serial run:

```text
/goal Complete the next unfinished chapter image-quality pass. Read AGENTS.md, book/BOOK_SPEC.md, qa/art_checklist.md, coordination/tasks/CHAPTER_IMAGE_PASS.md, and every file required by that packet. Use coordination/chapter-image-passes/PROGRESS.md to select the chapter deterministically: resume any in_progress or blocked chapter first; otherwise take the lowest-numbered queued chapter. Do not skip ahead or ask me which chapter.

For the selected chapter, inspect the opening picture and every method picture one by one. Create a detailed improvement audit and one numbered markup SVG per picture. Judge mathematical and representational accuracy, fidelity to the thought being conveyed, communicative effectiveness, beauty, proportions, labels, arrow/path joins, hierarchy, accessibility, and book-wide aesthetic. Read and apply relevant lessons from coordination/chapter-image-passes/LESSONS.md, but do not assume a defect exists without inspecting it.

Implement the accepted improvements in source order during the same goal. Keep exact quantities, equations, intervals, subdivisions, object identities, and gesture states. Synchronize manuscript illustration briefs, SVG title/description metadata, chapter prompt specs, ledgers, and raster provenance. If organic raster art needs editing, use the image-generation skill, inspect anatomy and quantities at full resolution, save exact prompts, and record rejected generations. Remove repeated “Constructed solver voice — not a participant quotation” lines from the selected chapter when its accounts already begin “A solver might describe the experience this way,” while preserving the book-level disclosure and that introductory framing.

Render and visually inspect every final picture. Save current evidence under artifacts/ui/QA-IMAGE-PASS-CHNN/, including one final render per picture plus material grayscale or narrow-width checks. Run npm run validate early, focused checks while editing, npm run check after the final edit, and git diff --check. Do not mark the chapter complete until audit and markup coverage are 100%, every resolution is implemented or explicitly retained with rationale, visual QA is complete, and all checks pass.

Commit the chapter implementation using explicit paths, record its commit hash and final counts in coordination/chapter-image-passes/PROGRESS.md, add only genuinely new non-duplicative lessons to LESSONS.md, commit that coordination update separately, and push both commits safely to main. Report the task ID, selected chapter, coverage counts, paths changed, sources added, checks, evidence location, known gaps, and both commit hashes. Continue until the selected chapter is genuinely complete.
```
