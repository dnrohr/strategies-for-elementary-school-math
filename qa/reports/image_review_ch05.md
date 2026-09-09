# CH05 image review — 11 × 12

Task ID: `QA-IMAGE-REVIEW`
Review date: 2026-09-08
Scope: the opening image and all 20 reader-facing method images; both raster-backed composites were also inspected at full resolution.

## Overall opinion

The flagship chapter has welcome representational variety, but visual quality is uneven. Arrays and written methods are strong; some rhythm/number-line images become tiny counting exercises, and the moving-symbol methods revert to oversized flowchart arrows. Both organic hand assets are anatomically plausible, though Method 17's hands add little explanatory value.

## Priority findings

- Redraw the transition arrows in Methods 11, 14, and 19.
- Increase meaningful scale or reduce repeated marks in Methods 06–09.
- Reconsider whether Method 17 needs hands; the tallies already carry the exact group count.

## Image-by-image review

| Image | Disposition | Opinion |
| --- | --- | --- |
| `art/vectors/ch05/eleven-by-twelve.svg` | Minor | The 11×12 array and 10+2 split are mathematically strong, but 132 dots are too small to audit at opening size and the narrow “2” region is easy to miss. Enlarge or stylize the grouped structure. |
| `art/vectors/ch05/ch05_m01_direct-retrieval.svg` | Pass | The sparse problem-to-answer pairing appropriately represents immediate retrieval without inventing sensory content. |
| `art/vectors/ch05/ch05_m02_table-phrase.svg` | Minor | The remembered phrase is clear, but the cartoon speech-bubble tail is more conventional than the book's stated subtle inner-speech language. A ribbon or sound cadence would fit better. |
| `art/vectors/ch05/ch05_m03_ten-twelves-plus-one.svg` | Pass | The decomposition into two partial products is compact and easy to verify. |
| `art/vectors/ch05/ch05_m04_square-minus-row.svg` | Pass | The crossed bottom row visibly changes 12×12 into 11×12; countability and compensation are both strong. |
| `art/vectors/ch05/ch05_m05_eleven-tens-and-twos.svg` | Pass | The proportional 10+2 column split and two labeled partial areas communicate the distributive structure immediately. |
| `art/vectors/ch05/ch05_m06_repeated-addition.svg` | Minor | Eleven labeled boxes are exact, but the running totals are tiny and visually detached. Group the boxes 5+5+1 or enlarge the cumulative sequence. |
| `art/vectors/ch05/ch05_m07_skip-count-beats.svg` | Minor | Eleven beats are visible, yet both beat numbers and multiples are too small for comfortable reading. The image feels like an index rather than an explanatory illustration. |
| `art/vectors/ch05/ch05_m08_eleven-number-line-jumps.svg` | Major | Eleven arcs have no directional heads, no intermediate landing labels, and very small +12 annotations. The image asserts rather than demonstrates the number-line route. |
| `art/vectors/ch05/ch05_m09_eleven-by-twelve-array.svg` | Pass | The complete array is dense but clean; row/column braces and the exact total make its structure explicit. |
| `art/vectors/ch05/ch05_m10_rectangle-area.svg` | Minor | The area model is sound, but the large central label covers many cells and weakens the sense of a countable 11×12 rectangle. Move the label outside the grid. |
| `art/vectors/ch05/ch05_m11_eleven-groups.svg` | Major | Eleven bags of twelve are countable, but the oversized downward triangle and funnel-shaped result imply pouring rather than combining equal groups. Use a brace over the full set and a small result label. |
| `art/vectors/ch05/ch05_m12_times-eleven-pattern.svg` | Minor | The 1–(1+2)–2 structure works for 12×11, but the widely separated digits and caution box make it look like a trick to memorize. Add a compact place-value explanation. |
| `art/vectors/ch05/ch05_m13_double-and-halve.svg` | Pass | The factor transformation and six groups of 22 are clean, balanced, and easy to verify. |
| `art/vectors/ch05/ch05_m14_regroup-factors.svg` | Minor | The factor tiles clearly show 11×3×4, but the bent connector into 33 and then 132 uses bulky arrows and could be a simple equality chain. |
| `art/vectors/ch05/ch05_m15_powers-of-two.svg` | Minor | The 8+2+1 selection is mathematically clear, but the dashed styling on 4×12 implies a special status without explanation. De-emphasize it consistently or label it “not selected.” |
| `art/vectors/ch05/ch05_m16_long-multiplication.svg` | Pass | The partial products and zero placeholder are large, aligned, and uncluttered. |
| `art/composites/ch05/ch05_m17_fingers-group-counter.svg` | Minor | Both hands appear anatomically plausible and the eleven tallies are exact, but the hands show ten fingers while eleven groups are tracked elsewhere. That mismatch is defensible as context, yet it invites unnecessary counting confusion. |
| `art/composites/ch05/ch05_m18_tap-each-twelve.svg` | Pass | The pointing hand is anatomically plausible; eleven numbered landings and their multiples carry the arithmetic accurately. |
| `art/vectors/ch05/ch05_m19_moving-numerals.svg` | Major | The three states are useful, but two oversized arrowheads dominate and nearly touch the boxes. Thin directional lines would better suggest moving numerals. |
| `art/vectors/ch05/ch05_m20_silent-equality.svg` | Pass | The three equal expressions are linked without motion metaphor; this is an effective restrained abstract image. |

## Resolution notes — `QA-IMAGE-FIXES`

- `art/vectors/ch05/eleven-by-twelve.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch05/ch05_m02_table-phrase.svg` — Resolved 2026-09-08. Applied the recorded readability polish directly to the production SVG, preserving the exact mathematics, selectable text, accessibility metadata, non-color encoding, filename, and manuscript mapping. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch05/ch05_m06_repeated-addition.svg` — Resolved 2026-09-08. Recomposed the dense content with larger type, stronger grouping, increased spacing/contrast, and an inset or staged view where needed so the mathematics remains legible at normal and narrow sizes. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch05/ch05_m07_skip-count-beats.svg` — Resolved 2026-09-08. Recomposed the dense content with larger type, stronger grouping, increased spacing/contrast, and an inset or staged view where needed so the mathematics remains legible at normal and narrow sizes. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch05/ch05_m08_eleven-number-line-jumps.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch05/ch05_m10_rectangle-area.svg` — Resolved 2026-09-08. Strengthened countability with larger or grouped units, visible boundaries, clearer source/destination structure, and external labels that no longer cover the counted model. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch05/ch05_m11_eleven-groups.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch05/ch05_m12_times-eleven-pattern.svg` — Resolved 2026-09-08. Applied the recorded readability polish directly to the production SVG, preserving the exact mathematics, selectable text, accessibility metadata, non-color encoding, filename, and manuscript mapping. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch05/ch05_m14_regroup-factors.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch05/ch05_m15_powers-of-two.svg` — Resolved 2026-09-08. Applied the recorded readability polish directly to the production SVG, preserving the exact mathematics, selectable text, accessibility metadata, non-color encoding, filename, and manuscript mapping. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/composites/ch05/ch05_m17_fingers-group-counter.svg` — Resolved 2026-09-08. Reworked the composite framing or removed nonessential hand imagery so the exact mathematical overlay stays dominant; retained only anatomy that passed the full-resolution digit/wrist/orientation check. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch05/ch05_m19_moving-numerals.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
