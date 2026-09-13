# CH12 art prompts — three addends

Use vector/SVG for all equations, carries, place-value columns, brackets, beads, and transfer arrows. Organic hands or blocks may be composite/raster, but raster text is prohibited.

Priority briefs:

- `ch12_m03_transfer_four.svg`: exactly four units move from 247 to 596; before/after remains 378+596+247 = 378+600+243.
- `ch12_m05_column_addition.svg`: exact columns and carries: ones 21, tens 22, hundreds 12; result 1,221.
- `ch12_m09_base_ten_blocks.svg`: three piles regroup into 1 thousand, 2 hundreds, 2 tens, 1 one.
- `ch12_m10_place_map.svg`: three lanes show 21 ones and 22 tens becoming 1,221 through exact trades.

QA every asset against the chapter’s mathematical note, conservation claim, and accessibility/color rules.

## Method-level production record

Task: `ART-CH12-METHODS`

Production date: 2026-09-07

Source: `book/manuscript/12_three_addends.md`

Format: eleven self-contained 1200×800 SVG assets, all vector-only. Every route preserves the exact sum `378 + 596 + 247 = 1,221`. M03 uses exactly four visible transfer tokens; M11 deliberately uses an abstract two-ended arrow with no tokens. M10 follows the full corrected regrouping sequence from raw place totals to the final four places.

All text is selectable. No raster image, rasterized text, stock asset, or external content is embedded. Every asset has a method-specific `<title>` and useful `<desc>`, `role="img"`, and `aria-labelledby="title desc"`. Color is supplemented by labels, outlines, arrows, dashes, position, or panel structure.

## Clarification redraws

- **M08 — benchmark estimate:** show dashed rounded cards `378 ≈ 400`, `596 ≈ 600`, and `247 ≈ 200` leading to `about 1,200`; beneath them, show solid exact columns ending at 1,221 and a `+21` difference bracket. Do not construct a frame from hundreds of tiny marks.
- **M10 — place-value bead map:** use four labeled columns—ones, tens, hundreds, thousands—and explicitly call this an external bead map. Frame one shows 21 ones, 20 tens, and 10 hundreds. Circle every group of ten before replacing it with one bead in the next column. The final frame has exactly 1, 2, 2, and 1 beads from thousands through ones. Do not imply trained mental-abacus use.

Provenance: authored as repository-native SVG from the CH12 manuscript briefs and BOOK_SPEC visual system. The existing chapter anchor remains unchanged. Per-method exactness and QA are recorded in `art/vectors/ch12/three-addends-regrouping.md`.
