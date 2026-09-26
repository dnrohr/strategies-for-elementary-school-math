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

## Editorial-style refinement prompt — 2026-09-25

Use case: `precise-object-edit`.

Refine only the visual style and panel consistency of the supplied three-panel hand sequence. Preserve the exact composition and arithmetic states: panel 1 shows exactly seven raised fingers across two anatomically correct hands (five on the left hand, two on the right); panel 2 shows exactly ten raised fingers across two anatomically correct hands, with exactly three subtle upward teal movement arrows; panel 3 shows exactly ten raised fingers across two anatomically correct hands plus exactly two separate orange counters at the far right. Keep the same top-down viewpoint and left-to-right sequence. Use a restrained editorial nonfiction, lightly stylized ink-and-gouache treatment on warm paper, with identical wrist baselines and consistent hand scale. Include no text, numerals, labels, symbols, logos, watermarks, extra objects, extra hands, fused fingers, or altered quantities.

## 2026-09-25 selection note

The refined image was accepted after full-resolution inspection. It preserves the exact 7 → 10 → 10 + 2 sequence, five digits per visible hand, exactly three teal arrows, exactly two orange counters, consistent scale, and a text-free raster. The composite now explains in vector text that the two counters are the part of the added five not used to make ten.
