# CH12 image review — 378 + 596 + 247

Task ID: `QA-IMAGE-REVIEW`
Review date: 2026-09-08
Scope: the opening image and all 11 reader-facing method SVGs, inspected in the built edition.

## Overall opinion

The chapter explains conservation and regrouping accurately, but flowchart triangles repeatedly overpower the numbers. The final “two-ended” transfer arrow is conceptually clever yet too large and directionally ambiguous.

## Priority findings

- Redesign Method 11 with explicit source and destination dots for the four transferred units.
- Reduce arrows in Methods 01–03, 06, 07, and 09.
- Keep Methods 05, 08, and 10 as the strongest procedural/check images.

## Image-by-image review

| Image | Disposition | Opinion |
| --- | --- | --- |
| `art/vectors/ch12/three-addends-regrouping.svg` | Minor | Written columns and carry path are correct, but the small typography and multiple side calculations make the opening dense. Enlarge the carries and remove redundant prose. |
| `art/vectors/ch12/ch12_m01_given-order.svg` | Major | The three running totals are clear; two oversized triangles nearly touch the boxes and make the sequence feel cramped. Use thin arrows or equals signs. |
| `art/vectors/ch12/ch12_m02_pair-596-247.svg` | Major | The bracket identifies the chosen pair, but a giant downward triangle looks like another mathematical operator. Connect the bracket to 843 with a slim line and label. |
| `art/vectors/ch12/ch12_m03_transfer-four.svg` | Minor | Four visible units and before/after expressions make compensation concrete; only the large transition triangle needs reduction. |
| `art/vectors/ch12/ch12_m04_place-value-split.svg` | Minor | Hundreds, tens, and ones are clearly separated, but showing 1,000+200+21 before regrouping can look final. Make the pending 21-ones trade visually explicit. |
| `art/vectors/ch12/ch12_m05_column-addition.svg` | Pass | Carries, column sums, and final 1,221 are legible and supported by a concise side explanation. |
| `art/vectors/ch12/ch12_m06_make-thousand.svg` | Minor | The 378→1,000 distance of 622 is clear, but the large curved arrow and arrowhead dominate the number line. |
| `art/vectors/ch12/ch12_m07_pair-378-247.svg` | Major | The friendly pair is understandable; the large arrow after the bracket is visually detached from 596 and reads as a new operation. Use a small `+596` connector into the equation. |
| `art/vectors/ch12/ch12_m08_estimate-then-exact.svg` | Pass | Approximate 1,200 and exact 1,221 are clearly separated, and the close number-line marks support the check. |
| `art/vectors/ch12/ch12_m09_base-ten-blocks.svg` | Major | The raw and regrouped place counts are correct, but the huge triangle distracts and no actual blocks are shown despite the title. Rename it as a place-value inventory or draw representative blocks. |
| `art/vectors/ch12/ch12_m10_place-map.svg` | Pass | Four boxed states and small connectors expose every valid trade without skipping a place. |
| `art/vectors/ch12/ch12_m11_conserved-transfer.svg` | Major | The two-ended curved arrow is oversized and does not clearly say which quantity gives four to which. Show four small units moving from 247 to 596 with source/destination labels. |

## Resolution notes — `QA-IMAGE-FIXES`

- `art/vectors/ch12/three-addends-regrouping.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch12/ch12_m01_given-order.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch12/ch12_m02_pair-596-247.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch12/ch12_m03_transfer-four.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch12/ch12_m04_place-value-split.svg` — Resolved 2026-09-08. Applied the recorded readability polish directly to the production SVG, preserving the exact mathematics, selectable text, accessibility metadata, non-color encoding, filename, and manuscript mapping. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch12/ch12_m06_make-thousand.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch12/ch12_m07_pair-378-247.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch12/ch12_m09_base-ten-blocks.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch12/ch12_m11_conserved-transfer.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
