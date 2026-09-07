# CH07 art direction — area as a region

Use precise vector/SVG diagrams for every grid, partition, arrow, label, and equation. Organic raster art may show hands or tiles but must contain no mathematical text. Maintain the book palette: blue for stable structure, orange for adjustment, purple for transformation, teal for motion, green for result.

Required visual set:

- Exact 7-by-9 unit-square grid, with a rotated 9-by-7 counterpart.
- 7-by-10 compensation grid with exactly one orange excess column of 7 cells.
- Horizontal 5+2 and vertical 5+4 partitions, each labeled in vector overlay.
- Tactile tile composite with one hand placing a final square tile; anatomically credible hand, no raster text.
- Comparison of 70 and 63 as a benchmark/check.

Check every asset for exactly 63 cells, no gaps or overlaps, correct row/column orientation, and accessible contrast without relying on color alone.

## Production-vector record

Eleven accessible 1200×800 vector-only SVGs implement Methods 01–07 and 09–12. All labels are selectable and every asset uses `role="img"`, canonical `aria-labelledby="title desc"`, and exact 7×9/63 structures. Color is paired with labels, grouping, outlines, hatching, line style, or position.

Method 08 is deliberately omitted from this vector set and is coordinator-owned as a generated-hand tile composite. Preserve exact vector row/column braces and `63 square units` as overlays; the organic layer must show an anatomically credible hand placing the final tile without covering or duplicating a cell.

Exact route notes and alt-text intent are recorded in `art/vectors/ch07/METHOD_ART_LEDGER.md`. The final Method 08 generated-hand/vector composite, every placed-size desktop figure, representative narrow figures, and the composite in grayscale passed coordinator review; evidence is in `artifacts/ui/art-ch07-methods/`.
