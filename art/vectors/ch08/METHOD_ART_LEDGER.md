# CH08 method-art provenance and QA ledger

Scope: ten production SVGs for the CH08 strategy gallery. The legacy opening asset `three-fourths-of-twenty.svg` and its sidecar remain the chapter anchor and are not superseded or modified.

## Shared production record

- Source: `book/manuscript/08_three_fourths_of_20.md`, `book/BOOK_SPEC.md`, and `layout/VISUAL_SYSTEM.md`.
- Authorship: original, hand-authored vector diagrams; no external imagery, generative raster output, fonts, or embedded files.
- Canvas: every production asset is SVG with explicit `width="1200"`, `height="800"`, and `viewBox="0 0 1200 800"`.
- Accessibility: every root has `role="img"`, canonical local `aria-labelledby="title desc"`, and unique useful title and description text. Selection is redundantly encoded by position, labels, solid/heavy outlines, hatching, check marks, or dashed inactive outlines.
- Mathematical invariant: every asset represents 20 as four equal groups or regions of 5; selecting three gives 15. Operator diagrams preserve the correct order described by the method.
- Text policy: all text is native selectable SVG text. There is no raster text.
- Deliberate anatomy exception: methods 07 and 08 concern concrete money and motor/rhythmic experience, but use exact vector money tokens and beat marks instead of bodies or crude SVG hands. No anatomical claim is made. A future composite may add professionally illustrated anatomy without changing these exact overlays.

## Asset-by-asset QA

| Method | Asset | Visual mapping | Exact source checks | Non-color cues | Status |
| --- | --- | --- | --- | --- | --- |
| 01 | `ch08_m01_four-equal-trays.svg` | Four trays; first three selected | 4 trays × 5 counters = 20; 3 × 5 = 15 | tray labels, hatching, heavy vs dashed outlines, bracket | production vector |
| 02 | `ch08_m02_one-fourth-then-triple.svg` | One quarter isolated, then copied three times | four equal 5-unit quarters; 3 copies = 15 | bracket, repeated boxes, arrow, labels | production vector |
| 03 | `ch08_m03_divide-then-multiply.svg` | Symbolic mental-workspace flow | 20 ÷ 4 = 5; 5 × 3 = 15; four-part check | node shapes, arrow direction, equation, selected-pattern strip | production vector |
| 04 | `ch08_m04_multiply-then-divide.svg` | Three 20-bars become four 15-shares | 3 × 20 = 60; 60 ÷ 4 = 15 | three-vs-four stacking, directional arrow, labels | production vector |
| 05 | `ch08_m05_fraction-bar.svg` | One whole partitioned into quarters | four exactly equal 250-unit-wide regions labeled 5; first 3 total 15 | partitions, hatch, heavy double bracket, labels | production vector |
| 06 | `ch08_m06_four-by-five-array.svg` | Four rows of five | 20 circles in 4 × 5 array; first 3 rows contain 15 | row bands, solid vs dashed outlines, row labels, brace | production vector |
| 07 | `ch08_m07_twenty-dollars.svg` | Four five-dollar shares | 4 × $5 = $20; 3 × $5 = $15 | token labels, check marks, double vs dashed outlines | production vector; anatomy exception |
| 08 | `ch08_m08_three-groups-rhythm.svg` | Three beats track three five-groups | 4 groups × 5 dots = 20; 3 beats/groups = 15 | numbered beat marks, spoken totals, group panels | production vector; anatomy exception |
| 09 | `ch08_m09_proportion.svg` | Aligned 3:4 and 15:20 bars | equal columns: 1 ↔ 5; 3 ↔ 15; x/20 = 3/4 | alignment, partitions, pattern, labels, equation | production vector |
| 10 | `ch08_m10_retrieve-and-check.svg` | Compressed retrieval followed by verification | retrieved 15; check shows 4 × 5 = 20 and 3 × 5 = 15 | negative space, dotted transition, double answer outline, verification strip | production vector |

## Remaining sign-off

- Layout integration should verify rendered text metrics with the final licensed type stack and confirm page-scale contrast in print proofs.
- If organic art is later composited for methods 07 or 08, run a separate anatomy/orientation pass and retain these SVGs as the exact mathematical overlays.
