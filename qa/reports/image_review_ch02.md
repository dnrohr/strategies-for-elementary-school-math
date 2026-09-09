# CH02 image review — 15 − 8

Task ID: `QA-IMAGE-REVIEW`
Review date: 2026-09-08
Scope: the opening image and all 12 reader-facing method images, including full-resolution inspection of both raster-backed composites.

## Overall opinion

The static bar and gap models are strong. Dynamic subtraction is much less successful: several arrowheads obscure the very ticks that establish direction and magnitude. The organic hands themselves are plausible here, but Method 01 lets the hand cover important counters.

## Priority findings

- Redraw Methods 02, 03, and 05 with a consistent, small-headed number-line arrow convention.
- Recompose Method 01 so no hand covers the source or destination count.
- Use Methods 07, 09, and 10 as the clarity benchmark.

## Image-by-image review

| Image | Disposition | Opinion |
| --- | --- | --- |
| `art/vectors/ch02/fifteen-minus-eight.svg` | Minor | Removal and distance are correctly contrasted, but both panels are small and the distance labels require close reading. Enlarge the number line or remove secondary copy. |
| `art/composites/ch02/ch02_m01_remove-eight-counters.svg` | Major | The staged counts are labeled, but the hand and a large purple arrow cover the transfer area, making it hard to verify which eight moved. Separate the before/after panels more decisively and keep the hand below the counters. |
| `art/vectors/ch02/ch02_m02_count-back-eight-beats.svg` | Major | Eight steps exist, but alternating labels and very large heads make the direction hard to parse and obscure landing ticks. A single leftward path with small numbered landings would be clearer. |
| `art/vectors/ch02/ch02_m03_count-up-to-fifteen.svg` | Major | The +2 and +5 decomposition is sound; the two oversized heads sit directly over 10 and 15, masking the endpoints. Shrink the heads and add clear start/finish dots. |
| `art/vectors/ch02/ch02_m04_subtract-five-then-three.svg` | Minor | The three-state chain is easy to follow, but the triangular connectors are disproportionately large for simple transitions. Reduce them without changing the layout. |
| `art/vectors/ch02/ch02_m05_subtract-ten-add-two.svg` | Major | The crossing red and orange arcs and large heads make the overshoot-and-repair direction ambiguous. Show the red move 15→5 first, then a separate orange 5→7 move below or above it. |
| `art/vectors/ch02/ch02_m06_inverse-missing-addend.svg` | Minor | The equation and bar reinforce one another well; only the large central arrow needs restraint. |
| `art/vectors/ch02/ch02_m07_measure-seven-unit-gap.svg` | Pass | Clean proportional line, explicit seven-unit bracket, and 2+5 sub-bracket make “distance” immediately legible. |
| `art/composites/ch02/ch02_m08_eight-tracking-marks.svg` | Pass | The hand has plausible anatomy and does not carry the mathematics; eight numbered overlays make the tracking exact. The small red countdown labels are secondary but useful. |
| `art/vectors/ch02/ch02_m09_eight-plus-seven-bar.svg` | Pass | The fifteen equal cells, eight hatched units, and seven open units make the missing part clear at a glance. |
| `art/vectors/ch02/ch02_m10_ten-and-five.svg` | Pass | The ten-frame plus untouched five cleanly explains why only two remain in the frame before recombining to seven. |
| `art/vectors/ch02/ch02_m11_retrieve-seven.svg` | Major | The direct result is clear, but the huge forward and return triangles make a simple retrieval/check relation look mechanically complicated. Replace them with thin connectors. |
| `art/vectors/ch02/ch02_m12_regrouped-written-subtraction.svg` | Major | The three written states are useful, yet two large arrows dominate and conceal the distinction between regrouping and subtraction. Smaller connectors and explicit struck/rewritten digits would improve the algorithmic story. |

## Resolution notes — `QA-IMAGE-FIXES`

- `art/vectors/ch02/fifteen-minus-eight.svg` — Resolved 2026-09-08. Recomposed the dense content with larger type, stronger grouping, increased spacing/contrast, and an inset or staged view where needed so the mathematics remains legible at normal and narrow sizes. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/composites/ch02/ch02_m01_remove-eight-counters.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch02/ch02_m02_count-back-eight-beats.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch02/ch02_m03_count-up-to-fifteen.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch02/ch02_m04_subtract-five-then-three.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch02/ch02_m05_subtract-ten-add-two.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch02/ch02_m06_inverse-missing-addend.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch02/ch02_m11_retrieve-seven.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch02/ch02_m12_regrouped-written-subtraction.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
