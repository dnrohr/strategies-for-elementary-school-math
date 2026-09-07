# Release-readiness report

Audit date: 2026-09-07
Coordinator lane: `COORD-RELEASE`

## Current chapter status

All authored entries remain `draft`. No chapter is promoted to `review` or `final` because art, accessibility, and citation completion are not yet recorded.

| Entry | Methods | Target | Status |
| --- | ---: | --- | --- |
| CH00 Front matter | n/a | n/a | draft |
| CH01 7 + 5 | 14 | 12–18 | draft |
| CH02 15 − 8 | 12 | 12–18 | draft |
| CH03 37 + 48 | 14 | 12–18 | draft |
| CH04 72 − 39 | 12 | 12–18 | draft |
| CH05 11 × 12 | 20 | 18–25 | draft |
| CH06 24 ÷ 6 | 12 | 10–16 | draft |
| CH07 7 × 9 area | 12 | 10–16 | draft |
| CH08 3/4 of 20 | 10 | 10–16 | draft |
| CH09 compare fractions | 10 | 10–16 | draft |
| CH10 23 shared by 5 | 10 | 10–16 | draft |
| CH11 27 × 46 | 18 | 18–25 | draft |
| CH12 three addends | 11 | 10–16 | draft |
| CH13 2/3 + 5/8 | 10 | 10–16 | draft |
| CH14 three fractions | 10 | 10–16 | draft |
| CH99 Notes and bibliography | n/a | n/a | draft |

## Checks and evidence

- `ART-CH09-METHODS` completed all 10 CH09 method figures as original vector-only assets. Exact regression checks cover equal-whole 3/5 and 5/8 bars, exact `.600` and `.625` number-line points, half-benchmark gaps of `1/10` and `1/8`, 24-versus-25 fortieths, cross-products, aligned decimals, complements `.400` and `.375`, retrieval verification, the exact `12.5/20` endpoint halfway through cell 13, and estimate-then-prove geometry.
- Independent CH09 review inspected every figure at 1200×800, Methods 01–07, 09, and 10 at a 390 px placed width, and Method 09 in grayscale. Review corrected cross-product marker occlusion, separated colliding place-value captions, and restored explicit source-fraction labels in the decimal route. Integrated measurement found 10/10 loaded figures, useful alt text, and no horizontal overflow; evidence is under `artifacts/ui/art-ch09-methods/`.
- `ART-CH07-METHODS` completed all 12 CH07 method figures: eleven original vectors and one generated-hand/vector composite. Exact regression checks cover the 7×9 and rotated 9×7 grids, 7×10−7 compensation, horizontal 5+2 and vertical 5+4 partitions, the 62-placed-plus-final-tile composite, seven scan rows with six transitions, adjacent area parts, the written product grid, and the one-column benchmark difference.
- Independent CH07 review inspected every figure at 1200×800, representative counting/rotation/compensation/decomposition/embodied/traversal/benchmark figures at 390 px, and Method 08 in grayscale. Review added missing cell lattices and a rotation cue, corrected the traversal path and benchmark geometry, and reduced an oversized composite arrowhead. The generated hand passed anatomy, one-tile, orientation, and no-raster-text checks. Integrated measurement found 12/12 loaded figures, useful alt text, and no horizontal overflow; evidence is under `artifacts/ui/art-ch07-methods/`.
- `ART-CH06-METHODS` completed all 12 CH06 method figures: eleven original vectors and one generated-hand/vector composite. Exact regression checks cover 24 counters/coins/dots, six groups of 4 versus four groups of 6, the complete fact family, four +6 jumps, four −6 arrows, the 4×6 array, the nested 24→two 12s→six 4s decomposition, six bar parts, proportional scaling, raster dimensions, ordered page integration, and the embedded published raster.
- Independent CH06 review inspected every figure at 1200×800, representative sharing/grouping/number-line/nested-factor/embodied/proportion/verification figures at 390px, and Method 09 in grayscale. Review corrected a clipped-counter risk, a missing commuted multiplication fact, ambiguous terminal branches, missing directional arrowheads/reverse scaling, and a verification-loop collision. The generated hand passed anatomy, exactly-four-raised-fingers, tucked-thumb, orientation, and no-raster-text checks. Evidence is under `artifacts/ui/art-ch06-methods/`.
- `ART-CH05-METHODS` completed all 20 CH05 method figures: eighteen original vectors and two generated-hand/vector composites. Exact regression checks cover anchored 12×12, 11×10+11×2, and 11×12 patterns; eleven repeated-addition cards, beats, labeled arcs, bags, and tallies; twelve counters per embodied unit; six groups of 22; raster dimensions; ordered page integration; and embedded published rasters.
- Independent CH05 review inspected every figure at 1200×800, representative exact-grid/grouped/embodied/abstract figures at 390 px, and Method 17 in grayscale. Review corrected clipped pattern cells in four figures, replaced Method 11's label-only containers with countable dozen bags, added missing exact structures in Methods 08 and 12–14, corrected a Method 14 collision, and removed a misleading equality node from Method 20. The two generated hand scenes passed anatomy, orientation, and no-raster-text checks. Evidence is under `artifacts/ui/art-ch05-methods/`.
- `ART-CH04-METHODS` completed 12/12 vector-only method visuals. Exact regression checks cover compensation/gap labels, two backward jumps, all six before/regroup/after base-ten counts, and the three-dime/three-penny model. Independent review corrected three endpoint-label collisions, moved coin labels off countable tokens, and rebuilt Method 07 as actual countable blocks.
- CH04 evidence covers every figure at 1440 px, representative compensation/distance/base-ten/money/bar figures at 390 px, and a grayscale Method 07 proof. All figures load with useful alt text, stay within the measured document width, and preserve direction/quantity distinctions without color alone. Evidence is under `artifacts/ui/art-ch04-methods/`.
- `ART-CH03-METHODS` completed 14/14 vector-only method visuals. Exact regression checks cover the split partial sums, eight unit jumps, three-unit redistribution, base-ten before/after groups, and money-token before/after groups. Independent browser review found and corrected an ambiguous Method 01 connector layout before accepting the place-value table.
- CH03 evidence covers every figure at 1440 px, representative number-line/base-ten/money/imagined-workspace figures at 390 px, and a grayscale Method 07 proof. All figures load with useful alt text, stay within the measured document width, and preserve distinctions through labels, shape, grouping, stroke, and exact counts. Evidence is under `artifacts/ui/art-ch03-methods/`.
- `ART-CH02-METHODS` completed 12/12 CH02 method visuals: ten original vectors and two generated-raster/vector composites. Exact regression checks cover staged 15-counter removal, eight backward arrows/beats, eight motor marks, the 15-cell 8+7 bar, the untouched group of five, raster dimensions, and ordered page integration.
- Independent CH02 visual review inspected all twelve current desktop captures plus the two generated-hand composites at 390 px. The initial Method 08 vector was replaced because eight finger-like shapes contradicted its warning; the accepted composite uses one plausible hand and exactly eight circular vector tracking marks. Method 01 now includes the brief's 3×5 start array and one-hand move into a tray. A Method 08 result-label overflow was corrected before recapture. All figures stay within the measured 390 px document width; evidence is under `artifacts/ui/art-ch02-methods/`.
- `ART-CH01-METHODS` completed 14/14 CH01 method visuals: thirteen original vectors and one generated-raster/vector composite. The generated chapter contains one ordered method figure after every Method 01–14 heading, plus the existing opening anchor. Exact-quantity tests cover the count-all, make-ten, near-double, compensation, dot-chunking, number-line, and rhythm diagrams; Method 04's PNG dimensions and composite linkage are also tested.
- Independent CH01 visual review inspected current captures for all fourteen figures at 1440 px and the generated-hand composite at 390 px. The first Method 04 generation was rejected for excess arrows; the accepted version shows 7 raised fingers, exactly 3 add-to-ten arrows, 10 raised fingers, and 2 counters. Review also found and fixed an initially blank published raster subresource and a Method 07 label collision. All figures remain within the measured 390 px document width; evidence is under `artifacts/ui/art-ch01-methods/`.
- `ART-CH08-METHODS` established the method-aware rendering architecture and completed 10/10 CH08 method vectors. The generated chapter now contains one method figure immediately after every Method 01–10 heading, plus its existing opening anchor. All ten method assets use required names, useful alt text, exact vector quantities, selectable text, non-color cues, and a chapter-scoped provenance/QA ledger.
- Independent CH08 visual review inspected current captures for all ten method figures at 1440 px and a representative method at 390 px. One Method 09 label/equation collision was found and corrected. The page has no document-level overflow at either measured width; evidence is under `artifacts/ui/art-ch08-methods/`.
- `npm run check` passed: validation, 20 tests, and build; 16 production entries and 42 canonical source records validated.
- `git diff --check` passed before this report was added.
- Local route inspection reached HTTP-served pages for the explorer, early chapter CH01, fraction chapter CH08, and back matter CH99. Persistent representative screenshot artifacts are recorded under `artifacts/ui/site_accessibility_serial/`; narrow keyboard/focus verification remains open.
- The former CH12 Method 06 displayed-equation P1 is resolved and recorded as resolved in `qa/reports/wave3_cross_chapter_audit.md`.

## Remaining blockers

- Final art assets and per-asset provenance, dimensions, alt text, contrast, and exact-quantity checks are not complete book-wide. CH01–CH09 have complete method galleries (116/175), and every authored chapter CH00–CH14 retains its opening anchor, but 59 methods in CH10–CH14 still need production visuals and sign-off.
- Automated asset QA verifies vector-only chapter assets have a 1200×800 viewBox, accessible title/description metadata, `role="img"`, and no raster content. The intentional CH01/CH02/CH05/CH06/CH07 composites have verified PNG dimensions, no raster text, recorded generation provenance, labelled SVG overlays, and anatomy review. Broad rendered contrast and final per-method visual sign-off remain open for the unproduced chapters.
- An auditable chapter-by-chapter art manifest now records each brief, intended dimensions, exact quantity checks, and accessibility requirements in `art/production_manifest.md`; final rendering and visual sign-off remain open.
- Accessibility and responsive QA now has persistent representative screenshots under `artifacts/ui/site_accessibility_serial/`; generated CH00–CH14 pages load one canonical SVG each with non-empty alt text. The published CH05 route was visually checked at the app's narrow viewport with the figure and caption contained in the content column; narrow keyboard focus and theme-toggle behavior were also verified there. Broader per-page interaction coverage remains open while desktop focus order is complete.
- Citation QA remains open for screened records; R01-003 and R03-012 are now verified after full-text review, and CH99 records 18 screened items requiring inspection before stronger claims or final promotion.
- Citation ID/status audit found no missing source IDs and confirmed constructed-account disclosures; unresolved screened records are documented in `qa/reports/citation_serial_audit.md`.
- Editorial QA for CH01–CH07 is complete for account length and structure; all audited accounts now meet the 40–120-word target, with details in `qa/reports/editorial_ch00_ch07_audit.md`.
- CH09’s exact half-unit endpoint is protected by regression tests and final rendered-art/grayscale inspection confirms 12.5 twentieths rather than 13 full units.
- The table-rendering defect is now fixed in `scripts/lib.mjs` with a regression test; semantic table output still needs visual review on representative pages.
- Site QA fixed duplicate chapter `<h1>` output, added a regression assertion, and captured persistent representative screenshots; evidence is recorded in `artifacts/ui/site_accessibility_serial/README.md`. Narrow-width keyboard checks remain open.

## Worker batch status

`COORD-INVENTORY-ART` completed a read-only coverage audit. Chapter batches have produced CH01–CH09 method galleries (116 visuals) plus chapter-scoped records. The coordinator generated required organic composites, independently corrected integration/visual defects, integrated exactness tests, and captured browser/grayscale evidence.

## Restart checkpoint

After this batch is committed, pushed, and verified live, the exact next lane is `ART-CH10-METHODS`, owned to `art/vectors/ch10/**` and `art/prompts/ch10/**`, with the coordinator retaining shared renderer, test, manifest, release-report, evidence, commit, and deployment responsibilities. Produce and integrate all 10 CH10 method visuals as one coherent chapter batch; retain the existing CH10 opening anchor.

## Commits

- `0ae50fc233d4b8dcb31d46925e0c43f73ab8b4a7` — CH09 vector-only fraction-comparison gallery, exactness tests, corrected cross-product/decimal layouts, chapter QA reconciliation, grayscale proof, and responsive evidence.
- `2a4776119d38042557a92179d0609a659a59c912` — CH07 method-level gallery, generated-hand composite, exactness tests, chapter QA reconciliation, grayscale proof, and responsive evidence.
- `5807f4d49e81ced6bd69bc94ee8d4c94c68cb5e1` — CH06 method-level gallery, generated-hand composite, exactness tests, chapter QA reconciliation, grayscale proof, and responsive evidence.
- `d83ce45fb9e9f1b598ff2fd4185d2bb875cd768b` — CH05 method-level gallery, two generated-hand composites, exactness tests, chapter QA reconciliation, grayscale proof, and responsive evidence.
- `aa15cf344e49b6ffc7bd8a0868f77dd74a2225ad` — CH04 method-level vector gallery, exactness tests, rebuilt base-ten model, chapter QA reconciliation, grayscale proof, and responsive evidence.
- `c0f062c4e03b3facbc734e4adadc712f7a2f2209` — CH03 method-level vector gallery, exactness tests, chapter QA reconciliation, grayscale proof, and responsive evidence.
- `b13d27275f4afa8f58c0c26969c29c8274b0c7e2` — CH02 method-level visual gallery, two generated-hand composites, exactness tests, chapter QA reconciliation, and responsive evidence.
- `8b914192820cb578798959d42d88e5ba33acfd5d` — CH01 method-level visual gallery, generated-hand composite, exactness tests, and responsive evidence.
- `9167edf0489e1c44f7f69ddb9aee6f2f27c995cb` — CH08 method-level visual gallery, method-aware renderer, exactness tests, and responsive evidence.
- `ee5261f0462c5181130eb37082318a959b6f5235` — coordinator update marking the resolved CH12 audit blocker.
- `90bf26654fe2a75c396ca8e07faaa529999b34ec` — initial release-readiness report.
- `65331f0468c9628d8e0b7923168a4eb6fd1ff4f9` — exact visual primitives and accessibility ledger.
- `2a2f89d3d46aff18e416e3bded0b471d3dd33e2f` — early-chapter editorial audit.
- `50a3e6e3901f054f7b0c43edd4cbd7f9bd03a186` — semantic Markdown table rendering and math QA audit.
- `7b20d773d1ba81d3dc817def7d6635afd456d01c` — citation QA audit.
- `6d41381c25e4d3531cf7bf9e6660c649efe73269` — duplicate-heading fix and site QA audit.
- `e81f8b3137fdd4549785a5ac2f80f81afd44f675` — deployment and screenshot-evidence documentation.
- `a52c569a9f4655c29217306f8fb2392bcc5bd8b7` — chapter art production manifest.
- `b4fffebc350b238043e4edb5bd788ae3a99ef131` — final release-ledger reconciliation.
- `59001319254ba2a7304a528ea5b44e77b5362e85` — keyboard QA and current release-tip reconciliation.
- `cf7aff3a33ad9602f4b37a5b0dd65e1e0f3baa1f` — CH01 constructed-account expansion.
- `d10e1f6d9ff520ef2ccf9ffb1a9a75f2aaf6c6ef` — CH06 and CH07 constructed-account expansion.
- `b2f6e983f98dd85fa50cd52edf736bc84ebc4082` — CH02 constructed-account expansion.
- `e3e8e2a60321a1b0769e5be4e50de180ce7272d5` — CH04 constructed-account expansion.
- `3eb17c3ca571b60527a6b4afb9325db353c0f311` — CH05 constructed-account expansion, editorial audit completion, and release-report reconciliation.
- `7ce830429fd4a45089b1bbd9f298f94445f1d1d7` — CH05 flagship array vector, provenance, and screenshot evidence.
- `f0e192940cc659c4bc89e168f45e8c19a773a931` — CH07 area-model vector, provenance, and screenshot evidence.
- `8b0ed48ffa71b06a4219163ae8e51fe3ffc9f827` — CH08 fraction-model vector, provenance, and screenshot evidence.
- `8838c80472764efba7c49ec8bd16f0c5b6621332` — CH06 division-model vector, provenance, and screenshot evidence.
- `e1a0a021b30c36201bf162299e3e464dcee4fa28` — CH10 remainder/fractional-quotient vector, provenance, and screenshot evidence.
- `1befa4ba65179d28aeac08d4db03381e585d4bfe` — CH11 multiplication area-model vector, provenance, and screenshot evidence.
- `520dd7fa6ec86b692d8bcf9150f34c62b5d5d355` — CH12 regrouping vector, provenance, and screenshot evidence.
- `ecb29ce8ee85d2fe0e3dc3cd93b7bfe0b7381b83` — CH13 fraction-addition vector, provenance, and screenshot evidence.
- `773d5a38dd4894ae7c5938f931e7c6800e1ca926` — CH14 fraction-sum vector, provenance, and screenshot evidence.
- `a3415ce79eb29d1227c52ffe5ffaa6783a9a07a6` — CH04 subtraction vector, provenance, and screenshot evidence.
- `2dfb312cea2ea47793f086ac068b69ef5e243eb2` — CH03 regrouping vector, provenance, and screenshot evidence.
- `795611290353f06f577bee4d903eb2bf39542fc0` — CH02 subtraction vector, provenance, and screenshot evidence.
- `cf711884f86bb97b5a28aa1457b98bb17dcee9be` — CH01 addition vector, provenance, and screenshot evidence.
- `72b6cc654111faa38a934b339fccfde2bc1cc2aa` — CH00 visual-system vector, provenance, and screenshot evidence.
- `51302be` — published CH05 narrow-viewport figure and caption verification recorded.
- `3796c3b` — narrow keyboard focus and theme-toggle verification recorded.
- `2913062` — accessibility evidence and live-deployment notes reconciled.
- `0df92cd` — R01-003 full-text verification and source-status consistency test.
- `1015475` — R03-012 full-text and correction verification reconciled across fraction chapters.

All listed hashes were verified against `origin/main` at the time of their respective pushes. The final report-reconciliation commit is recorded by Git after this file update.

## GitHub Pages deployment

GitHub Actions run `34166679238` for `Publish book explorer` completed successfully for CH09 method-art head SHA `0ae50fc233d4b8dcb31d46925e0c43f73ab8b4a7`; both build and deploy jobs passed. The live CH09 route returned HTTP 200 with all ten ordered `data-method-figure="09-NN"` figures. The exact Method 09 SVG returned HTTP 200 and retained `12.5/20`, separate start/end half-cell boundaries, and the explicit warning that the endpoint is not 13 full units. The only annotation was the existing non-failing Node.js 20 deprecation warning for GitHub-maintained actions. Run: https://github.com/dnrohr/strategies-for-elementary-school-math/actions/runs/34166679238. Live route: https://dnrohr.github.io/strategies-for-elementary-school-math/chapters/compare-three-fifths-five-eighths/.

GitHub Actions run `34164594598` for `Publish book explorer` completed successfully for CH07 method-art head SHA `2a4776119d38042557a92179d0609a659a59c912`; both build and deploy jobs passed. The live CH07 route returned HTTP 200 with all twelve ordered `data-method-figure="07-NN"` figures. The generated-hand composite SVG returned HTTP 200 with an embedded PNG data URL, and its standalone 2,313,463-byte provenance raster returned HTTP 200. The only annotation was the existing non-failing Node.js 20 deprecation warning for GitHub-maintained actions. Run: https://github.com/dnrohr/strategies-for-elementary-school-math/actions/runs/34164594598. Live route: https://dnrohr.github.io/strategies-for-elementary-school-math/chapters/area-7-by-9/.

GitHub Actions run `34147214724` for `Publish book explorer` completed successfully for CH06 method-art head SHA `5807f4d49e81ced6bd69bc94ee8d4c94c68cb5e1`; both build and deploy jobs passed. The live CH06 route returned HTTP 200 with all twelve ordered `data-method-figure="06-NN"` figures. The generated-hand composite SVG returned HTTP 200 with an embedded PNG data URL, and its standalone 1,865,794-byte provenance raster returned HTTP 200. The only annotation was the existing non-failing Node.js 20 deprecation warning for GitHub-maintained actions. Run: https://github.com/dnrohr/strategies-for-elementary-school-math/actions/runs/34147214724. Live route: https://dnrohr.github.io/strategies-for-elementary-school-math/chapters/24-divided-by-6/.

GitHub Actions run `34145259443` for `Publish book explorer` completed successfully for CH05 method-art head SHA `d83ce45fb9e9f1b598ff2fd4185d2bb875cd768b`; both build and deploy jobs passed. The live CH05 route returned HTTP 200 with all twenty ordered `data-method-figure="05-NN"` figures. Both generated-hand composite SVGs returned HTTP 200 with embedded PNG data URLs, and their standalone 2,164,811-byte and 2,141,431-byte provenance rasters returned HTTP 200. Run: https://github.com/dnrohr/strategies-for-elementary-school-math/actions/runs/34145259443. Live route: https://dnrohr.github.io/strategies-for-elementary-school-math/chapters/11-times-12/.

The CH04 evidence-reconciliation head `3efcd3a0678a1b6c8a5949a8c186ccb7d5c211c7` deployed successfully in GitHub Actions run `34120240881`. Run: https://github.com/dnrohr/strategies-for-elementary-school-math/actions/runs/34120240881.

GitHub Actions run `34120087625` for `Publish book explorer` completed successfully for CH04 method-art head SHA `aa15cf344e49b6ffc7bd8a0868f77dd74a2225ad`; both build and deploy jobs passed. The live CH04 route returned HTTP 200 with all twelve ordered `data-method-figure="04-NN"` figures. The rebuilt Method 07 SVG returned HTTP 200 and contained the tested 7-rod, 12-cube regroup, and final 3-rod/3-cube groups. Run: https://github.com/dnrohr/strategies-for-elementary-school-math/actions/runs/34120087625. Live route: https://dnrohr.github.io/strategies-for-elementary-school-math/chapters/72-minus-39/.

GitHub Actions run `34118479535` for `Publish book explorer` completed successfully for CH03 method-art head SHA `c0f062c4e03b3facbc734e4adadc712f7a2f2209`; both build and deploy jobs passed. The live CH03 route returned HTTP 200 with all fourteen ordered `data-method-figure="03-NN"` figures. The corrected Method 01 SVG returned HTTP 200 and contained the explicit `30 + 40`, `7 + 8`, and `70 + 15 = 85` chain. Run: https://github.com/dnrohr/strategies-for-elementary-school-math/actions/runs/34118479535. Live route: https://dnrohr.github.io/strategies-for-elementary-school-math/chapters/37-plus-48/.

GitHub Actions run `34116752881` for `Publish book explorer` completed successfully for CH02 method-art head SHA `b13d27275f4afa8f58c0c26969c29c8274b0c7e2`; both build and deploy jobs passed. The live CH02 route returned HTTP 200 with all twelve ordered `data-method-figure="02-NN"` figures. Both generated-hand composite SVGs returned HTTP 200 with embedded PNG data URLs, and their standalone 2,220,185-byte and 2,429,793-byte provenance rasters returned HTTP 200. Run: https://github.com/dnrohr/strategies-for-elementary-school-math/actions/runs/34116752881. Live route: https://dnrohr.github.io/strategies-for-elementary-school-math/chapters/15-minus-8/.

GitHub Actions run `34114544469` for `Publish book explorer` completed successfully for CH01 method-art head SHA `8b914192820cb578798959d42d88e5ba33acfd5d`; both build and deploy jobs passed. The live CH01 route returned HTTP 200 with all fourteen ordered `data-method-figure="01-NN"` figures. The Method 04 composite returned HTTP 200 with an embedded PNG data URL, and its standalone 2,060,224-byte raster also returned HTTP 200. Run: https://github.com/dnrohr/strategies-for-elementary-school-math/actions/runs/34114544469. Live route: https://dnrohr.github.io/strategies-for-elementary-school-math/chapters/7-plus-5/.

The follow-up evidence-only head `870f1267226620af7a3993386a5cfbf778241a30` deployed successfully in GitHub Actions run `34114670410`. Run: https://github.com/dnrohr/strategies-for-elementary-school-math/actions/runs/34114670410.

GitHub Actions run `34075943244` for `Publish book explorer` completed successfully for CH08 method-art head SHA `9167edf0489e1c44f7f69ddb9aee6f2f27c995cb`; both build and deploy jobs passed. The live CH08 route returned HTTP 200 with all ten ordered `data-method-figure="08-NN"` figures, and the corrected Method 09 SVG returned HTTP 200 with the exact proportion equation. Run: https://github.com/dnrohr/strategies-for-elementary-school-math/actions/runs/34075943244. Live route: https://dnrohr.github.io/strategies-for-elementary-school-math/chapters/three-fourths-of-20/.

GitHub Actions run `34070909227` for `Publish book explorer` completed successfully for substantive release-batch head SHA `1015475393857eb24faca943ced74707171e1f65`; both build and deploy jobs passed. The published CH09 and CH99 routes then returned HTTP 200 and contained the updated R03-012 verification and 24-verified-source inventory text. The workflow emitted a non-failing Node.js 20 deprecation annotation for GitHub-maintained setup/pages actions. Run: https://github.com/dnrohr/strategies-for-elementary-school-math/actions/runs/34070909227.

## Release decision

`NOT READY`. The repository is build-clean and the method-count targets are met, but art, accessibility, citation verification, and persistent visual evidence remain incomplete.
