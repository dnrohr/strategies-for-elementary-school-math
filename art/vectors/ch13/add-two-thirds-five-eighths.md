# CH13 vector asset record

- Source: `art/prompts/ch13/README.md` and the CH13 method gallery.
- Intended chapter: CH13, adding fractions with unlike denominators.
- Canvas: 1200×800 SVG viewBox; selectable text; no raster text or external assets.
- Exact checks: `2/3 = 16/24`; `5/8 = 15/24`; `16/24 + 15/24 = 31/24 = 1 7/24`.
- Accessibility: SVG `role="img"` with title and description; each conversion and the mixed-number result are written as text; colored bars are paired with outlines and labels.
- Review state: complete. Coordinator review covered exact equivalent fractions, common-unit geometry, proportional number-line and estimate placement, all ten 1200×800 renders, representative 390 px placements, Method 06 in grayscale, and integrated ordered chapter placement with no horizontal overflow.

## Method-level production ledger

Task `ART-CH13-METHODS`; produced 2026-09-08. All ten files are repository-native vector-only 1200×800 SVGs with selectable text, unique title/description metadata, non-color cues, and no embedded raster or external asset.

| Method | Asset | Exact check and accessibility cue |
| --- | --- | --- |
| M01 | `ch13_m01_common-unit-strips.svg` | Equal 24-cell wholes; `2/3=16/24`, `5/8=15/24`; outline and hatch supplement color. |
| M02 | `ch13_m02_unit-fraction-count.svg` | Three groups of eight and eight groups of three on one 24-cell strip; same-unit count reaches 31. |
| M03 | `ch13_m03_three-by-eight-grid.svg` | Separate 3×8 grids show 16 and 15 cells without double-counting overlap; separate 24+7 result. |
| M04 | `ch13_m04_scale-equivalent-fractions.svg` | `×8/8` and `×3/3` transformations; exact proportional 2/3 and 5/8 fills; compact arrowheads. |
| M05 | `ch13_m05_number-line-addition.svg` | 48 equal intervals across 0–2; starts at 16/24; exactly 15 jumps end at 31/24. |
| M06 | `ch13_m06_estimate-then-prove.svg` | Proportional 1, 1¼, 1.3, 1½ positions; dashed estimate is separated from exact `31/24`. |
| M07 | `ch13_m07_compact-symbolic-rule.svg` | `2×8=16`, `5×3=15`, denominator `3×8=24`; explicit not-`3+8` warning. |
| M08 | `ch13_m08_whole-and-remainder.svg` | First strip has 24 equal cells and second has 7 at the same cell width; `31/24=24/24+7/24`. |
| M09 | `ch13_m09_decimal-verification.svg` | Approximate `1.291666…` display remains separate from the exact `16/24+15/24=31/24` explanation. |
| M10 | `ch13_m10_abstract-common-unit.svg` | Equation-only transformation; no concrete counting tokens; same mathematics without a sensory-identity claim. |

Review completed: equations, cell counts, equal partitions, line/jump geometry, XML metadata, no `<image>`, non-color cues, all full-size renders, representative narrow-width renders, grayscale Method 06, and integrated 390 px chapter placement. Review corrections replaced oversized transformation arrowheads and moved the estimate marker to the proportional 1.3 position.
