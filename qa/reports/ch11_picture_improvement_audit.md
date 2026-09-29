# CH11 picture improvement audit — `27 × 46 = ?`

Task: `QA-IMAGE-PASS-CH11`

Audit date: 2026-09-29

Inventory: **19 reader-facing pictures** — one opening picture and Methods 01–18.
Coverage: **19/19 audited; 19/19 numbered markups.**

The inventory reconciles the manuscript, CH11 prompt, method-art ledger/provenance record, production manifest, vector folder, built chapter mapping, and historical `image_review_ch11.md`. CH11 contains nineteen production SVGs and no raster-backed pictures. Every SVG was rendered and inspected individually at its declared 1200×800 canvas before revision. Findings below describe the pre-revision state; each resolution records the final decision.

## 00 — Opening: split 46 into 40 and 6

[Markup](./ch11-image-markups/00_opening.svg) · Source: `art/vectors/ch11/twenty-seven-times-forty-six.svg`

**Purpose.** Establish the chapter problem through one proportional `40+6` area decomposition.

**What works.** The shared height is stable, the narrow six-unit strip is dashed and orange, an enlarged callout repeats its exact product, and the sum remains visually dominant.

1. **Retain — the proportional base rectangle, external enlargement, selectable labels, and equation jointly make both partial products readable without distorting the source geometry.**

**Revision target.** Preserve the exact partition and supporting callout.

**Acceptance checks.** Widths remain proportional `40:6`; common height 27; products 1,080 and 162; total 1,242; strip is distinguishable without color. **Resolution:** retained as-is.

## 01 — Retrieve, then check

[Markup](./ch11-image-markups/01_direct_product.svg) · Source: `art/vectors/ch11/ch11_m01_direct-product.svg`

**Purpose.** Contrast direct retrieval with a separate magnitude check.

**What works.** Problem and answer occupy quiet peer cards; one small joined arrow communicates retrieval; a dashed rule and approximation sign keep estimation subordinate and non-exact.

1. **Retain — the minimal connector, separate estimate lane, and explicit exact-versus-approximate wording already meet hierarchy and accessibility goals.**

**Revision target.** Preserve the restrained retrieval transition.

**Acceptance checks.** Exact answer 1,242; estimate `30×40≈1,200`; no neural metaphor; arrow does not cover either card. **Resolution:** retained as-is.

## 02 — Split 46 into tens and ones

[Markup](./ch11-image-markups/02_split_46_area.svg) · Source: `art/vectors/ch11/ch11_m02_split-46-area.svg`

**Purpose.** Show `27(40+6)` as two proportional adjacent regions.

**What works.** The 40:6 width ratio is exact, the small region has a dashed boundary, and a linked enlargement carries its full equation at comfortable size.

1. **Retain — the enlarged strip solves the placed-size label problem while leaving the proportional source region intact.**

**Revision target.** Preserve source-to-inset identity and exact dimensions.

**Acceptance checks.** Height 27; widths 40 and 6; `1,080+162=1,242`; connector meets the strip and inset without crossing text. **Resolution:** retained as-is.

## 03 — Split 27 into twenties and sevens

[Markup](./ch11-image-markups/03_split_27_area.svg) · Source: `art/vectors/ch11/ch11_m03_split-27-area.svg`

**Purpose.** Show `(20+7)×46` with a shared 46-unit width.

**What works.** The 20:7 height ratio is proportional; both regions are large enough to label internally; hatching and brackets supplement hue.

1. **Retain — the geometry is exact, uncluttered, and directly traceable to `920+322=1,242`.**

**Revision target.** Preserve the strong two-region composition.

**Acceptance checks.** Common width 46; heights 20 and 7; partial products 920 and 322; total 1,242. **Resolution:** retained as-is.

## 04 — Thirty groups, remove three

[Markup](./ch11-image-markups/04_compensation_array.svg) · Source: `art/vectors/ch11/ch11_m04_compensation-array.svg`

**Purpose.** Make `(30−3)×46` visible as an exact correction.

**What works.** Three large ten-group benchmark blocks eliminate the vibration of thirty hairline rows, and the final equation is clear.

1. **Major — the pre-revision third block remained an undivided `10×46` while a detached box merely asserted `remove 3×46`; the picture did not show which three of the thirty groups were removed or the seven retained in that block.** Partition the third ten-group block proportionally into seven kept and three removed groups, using boundary, hatch, label, and equation rather than color alone.

**Revision target.** Make the correction a traceable subset of the 30-group benchmark.

**Acceptance checks.** Three benchmark blocks of ten; final block split `7+3`; removed section equals 138; kept groups total `10+10+7=27`; `1,380−138=1,242`; no scribble crossing. **Resolution:** implemented.

## 05 — Round 46 to 50

[Markup](./ch11-image-markups/05_round_46.svg) · Source: `art/vectors/ch11/ch11_m05_round-46.svg`

**Purpose.** Show a four-per-group overestimate and its exact correction.

**What works.** The 46→50 movement is isolated on a simple line, `+4 per group` is attached to the arc, and the calculation card explicitly removes 108.

1. **Retain — one joined arrow, two endpoint ticks, and a separate correction equation keep benchmark motion and arithmetic aligned.**

**Revision target.** Preserve the compact compensation sequence.

**Acceptance checks.** `27×50=1,350`; `27×4=108`; `1,350−108=1,242`; arrow terminates before its head and avoids labels. **Resolution:** retained as-is.

## 06 — Nearby known product

[Markup](./ch11-image-markups/06_near_factor_area.svg) · Source: `art/vectors/ch11/ch11_m06_near-factor-area.svg`

**Purpose.** Extend a stated known `23×46` product by four more groups.

**What works.** The prerequisite is explicit, the `23+4` split is proportional, and the four-group region uses hatch as a redundant cue.

1. **Retain — the picture avoids implying that 23 is inherently easy and preserves both partial areas within one 27×46 rectangle.**

**Revision target.** Preserve prerequisite framing and proportional addition.

**Acceptance checks.** Common width 46; heights 23 and 4; areas 1,058 and 184; total 1,242. **Resolution:** retained as-is.

## 07 — Double and halve

[Markup](./ch11-image-markups/07_double_halve.svg) · Source: `art/vectors/ch11/ch11_m07_double-halve.svg`

**Purpose.** Show product conservation under `27→54` and `46→23`.

**What works.** A centered equals sign replaces directional travel, both factor operations are named, and the lower card independently verifies the transformed product.

1. **Retain — equality, paired factor labels, and the follow-up `20+3` calculation communicate balance without an oversized motion cue.**

**Revision target.** Preserve the calm equivalence structure.

**Acceptance checks.** `27×46=54×23`; one factor doubles while the other halves; `1,080+162=1,242`. **Resolution:** retained as-is.

## 08 — Repeated addition in blocks

[Markup](./ch11-image-markups/08_repeated_addition.svg) · Source: `art/vectors/ch11/ch11_m08_repeated-addition.svg`

**Purpose.** Track 27 equal additions of 46 as `10+10+7`.

**What works.** Exactly 27 tallies sit in three dashed containers with separate braces and subtotals; copy clarifies that each tally means one whole `+46`.

1. **Retain — enclosure, spacing, labels, and the final group-count check make every addition auditable without drawing 1,242 units.**

**Revision target.** Preserve the exact grouped tally structure.

**Acceptance checks.** Tally bands 10, 10, and 7; subtotals 460, 460, and 322; total 1,242. **Resolution:** retained as-is.

## 09 — Skip-count by 46

[Markup](./ch11-image-markups/09_skip_count.svg) · Source: `art/vectors/ch11/ch11_m09_skip-count-46.svg`

**Purpose.** Enumerate 27 equal group beats with checkpoints at 10, 20, and 27.

**What works.** The line contains exactly 27 evenly spaced ticks; longer milestone ticks, three brackets, and written checkpoint values organize the dense sequence.

1. **Retain — the nonliteral tick convention is stated, group bands are explicit, and all checkpoints remain readable at full and placed size.**

**Revision target.** Preserve the exact 27-tick cadence.

**Acceptance checks.** Exactly 27 ticks; bands 1–10, 11–20, 21–27; checkpoints 460, 920, and 1,242; no overflow or clipping. **Resolution:** retained as-is.

## 10 — Build the array

[Markup](./ch11-image-markups/10_array.svg) · Source: `art/vectors/ch11/ch11_m10_array.svg`

**Purpose.** Represent 27 rows by 46 columns while grouping both dimensions.

**What works.** Rows are grouped 10, 10, and 7 instead of drawn individually; the six-column region remains proportional and has a linked enlargement.

1. **Retain — grouped row boundaries and the enlarged narrow strip avoid moiré while preserving the 27×40 and 27×6 regions.**

**Revision target.** Preserve proportional array geometry and grouped readability.

**Acceptance checks.** Row groups 10+10+7; columns 40+6; products 1,080 and 162; total 1,242. **Resolution:** retained as-is.

## 11 — Written partial products

[Markup](./ch11-image-markups/11_partial_products.svg) · Source: `art/vectors/ch11/ch11_m11_partial-products.svg`

**Purpose.** Show the written algorithm as aligned complete partial products.

**What works.** Large selectable numerals dominate; `162` and `1,080` are annotated by their multipliers; a bracket names place-value alignment.

1. **Retain — alignment, multiplication labels, and the exact-total cue explain the shifted tens row without adding arrows through the notation.**

**Revision target.** Preserve the uncluttered written workspace.

**Acceptance checks.** `27×6=162`; `27×40=1,080`; aligned sum 1,242; no raster text. **Resolution:** retained as-is.

## 12 — Mental partial-product workspace

[Markup](./ch11-image-markups/12_mental_workspace.svg) · Source: `art/vectors/ch11/ch11_m12_mental-workspace.svg`

**Purpose.** Present the same decomposition as Method 02 in a different representational format.

**What works.** Two dashed source cards converge with thin separated paths into a clean aligned sum; all exact numerals remain vector text.

1. **Retain — the paths stay outside labels and the page-like result clearly differentiates imagined format from altered mathematics.**

**Revision target.** Preserve the two-to-one workspace flow.

**Acceptance checks.** Source facts 1,080 and 162; aligned result 1,242; curves do not cover text or card edges. **Resolution:** retained as-is.

## 13 — Forty-bundles and single units

[Markup](./ch11-image-markups/13_unit_bundles.svg) · Source: `art/vectors/ch11/ch11_m13_unit-bundles.svg`

**Purpose.** Model one sample `40+6` group and apply exact multiplicities across 27 groups.

**What works.** The title states “one sample group,” copy states that cards are representative, the six singles are countable, and both exact multiplication lanes merge below.

1. **Retain — representative-versus-exact status is explicit and the packet/singles contrast communicates the unit decomposition without currency cues.**

**Revision target.** Preserve the sample-group framing.

**Acceptance checks.** One 40-unit packet; exactly six single tokens; both multiplied by 27; partial products 1,080 and 162; total 1,242. **Resolution:** retained as-is.

## 14 — Learned lattice algorithm

[Markup](./ch11-image-markups/14_lattice.svg) · Source: `art/vectors/ch11/ch11_m14_lattice.svg`

**Purpose.** Explain the external written lattice procedure in three readable stages.

**What works.** The 2×2 lattice is large, cell products occupy the correct sides of each diagonal, and a separate panel states every right-to-left sum and carry before reading D-C-B-A.

1. **Retain — the staged layout makes the formerly compressed procedure followable while avoiding claims about spontaneous imagery.**

**Revision target.** Preserve the large grid and explicit carry narrative.

**Acceptance checks.** Edge digits 27 and 46; cells 08, 28, 12, 42; diagonal outcomes 2, 4 carry 1, 2 carry 1, 1; result 1,242. **Resolution:** retained as-is.

## 15 — Expand both factors

[Markup](./ch11-image-markups/15_expand_both.svg) · Source: `art/vectors/ch11/ch11_m15_expand-both.svg`

**Purpose.** Show double distributivity across four exact area regions.

**What works.** Both factor splits remain proportional, hatching distinguishes the seven-row band, and an external callout repeats the small `7×6` corner.

1. **Retain — the corner callout improves legibility without replacing or enlarging the proportional source region.**

**Revision target.** Preserve all four traceable regions.

**Acceptance checks.** Dimensions 20+7 and 40+6; products 800, 120, 280, 42; sum 1,242; callout points only to the 7×6 corner. **Resolution:** retained as-is.

## 16 — Regroup place-value blocks

[Markup](./ch11-image-markups/16_place_value_blocks.svg) · Source: `art/vectors/ch11/ch11_m16_place-value-blocks.svg`

**Purpose.** Show that regrouping changes packaging while conserving 1,242.

**What works.** Before and after panels state the same total, representative shapes carry exact multiplicity labels, and the final place-value expansion verifies the result.

1. **Moderate — the pre-revision phrase `trade 10 hundreds` extended beneath the after-panel, clipping the final letters and weakening the connection between the arrow and the named exchange.** Split both exchange labels across compact lines fully inside the connector lane while keeping the arrow clear of panel borders.

**Revision target.** Make the valid trade readable without occlusion at full or narrow size.

**Acceptance checks.** Before: 12 hundreds, 4 tens, 2 ones; connector: 10 hundreds for 1 thousand; after: 1 thousand, 2 hundreds, 4 tens, 2 ones; total unchanged; no label/panel overlap. **Resolution:** implemented.

## 17 — Track groups with taps

[Markup](./ch11-image-markups/17_tap_groups.svg) · Source: `art/vectors/ch11/ch11_m17_tap-groups.svg`

**Purpose.** Use a motor rhythm to track the group count without depicting a hand.

**What works.** Exactly 27 open circles are divided by a bracket into 10, 10, and 7; copy explicitly says that no body anatomy is implied.

1. **Retain — outline, position, bracket divisions, and written subtotals make the rhythm independent of color and free of anatomical ambiguity.**

**Revision target.** Preserve the exact abstract tapping trace.

**Acceptance checks.** Exactly 27 circles; groups 10, 10, and 7; subtotals 460, 460, and 322; result 1,242. **Resolution:** retained as-is.

## 18 — Estimate, then refine

[Markup](./ch11-image-markups/18_estimate_refine.svg) · Source: `art/vectors/ch11/ch11_m18_estimate-refine.svg`

**Purpose.** Separate an approximate magnitude benchmark from exact verification.

**What works.** Approximate and exact cards use different boundaries and headings, the approximation sign is prominent, and the short 42-unit gap is bracketed on a common scale.

1. **Retain — wording, line style, position, and notation all distinguish estimate from proof without depending on hue.**

**Revision target.** Preserve the explicit approximation/exact separation.

**Acceptance checks.** Estimate 1,200; exact 1,242; difference 42; both marks share one zero-based line; labels remain distinct in grayscale. **Resolution:** retained as-is.

## Resolution summary

- **19/19** pictures audited and **19/19** numbered markups created.
- **2 pictures revised:** Methods 04 and 16.
- **17 pictures retained with explicit rationale:** opening and Methods 01–03, 05–15, 17, and 18.
- Manuscript illustration briefs, accessible SVG metadata, prompt, method-art ledger, and provenance were synchronized.
- Repeated method-level constructed-account boilerplate was removed under the established editorial-framing lesson; the chapter opening retains the mandatory disclosure.
- CH11 contains no raster assets or organic anatomy; all labels and mathematical notation remain native selectable SVG text.
- No finding remains unresolved.
