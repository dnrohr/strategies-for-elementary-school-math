# CH08 image review — 3/4 of 20

Task ID: `QA-IMAGE-REVIEW`
Review date: 2026-09-08
Scope: the opening image and all 10 reader-facing method SVGs, inspected in the built edition.

## Overall opinion

The selected-three-of-four structure is consistently visible and mathematically exact. Most images pass; the operator-flow methods lean too heavily on large arrowheads, and the rhythm image uses decorative markers that do not clearly encode beats.

## Priority findings

- Reduce arrows in Methods 02–04 and 10.
- Redesign Method 08's beat markers so their timing relationship to the groups is unmistakable.
- Preserve Methods 01, 05–07, and 09.

## Image-by-image review

| Image | Disposition | Opinion |
| --- | --- | --- |
| `art/vectors/ch08/three-fourths-of-twenty.svg` | Pass | Twenty blocks in four equal rows, with exactly three selected, make the fraction operator concrete. |
| `art/vectors/ch08/ch08_m01_four-equal-trays.svg` | Pass | Four equal five-counter trays and one dashed “not taken” tray are immediately understandable. |
| `art/vectors/ch08/ch08_m02_one-fourth-then-triple.svg` | Minor | The one-fourth bar and three copies tell the right story, but the solid purple copy arrow is larger than the copied units. |
| `art/vectors/ch08/ch08_m03_divide-then-multiply.svg` | Major | The 20→5→15 chain and structure check are correct; two oversized triangles make the flow visually abrupt and cover too much of the spacing. |
| `art/vectors/ch08/ch08_m04_multiply-then-divide.svg` | Minor | Three 20s becoming four 15s is clearly staged, though the large central triangle should be reduced. |
| `art/vectors/ch08/ch08_m05_fraction-bar.svg` | Pass | Equal quarters, three hatched selections, and the 5+5+5 bracket form a clean fraction-bar explanation. |
| `art/vectors/ch08/ch08_m06_four-by-five-array.svg` | Pass | Three selected rows and one dashed unselected row show 15 of 20 without relying on color. |
| `art/vectors/ch08/ch08_m07_twenty-dollars.svg` | Pass | Four identical $5 tokens make the equal shares and selected $15 accessible and exact. |
| `art/vectors/ch08/ch08_m08_three-groups-rhythm.svg` | Major | The three groups of five are clear, but the trapezoid-like markers labeled 1, 2, 3 float above the groups and the wave below does not align with them. Use three uniform beat marks tied directly to the group boundaries. |
| `art/vectors/ch08/ch08_m09_proportion.svg` | Minor | The matching 3/4 and 15/20 spans are visually effective; the algebraic `x/20` notation raises the developmental level and should be secondary or explained. |
| `art/vectors/ch08/ch08_m10_retrieve-and-check.svg` | Minor | Retrieval and equal-group verification are clearly separated, but the large transition triangle is unnecessary and the check path could be lighter. |

## Resolution notes — `QA-IMAGE-FIXES`

- `art/vectors/ch08/ch08_m02_one-fourth-then-triple.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch08/ch08_m03_divide-then-multiply.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch08/ch08_m04_multiply-then-divide.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch08/ch08_m08_three-groups-rhythm.svg` — Resolved 2026-09-08. Aligned uniform beat marks one-to-one with the counted groups or increments and enlarged their labels, removing unintended magnitude cues. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch08/ch08_m09_proportion.svg` — Resolved 2026-09-08. Applied the recorded readability polish directly to the production SVG, preserving the exact mathematics, selectable text, accessibility metadata, non-color encoding, filename, and manuscript mapping. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch08/ch08_m10_retrieve-and-check.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
