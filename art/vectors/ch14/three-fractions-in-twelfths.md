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
| M01 | `ch14_m01_common-twelfths.svg` | Equal 12-cell wholes show 9, 8, and 5 marked cells; strong source boundaries group quarters by three cells and thirds by four; outline and hatch supplement color. |
| M02 | `ch14_m02_strategic-pairing.svg` | Three numbered equation stages preserve `9/12+5/12=14/12=7/6`, then `7/6+4/6=11/6`; numerator and denominator are divided separately by two. |
| M03 | `ch14_m03_staged-first-pair.svg` | `9/12+8/12=17/12`, then `17/12+5/12=22/12`; three explicit stages and directed connectors. |
| M04 | `ch14_m04_equal-fraction-bars.svg` | Three equal 12-cell rulers show 9, 8, and 5 cells; result is one 12-cell whole plus 10 cells, preserving the same 50-pixel cell width throughout. |
| M05 | `ch14_m05_number-line-accumulation.svg` | 24 equal intervals across 0–2; jumps of 9, 8, and 5 end at 22/12. |
| M06 | `ch14_m06_estimate-then-exact.svg` | Proportional 0, 1, 1.8, 2 positions; dashed estimate remains separate from exact `11/6≈1.833`. |
| M07 | `ch14_m07_stacked-symbolic-algorithm.svg` | Correct `×3/3` and `×4/4` conversions; denominator 12 remains fixed while numerators sum to 22; separate component-wise reduction and mixed-result lines. |
| M08 | `ch14_m08_whole-and-remainder.svg` | 12-cell whole plus 10-cell remainder at one cell width; five two-cell brackets and explicit numerator/denominator division show `10/12=5/6`. |
| M09 | `ch14_m09_verbal-unit-story.svg` | Four numbered unit-language cards preserve 9, 8, and 5 twelfths and their sum; constructed-account label and non-required-language caveat. |
| M10 | `ch14_m10_abstract-common-unit.svg` | Three numbered sum-state cards with clean vertical joins; no concrete tokens; same mathematics without a sensory-identity claim. |

Review completed: equations, cell counts, equal-whole lengths, pairing sequence, line/jump geometry, XML metadata, no `<image>`, non-color cues, all full-size renders, representative narrow-width renders, grayscale Method 06, and integrated 390 px chapter placement. Review correction shortened the pairing-stage connector label so it remains fully inside the inter-panel gap.


## Current image-quality pass ledger — QA-IMAGE-PASS-CH14

Date: 2026-10-04. This supplement supersedes older layout descriptions above where they differ. Opening and M06 retained with rationale; M01/M02/M03/M04/M05/M07/M08/M10 artwork revised; M09 accessible description synchronized to the existing four-card picture. All assets retain native selectable text and exact 1200×800 canvases. No raster/anatomy review is applicable and no external artwork or research sources were added.

- **M01:** Align three equal-length 12-cell strips with 9, 8, and 5 marked cells; retain stronger original quarter boundaries every three cells and third boundaries every four. Put the 22/12 sum and exact simplification in one result card.
- **M02:** Use three large numbered equation stages: rename 3/4 as 9/12 while 5/12 stays; pair 9/12 + 5/12 = 14/12 and show (14 ÷ 2)/(12 ÷ 2) = 7/6; then add 2/3 = 4/6 to reach 11/6 = 1 5/6. Keep all units and the intermediate fraction explicit.
- **M03:** Use three equation cards: rename the first pair, combine 9/12 + 8/12 = 17/12, then add the ready 5/12 to reach 22/12. Thin directed connectors end at small head bases; a separate result card divides numerator and denominator by two to show 11/6 = 1 5/6.
- **M04:** Use three equal 600-pixel wholes with twelve 50-pixel cells and marked counts 9, 8, and 5. The combined strip preserves the same 50-pixel unit: one 600-pixel whole plus 500 pixels for ten remaining cells. Label the whole and remainder separately, then show 1 5/6.
- **M05:** Draw a proportional 0–2 line with 12 subdivisions per whole and three arcs of lengths 9, 8, and 5 twelfths. Connect arcs to exact ticks at 0, 9/12, 17/12, and 22/12; small arrowheads meet the line and landing labels sit below it.
- **M06:** Show a dashed estimate panel with a proportional 0–2 benchmark line and a rough marker near 1.8. Keep the exact common-unit equation and 11/6 = 1 5/6 ≈ 1.833 in a separate solid result panel.
- **M07:** Use a vector conversion panel and written column of 9/12, 8/12, and + 5/12. Add numerators to 22/12 while the unit stays 12; show (22 ÷ 2)/(12 ÷ 2) = 11/6 on its own line and the mixed result below. No rasterized text.
- **M08:** Show one complete 12-cell bar plus ten cells at the same 50-pixel width. Five two-cell brackets pair the remainder; write (10 ÷ 2)/(12 ÷ 2) = 5/6 beside it and keep 22/12 = 11/6 = 1 5/6 below.
- **M09:** Use four numbered speech-like cards in reading order: fourths become 9 twelfths, thirds become 8, 5 twelfths stays ready, then 9 + 8 + 5 = 22 twelfths. Align phrases above their matching equations and retain one subtle auditory motif. Label the script as constructed, keep the final result separate, and state that words are not required for correct reasoning; no portrait or thinker-type claim.
- **M10:** Use three large numbered relation cards for the original sum, equivalent twelfths, and 22/12 = 11/6 = 1 5/6. Two thin vertical connectors stop at their small arrowhead bases. Caption the map as an external record, with no head silhouette, glow, sensory icons, or stable cognitive-type claim.

Opening inventory: three 720-pixel wholes with 60-pixel cells, filled lengths 540/480/300; result is an equation card. Inventory reconciles to the opening plus all ten method assets in the build mapping and production manifest. Final QA evidence and complete repository check results are recorded in `artifacts/ui/QA-IMAGE-PASS-CH14/README.md` and `qa/reports/ch14_picture_improvement_audit.md`.
