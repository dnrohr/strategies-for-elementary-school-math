# CH12 art prompts — three addends

Use vector/SVG for all equations, carries, place-value columns, brackets, beads, and transfer arrows. Organic hands or blocks may be composite/raster, but raster text is prohibited.

Priority briefs:

- `ch12_m03_transfer-four.svg`: exactly four units move from 247 to 596; before/after remains 378+596+247 = 378+600+243.
- `ch12_m05_column-addition.svg`: exact columns and carries: ones 21, tens 22, hundreds 12; result 1,221.
- `ch12_m09_base-ten-blocks.svg`: three labeled source piles show `378 = 3H+7T+8O`, `596 = 5H+9T+6O`, and `247 = 2H+4T+7O`; combine to `10H+20T+21O`, then show all three exact exchanges to `1Th+2H+2T+1O`.
- `ch12_m10_place-map.svg`: four numbered record states show `10H/20T/21O → 10H/22T/1O → 12H/2T/1O → 1Th/2H/2T/1O`.

QA every asset against the chapter’s mathematical note, conservation claim, and accessibility/color rules.

## Method-level production record

Task: `ART-CH12-METHODS`

Production date: 2026-09-07

Source: `book/manuscript/12_three_addends.md`

Format: eleven self-contained 1200×800 SVG assets, all vector-only. Every route preserves the exact sum `378 + 596 + 247 = 1,221`. M03 and M11 each use exactly four visible transfer tokens. M09 traces all three source piles into the raw inventory and three exact exchanges. M10 follows the same corrected regrouping sequence as an external four-state place-value record.

All text is selectable. No raster image, rasterized text, stock asset, or external content is embedded. Every asset has a method-specific `<title>` and useful `<desc>`, `role="img"`, and `aria-labelledby="title desc"`. Color is supplemented by labels, outlines, arrows, dashes, position, or panel structure.

## Clarification redraws

- **M08 — benchmark estimate:** show dashed rounded cards `378 ≈ 400`, `596 ≈ 600`, and `247 ≈ 200` leading to `about 1,200`; beneath them, show solid exact columns ending at 1,221 and a `+21` difference bracket. Do not construct a frame from hundreds of tiny marks.
- **M10 — external place-value record:** use four numbered state cards rather than implying trained mental-abacus imagery. Frame one shows 21 ones, 20 tens, and 10 hundreds. Subsequent frames record `20 ones → 2 tens`, `20 tens → 2 hundreds`, and `10 hundreds → 1 thousand`. The final frame has exactly 1 thousand, 2 hundreds, 2 tens, and 1 one.

Provenance: authored as repository-native SVG from the CH12 manuscript briefs and BOOK_SPEC visual system. The chapter opening and all methods remain vector-only; no external content is embedded. Per-method exactness and QA are recorded in `art/vectors/ch12/three-addends-regrouping.md`.
