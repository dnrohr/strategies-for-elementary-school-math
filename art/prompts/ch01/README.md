# CH01 method-art production prompt

## Shared production rules

Create one 1200×800 SVG for each method listed below. Every root must declare `width="1200"`, `height="800"`, `viewBox="0 0 1200 800"`, `role="img"`, and `aria-labelledby="title desc"`. Use unique, useful `<title id="title">` and `<desc id="desc">` elements. Keep every equation and label as selectable SVG text. Use original vector geometry only: no embedded raster image, external font, external link, filter effect, script, animation, or rasterized text.

Use the visual-system palette: starting quantity blue `#2764B8` with a solid outline; addition orange `#D97706` with diagonal hatching or a dashed boundary; removal red `#C2413B` with an X/strike; result green `#287A55` with a heavy or double outline; transformation purple `#7652A8` with a dotted connector; motion teal `#087E8B` with arrows or trails; inactive structure gray `#68707A`. Use dark ink `#24312D` on warm paper `#FFFDF8`. Color must never be the only cue.

Do not add decorative dots, blocks, ticks, taps, or other countable marks. Quantity-bearing marks must belong to the arithmetic and must be labeled or structurally grouped. Use a minimum 4 px stroke. Keep labels at least 16 px from rules and shapes. The exact answer is always `7 + 5 = 12`.

## Per-method reproducible specifications

### M01 — Count every object

- File: `art/vectors/ch01/ch01_m01_count-every-object.svg`
- Draw exactly 12 counters in two bracketed groups: 7 blue solid counters followed by 5 orange hatched counters.
- Number the counters consecutively `1` through `12`; add a single continuous touch trail that passes each counter once in that order.
- Label the groups `first group · 7` and `second group · 5`, and label the final cardinal count `last word: twelve`.
- Required equation: `7 + 5 = 12`.

### M02 — Count on from seven

- File: `art/vectors/ch01/ch01_m02_count-on-from-seven.svg`
- Mark 7 as the held starting total, then draw exactly five equal `+1` jumps with landings `8, 9, 10, 11, 12`.
- Add exactly five tap bars aligned one-to-one with the jumps; label them `five increments`.
- Do not depict a jump onto 7.

### M03 — Count on from five

- File: `art/vectors/ch01/ch01_m03_count-on-from-five.svg`
- Show the equality `7 + 5 = 5 + 7`, then mark 5 as the starting total.
- Draw exactly seven equal `+1` jumps with landings `6` through `12`.
- Use a labeled commutativity connector; do not imply that the route has only five steps.

### M04 — Fingers as counters (raster/vector composite)

- Composite file: `art/composites/ch01/ch01_m04_fingers-make-ten.svg`; organic base: `art/raster/ch01/ch01_m04_fingers-make-ten_raster.png`.
- Three sequential panels use the same pair of anatomically plausible hands: 7 raised fingers; then 10 raised fingers with exactly 3 motion arrows; then 10 raised fingers plus exactly 2 separate counters.
- Vector overlay labels preserve `7`, `+3 → 10`, and `10 + 2 = 12`; the raster contains no text. Manual anatomy/digit review and the full generation record are in `art/raster/ch01/ch01_m04_fingers-make-ten_raster.md` and `art/prompts/ch01/ch01_m04_fingers-make-ten.md`.

### M05 — Make ten

- File: `art/vectors/ch01/ch01_m05_make-ten.svg`
- Draw one exact 2×5 ten-frame. Fill 7 cells with blue solid counters, the 3 remaining cells with orange hatched counters, and place 2 orange hatched residual counters outside.
- Visibly bracket the five as `3 moved + 2 left`; label the full frame `10` and the residual group `2`.
- Required chain: `7 + 5 = 7 + 3 + 2 = 10 + 2 = 12`.

### M06 — Use five plus five

- File: `art/vectors/ch01/ch01_m06_five-plus-five.svg`
- Show two separate five-pattern cards, each containing exactly 5 dots, plus a bracketed residual group of exactly 2 dots.
- Pair the two five-patterns under a brace labeled `5 + 5 = 10`; label the residual `+ 2`.
- Required chain: `(5 + 5) + 2 = 10 + 2 = 12`.

### M07 — Double seven, subtract two

- File: `art/vectors/ch01/ch01_m07_double-seven-subtract-two.svg`
- Show two seven-dot groups for exactly 14 dots total before correction.
- Mark exactly 2 dots in the second group with red X strikes and dashed outlines; the other 12 remain unstruck.
- Required chain: `7 + 7 = 14`, then `14 − 2 = 12`.

### M08 — Retrieve the fact

- File: `art/vectors/ch01/ch01_m08_retrieve-the-fact.svg`
- Use a sparse symbolic route: a solid source card `7 + 5`, one direct arrow, and a heavy/double-outlined result card `12`.
- Label the direct path `answer appears`; show an optional check only as a small dashed secondary path labeled `check afterward`.
- Do not use counters, number-line ticks, or sensory icons.

### M09 — See dot chunks

- File: `art/vectors/ch01/ch01_m09_see-dot-chunks.svg`
- On the 7-card, show a boxed five-pattern plus a separately outlined two-dot residual. On the 5-card, show one boxed five-pattern.
- Align the two five-patterns and join them under `two fives = 10`; retain the 2 residual dots under `two extras`.
- Exactly 12 dots appear; do not suggest simultaneous subitizing of 12.

### M10 — Hop on a number line

- File: `art/vectors/ch01/ch01_m10_number-line-hops.svg`
- Draw an exact number line labeled `0` through `13` with equal unit spacing.
- Emphasize 7 as the start and 12 as the landing. Draw exactly five separate rightward arcs: `7→8`, `8→9`, `9→10`, `10→11`, `11→12`.
- Label every arc `+1`; leave 13 visible but inactive to establish scale.

### M11 — Build with ten-frame blocks

- File: `art/vectors/ch01/ch01_m11_ten-frame-blocks.svg`
- Use two explicitly separated stages. Stage 1 contains a ten-frame with exactly 7 blue blocks and a tray with exactly 5 orange blocks. Stage 2 contains a full ten-frame (7 blue + 3 orange) and exactly 2 loose orange blocks.
- Add a dotted transformation arrow labeled `move 3; leave 2`.
- Stage labels prevent the repeated quantities from being read as one combined set.

### M12 — Say a counting rhythm

- File: `art/vectors/ch01/ch01_m12_counting-rhythm.svg`
- No hand is required. Draw exactly five beat/tap markers, each a vertical rounded bar with an ordinal label `tap 1` through `tap 5`.
- Place the spoken number labels `8, 9, 10, 11, 12` one-to-one above the five markers; show 7 separately as `held start`.
- State in metadata and ledger that markers are exact tracking aids, not a measured tempo or claim about auditory traits.

### M13 — Write a tiny mental algorithm

- File: `art/vectors/ch01/ch01_m13_tiny-mental-algorithm.svg`
- Use a vector-only imagined page with four selectable symbolic lines: `7 + 5`, `5 = 3 + 2`, `7 + 3 = 10`, `10 + 2 = 12`.
- Connect the lines with dotted transformation arrows and short action labels `split`, `make ten`, `add what remains`.
- A non-countable pen-nib silhouette may cue inner writing; it must not obscure text.

### M14 — Recognize a relation without a picture

- File: `art/vectors/ch01/ch01_m14_relation-without-picture.svg`
- Use only three symbolic nodes: `7 + 5`, `10 + 2`, and `12`.
- Connect them with labeled dotted relations `same total` and `two more than ten`; double-outline the result.
- Do not use dots, objects, fingers, speech bubbles, number lines, or scene imagery.

## QA and provenance

Methods 01–03 and 05–14 are hand-authored original SVG implementations derived from the CH01 manuscript briefs and `layout/VISUAL_SYSTEM.md`. Method 04 is an original generated raster with a hand-authored vector overlay; its rejected first generation is retained with the rejection reason. Validate well-formed XML, exact root metadata, selectable text, exact arithmetic, method-specific count/jump invariants, raster provenance, and anatomy. See `art/vectors/ch01/METHOD_ART_LEDGER.md` for the asset-by-asset record.
