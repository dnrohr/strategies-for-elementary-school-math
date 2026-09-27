# CH05 picture improvement audit — `11 × 12 = ?`

Task: `QA-IMAGE-PASS-CH05`

Audit date: 2026-09-26

Inventory: **21 reader-facing pictures** — one opening picture and Methods 01–20.
Coverage: **21/21 audited; 21/21 numbered markups.**

The inventory reconciles the manuscript, CH05 prompt records, method-art ledger, production vector/composite folders, embedded raster provenance, and built chapter mapping. The historical `image_review_ch05.md` was read as input only. Every production SVG was rendered and inspected individually at 1200×800 before revision; both embedded hand rasters were also inspected at their native 1536×1024 resolution. Findings describe that pre-revision state, and each resolution records the final decision.

## 00 — Opening: grouped structure

[Markup](./ch05-image-markups/00_opening.svg) · Source: `art/vectors/ch05/eleven-by-twelve.svg`

**Purpose.** Establish `11×12` as ten rows plus one row and, independently, as an 11-by-(10+2) area split.

**What works.** The left model visibly preserves 120 and 12 as separate row groups; the right panel uses a proportional 10:2 width split and exact partial products. Outlines, labels, and position remain meaningful without color.

1. **Retain — the opening already prioritizes grouped structure over auditing 132 individual dots.** The exact row and column subdivisions remain visible, while the two decomposition routes avoid duplicating Method 09's dot array.

**Acceptance checks.** Ten full rows plus one full 12-cell row; `120+12=132`; proportional 10+2 split; `110+22=132`; labels contained at 390 px. **Resolution:** retained as-is.

## 01 — The answer arrives

[Markup](./ch05-image-markups/01_direct_retrieval.svg) · Source: `art/vectors/ch05/ch05_m01_direct-retrieval.svg`

**Purpose.** Represent direct retrieval without fabricating intermediate sensory content.

**What works.** A sparse expression/result pair, dotted relation, and double result frame keep 132 dominant and make no unsupported process claim.

1. **Retain — adding steps or motion would contradict the method's immediate-retrieval phenomenology.**

**Acceptance checks.** `11×12` and 132 only; no false intermediate operation; result hierarchy survives grayscale. **Resolution:** retained as-is.

## 02 — The table phrase

[Markup](./ch05-image-markups/02_table_phrase.svg) · Source: `art/vectors/ch05/ch05_m02_table-phrase.svg`

**Purpose.** Show the product as remembered number words and an eleven-beat cadence.

**What works.** The exact spoken phrase, eleven evenly spaced marks, and written fact distinguish auditory cadence from the final symbolic record.

1. **Moderate — the decorative cadence curve crossed the quoted phrase, reducing letter clarity.** Move the curve into a separate upper lane inside the ribbon.

**Acceptance checks.** Phrase unobscured; exactly eleven beat circles; `11×12=132`; no speech-bubble tail; no color-only distinction. **Resolution:** implemented.

## 03 — Ten twelves and one more

[Markup](./ch05-image-markups/03_ten_twelves_plus_one.svg) · Source: `art/vectors/ch05/ch05_m03_ten-twelves-plus-one.svg`

**Purpose.** Show distributive decomposition of 11 into 10 and 1.

**What works.** Three aligned state columns preserve the split, both partial products, and the final sum without decorative motion.

1. **Retain — the static reading order is sufficient because every term is written and the bottom identity recombines both partial products.**

**Acceptance checks.** `11=10+1`; `10×12=120`; `1×12=12`; `120+12=132`; no term disappears. **Resolution:** retained as-is.

## 04 — Twelve twelves minus twelve

[Markup](./ch05-image-markups/04_square_minus_row.svg) · Source: `art/vectors/ch05/ch05_m04_square-minus-row.svg`

**Purpose.** Make compensation concrete by removing one complete row from a 12-by-12 square.

**What works.** The removed row keeps all 12 cells visible under a red cross, the remaining 11 rows stay countable, and the equation states the conservation explicitly.

1. **Retain — the crossed row is an intentional subtraction state, not hidden deletion, and its separate outline prevents ambiguity with a single removed unit.**

**Acceptance checks.** Starting grid 12×12; exactly one 12-cell row removed; 11 rows remain; `144−12=132`. **Resolution:** retained as-is.

## 05 — Eleven tens and eleven twos

[Markup](./ch05-image-markups/05_eleven_tens_and_twos.svg) · Source: `art/vectors/ch05/ch05_m05_eleven-tens-and-twos.svg`

**Purpose.** Split twelve columns into adjoining 10-column and 2-column partial areas.

**What works.** The 10:2 widths are proportional, all 11 rows continue across the join, and both partial products are labeled within their own regions.

1. **Retain — the inset labels cover some cells but deliberately prioritize the partial products; the surrounding rule and uninterrupted grid still make the 11×10 and 11×2 geometry auditable.**

**Acceptance checks.** 11 rows; widths 10+2; no overlap or gap at the join; `110+22=132`; labels remain inside their regions. **Resolution:** retained as-is.

## 06 — Repeated addition

[Markup](./ch05-image-markups/06_repeated_addition.svg) · Source: `art/vectors/ch05/ch05_m06_repeated-addition.svg`

**Purpose.** Show eleven explicit groups of 12 and the cumulative total after each group.

**What works.** Exactly eleven equal cards appear in one row; the eleven totals are large enough to read and terminate at 132.

1. **Retain — the single-row repetition is the mathematical point, and further 5+5+1 regrouping would introduce a second strategy.**

**Acceptance checks.** Eleven cards labeled 12; eleven running totals from 12 through 132; `11 groups×12=132`; no clipped text. **Resolution:** retained as-is.

## 07 — Skip-count beats

[Markup](./ch05-image-markups/07_skip_count_beats.svg) · Source: `art/vectors/ch05/ch05_m07_skip-count-beats.svg`

**Purpose.** Pair eleven rhythmic beats with the multiples of twelve.

**What works.** Beat numbers 1–11 and the complete multiple sequence provide two independent count channels, while the endpoint statement reinforces beat 11.

1. **Retain — the horizontal beat rail is legible at intended and narrow widths and does not rely on hue to encode count.**

**Acceptance checks.** Exactly eleven beat nodes; multiples 12, 24, …, 132; beat 11 maps to 132. **Resolution:** retained as-is.

## 08 — Eleven number-line jumps

[Markup](./ch05-image-markups/08_number_line_jumps.svg) · Source: `art/vectors/ch05/ch05_m08_eleven-number-line-jumps.svg`

**Purpose.** Show eleven equal forward lengths of 12 on a number line.

**What works.** Six jumps end at 72 in the first row and five continue from the repeated 72 in the second; every arc is directed and every landing is labeled.

1. **Retain — the explicit title and repeated 72 make the two-row continuation clear while preserving larger labels than a single 132-unit rail permits.**

**Acceptance checks.** Exactly 11 arcs; each labeled +12; ordered landings 0→12→…→132; row break preserves 72; all arrowheads stop before nodes. **Resolution:** retained as-is.

## 09 — Eleven rows of twelve

[Markup](./ch05-image-markups/09_array.svg) · Source: `art/vectors/ch05/ch05_m09_eleven-by-twelve-array.svg`

**Purpose.** Present multiplication as an exact rectangular array of discrete dots.

**What works.** The array has 11 visually separable rows and 12 columns; exterior braces, dimension labels, and the total keep both factors explicit.

1. **Retain — the dense array is the method itself, and the exterior labels leave all 132 dots unobscured.**

**Acceptance checks.** 132 complete dots; 11 rows; 12 columns; braces remain outside the array; result text contained. **Resolution:** retained as-is.

## 10 — Area, not perimeter

[Markup](./ch05-image-markups/10_rectangle_area.svg) · Source: `art/vectors/ch05/ch05_m10_rectangle-area.svg`

**Purpose.** Treat the same 11-by-12 geometry as covered area measured in square units.

**What works.** All 132 unit cells remain unobscured and the exterior side labels distinguish area from perimeter.

1. **Major — the result text extended beyond the left edge of its green card, weakening containment and narrow-width hierarchy.** Widen the card and slightly reduce the line's type size without covering the grid.

**Acceptance checks.** 11×12 complete unit squares; all dimension labels external; full result text inside its card; `132 square units` remains explicit. **Resolution:** implemented.

## 11 — Eleven groups of twelve

[Markup](./ch05-image-markups/11_eleven_groups.svg) · Source: `art/vectors/ch05/ch05_m11_eleven-groups.svg`

**Purpose.** Show eleven equal, concrete groups before combining their total.

**What works.** The two-row layout, group numbers, and one spanning brace make the group count easy to scan without a misleading pouring metaphor.

1. **Major — each pre-revision card displayed only the numeral 12, while the manuscript and ledger claimed twelve visible counters per group.** Replace each numeral with a countable 3×4 array and retain the group number and single total brace.

**Acceptance checks.** Exactly eleven cards; exactly twelve counters in each; 132 counters total; group labels 1–11; one brace; `11 equal groups×12=132`. **Resolution:** implemented.

## 12 — The ×11 pattern

[Markup](./ch05-image-markups/12_times_eleven_pattern.svg) · Source: `art/vectors/ch05/ch05_m12_times-eleven-pattern.svg`

**Purpose.** Explain the no-carry ×11 digit pattern for the specific input 12.

**What works.** The outer 1 and 2, central `1+2=3`, formed 132, caution box, and distributive check prevent the pattern from appearing unconditional.

1. **Retain — the caution and `120+12` verification already supply the needed boundary and place-value grounding.**

**Acceptance checks.** Outer digits remain 1 and 2; middle digit is 3; result 132; carry caveat present; exact check visible. **Resolution:** retained as-is.

## 13 — Double, then halve

[Markup](./ch05-image-markups/13_double_and_halve.svg) · Source: `art/vectors/ch05/ch05_m13_double-and-halve.svg`

**Purpose.** Show the product-preserving transformation `11×12=22×6`.

**What works.** Separate double/halve cards, six equal groups of 22, and the full equality make both changed factors and the conserved product explicit.

1. **Retain — the transformation is balanced by labels and equal-group geometry; extra arrows would add motion without mathematical information.**

**Acceptance checks.** `11→22`; `12→6`; exactly six groups of 22; `11×12=22×6=132`. **Resolution:** retained as-is.

## 14 — Regroup the factors

[Markup](./ch05-image-markups/14_regroup_factors.svg) · Source: `art/vectors/ch05/ch05_m14_regroup-factors.svg`

**Purpose.** Factor 12 as 3×4, then associate 11×3 before multiplying by 4.

**What works.** The three factor tiles retain every multiplication sign, compact connectors terminate before their targets, and the full equality chain removes ambiguity.

1. **Retain — the connector hierarchy is subordinate to the written equality and accurately leads from the 11×3 grouping to `33×4` and 132.**

**Acceptance checks.** `12=3×4`; `(11×3)×4`; `33×4=132`; connector heads do not cover borders or labels. **Resolution:** retained as-is.

## 15 — Powers of two

[Markup](./ch05-image-markups/15_powers_of_two.svg) · Source: `art/vectors/ch05/ch05_m15_powers-of-two.svg`

**Purpose.** Build partial products by doubling and select 8+2+1 groups to make 11.

**What works.** Four exact rungs culminate at 96; the unused 4-group rung has a dashed neutral outline, and the final sum preserves only the selected partial products.

1. **Major — the pre-revision `not selected` label sat under `2×12`, contradicting the dashed inactive `4×12` rung and the selected decomposition.** Center the label under 4×12.

**Acceptance checks.** Rungs 1, 2, 4, 8 equal 12, 24, 48, 96; only 4 is marked not selected; `11=8+2+1`; `96+24+12=132`. **Resolution:** implemented.

## 16 — Written long multiplication

[Markup](./ch05-image-markups/16_long_multiplication.svg) · Source: `art/vectors/ch05/ch05_m16_long-multiplication.svg`

**Purpose.** Record the standard partial products by place value.

**What works.** Large aligned numerals, two rules, explicit 120, and the note on the zero keep the tens-row meaning visible.

1. **Retain — the sparse written workspace already distinguishes 12 from 120 without adding a redundant place-value grid.**

**Acceptance checks.** 12×11; partial products 12 and 120 aligned; result 132; zero note unobscured. **Resolution:** retained as-is.

## 17 — Fingers as a group counter

[Markup](./ch05-image-markups/17_fingers_group_counter.svg) · Source: `art/composites/ch05/ch05_m17_fingers-group-counter.svg`

**Purpose.** Use ten fingers for groups 1–10 and one separate tally for group 11, while a vector unit card defines one group as twelve.

**What works.** Native inspection confirms two plausible hands, five digits each, coherent left/right orientation, and no raster text. The overlay has twelve counters, ten numbered fingertips, one external tally, and an exact final equation.

1. **Moderate — the total equation encroached on the lower-right edge of the group-11 tally card.** Move the total into a smaller, lower summary lane while retaining the spatial and stylistic separation between the external card and anatomy.

**Acceptance checks.** Ten plausible fingers + one external tally = 11 groups; unit card has 12 counters; `120+12=132`; total clears the tally card; all math remains vector; grayscale cues survive. **Resolution:** implemented; hands retained as essential embodied context.

## 18 — Tap each twelve

[Markup](./ch05-image-markups/18_tap_each_twelve.svg) · Source: `art/composites/ch05/ch05_m18_tap-each-twelve.svg`

**Purpose.** Use one tap per group while numerals preserve the cumulative amount.

**What works.** Native inspection confirms one plausible right hand with a naturally extended index finger, coherent remaining digits/wrist, an empty paper strip, and no raster text. The overlay supplies all eleven exact totals.

1. **Major — the fingertip was visibly aligned with beat 8 while all eleven beats used identical styling and the caption implied a completed sequence.** Name the moment as immediately after tap 8, use solid outlines for completed beats 1–8 and dashed outlines for pending beats 9–11, and state the three-step continuation to 132.

**Acceptance checks.** Exactly 11 beats and totals; fingertip aligns with beat 8; solid/dashed state distinction works without color; after tap 8 = 96; pending totals 108, 120, 132; all text remains vector. **Resolution:** implemented.

## 19 — Moving numerals

[Markup](./ch05-image-markups/19_moving_numerals.svg) · Source: `art/vectors/ch05/ch05_m19_moving-numerals.svg`

**Purpose.** Depict the distributive equality as a sequence of imagined symbolic rearrangements.

**What works.** Three state cards, thin dashed trajectories, small terminal heads, and the complete bottom identity keep motion subordinate to conserved value.

1. **Retain — the paths stop in open gutters and the equality rail preserves every term, so further animation cues would duplicate the established sequence.**

**Acceptance checks.** `11×12`; `(10×12)+(1×12)`; `120+12`; 132; no path or head covers text/borders; no raster text. **Resolution:** retained as-is.

## 20 — A silent equality

[Markup](./ch05-image-markups/20_silent_equality.svg) · Source: `art/vectors/ch05/ch05_m20_silent-equality.svg`

**Purpose.** Show one abstract relation in three equal forms without sensory or motion metaphor.

**What works.** Static cards and two equality signs link the original product, decomposition, and result; the subtitle and final sentence reinforce simultaneous equivalence.

1. **Retain — arrows would contradict the intended non-sequential equality and make this duplicate Method 19.**

**Acceptance checks.** All three expressions exact; equals signs visible; no directional cues; decomposition preserves both terms; result 132. **Resolution:** retained as-is.

## Resolution summary

- Pictures audited: **21/21**.
- Markups supplied: **21/21**.
- Pictures with accepted source revisions: **6/21** (Methods 02, 10, 11, 15, 17, and 18).
- Pictures explicitly retained with rationale: **15/21** (Opening and Methods 01, 03–09, 12–14, 16, and 19–20).
- Raster assets: **2**; both native 1536×1024 rasters passed anatomy, digit-count, laterality, gesture, object/mark absence, and raster-text inspection. No raster regeneration was needed.
- Manuscript synchronization: Method 18's brief now records its exact temporal state; the repeated per-method constructed-account boilerplate was removed under reusable lesson 12 while the chapter-level disclosure remains intact.
- Prompt/provenance synchronization: flagship prompt, Method 18 overlay specification, both raster provenance notes, opening sidecar, method-art ledger, and changed SVG descriptions were updated.
- Reusable lessons: existing lessons 2, 6, 7, 9, 10, 12, and 13 were applied; **no genuinely new lesson was added**.
- New empirical sources or citations: **none**.

## Final visual QA

- Current 1200×800 renders for all 21 pictures were inspected individually after the last source edit.
- A 390 px evidence sheet was inspected for narrow-width containment and legibility for every picture.
- Material grayscale checks cover the opening and Methods 02, 10, 11, 15, 17, and 18.
- Both final composites and both native rasters were re-inspected for anatomy and overlay alignment.
- Evidence: `artifacts/ui/QA-IMAGE-PASS-CH05/`.
- Result: **21/21 visual QA passed; no unresolved finding remains.**
