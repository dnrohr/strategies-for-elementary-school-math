# CH07 picture improvement audit — `7 × 9 rectangle`

Task: `QA-IMAGE-PASS-CH07`

Audit date: 2026-09-27

Inventory: **13 reader-facing pictures** — one opening picture and Methods 01–12.
Coverage: **13/13 audited; 13/13 numbered markups.**

The inventory reconciles the manuscript, CH07 visual-system prompt, method-art ledger, vector/composite/raster folders, built mapping, and historical `image_review_ch07.md`. Every production SVG was rendered and inspected individually at 1200×800 before revision. The Method 08 raster was also inspected at its native 1536×1024 resolution. Findings describe the pre-revision state; every resolution below records the final decision.

## 00 — Opening: partition a 7-by-9 area

[Markup](./ch07-image-markups/00_opening.svg) · Source: `art/vectors/ch07/area-seven-by-nine.svg`

**Purpose.** Establish area as a count of unit squares and preview the 5+4 column partition.

**What works.** The 7-by-9 grid uses true square cells, the 5- and 4-column regions are proportional, all 63 units remain visible, and the equation rail preserves both partial areas.

1. **Retain — the opening already combines countable geometry, exact decomposition, and a restrained symbolic check without obscuring the model.**

**Revision target.** Preserve the 7 rows, 9 columns, 35+28 partition, and full equation chain.

**Acceptance checks.** Exactly 63 square cells; 5+4 columns; `7 × 5 = 35`; `7 × 4 = 28`; `35 + 28 = 63`; no hidden unit. **Resolution:** retained as-is.

## 01 — Retrieve sixty-three

[Markup](./ch07-image-markups/01_retrieve_sixty_three.svg) · Source: `art/vectors/ch07/ch07_m01_retrieve-sixty-three.svg`

**Purpose.** Contrast a quiet dimensional cue with direct retrieval of the product.

**What works.** The empty rectangle avoids implying unit enumeration, both dimensions are explicit, and the result card dominates appropriately while still naming square units.

1. **Retain — the sparse silhouette is faithful to non-imagistic retrieval and its 9:7 proportions are exact.**

**Revision target.** Keep the rectangle quiet and the result visually primary.

**Acceptance checks.** Width 9 units; height 7 units; product 63; area unit named; no countable-grid implication. **Resolution:** retained as-is.

## 02 — Count every unit square

[Markup](./ch07-image-markups/02_count_unit_squares.svg) · Source: `art/vectors/ch07/ch07_m02_count-unit-squares.svg`

**Purpose.** Show a single serpentine count through all 63 unit squares.

**What works.** The route is continuous, alternates direction by row, and uses cumulative checkpoints rather than cluttering all cells with numerals.

1. **Major — the pre-revision cells were 86×70 rectangles despite being described as unit squares.** Restore one equal horizontal/vertical unit scale.
2. **Major — seven detached triangles outside the grid did not meet the route and could not reliably indicate its direction.** Embed terminal heads in the seven row segments and keep checkpoints in exterior lanes.

**Revision target.** Use a 9×7 grid of 70×70 cells, a continuous route through cell centers, and one attached direction head per row.

**Acceptance checks.** 63 square cells; route visits every row once; seven attached direction heads; six vertical turns; checkpoints 1, 9, 18, 27, 36, 45, 54, 63; labels do not cover cells. **Resolution:** implemented.

## 03 — Seven rows of nine

[Markup](./ch07-image-markups/03_seven_rows_of_nine.svg) · Source: `art/vectors/ch07/ch07_m03_seven-rows-of-nine.svg`

**Purpose.** Group the area into seven equal horizontal rows and pair each completed row with a cumulative total.

**What works.** Alternating band fills, exterior totals, and the repeated-addition line make row structure and accumulation independently readable without relying on hue.

1. **Major — the pre-revision 90×70 cells distorted the unit-square model.** Rebuild the seven bands and nine columns at one 70-unit scale.

**Revision target.** Preserve the seven-band hierarchy while making every unit cell square.

**Acceptance checks.** Seven rows; nine square cells per row; totals 9 through 63; complete seven-term addition; no total covers the grid. **Resolution:** implemented.

## 04 — Rotate to nine rows of seven

[Markup](./ch07-image-markups/04_rotate_nine_rows.svg) · Source: `art/vectors/ch07/ch07_m04_rotate-nine-rows.svg`

**Purpose.** Show commutativity as a 90-degree rotation that conserves the same 63 cells.

**What works.** Both grids already use square cells, their orientations differ correctly, and the paired captions give exact row/column counts.

1. **Minor — the pre-revision curved cue read as an arch at intended size because its tiny terminal head was not reliably visible.** Strengthen the headed endpoint and explicitly label the 90-degree turn.

**Revision target.** Keep the motion cue in the open gutter and make its direction legible without touching either grid.

**Acceptance checks.** Left grid 7×9; right grid 9×7; 63 cells in each; one clear headed 90° cue; no overlap with grids or captions. **Resolution:** implemented.

## 05 — Make seventy, remove seven

[Markup](./ch07-image-markups/05_ten_minus_seven.svg) · Source: `art/vectors/ch07/ch07_m05_ten-minus-seven.svg`

**Purpose.** Visualize `7 × 9` as a 7-by-10 benchmark with one seven-cell excess column removed.

**What works.** Hatch, red outline, and crossing strokes make removal redundant with color; the complete symbolic check remains outside the grid.

1. **Major — the pre-revision benchmark used 84×70 cells, weakening the claim that the excess is one column of square units.** Rebuild all 70 cells as 70×70 squares.

**Revision target.** Preserve the exact seven-cell excess column while restoring square unit geometry.

**Acceptance checks.** Seven rows; ten square columns; exactly seven hatched excess cells; remaining 7×9 region; `70 − 7 = 63`. **Resolution:** implemented.

## 06 — Split seven into five and two

[Markup](./ch07-image-markups/06_split_seven_five_two.svg) · Source: `art/vectors/ch07/ch07_m06_split-seven-five-two.svg`

**Purpose.** Partition seven rows into a five-row area of 45 and a two-row area of 18.

**What works.** The horizontal boundary is exact, the two regions are visibly unequal in the correct 5:2 ratio, and border styles keep the split legible without color.

1. **Major — the pre-revision cells were 90×70 rather than square.** Restore one 70-unit scale.
2. **Major — two opaque equation cards covered many cells and undermined countability.** Move both equations into exterior cards aligned to their corresponding regions.

**Revision target.** Expose all 63 cells and connect each external card to the correct 5-row or 2-row region.

**Acceptance checks.** 5×9 top region; 2×9 bottom region; 63 square cells visible; external `45` and `18` cards aligned correctly; `45 + 18 = 63`. **Resolution:** implemented.

## 07 — Split nine into five and four

[Markup](./ch07-image-markups/07_split_nine_five_four.svg) · Source: `art/vectors/ch07/ch07_m07_split-nine-five-four.svg`

**Purpose.** Partition nine columns into 5 and 4, then compose areas 35 and 28.

**What works.** The vertical boundary is exact, the two widths preserve the 5:4 relationship, and outline/fill differences remain legible without hue.

1. **Major — the pre-revision cells were 90×70 rather than square.** Restore one 70-unit scale.
2. **Major — opaque region labels concealed 18 cells and made the exact partition harder to audit.** Move both labels to an exterior lane above their regions.

**Revision target.** Keep every cell visible and align each equation directly over its 5-column or 4-column region.

**Acceptance checks.** Seven rows; five square columns plus four square columns; all 63 cells visible; labels `7 × 5 = 35` and `7 × 4 = 28` outside; total 63. **Resolution:** implemented.

## 08 — Place the final tile

[Markup](./ch07-image-markups/08_place_final_tile.svg) · Source: `art/composites/ch07/ch07_m08_place-final-tile.svg`

**Purpose.** Give the area model a tactile, embodied completion state: 62 placed positions plus one held tile.

**What works.** Native 1536×1024 inspection confirms one plausible right hand, five coherent digits, natural wrist/laterality, exactly one square tile, no fused or duplicated anatomy, and no raster text. The overlay uses square cells, an outlined target, a connected motion path, dimension braces, and vector labels.

1. **Retain — the composite crop balances the hand and exact grid, and the vector overlay carries all mathematical claims without obscuring the gesture.**

**Revision target.** Preserve the accepted raster, 62+1 accounting, square target, and vector-only mathematics.

**Acceptance checks.** Five-digit anatomy; one held tile; one target; 62 placed plus 1 held; 7×9 square grid; all text vector; no raster marks. **Resolution:** retained as-is; native raster provenance reverified.

## 09 — Eye traversal

[Markup](./ch07-image-markups/09_eye_traversal.svg) · Source: `art/vectors/ch07/ch07_m09_eye-traversal.svg`

**Purpose.** Show seven row scans with six spatial turns and cumulative multiples of nine.

**What works.** The seven horizontal scans, six attached turn arrows, alternating endpoint labels, and summary line distinguish row count from transition count.

1. **Major — the pre-revision 86×70 cells distorted the unit-square field.** Rebuild the grid and traversal on 70×70 cells while preserving open exterior lanes for turns and totals.

**Revision target.** Keep the six headed turns attached to the scan route and restore exact square geometry.

**Acceptance checks.** Seven rows; nine square cells per row; seven scan segments; six headed turns; totals 9–63; no arrow/label collision. **Resolution:** implemented.

## 10 — Add two adjacent areas

[Markup](./ch07-image-markups/10_add_two_areas.svg) · Source: `art/vectors/ch07/ch07_m10_add-two-areas.svg`

**Purpose.** Represent the 7-by-9 rectangle as the union of adjacent 7-by-5 and 7-by-4 regions.

**What works.** The shared boundary, large region labels, and uncluttered composition communicate additive area without requiring readers to count cells.

1. **Major — the pre-revision 7×5 and 7×4 regions used different horizontal and vertical unit scales, so their silhouettes were not proportionally exact.** Set height to seven units and widths to five and four of the same unit.

**Revision target.** Use one 70-unit scale for both dimensions while preserving the minimal no-grid presentation.

**Acceptance checks.** Common height 490; widths 350 and 280; widths in 5:4 ratio; combined width 630 = nine units; no gap/overlap; areas 35+28=63. **Resolution:** implemented.

## 11 — Written product

[Markup](./ch07-image-markups/11_written_product.svg) · Source: `art/vectors/ch07/ch07_m11_written-product.svg`

**Purpose.** Center a symbolic mental workspace while keeping the geometric context deliberately faint and secondary.

**What works.** The large equation is selectable vector text, the dashed page convention marks imagined space, and the small contextual grid is exactly 7-by-9 with square cells.

1. **Retain — the composition faithfully contrasts written-symbolic experience with geometric context and contains no unnecessary algorithm marks.**

**Revision target.** Preserve the hierarchy: equation first, exact context second.

**Acceptance checks.** `7 × 9 = 63`; square units named; faint grid 7×9; no raster text; all content contained. **Resolution:** retained as-is.

## 12 — Benchmark check

[Markup](./ch07-image-markups/12_benchmark_check.svg) · Source: `art/vectors/ch07/ch07_m12_benchmark-check.svg`

**Purpose.** Check 63 against 70 by removing one complete seven-cell column.

**What works.** Both grids use 40×40 square cells, the exact difference is hatched and labeled, the directional operation sits in a clear gutter, and the final equation is independent of color.

1. **Retain — this is already an exact, compact benchmark comparison with proportionate unit geometry and redundant removal cues.**

**Revision target.** Preserve both grids, the seven-cell difference, and the exact compensation equation.

**Acceptance checks.** Left 7×10 = 70; right 7×9 = 63; exactly seven cells removed; headed `remove 7` cue; `70 − 7 = 63`. **Resolution:** retained as-is.

## Resolution summary

- **13/13** pictures audited and **13/13** numbered markups created.
- **8 pictures revised:** Methods 02, 03, 04, 05, 06, 07, 09, and 10.
- **5 pictures retained with explicit rationale:** opening and Methods 01, 08, 11, and 12.
- Manuscript illustration briefs, accessible SVG metadata, the visual-system prompt, method-art ledger, and Method 08 raster provenance were synchronized.
- Repeated method-level constructed-account boilerplate was removed under the established editorial-framing lesson; the chapter opening still provides the mandatory constructed-account disclosure.
- No finding remains unresolved.
