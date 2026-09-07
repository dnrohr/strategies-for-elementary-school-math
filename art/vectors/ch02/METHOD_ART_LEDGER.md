# CH02 method-art provenance and QA ledger

Scope: twelve production SVGs for the CH02 strategy gallery: ten vector-only assets plus two generated-raster/vector composites. The legacy opening anchor `fifteen-minus-eight.svg` and its sidecar are preserved unchanged.

## Shared record

- Source: `book/manuscript/02_15_minus_8.md`, `book/BOOK_SPEC.md`, `layout/VISUAL_SYSTEM.md`, and the CH02 prompt brief.
- Provenance: original hand-authored SVG diagrams plus generated text-free hand backgrounds for Methods 01 and 08. Raster provenance and prompts are recorded beside those source assets; no generated text is used.
- Canvas/accessibility: each method asset declares 1200×800 dimensions, `viewBox="0 0 1200 800"`, `role="img"`, canonical `aria-labelledby="title desc"`, and method-specific title/description text.
- Mathematical invariant: each route begins with or relates 15 and 8 and reaches the exact difference 7. Unit intervals, counters, cells, beats, and operator directions match the method.
- Non-color encoding: labels, position, hatching, crossing, arrow direction, solid/dashed strokes, brackets, and heavy/double result outlines supplement color.
- Motor/anatomy review: Methods 01 and 08 each use one generated, anatomically plausible hand. All counters, movement cues, tracking marks, outcomes, and equations remain exact vector overlays; neither raster contains mathematical text or countable objects.

## Asset QA

| Method | Asset | Exact visual mapping | Static check | Status |
| --- | --- | --- | --- | --- |
| 01 | `art/composites/ch02/ch02_m01_remove-eight-counters.svg` | 3×5 start array with 7 remaining and 8 marked to move; 8 moved copies in tray | exact staged 15→7/8 mapping; one inspected hand; no raster text/counters | production composite |
| 02 | `ch02_m02_count-back-eight-beats.svg` | 15→14→…→7 | 9 ticks, 8 unit arrows, 8 numbered beats | production vector |
| 03 | `ch02_m03_count-up-to-fifteen.svg` | 8→10→15 | proportional +2 and +5 arcs; total gap 7 | production vector |
| 04 | `ch02_m04_subtract-five-then-three.svg` | 15−5−3 | nodes 15→10→7; 5+3=8 removed | production vector |
| 05 | `ch02_m05_subtract-ten-add-two.svg` | 15−10+2 | leftward −10 to intermediate 5; rightward +2 to final 7 | production vector |
| 06 | `ch02_m06_inverse-missing-addend.svg` | 15−8=□ ↔ 8+□=15 | proportional 8/15 and 7/15 bar sections | production vector |
| 07 | `ch02_m07_measure-seven-unit-gap.svg` | static distance 8 to 15 | 8 endpoint ticks forming 7 intervals; split 2+5 | production vector |
| 08 | `art/composites/ch02/ch02_m08_eight-tracking-marks.svg` | one hand records eight decrements | exactly 8 numbered vector marks and outcomes 14…7; one inspected hand; no raster text | production composite |
| 09 | `ch02_m09_eight-plus-seven-bar.svg` | whole 15 split 8+7 | exactly 15 equal cells; first 8 patterned, last 7 open | production vector |
| 10 | `ch02_m10_ten-and-five.svg` | (10−8)+5 | ten-frame has 8 removed and 2 remaining; separate 5 gives 7 | production vector |
| 11 | `ch02_m11_retrieve-seven.svg` | 15−8 resolves to 7 | inverse verification 7+8=15; no neural/speed claim | production vector |
| 12 | `ch02_m12_regrouped-written-subtraction.svg` | 15−08=07 | explicit 1 ten+5 ones = 0 tens+15 ones; 15−8=7 | production vector |

## Remaining sign-off

- Final layout should inspect text metrics and grayscale/print contrast at placed size.
- Generated composites require final placed-size inspection at desktop and narrow widths; anatomy and left/right orientation have been inspected at native size.
