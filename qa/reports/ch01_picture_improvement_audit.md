# Chapter 1 picture improvement audit — `7 + 5 = ?`

Task ID: `QA-IMAGE-REVIEW`

Audit date: 2026-09-25

Scope: the opening picture and all 14 method pictures in the current Chapter 1 source and built edition

Deliverables: this review plus one numbered markup SVG per picture in [`ch01-image-markups/`](./ch01-image-markups/)

## Reading the audit

Each numbered note below matches the same number on that picture's markup. Severity means:

- **Major** — the picture can misstate the route, weaken mathematical fidelity, or create a materially misleading proportion.
- **Moderate** — the mathematics is recoverable, but hierarchy, labeling, or visual encoding slows comprehension.
- **Polish** — the picture works; the change would improve beauty, consistency, or economy.

The audit assesses the picture as a communication object, not only whether its final arithmetic is correct. Counts, addend identity, unit size, sequence, label-to-mark correspondence, hierarchy, book aesthetic, and fit to the stated mental experience all matter.

## Book-wide findings visible in Chapter 1

1. **The system is exact but often looks like a QA dashboard.** Eyebrows, headings, subtitles, a large framed diagram, an equation rail, captions, and local labels regularly repeat the same message. Fewer words inside the art would give the mathematics more air and make the edition feel more like an illustrated atlas.
2. **The strongest visual language is direct quantity structure.** Ten-frames, dot cards, and crossed-out counters work because the mathematical action is carried by position, grouping, and non-color cues. Arrow-led flowcharts are weaker when they merely connect equations.
3. **Color needs stable semantic ownership.** Blue and orange sometimes distinguish the original addends, sometimes distinguish stages, and sometimes decorate equivalent chunks. A chapter-level convention should preserve which units came from 7 and which came from 5 whenever provenance matters.
4. **Equivalent units must keep equivalent scale.** Counters or blocks representing one unit should not grow between stages unless perspective is explicitly being used.
5. **Abstract or non-sensory accounts should be typographically quieter.** Large boxes and arrows create a strong imagined scene, undermining the intended contrast with concrete and spatial methods.

## Priority order

1. Redraw Method 01's path so it touches `1 → 2 → … → 12` in order and ends at 12.
2. Correct Method 06's color provenance so the two extras belong visually to the decomposed 7, not to the 5 addend.
3. Normalize unit sizes in Method 11 across the before/after stages.
4. Rewrite Method 13's intermediate equations so every term remains visible through every equality-preserving step.
5. Refine the opening picture's number-line route so “five equal +1 intervals” is shown as five intervals, not one arch.
6. Then simplify repeated headings, equation rails, and arrow-led connectors across the chapter.

---

## 00 — Opening picture: two routes

[Open markup](./ch01-image-markups/00_opening.svg) · Source: `art/vectors/ch01/seven-plus-five.svg`

**Purpose.** Introduce the chapter by contrasting two visible routes: combining groups and counting on.

**What already works.** The two panels have equal weight; the total is correct; the left model preserves two addend colors; the right line includes six labeled positions from 7 through 12; the palette fits the book.

1. **Major — the route label and route mark disagree.** “Five equal +1 intervals” sits above one large dashed arch from 7 to 12. The ticks imply five intervals, but the arch reads as one jump. Draw five small equal arcs or a five-part bracket, with one subtle landing cue per interval.
2. **Moderate — the object layouts are countable but not immediately structured.** Seven is arranged `4 + 3` and five as `4 + 1`, making the eye recount. Use a familiar five-pattern plus two for 7 and a five-pattern for 5, or use aligned rows that reveal `7 + 5` without counting every tile.
3. **Polish — the art repeats the page title and explains itself heavily.** Remove the in-image equation/title or reduce it to a small folio-like label. Let the two routes and the caption carry the invitation.

**Revision target.** A quieter, more spacious opener in which a reader can point to five distinct number-line intervals and recognize both addends in under two seconds.

**Acceptance check.** Exactly 7 and 5 units; exactly five one-unit intervals; neither panel depends on color alone; no wording duplicated between page title, art, and caption.

## 01 — Count every object

[Open markup](./ch01-image-markups/01_count_every_object.svg) · Source: `art/vectors/ch01/ch01_m01_count-every-object.svg`

**Purpose.** Show count-all: each object is touched once and the final number word gives the total.

**What already works.** There are exactly 12 numbered counters; the two addends are visually separated; hatching distinguishes the second group without relying on color.

1. **Major — the dotted touch path does not follow the numbered counters.** It weaves between rows, does not visibly pass through each counter center, and ends near counter 7 even though “the final count word” is 12. This conflicts with the stated method. Route the path through centers `1–12`, or use twelve small touch dots with a clear start and finish.
2. **Major — the terminal arrow points at the wrong visual destination.** Its head sits beneath/near 7, making 7 look like the endpoint. Put a small terminal mark on 12 and remove any arrowhead that competes with the numbered objects.
3. **Moderate — brackets plus numbers plus a path over-explain the same grouping.** Keep the addend grouping, but demote the brackets or replace them with two light background fields so the touch sequence is primary.

**Revision target.** The eye should be able to trace a single unambiguous `1 → 12` route, ending unmistakably on the orange 12 counter.

**Acceptance check.** Every counter touched once; order matches printed numerals; no path crossing suggests a skipped/revisited object; endpoint is 12.

## 02 — Count on from seven

[Open markup](./ch01-image-markups/02_count_on_from_seven.svg) · Source: `art/vectors/ch01/ch01_m02_count-on-from-seven.svg`

**Purpose.** Hold 7 and track five new counts to 12.

**What already works.** Five arcs, five `+1` labels, five landings, and five tracking marks are present. The held start is explicitly separated from the increments.

1. **Moderate — the empty rounded tracking marks look like answer boxes.** Use small filled tap/beat marks, fingertip impressions, or numbered dots so their motor role is immediately legible.
2. **Polish — arrowheads carry more weight than the landing ticks.** Reduce heads and emphasize the landing dots/ticks; the mathematical information is in the five endpoints, not the arrows.
3. **Polish — the lower equation rail repeats the line above.** Retain either the count sequence or the final equation as the dominant summary, not both at equal weight.

**Revision target.** Five landings should be the first thing seen, with the five tracking actions clearly secondary and aligned one-to-one.

**Acceptance check.** Held 7 is not counted; five marks map to 8, 9, 10, 11, 12; arrows never cover ticks or labels.

## 03 — Switch the addends and count on

[Open markup](./ch01-image-markups/03_switch_and_count.svg) · Source: `art/vectors/ch01/ch01_m03_count-on-from-five.svg`

**Purpose.** Show commutativity, then count seven increments from 5.

**What already works.** The addend swap is explicit and the number line correctly shows seven one-unit intervals from 5 to 12.

1. **Moderate — the addend-swap panel and counting route compete as two equal lessons.** Treat the swap as a small premise (`7 + 5 = 5 + 7`) and devote most of the area to the seven landings.
2. **Moderate — seven identical arcs make a dense saw-tooth band.** Use lighter arcs, alternating landing dots, or a segmented bracket. Preserve seven countable intervals without turning the line into a pattern strip.
3. **Polish — “held start” and “seventh landing” are far from the actual marks at reading size.** Attach labels with short leaders or place them directly beneath 5 and 12.

**Revision target.** The reader should first understand “switch,” then follow a calm seven-step route.

**Acceptance check.** Exactly seven intervals; start 5 and endpoint 12; equality shown rather than implied; no label appears detached from its referent.

## 04 — Fingers as counters

[Open markup](./ch01-image-markups/04_fingers.svg) · Source: `art/composites/ch01/ch01_m04_fingers-make-ten.svg`

**Purpose.** Embody `7 + 5` as seven fingers, add three to make ten, then retain two.

**What already works.** The current anatomy is plausible; panel 1 shows 7; panel 2 shows 10 with three motion cues; panel 3 shows 10 plus two residual units.

1. **Moderate — the photorealistic raster breaks the chapter's visual voice.** It reads like a generated stock photo inserted into a vector atlas. Use a restrained cut-paper/ink treatment, controlled duotone, or consistent illustrated hands so it feels intentionally part of the book.
2. **Moderate — the three pale arrows are hard to see and do not identify their source.** Increase contrast and connect the three added fingers to a clearly labeled portion of the original 5; motion should explain regrouping, not just decorate the middle panel.
3. **Moderate — the remaining two suddenly become counters rather than fingers.** This weakens the embodied idea and changes unit form. Either show the two residual fingers consistently or explicitly label the counters as “2 from the five still left.”
4. **Polish — hand scale/cropping shifts between panels.** Normalize wrist baseline and hand size so change reads as finger state, not camera zoom.

**Revision target.** One consistent embodied visual story: same hands, same scale, unmistakable transfer of 3, unmistakable remainder of 2.

**Acceptance check.** Correct digit counts in every panel; no ambiguous/extra digits; exactly three movement cues; residual two clearly belong to the added five; no raster text.

## 05 — Split 5 to make 10

[Open markup](./ch01-image-markups/05_make_ten.svg) · Source: `art/vectors/ch01/ch01_m05_make-ten.svg`

**Purpose.** Decompose 5 into 3 and 2, fill a ten-frame, and read `10 + 2`.

**What already works.** This is one of the chapter's clearest pictures. Quantities, hatching, empty/full frame structure, and equation all agree.

1. **Moderate — “3 moved” is asserted after the move, not shown as an action.** Add a faint source tray or three short motion traces from the original five so the transformation, rather than only the result, is visible.
2. **Polish — the residual pair floats farther from the frame than needed.** Bring it into the same alignment/grid rhythm and use a lighter bracket; the present gap makes the pair feel like a separate example.
3. **Polish — the long equation rail is visually heavier than the central model.** Reduce the rail height/type size so the ten-frame remains the hero.

**Revision target.** Preserve this composition, adding only enough “before” evidence to make the split visibly causal.

**Acceptance check.** Seven original units, three moved units, two residual units; a 2×5 frame; moved/residual encoding works in grayscale.

## 06 — Use five plus five

[Open markup](./ch01-image-markups/06_five_plus_five.svg) · Source: `art/vectors/ch01/ch01_m06_five-plus-five.svg`

**Purpose.** Decompose 7 into 5 and 2, pair the two fives, then add the extra 2.

**What already works.** The two canonical five-patterns and the isolated pair make `10 + 2` easy to recognize.

1. **Major — color provenance contradicts the stated decomposition.** The first five is blue, while the second five and the “two extra” are both orange. That visually encodes blue 5 plus orange 7. If the original 7 is being split, its five and two should share one visual identity; the untouched addend 5 should use the other.
2. **Moderate — equal-size cards make the two extras feel like a third operand.** Nest the pair with the decomposed 7 or connect it with a brace labeled `7 = 5 + 2` before pairing the two fives.
3. **Polish — the bottom brace spans only the two five cards, while the text below must explain the rest.** Use a two-stage brace system: first identify `7 = 5 + 2`, then identify `5 + 5 = 10`.

**Revision target.** The picture should preserve the identity of both original addends while revealing the near-double.

**Acceptance check.** The units from 7 retain one color/pattern; the units from 5 retain another; `5 + 5` and the residual 2 remain perceptually distinct; exact total 12.

## 07 — Double seven, then subtract two

[Open markup](./ch01-image-markups/07_double_seven.svg) · Source: `art/vectors/ch01/ch01_m07_double-seven-subtract-two.svg`

**Purpose.** Build 14 as two sevens, then remove two from the second seven.

**What already works.** Two groups of seven are visible; exactly two positions are crossed out; the equation faithfully states the compensation.

1. **Moderate — the removed dots stop looking like the other unit dots.** Retain the filled dots underneath translucent X marks so the reader sees “two of the fourteen were removed,” not “two empty placeholders were never there.”
2. **Moderate — the two seven-groups are distinguished mostly by frames, while all retained dots are blue.** Use stable addend patterning or a subtle second-group tint so the second seven is easier to parse before correction.
3. **Polish — the small dashed legend at bottom right adds a third explanation of the X marks.** Enlarge/attach the label directly to the crossed pair or remove the legend if the title and Xs suffice.

**Revision target.** Make the before state (14) and the correction (remove exactly 2) readable in one glance.

**Acceptance check.** Fourteen original dots remain reconstructible; exactly two are visibly cancelled; twelve uncancelled units remain; cancellation works without red.

## 08 — Retrieve the fact

[Open markup](./ch01-image-markups/08_retrieval.svg) · Source: `art/vectors/ch01/ch01_m08_retrieve-the-fact.svg`

**Purpose.** Depict an answer arriving directly, with verification only as an optional later act.

**What already works.** The main route is sparse; the check is visually secondary; there are no concrete objects or false claims about the mechanism of retrieval.

1. **Moderate — a large directional arrow implies a traversed visual process.** For “comes directly,” use near-simultaneous adjacency, a subtle reveal, or a very short connector. The current arrow makes retrieval look like a two-stage flowchart.
2. **Moderate — the optional check loop returns to the same answer but never shows what the check is.** Either label a small detached “verify by counting” affordance or omit the loop; a route with no represented operation adds clutter without explanation.
3. **Polish — the answer box, double border, and large green numeral over-celebrate the result.** A quieter answer treatment would better match the non-sensory account and preserve hierarchy with other methods.

**Revision target.** The least pictorial image in the gallery: equation and answer present, but no invented internal journey.

**Acceptance check.** Optional verification is unmistakably later/secondary; no concrete sensory metaphor; final equality remains exact and accessible.

## 09 — See dot chunks

[Open markup](./ch01-image-markups/09_dot_chunks.svg) · Source: `art/vectors/ch01/ch01_m09_see-dot-chunks.svg`

**Purpose.** Show 7 as a five-pattern plus two, then perceive two fives and two extras.

**What already works.** Exact quantities and grouping are excellent; nested boundaries correctly preserve the seven-card while exposing its five-and-two substructure; hatching is robust in grayscale.

1. **Moderate — this can be mistaken for Method 06 because both are “two fives plus two.”** Make the perceptual act the visual focus: emphasize pattern matching/alignment, and reduce equation/process language that makes it look like another decomposition diagram.
2. **Polish — four nested outlines create a box-within-box aesthetic.** Use soft fields or a single card outline plus a subtle halo around the pair so the dot pattern, not the containers, carries the beauty.
3. **Polish — the top and bottom explanatory labels are longer than the visual needs.** Keep `7-card = 5 + 2` and `5-card`, but let a short brace `two fives + two` replace the sentence-like footer.

**Revision target.** A pattern-recognition picture, visually distinct from the stepwise near-double in Method 06.

**Acceptance check.** Two canonical five-patterns plus one pair; no implication of subitizing 12 at once; original 7-card boundary remains legible.

## 10 — Hop on a number line

[Open markup](./ch01-image-markups/10_number_line.svg) · Source: `art/vectors/ch01/ch01_m10_number-line-hops.svg`

**Purpose.** Represent addition spatially as five equal rightward hops from 7 to 12.

**What already works.** The current source correctly stops its labeled ticks at 12; five arcs have equal span; start and landing are distinguished; the number sequence is exact.

1. **Moderate — showing 0 through 12 compresses the only active region, 7 through 12.** Crop or visually de-emphasize 0–6 so the five equal intervals can be larger and calmer.
2. **Moderate — five `+1` labels plus arrowheads crowd the small active region.** Label the unit size once and let repeated equal arcs/ticks carry the rest.
3. **Polish — the blue sequence strip above and green equation rail below duplicate the line.** Keep one summary; devote the freed space to the spatial representation.

**Revision target.** A generous, quiet 7–12 number line whose equal spacing is beautiful enough to teach without annotation overload.

**Acceptance check.** Exactly five hops; every hop spans one tick interval; endpoint 12; no continuation arrow is mistaken for a sixth hop; all active labels readable at narrow width.

## 11 — Build with ten-frame blocks

[Open markup](./ch01-image-markups/11_ten_frame_blocks.svg) · Source: `art/vectors/ch01/ch01_m11_ten-frame-blocks.svg`

**Purpose.** Show a physical before/after regrouping from 7 plus 5 to a full ten-frame plus 2 loose blocks.

**What already works.** Before and after are explicitly separated; the ten-frame occupancy is exact; the three moved units retain orange hatching; the remaining two are visible.

1. **Major — identical units change size.** Orange blocks are about 54 units wide in the tray, 52 in the frame, but 70 when loose in Stage 2. The larger residual blocks can imply greater quantity or different objects. Keep every block the same apparent size across both stages.
2. **Moderate — the central arrow says “move 3 / leave 2” but does not map specific source blocks to destinations.** Use three thin trajectories from the first three tray blocks into the empty cells, while two blocks remain stationary or ghosted.
3. **Moderate — the panels are dense at reading size.** Reduce stage text, enlarge the transformation itself, and place `before`/`after` as simple tabs rather than multi-line mini-headings.

**Revision target.** A conservation diagram: the same five orange blocks visibly persist, three changing position and two not moving.

**Acceptance check.** Same block size and shape in both stages; five orange identities traceable; seven blue blocks unchanged; three move, two remain; final frame contains exactly ten.

## 12 — Say a counting rhythm

[Open markup](./ch01-image-markups/12_counting_rhythm.svg) · Source: `art/vectors/ch01/ch01_m12_counting-rhythm.svg`

**Purpose.** Pair five spoken number words with five motor beats while holding 7.

**What already works.** The current source uses equal-height markers, correctly avoiding accidental magnitude/tempo encoding. Five words align one-to-one with five beats; 7 is clearly “no tap.”

1. **Moderate — the tall rounded bars still resemble a bar chart or audio levels.** Use small equal beat discs, fingertip/tap symbols, or short baseline ticks so no quantitative height is implied.
2. **Polish — each word is labeled three times: numeral above, “tap n” below, and the sequence in the footer.** Keep numerals and one shared “five beats” label; remove the repeated sequence.
3. **Polish — the held-start card is much heavier than each beat.** Reduce its footprint so it establishes the rule without dominating the rhythm.

**Revision target.** A light rhythmic strip: held 7, then five equal beat marks carrying 8–12.

**Acceptance check.** Five and only five beats; labels 8–12 map one-to-one; no height/volume/tempo claim; usable without color.

## 13 — A tiny written workspace

[Open markup](./ch01-image-markups/13_mental_algorithm.svg) · Source: `art/vectors/ch01/ch01_m13_tiny-mental-algorithm.svg`

**Purpose.** Show the make-ten transformation as imagined written symbols.

**What already works.** The lined page and pen-nib cue communicate inner writing; all displayed individual equations are true; raster text is avoided.

1. **Major — the rows do not preserve the whole expression through the transformation.** The sequence jumps from `7 + 5` to `5 = 3 + 2`, then `7 + 3 = 10`; the residual `+2` temporarily disappears. Use `7 + 5 = 7 + (3 + 2)`, then `(7 + 3) + 2`, then `10 + 2 = 12` so every equality is accountable.
2. **Moderate — dotted arrows to the right do not point to the next equation.** Put action labels in the margin between rows, with small downward cues, so reading order matches the page.
3. **Polish — the large pen nib competes with the actual written work.** Shrink it to a watermark or corner cue; the equation sequence should dominate.

**Revision target.** A genuinely writable four-line derivation whose algebraic conservation is visible at every step.

**Acceptance check.** No term disappears; each line follows from the previous one; parentheses make regrouping explicit; action labels follow top-to-bottom reading order.

## 14 — A relation without a scene

[Open markup](./ch01-image-markups/14_abstract_relation.svg) · Source: `art/vectors/ch01/ch01_m14_relation-without-picture.svg`

**Purpose.** Contrast an abstract/non-sensory relation with object, spatial, verbal, and motor representations.

**What already works.** Only symbolic quantities are used; the relation `7 + 5 = 10 + 2 = 12` is exact; the picture avoids diagnostic claims about thought.

1. **Moderate — large colored boxes and arrows create a strong visual scene.** That works against “without a scene.” Use quiet typographic equivalence, perhaps three expressions on one baseline with subtle equality marks.
2. **Moderate — the bent connector from `10 + 2` to `12` detours beneath the answer and makes the relation feel procedural.** Replace with a direct equality or short line; the concept is equivalence, not travel.
3. **Polish — the bottom equation rail exactly repeats the central nodes.** Remove it and allow negative space to communicate the intended restraint.

**Revision target.** The quietest composition in the chapter: precise symbols, minimal container geometry, no invented motion.

**Acceptance check.** Equality—not direction—is the primary relation; no concrete object metaphor; no duplicate full equation; accessible contrast and selectable vector text.

## Recommended production sequence

1. Fix mathematical communication in Methods 01, 06, 11, and 13.
2. Redraw the opening route and simplify Method 10's active number-line region.
3. Harmonize Method 04 with the book's illustration style and preserve unit form.
4. Reduce redundant equation rails and repeated labels across Methods 02, 03, 08, 09, 12, and 14.
5. Run quantity, grayscale, narrow-width, and alt-text checks after revisions.

## Resolution record — 2026-09-25

All recommendations above were implemented in source order and visually inspected in the rebuilt edition.

| Picture | Resolution |
| --- | --- |
| Opening | Replaced the single spanning arch with five equal hops, reorganized 7 as a five-pattern plus two, preserved addend identity with blue/hatching, and reduced the repeated title to a small kicker. |
| Method 01 | Rebuilt the touch route as an exact serpentine `1 → 12` path, moved the finish to 12, and removed the heavy grouping brackets. |
| Method 02 | Replaced field-like tap boxes with five equal tap marks, strengthened landings, and removed the duplicate equation rail. |
| Method 03 | Reduced commutativity to a compact premise, enlarged the seven-hop route, lightened the arc system, and attached start/landing labels to 5 and 12. |
| Method 04 | Refined the organic illustration with the built-in image-generation edit workflow, preserved exact anatomy and quantities, normalized panel scale, strengthened the three motion cues, and explicitly identified the two counters as the unused part of the added five. |
| Method 05 | Added a five-unit source state and five trace paths, aligned the residual pair with the same unit scale, and reduced equation dominance. |
| Method 06 | Kept the decomposed 7 entirely blue, kept the untouched 5 hatched orange, enclosed `7 = 5 + 2`, and separately braced the two fives as 10. |
| Method 07 | Preserved filled dots beneath the two X marks, gave the second seven a stable hatched identity, and attached the correction label directly to that group. |
| Method 08 | Removed the process arrow and answer box, named the optional counting check, and used quiet typographic equality. |
| Method 09 | Shifted emphasis to perceptual pattern matching, simplified the enclosing structure, and shortened the explanatory footer. |
| Method 10 | Cropped to the active 7–12 range, enlarged all five equal intervals, softened the `+1` labels, and retained only one final summary. |
| Method 11 | Standardized every block to the same dimensions, traced three source blocks into their destination cells, left two visibly loose, and simplified before/after labels. |
| Method 12 | Replaced bar-like marks with equal beat discs, removed the repeated spoken-number footer, reduced the tap-label weight, and shrank the held-start card. |
| Method 13 | Rewrote the derivation so no term disappears, moved actions into the top-to-bottom reading path, and reduced the pen cue. |
| Method 14 | Removed boxes and arrows, placed all three expressions on one equality baseline, and removed the duplicate equation rail. |

Current visual evidence is stored in `artifacts/ui/QA-IMAGE-FIXES-CH01/`.

## Audit status

- Pictures audited: **15 of 15**.
- Markups supplied: **15 of 15**.
- Source artwork revised: **15 of 15 pictures**.
- Implementation status: **all recorded recommendations resolved**.
- New sources/citations: **none**; no empirical claim was added.
