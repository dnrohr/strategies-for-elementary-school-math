# CH10 picture improvement audit — `23 candies shared among 5 children`

Task: `QA-IMAGE-PASS-CH10`

Audit date: 2026-09-28

Inventory: **11 reader-facing pictures** — one opening picture and Methods 01–10.
Coverage: **11/11 audited; 11/11 numbered markups.**

The inventory reconciles the manuscript, CH10 prompt, method-art ledger, vector/composite/raster folders, built chapter mapping, and historical `image_review_ch10.md`. CH10 contains eleven production SVGs and no raster-backed pictures. Every SVG was rendered and inspected individually at 1200×800 before revision. Findings below describe the pre-revision state; each resolution records the final decision.

## 00 — Opening: one decomposition, two contextual answers

[Markup](./ch10-image-markups/00_opening.svg) · Source: `art/vectors/ch10/twenty-three-shared-by-five.svg`

**Purpose.** Introduce `23 = 5 × 4 + 3` and distinguish a whole-unit remainder answer from a fractional-sharing answer.

**What works.** Five dashed groups each contain four units, the three leftovers occupy a separate lane, and the side panel explains both answer conventions with selectable vector text.

1. **Major — the pre-revision heading `23 ÷ 5 = 4 R3 = 4 3/5` placed an equality sign between a quotient–remainder notation and a numerical mixed number, implying a false or at least convention-dependent equality chain.** State that the division has two context-dependent answers and name the whole/divisible cases without chaining them by equality.

**Revision target.** Preserve the exact shared decomposition while separating the answer conventions editorially.

**Acceptance checks.** Five groups of four; three separate leftovers; `5 × 4 = 20`; `20 + 3 = 23`; no equality chain between `4 R3` and `4 3/5`; useful title/description. **Resolution:** implemented.

## 01 — Deal one candy at a time

[Markup](./ch10-image-markups/01_deal_equal_rounds.svg) · Source: `art/vectors/ch10/ch10_m01_deal-equal-rounds.svg`

**Purpose.** Show the final state of four complete dealing rounds among five recipients.

**What works.** Five identical bowls each hold exactly four countable candies, the three leftovers remain in a distinct dashed dish, and the equation verifies all 23 objects.

1. **Retain — identical bowl geometry, explicit per-bowl counts, the separated remainder, and the verifying equation already communicate fairness without depending on color.**

**Revision target.** Preserve the uncluttered equal-share result.

**Acceptance checks.** Five bowls; four candies in each; three in the remainder dish; total 23; readable at placed size. **Resolution:** retained as-is.

## 02 — Repeated subtraction

[Markup](./ch10-image-markups/02_repeated_subtraction.svg) · Source: `art/vectors/ch10/ch10_m02_repeated-subtraction.svg`

**Purpose.** Count four complete groups by moving left in exact steps of five from 23 to 3.

**What works.** The five labeled endpoints are equally spaced, all four `−5` labels are correct, and the equation rail states the complete landing sequence.

1. **Major — the pre-revision SVG retained four legacy free-floating triangular direction heads in addition to its terminal markers, creating eight apparent direction cues and leaving several triangles detached from any path.** Remove the obsolete heads, use exactly one joined head per arc, and mark every landing independently.

**Revision target.** Make each leftward jump a single continuous path whose direction and landing are unambiguous.

**Acceptance checks.** Exactly four arcs and four heads; heads meet their paths; landings at 18, 13, 8, and 3; no tick or label is covered; written chain remains `23 → 18 → 13 → 8 → 3`. **Resolution:** implemented.

## 03 — Complete groups and remainder

[Markup](./ch10-image-markups/03_complete_groups.svg) · Source: `art/vectors/ch10/ch10_m03_complete-groups-and-remainder.svg`

**Purpose.** Use inverse multiplication to build the largest complete grouping and compare it with 23.

**What works.** Four solid rows of five total 20, a separate dashed group contains three, and the multiplication, subtraction, and quotient notation are presented together.

1. **Retain — the four-by-five structure and separate remainder are exact, countable, and visually subordinate to the concise relational check.**

**Revision target.** Preserve the strong grouping/remainder hierarchy.

**Acceptance checks.** Four rows of five; remainder three; `5 × 4 = 20`; `23 − 20 = 3`; `4 R3`; non-color cues remain. **Resolution:** retained as-is.

## 04 — Twenty-three-unit bar

[Markup](./ch10-image-markups/04_twenty_three_unit_bar.svg) · Source: `art/vectors/ch10/ch10_m04_twenty-three-unit-bar.svg`

**Purpose.** Show one 23-unit whole as four exact five-unit blocks and a three-unit tail.

**What works.** All 23 unit cells have equal width; heavier boundaries mark the four fives; the hatched tail and external bracket keep the leftover three from becoming a fifth share.

1. **Retain — the proportional geometry, five-unit rules, hatched tail, and full decomposition make every unit auditable without redundant imagery.**

**Revision target.** Preserve exact cell widths and the explicit tail exclusion.

**Acceptance checks.** Exactly 23 equal cells; boundaries after cells 5, 10, 15, and 20; three-cell tail; correct equation; no color-only distinction. **Resolution:** retained as-is.

## 05 — Partition leftovers into fifths

[Markup](./ch10-image-markups/05_partition_leftovers.svg) · Source: `art/vectors/ch10/ch10_m05_partition-leftovers-into-fifths.svg`

**Purpose.** Convert three divisible leftovers into fifteen fifth-pieces and share three pieces to each of five recipients.

**What works.** The before/after split prevents double-counting, each source candy has five equal radial sectors, and five bowls each contain exactly three pieces.

1. **Moderate — the pre-revision after-state used fifteen indistinguishable diamonds, so the claim that each bowl receives one fifth from each of the three original candies was stated but not visually traceable.** Label the source candies A, B, and C and repeat those identity labels once in every bowl.

**Revision target.** Preserve quantity while making each source-to-recipient correspondence auditable.

**Acceptance checks.** Three sources × five equal sectors; five bowls × three pieces; every bowl contains one A, one B, and one C piece; all 15 pieces accounted for. **Resolution:** implemented.

## 06 — Skip count to twenty

[Markup](./ch10-image-markups/06_skip_count.svg) · Source: `art/vectors/ch10/ch10_m06_skip-count-to-twenty.svg`

**Purpose.** Count complete groups forward by fives, then measure the remaining distance from 20 to 23.

**What works.** Four equal rightward arcs land at 5, 10, 15, and 20; landing dots and labels supplement hue; the remainder bracket spans exactly 20–23.

1. **Retain — the repaired arcs now have joined rightward heads, unobscured landing ticks, and a separate proportional remainder bracket.**

**Revision target.** Preserve the complete-group rhythm and exact remainder distance.

**Acceptance checks.** Four `+5` arcs; endpoints 0, 5, 10, 15, 20; marked 23; bracket length three; no head/tick collisions. **Resolution:** retained as-is.

## 07 — Long-division workspace

[Markup](./ch10-image-markups/07_long_division.svg) · Source: `art/vectors/ch10/ch10_m07_long-division-workspace.svg`

**Purpose.** Connect quotient placement, multiplication, subtraction, and the final remainder in the written algorithm.

**What works.** The large numeral workspace is accurate, the subtraction rule is clear, and the final three is enclosed so it cannot be mistaken for unfinished work.

1. **Major — the pre-revision curved purple and orange arrows occupied the central reading path and duplicated the numbered order cues, making the notation feel more like a flowchart than written division.** Replace them with two thin numbered leaders that stay outside the numeral column.

**Revision target.** Let the written algorithm dominate while retaining a clear two-step explanation.

**Acceptance checks.** Quotient 4 above 23; `4 × 5 = 20`; subtraction leaves 3; leaders do not cross numerals or subtraction bar; solid/dashed callout styles supplement color. **Resolution:** implemented.

## 08 — Benchmark twenty-five

[Markup](./ch10-image-markups/08_benchmark_twenty_five.svg) · Source: `art/vectors/ch10/ch10_m08_benchmark-twenty-five.svg`

**Purpose.** Start from five groups of five, remove two candies, then resolve the resulting 23 exactly.

**What works.** The benchmark panel contains five countable groups of five and crosses out exactly two objects in the fifth group; the panel transition is explicit.

1. **Major — the pre-revision resolve panel contained only prose and equations even though its brief and ledger claimed a visible four-groups-plus-three model.** Draw four ruled rows of five and a separate dashed row of three before the final equation.

**Revision target.** Make the compensation result as visually auditable as the benchmark that motivates it.

**Acceptance checks.** Benchmark 25; exactly two crossed out; resolve side has four groups of five plus three separate; `23 = 5 × 4 + 3`; no object is counted twice. **Resolution:** implemented.

## 09 — Remainder condition

[Markup](./ch10-image-markups/09_remainder_condition.svg) · Source: `art/vectors/ch10/ch10_m09_fairness-check.svg`

**Purpose.** Verify both the quotient equation and the condition that the remainder is smaller than the divisor.

**What works.** Five identical bowls each contain four candies, the remainder tray contains three, and the final box states both `23 = 5 × 4 + 3` and `3 < 5` without social or emotional cues.

1. **Retain — matching bowl geometry, separate remainder placement, and the explicit inequality jointly prove maximal equal whole sharing.**

**Revision target.** Preserve the exact condition check and neutral presentation.

**Acceptance checks.** Five equal groups of four; remainder three; `3 < 5`; no faces or behavior cues; readable final condition. **Resolution:** retained as-is.

## 10 — Context changes answer form

[Markup](./ch10-image-markups/10_context_answer_form.svg) · Source: `art/vectors/ch10/ch10_m10_context-changes-answer-format.svg`

**Purpose.** Hold the decomposition constant while branching to an indivisible remainder or a divisible fractional quotient.

**What works.** The pre-revision parallel outcomes had correct final counts and kept cut pieces out of the indivisible side.

1. **Major — the pre-revision picture duplicated the five shares in two parallel columns instead of showing the promised shared first stage and fork; it also represented the fifteen fifth-pieces only as unexplained diamonds already inside bowls.** Rebuild one exact common stage, branch to two contained outcome panels, partition three labeled source bars into fifths, and show five recipients with three traceable pieces each.

**Revision target.** Make the conserved decomposition and the contextual decision visibly separate operations.

**Acceptance checks.** Shared stage has five groups of four plus three leftovers; one fork; whole branch keeps three intact and ends `4 R3`; divisible branch has three five-part bars and five recipients with three pieces each; ends `4 3/5 each`; outcomes do not mix. **Resolution:** implemented.

## Resolution summary

- **11/11** pictures audited and **11/11** numbered markups created.
- **6 pictures revised:** opening and Methods 02, 05, 07, 08, and 10.
- **5 pictures retained with explicit rationale:** Methods 01, 03, 04, 06, and 09.
- Manuscript illustration briefs, accessible SVG metadata, prompt, method-art ledger, and opening provenance were synchronized.
- Repeated method-level constructed-account boilerplate was removed under the established editorial-framing lesson; the chapter opening still provides the mandatory disclosure.
- CH10 contains no raster assets or organic anatomy; all labels and mathematical notation remain native selectable SVG text.
- No finding remains unresolved.
