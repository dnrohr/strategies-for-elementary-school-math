# CH10 art briefs

Hero spread must separate scenarios: five bowls with four whole candies each plus three leftovers; paired divisible-material spread cuts exactly three leftovers into fifths and distributes one fifth to each child. Use non-color cues and vector overlays; never imply the remainder belongs to one child.

## Method-level production record

Task: `ART-CH10-METHODS`

Production date: 2026-09-07

Source: `book/manuscript/10_23_shared_by_5.md`

Format: ten self-contained 1200×800 SVG assets, all vector-only.

Every whole-object view preserves `23 = 5 × 4 + 3`: five equal recipients receive four whole candies each and the three leftovers remain in a separate, labeled region. Fractional-sharing views explicitly use a before/after or divided-panel composition. Each of the three leftovers is partitioned into five equal pieces, producing fifteen fifth-pieces, and each of five recipients receives three pieces. No diagram assigns the remainder to one child.

The assets use labels, outlines, dashed boundaries, hatching, grouping, and position so meaning never depends on color alone. Numerals remain selectable SVG text. Every asset has a method-specific `<title>` and `<desc>`, `role="img"`, and `aria-labelledby="title desc"`. No raster image, rasterized text, stock asset, or external content is embedded.

Provenance: authored as repository-native SVG for this task from the CH10 manuscript briefs and BOOK_SPEC visual system. Per-method mathematical and accessibility checks are recorded in `art/vectors/ch10/METHOD_ART_LEDGER.md`.

Final coordinator QA inspected every desktop figure, representative 390 px placements, Method 10 in grayscale, and the integrated chapter at 390 px. Exact whole counts, separate remainder regions, four-jump routes, 23-cell bar, 15 fifth-piece redistribution, and the hard scenario divider all passed. Evidence is in `artifacts/ui/art-ch10-methods/`.
