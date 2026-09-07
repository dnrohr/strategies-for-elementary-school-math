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
| M04 | `ch09_m04_common-denominator-fortieths.svg` | Forty exact 20-unit cells; selected widths are 24×20=480 and 25×20=500. | Every unit is ruled; the extra fortieth has a heavy outline and label. |
| M05 | `ch09_m05_cross-products.svg` | `3×8=24`, `5×5=25`, hence `24<25` and `3/5<5/8`. | Crossed routes differ by solid/dashed stroke and end at written products. |
| M06 | `ch09_m06_aligned-decimals.svg` | Decimal equivalents align exactly as `0.600` and `0.625`. | Place-value guides, trailing zeros, boxed differing digits, and inequality text. |
| M07 | `ch09_m07_complements-to-one.svg` | Equal 800-unit wholes leave exact gaps 320 (`.400`) and 300 (`.375`). | Both missing regions are hatched, outlined, and explicitly labeled; arrow statement explains the relation. |
| M08 | `ch09_m08_retrieve-then-verify.svg` | Retrieved order is checked with `3÷5=.600` and `5÷8=.625`. | Distinct RETRIEVE and VERIFY panels, directional connector, and full text audit trail. |
| M09 | `ch09_m09_twentieths-half-unit.svg` | Twenty exact 40-unit cells; `12/20=480` units; `12.5/20=500`, halfway through cell 13, not 13 full cells. | Full-cell grid plus separate half-cell boundary and explicit caution text. |
| M10 | `ch09_m10_estimate-then-prove.svg` | Estimate places both above 1/2; proof uses 40 exact 12-unit cells with selected widths 288 and 300, or 24 and 25 cells. | Numbered estimate/proof panels, exact ruled proof bars, outlined extra unit, and inequality text. |

## Review status

- [x] Ten method assets exist and follow `ch09_mNN_descriptive-slug.svg` naming.
- [x] Exact quantities and endpoints were checked against the manuscript.
- [x] SVG XML is well formed; title, description, role, and labelled-by metadata are present.
- [x] No `<image>` or raster content is embedded.
- [x] Essential distinctions have non-color cues.
- [x] Final rendering passed for all ten desktop figures; Methods 01–07, 09, and 10 passed representative 390 px inspection, Method 09 passed grayscale inspection, and the integrated chapter loaded 10/10 useful-alt figures with no horizontal overflow. Evidence is in `artifacts/ui/art-ch09-methods/`.
