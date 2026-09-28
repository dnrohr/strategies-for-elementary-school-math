# CH09 picture improvement audit — `Which is larger: 3/5 or 5/8?`

Task: `QA-IMAGE-PASS-CH09`

Audit date: 2026-09-28

Inventory: **11 reader-facing pictures** — one opening picture and Methods 01–10.
Coverage: **11/11 audited; 11/11 numbered markups.**

The inventory reconciles the manuscript, CH09 prompt, method-art ledger, vector/composite/raster folders, built chapter mapping, and historical `image_review_ch09.md`. CH09 contains eleven production SVGs and no raster-backed pictures. Every SVG was rendered and inspected individually at 1200×800 before revision. Findings below describe the pre-revision state; each resolution records the final decision.

## 00 — Opening: same whole, common fortieths

[Markup](./ch09-image-markups/00_opening.svg) · Source: `art/vectors/ch09/fraction-comparison.svg`

**Purpose.** Introduce the comparison on one common whole and make the single-fortieth advantage visible.

**What works.** Both 1040-unit bars use forty exact 26-unit cells; fills stop at 624 and 650 units, giving 24 and 25 cells. Heavy five-cell rules support counting, and the extra cell is independently outlined and labeled.

1. **Retain — the opening uses one coherent comparison system, exact unit rules, written equivalences, and an outlined one-unit difference, so its meaning survives grayscale.**

**Revision target.** Preserve the single-system comparison and its one-extra-unit hierarchy.

**Acceptance checks.** Equal wholes; exactly 40 cells each; 24 versus 25 selected; one extra cell outlined; no second scale; useful title/description. **Resolution:** retained as-is.

## 01 — Equal fraction bars

[Markup](./ch09-image-markups/01_equal_fraction_bars.svg) · Source: `art/vectors/ch09/ch09_m01_equal-fraction-bars.svg`

**Purpose.** Compare the fractions as selected lengths of equal wholes while keeping their original partitions visible.

**What works.** The 800-unit bars divide exactly into fifths and eighths; selected widths are 480 and 500. Hatching versus solid fill, aligned endpoints, written decimals, and an exterior 20-unit bracket make the slight difference auditable without hue.

1. **Retain — the source partitions and the 20-unit reach difference are exact, uncluttered, and legible at intended size.**

**Revision target.** Preserve exact fifth/eighth partitions and the exterior difference bracket.

**Acceptance checks.** Equal 800-unit wholes; five and eight equal parts; 480 versus 500 selected; bracket spans exactly 20 units; labels remain clear. **Resolution:** retained as-is.

## 02 — Number-line placement

[Markup](./ch09-image-markups/02_number_line.svg) · Source: `art/vectors/ch09/ch09_m02_number-line-placement.svg`

**Purpose.** Treat each fraction as a point on one 0–1 line, then enlarge the close interval without changing order.

**What works.** The full line places 0.600 and 0.625 at exact shared-scale positions. The dashed inset clearly announces magnification, separates the labels, and states both `0.025` and `1/40`.

1. **Retain — the overview plus explicitly magnified interval resolves the close spacing without implying that the inset is a second independent scale.**

**Revision target.** Preserve exact full-scale placement, explicit magnification, and separated endpoint labels.

**Acceptance checks.** One 0–1 overview; 0.600 left of 0.625; inset named as magnified; difference `0.025 = 1/40`; no collisions. **Resolution:** retained as-is.

## 03 — Compare each to one half

[Markup](./ch09-image-markups/03_half_benchmark.svg) · Source: `art/vectors/ch09/ch09_m03_half-benchmark-gaps.svg`

**Purpose.** Compare exact positive distances from the common benchmark `1/2`.

**What works.** Two aligned mini-lines share the exact `1/2`–`5/8` scale. The `1/10` gap ends at `3/5`, the `1/8` gap ends at `5/8`, and solid/dashed bracket styles supplement color.

1. **Retain — separated aligned lines make both gap lengths traceable while preserving a common scale and a concise conclusion.**

**Revision target.** Preserve aligned scales, distinct bracket lanes, and the exact inequality.

**Acceptance checks.** Same endpoints and scale; `1/10` shorter than `1/8`; labels attach to the correct brackets; result remains contained. **Resolution:** retained as-is.

## 04 — Rename both in fortieths

[Markup](./ch09-image-markups/04_common_fortieths.svg) · Source: `art/vectors/ch09/ch09_m04_common-denominator-fortieths.svg`

**Purpose.** Preserve each fraction while renaming both with the same `1/40` unit.

**What works.** Forty exact 20-unit rules, selected widths 480 and 500, and the outlined extra fortieth make the final comparison exact.

1. **Major — the pre-revision heavy rules occurred every five fortieths on both bars and protruded outside them, so the top bar falsely emphasized eighth-sized groups rather than its original fifths.** Use contained heavy rules every eight cells on the `3/5` bar and every five cells on the `5/8` bar.

**Revision target.** Keep all forty common units while making the original fifth and eighth partitions independently traceable.

**Acceptance checks.** Forty equal cells in each bar; top heavy boundaries every 160 units; bottom every 100; no protruding rules; 24 versus 25; extra cell remains outlined. **Resolution:** implemented.

## 05 — Cross products

[Markup](./ch09-image-markups/05_cross_products.svg) · Source: `art/vectors/ch09/ch09_m05_cross-products.svg`

**Purpose.** Show the two cross-products as common-denominator numerator comparisons.

**What works.** The untangled rows state both source fractions, identify the opposite denominator in words, end at `3×8=24` and `5×5=25`, and conclude with the correct inequality. Solid versus dashed row treatment supplies a non-color distinction.

1. **Retain — linear rows avoid the historical crossed-path tangle while retaining both operands, products, and the final relational meaning.**

**Revision target.** Preserve two separate routes and their explicit opposite-denominator labels.

**Acceptance checks.** `3×8=24`; `5×5=25`; `24<25`; correct fraction order; no ambiguous crossing or occluded endpoint. **Resolution:** retained as-is; manuscript brief synchronized to the accepted untangled design.

## 06 — Convert to decimals

[Markup](./ch09-image-markups/06_aligned_decimals.svg) · Source: `art/vectors/ch09/ch09_m06_aligned-decimals.svg`

**Purpose.** Convert both fractions to one base-ten representation and compare corresponding place values.

**What works.** The pre-revision rows gave correct decimal values and aligned their starting positions.

1. **Major — the pre-revision guide lines were not labeled as tenths, hundredths, and thousandths even though the brief and ledger claimed labeled columns.** Rebuild the decimal rows with individually aligned digits, explicit headers, and ghosted trailing zeros.
2. **Major — the pre-revision image claimed a 25-thousandths difference without the promised bracket or one shared 0–1 verification scale.** Add both, using open versus filled points as a non-color cue.

**Revision target.** Make the base-ten place comparison and its magnitude check visibly auditable.

**Acceptance checks.** `0.600` aligned over `0.625`; all three decimal columns named; trailing zeros identified; bracket states `625−600=25 thousandths`; shared scale positions are 0.600 and 0.625. **Resolution:** implemented.

## 07 — Compare missing pieces to one

[Markup](./ch09-image-markups/07_complements.svg) · Source: `art/vectors/ch09/ch09_m07_complements-to-one.svg`

**Purpose.** Compare complements to the same whole, then invert the gap order to obtain the original fraction order.

**What works.** Equal 800-unit wholes leave exact 320- and 300-unit gaps. Hatching, outlines, labels, and position distinguish missing from present areas.

1. **Moderate — the pre-revision labels asserted `16/40` and `15/40`, but the missing regions had no fortieth rules, so the exact counts were not visually auditable.** Rule only the gaps into exact 20-unit fortieths and state the full comparison chain.

**Revision target.** Show, rather than merely state, why the smaller complement belongs to the larger fraction.

**Acceptance checks.** Equal wholes; gaps of 320 and 300; exactly 16 and 15 ruled fortieths; written `15/40 < 16/40`; conclusion `5/8 is larger`; no color-only dependency. **Resolution:** implemented.

## 08 — Recognize, then verify

[Markup](./ch09-image-markups/08_retrieve_verify.svg) · Source: `art/vectors/ch09/ch09_m08_retrieve-then-verify.svg`

**Purpose.** Keep a quick prediction epistemically separate from the exact evidence that confirms it.

**What works.** The small dotted prediction panel, directional connector, and larger exact-check panel establish a strong two-stage hierarchy.

1. **Major — the pre-revision exact-check panel contained only equations, despite the synchronized brief promising equal 40-cell bars; this made the check less auditable than the rest of the chapter.** Add two equal 360-unit bars divided into forty 9-unit cells and fill 24 and 25.

**Revision target.** Preserve the prediction/check separation while giving the verification a visible exact model.

**Acceptance checks.** Prediction remains tentative; arrow terminates before the check panel; equal forty-cell bars; 24 and 25 selected; extra cell outlined; only the check panel states the final order. **Resolution:** implemented.

## 09 — Split each twentieth in half

[Markup](./ch09-image-markups/09_twentieths_to_fortieths.svg) · Source: `art/vectors/ch09/ch09_m09_twentieths-half-unit.svg`

**Purpose.** Show that a half-twentieth endpoint becomes one complete fortieth when the unit is refined.

**What works.** The pre-revision magnified thirteenth cell correctly divided into two equal `1/40` halves and stated the correct equivalences.

1. **Major — the pre-revision top model stopped after cell 13 rather than showing two complete equal 20-cell wholes, weakening the shared-whole comparison and contradicting the brief and ledger.** Draw two complete 800-unit bars with twenty exact 40-unit cells.
2. **Major — the pre-revision lower phase stated `24/40` and `25/40` without repeating the wholes as forty cells or tracing the endpoints, so refinement was not visually conserved.** Repeat both complete bars with forty 20-unit cells and connect the unchanged endpoints with dashed guides.

**Revision target.** Make the whole, unit refinement, half-cell, and endpoint conservation simultaneously visible.

**Acceptance checks.** Two complete 20-cell bars and two complete 40-cell bars; selected widths remain 480 and 500 in both phases; half of cell 13 is exactly 20 units; endpoint guides land at 480 and 500; final inequality correct. **Resolution:** implemented.

## 10 — Estimate, then prove

[Markup](./ch09-image-markups/10_estimate_then_prove.svg) · Source: `art/vectors/ch09/ch09_m10_estimate-then-prove.svg`

**Purpose.** Separate a rough benchmark expectation from an exact common-unit proof.

**What works.** The estimate places `3/5` and `5/8` at exact positions on one line while framing the judgment as approximate. The proof bars then use forty exact 12-unit cells, selected to 288 and 300 units, and outline the one extra cell.

1. **Retain — the two-stage hierarchy is mathematically exact, visually restrained, and explicit about estimate versus proof.**

**Revision target.** Preserve the approximate/exact distinction and the exact one-fortieth proof.

**Acceptance checks.** Shared estimate scale; both fractions above `1/2`; `3/5` left of `5/8`; proof has 40 cells; 24 versus 25 selected; extra cell outlined. **Resolution:** retained as-is.

## Resolution summary

- **11/11** pictures audited and **11/11** numbered markups created.
- **5 pictures revised:** Methods 04, 06, 07, 08, and 09.
- **6 pictures retained with explicit rationale:** opening and Methods 01, 02, 03, 05, and 10.
- Manuscript illustration briefs, Method 08 mathematics, accessible SVG metadata, prompt, method-art ledger, and opening provenance were synchronized.
- Repeated method-level constructed-account boilerplate was removed under the established editorial-framing lesson; the chapter opening still provides the mandatory disclosure.
- CH09 contains no raster assets or organic anatomy; all text and mathematical labels remain native SVG text.
- No finding remains unresolved.
