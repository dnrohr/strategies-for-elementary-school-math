# ART-CH01-METHODS visual QA

Review date: 2026-09-07

- Inspected `desktop-method-01.png` through `desktop-method-14.png` at a 1440 px browser viewport after a clean site build.
- Inspected the generated-hand composite in `desktop-method-04.png` and `narrow-method-04.png` at 1440 px and 390 px. The final image has seven raised fingers, then ten with exactly three arrows, then ten with exactly two separate counters. Hands are plausible and no text is rasterized.
- Rejected the first generated Method 04 image because it contained too many arrows. The rejected image and reason are retained under `art/rejected/ch01/`.
- Found and fixed a publication defect where the Method 04 SVG's external raster subresource did not render inside an HTML image. The build now embeds that raster as a data URL in the published SVG while retaining a standalone PNG artifact.
- Found and corrected a Method 07 dashed-line/label collision before recapturing `desktop-method-07.png`.
- Confirmed all fourteen method figures load with non-empty alt text. At 390 px every figure stays within the 390 px document width; measurements are recorded in `browser-metrics.json`.
- Confirmed no orange text is used for essential labels; orange marks are supplemented by outlines, hatching, quantities, or equations.

The screenshots are evidence of the current implementation, not source assets.
