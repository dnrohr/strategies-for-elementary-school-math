# CH14 picture improvement audit — 3/4 + 2/3 + 5/12

Task: `QA-IMAGE-PASS-CH14` · Date: 2026-10-04

## Reconciled inventory and review standard

**11 reader-facing pictures: opening plus Methods 01–10. Audit coverage 11/11; numbered markup coverage 11/11 (100% each).** Reconciled against `book/CHAPTERS.json`, the ten manuscript methods, `scripts/build.mjs` filename mapping, `art/production_manifest.md`, scoped prompt/ledger, vector directory, and the historical read-only `image_review_ch14.md`. No chapter raster or composite files exist. Anatomy, image-generation prompts, and rejected generations are not applicable. All accepted art is repository-native SVG geometry and selectable text.

Baseline renders were inspected individually at 1200×800 before revising. Each entry assesses mathematics, quantities, account fidelity, communication, aesthetic, proportions, composition, labels, joins, hierarchy, and non-color accessibility. Markup callouts reference baseline locations, and numbering matches each entry one-to-one. Final dispositions follow.

## 00 — Opening

Source: `art/vectors/ch14/three-fractions-in-twelfths.svg` · [Numbered markup](./ch14-image-markups/00_opening.svg)

**Purpose.** Introduce the three addends as counts of one shared unit.

**What works.** Three 720-pixel wholes contain twelve 60-pixel cells each. Exact fills 540/480/300 show 9/8/5 cells. Hatch, labels, and separate rows supplement color. The warm paper field and one result card are balanced; the historical dense side calculation is already gone.

1. **Retain — The current opening has equal units, a clean hierarchy, and no trajectories or edge-crowded side panel. Its equation card is accurately described in metadata.**

   **Revision target:** Retain the picture and its exact native geometry.

   **Disposition:** retained with rationale.

**Objective acceptance checks.** Count 12 cells per whole, marked 9/8/5; 22/12 = 11/6 = 1 5/6; no partial edge cells; headings and result remain contained; hatch and labels remain interpretable without color.

**Final visual QA.** Passed individual 1200×800 inspection, 390-pixel placement, and grayscale inspection. Exact quantities, readable dominant relationships, contained labels, clear joins, and non-color semantics verified. Complete repository check passed.

## 01 — M01 — common twelfths

Source: `art/vectors/ch14/ch14_m01_common-twelfths.svg` · [Numbered markup](./ch14-image-markups/01_method_01.svg)

**Purpose.** Rename fourths and thirds without changing their quantities.

**What works.** The three equal 660-pixel wholes and 55-pixel cells are already exact. Large conversion labels, hatch versus fill, and a single result card keep the picture quiet and auditable.

1. **Moderate — All fine divisions look identical, hiding the original quarter and third boundaries promised by the brief. The brief also promises a 22-cell result, while the art has an equation card.**

   **Revision target:** Add stronger boundaries every three cells in the quarter row and every four in the third row; synchronize the brief to the equation result card and describe these boundaries in metadata.

   **Disposition:** implemented.

**Objective acceptance checks.** Quarter boundaries at x495/660/825; third boundaries at x550/770; fills 495/440/275 unchanged; twelve cells each; exact sum and original-unit grouping survive grayscale.

**Final visual QA.** Passed individual 1200×800 inspection, 390-pixel placement, and grayscale inspection. Exact quantities, readable dominant relationships, contained labels, clear joins, and non-color semantics verified. Complete repository check passed.

## 02 — M02 — strategic pairing

Source: `art/vectors/ch14/ch14_m02_strategic-pairing.svg` · [Numbered markup](./ch14-image-markups/02_method_02.svg)

**Purpose.** Combine fourths with twelfths, simplify that intermediate, then add thirds as sixths.

**What works.** The historical crowded bars were replaced by three numbered equation stages. Solid/dashed outlines and clear headings preserve sequence and unit changes. All addends and the 7/6 intermediate stay visible.

1. **Moderate — The label “14/12 ÷ 2/2 = 7/6” is value preserving, but division by the whole fraction 2/2 does not express the separate numerator and denominator reduction.**

   **Revision target:** Show (14 ÷ 2)/(12 ÷ 2) = 7/6 and explain that both counts are divided by two.

   **Disposition:** implemented.

2. **Minor — The manuscript/prompt/ledger describe a twelve-cell stage followed by a six-cell stage, but the current accepted layout is three equation cards.**

   **Revision target:** Synchronize all scoped briefs and provenance to the numbered rename/pair/add cards.

   **Disposition:** implemented in scoped records.

**Objective acceptance checks.** 9/12 + 5/12 = 14/12; (14 ÷ 2)/(12 ÷ 2) = 7/6; 2/3 = 4/6; 7/6 + 4/6 = 11/6; three numbered stages; text stays inside each card; no nonexistent bars in current brief.

**Final visual QA.** Passed individual 1200×800 inspection, 390-pixel placement, and grayscale inspection. Exact quantities, readable dominant relationships, contained labels, clear joins, and non-color semantics verified. Complete repository check passed.

## 03 — M03 — staged first pair

Source: `art/vectors/ch14/ch14_m03_staged-first-pair.svg` · [Numbered markup](./ch14-image-markups/03_method_03.svg)

**Purpose.** Combine fourths and thirds before adding the already compatible five twelfths.

**What works.** Three separated cards preserve 17/12 and the ready 5/12, with warm restrained frames and a distinct simplification card. Directed connectors support reading order without crossing text.

1. **Moderate — The reduction line uses division by 2/2 as shorthand for reducing numerator and denominator.**

   **Revision target:** Write (22 ÷ 2)/(12 ÷ 2) = 11/6 explicitly.

   **Disposition:** implemented.

2. **Minor — Horizontal connector strokes continue beneath the small filled arrowheads.**

   **Revision target:** Anchor markers at their bases with refX=0 and stop strokes 18 pixels before the old tip positions.

   **Disposition:** implemented.

3. **Minor — The manuscript brief promises a twelve-cell check strip which is absent.**

   **Revision target:** Describe the three equation stages and separate result card accurately.

   **Disposition:** implemented in scoped records.

**Objective acceptance checks.** Preserve 9/12 + 8/12 = 17/12; 17/12 + 5/12 = 22/12; explicit reduction to 11/6; connector ends x427/792, tips x445/810; no covered text or check-strip claim.

**Final visual QA.** Passed individual 1200×800 inspection, 390-pixel placement, and grayscale inspection. Exact quantities, readable dominant relationships, contained labels, clear joins, and non-color semantics verified. Complete repository check passed.

## 04 — M04 — equal bars

Source: `art/vectors/ch14/ch14_m04_equal-fraction-bars.svg` · [Numbered markup](./ch14-image-markups/04_method_04.svg)

**Purpose.** Accumulate the marked units of three equal fraction bars into a whole and remainder.

**What works.** Three source wholes are equal, with exact 9/8/5 marked counts and hatch/labels. The 12+10 result is mathematically correct, but its scale can be improved to make conservation visible.

1. **Moderate — Source cells are 50 pixels wide while result cells shrink to 40 pixels without an explicit scale change. The result whole appears shorter than each source whole.**

   **Revision target:** Keep 50-pixel cells in the result: 600 pixels for twelve plus 500 for ten. Label whole/remainder below the strip and synchronize brief/metadata.

   **Disposition:** implemented.

**Objective acceptance checks.** Source wholes 600 pixels; every cell 50 pixels across all states; result x50–1150 with whole boundary x650; exactly 22 cells grouped 12+10; labels outside the cells; 1 + 10/12 = 1 5/6.

**Final visual QA.** Passed individual 1200×800 inspection, 390-pixel placement, and grayscale inspection. Exact quantities, readable dominant relationships, contained labels, clear joins, and non-color semantics verified. Complete repository check passed.

## 05 — M05 — number-line accumulation

Source: `art/vectors/ch14/ch14_m05_number-line-accumulation.svg` · [Numbered markup](./ch14-image-markups/05_method_05.svg)

**Purpose.** Add three displacements measured in twelfths on a proportional line.

**What works.** The 0–2 line spans 960 pixels with 40-pixel intervals. Arc lengths are horizontally correct and the dashed middle jump supplements color. Exact intermediate labels and result are prominent.

1. **Moderate — Arc endpoints float 107 pixels above the number line. Filled heads overlap connector strokes, so the precise landings must be inferred from horizontal alignment.**

   **Revision target:** Connect arcs to exact ticks at x100/460/780/980. Stop strokes at marker bases y473, place tips at y487, and move landing labels below the line.

   **Disposition:** implemented.

2. **Minor — The manuscript calls for jump brackets rather than the actual three directed arcs.**

   **Revision target:** Synchronize the brief and ledger to proportional arcs meeting exact ticks.

   **Disposition:** implemented in scoped records.

**Objective acceptance checks.** Twenty-four equal 40-pixel intervals; 0 x100, 1 x580, 2 x1060; 9/12 x460, 17/12 x780, 22/12 x980; three arcs with spans 360/320/200; labels clear of paths; visible heads; 22/12 = 11/6 = 1 5/6.

**Final visual QA.** Passed individual 1200×800 inspection, 390-pixel placement, and grayscale inspection. Exact quantities, readable dominant relationships, contained labels, clear joins, and non-color semantics verified. Complete repository check passed.

## 06 — M06 — estimate then exact

Source: `art/vectors/ch14/ch14_m06_estimate-then-exact.svg` · [Numbered markup](./ch14-image-markups/06_method_06.svg)

**Purpose.** Use a rough benchmark estimate as a check, then retain an exact equation proof.

**What works.** Dashed versus solid panels, ESTIMATE/EXACT headings, and approximate notation separate the two roles. The line places 1.8 correctly at x936 on the 0–2 range x180–1020. Both panels are spacious and the exact equation is large.

1. **Retain — The current art correctly distinguishes the rough 1.8 marker from the separate exact 11/6 result; no extra exact-point overlay is needed.**

   **Revision target:** Retain production SVG with its accurate estimate/proof metadata.

   **Disposition:** retained with rationale.

2. **Minor — The manuscript brief asks to place 22/12 on the benchmark line, although the final art uses a rough marker and a separate exact equation.**

   **Revision target:** Synchronize the manuscript and current brief to the two distinct panels.

   **Disposition:** implemented in scoped records.

**Objective acceptance checks.** 0/1/2 positions x180/600/1020; 1.8 x936; exact 9/12 + 8/12 + 5/12 = 22/12; 11/6 = 1 5/6 ≈ 1.833; grayscale retains estimate/exact distinction.

**Final visual QA.** Passed individual 1200×800 inspection, 390-pixel placement, and grayscale inspection. Exact quantities, readable dominant relationships, contained labels, clear joins, and non-color semantics verified. Complete repository check passed.

## 07 — M07 — written column

Source: `art/vectors/ch14/ch14_m07_stacked-symbolic-algorithm.svg` · [Numbered markup](./ch14-image-markups/07_method_07.svg)

**Purpose.** Show common-unit conversions followed by addition of a written numerator column.

**What works.** Large conversion equations and aligned addends keep all three quantities present. Two spacious panels and an addition rule support hierarchy. The historical unit labels were enlarged already.

1. **Moderate — The bottom shorthand “÷ 2/2 →” can be read as division of the whole fraction by one, and it mixes simplification with mixed-number interpretation on one line.**

   **Revision target:** Use (22 ÷ 2)/(12 ÷ 2) = 11/6 on one line, then a larger 11/6 = 1 5/6 result beneath it. Synchronize metadata and brief.

   **Disposition:** implemented.

**Objective acceptance checks.** 3/4 × 3/3 = 9/12 and 2/3 × 4/4 = 8/12; unchanged + 5/12; written sum 22/12; component-wise reduction; mixed result on separate line; all text contained inside panels.

**Final visual QA.** Passed individual 1200×800 inspection, 390-pixel placement, and grayscale inspection. Exact quantities, readable dominant relationships, contained labels, clear joins, and non-color semantics verified. Complete repository check passed.

## 08 — M08 — whole and remainder

Source: `art/vectors/ch14/ch14_m08_whole-and-remainder.svg` · [Numbered markup](./ch14-image-markups/08_method_08.svg)

**Purpose.** Interpret twenty-two twelfths as one complete whole and five sixths remaining.

**What works.** The whole and remainder share exact 50-pixel cells. One 12-cell bracket and five two-cell remainder brackets make grouping auditable independently of color. No quantity vanishes during the rewrite.

1. **Moderate — The reduction annotation “10/12 ÷ 2/2” does not explicitly show the two component divisions promised by the pairing brackets.**

   **Revision target:** Replace with (10 ÷ 2)/(12 ÷ 2) = 5/6, keeping labels in the free space beside the remainder; update metadata/brief.

   **Disposition:** implemented.

**Objective acceptance checks.** Whole 600 pixels/12 cells; remainder 500 pixels/10 cells; five 100-pixel pairing brackets; reduction yields 5/6; final 22/12 = 11/6 = 1 5/6; label clear of bar.

**Final visual QA.** Passed individual 1200×800 inspection, 390-pixel placement, and grayscale inspection. Exact quantities, readable dominant relationships, contained labels, clear joins, and non-color semantics verified. Complete repository check passed.

## 09 — M09 — verbal unit story

Source: `art/vectors/ch14/ch14_m09_verbal-unit-story.svg` · [Numbered markup](./ch14-image-markups/09_method_09.svg)

**Purpose.** Present a constructed inner script that keeps the common unit explicit.

**What works.** Four numbered speech-like cards already give a clear reading order. Phrases align above their equations; one subtle wave cue suggests auditory representation. The caveat says words are not required, and no portrait fixes the account to an identity.

1. **Minor — Accessible metadata describes three thought-ribbon cards, but the picture contains four numbered cards including the sum.**

   **Revision target:** Describe four cards and their rename/retain/add roles accurately.

   **Disposition:** implemented in SVG metadata.

2. **Minor — The manuscript/prompt ask for three short phrases routed to a result, whereas the accepted art has four speech-like statements and separate result.**

   **Revision target:** Synchronize the scoped briefs to the current numbered layout; retain the art because its sequence and caveat are effective.

   **Disposition:** implemented in scoped records; visible artwork retained.

**Objective acceptance checks.** Four cards numbered 1–4; 3/4 → 9 twelfths, 2/3 → 8, 5/12 → 5; 9 + 8 + 5 = 22 twelfths; exact result separate; metadata count four; constructed-account and no-required-inner-speech caveats preserved.

**Final visual QA.** Passed individual 1200×800 inspection, 390-pixel placement, and grayscale inspection. Exact quantities, readable dominant relationships, contained labels, clear joins, and non-color semantics verified. Complete repository check passed.

## 10 — M10 — external relation map

Source: `art/vectors/ch14/ch14_m10_abstract-common-unit.svg` · [Numbered markup](./ch14-image-markups/10_method_10.svg)

**Purpose.** Record the same computation externally without claiming to depict a non-sensory inner experience.

**What works.** Three generous numbered cards preserve original sum, equivalent twelfths, and final forms. Sparse typography and negative space make a restrained closing image. Explicit external-map framing and absence of sensory icons respect the account.

1. **Minor — The vertical strokes extend into their filled marker heads.**

   **Revision target:** Set marker refX=0; end strokes at y318/558 before the 12-pixel heads ending at y330/570.

   **Disposition:** implemented.

2. **Minor — The brief describes small branched nodes and a merge, while the actual image shows three numbered sum states.**

   **Revision target:** Synchronize manuscript, prompt, and scoped ledger to the three-state relation map.

   **Disposition:** implemented in scoped records.

**Objective acceptance checks.** Three complete sum states; both renamed addends and unchanged 5/12 retained; 22/12 = 11/6 = 1 5/6; clean head-base joins; external-record caption; no head, glow, or stable thinker type.

**Final visual QA.** Passed individual 1200×800 inspection, 390-pixel placement, and grayscale inspection. Exact quantities, readable dominant relationships, contained labels, clear joins, and non-color semantics verified. Complete repository check passed.

## Resolution and synchronization summary

- 18 numbered findings: 16 revision/synchronization findings resolved, two retained decisions justified. No unresolved picture findings.
- Nine production SVGs revised: M01/M02/M03/M04/M05/M07/M08/M10 artwork and M09 metadata. Opening and M06 retained with rationale.
- Manuscript briefs, current prompts, scoped ledger/provenance, and accessible metadata synchronized. Lesson 12 applied by replacing ten repeated method disclaimers with “A solver might describe the experience this way”; book-level and chapter constructed-account disclosures remain intact.
- Applied lessons 1/3/5/6/7/8/12/16: clean head joins, traceable units, preserve terms, equal geometry, clear lanes, restrained explanation, editorial framing, source partitions. Pattern-origin lesson 18 was inspected; existing CH14 patterns are already aligned correctly, so no speculative pattern edits were made.
- No research sources, raster generation, external image provenance, or participant depictions added.
- New reusable lesson proposed: show component-wise fraction reduction explicitly; division of a whole fraction by 2/2 preserves value but does not show the two component divisions.

All eleven final renders, all eleven grayscale proofs, four narrow sheets, eleven markup previews, and integrated narrow examples were inspected. Check results and handoff are in `artifacts/ui/QA-IMAGE-PASS-CH14/README.md`.

Final verification: 2026-10-05. The user authorized the narrow test-file scope handoff, and three CH14 assertions now require the explicit numerator/denominator reductions. Complete npm run check passed: validation, all 28 tests, build, and export verification. Diff whitespace checks passed. No known gaps remain. The implementation hash and completion state are recorded in the separate tracker commit through the task publishing sequence.
