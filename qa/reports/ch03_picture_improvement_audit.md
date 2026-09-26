# CH03 picture improvement audit — `37 + 48 = ?`

Task: `QA-IMAGE-PASS-CH03`
Audit date: 2026-09-26
Inventory: **15 reader-facing pictures** — one opening picture and Methods 01–14.
Coverage: **15/15 audited; 15/15 numbered markups.**

The inventory reconciles the manuscript, CH03 prompt record, method-art ledger, production vector folder, and built chapter. The historical `image_review_ch03.md` was read as input only. This pass rendered and inspected every current SVG at 1200×800 before revision. Findings describe that pre-revision state; each resolution records the final decision.

## 00 — Opening: physical and written regrouping

[Markup](./ch03-image-markups/00_opening.svg) · Source: `art/vectors/ch03/thirty-seven-plus-forty-eight.svg`

**Purpose.** Introduce the chapter by pairing seven tens plus fifteen ones with the equivalent written carry.

**What works.** Seven rods and fifteen countable ones are exact; the bracket names the ten-for-one exchange; the written route reaches 85; panel style, labels, outlines, and position supplement color.

1. **Major — the carried-ten label inherited right alignment and extended outside its written panel, while the actual carried digit was not positioned above the tens column.** Keep the annotation inside the panel and place a separate purple `1` above the tens digit.

**Acceptance checks.** Seven rods; fifteen ones; `10 ones = 1 ten`; carried 1 aligned with tens; `8 tens + 5 ones = 85`; no label crosses a panel edge. **Resolution:** implemented.

## 01 — Split tens and ones

[Markup](./ch03-image-markups/01_split_tens_ones.svg) · Source: `art/vectors/ch03/ch03_m01_split-tens-and-ones.svg`

**Purpose.** Separate both addends by place value and recombine the two partial sums.

**What works.** The two-column grammar is immediate; all four source parts, both partial sums, and final 85 agree; the result has a redundant double outline.

1. **Retain — the picture is already exact, balanced, and legible.** Another exchange inset would duplicate Methods 06–08 and weaken this method’s clean symbolic focus.

**Acceptance checks.** `37 = 30 + 7`; `48 = 40 + 8`; `30 + 40 = 70`; `7 + 8 = 15`; `70 + 15 = 85`; non-color grouping remains clear. **Resolution:** retained as-is.

## 02 — Add forty, then eight

[Markup](./ch03-image-markups/02_add_forty_then_eight.svg) · Source: `art/vectors/ch03/ch03_m02_add-forty-then-eight.svg`

**Purpose.** Show one forty-unit jump followed by eight countable unit moves.

**What works.** The landing at 77 is unobscured; eight compact arrows align one-to-one with the labeled ticks 77–85; the caption explicitly decomposes 48.

1. **Retain — all eight steps are individually auditable and no head covers a tick or numeral.** A proportional full scale belongs to Method 10; this picture intentionally privileges counted unit steps.

**Acceptance checks.** One `+40` move to 77; exactly eight `+1` arrows and intervals; endpoint 85; no collision at 77. **Resolution:** retained as-is.

## 03 — Use fifty, then correct by two

[Markup](./ch03-image-markups/03_add_fifty_correct_two.svg) · Source: `art/vectors/ch03/ch03_m03_add-fifty-correct-two.svg`

**Purpose.** Make the temporary +2 explicit and then undo it.

**What works.** The symbolic row gives the operation order; the lower rail labels 37, 85, and 87; a separate two-point span makes the small correction inspectable.

1. **Retain — the correction already has a distinct red lane, `−2` label, endpoint pair, and final 85 hierarchy.** Enlarging the lower curl would compete with the stronger symbolic explanation.

**Acceptance checks.** `48 → 50` adds 2; `37 + 50 = 87`; `87 − 2 = 85`; temporary and final states remain distinct without color. **Resolution:** retained as-is.

## 04 — Make eighty first

[Markup](./ch03-image-markups/04_make_eighty_first.svg) · Source: `art/vectors/ch03/ch03_m04_make-eighty-first.svg`

**Purpose.** Split 48 into 43 and 5 so 80 becomes an intermediate landing.

**What works.** The decomposition card, three ordered nodes, compact connectors, and bottom identity tell one consistent route; 85 alone receives the double result ring.

1. **Retain — the route is mathematically complete and its visual hierarchy is already proportionate.** Added unit marks would imply counting rather than benchmark decomposition.

**Acceptance checks.** `48 = 43 + 5`; `37 + 43 = 80`; `80 + 5 = 85`; 80 reads as intermediate. **Resolution:** retained as-is.

## 05 — Transfer three

[Markup](./ch03-image-markups/05_transfer_three.svg) · Source: `art/vectors/ch03/ch03_m05_transfer-three.svg`

**Purpose.** Make equivalent redistribution visible while preserving the total.

**What works.** Three hatched tokens, both resulting equations, and the conserved sum are present; pattern and outlines keep the units visible without color.

1. **Major — the three units floated below the 48 bar and the path ended in empty space, so their source and destination were only inferred.** Put the hatched units inside the labeled source bar, show three matching dashed destination positions inside the 37 bar, and terminate one leftward path before a compact head.

**Acceptance checks.** Exactly three source and three destination marks; unambiguous right-to-left direction; `37 + 3 = 40`; `48 − 3 = 45`; `40 + 45 = 85`; identity is redundant to color. **Resolution:** implemented.

## 06 — Column addition

[Markup](./ch03-image-markups/06_column_addition.svg) · Source: `art/vectors/ch03/ch03_m06_column-addition.svg`

**Purpose.** Connect the written carry to the place-value exchange it represents.

**What works.** Digits align by labeled columns; the carried 1 sits over tens; the right cards state both `15 ones = 1 ten + 5 ones` and `3 + 4 + 1 = 8 tens`.

1. **Retain — the connector is small, separated, and secondary; the arithmetic stages need no extra marks.** Adding blocks here would duplicate the physical model.

**Acceptance checks.** Column alignment; 5 in ones; carried 1 in tens; 8 tens; final 85; explanatory cards obscure nothing. **Resolution:** retained as-is.

## 07 — Exchange ten ones for one ten

[Markup](./ch03-image-markups/07_exchange_ten_ones.svg) · Source: `art/vectors/ch03/ch03_m07_exchange-ten-ones.svg`

**Purpose.** Show regrouping as a literal base-ten exchange.

**What works.** The before panel contains exactly seven rods and fifteen cubes, with exactly ten cubes bracketed; the after panel contains eight rods and five cubes. Panel borders and headings distinguish states without color.

1. **Retain — the central transition triangle is large but remains entirely in the gutter and covers no object, label, or endpoint.** Reducing it would not improve countability.

**Acceptance checks.** Before `7T + 15O`; ten and only ten selected; after `8T + 5O`; result 85; all objects separately countable. **Resolution:** retained as-is.

## 08 — Rods and loose ones

[Markup](./ch03-image-markups/08_rods_loose_ones.svg) · Source: `art/vectors/ch03/ch03_m08_rods-and-loose-ones.svg`

**Purpose.** Foreground units rather than written digits and gather ten of fifteen ones.

**What works.** Seven rods, ten bracketed units, five residual units, the decomposition `70 + 15 = 70 + 10 + 5`, and final `8 tens + 5 ones` are exact.

1. **Retain — the picture intentionally summarizes the exchange in the result statement instead of redrawing an eighth rod.** Method 07 already supplies the before/after object conversion, so duplication would blur the phenomenological distinction.

**Acceptance checks.** Seven rods; exactly fifteen ones split 10+5; bracket points only to ten; result 85; no claim that objects moved individually. **Resolution:** retained as-is.

## 09 — Eighty-five cents

[Markup](./ch03-image-markups/09_eighty_five_cents.svg) · Source: `art/vectors/ch03/ch03_m09_eighty-five-cents.svg`

**Purpose.** Use a familiar ten-to-one currency conversion as an optional analogy.

**What works.** Seven dime outlines and fifteen penny outlines become eight dimes and five pennies; the group of ten is bracketed; `optional unit analogy` prevents a universality claim.

1. **Retain — all coin silhouettes are separated and countable, and the small gutter connector does not compete with either state.** More coin detail would add decoration without mathematical value.

**Acceptance checks.** Before 7 dimes + 15 pennies; exactly ten bracketed; after 8 dimes + 5 pennies; 85¢; optional framing remains visible. **Resolution:** retained as-is.

## 10 — Directed distance

[Markup](./ch03-image-markups/10_number_line.svg) · Source: `art/vectors/ch03/ch03_m10_number-line-forty-eight.svg`

**Purpose.** Represent addition as proportional directed distance on one number line.

**What works.** Decade labels and separate +40/+8 arcs establish the intended route; the final identity is prominent.

1. **Critical — the pre-revision +40 span used about 20.8 px per unit while the +8 span used about 12.25 px per unit, contradicting the printed proportionality claim.** Rebuild both spans on one 20-px-per-unit scale: 37 at x=140, 77 at x=940, and 85 at x=1100.
2. **Moderate — both arcs shared a teal marker, so the orange +8 stroke ended in a mismatched teal head and the marker geometry touched landing areas.** Use separate matching heads, with strokes ending at the head bases above unobscured ticks.

**Acceptance checks.** +40 length 800 px; +8 length 160 px; exact 5:1 ratio; 37→77→85; 40/50/60/70/80 landmarks share the same scale; head colors match paths; 77 and 85 remain visible. **Resolution:** both implemented.

## 11 — Imagined column work

[Markup](./ch03-image-markups/11_imagined_column_work.svg) · Source: `art/vectors/ch03/ch03_m11_imagined-column-work.svg`

**Purpose.** Distinguish an imagined written workspace from a physical written artifact.

**What works.** The dashed tinted boundary, exact column alignment, carried 1, and abstract writing trace communicate mental page plus motor imagery without drawing an unverified hand.

1. **Retain — the trace is subordinate, non-anatomical, and does not touch digits or the carry.** Replacing it with a hand would introduce unnecessary anatomy and provenance obligations.

**Acceptance checks.** `7 + 8 = 15`; carried ten; tens total 8; final 85; trace covers no notation; no claim of a universal mental image. **Resolution:** retained as-is.

## 12 — Verbal place values

[Markup](./ch03-image-markups/12_verbal_place_values.svg) · Source: `art/vectors/ch03/ch03_m12_verbal-place-values.svg`

**Purpose.** Show the same exact decomposition carried by inner speech rather than a digit workspace.

**What works.** Three ordered speech ribbons preserve tens, ones, and recombination; the separate exchange note states the place-value meaning of fifteen ones; all text remains selectable vector content.

1. **Retain — the four-dot rhythm rail is a subordinate cadence cue, not a count of arithmetic steps.** Its distinct baseline and lack of number labels prevent it from being mistaken for the fifteen ones.

**Acceptance checks.** Spoken equations total 70, 15, and 85; exchange note exact; speech order top-to-bottom; rhythm cue never serves as quantity evidence. **Resolution:** retained as-is.

## 13 — Middle-fact stepping-stones

[Markup](./ch03-image-markups/13_middle_fact.svg) · Source: `art/vectors/ch03/ch03_m13_middle-fact-stepping-stones.svg`

**Purpose.** Make 77 an intermediate retrieved or computed fact rather than the answer.

**What works.** Three states, a direct `+8` label, the `stepping-stone` caption, and double-outlined 85 establish the hierarchy; the complete identity appears below.

1. **Retain — compact dotted connectors leave every node edge and label clear.** More process detail would misrepresent partial retrieval as a fully observed sensory sequence.

**Acceptance checks.** `37 + 40 = 77`; `77 + 8 = 85`; 77 labeled intermediate; 85 final; no neural mechanism implied. **Resolution:** retained as-is.

## 14 — Direct retrieval

[Markup](./ch03-image-markups/14_direct_retrieval.svg) · Source: `art/vectors/ch03/ch03_m14_direct-retrieval.svg`

**Purpose.** Represent an answer noticed before any reportable intermediate picture, with optional later verification.

**What works.** Spacious problem/result nodes, `no reported sequence`, double-outlined 85, and absence of brain or mystical imagery preserve the account’s restraint.

1. **Major — a large dashed return loop from 85 toward the problem invented a conspicuous reverse process and competed with the stated lack of sequence.** Remove the loop and present the decomposition only in a smaller detached card labeled `later check`.

**Acceptance checks.** Direct relation to 85 dominates; no return path or sensory metaphor; the later check is subordinate and exact; `30 + 40 + 7 + 8 = 85`. **Resolution:** implemented.

## Resolution summary

- Pictures audited: **15/15**.
- Markups supplied: **15/15**.
- Pictures with accepted source revisions: **4/15** (Opening, Methods 05, 10, and 14).
- Pictures explicitly retained with rationale: **11/15** (Methods 01–04, 06–09, and 11–13).
- Raster assets: **none**; anatomy, digit-count, laterality, native-raster, and raster-text checks are not applicable.
- Manuscript synchronization: illustration briefs for Methods 05, 10, and 14 updated; repeated constructed-account boilerplate removed under the existing CH01 reusable lesson while chapter-level disclosure and `A solver might describe…` framing remain.
- Prompt/provenance synchronization: CH03 prompt record, method-art ledger, opening sidecar, SVG descriptions, and QA metadata updated.
- New empirical sources or citations: **none**.

## Final visual QA

- Current 1200×800 renders for all 15 pictures were inspected individually after the last source edit.
- A 390 px evidence sheet was inspected for narrow-width containment and legibility for every picture.
- Material grayscale checks covered the opening exchange/carry, Method 05 source/destination identity, Method 10 proportional route, and Method 14 main-versus-later hierarchy.
- Evidence: `artifacts/ui/QA-IMAGE-PASS-CH03/`.
- Result: **15/15 visual QA passed; no unresolved finding remains.**
