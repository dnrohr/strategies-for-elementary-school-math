# CH11 vector asset record

- Source: `art/prompts/ch11/README.md` and the CH11 method gallery.
- Intended chapter: CH11, multi-digit multiplication and coordinated place-value transformations.
- Canvas: 1200×800 SVG viewBox; selectable text; no raster text or external assets.
- Exact checks: `46 = 40 + 6`; `27 × 40 = 1,080`; `27 × 6 = 162`; `1,080 + 162 = 1,242`.
- Accessibility: SVG `role="img"` with title and description; both rectangles and every partial product are labeled; color is paired with text and outlines.
- Review state: final coordinator sign-off complete after full-size, 390 px, grayscale, integrated loading, alt-text, and overflow inspection.

## Method-level production ledger

Task: `ART-CH11-METHODS`; production date: 2026-09-07. All assets below are repository-native vector SVGs with a 1200×800 viewBox, selectable text, unique title/description metadata, and no embedded raster or external asset.

| Method | Asset | Exact check and accessibility cue |
| --- | --- | --- |
| M01 | `ch11_m01_direct-product.svg` | Exact `1,242`; separate dashed `30×40≈1,200` estimate. |
| M02 | `ch11_m02_split-46-area.svg` | Proportioned `40+6` widths; `1,080+162=1,242`; hatch distinguishes 6. |
| M03 | `ch11_m03_split-27-area.svg` | Proportioned `20+7` heights; `920+322=1,242`; brackets label both parts. |
| M04 | `ch11_m04_compensation-array.svg` | Exactly 30 row marks, with exactly rows 28–30 crossed out; `1,380−138=1,242`; note says rows represent groups of 46. |
| M05 | `ch11_m05_round-46.svg` | `27×50=1,350`; correction `27×4=108`; `1,350−108=1,242`; correction path is labeled. |
| M06 | `ch11_m06_near-factor-area.svg` | Exact `23+4` height ratio; `1,058+184=1,242`; brackets and hatching supplement color. |
| M07 | `ch11_m07_double-halve.svg` | `27×46=54×23`; `54×20=1,080`, `54×3=162`; balanced transformation is written. |
| M08 | `ch11_m08_repeated-addition.svg` | Exactly 27 tallies grouped `10+10+7`; `460+460+322=1,242`; note defines each tally as one +46. |
| M09 | `ch11_m09_skip-count-46.svg` | Exactly 27 group ticks; milestones `10→460`, `20→920`, `27→1,242`; brackets label all bands. |
| M10 | `ch11_m10_array.svg` | Representative 27×46 array split `40+6`; `1,080+162=1,242`; copy states that tiny unit cells are intentionally omitted. |
| M11 | `ch11_m11_partial-products.svg` | Aligned `162` and `1,080` sum to `1,242`; place-value labels remain selectable. |
| M12 | `ch11_m12_mental-workspace.svg` | Same `1,080+162=1,242` in translucent cards; dashed guides sit between numeral lines. |
| M13 | `ch11_m13_unit-bundles.svg` | Labeled multiplicities `27×[40]=1,080` and `27×[6]=162`; explicit representative-not-literal note. |
| M14 | `ch11_m14_lattice.svg` | Cells contain `08`, `28`, `12`, `42`; diagonal results/carries read `2`, `14→4 c1`, `12→2 c1`, `1`, yielding `1,242`. |
| M15 | `ch11_m15_expand-both.svg` | Four regions `800+120+280+42=1,242`; exact `20/7` and `40/6` proportions. |
| M16 | `ch11_m16_place-value-blocks.svg` | Valid trade `12 hundreds → 1 thousand + 2 hundreds`; final `1 thousand, 2 hundreds, 4 tens, 2 ones`; representative multiplicities labeled. |
| M17 | `ch11_m17_tap-groups.svg` | Exactly 27 tap circles in bands `10,10,7`; subtotals `460,460,322`; no anatomy implied. |
| M18 | `ch11_m18_estimate-refine.svg` | Approximate `1,200` and exact `1,242` occupy distinct cards; exact difference `42` is bracketed. |

Review completed: exact equations and grouping counts; XML metadata; no `<image>`; non-color cues; all 18 full-size renders; representative 390 px renders; Method 18 grayscale; and integrated loading, alt-text, ordered-placement, and overflow checks. Evidence is under `artifacts/ui/art-ch11-methods/`.
