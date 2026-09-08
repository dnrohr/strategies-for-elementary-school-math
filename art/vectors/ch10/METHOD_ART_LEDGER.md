# CH10 method-art ledger

Task ID: `ART-CH10-METHODS`

Chapter: CH10, *23 candies shared among 5 children*

Source briefs: `book/manuscript/10_23_shared_by_5.md` and `art/prompts/ch10/README.md`

Production date: 2026-09-07

All ten assets are repository-native vector-only SVGs with a 1200×800 viewBox. Text remains selectable, and no `<image>` or raster content is embedded. Color is paired with labels, outlines, grouping, line style, or hatching. Each SVG has a unique `<title>` and useful `<desc>` exposed by `role="img"` and `aria-labelledby="title desc"`.

| Method | Asset | Exact mathematical check | Non-color and accessibility check |
| --- | --- | --- | --- |
| M01 | `ch10_m01_deal-equal-rounds.svg` | Five bowls × four candies = 20; separate remainder dish = 3; total 23. | Every bowl and the dashed remainder dish are individually labeled. |
| M02 | `ch10_m02_repeated-subtraction.svg` | Exactly four `−5` jumps: `23→18→13→8→3`. | Arrow direction, intermediate values, four written `−5` labels, and remainder statement. |
| M03 | `ch10_m03_complete-groups-and-remainder.svg` | Four rows × five candies = 20; separate group = 3; `23−20=3`. | Complete rows have solid matching outlines; remainder has dashed red outline and label. |
| M04 | `ch10_m04_twenty-three-unit-bar.svg` | Twenty-three equal 34-unit cells; first 20 form four five-cell blocks; last three form one tail. | Heavy five-unit boundaries, ruled cells, hatching, bracket, and “not a fifth share” label. |
| M05 | `ch10_m05_partition-leftovers-into-fifths.svg` | Three candies × five equal sectors = 15 pieces; five bowls × three pieces = 15. | BEFORE/AFTER panels and arrow prevent double-counting; every recipient shows three pieces. |
| M06 | `ch10_m06_skip-count-to-twenty.svg` | Exactly four `+5` jumps `0→5→10→15→20`; 23 and 25 are marked; remainder distance is 3. | Equal arcs, written endpoints, remainder segment, and explicit next-group note. |
| M07 | `ch10_m07_long-division-workspace.svg` | Quotient 4; `4×5=20`; `23−20=3`; result `4 R3`. | Large selectable numerals, operation arrows, subtraction bar, and outlined remainder. |
| M08 | `ch10_m08_benchmark-twenty-five.svg` | Benchmark has five groups × five = 25; two are crossed out; resolution states `23=5×4+3`. | BENCHMARK/RESOLVE panels, crossed-out objects, directional arrow, and separate-remainder wording. |
| M09 | `ch10_m09_fairness-check.svg` | Five equal bowls × four = 20; separate remainder plate = 3; `3<5`. | Identical bowl shapes/counts and physically separate dashed remainder plate. |
| M10 | `ch10_m10_context-changes-answer-format.svg` | Indivisible panel: five shares × four with remainder 3. Divisible panel: each of five shares has four wholes plus three fifth-pieces, totaling `4 3/5` each. | Strong divider, distinct scenario headings, separate remainder only on indivisible side, and explicit per-bowl labels. |

## Review status

- [x] Ten method assets exist and follow `ch10_mNN_descriptive-slug.svg` naming.
- [x] Whole-object and fractional-sharing counts were checked against the manuscript.
- [x] The remainder is separate from all five recipients wherever it remains indivisible.
- [x] SVG XML, title, description, role, and labelled-by metadata are present.
- [x] No raster or external image is embedded.
- [x] Essential distinctions have non-color cues.
- [x] Final rendering passed for all ten desktop figures; Methods 01, 02, 04, 05, 06, 07, and 10 passed representative 390 px inspection, Method 10 passed grayscale inspection, and the integrated chapter loaded 10/10 useful-alt figures with no horizontal overflow. Evidence is in `artifacts/ui/art-ch10-methods/`.
