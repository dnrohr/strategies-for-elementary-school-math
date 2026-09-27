# QA-IMAGE-PASS-CH04 visual evidence

Captured: 2026-09-26

Scope: the CH04 opening picture and Methods 01–12 after the final source edits. Chromium rendered each production SVG directly at 1200×800 with a 1× device scale factor.

## Final renders

- `final-seventy-two-minus-thirty-nine.png`
- `final-ch04_m01_trade-a-ten.png`
- `final-ch04_m02_subtract-forty-repair-one.png`
- `final-ch04_m03_measure-the-gap.png`
- `final-ch04_m04_split-thirty-nine.png`
- `final-ch04_m05_seventy-plus-two.png`
- `final-ch04_m06_jump-back-thirty-nine.png`
- `final-ch04_m07_unbundle-base-ten.png`
- `final-ch04_m08_make-change.png`
- `final-ch04_m09_missing-addend.png`
- `final-ch04_m10_whole-part-bar.png`
- `final-ch04_m11_hear-the-algorithm.png`
- `final-ch04_m12_mental-page.png`

All 13 were inspected individually at native output size. Counts, proportional intervals, labels, connector joins, hierarchy, panel containment, and accessible non-color cues passed.

## Responsive and grayscale proofs

- `narrow-all.svg` and `narrow-all.png` stack all 13 final pictures at 390 px wide. The complete sheet was inspected for clipping, overlap, and legibility.
- `grayscale-opening.*` verifies removal/distance separation and directed spans.
- `grayscale-m02.*` verifies operation/path identity through direction, labels, and endpoint treatment.
- `grayscale-m07.*` verifies countable stages, panel grouping, and contained headings.
- `grayscale-m08.*` verifies proportional route, directed spans, and coin identity without hue.
- `grayscale-m12.*` verifies digit-specific rewrites and aligned place values.

Result: 13/13 pictures passed final visual QA. CH04 contains no raster or organic art, so native-raster anatomy, digit-count, laterality, and raster-text checks are not applicable.
