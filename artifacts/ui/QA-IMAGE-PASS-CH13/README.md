# QA-IMAGE-PASS-CH13 visual evidence and handoff

Date: 2026-10-04. Selected deterministically from PROGRESS.md: no active or blocked row; CH13 was the lowest queued chapter.

## Coverage and disposition

- Inventory: opening plus ten method SVGs, reconciled with manuscript, chapter map, build mapping, scoped ledger/prompt, vector folder, and historical review.
- Audit: **11/11 (100%)**. Numbered markup SVGs: **11/11 (100%)**, with matching preview PNGs.
- Findings: **16** numbered entries; **13** revision/synchronization findings resolved and **3** retained decisions justified.
- Production SVGs: **8 revised**, **3 retained** (M01/M08/M09). M06 has metadata-only changes.
- All final pictures individually rendered and visually inspected at their declared **1200×800** size.
- All eleven inspected at **390 px artwork width**; seven material grayscale proofs inspected.
- No unresolved selected-chapter findings; no research sources or raster assets added.

## Individual final renders

Each file below has its own baseline preview and final QA inspection:

1. final-add-two-thirds-five-eighths.png — exact 24-cell opening bars; pattern aligned to x=300; equation-card description corrected.
2. final-ch13_m01_common-unit-strips.png — original third/eighth boundaries remain subordinate-but-traceable within the exact shared grid.
3. final-ch13_m02_unit-fraction-count.png — detached reference cell matches the 30 px strip cells; labels stay outside its outline.
4. final-ch13_m03_three-by-eight-grid.png — two exact 3×8 grids; independently aligned right columns; 31 equal result cells, grouped 24+7.
5. final-ch13_m04_scale-equivalent-fractions.png — unchanged fill lengths, paired scaling, marker heads based at connector endpoints.
6. final-ch13_m05_number-line-addition.png — 48 proportional intervals; start x420, whole x580, end x720; two grouped moves and visible heads touching destination dots.
7. final-ch13_m06_estimate-then-prove.png — proportional estimate benchmarks; separate exact equation card; description no longer invents an inset.
8. final-ch13_m07_compact-symbolic-rule.png — labeled numerator/denominator calculations, explicit equivalence anchors, full compact formula, no dangling connector.
9. final-ch13_m08_whole-and-remainder.png — 24 and 7 cells with the same 35 px unit width and separate brackets.
10. final-ch13_m09_decimal-verification.png — dashed finite-display verification versus solid exact-equivalence explanation.
11. final-ch13_m10_abstract-common-unit.png — numbered sum states, clean marker joins, explicit external-explanation caption.

## Narrow and grayscale proofs

narrow-1.png through narrow-4.png place all eleven pictures at 390 px width. All sheets were inspected for clipping, overlap, mathematical traceability, countability, label containment, and path/head joins. Fine tick marks support full-size counting; the dominant quantities and identities remain readable at narrow placement.

grayscale-*.png covers opening and M01/M02/M03/M05/M06/M09. Hatch versus fill, original-unit boundaries, grouping brackets, equal cell sizes, solid/dashed jumps, explicit labels, and estimate/exact frames retain their meaning without color.

integrated-narrow-opening.png and integrated-narrow-m03/m05/m07/m10.png show current built-chapter placement at a 390 px viewport. All eleven chapter figures loaded successfully; the document has no horizontal overflow. These integrated examples were visually inspected.

## Audit and synchronization

See qa/reports/ch13_picture_improvement_audit.md and qa/reports/ch13-image-markups/. Markups embed their baseline previews and number each callout one-to-one with the audit. Retained decisions are deliberately marked and justified.

Changed paths: book/manuscript/13_add_2_3_and_5_8.md; art/vectors/ch13/ (eight SVGs and scoped ledger); art/prompts/ch13/README.md; the new audit and markup directory; this evidence directory. PROGRESS.md and one new lesson are committed separately after the implementation.

Manuscript briefs, scoped prompt, ledger/provenance, and accessible SVG metadata now agree. Repeated constructed-account boilerplate was removed under lesson 12 while chapter/book disclosures and introductory framing remain intact. The M03 account says equal cells, matching the rectangular grid.

Known shared-file handoff: art/production_manifest.md is maintainer-owned and still has a historical “15 jumps” phrase. Proposed correction: “15 intervals grouped into +8/24 and +7/24 moves.” This does not alter the chapter's current mapping, art, or scoped provenance and is recorded rather than edited outside ownership.

## Checks and reproduction

- Early npm run validate: passed (16 production entries; 42 canonical research records).
- focused-checks.log: eleven production SVGs, contained text, resolved marker references, eleven markup SVGs, eleven final renders, integrated mapping and overflow checks.
- repository-checks.log: complete npm run check after final source/document edits; validate, all 28 tests, build, and export verification.
- git diff --check: passed before implementation and coordination commits.
- The first test run caught the existing SVG-marker and M07 equivalence-text contracts. Those were preserved with marker refX=0 at the head base and explicit equivalent-fraction anchors; the full suite subsequently passed.

Reproduction helpers are task-scoped evidence, not global pipeline changes. Starting from baseline 29e552b, run apply-revisions.cjs once, then preserve-marker-contract.cjs once. The prompt/ledger and audit are current accepted records. render-qa.cjs final captures the eleven pictures plus narrow/grayscale proofs; write-audit.cjs recreates audit/markups from baseline previews; verify-evidence.cjs checks containment/mapping and captures markup/integrated previews. Helpers use the bundled Playwright/Sharp packages and installed Chrome paths for this workstation.

Implementation commit is recorded in coordination/chapter-image-passes/PROGRESS.md by the separate completion commit. Both commits are pushed to main only after safe fetch/ancestry checks.
