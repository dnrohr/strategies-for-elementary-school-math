# CH09 image review — Compare 3/5 and 5/8

Task ID: `QA-IMAGE-REVIEW`
Review date: 2026-09-08
Scope: the opening image and all 10 reader-facing method SVGs, inspected in the built edition.

## Overall opinion

The chapter is mathematically careful but visually adult-facing. Several images require the reader to distinguish positions only 0.025 apart or count 40 narrow cells at a small size. The strongest images use equal bars and complements; the weakest compress too many precise annotations around nearly coincident marks.

## Priority findings

- Redesign Methods 02 and 03 at a magnified local scale.
- Simplify the opening to one comparison system rather than fortieths plus a twentieths check.
- Preserve Methods 01, 07, and 10 as the clearest comparison narratives.

## Image-by-image review

| Image | Disposition | Opinion |
| --- | --- | --- |
| `art/vectors/ch09/fraction-comparison.svg` | Major | The common-fortieth bars are sound, but adding a twentieths number-line check creates a second dense encoding with tiny labels. Keep one primary comparison and move the check to a method image. |
| `art/vectors/ch09/ch09_m01_equal-fraction-bars.svg` | Pass | Equal-length fifths and eighths make 5/8's slight advantage visible without requiring arithmetic first. |
| `art/vectors/ch09/ch09_m02_number-line-placement.svg` | Major | The two points are so close that flags, stems, values, and the “0.025 farther” note collide. Add a magnified inset around 0.6–0.625 or separate the labels vertically. |
| `art/vectors/ch09/ch09_m03_half-benchmark-gaps.svg` | Major | The idea is excellent, but 1/2, 3/5, and 5/8 ticks and labels bunch together; the top and bottom brackets are difficult to associate. Use aligned mini-number-lines for each fraction or a zoomed interval. |
| `art/vectors/ch09/ch09_m04_common-denominator-fortieths.svg` | Minor | The single extra fortieth is highlighted effectively, but forty hairline cells are difficult to count at page size. Strengthen fifth/eighth group boundaries. |
| `art/vectors/ch09/ch09_m05_cross-products.svg` | Minor | Crossing arcs connect numerator to opposite denominator, but the arrowheads and intersection are small and slightly tangled. Straight diagonal connectors with products placed at their destinations would be clearer. |
| `art/vectors/ch09/ch09_m06_aligned-decimals.svg` | Minor | Aligned place values make 0.600 < 0.625 clear; the place-value guide labels are very faint and small. Increase contrast and size. |
| `art/vectors/ch09/ch09_m07_complements-to-one.svg` | Pass | Equal wholes and visibly different missing gaps make the smaller-gap/larger-fraction logic immediate. |
| `art/vectors/ch09/ch09_m08_retrieve-then-verify.svg` | Minor | Retrieval and decimal verification are cleanly separated, but the connecting triangle is larger than needed. |
| `art/vectors/ch09/ch09_m09_twentieths-half-unit.svg` | Major | “Half of the 13th unit” is mathematically exact but visually delicate; the red half-cell marker can be mistaken for a full boundary. Enlarge the thirteenth cell in an inset and explicitly shade half. |
| `art/vectors/ch09/ch09_m10_estimate-then-prove.svg` | Pass | Estimate and exact proof are hierarchically separated, and the one-fortieth difference is highlighted without overloading the image. |

## Resolution notes — `QA-IMAGE-FIXES`

- `art/vectors/ch09/fraction-comparison.svg` — Resolved 2026-09-08. Recomposed the dense content with larger type, stronger grouping, increased spacing/contrast, and an inset or staged view where needed so the mathematics remains legible at normal and narrow sizes. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch09/ch09_m02_number-line-placement.svg` — Resolved 2026-09-08. Recomposed the dense content with larger type, stronger grouping, increased spacing/contrast, and an inset or staged view where needed so the mathematics remains legible at normal and narrow sizes. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch09/ch09_m03_half-benchmark-gaps.svg` — Resolved 2026-09-08. Strengthened countability with larger or grouped units, visible boundaries, clearer source/destination structure, and external labels that no longer cover the counted model. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch09/ch09_m04_common-denominator-fortieths.svg` — Resolved 2026-09-08. Recomposed the dense content with larger type, stronger grouping, increased spacing/contrast, and an inset or staged view where needed so the mathematics remains legible at normal and narrow sizes. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch09/ch09_m05_cross-products.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch09/ch09_m06_aligned-decimals.svg` — Resolved 2026-09-08. Recomposed the dense content with larger type, stronger grouping, increased spacing/contrast, and an inset or staged view where needed so the mathematics remains legible at normal and narrow sizes. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch09/ch09_m08_retrieve-then-verify.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch09/ch09_m09_twentieths-half-unit.svg` — Resolved 2026-09-08. Strengthened countability with larger or grouped units, visible boundaries, clearer source/destination structure, and external labels that no longer cover the counted model. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
