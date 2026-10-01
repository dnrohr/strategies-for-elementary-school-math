# CH12 vector asset record

- Source: `art/prompts/ch12/README.md` and the CH12 method gallery.
- Intended chapter: CH12, coordinating three addends and place-value regrouping.
- Canvas: 1200×800 SVG viewBox; selectable text; no raster text or external assets.
- Exact checks: `378 + 596 + 247 = 1,221`; ones `21`, tens including carry `22`, hundreds including carry `12`; carries produce 1 thousand, 2 hundreds, 2 tens, and 1 one.
- Accessibility: SVG `role="img"` with title and description; column totals and carry path are written as text; labels supplement color.
- Review state: complete through `QA-IMAGE-PASS-CH12` (2026-10-01). The opening and all eleven methods were inspected at 1200×800, at 390 px placed width, and in material grayscale proofs. M04 metadata was deduplicated; M09 was rebuilt to show three source piles and every exact trade; M10 prose was synchronized to its external place-value record; M11 provenance now records its four visible transfer tokens.

## Method-level production ledger

Task `ART-CH12-METHODS`; produced 2026-09-07. All eleven files are repository-native vector-only 1200×800 SVGs with selectable text, unique title/description metadata, non-color cues, and no embedded raster or external asset.

| Method | Asset | Exact check and accessibility cue |
| --- | --- | --- |
| M01 | `ch12_m01_given-order.svg` | `378+596=974`; `974+247=1,221`; numbered running-total stages. |
| M02 | `ch12_m02_pair-596-247.svg` | `596+247=843`; `843+378=1,221`; one bracket avoids crossing arrows. |
| M03 | `ch12_m03_transfer-four.svg` | Exactly four visible unit tokens; `596+4=600`, `247−4=243`; before/after equations equal 1,221. |
| M04 | `ch12_m04_place-value-split.svg` | Hundreds 1,000; tens 200; ones 21; recombination 1,221; three outlined columns. |
| M05 | `ch12_m05_column-addition.svg` | Ones 21 write1/carry2; tens `7+9+4+2=22` write2/carry2; hundreds `3+5+2+2=12`; separately aligned carry digits. |
| M06 | `ch12_m06_make-thousand.svg` | `596+247=843`; `378+622=1,000`; `843−622=221`; final 1,221. |
| M07 | `ch12_m07_pair-378-247.svg` | `378+247=625`; `625+596=1,221`; paired tiles and bracket. |
| M08 | `ch12_m08_estimate-then-exact.svg` | Approximate 1,200 and exact 1,221 are separate; on proportional 0–1,221 line, 1,200 is near x890 and gap21 is bracketed. |
| M09 | `ch12_m09_base-ten-blocks.svg` | Three labeled source piles: `3H/7T/8O`, `5H/9T/6O`, and `2H/4T/7O`; combined `10H/20T/21O`; exact exchanges reach `1Th/2H/2T/1O`. Representative block shapes are explicitly labeled with multiplicities. |
| M10 | `ch12_m10_place-map.svg` | External place-value record with exact stages: `10H/20T/21O → 10H/22T/1O → 12H/2T/1O → 1Th/2H/2T/1O`; four numbered panels. |
| M11 | `ch12_m11_conserved-transfer.svg` | Exactly four visible transfer tokens travel from labeled source `247−4` to destination `596+4`; before/after equations both equal 1,221. |

Review completed: equations, transfer counts, carry sequence, XML metadata, no `<image>`, non-color cues, all full-size renders, representative narrow-width renders, material grayscale samples, and integrated 390 px chapter placement. The image-quality pass removed duplicate M04 alternative text, rebuilt M09 around exact source piles and sequential exchanges, preserved M10's three explicit connector paths, and verified M11's four tokens and source-to-destination direction.
