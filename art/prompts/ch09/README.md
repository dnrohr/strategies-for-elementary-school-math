# CH09 art briefs

Use two equal whole bars and a shared 0–1 number line. Show fifths/eighths with exact partitions and `3/5` slightly left of `5/8`; common-denominator spread keeps total length fixed while renaming units. Add numerals during layout, not in raster art.

## Method-level production record

Task: `ART-CH09-METHODS`

Production date: 2026-09-07

Source: `book/manuscript/09_compare_fractions.md`

Format: ten self-contained 1200×800 SVG assets, all vector-only.

The illustrations use the book palette with labels, outlines, hatching, dashed paths, and position so no mathematical distinction depends on color. All numerals are selectable SVG text; no raster imagery or rasterized text is embedded. Each asset has `role="img"`, `aria-labelledby="title desc"`, a method-specific title, and a useful description.

Exact construction rules:

- Equal-whole bars use an 800-unit length: one fifth is 160 units and one eighth is 100 units.
- The exact number line uses the same 800-unit whole: `3/5` is 480 units from zero and `5/8` is 500 units from zero.
- Fortieths use 20-unit cells: 24 cells occupy 480 units and 25 occupy 500.
- Twentieths use 40-unit cells: `12/20` occupies 480 units and `12.5/20` occupies 500, ending halfway through the thirteenth cell.
- Decimal and complement views retain the exact equivalences `0.600`, `0.625`, `0.400`, and `0.375`.

## Clarification redraws

- **M06 — decimal place value:** align `0.600` over `0.625` in labeled tenths, hundredths, and thousandths columns. Bracket 600 versus 625 thousandths and mark the exact difference of 25 thousandths on one shared 0–1 scale.
- **M07 — complements to one:** use equal bars with common endpoints. Hatch the missing regions and refine them to `16/40 missing` and `15/40 missing`; connect the smaller gap to the larger original fraction.
- **M08 — recognize, then verify:** divide the image into a small dotted `prediction` zone and a larger solid `exact check` zone. Only the check zone may contain the final comparison sign; it uses 40-cell bars filled to 24 and 25.
- **M09 — refine the unit:** top bars show 12 twentieths versus 12 and one-half twentieths. Lower bars bisect every cell, producing 24 versus 25 fortieths. Vertical guides must demonstrate that the values remain fixed while the unit becomes finer.

Provenance: authored as repository-native SVG for this task from the manuscript briefs and BOOK_SPEC visual system. No generated raster, external image, stock asset, or empirical participant material was used. Per-method checks and filenames are recorded in `art/vectors/ch09/METHOD_ART_LEDGER.md`.

Final coordinator QA inspected all ten desktop figures, representative 390 px placements, Method 09 in grayscale, and the integrated chapter at 390 px. Review corrected cross-product marker occlusion, separated colliding place-value captions, and restored explicit source-fraction labels in the decimal route. Evidence is in `artifacts/ui/art-ch09-methods/`.
