# CH04 image review — 72 − 39

Task ID: `QA-IMAGE-REVIEW`
Review date: 2026-09-08
Scope: the opening image and all 12 reader-facing method SVGs, inspected in the built edition.

## Overall opinion

This is one of the clearer chapters. Its strongest images use static bars, labeled states, or spoken steps. The number-line drawings avoid giant heads but sometimes go too far in the other direction: arcs without clear endpoints leave motion direction implicit.

## Priority findings

- Add small directional endpoints to Methods 02, 03, and 06.
- Reduce panel-transition triangles in Method 07.
- Keep Methods 10–12 as strong models for bar, verbal, and imagined-written representations.

## Image-by-image review

| Image | Disposition | Opinion |
| --- | --- | --- |
| `art/vectors/ch04/seventy-two-minus-thirty-nine.svg` | Pass | Removal and distance are cleanly contrasted; both panels arrive at 33 while preserving their different meanings. |
| `art/vectors/ch04/ch04_m01_trade-a-ten.svg` | Pass | Three labeled states and the explicit 12−9 / 6−3 work make regrouping understandable without overdrawn motion. |
| `art/vectors/ch04/ch04_m02_subtract-forty-repair-one.svg` | Major | The red −40 arc has no directional endpoint and the orange +1 curl is so small it resembles an artifact. Add modest arrowheads and distinct landing dots at 32 and 33. |
| `art/vectors/ch04/ch04_m03_measure-the-gap.svg` | Minor | The +1, +30, +2 spans are proportional and clear from labels, but the arcs lack direction. Small rightward heads would remove doubt. |
| `art/vectors/ch04/ch04_m04_split-thirty-nine.svg` | Pass | The 72→42→33 state sequence is spare, correctly labeled, and easy to scan. |
| `art/vectors/ch04/ch04_m05_seventy-plus-two.svg` | Pass | Keeping the extra two in its own orange box makes the decomposition and restoration exceptionally clear. |
| `art/vectors/ch04/ch04_m06_jump-back-thirty-nine.svg` | Major | The two spans and endpoints are mathematically placed, but neither arc indicates leftward travel. A reader can mistake them for forward jumps from 33; add small left-pointing heads. |
| `art/vectors/ch04/ch04_m07_unbundle-base-ten.svg` | Minor | The before/regroup/after counts are excellent; the two large purple triangles should be reduced so the blocks remain dominant. |
| `art/vectors/ch04/ch04_m08_make-change.svg` | Pass | The +1, +30, +2 line and three dimes/three pennies reinforce the same 33-cent gap in two forms. |
| `art/vectors/ch04/ch04_m09_missing-addend.svg` | Pass | The 39→69→72 states make inverse addition concrete without visual clutter. |
| `art/vectors/ch04/ch04_m10_whole-part-bar.svg` | Pass | The proportional 30+9+33 bar is direct, readable, and makes the missing part impossible to confuse with the removed part. |
| `art/vectors/ch04/ch04_m11_hear-the-algorithm.svg` | Pass | Numbered speech ribbons establish a strong verbal sequence and keep the written algorithm available as a compact check. |
| `art/vectors/ch04/ch04_m12_mental-page.svg` | Minor | The imagined-page treatment is clear, but the regrouped 6 and 12 float above unchanged 72 without strike-throughs, so a novice may not know which digits they replace. Add conventional rewrite marks. |

## Resolution notes — `QA-IMAGE-FIXES`

- `art/vectors/ch04/ch04_m02_subtract-forty-repair-one.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch04/ch04_m03_measure-the-gap.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch04/ch04_m06_jump-back-thirty-nine.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch04/ch04_m07_unbundle-base-ten.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch04/ch04_m12_mental-page.svg` — Resolved 2026-09-08. Applied the recorded readability polish directly to the production SVG, preserving the exact mathematics, selectable text, accessibility metadata, non-color encoding, filename, and manuscript mapping. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
