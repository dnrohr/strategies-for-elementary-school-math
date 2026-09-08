# CH11 art prompts — `27 × 46`

Use precise vector/SVG overlays for every numeral, array, lattice, area partition, and arrow. Raster or composite art may depict hands, blocks, envelopes, and tapping, but must not contain generated text.

Priority briefs:

- `ch11_m02_split-46-area.svg`: 27×46 rectangle partitioned into 27×40 and 27×6, labeled 1,080 and 162, total 1,242.
- `ch11_m04_compensation-array.svg`: 30 rows of 46 with exactly 3 rows crossed out; correction 138.
- `ch11_m10_array.svg`: 27 rows by 46 columns, grouped into widths 40 and 6; use tick marks instead of clutter.
- `ch11_m14_lattice.svg`: exact lattice for 27×46 with cell products 8, 12, 28, 42 and diagonal carries.
- `ch11_m16_place-value-blocks.svg`: representative ten-rods/unit cubes and one valid trade sequence.

QA every asset against the chapter’s mathematical note, count, direction, and color semantics.

## Method-level production record

Task: `ART-CH11-METHODS`

Production date: 2026-09-07

Source: `book/manuscript/11_27_times_46.md`

Format: eighteen self-contained 1200×800 SVG assets, all vector-only. Every route ends at the exact product `1,242`. Large arrays and unit bundles use labeled multiplicity, grouped ticks, or representative blocks rather than pretending to draw literal counts. Text remains selectable; no raster image, rasterized text, stock asset, or external content is embedded.

Accessibility conventions: each file has a method-specific `<title>` and useful `<desc>`, `role="img"`, and `aria-labelledby="title desc"`. Color is supplemented by equations, boundaries, labels, hatching, dashed strokes, position, or shape. Approximate and exact values are explicitly distinguished in M01 and M18.

Provenance: authored as repository-native SVG for this task from the CH11 manuscript briefs and BOOK_SPEC visual system. The existing chapter anchor remains unchanged. Exact per-method checks and review state are recorded in `art/vectors/ch11/twenty-seven-times-forty-six.md`.
