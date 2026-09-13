# CH11 art prompts — `27 × 46`

Use precise vector/SVG overlays for every numeral, array, lattice, area partition, and arrow. Raster or composite art may depict hands, blocks, envelopes, and tapping, but must not contain generated text.

Priority briefs:

- `ch11_m02_split-46-area.svg`: 27×46 rectangle partitioned into 27×40 and 27×6, labeled 1,080 and 162, total 1,242.
- `ch11_m04_compensation-array.svg`: 30 rows of 46 with exactly 3 rows crossed out; correction 138.
- `ch11_m10_array.svg`: 27 rows by 46 columns, grouped into widths 40 and 6; use tick marks instead of clutter.
- `ch11_m14_lattice.svg`: exact lattice for 27×46 with cell products 8, 12, 28, 42 and diagonal carries.
- `ch11_m16_place-value-blocks.svg`: representative ten-rods/unit cubes and one valid trade sequence.

QA every asset against the chapter’s mathematical note, count, direction, and color semantics.

## Clarification redraws

- **M06 — nearby known product:** show a 46-wide rectangle split into heights 23 and 4, with a prerequisite card `known: 23 × 46 = 1,058`. Label the regions 1,058 and 184 and recombine the side as 27. Do not use square imagery.
- **M13 — forty-bundles and units:** enlarge one representative group containing one neutral 40-unit packet and six single tokens, then show 27 repetitions through labeled multiplicity rather than hundreds of marks. Merge `27 × 40 = 1,080` and `27 × 6 = 162` at 1,242. Avoid currency cues.
- **M14 — learned lattice:** caption the exact 2×2 grid `learned written algorithm`. Put each two-digit cell product on the correct sides of its diagonal, show diagonal addition and carries explicitly, and describe the layout as an external procedure rather than spontaneous imagery.

## Method-level production record

Task: `ART-CH11-METHODS`

Production date: 2026-09-07

Source: `book/manuscript/11_27_times_46.md`

Format: eighteen self-contained 1200×800 SVG assets, all vector-only. Every route ends at the exact product `1,242`. Large arrays and unit bundles use labeled multiplicity, grouped ticks, or representative blocks rather than pretending to draw literal counts. Text remains selectable; no raster image, rasterized text, stock asset, or external content is embedded.

Accessibility conventions: each file has a method-specific `<title>` and useful `<desc>`, `role="img"`, and `aria-labelledby="title desc"`. Color is supplemented by equations, boundaries, labels, hatching, dashed strokes, position, or shape. Approximate and exact values are explicitly distinguished in M01 and M18.

Provenance: authored as repository-native SVG for this task from the CH11 manuscript briefs and BOOK_SPEC visual system. The existing chapter anchor remains unchanged. Exact per-method checks and review state are recorded in `art/vectors/ch11/twenty-seven-times-forty-six.md`.
