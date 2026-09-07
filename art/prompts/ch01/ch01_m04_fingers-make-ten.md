# CH01 Method 04 image-generation record

Use case: `illustration-story` followed by `precise-object-edit`.

## Initial production prompt

Create a three-panel editorial educational illustration on a warm paper-like ground, using the same pair of lightly stylized, anatomically correct hands from a top-down view. Panel 1 shows exactly seven raised fingers total: five on one hand and two on the other. Panel 2 shows exactly ten raised fingers, with subtle teal motion indicating that three additional fingers rise to complete ten. Panel 3 shows the same ten raised fingers plus exactly two small separate orange counters. Use a restrained modern children's-science-book style with natural silhouettes and no cropping. Include no text, numerals, equations, letters, logos, watermarks, extra objects, extra hands, or ambiguous, fused, missing, or duplicated digits.

## Correction prompt

Change only the motion overlay in the center panel. Remove every existing teal trail and arrow, then add exactly three subtle teal upward arrows above exactly three fingers. Preserve all hands, fingers, wrists, panels, counters, background, color, texture, camera angle, and composition. Keep exactly seven raised fingers in panel 1, ten in panel 2, and ten plus two counters in panel 3. The center panel must contain exactly three arrowheads total; add no text or other marks.

## Selection note

The first generation was rejected because its center panel contained more than three motion arrows, making the adjustment quantity ambiguous. The corrected generation preserves the accepted anatomy and quantities while reducing the overlay to exactly three arrows.
