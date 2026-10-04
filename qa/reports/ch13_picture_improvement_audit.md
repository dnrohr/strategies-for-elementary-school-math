# CH13 picture improvement audit — 2/3 + 5/8

Task: `QA-IMAGE-PASS-CH13` · Date: 2026-10-04

Inventory: **11 reader-facing pictures: opening plus Methods 01–10. Coverage: 11/11 audits and 11/11 numbered markup SVGs.** The manuscript, CHAPTERS.json, build mapping, production manifest, prompt, scoped ledger, vector folder, and historical review reconcile to these eleven SVGs. No CH13 raster/composite assets exist. Shared manifest prose retains a historical 15-jump phrase; a scoped handoff proposes its correction.

Every baseline and final picture was rendered separately in Chrome at 1200×800 and inspected individually. Findings below refer to the baseline; resolutions record the final disposition. Each entry assesses arithmetic, thought fidelity, communication, warm book aesthetic, composition/proportions, labels/joins, hierarchy, and non-color accessibility. Anatomy and generated-raster provenance are not applicable; all pictures have native SVG labels and repository-authored geometry.

## 00 — Opening — rename the units

[Markup](./ch13-image-markups/00_opening.svg) · Source: `art/vectors/ch13/add-two-thirds-five-eighths.svg`

**Purpose.** Introduce the unlike fractions through equivalent quantities and a common-unit sum.

**What works.** Equal whole lengths, exact fill lengths, hatching for the second addend, and a dominant result card give a warm, uncluttered introduction.

1. **Major — The 32 px tick pattern uses the global origin rather than the bar origin x=300. Partial edge cells undermine the claim of twenty-four equal units.**

   **Revision target:** Anchor the pattern at x=300; preserve 768 px whole and 512/480 px fills. **Resolution:** implemented.

2. **Minor — The accessible description promises three bars and a partitioned result, but the visible result is an equation card.**

   **Revision target:** Describe two partitioned bars and one equation card faithfully. **Resolution:** implemented.

**Objective acceptance checks.** Exactly 24 equal 32 px cells per bar; 16/15 filled cells; no partial edge cells; 31/24=1+7/24; description matches visible content.

**Final visual QA.** Passed individual 1200×800 inspection and 390 px placement for counts, geometry, hierarchy, labels, clear paths, and containment. Material grayscale proof also passed.

## 01 — M01 — common-unit strips

[Markup](./ch13-image-markups/01_method_01.svg) · Source: `art/vectors/ch13/ch13_m01_common-unit-strips.svg`

**Purpose.** Preserve the original third and eighth units while refining both into twenty-fourths.

**What works.** The fine 30 px grid is subordinate to strong source boundaries, and the two filled regions have redundant solid/hatch encoding. The sum occupies one separate card.

1. **Retain — The source-boundary rhythms are correctly different: every eight cells for thirds, every three for eighths. No extra arrows or duplicated result rails are needed.**

   **Revision target:** Keep the production picture; synchronize the brief to two refined strips rather than a three-stage strip sequence. **Resolution:** retained with rationale; brief synchronized.

**Objective acceptance checks.** 24 equal 30 px cells per 720 px whole; third boundaries x 540/780; eighth boundaries x 390 through 930 every 90; fills 480/450; labels remain contained at 390 px.

**Final visual QA.** Passed individual 1200×800 inspection and 390 px placement for counts, geometry, hierarchy, labels, clear paths, and containment. Material grayscale proof also passed.

## 02 — M02 — count the unit fraction

[Markup](./ch13-image-markups/02_method_02.svg) · Source: `art/vectors/ch13/ch13_m02_unit-fraction-count.svg`

**Purpose.** Explain how thirds and eighths count copies of the same one-twenty-fourth unit.

**What works.** Three brackets above and eight below make both grouping rhythms auditable. A large running-count equation preserves the denominator meaning.

1. **Moderate — The detached reference cell is 110 px wide while actual cells are 30 px, with no enlargement label. It can imply a different unit size.**

   **Revision target:** Use a detached 30 px cell and put its 1 cell / 1/24 labels beside it; describe the equal-width reference in metadata. **Resolution:** implemented.

**Objective acceptance checks.** 24 cells; upper brackets three groups of eight, lower eight groups of three; reference width 30 equals strip width 30; 16+15=31; labels avoid reference outline.

**Final visual QA.** Passed individual 1200×800 inspection and 390 px placement for counts, geometry, hierarchy, labels, clear paths, and containment. Material grayscale proof also passed.

## 03 — M03 — two separate 3×8 grids

[Markup](./ch13-image-markups/03_method_03.svg) · Source: `art/vectors/ch13/ch13_m03_three-by-eight-grid.svg`

**Purpose.** Supply a common area unit without incorrectly treating overlapping marks as the sum.

**What works.** Two separate wholes, a dashed separator, and explicit 16/15 source counts avoid union-area confusion. The result length is proportional to 24+7.

1. **Major — The right grid reuses the left pattern origin x=80 at x=680, a 600 px translation not divisible by 55. It renders nine unequal columns with partial edge cells.**

   **Revision target:** Draw the right grid at its own origin with seven internal verticals every 55 px and two horizontals every 70 px. **Resolution:** implemented.

2. **Moderate — The result strip has only two solid regions although its description and brief promise 31 countable cells.**

   **Revision target:** Add 30 internal ticks at 24 px intervals; put whole/remainder labels beneath, keeping the 24+7 boundary dominant. **Resolution:** implemented.

**Objective acceptance checks.** Each grid has exactly 3 rows ×8 equal columns; 2×8=16 and 5×3=15; result 31 cells at 24 px; first 24 form a whole, remaining 7 share the same width; no labels obscure cells.

**Final visual QA.** Passed individual 1200×800 inspection and 390 px placement for counts, geometry, hierarchy, labels, clear paths, and containment. Material grayscale proof also passed.

## 04 — M04 — scale without changing value

[Markup](./ch13-image-markups/04_method_04.svg) · Source: `art/vectors/ch13/ch13_m04_scale-equivalent-fractions.svg`

**Purpose.** Pair numerator and denominator scaling while preserving each fraction value.

**What works.** Large source/equivalent notation, two separated cards, unchanged proportional fills, and solid/dashed frames make the operations clear without relying on color.

1. **Minor — The connector strokes continue beneath filled marker heads instead of stopping at their bases.**

   **Revision target:** Use triangular marker heads anchored at their bases (refX=0); stop strokes at x 422, before tips at 440. **Resolution:** implemented.

2. **Minor — The manuscript brief promises expanding cards and paired arrows; the art uses one ×8/8 or ×3/3 arrow and fixed-length bars.**

   **Revision target:** Synchronize the brief to fixed whole/fill lengths and a single multiplication-by-one arrow per row. **Resolution:** implemented in manuscript/brief.

**Objective acceptance checks.** 2/3×8/8=16/24 and 5/8×3/3=15/24; whole widths 330, fill 220/206.25; clean head-base joins; no false physical stretching implication.

**Final visual QA.** Passed individual 1200×800 inspection and 390 px placement for counts, geometry, hierarchy, labels, clear paths, and containment. Non-color cues were verified directly; no additional grayscale sample was necessary.

## 05 — M05 — cross one whole on a line

[Markup](./ch13-image-markups/05_method_05.svg) · Source: `art/vectors/ch13/ch13_m05_number-line-addition.svg`

**Purpose.** Add fifteen twenty-fourth intervals as eight to the whole, then seven beyond.

**What works.** The 0–2 line is proportional, the two grouped moves avoid the historical micro-arc clutter, and exact start/whole/result labels are prominent.

1. **Moderate — Arcs float above the line with endpoints shifted five pixels from the actual ticks. Their purple marker heads also obscure connector joins.**

   **Revision target:** Use paths at exact x 420→580→720; explicit heads touch destination dots without being hidden. Move the second label away from its trajectory. **Resolution:** implemented.

2. **Minor — Briefs and ledger still describe fifteen separate jumps although the accepted art uses two grouped moves.**

   **Revision target:** Record 15 equal intervals grouped as+8/24 and +7/24 in the manuscript, prompt, and ledger. **Resolution:** implemented in scoped records.

**Objective acceptance checks.** 0 at 100,1 at 580,2 at 1060;48 equal 20 px intervals;16/24 at 420,31/24 at 720; moves span 160/140 px; heads remain visible above dots; solid/dashed paths survive grayscale.

**Final visual QA.** Passed individual 1200×800 inspection and 390 px placement for counts, geometry, hierarchy, labels, clear paths, and containment. Material grayscale proof also passed.

## 06 — M06 — estimate then prove

[Markup](./ch13-image-markups/06_method_06.svg) · Source: `art/vectors/ch13/ch13_m06_estimate-then-prove.svg`

**Purpose.** Separate a magnitude estimate near 1.3 from exact common-unit arithmetic.

**What works.** The estimate position is proportional and explicitly labeled; dashed versus solid frames, headings, and≈ notation preserve estimate/proof separation in grayscale.

1. **Minor — Metadata and brief promise an exact-point or 24-unit inset that is absent; the exact panel is an equation card.**

   **Revision target:** Keep visible artwork; describe the existing equation proof faithfully in metadata and briefs. **Resolution:** implemented; visible composition retained.

**Objective acceptance checks.** Benchmark positions 180/600/684/1020 represent 1/1¼/1.3/1½; exact 31/24=1 7/24;≈1.292 is marked approximate; no claim of a nonexistent inset.

**Final visual QA.** Passed individual 1200×800 inspection and 390 px placement for counts, geometry, hierarchy, labels, clear paths, and containment. Material grayscale proof also passed.

## 07 — M07 — compact symbolic rule

[Markup](./ch13-image-markups/07_method_07.svg) · Source: `art/vectors/ch13/ch13_m07_compact-symbolic-rule.svg`

**Purpose.** Make the numerator cross-products and denominator product of the compact rule explicit.

**What works.** The previous straight conversion rows avoided historical crossings and kept both equivalent addends present. The denominator warning was mathematically correct.

1. **Moderate — The visible conversion rows omit the compact numerator calculation promised by the account, and a dangling line connects only the lower row toward the sum. The cross-path/tray brief is also stale.**

   **Revision target:** Replace with separate labeled numerator and denominator rows, followed by the complete compact formula and exact mixed result; synchronize metadata/briefs. **Resolution:** implemented.

**Objective acceptance checks.** Numerator 2×8+5×3=16+15=31; denominator 3×8=24; formula(2×8+5×3)/(3×8)=31/24=1 7/24; no crossing or dangling paths; full formula contained at 390 px.

**Final visual QA.** Passed individual 1200×800 inspection and 390 px placement for counts, geometry, hierarchy, labels, clear paths, and containment. Non-color cues were verified directly; no additional grayscale sample was necessary.

## 08 — M08 — whole and remainder

[Markup](./ch13-image-markups/08_method_08.svg) · Source: `art/vectors/ch13/ch13_m08_whole-and-remainder.svg`

**Purpose.** Interpret 31 twenty-fourths as 24 making one whole plus seven remaining units.

**What works.** Separate strips preserve one 35 px unit size; precise brackets identify the whole and remainder. The displayed decomposition and mixed form make the conversion direct.

1. **Retain — Both strip origins align to the 35 px pattern and all 31 cells are countable; brackets and explicit labels make color unnecessary.**

   **Revision target:** Retain the production picture and its accurate brief/provenance. **Resolution:** retained as-is.

**Objective acceptance checks.** 24 equal 35 px cells in 840 px whole, seven in 245 px remainder;31/24=24/24+7/24=1 7/24; brackets clear of labels.

**Final visual QA.** Passed individual 1200×800 inspection and 390 px placement for counts, geometry, hierarchy, labels, clear paths, and containment. Non-color cues were verified directly; no additional grayscale sample was necessary.

## 09 — M09 — decimal check

[Markup](./ch13-image-markups/09_method_09.svg) · Source: `art/vectors/ch13/ch13_m09_decimal-verification.svg`

**Purpose.** Use a finite repeating-decimal display as verification while retaining an exact fraction explanation.

**What works.** The warm vector display now fits the palette. Dashed verification and solid exact panels, headings, and both equivalent fractions prevent the display from posing as proof.

1. **Retain — The picture correctly distinguishes finite display from exact fraction, with no raster text. The manuscript still promises a 24-cell exact model that is absent.**

   **Revision target:** Retain the picture; synchronize the manuscript to its exact-equivalence card. The existing prompt/ledger already describe that card. **Resolution:** retained with rationale; brief synchronized.

**Objective acceptance checks.** 2÷3+5÷8=1.291666…; exact 31/24=1 7/24; both 16/24 and 15/24 present; dashed/solid separation persists in grayscale; no invented calculator/raster provenance.

**Final visual QA.** Passed individual 1200×800 inspection and 390 px placement for counts, geometry, hierarchy, labels, clear paths, and containment. Material grayscale proof also passed.

## 10 — M10 — external explanatory record

[Markup](./ch13-image-markups/10_method_10.svg) · Source: `art/vectors/ch13/ch13_m10_abstract-common-unit.svg`

**Purpose.** Explain the same computation without claiming to portray an abstract inner scene.

**What works.** Three numbered large cards preserve original sum, renamed sum, and exact result. The external-record caption and absence of sensory imagery respect the constructed account.

1. **Minor — Connector strokes continue beneath their small filled marker heads.**

   **Revision target:** Stop strokes at y 318/558; add explicit head triangles ending at 330/570, preserving the gaps between cards. **Resolution:** implemented.

2. **Minor — The brief/prompt describe three small equivalence nodes rather than the current large numbered sum-state cards.**

   **Revision target:** Describe the actual three states and external-explanation caption consistently; retain the no-sensory-identity constraint. **Resolution:** implemented in scoped records.

**Objective acceptance checks.** Original 2/3+5/8→16/24+15/24→31/24=1 7/24; no addend disappears; clear joins; caption remains outside cards; no head/brain/glow or fixed identity claim.

**Final visual QA.** Passed individual 1200×800 inspection and 390 px placement for counts, geometry, hierarchy, labels, clear paths, and containment. Non-color cues were verified directly; no additional grayscale sample was necessary.

## Resolution summary

- **11/11 audits and 11/11 numbered markups (100% each).**
- **Eight production SVGs revised:** opening; M02/M03/M04/M05/M07/M10 artwork; M06 metadata only.
- **Three production SVGs retained:** M01/M08/M09, with individual rationale. M01/M09 briefs were synchronized.
- **16 numbered findings:** 13 revision/synchronization findings resolved and 3 retained decisions justified. No unresolved findings.
- Manuscript illustration briefs, current prompt, scoped ledger/provenance, and accessible metadata agree with current art. Repeated method-level constructed-account boilerplate removed under lesson 12; chapter opening, method framing, research disclosure, and book-level disclosure preserved.
- Applied reusable lessons 1/5/6/7/8/12/16: head-base joins, preserve terms, exact units, clear label lanes, restrained explanation, editorial framing, traceable original partitions.
- No new research sources, generated images, or external artwork added.
- All eleven final pictures inspected; four 390 px sheets and seven grayscale proofs passed. Evidence and complete check log: `artifacts/ui/QA-IMAGE-PASS-CH13/`.
- Shared-file handoff: propose replacing the manifest’s historical “15 jumps” phrase with “15 intervals grouped into +8/24 and +7/24 moves”; no out-of-lane edits made.
