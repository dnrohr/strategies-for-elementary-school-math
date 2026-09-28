# CH08 picture improvement audit — `3/4 of 20 = ?`

Task: `QA-IMAGE-PASS-CH08`

Audit date: 2026-09-28

Inventory: **11 reader-facing pictures** — one opening picture and Methods 01–10.
Coverage: **11/11 audited; 11/11 numbered markups.**

The inventory reconciles the manuscript, CH08 prompt, method-art ledger, vector/composite/raster folders, built chapter mapping, and historical `image_review_ch08.md`. CH08 contains eleven production SVGs and no raster-backed pictures. Every SVG was rendered and inspected individually at 1200×800 before revision. Findings describe the pre-revision state; every resolution below records the final decision.

## 00 — Opening: partition twenty into four groups

[Markup](./ch08-image-markups/00_opening.svg) · Source: `art/vectors/ch08/three-fourths-of-twenty.svg`

**Purpose.** Introduce three fourths of twenty as three selected five-unit groups while preserving the whole twenty.

**What works.** Twenty equal tiles are organized into four rows of five, the selected fifteen remain countable, and the fraction route preserves both operations.

1. **Minor — the root lacked explicit 1200×800 intrinsic dimensions, unlike the production contract and method set.** Add width and height without changing the viewBox.
2. **Moderate — the unselected row used orange, an otherwise active semantic color, so selection status depended too heavily on interpreting hue.** Change the remaining quarter to neutral gray with dashed outlines and describe that cue accessibly.

**Revision target.** Preserve 20 = 4×5 and selected 15 while making sizing deterministic and the unselected state redundant with non-color cues.

**Acceptance checks.** Explicit 1200×800 size; 20 equal tiles; first three rows selected; last row gray/dashed; `20 ÷ 4 = 5`; `3 × 5 = 15`; useful title/description. **Resolution:** implemented.

## 01 — Four equal groups, then take three

[Markup](./ch08-image-markups/01_four_equal_trays.svg) · Source: `art/vectors/ch08/ch08_m01_four-equal-trays.svg`

**Purpose.** Show concrete equal sharing into four trays followed by selection of three trays.

**What works.** Every tray contains exactly five counters; three selected trays use hatch, heavy outlines, labels, and a bracket; the remaining tray is dashed and explicitly named.

1. **Retain — the four-tray composition is exact, auditable, and independently legible without color.**

**Revision target.** Preserve the full 4×5 inventory and the selected-three bracket.

**Acceptance checks.** Four trays; five counters each; 15 selected; five remain; no overlapping labels; bottom result contained. **Resolution:** retained as-is.

## 02 — One fourth, then triple

[Markup](./ch08-image-markups/02_one_fourth_then_triple.svg) · Source: `art/vectors/ch08/ch08_m02_one-fourth-then-triple.svg`

**Purpose.** Isolate one quarter of twenty, then treat three identical quarters as fifteen.

**What works.** The source bar has four equal 250-unit regions, the first is bracketed, the three copies match, and the small headed cue terminates before the copied units.

1. **Retain — the unit fraction, copy operation, and resulting three fives remain visually distinct and exact.**

**Revision target.** Preserve equal region widths, one-quarter bracket, and three-copy result.

**Acceptance checks.** Four equal regions of 5; three identical copied regions; `1/4 of 20 = 5`; `3 copies × 5 = 15`; no false fifth part in the whole. **Resolution:** retained as-is.

## 03 — Divide, then multiply

[Markup](./ch08-image-markups/03_divide_then_multiply.svg) · Source: `art/vectors/ch08/ch08_m03_divide-then-multiply.svg`

**Purpose.** Make the operator order `20 ÷ 4 × 3` explicit and verify it against four equal groups.

**What works.** The two small headed connectors stop clear of their circular states, operation labels occupy their own lane, and the subordinate strip shows three selected fives plus one unselected five.

1. **Retain — the symbolic route and structural warrant are separated cleanly without competing quantities.**

**Revision target.** Preserve 20→5→15 hierarchy and the exact four-group check.

**Acceptance checks.** `÷4` precedes `×3`; states 20, 5, 15; four equal check regions; three selected; equation remains contained. **Resolution:** retained as-is.

## 04 — Multiply, then divide

[Markup](./ch08-image-markups/04_multiply_then_divide.svg) · Source: `art/vectors/ch08/ch08_m04_multiply-then-divide.svg`

**Purpose.** Show `(20 × 3) ÷ 4` as a conservation-preserving regrouping of sixty.

**What works.** The two-stage layout and central operation cue correctly distinguish making sixty from sharing it four ways.

1. **Major — the pre-revision left bars used stripe texture without visible four-part boundaries, so readers could not audit twelve five-unit sections.** Replace them with twelve individually outlined 5-unit tiles grouped as three rows of four.
2. **Major — the pre-revision right shares were undivided 15-bars, so the claim that the same twelve sections were rearranged was not visually traceable.** Reuse the same tile size, hatch, outline, and count in four rows of three.

**Revision target.** Make every one of the twelve five-unit sections visible and identical across both states.

**Acceptance checks.** Left: 3×4 identical tiles, each 5, giving 3×20=60; right: 4×3 identical tiles, each 5, giving four 15s; 12 tiles in each state; one clear regroup cue; footer equation intact. **Resolution:** implemented.

## 05 — A fraction bar

[Markup](./ch08-image-markups/05_fraction_bar.svg) · Source: `art/vectors/ch08/ch08_m05_fraction-bar.svg`

**Purpose.** Represent three fourths as a proportionate selected length of a 20-unit whole.

**What works.** Four equal 250-unit regions, hatching, the heavy selected bracket, the dashed remainder bracket, and explicit five-unit labels make the geometry exact and grayscale-safe.

1. **Minor — the pre-revision `WHOLE = 20` label was crossed by the horizontal rail of its bracket, weakening text clarity at intended size.** Raise the label and lower the bracket rail into separate lanes.

**Revision target.** Preserve the 3:1 selected-to-unselected length and exterior labels.

**Acceptance checks.** Four equal regions; first three selected; fourth explicitly unselected; 5+5+5=15; whole=20; whole label untouched by the bracket; no obscured boundary. **Resolution:** implemented.

## 06 — Four rows of five

[Markup](./ch08-image-markups/06_four_by_five_array.svg) · Source: `art/vectors/ch08/ch08_m06_four-by-five-array.svg`

**Purpose.** Recast twenty as a 4×5 array and select three complete rows.

**What works.** Exactly twenty dots remain individually countable; row bands, the three-row brace, row labels, and the dashed last row distinguish 15 from 5 without hue alone.

1. **Retain — row grouping and the complete 4×5 check are exact and uncluttered.**

**Revision target.** Preserve four rows, five dots per row, and the exterior result equation.

**Acceptance checks.** 20 dots; rows 1–3 selected; row 4 dashed; brace spans exactly three rows; `4 × 5 = 20`; `3 × 5 = 15`. **Resolution:** retained as-is.

## 07 — Twenty dollars

[Markup](./ch08-image-markups/07_twenty_dollars.svg) · Source: `art/vectors/ch08/ch08_m07_twenty-dollars.svg`

**Purpose.** Apply the same equal-share structure to four five-dollar tokens.

**What works.** Four identical $5 values total $20; selection uses checks, hatching, double outlines, text, and a bracket, while the fourth token is dashed and named.

1. **Retain — the contextual model is exact and uses only selectable vector text and geometry.**

**Revision target.** Preserve four equal monetary shares and three-token selection.

**Acceptance checks.** Four `$5` tokens; three selected; `$15` selected; `$20` whole; no raster text or implied unequal share. **Resolution:** retained as-is.

## 08 — Three groups of five

[Markup](./ch08-image-markups/08_three_groups_rhythm.svg) · Source: `art/vectors/ch08/ch08_m08_three-groups-rhythm.svg`

**Purpose.** Align three beats with three cumulative five-groups while keeping the original whole available for checking.

**What works.** The three beat markers are uniform, directly centered over their groups, and paired with the cumulative words five, ten, and fifteen.

1. **Major — the pre-revision picture showed only fifteen counters while claiming “one quarter left,” so the full twenty and fourth equal group were not visible.** Add a fourth five-counter card.
2. **Moderate — the missing group also weakened non-color status encoding and the whole-check described in the account.** Render the fourth card neutral and dashed, omit a fourth beat, and label it as the whole-20 check.

**Revision target.** Preserve exactly three beats while showing all four equal groups and their selected/unselected roles.

**Acceptance checks.** Four cards × five counters = 20; exactly three beat markers; first three selected and cumulative to 15; fourth dashed and unselected; bracket spans only first three. **Resolution:** implemented.

## 09 — An advanced ratio equation

[Markup](./ch08-image-markups/09_proportion.svg) · Source: `art/vectors/ch08/ch08_m09_proportion.svg`

**Purpose.** Present a learned symbolic proportion route beside an exact aligned-bar verification.

**What works.** The advanced-route label prevents a developmental implication; aligned four-part bars preserve 3:4 = 15:20; pattern and brackets make the selected span independent of color.

1. **Major — the pre-revision equation rail jumped from `x/20 = 3/4` to `4x = 60` under an unlabeled dotted separator, contrary to the manuscript’s stated “multiply both sides by twenty” action.** Show the direct equality-preserving state `x = 20 × 3/4`.
2. **Moderate — the operation itself was not named, so the symbolic step was less auditable than the bar check.** Add a headed connector labeled `× 20 on both sides`, then a second cue to `x = 15`.

**Revision target.** Keep the learned procedure visually separate while making every symbolic transition exact and explicit.

**Acceptance checks.** `x/20 = 3/4`; labeled ×20-both-sides transformation; `x = 20 × 3/4`; `x = 15`; exact aligned bars; no false equality chain. **Resolution:** implemented and manuscript synchronized.

## 10 — I recognize fifteen

[Markup](./ch08-image-markups/10_retrieve_and_check.svg) · Source: `art/vectors/ch08/ch08_m10_retrieve-and-check.svg`

**Purpose.** Separate immediate retrieval of fifteen from a later four-groups-of-five verification.

**What works.** Negative space keeps retrieval appropriately sparse; the answer has clear hierarchy; the lower strip proves both 15 selected and 20 total.

1. **Minor — the pre-revision vertical dotted check connector ran through the word `check`, making the label and path compete.** Break the path above and below the label.

**Revision target.** Preserve the retrieval/check distinction while giving the label a clear lane.

**Acceptance checks.** `3/4 of 20 → 15`; four check tiles of 5; three selected; label untouched by connector; all mathematics vector/selectable. **Resolution:** implemented.

## Resolution summary

- **11/11** pictures audited and **11/11** numbered markups created.
- **6 pictures revised:** opening and Methods 04, 05, 08, 09, and 10.
- **5 pictures retained with explicit rationale:** Methods 01, 02, 03, 06, and 07.
- Manuscript illustration framing, Method 09 mathematics, accessible SVG metadata, prompt, ledger, and opening provenance were synchronized.
- Repeated method-level constructed-account boilerplate was removed under the established editorial-framing lesson; the chapter opening still provides the mandatory disclosure.
- CH08 contains no raster assets or organic anatomy; all text and mathematical labels remain native SVG text.
- No finding remains unresolved.
