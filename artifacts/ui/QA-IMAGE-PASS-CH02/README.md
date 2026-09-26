# QA-IMAGE-PASS-CH02 visual evidence

Review date: 2026-09-26

## Coverage

- `final/00-opening.png` and `final/01-remove-counters.png` through `final/12-written.png` are current 1200×800 Chrome renders of every reader-facing CH02 picture.
- `desktop-contact-and-grayscale.png` shows all 13 final pictures together at normal placed size, followed by material grayscale checks for Methods 01, 05, 10, and 11.
- `narrow-contact-and-grayscale.png` renders the same evidence sheet at a 390 px viewport. Every card and picture remains inside the narrow document width.
- `evidence-sheet.html` is the reproducible local source for both contact captures.

## Inspection record

- Inspected all 13 final renders individually at 1200×800. Counts, intervals, equations, endpoints, arrow/path joins, labels, and hierarchy pass.
- Inspected both raster sources at their native 1536×1024 resolution. Method 01 contains one plausible five-digit hand; Method 08 contains one plausible pointing hand with the remaining digits naturally folded or occluded. Neither raster contains text, counters, or mathematical marks.
- The first render review caught and corrected three issues before recapture: the Method 05 return head approached the final marker too closely, Method 08’s finger was between taps 4 and 5 rather than on tap 4, and Method 12’s rewrite X crossed the whole numeral rather than only the tens digit.
- Grayscale checks preserve meaning through hatching, outlines, position, labels, direction, and crossing. Narrow checks preserve legibility and do not crop artwork.

## Result

Visual QA: **13/13 passed**. Material grayscale and narrow checks: **passed**.
