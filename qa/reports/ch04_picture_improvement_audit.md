# CH04 picture improvement audit — `72 − 39 = ?`

Task: `QA-IMAGE-PASS-CH04`
Audit date: 2026-09-26
Inventory: **13 reader-facing pictures** — one opening picture and Methods 01–12.
Coverage: **13/13 audited; 13/13 numbered markups.**

The inventory reconciles the manuscript, CH04 prompt record, method-art ledger, production vector folder, and built chapter. The historical `image_review_ch04.md` was read as input only. This pass rendered and inspected every current SVG at 1200×800 before revision. Findings describe that pre-revision state; each resolution records the final decision.

## 00 — Opening: removal and distance

[Markup](./ch04-image-markups/00_opening.svg) · Source: `art/vectors/ch04/seventy-two-minus-thirty-nine.svg`

**Purpose.** Establish subtraction as either removal or measured distance while both models arrive at 33.

**What works.** The left panel preserves `72 = 60 + 12`, subtracts 9 ones and 3 tens in separate bands, and recombines 33; the right panel keeps the +1, +30, and +2 spans distinct and labels the model as distance rather than removal.

1. **Moderate — the three blue distance spans were undirected line segments, so the visual did not itself show travel from 39 toward 72.** Add compact terminal heads to each span without covering the four milestone nodes.

**Acceptance checks.** Removal and distance remain visually distinct; all three spans point right; 39→40→70→72; heads stop before nodes; `1 + 30 + 2 = 33`. **Resolution:** implemented.

## 01 — Trade a ten

[Markup](./ch04-image-markups/01_trade_a_ten.svg) · Source: `art/vectors/ch04/ch04_m01_trade-a-ten.svg`

**Purpose.** Show the symbolic place-value states of the standard regrouping algorithm.

**What works.** The flow preserves 72, its equivalent `60 + 12`, the exact removed quantity `3 tens + 9 ones`, and the result `3T + 3O`; the final state has the strongest outline.

1. **Retain — the compact symbolic flow is exact and deliberately avoids duplicating Method 07's concrete blocks.** The manuscript brief should describe this vector flow instead of requesting a second block scene.

**Acceptance checks.** `72 = 60 + 12`; `12 − 9 = 3`; `6 − 3 = 3 tens`; final 33; labels and outlines carry meaning without color. **Resolution:** retained as-is; brief synchronized.

## 02 — Subtract forty and repair one

[Markup](./ch04-image-markups/02_subtract_forty_repair_one.svg) · Source: `art/vectors/ch04/ch04_m02_subtract-forty-repair-one.svg`

**Purpose.** Make the over-subtraction by 40 and the +1 repair visually explicit.

**What works.** The large leftward arc, close 32/33 ticks, intermediate label, double result node, and identity `39 = 40 − 1` make the compensation logic auditable.

1. **Major — both differently colored paths used a teal marker definition, so the red −40 and orange +1 strokes ended in mismatched teal heads; eight duplicate marker definitions also created repeated IDs.** Give each path one unique, color-matched terminal marker and preserve separate landings at 32 and 33.

**Acceptance checks.** Red path points 72→32; orange path points 32→33; head colors match strokes; endpoints remain distinct; exactly two unique marker IDs; final equation remains visible. **Resolution:** implemented.

## 03 — Measure the gap

[Markup](./ch04-image-markups/03_measure_the_gap.svg) · Source: `art/vectors/ch04/ch04_m03_measure-the-gap.svg`

**Purpose.** Treat subtraction as a proportional forward distance from 39 to 72.

**What works.** The +1, +30, and +2 arcs are proportional, directed, separately labeled, and bracketed as 33; no removal language appears.

1. **Minor — eight identical `qa-arrow` definitions reused the same ID.** Collapse them to one definition so the embedded SVG has unique identifiers and deterministic marker resolution.

**Acceptance checks.** One marker definition; three rightward heads; proportional 1:30:2 spans; unobscured 39, 40, 70, 72; total 33. **Resolution:** implemented; rendered appearance intentionally unchanged.

## 04 — Split thirty-nine

[Markup](./ch04-image-markups/04_split_thirty_nine.svg) · Source: `art/vectors/ch04/ch04_m04_split-thirty-nine.svg`

**Purpose.** Decompose the subtrahend into 30 and 9 and show the two resulting states.

**What works.** The decomposition card, three ordered circles, operation labels, and complete equation produce a spare, exact scan from 72 to 42 to 33.

1. **Retain — dotted connectors and explicit `−30` / `−9` labels already establish source order without adding large arrowheads.** Additional motion graphics would compete with this method's verbal-symbolic focus.

**Acceptance checks.** `39 = 30 + 9`; `72 − 30 = 42`; `42 − 9 = 33`; 33 has the strongest result outline. **Resolution:** retained as-is.

## 05 — Keep the extra two visible

[Markup](./ch04-image-markups/05_keep_extra_two.svg) · Source: `art/vectors/ch04/ch04_m05_seventy-plus-two.svg`

**Purpose.** Preserve the separated +2 while subtracting 39 from 70.

**What works.** The extra 2 has its own outlined tile, 31 is explicitly marked intermediate, and 33 is double framed; the bottom identity preserves every term.

1. **Retain — the correction is already impossible to lose and all connectors remain subordinate.** A balance or moving-token overlay would duplicate the written identity without improving fidelity.

**Acceptance checks.** `72 = 70 + 2`; `70 − 39 = 31`; `31 + 2 = 33`; only 33 reads as final. **Resolution:** retained as-is.

## 06 — Jump back thirty-nine

[Markup](./ch04-image-markups/06_jump_back_thirty_nine.svg) · Source: `art/vectors/ch04/ch04_m06_jump-back-thirty-nine.svg`

**Purpose.** Show exactly two leftward jumps, −30 and −9, from 72 to 33.

**What works.** Both heads point left, each landing is aligned with its tick, and the dashed bracket groups the whole 39-unit move.

1. **Minor — eight identical marker definitions reused the same ID even though the picture needs one shared teal head.** Collapse them to one unique definition without changing the geometry.

**Acceptance checks.** One marker definition; 72→42 by −30; 42→33 by −9; both heads remain leftward; bracket and equation remain clear. **Resolution:** implemented; rendered appearance intentionally unchanged.

## 07 — Unbundle base ten

[Markup](./ch04-image-markups/07_unbundle_base_ten.svg) · Source: `art/vectors/ch04/ch04_m07_unbundle-base-ten.svg`

**Purpose.** Make regrouping concrete through countable rods and units across before, regrouped, and after states.

**What works.** The panels contain exactly 7 rods + 2 units, 6 rods + 12 units, and 3 rods + 3 units; borders, headings, and position distinguish states without color.

1. **Major — all three single-line panel headings touched or crossed their panel borders, especially `REGROUP · 6 tens + 12 ones`, weakening hierarchy and narrow-width legibility.** Split each heading into a short state label and a second quantity line inside its panel.

**Acceptance checks.** All headings contained; exact object counts 7+2, 6+12, and 3+3; transition cues stay in gutters; result 33 remains dominant. **Resolution:** implemented.

## 08 — Make change

[Markup](./ch04-image-markups/08_make_change.svg) · Source: `art/vectors/ch04/ch04_m08_make-change.svg`

**Purpose.** Represent 33 cents as both a count-up gap and three dimes plus three pennies.

**What works.** Coin sizes, labels, position, and outlines redundantly distinguish dimes from pennies; all six tokens and the 33¢ identity are exact.

1. **Critical — the pre-revision milestone spacing was not proportional: 39→40 used 30 px, 40→70 used 770 px, and 70→72 used 60 px.** Rebuild the milestones at one 20-px-per-cent scale.
2. **Major — +1¢, +30¢, and +2¢ floated above the line without spans or direction.** Add three forward arcs with compact terminal heads.
3. **Moderate — after proportional placement, the close 70¢ and 72¢ labels collided.** Use outward text anchors so both remain distinct.

**Acceptance checks.** 39 at x=220, 40 at x=240, 70 at x=840, 72 at x=880; span lengths 20:600:40 = 1:30:2; all heads point right; close labels separated; exactly three dime and three penny tokens; total 33¢. **Resolution:** all implemented.

## 09 — Missing addend

[Markup](./ch04-image-markups/09_missing_addend.svg) · Source: `art/vectors/ch04/ch04_m09_missing-addend.svg`

**Purpose.** Turn `72 − 39` into the related addition question `39 + □ = 72`.

**What works.** The blank equation, ordered 39/69/72 nodes, +30/+3 labels, and final identity make the inverse relation explicit without pretending to show a sensory scene.

1. **Retain — the dotted connectors support an abstract relation rather than physical travel, and the operation labels make sequence unambiguous.** Arrowheads would misleadingly turn this into another number-line picture.

**Acceptance checks.** `39 + 30 = 69`; `69 + 3 = 72`; blank = 33; `39 + 33 = 72`; no color-only dependency. **Resolution:** retained as-is.

## 10 — Whole-part bar

[Markup](./ch04-image-markups/10_whole_part_bar.svg) · Source: `art/vectors/ch04/ch04_m10_whole-part-bar.svg`

**Purpose.** Encode 72 as a proportional whole split into known 39 and unknown 33.

**What works.** The 1000-px bar uses exact widths for 30, 9, and 33; labels, subdivision, outline weight, and a double result frame remain meaningful in grayscale.

1. **Retain — the proportional geometry is exact to rounding and every part is labeled.** Added braces or arrows would repeat the whole/part labels and crowd the strongest static model in the chapter.

**Acceptance checks.** Widths 416.667 + 125 + 458.333 = 1000; known = 39; unknown = 33; whole = 72; `72 = 39 + 33`. **Resolution:** retained as-is.

## 11 — Hear the algorithm

[Markup](./ch04-image-markups/11_hear_the_algorithm.svg) · Source: `art/vectors/ch04/ch04_m11_hear-the-algorithm.svg`

**Purpose.** Carry regrouping as an ordered inner-spoken checklist while retaining a small written verification.

**What works.** Four numbered ribbons preserve the verbal sequence and the inset aligns 72, 39, and 33 by place value.

1. **Moderate — ribbon 2 extended beneath the written inset, creating a hidden overlap and weakening the separation between verbal and written representations.** Shorten that ribbon to end at the same safe right edge as ribbons 1 and 3.

**Acceptance checks.** Four complete statements; no ribbon underlaps the inset; inset digits and rule remain unobscured; result 33 appears in both forms. **Resolution:** implemented.

## 12 — Mental page

[Markup](./ch04-image-markups/12_mental_page.svg) · Source: `art/vectors/ch04/ch04_m12_mental-page.svg`

**Purpose.** Show Method 01's regrouping as imagined written marks rather than blocks or spoken steps.

**What works.** The dashed translucent page, aligned subtraction, rewrite values 6 and 12, and bottom place-value sentence communicate a mental workspace without inventing a hand.

1. **Critical — a large red X crossed the whole numeral 72, visually implying deletion of the value rather than separate rewrites of the 7 tens and 2 ones.** Replace it with one short strike on the 7 and one short strike on the 2, leaving the new 6 and 12 clearly paired above.

**Acceptance checks.** Only the 7 and 2 receive individual marks; 6 aligns with tens and 12 with ones; 39 and 33 remain untouched; no physical page or hand is implied. **Resolution:** implemented.

## Resolution summary

- Pictures audited: **13/13**.
- Markups supplied: **13/13**.
- Pictures with accepted source revisions: **8/13** (Opening and Methods 02, 03, 06, 07, 08, 11, and 12).
- Pictures explicitly retained with rationale: **5/13** (Methods 01, 04, 05, 09, and 10).
- Raster assets: **none**; anatomy, digit-count, laterality, native-raster, and raster-text checks are not applicable.
- Manuscript synchronization: Methods 01, 07, 08, and 12 briefs plus the paired-spread description updated; repeated constructed-account boilerplate removed under the existing CH01 reusable lesson while the chapter disclosure and one gallery-level framing sentence remain.
- Prompt/provenance synchronization: CH04 prompt record, method-art ledger, opening sidecar, and changed SVG descriptions/QA metadata updated.
- New empirical sources or citations: **none**.

## Final visual QA

- Current 1200×800 renders for all 13 pictures were inspected individually after the last source edit.
- A 390 px evidence sheet was inspected for narrow-width containment and legibility for every picture.
- Material grayscale checks covered the opening distinction, Method 02 path identity, Method 07 countable stages, Method 08 proportional route/coin identity, and Method 12 digit-specific rewrites.
- Evidence: `artifacts/ui/QA-IMAGE-PASS-CH04/`.
- Result: **13/13 visual QA passed; no unresolved finding remains.**
