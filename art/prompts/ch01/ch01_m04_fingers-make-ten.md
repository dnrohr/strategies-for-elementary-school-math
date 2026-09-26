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

## Thumb-and-index sequence correction — 2026-09-26

Use case: `precise-object-edit`.

Correct the finger sequence and motion-arrow placement while preserving the existing editorial ink-and-gouache style, warm paper background, panel layout, top-down viewpoint, skin tone, lighting, hand scale, and wrist positions. Panel 1: keep the left hand fully open with exactly five extended digits. Change the right hand so it clearly represents exactly two using only the thumb and index finger extended; the middle, ring, and pinky fingers are visibly folded into the palm. Panel 2: show the same two hands fully open, exactly ten extended digits total. Place exactly three teal upward arrows directly above the middle, ring, and pinky fingers of the hand that previously showed two. Each arrow must sit clear of and above its corresponding fingertip, pointing upward; arrows must not overlap any finger. Panel 3: preserve two fully open hands with exactly ten extended digits plus exactly two orange counters at far right. Preserve exactly three equal panels and all arithmetic states `7 → 10 → 10 + 2`. Include no text, numerals, labels, logos, watermarks, or malformed anatomy.

The first edit still produced an index-and-middle V gesture in panel 1, so a second targeted edit used this exact prompt:

> Change ONLY the right-hand gesture in PANEL 1 and preserve everything else exactly. The panel-1 right hand must show the ASL-style number 2 made with THUMB AND INDEX: extend the thumb sideways to the viewer's right and extend the index finger straight upward. Fold the middle, ring, and pinky fingers tightly into the palm. There must be exactly two extended digits total on that hand, specifically thumb + index—not index + middle and not a V/peace sign. Preserve panel 1's fully open left hand. Preserve panels 2 and 3 pixel-for-pixel if possible, including exactly three teal arrows clearly above the fingertips in panel 2 and exactly two orange counters in panel 3. Preserve three panels, all hand anatomy, warm paper, style, scale, top-down view, and no text. No extra, missing, fused, duplicated, or malformed digits.

## 2026-09-26 intermediate note

The thumb-and-index edit was initially accepted, then rejected on closer review: the panel-1 hand on the viewer's right was a second left hand, and the panel-2 arrows marked index, middle, and ring rather than middle, ring, and pinky.

Rejected intermediate: `art/rejected/ch01/ch01_m04_fingers-make-ten_v2-index-middle-instead-of-thumb-index.png`.

## Laterality and arrow correction — 2026-09-26

Use case: `precise-object-edit`.

> Correct ONLY the laterality and finger-state continuity in panels 1 and 2. Preserve the three-panel layout, style, warm paper, camera, lighting, scale, wrists, panel 3, and all quantities. PANEL 1: the hand on the viewer's LEFT is an anatomically LEFT hand, fully open with five digits. The hand on the viewer's RIGHT must be an anatomically RIGHT hand—not a second left hand. On this right-side RIGHT hand, extend exactly the THUMB and INDEX only: its thumb points LEFT/inward toward the other hand, its index points upward immediately to the viewer-right of the thumb, and its middle, ring, and pinky are clearly folded into the palm. Exactly two extended digits on this hand. PANEL 2: preserve one left hand on viewer-left and one right hand on viewer-right, both fully open, exactly ten digits. Move the exactly three teal arrows so they sit directly above the RIGHT-SIDE RIGHT HAND'S MIDDLE, RING, and PINKY fingertips—the three outer fingers from the center finger through the viewer-right edge. Do NOT put an arrow over its index finger or thumb. Each arrow must be separate, above and clear of its corresponding fingertip, without overlap. PANEL 3: preserve exactly as shown: one anatomical left hand plus one anatomical right hand, ten digits total, exactly two orange counters. Constraints: exactly three teal arrows total; no extra/missing/fused/duplicated/malformed digits; no text, numerals, logos, or watermark. The sequence must visibly read: right hand thumb+index → extend middle+ring+pinky → open five.

## Final 2026-09-26 selection note

The accepted production raster now shows an anatomical left/right pair in every panel. Panel 1 uses the right hand's inward thumb plus upright index for two. Panel 2 places exactly three arrows directly above that right hand's middle, ring, and pinky. Panel 3 retains ten fingers and exactly two counters. Full-resolution inspection found five plausible digits on every hand, no raster text, and no arrow/fingertip overlap.

Rejected intermediate: `art/rejected/ch01/ch01_m04_fingers-make-ten_v3-duplicate-left-hand-wrong-arrows.png`.
