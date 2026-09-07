# CH03 method-art provenance and QA ledger

Scope: fourteen production SVGs for the CH03 gallery. The legacy opening anchor `thirty-seven-plus-forty-eight.svg` and sidecar remain unchanged.

## Shared record

- Source: `book/manuscript/03_37_plus_48.md`, `book/BOOK_SPEC.md`, `layout/VISUAL_SYSTEM.md`, and the CH03 prompt brief.
- Provenance: original hand-authored vector diagrams; no external imagery, raster content, embedded fonts, or generated text.
- Canvas/accessibility: every method asset is 1200×800 with `viewBox="0 0 1200 800"`, `role="img"`, canonical `aria-labelledby="title desc"`, and unique useful title/description text.
- Exact invariant: every route preserves `37 + 48 = 85`; place-value methods preserve `37 = 30 + 7`, `48 = 40 + 8`, `7 + 8 = 15`, and `15 ones = 1 ten + 5 ones`.
- Non-color cues: labels, grouping, outlines, hatching, arrow direction, line style, position, and heavy/double result frames supplement semantic color.
- Organic-art flag: no method strictly requires a person. M07 and M09 are exact physical-object overlays; M11 uses a motion trace instead of a crude hand. A future composite may add professionally illustrated manipulation/writing gestures, but these vectors remain the auditable mathematical layer.

## Asset QA

| Method | Asset | Exact mapping / checks | Status |
| --- | --- | --- | --- |
| 01 | `ch03_m01_split-tens-and-ones.svg` | 30+40=70; 7+8=15; 70+15=85 | production vector |
| 02 | `ch03_m02_add-forty-then-eight.svg` | +40 to 77; exactly eight +1 arrows to 85 | production vector |
| 03 | `ch03_m03_add-fifty-correct-two.svg` | temporary 48→50; 37+50=87; −2=85 | production vector |
| 04 | `ch03_m04_make-eighty-first.svg` | 48=43+5; 37+43=80; +5=85 | production vector |
| 05 | `ch03_m05_transfer-three.svg` | exactly three tokens transfer; 37+3=40; 48−3=45 | production vector |
| 06 | `ch03_m06_column-addition.svg` | aligned columns; 15 ones→1 ten+5 ones; tens total 8 | production vector |
| 07 | `ch03_m07_exchange-ten-ones.svg` | before: 7 rods+15 cubes; after: 8 rods+5 cubes | production vector; optional composite |
| 08 | `ch03_m08_rods-and-loose-ones.svg` | 7 rods; 15 ones bracketed 10+5; result 8 tens+5 ones | production vector |
| 09 | `ch03_m09_eighty-five-cents.svg` | before: 7 dimes+15 pennies; after: 8 dimes+5 pennies | production vector; optional composite |
| 10 | `ch03_m10_number-line-forty-eight.svg` | proportional +40 and +8 arcs, decade ticks | production vector |
| 11 | `ch03_m11_imagined-column-work.svg` | exact carried 1 and 85; abstract motor trace | production vector; optional composite |
| 12 | `ch03_m12_verbal-place-values.svg` | exact verbal chains plus 15-ones exchange | production vector |
| 13 | `ch03_m13_middle-fact-stepping-stones.svg` | 37+40=77; 77+8=85; intermediate clearly labeled | production vector |
| 14 | `ch03_m14_direct-retrieval.svg` | direct 85 plus optional 30+40+7+8 check | production vector |

## Sign-off

- All fourteen figures were inspected at final desktop placement; representative number-line, base-ten, money, and imagined-workspace figures were also inspected at 390 px with no overflow.
- Method 07 passed a grayscale proof: rods/cubes and before/after states remain distinct through shape, grouping, border weight, counts, and labels.
- No organic gestures were added, so anatomy/orientation QA is not applicable to this chapter's final vector set.
