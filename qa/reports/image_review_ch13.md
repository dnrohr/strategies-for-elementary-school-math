# CH13 image review — 2/3 + 5/8

Task ID: `QA-IMAGE-REVIEW`
Review date: 2026-09-08
Scope: the opening image and all 10 reader-facing method SVGs, inspected in the built edition.

## Overall opinion

The fraction models are exact and generally polished. The best images explicitly preserve equal whole lengths. The main comprehension risks are high-density twenty-fourth marks, fifteen tiny number-line hops, and crossing rule arrows.

## Priority findings

- Redesign Method 05 so the 15/24 movement is grouped rather than drawn as fifteen nearly indistinguishable arcs.
- Straighten and label the symbolic flow in Method 07.
- Preserve Methods 03, 06, 08, and 10.

## Image-by-image review

| Image | Disposition | Opinion |
| --- | --- | --- |
| `art/vectors/ch13/add-two-thirds-five-eighths.svg` | Minor | The two proportional fills and result are clear, but the bars are not subdivided into twenty-fourths, so the “common denominator” claim remains mostly symbolic. Add faint common-unit ticks. |
| `art/vectors/ch13/ch13_m01_common-unit-strips.svg` | Major | Exact twenty-fourths are present, but third/eighth boundary marks, hatching, and fine unit lines compete. Strengthen the hierarchy: faint 24ths, bold original-unit boundaries, one result callout. |
| `art/vectors/ch13/ch13_m02_unit-fraction-count.svg` | Minor | One bar with both thirds and eighths brackets elegantly shows a shared 1/24 unit, though the many marks require close reading. |
| `art/vectors/ch13/ch13_m03_three-by-eight-grid.svg` | Pass | Two separate 3×8 grids prevent accidental overlap counting, then the whole-plus-remainder bar resolves 31/24 cleanly. |
| `art/vectors/ch13/ch13_m04_scale-equivalent-fractions.svg` | Pass | Each fraction's scale factor, exact equivalent, and same-length bar are cleanly paired. |
| `art/vectors/ch13/ch13_m05_number-line-addition.svg` | Replace | Fifteen tiny arcs merge into a scalloped band and cannot be counted reliably; the important crossing of one whole is easy to miss. Group the motion as 8/24 to one whole, then 7/24 beyond. |
| `art/vectors/ch13/ch13_m06_estimate-then-prove.svg` | Pass | The 1-to-1½ estimate band and exact 31/24 proof have a strong visual hierarchy. |
| `art/vectors/ch13/ch13_m07_compact-symbolic-rule.svg` | Major | Crossing solid/dashed arrows and tiny products make numerator/denominator operations difficult to associate. Use two straight labeled rows that converge on the common denominator. |
| `art/vectors/ch13/ch13_m08_whole-and-remainder.svg` | Pass | A 24-cell whole and separate 7-cell remainder make 31/24 = 1 7/24 unmistakable. |
| `art/vectors/ch13/ch13_m09_decimal-verification.svg` | Minor | The calculator-like decimal box clearly signals approximation, though its dark style is visually foreign to the rest of the chapter. Harmonize the treatment. |
| `art/vectors/ch13/ch13_m10_abstract-common-unit.svg` | Pass | The sparse three-line transformation is appropriately restrained and keeps the exact result prominent. |

## Resolution notes — `QA-IMAGE-FIXES`

- `art/vectors/ch13/add-two-thirds-five-eighths.svg` — Resolved 2026-09-08. Strengthened countability with larger or grouped units, visible boundaries, clearer source/destination structure, and external labels that no longer cover the counted model. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch13/ch13_m01_common-unit-strips.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch13/ch13_m02_unit-fraction-count.svg` — Resolved 2026-09-08. Recomposed the dense content with larger type, stronger grouping, increased spacing/contrast, and an inset or staged view where needed so the mathematics remains legible at normal and narrow sizes. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch13/ch13_m05_number-line-addition.svg` — Resolved 2026-09-08. Replaced fifteen micro-arcs with two proportional moves: +8/24 to one whole and +7/24 beyond, using small terminal heads, clear landing dots, and an exact 31/24 endpoint. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch13/ch13_m07_compact-symbolic-rule.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch13/ch13_m09_decimal-verification.svg` — Resolved 2026-09-08. Applied the recorded readability polish directly to the production SVG, preserving the exact mathematics, selectable text, accessibility metadata, non-color encoding, filename, and manuscript mapping. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
