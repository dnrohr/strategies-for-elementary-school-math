# CH10 image review — 23 candies shared among 5

Task ID: `QA-IMAGE-REVIEW`
Review date: 2026-09-08
Scope: the opening image and all 10 reader-facing method SVGs, inspected in the built edition.

## Overall opinion

The chapter handles whole remainders versus fractional sharing well. Static group and context images are strong. Both number-line methods are undermined by oversized arrowheads; Method 06 can be perceived as moving left despite its +5 labels.

## Priority findings

- Replace the arrow constructions in Methods 02 and 06 with small, unambiguous direction markers.
- Reduce arrows in Methods 05, 07, and 08.
- Preserve Methods 01, 03, 04, 09, and 10.

## Image-by-image review

| Image | Disposition | Opinion |
| --- | --- | --- |
| `art/vectors/ch10/twenty-three-shared-by-five.svg` | Pass | Five groups of four, three leftovers, and the two answer readings are clearly separated and countable. |
| `art/vectors/ch10/ch10_m01_deal-equal-rounds.svg` | Pass | Five bowls of four and a distinct three-candy remainder make fair dealing immediately visible. |
| `art/vectors/ch10/ch10_m02_repeated-subtraction.svg` | Major | Four jumps and the 23→18→13→8→3 caption are correct, but oversized left-pointing heads cover landing ticks and visually overwhelm the arcs. Use small heads at the actual landings. |
| `art/vectors/ch10/ch10_m03_complete-groups-and-remainder.svg` | Pass | Four rows of five plus a dashed remainder group give the cleanest quotient/remainder explanation in the chapter. |
| `art/vectors/ch10/ch10_m04_twenty-three-unit-bar.svg` | Pass | Four five-unit segments and a hatched three-unit tail are proportional and explicitly reject a nonexistent fifth share. |
| `art/vectors/ch10/ch10_m05_partition-leftovers-into-fifths.svg` | Minor | Before/after pieces are exact, but the large central triangle competes with the already-clear stage labels. |
| `art/vectors/ch10/ch10_m06_skip-count-to-twenty.svg` | Replace | The arcs are labeled +5, yet the giant triangular heads visually point left toward earlier ticks. That directly contradicts the intended 0→5→10→15→20 route. Redraw with small rightward heads or endpoint dots. |
| `art/vectors/ch10/ch10_m07_long-division-workspace.svg` | Major | The written division is clear, but the large curved purple and orange arrows make the order of multiplication and subtraction harder to follow. Use thin numbered callouts instead. |
| `art/vectors/ch10/ch10_m08_benchmark-twenty-five.svg` | Minor | The 25−2 visual check is countable; the oversized triangle between “benchmark” and “resolve” adds little and should be reduced. |
| `art/vectors/ch10/ch10_m09_fairness-check.svg` | Pass | Equal four-candy bowls and a separate remainder plate make the fairness condition concrete without implying a fifth whole round. |
| `art/vectors/ch10/ch10_m10_context-changes-answer-format.svg` | Pass | The hard divider and parallel bowls clearly distinguish indivisible 4 R3 from divisible 4 3/5. |

## Resolution notes — `QA-IMAGE-FIXES`

- `art/vectors/ch10/ch10_m02_repeated-subtraction.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch10/ch10_m05_partition-leftovers-into-fifths.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch10/ch10_m06_skip-count-to-twenty.svg` — Resolved 2026-09-08. Redrew the line with four separated +5 arcs, small right-pointing terminal heads above unobscured ticks, landing dots at 5/10/15/20, and a separate 20–23 remainder bracket. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch10/ch10_m07_long-division-workspace.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
- `art/vectors/ch10/ch10_m08_benchmark-twenty-five.svg` — Resolved 2026-09-08. Normalized motion graphics to thin connectors and small user-space terminal heads; separated paths and endpoints where needed so ticks, labels, counters, and equations remain uncovered and operation direction is explicit. Desktop (600 px), narrow (360 px), and relevant grayscale evidence were reviewed; **now passes**.
