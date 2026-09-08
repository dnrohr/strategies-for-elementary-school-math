# Wave 3 cross-chapter QA audit

Task: `QA`  
Audit date: 2026-09-08
Scope: CH08–CH14 and regression checks for CH00–CH07

## Summary

The repository validates and builds successfully. All production manuscript entries have the required front matter and chapter sections; every authored method uses the required six-part method schema. The generated explorer routes for the front matter, a fraction chapter, the flagship multiplication chapter, and the final fraction chapter returned HTTP 200 during local-server inspection.

The previously reported CH12 Method 06 arithmetic presentation blocker is resolved in the current manuscript: the displayed equation now includes valid associative and compensating transformations. Art, accessibility, citation source status, and late-book editorial account-length work are complete.

## Checks run

- `npm run check` — passes with the expanded regression suite and production build.
- Method-schema scan across CH01–CH14 — passed. Counts: CH08 10, CH09 10, CH10 10, CH11 18, CH12 11, CH13 10, CH14 10; all required method subsections are present.
- Required level-two sections across the manifest — passed, including CH00 and CH99.
- Local route smoke test — passed with HTTP 200 for `/`, `/chapters/three-fourths-of-20/`, `/chapters/27-times-46/`, and `/chapters/add-three-fractions/`.
- Research caveat scan — passed: abstract-only R03 records are excluded from reader-facing support, and constructed accounts are disclosed as constructed rather than participant quotations.

## Findings

### [x] CH12 Method 06 displayed a false equality — resolved

- File: `book/manuscript/12_three_addends.md:21` (Method 06 Math line)
- Current text: `378+596+247 = 378+(596+247) = 378+843 = (378+622)+(843−622) = 1,000+221 = 1,221`
- Resolution verified: the displayed line now matches the valid derivation used by the method's steps and mathematical note.
- The existing account and steps were retained.

### [x] CH09 Method 09 illustration precision check — resolved

- File: `book/manuscript/09_compare_fractions.md:157-167`
- `5/8 = 12.5/20` is mathematically correct. The final 20-unit illustration shows the endpoint halfway through cell 13 rather than at 12 or 13 full units, and `test/pipeline.test.mjs` guards the exact value and geometry.

### [x] Final art, citation, and accessibility passes — resolved

- Files: `book/manuscript/08_three_fourths_of_20.md`, `09_compare_fractions.md`, `10_23_shared_by_5.md`, `11_27_times_46.md`, `12_three_addends.md`, `13_add_2_3_and_5_8.md`, `14_three_fractions.md`
- Every audited chapter now has recorded quantity, fraction-partition, vector-overlay, contrast, citation, and responsive evidence. Remaining unchecked chapter items are reconciled in the editorial closeout before export.

## Regression observations

- Chapter method counts satisfy the manifest targets, including CH11's 18-method minimum and CH12's 10-method minimum.
- CH10 correctly separates whole-candy remainder form (`4 R3`) from divisible-candy fractional form (`4 3/5`).
- CH13 and CH14 consistently use exact common-unit conversions (`31/24` and `22/12 = 11/6`) and do not add unlike denominators directly.
- No fixed modality, left/right-brain, or learning-style claims were found in the audited chapter research notes.
- All required vector and intentional raster/vector composite assets are complete; generated output checks require every image reference to resolve to an emitted file.

## Handoff

Status: `cross-chapter QA complete; former P1 and all P2 follow-ups resolved; export QA remains`.
