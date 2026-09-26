# CH02 picture improvement audit — `15 − 8 = ?`

Task: `QA-IMAGE-PASS-CH02`
Audit date: 2026-09-26
Inventory: **13 reader-facing pictures** — one opening picture and Methods 01–12.
Coverage: **13/13 audited; 13/13 numbered markups.**

The historical `image_review_ch02.md` was treated as input only. This pass re-opened every production SVG, inspected every rendered picture at intended size, and inspected both source rasters at their native 1536×1024 resolution. Findings below describe the pre-revision state; each resolution records the final decision.

## 00 — Opening: removal and distance

[Markup](./ch02-image-markups/00_opening.svg) · Source: `art/vectors/ch02/fifteen-minus-eight.svg`

**Purpose.** Establish the chapter’s central contrast: subtraction as removal versus subtraction as a static distance.

**What works.** Both panels receive equal area; the removal panel contains exactly 15 counters partitioned as 7 solid plus 8 dashed; the line spans exactly seven equal intervals from 8 through 15. Labels, fill state, border style, position, and numerals make the contrast usable without color.

1. **Retain — the opening already meets the pass.** Adding more arrows or secondary copy would weaken the clean conceptual comparison.

**Acceptance checks.** `7 + 8 = 15`; seven proportional intervals; removal and distance remain visibly distinct; no color-only meaning. **Resolution:** retained as-is with rationale.

## 01 — Remove eight counters

[Markup](./ch02-image-markups/01_remove_counters.svg) · Source: `art/composites/ch02/ch02_m01_remove-eight-counters.svg`

**Purpose.** Show a take-away action while preserving an auditable before/after partition of 15.

**What works.** The same hatch identifies all eight selected and moved counters; seven solid counters remain; the native raster contains one plausible five-digit hand and no mathematical text or countable objects.

1. **Major — the trajectory crossed the hand and competed with the countable evidence.** Remove the over-hand path and use numbered `before`/`after` tabs; the stable hatch already preserves identity.
2. **Retain — no raster edit is warranted.** At native resolution the hand has plausible anatomy, a consistent orientation, and does not cover any counter center.

**Acceptance checks.** 15 source positions, 8 hatched destinations, 7 remaining; no arrow or label crosses the hand; raster remains text-free. **Resolution:** finding 1 implemented; finding 2 explicitly retained.

## 02 — Count backward eight beats

[Markup](./ch02-image-markups/02_count_back.svg) · Source: `art/vectors/ch02/ch02_m02_count-back-eight-beats.svg`

**Purpose.** Pair eight rhythmic cues with eight one-unit moves from 15 to 7.

**What works.** Nine labeled positions create exactly eight intervals; landing dots and beat numbers establish one-to-one tracking; 15 is explicitly excluded from the step count.

1. **Major — filled marker heads obscured too much of the landing lane.** End each stroke before a separate compact triangle.
2. **Moderate — alternating vertical lanes can look decorative.** Retain them only because beat numbers, equal stroke length, and landing dots make all eight moves independently auditable.

**Acceptance checks.** Eight strokes, eight small heads, eight numbered beats, eight landing dots, endpoint 7. **Resolution:** finding 1 implemented; finding 2 retained with rationale.

## 03 — Count up to fifteen

[Markup](./ch02-image-markups/03_count_up.svg) · Source: `art/vectors/ch02/ch02_m03_count-up-to-fifteen.svg`

**Purpose.** Build the difference as adjacent distances 2 and 5.

**What works.** The 8→10 arc spans two equal intervals and 10→15 spans five; the lower bracket preserves the total distance 7.

1. **Major — marker heads sat over the 10 and 15 endpoints.** Separate compact heads from the arc strokes and add visible start/join/finish dots.

**Acceptance checks.** Proportional 2- and 5-unit arcs; all three critical endpoints visible; combined gap 7. **Resolution:** implemented.

## 04 — Subtract five, then three

[Markup](./ch02-image-markups/04_subtract_five_three.svg) · Source: `art/vectors/ch02/ch02_m04_subtract-five-then-three.svg`

**Purpose.** Show 8 decomposed into 5 and 3 and removed in two stages.

**What works.** The nodes 15, 10, and 7 and the `8 = 5 + 3` card agree exactly.

1. **Moderate — large triangular markers overwhelmed the simple stage changes.** Shorten each connector and use a small separated head.

**Acceptance checks.** `15 − 5 = 10`, `10 − 3 = 7`, and `5 + 3 = 8`; connector heads touch no node or label. **Resolution:** implemented.

## 05 — Subtract ten, add two

[Markup](./ch02-image-markups/05_compensation.svg) · Source: `art/vectors/ch02/ch02_m05_subtract-ten-add-two.svg`

**Purpose.** Explain compensation as an ordered overshoot and repair.

**What works.** Tick spacing is proportional and both the net-change equation and final result are exact.

1. **Major — crossing arcs and oversized heads made the order ambiguous.** Put Step 1 above the line and Step 2 below it, with separated compact heads.
2. **Moderate — 5 risked reading as the answer.** Label it `intermediate` and keep 7 double-marked as the final result.

**Acceptance checks.** First route 15→5 spans ten units; second 5→7 spans two; route order is explicit; 7 is final. **Resolution:** both implemented.

## 06 — Inverse missing addend

[Markup](./ch02-image-markups/06_inverse.svg) · Source: `art/vectors/ch02/ch02_m06_inverse-missing-addend.svg`

**Purpose.** Re-express subtraction as the equivalent missing-addend relation.

**What works.** The bar is exactly partitioned in the ratio 8:7 and fills a whole of 15; hatching and outlines supplement color.

1. **Moderate — a large one-way process arrow implied that the equality changed value.** Replace it with a compact two-way `same fact` cue.

**Acceptance checks.** Both equations remain equivalent; 8/15 and 7/15 bar widths; no motion metaphor dominates. **Resolution:** implemented.

## 07 — Measure the gap

[Markup](./ch02-image-markups/07_gap.svg) · Source: `art/vectors/ch02/ch02_m07_measure-seven-unit-gap.svg`

**Purpose.** Present difference as a static seven-unit interval, not removal.

**What works.** Seven equal intervals, a 2+5 subdivision, heavy/double whole bracket, no arrow, and generous whitespace make this a chapter benchmark.

1. **Retain — no revision is justified.** Additional endpoint symbols would duplicate the existing ticks and brackets.

**Acceptance checks.** Static 8–15 distance; exact 2+5 partition; no removal cue. **Resolution:** retained as-is.

## 08 — Track eight steps with one hand

[Markup](./ch02-image-markups/08_hand_tracking.svg) · Source: `art/composites/ch02/ch02_m08_eight-tracking-marks.svg`

**Purpose.** Use one finger as a motor tracking aid for eight decrements.

**What works.** The native raster contains one plausible hand with an extended index and visible thumb; the eight mathematical marks and outcomes are exact selectable vector overlays.

1. **Moderate — the finger sits between marks 4 and 5 while the full sequence is visible, but that temporal snapshot was unexplained.** Group marks 1–4 with outline/fill and label the position `hand shown after tap 4`.
2. **Retain — folded digits need not be artificially exposed.** The hand is anatomically plausible at original resolution and does not purport to depict eight fingers.

**Acceptance checks.** Marks 1–8 map to 14–7; current touch is unambiguous; raster has no text or countable math. **Resolution:** finding 1 implemented; finding 2 retained.

## 09 — Eight plus seven bar

[Markup](./ch02-image-markups/09_bar.svg) · Source: `art/vectors/ch02/ch02_m09_eight-plus-seven-bar.svg`

**Purpose.** Show the unknown difference as the missing part of a static whole.

**What works.** Exactly 15 equal cells split 8/7; braces, hatching, labels, and the equation all agree.

1. **Retain — this is already the clearest static part-whole picture in the chapter.** Motion would change the represented strategy.

**Acceptance checks.** 15 equal cells, 8 known, 7 missing; readable without color; no movement. **Resolution:** retained as-is.

## 10 — Ten and five

[Markup](./ch02-image-markups/10_ten_and_five.svg) · Source: `art/vectors/ch02/ch02_m10_ten-and-five.svg`

**Purpose.** Remove 8 from a ten-frame and recombine the remaining 2 with an untouched 5.

**What works.** The ten-frame and five-dot group are clearly separated; two green cells and five blue dots make the result 7.

1. **Major — one large X crossed only the first six cells even though eight cells were hatched.** Put a discrete X inside every one of the eight removed cells.

**Acceptance checks.** Eight and only eight individually crossed cells; two uncrossed cells; five untouched dots; `2 + 5 = 7`. **Resolution:** implemented.

## 11 — Retrieve seven

[Markup](./ch02-image-markups/11_retrieval.svg) · Source: `art/vectors/ch02/ch02_m11_retrieve-seven.svg`

**Purpose.** Represent direct fact retrieval without inventing a sensory mechanism or route.

**What works.** No brain imagery or speed claim appears; the inverse check is mathematically exact.

1. **Major — the forward arrow and return loop invented a conspicuous process for an account defined by no reported intermediate steps.** Replace both with quiet typographic equality.
2. **Moderate — the optional check competed with the main relation.** Keep it in a smaller detached card labeled `later check`.

**Acceptance checks.** `15 − 8 = 7` dominates; no route or object metaphor; check is later and subordinate. **Resolution:** both implemented.

## 12 — Regrouped written subtraction

[Markup](./ch02-image-markups/12_written.svg) · Source: `art/vectors/ch02/ch02_m12_regrouped-written-subtraction.svg`

**Purpose.** Preserve place value while exchanging one ten for ten ones, then subtract eight ones.

**What works.** The sequence explicitly states `1 ten + 5 ones = 0 tens + 15 ones` and ends with 7 ones; `07` is identified as notation for 7.

1. **Moderate — large markers visually merged the explanation stage with the arithmetic stage.** Use short strokes ending before compact separate heads.
2. **Major — the red X crossed both digits of 15, visually suggesting the whole value was cancelled.** Replace it with one short strike through the tens digit only and label the action `exchange 1 ten`; the middle panel states the conserved value.

**Acceptance checks.** Place value remains 15 through regrouping; only the tens digit is marked for exchange; 15 ones − 8 ones = 7 ones; connectors obscure no panel. **Resolution:** both findings implemented.

## Resolution summary

- Pictures audited: **13/13**.
- Markups supplied: **13/13**.
- Pictures with accepted source revisions: **10/13** (Methods 01–06, 08, 10–12).
- Pictures explicitly retained with rationale: **3/13** (Opening, Methods 07 and 09), plus scoped retained findings in Methods 01, 02, and 08.
- Raster replacements: **0**; both existing rasters passed native-resolution anatomy, digit, orientation, object-count, and raster-text inspection.
- New empirical sources or citations: **none**.

## Final visual QA

- Current 1200×800 renders for all 13 pictures were inspected individually after the last source edit.
- Both raster sources were reinspected at their native 1536×1024 resolution.
- The 390 px evidence sheet was inspected for narrow-width containment and legibility.
- Material grayscale checks covered raster/vector identity (M01), ordered bidirectional motion (M05), removed-versus-remaining cells (M10), and abstract hierarchy (M11).
- Evidence: `artifacts/ui/QA-IMAGE-PASS-CH02/`.
- Result: **13/13 visual QA passed; no unresolved finding remains.**
