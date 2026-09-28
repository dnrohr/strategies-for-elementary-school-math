# CH09 method-art ledger

Task ID: `ART-CH09-METHODS`

Chapter: CH09, *Which is larger: 3/5 or 5/8?*

Source briefs: `book/manuscript/09_compare_fractions.md` and `art/prompts/ch09/README.md`

Production date: 2026-09-07

All ten assets are repository-native, vector-only SVGs with a 1200×800 viewBox. Text remains selectable. No raster image, rasterized text, generated image, or external asset is present. Color is always paired with position, labels, outlines, hatching, or line style. Each SVG exposes a method-specific `<title>` and `<desc>` through `role="img"` and `aria-labelledby="title desc"`.

| Method | Asset | Exact mathematical check | Non-color and accessibility check |
| --- | --- | --- | --- |
| M01 | `ch09_m01_equal-fraction-bars.svg` | Equal 800-unit wholes; fifths are 160 units; eighths are 100; selected lengths are 480 and 500. | Aligned endpoints, partition lines, hatch versus solid fill, explicit fraction and decimal labels. |
| M02 | `ch09_m02_number-line-placement.svg` | Exact 800-unit 0–1 line; points are 480 and 500 units from zero, representing .600 and .625. | Dashed/open marker versus solid/filled marker; direction and difference are labeled. |
| M03 | `ch09_m03_half-benchmark-gaps.svg` | On an 800-unit whole, gaps above 1/2 are 80 (`1/10`) and 100 (`1/8`) units. | Separate above/below brackets use dashed versus solid strokes and written values. |
| M04 | `ch09_m04_common-denominator-fortieths.svg` | Forty exact 20-unit cells; selected widths are 24×20=480 and 25×20=500; fifth boundaries occur every 160 units on the first bar and eighth boundaries every 100 on the second. | Every unit is ruled; source partitions use contained heavier rules; the extra fortieth has a heavy outline and label. |
| M05 | `ch09_m05_cross-products.svg` | `3×8=24`, `5×5=25`, hence `24<25` and `3/5<5/8`. | Crossed routes differ by solid/dashed stroke and end at written products. |
| M06 | `ch09_m06_aligned-decimals.svg` | Decimal equivalents align exactly as `0.600` and `0.625`; the difference is `25/1000 = 0.025`; shared-scale points sit at 60% and 62.5% of the same interval. | Labeled place-value columns, ghosted trailing zeros, difference bracket, and open/filled scale points. |
| M07 | `ch09_m07_complements-to-one.svg` | Equal 800-unit wholes leave exact gaps 320 (`16/40`) and 300 (`15/40`), ruled into 20-unit fortieths. | Both missing regions are hatched, outlined, subdivided, and explicitly labeled; the written comparison chain explains the inverse relation. |
| M08 | `ch09_m08_retrieve-then-verify.svg` | The prediction is checked on equal 360-unit bars divided into forty 9-unit cells, filled to 24 and 25 cells. | Distinct PREDICTION and EXACT CHECK panels, directional connector, ruled bars, and full text audit trail. |
| M09 | `ch09_m09_twentieths-half-unit.svg` | Two complete 800-unit wholes first use twenty 40-unit cells; `12/20=480` and `12.5/20=500`. Repeated wholes then use forty 20-unit cells with the same endpoints at 24 and 25. | Hatch/solid treatment, a heavy half-cell/extra-fortieth outline, and dashed endpoint guides preserve identity across refinement. |
| M10 | `ch09_m10_estimate-then-prove.svg` | Estimate places both above 1/2; proof uses 40 exact 12-unit cells with selected widths 288 and 300, or 24 and 25 cells. | Numbered estimate/proof panels, exact ruled proof bars, outlined extra unit, and inequality text. |

## Review status

- [x] Ten method assets exist and follow `ch09_mNN_descriptive-slug.svg` naming.
- [x] Exact quantities and endpoints were checked against the manuscript.
- [x] SVG XML is well formed; title, description, role, and labelled-by metadata are present.
- [x] No `<image>` or raster content is embedded.
- [x] Essential distinctions have non-color cues.
- [x] Current rendering passed for the opening plus all ten method figures at 1200×800; all 11 passed 390 px proof-sheet inspection, and material grayscale checks passed. Evidence is in `artifacts/ui/QA-IMAGE-PASS-CH09/`.
