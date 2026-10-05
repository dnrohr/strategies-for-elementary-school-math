# QA-IMAGE-PASS-CH14 evidence and handoff

Started: 2026-10-04. Final verification: 2026-10-05. Deterministic selection: no active/blocked row existed, and CH14 was the lowest queued chapter. Baseline commit: `05a3e1b`.

## Coverage and disposition

- Reconciled inventory: opening plus ten methods, all eleven repository-native 1200×800 SVGs; no raster/composite art or anatomy inspection applies.
- Audits: **11/11 (100%)**. Numbered markup SVGs: **11/11 (100%)**; each has a matching rendered preview.
- Findings: **18**, comprising **16 implemented revision/synchronization findings** and **two retained decisions with rationale**. No unresolved picture findings.
- Production files: **nine SVGs revised**, including M09 metadata only; opening and M06 retained. Manuscript briefs, prompt, scoped ledger, and accessible descriptions synchronized.
- All eleven final pictures inspected individually at 1200×800, at 390-pixel artwork placement, and in grayscale. Integrated chapter loading and narrow containment checked; representative current screenshots inspected.
- No research sources, raster generation, external artwork, or participant depictions added.
- The user authorized the narrow test-file scope handoff on 2026-10-05. The three CH14 assertions now require explicit component-wise reduction. All completion checks pass; the implementation hash and final tracker state are recorded in the separate coordination commit.

## Individual inspection record

| Picture | Final render | Visual acceptance |
| --- | --- | --- |
| Opening | `final-three-fractions-in-twelfths.png` | Twelve 60-pixel cells in each equal whole; 9/8/5 marked; hatch versus solid fills and labels; one balanced result card. |
| M01 | `final-ch14_m01_common-twelfths.png` | Twelve 55-pixel cells; original fourth/third boundaries every three/four; exact fills and complete result equation. |
| M02 | `final-ch14_m02_strategic-pairing.png` | Three numbered stages; 14/12 intermediate reduced component-wise; 7/6 + 4/6 = 11/6; contained equations. |
| M03 | `final-ch14_m03_staged-first-pair.png` | 17/12 intermediate plus unchanged 5/12; clean marker-base joins; explicit numerator/denominator reduction. |
| M04 | `final-ch14_m04_equal-fraction-bars.png` | Same 50-pixel unit in source and result; exactly 12+10 cells; whole/remainder labels outside strip. |
| M05 | `final-ch14_m05_number-line-accumulation.png` | 24 proportional intervals; arc landings at 9/12, 17/12, 22/12; heads meet line; labels below it. |
| M06 | `final-ch14_m06_estimate-then-exact.png` | Proportional rough marker at 1.8; dashed ESTIMATE and solid EXACT panels; approximate versus exact notation distinct. |
| M07 | `final-ch14_m07_stacked-symbolic-algorithm.png` | Conversion and written column preserved; 22/12 reduction explicit; mixed form on separate line. |
| M08 | `final-ch14_m08_whole-and-remainder.png` | Twelve plus ten equal 50-pixel cells; five two-cell brackets; component-wise remainder reduction. |
| M09 | `final-ch14_m09_verbal-unit-story.png` | Four numbered verbal cards, matching accessible description; constructed-account and no-required-inner-speech caveats. |
| M10 | `final-ch14_m10_abstract-common-unit.png` | Three complete sum states, clean vertical joins, external-map framing, no sensory identity implication. |

All eleven have corresponding `baseline-*.png` and `grayscale-*.png` files. `narrow-1.png` through `narrow-4.png` cover all eleven pictures at 390-pixel artwork width. These were inspected for labels, clipping, sequence, exact quantities, and non-color meaning. Small secondary captions support full-size reading; dominant quantities and identities remain legible at narrow placement. The book's vector sources remain selectable and scalable.

`integrated-narrow-opening.png` and `integrated-narrow-m02/m04/m05/m07/m08/m09/m10.png` show current built-chapter placement at a 390-pixel viewport. All eleven figures loaded and the page has no horizontal overflow. Native SVG metadata supplies the HTML alt descriptions.

## Audit and path handoff

The detailed audit is `qa/reports/ch14_picture_improvement_audit.md`; numbered baseline markups are `qa/reports/ch14-image-markups/`. Markup callouts map one-to-one to the audit's eighteen findings. Retained decisions remain visible in their own markups.

Implementation paths: `book/manuscript/14_three_fractions.md`, `art/vectors/ch14/`, `art/prompts/ch14/README.md`, the new audit/markups, and this evidence folder. The explicit user scope handoff also covers three CH14 assertions in `test/pipeline.test.mjs`; no other test or shared-source edits were needed. Tracker and the new lesson are committed separately. The historical review and shared production manifest are read-only; no mapping correction is needed there. No known gaps remain.

Repeated method-level disclaimers were replaced with the standard “A solver might describe the experience this way” framing under lesson 12, preserving chapter and book disclosures. Applied lessons: clean arrow joins, traceable unit identity, complete terms, exact unit geometry, clear label lanes, concise explanation, original fraction boundaries. Existing pattern origins were checked and already pass lesson 18.

The scoped ledger's current-pass supplement supersedes older layout descriptions. All asset dimensions, exact quantities, accessible metadata, and current briefs agree.

## Checks and reproduction

- Early `npm run validate`: passed, 16 production entries and 42 canonical research records.
- `focused-checks.log`: passed eleven asset/markup counts, text containment, marker reference resolution, final-render coverage, integrated eleven-figure loading, and no narrow-page overflow.
- `repository-checks-initial.log`: historical first run, 27/28 tests passed; the CH14 test required the previous reduction strings. The user subsequently authorized the three-assertion correction.
- `repository-checks.log`: complete final `npm run check` passed: validation, all 28 tests, build, and export verification. Validation covers 16 production entries and 42 canonical research records.
- `npm run verify:export`: passed, two self-contained HTML editions with 190 embedded figures each, 24 verified sources, and two non-empty PDFs.
- `git diff --check`: passed. Remote ancestry is checked before committing and again before pushing.
- The exact authorized three-assertion correction is preserved in `test-handoff.patch` and has been applied. It changes the expected reduction notation while preserving the existing exact sum, conversion, and mixed-number checks.

Workstation reproduction helpers use bundled Playwright/Sharp and installed Chrome. Starting from baseline `05a3e1b`, `apply-revisions.cjs` is a one-time baseline transformation. `render-qa.cjs baseline|final` renders all eleven pictures; final additionally captures narrow sheets and eleven grayscale proofs. `write-audit.cjs` recreates audit/markups from baseline previews; use `--verified` only after final visual review and repository checks. `verify-evidence.cjs` checks containment and mapping and renders markup/integrated evidence.

The implementation hash is recorded in `coordination/chapter-image-passes/PROGRESS.md` by the separate coordination commit. It records all 11 audits and markups, nine revised SVGs, two retained pictures, all 18 resolved/retained findings, and one genuinely new lesson about fraction-reduction notation. Both commits are pushed through the safe fast-forward publishing sequence.
