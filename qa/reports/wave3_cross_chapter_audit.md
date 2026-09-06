# Wave 3 cross-chapter QA audit

Task: `QA`  
Audit date: 2026-09-06  
Scope: CH08–CH14 and regression checks for CH00–CH07

## Summary

The repository validates and builds successfully. All production manuscript entries have the required front matter and chapter sections; every authored method uses the required six-part method schema. The generated explorer routes for the front matter, a fraction chapter, the flagship multiplication chapter, and the final fraction chapter returned HTTP 200 during local-server inspection.

The previously reported CH12 Method 06 arithmetic presentation blocker is resolved in the current manuscript: the displayed equation now includes the valid associative and compensating transformations. Final art, accessibility, and citation work remain open.

## Checks run

- `npm run check` — passed: validation, 8 tests, and production build.
- Method-schema scan across CH01–CH14 — passed. Counts: CH08 10, CH09 10, CH10 10, CH11 18, CH12 11, CH13 10, CH14 10; all required method subsections are present.
- Required level-two sections across the manifest — passed, including CH00 and CH99.
- Local route smoke test — passed with HTTP 200 for `/`, `/chapters/three-fourths-of-20/`, `/chapters/27-times-46/`, and `/chapters/add-three-fractions/`.
- Research caveat scan — passed in the audited chapters: screened R03 records are labeled as screened/leads or otherwise bounded, and constructed accounts are disclosed as constructed rather than participant quotations.

## Findings

### [x] CH12 Method 06 displayed a false equality — resolved

- File: `book/manuscript/12_three_addends.md:21` (Method 06 Math line)
- Current text: `378+596+247 = 378+(596+247) = 378+843 = (378+622)+(843−622) = 1,000+221 = 1,221`
- Resolution verified: the displayed line now matches the valid derivation used by the method's steps and mathematical note.
- The existing account and steps were retained.

### [P2] CH09 Method 09 needs an illustration precision check — text guard added

- File: `book/manuscript/09_compare_fractions.md:157-167`
- `5/8 = 12.5/20` is mathematically correct, but any final 20-unit illustration must show a half-unit endpoint rather than 12 or 13 full units. The manuscript calls this out in the illustration brief, and `test/pipeline.test.mjs` now guards both the exact value and the half-unit wording. Final visual inspection remains part of art sign-off.

### [P2] Final art and accessibility passes remain open

- Files: `book/manuscript/08_three_fourths_of_20.md`, `09_compare_fractions.md`, `10_23_shared_by_5.md`, `11_27_times_46.md`, `12_three_addends.md`, `13_add_2_3_and_5_8.md`, `14_three_fractions.md`
- Each chapter's QA section leaves final art/layout/accessibility or full-text verification unchecked. This is appropriate for `draft` status, but these chapters should not be promoted to `review`/`final` until quantity, fraction partition, vector overlay, contrast, and citation checks are recorded.

## Regression observations

- Chapter method counts satisfy the manifest targets, including CH11's 18-method minimum and CH12's 10-method minimum.
- CH10 correctly separates whole-candy remainder form (`4 R3`) from divisible-candy fractional form (`4 3/5`).
- CH13 and CH14 consistently use exact common-unit conversions (`31/24` and `22/12 = 11/6`) and do not add unlike denominators directly.
- No fixed modality, left/right-brain, or learning-style claims were found in the audited chapter research notes.
- No generated raster art or missing figure file caused a build failure; the current art briefs are still production briefs rather than completed assets.

## Handoff

Status: `draft; the former P1 is resolved, while art/accessibility/citation evidence remains open`.
No manuscript or shared-file edits were made by this QA worker. No commit or push was performed.
