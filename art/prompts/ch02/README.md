# CH02 art prompt index

These briefs are for exact, vector-first illustrations of \`15 − 8 = 7\`. Generated raster art must not contain mathematical text; add all numerals, labels, arrows, and unit marks as vector overlays.

## Required spread prompts

- \`ch02_m01_counter_removal\`: 15 counters arranged 3×5; exactly 8 move to a separate tray, leaving 7.
- \`ch02_m02_count_back\`: number line 7–15 with eight leftward unit arrows and eight beat marks.
- \`ch02_m03_count_up_gap\`: number line with exact jumps 8→10 (2) and 10→15 (5), combined gap 7.
- \`ch02_m04_split_5_3\`: show \`8 = 5 + 3\`; then 15−5=10 and 10−3=7.
- \`ch02_m05_compensation\`: exact signed path 15−10+2=7; never imply 5 is final.
- \`ch02_m06_inverse\`: transform \`15−8=□\` to \`8+□=15\`; fill a 7-unit bar.
- \`ch02_m07_static_gap\`: bracket the seven-unit interval between 8 and 15; no removal imagery.
- \`ch02_m08_finger_tracking\`: one hand tracks eight decrements; do not depict eight fingers on one hand.
- \`ch02_m09_bar_model\`: 15 equal squares split into shaded 8 and unshaded 7.
- \`ch02_m10_ten_frame\`: 10-frame plus 5; remove 8 from the ten-frame, leaving 2+5=7.
- \`ch02_m11_retrieval\`: restrained \`15−8\` resolving to \`7\`; no literal brain or speed claim.
- \`ch02_m12_mental_written\`: vector regrouping from 15−08 to 0 tens + 15 ones, then 7; no unexplained negative ones.

For every prompt, illustrator QA must verify exact counts, orientation, contrast without relying on color, and vector overlays.

## Production-vector record

Twelve 1200×800 SVGs named `ch02_m01_*.svg` through `ch02_m12_*.svg` implement the prompts above. Methods 01 and 08 are generated-raster/vector composites; the other ten are original vector-only assets. Every asset has selectable mathematical labels, `role="img"`, canonical `aria-labelledby="title desc"`, and method-specific title/description text. The two generated rasters contain no text or countable mathematical objects. Do not add countable decoration that could be mistaken for arithmetic units.

Use the semantic palette from `layout/VISUAL_SYSTEM.md`: blue starting quantities, red removed/corrected quantities, green results, purple transformations, teal motion, orange beats, and gray inactive structure. Pair every color distinction with labels, patterns, line style, arrow direction, brackets, or heavy/double outlines.

Exact route notes:

- M01 uses a 3×5 start array with 7 remaining and 8 hatched move positions, plus exactly 8 moved counters in the destination tray. Its single-hand raster contains no counters or text.
- M02 uses 9 labeled positions from 7 through 15, creating exactly 8 leftward unit steps and 8 beat marks; 15 is not counted as a step.
- M03 uses proportional forward distances 8→10 = 2 and 10→15 = 5.
- M04 removes 5 then 3, with 10 as the intermediate and 8 total removed.
- M05 marks 5 explicitly as intermediate; the return +2 ends at a double-marked 7; net change is −8.
- M06 aligns bar widths in the ratio 8:7 and fills the 15-unit whole.
- M07 is a static seven-interval gap with no removal arrows.
- M08 has exactly 8 numbered tracking marks aligned to 14 through 7 over a generated background with one anatomically inspected pointing hand. The raster contains no marks or text.
- M09 has 15 equal cells partitioned into 8 patterned and 7 open cells.
- M10 has a 10-frame with 8 crossed cells and 2 remaining, plus an untouched group of 5.
- M11 uses negative space and a verification loop, not brain imagery or a speed claim.
- M12 explicitly shows `1 ten + 5 ones = 0 tens + 15 ones` before `15 − 8 = 7`; aligned `07` is labeled as notation for 7.

Asset-level provenance, alt-text intent, static checks, exceptions, and remaining QA are recorded in `art/vectors/ch02/METHOD_ART_LEDGER.md`.
