# CH14 vector asset record

- Source: `art/prompts/ch14/README.md` and the CH14 method gallery.
- Intended chapter: CH14, adding three fractions using twelfths.
- Canvas: 1200×800 SVG viewBox; selectable text; no raster text or external assets.
- Exact checks: `3/4 = 9/12`; `2/3 = 8/12`; `5/12 = 5/12`; total `22/12 = 11/6 = 1 5/6`.
- Accessibility: SVG `role="img"` with title and description; each conversion and reduced result are written as text; color is paired with labels and outlines.
- Review state: complete. Coordinator review covered exact common-unit transformations, strategic pairing, equal-cell geometry, proportional number-line and estimate placement, all ten 1200×800 renders, representative 390 px placements, Method 06 in grayscale, and integrated ordered chapter placement with no horizontal overflow.

## Method-level production ledger

Task `ART-CH14-METHODS`; produced 2026-09-08. All ten files are repository-native vector-only 1200×800 SVGs with selectable text, unique title/description metadata, non-color cues, and no embedded raster or external asset.

| Method | Asset | Exact check and accessibility cue |
| --- | --- | --- |
| M01 | `ch14_m01_common-twelfths.svg` | Equal 12-cell wholes show 9, 8, and 5 marked cells; outline and hatch supplement color. |
| M02 | `ch14_m02_strategic-pairing.svg` | `9/12+5/12=14/12=7/6`, then `7/6+4/6=11/6`; one-whole-plus-remainder bars use exact cell widths. |
| M03 | `ch14_m03_staged-first-pair.svg` | `9/12+8/12=17/12`, then `17/12+5/12=22/12`; three explicit stages and directed connectors. |
| M04 | `ch14_m04_equal-fraction-bars.svg` | Three equal 12-cell rulers show 9, 8, and 5 cells; result is one 12-cell whole plus 10 cells. |
| M05 | `ch14_m05_number-line-accumulation.svg` | 24 equal intervals across 0–2; jumps of 9, 8, and 5 end at 22/12. |
| M06 | `ch14_m06_estimate-then-exact.svg` | Proportional 0, 1, 1.8, 2 positions; dashed estimate remains separate from exact `11/6≈1.833`. |
| M07 | `ch14_m07_stacked-symbolic-algorithm.svg` | Correct `×3/3` and `×4/4` conversions; denominator 12 remains fixed while numerators sum to 22. |
| M08 | `ch14_m08_whole-and-remainder.svg` | 12-cell whole plus 10-cell remainder at one cell width; five two-cell brackets show `10/12=5/6`. |
| M09 | `ch14_m09_verbal-unit-story.svg` | Unit-language cards preserve 9, 8, and 5 twelfths; constructed-account label and non-required-language caveat. |
| M10 | `ch14_m10_abstract-common-unit.svg` | Equation-only transformation; no concrete tokens; same mathematics without a sensory-identity claim. |

Review completed: equations, cell counts, equal-whole lengths, pairing sequence, line/jump geometry, XML metadata, no `<image>`, non-color cues, all full-size renders, representative narrow-width renders, grayscale Method 06, and integrated 390 px chapter placement. Review correction shortened the pairing-stage connector label so it remains fully inside the inter-panel gap.
