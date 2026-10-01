# CH12 picture improvement audit — `378 + 596 + 247 = ?`

Task: `QA-IMAGE-PASS-CH12`

Audit date: 2026-10-01

Inventory: **12 reader-facing pictures** — one opening picture and Methods 01–11.
Coverage: **12/12 audited; 12/12 numbered markups.**

The inventory reconciles the manuscript, CH12 prompt, method-art ledger/provenance record, production manifest, vector folder, built chapter mapping, and historical `image_review_ch12.md`. CH12 contains twelve production SVGs and no raster-backed pictures. Every SVG was rendered and inspected individually at its declared 1200×800 canvas before revision. Findings below describe the pre-revision state; each resolution records the final decision.

## 00 — Opening: regroup each place

[Markup](./ch12-image-markups/00_opening.svg) · Source: `art/vectors/ch12/three-addends-regrouping.svg`

**Purpose.** Introduce the three-addend problem through aligned written addition and an explicit place-by-place carry explanation.

**What works.** The addends align cleanly, the three place sums are exact, side text explains every carry, and the result remains dominant without requiring color.

1. **Retain — the two-panel hierarchy keeps procedure and explanation separate while preserving exact ones, tens, and hundreds calculations.**

**Revision target.** Preserve the large written column and exact three-stage explanation.

**Acceptance checks.** `8+6+7=21`; `7+9+4+2=22`; `3+5+2+2=12`; result 1,221; labels remain selectable and legible at placed width. **Resolution:** retained as-is.

## 01 — Given-order running total

[Markup](./ch12-image-markups/01_given_order.svg) · Source: `art/vectors/ch12/ch12_m01_given-order.svg`

**Purpose.** Track each addend exactly once through the given-order accumulation.

**What works.** Three numbered cards, two compact labeled connectors, and the bottom equality make the running total auditable.

1. **Retain — the arrows occupy dedicated gaps, each is labeled with the entering addend, and neither overlaps a card or equation.**

**Revision target.** Preserve the one-direction sequence and addend-once check.

**Acceptance checks.** `378+596=974`; `974+247=1,221`; stages remain 1–3; connector heads and labels remain clear in grayscale and at 390 px. **Resolution:** retained as-is.

## 02 — Pair 596 and 247

[Markup](./ch12-image-markups/02_pair_596_247.svg) · Source: `art/vectors/ch12/ch12_m02_pair-596-247.svg`

**Purpose.** Show associativity by grouping the second and third addends before adding the untouched first addend.

**What works.** The bracket touches only 596 and 247, all original addends remain visible, and the subtotal flows into a separate final equation.

1. **Retain — grouping is communicated by enclosure and position, not color, while the untouched 378 stays visually independent.**

**Revision target.** Preserve the exact bracket scope and uncluttered subtotal-to-total transition.

**Acceptance checks.** `596+247=843`; `378+843=1,221`; bracket excludes 378; connector avoids labels. **Resolution:** retained as-is.

## 03 — Transfer four concrete units

[Markup](./ch12-image-markups/03_transfer_four.svg) · Source: `art/vectors/ch12/ch12_m03_transfer-four.svg`

**Purpose.** Make compensation concrete by moving exactly four units from 247 to 596.

**What works.** Exactly four outlined tokens are visible, before and after states are separated, both component equations are written, and the conservation identity spans the bottom.

1. **Retain — count, direction, source wording, and before/after equations jointly identify the same four transferred units.**

**Revision target.** Preserve the four-token count and paired `+4/−4` explanation.

**Acceptance checks.** Exactly four tokens; `596+4=600`; `247−4=243`; both triples equal 1,221; no cue depends on color alone. **Resolution:** retained as-is.

## 04 — Place-value split

[Markup](./ch12-image-markups/04_place_value_split.svg) · Source: `art/vectors/ch12/ch12_m04_place-value-split.svg`

**Purpose.** Add hundreds, tens, and ones independently, then recombine the place-value totals.

**What works.** Three large columns isolate like units; exact subtotals are prominent; the final line explicitly decomposes 21 as `20+1` before reaching 1,221.

1. **Minor — the pre-revision accessible description repeated the pending-trade explanation three times with conflicting intermediate wording, making assistive output needlessly long and less precise.** Replace it with one exact description matching the visible final line.

**Revision target.** Keep the picture unchanged while making its accessible metadata concise and unambiguous.

**Acceptance checks.** One nonduplicated `<desc>`; hundreds 1,000, tens 200, ones 21; final `1,000+200+(20+1)→1,221`; pending trade remains written. **Resolution:** implemented.

## 05 — Written columns and carries

[Markup](./ch12-image-markups/05_column_addition.svg) · Source: `art/vectors/ch12/ch12_m05_column-addition.svg`

**Purpose.** Expose the standard algorithm's aligned carry state.

**What works.** Carry digits are individually aligned over their destination places, and the side panel narrates the same three exact sums without drawing over the notation.

1. **Retain — the large column, destination-aligned carries, and parallel explanation make regrouping inspectable without added motion graphics.**

**Revision target.** Preserve place alignment and the separate explanation lane.

**Acceptance checks.** Ones 21 write 1/carry 2; tens 22 write 2/carry 2; hundreds 12; result 1,221; all numerals remain selectable. **Resolution:** retained as-is.

## 06 — Make one thousand first

[Markup](./ch12-image-markups/06_make_thousand.svg) · Source: `art/vectors/ch12/ch12_m06_make-thousand.svg`

**Purpose.** Bridge 378 to 1,000 using 622 from the independently computed subtotal 843.

**What works.** Endpoint ticks, the exact bridge label, the residual equation, and final total expose every part of the conservation move.

1. **Retain — the single curved bridge terminates at the 1,000 tick and remains subordinate to the exact equations.**

**Revision target.** Preserve the exact bridge and residual relationship.

**Acceptance checks.** `596+247=843`; `378+622=1,000`; `843−622=221`; `1,000+221=1,221`; path and head avoid labels. **Resolution:** retained as-is.

## 07 — Pair 378 and 247

[Markup](./ch12-image-markups/07_pair_378_247.svg) · Source: `art/vectors/ch12/ch12_m07_pair-378-247.svg`

**Purpose.** Reorder the addends to form 625, then add the untouched 596.

**What works.** The friendly pair has one precise bracket, the 596 tile is visually distinct, and its dashed `+596` connector lands beside the final equation.

1. **Retain — bracket, dashed source path, and written equation make the reordering traceable without implying that any quantity changes.**

**Revision target.** Preserve the pair-versus-untouched distinction.

**Acceptance checks.** `378+247=625`; `625+596=1,221`; 596 remains present; connector does not cross text. **Resolution:** retained as-is.

## 08 — Estimate, then calculate exactly

[Markup](./ch12-image-markups/08_estimate_exact.svg) · Source: `art/vectors/ch12/ch12_m08_estimate-then-exact.svg`

**Purpose.** Use rounding as a magnitude check without presenting it as proof.

**What works.** Dashed and solid panels, numbered headings, approximation notation, and a separate 21-difference strip distinguish estimate from exact work redundantly.

1. **Retain — each addend-to-rounded-value mapping is explicit and the exact column remains a separate visual operation.**

**Revision target.** Preserve approximate/exact separation and the difference check.

**Acceptance checks.** `378≈400`, `596≈600`, `247≈200`; estimate 1,200; exact 1,221; difference 21; distinction survives grayscale. **Resolution:** retained as-is.

## 09 — Three block piles and exact regrouping

[Markup](./ch12-image-markups/09_base_ten_blocks.svg) · Source: `art/vectors/ch12/ch12_m09_base-ten-blocks.svg`

**Purpose.** Represent all three addends as base-ten piles, combine like units, and expose each ten-for-one exchange.

**What works.** The pre-revision art correctly named the raw and final inventories and used representative block silhouettes with multiplicity labels.

1. **Major — the pre-revision picture omitted the three source piles promised by the method and mislabeled the tens exchange as `trade 10 tens`; that single exchange cannot transform 20 raw tens plus 2 incoming tens into the final 2 tens and 2 additional hundreds.** Rebuild the image with three exact source cards, raw totals, and the ordered exchanges `21O→2T+1O`, `22T→2H+2T`, and `12H→1Th+2H`.

**Revision target.** Make every source quantity and every regrouping state mathematically traceable while keeping the shapes representative rather than drawing 1,221 marks.

**Acceptance checks.** Source piles `3H/7T/8O`, `5H/9T/6O`, `2H/4T/7O`; raw `10H/20T/21O`; all three exchanges exact and ordered; final `1Th/2H/2T/1O`; labels, patterns, outlines, and position supplement color. **Resolution:** implemented.

## 10 — External place-value record

[Markup](./ch12-image-markups/10_place_map.svg) · Source: `art/vectors/ch12/ch12_m10_place-map.svg`

**Purpose.** Record the same three regrouping operations as four successive symbolic states.

**What works.** Four numbered cards preserve every residual unit, connector paths are separate, and the final expanded numeral verifies 1,221.

1. **Moderate — the pre-revision manuscript and prompt called this a bead map although the production picture is an external symbolic record with no beads.** Retain the strong picture and synchronize the method title, phenomenology, account, illustration brief, tags, prompt, and ledger to the representation actually shown.

**Revision target.** Keep the exact four-state artwork while removing the unsupported bead/mental-abacus implication.

**Acceptance checks.** States remain `10H/20T/21O → 10H/22T/1O → 12H/2T/1O → 1Th/2H/2T/1O`; surrounding prose consistently says external place-value record; no bead claim remains. **Resolution:** implemented through manuscript and provenance synchronization; production picture retained.

## 11 — Conserved transfer

[Markup](./ch12-image-markups/11_conserved_transfer.svg) · Source: `art/vectors/ch12/ch12_m11_conserved-transfer.svg`

**Purpose.** Show four units leaving 247 and arriving at 596 while the total remains fixed.

**What works.** Source and destination are named, the curved dashed path has one clear direction, exactly four tokens lie on the path, and before/after equations share 1,221.

1. **Retain — the source dot, destination dot, directional head, four tokens, and `+4/−4` labels make identity and conservation explicit.**

**Revision target.** Preserve the directional transfer and exact token count; correct stale provenance that previously described no tokens.

**Acceptance checks.** Exactly four tokens; source `247−4`; destination `596+4`; final `378+600+243=1,221`; metadata and ledger agree. **Resolution:** picture retained; ledger/provenance synchronized.

## Resolution summary

- **12/12** pictures audited and **12/12** numbered markups created.
- **2 production SVGs revised:** Method 04 accessible metadata and Method 09 artwork/metadata.
- **10 production pictures retained with explicit rationale:** opening and Methods 01–03, 05–08, 10, and 11. Method 10's manuscript/brief and Method 11's provenance were synchronized to their retained art.
- Manuscript illustration briefs, phenomenology/tags, accessible SVG metadata, prompt, method-art ledger, and provenance now agree.
- Repeated method-level constructed-account boilerplate was removed under the established editorial-framing lesson; the chapter opening retains the mandatory disclosure.
- CH12 contains no raster assets or organic anatomy; all labels and mathematical notation remain native selectable SVG text.
- No finding remains unresolved.
