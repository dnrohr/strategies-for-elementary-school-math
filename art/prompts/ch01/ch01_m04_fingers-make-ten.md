# CH01 Method 04 image-generation record

Use case: `illustration-story` followed by `precise-object-edit`.

## Initial production prompt

Create a three-panel editorial educational illustration on a warm paper-like ground, using the same pair of lightly stylized, anatomically correct hands from a top-down view. Panel 1 shows exactly seven raised fingers total: five on one hand and two on the other. Panel 2 shows exactly ten raised fingers, with subtle teal motion indicating that three additional fingers rise to complete ten. Panel 3 shows the same ten raised fingers plus exactly two small separate orange counters. Use a restrained modern children's-science-book style with natural silhouettes and no cropping. Include no text, numerals, equations, letters, logos, watermarks, extra objects, extra hands, or ambiguous, fused, missing, or duplicated digits.

## Correction prompt

Change only the motion overlay in the center panel. Remove every existing teal trail and arrow, then add exactly three subtle teal upward arrows above exactly three fingers. Preserve all hands, fingers, wrists, panels, counters, background, color, texture, camera angle, and composition. Keep exactly seven raised fingers in panel 1, ten in panel 2, and ten plus two counters in panel 3. The center panel must contain exactly three arrowheads total; add no text or other marks.

## Anatomy correction prompt — 2026-09-08

Correct only the center panel's right hand. Remove the extra digit so that this hand has exactly five anatomically plausible digits total: four upright fingers plus one thumb, matching a natural open hand. The center panel must show exactly two normal open hands and exactly ten digits total. Preserve the full three-panel landscape canvas, warm paper texture, panel boundaries, all other hands, wrists, skin tone, top-down viewpoint, lighting, three teal upward arrows, and the two orange counters in the right panel. Keep panel 1 at exactly seven raised fingers total and panel 3 at exactly ten raised fingers plus two counters. No cropping, extra/fused/duplicated/missing/malformed fingers, raster text, logos, or watermarks.

## Selection note

The first generation was rejected because its center panel contained more than three motion arrows. A later full-resolution audit found six visible digits on the center-right hand despite the earlier selection note. The 2026-09-08 targeted edit removes that extra digit while preserving three motion arrows and all other accepted quantities. The final production raster was manually inspected at full resolution.
