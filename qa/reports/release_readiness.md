# Release-readiness report

Audit date: 2026-09-06  
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

- `npm run check` passed: validation, 8 tests, and build; 16 production entries and 42 canonical source records validated.
- `git diff --check` passed before this report was added.
- Local route inspection reached HTTP-served pages for the explorer, early chapter CH01, fraction chapter CH08, and back matter CH99. Persistent representative screenshot artifacts are recorded under `artifacts/ui/site_accessibility_serial/`; narrow keyboard/focus verification remains open.
- The former CH12 Method 06 displayed-equation P1 is resolved and recorded as resolved in `qa/reports/wave3_cross_chapter_audit.md`.

## Remaining blockers

- Final art assets and per-asset provenance, dimensions, alt text, contrast, and exact-quantity checks are not complete book-wide; coordinator-reviewed vectors now exist for CH01–CH14, while CH00 remains represented by a production brief.
- An auditable chapter-by-chapter art manifest now records each brief, intended dimensions, exact quantity checks, and accessibility requirements in `art/production_manifest.md`; final rendering and visual sign-off remain open.
- Accessibility and responsive QA now has persistent representative screenshots under `artifacts/ui/site_accessibility_serial/`; narrow-width keyboard/focus verification remains open while desktop focus order is complete.
- Citation QA remains open for screened records; CH99 records 20 screened items requiring full-text inspection before stronger claims or final promotion.
- Citation ID/status audit found no missing source IDs and confirmed constructed-account disclosures; unresolved screened records are documented in `qa/reports/citation_serial_audit.md`.
- Editorial QA for CH01–CH07 is complete for account length and structure; all audited accounts now meet the 40–120-word target, with details in `qa/reports/editorial_ch00_ch07_audit.md`.
- CH09’s exact half-unit endpoint is now protected by a regression test; final rendered-art inspection must still confirm the visual asset uses 12.5 twentieths rather than 13 full units.
- The table-rendering defect is now fixed in `scripts/lib.mjs` with a regression test; semantic table output still needs visual review on representative pages.
- Site QA fixed duplicate chapter `<h1>` output, added a regression assertion, and captured persistent representative screenshots; evidence is recorded in `artifacts/ui/site_accessibility_serial/README.md`. Narrow-width keyboard checks remain open.

## Worker batch status

The requested first batch was dispatched with disjoint ownership for `DESIGN`, editorial CH00–CH07, and `QA`. Each worker failed before producing output because the host reported the Codex usage limit. No worker committed or pushed, and no worker changes were integrated.

## Commits

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

All listed hashes were verified against `origin/main` at the time of their respective pushes. The final report-reconciliation commit is recorded by Git after this file update.

## GitHub Pages deployment

The current published URL `https://dnrohr.github.io/strategies-for-elementary-school-math/` returned HTTP 200 and contained the expected “One answer” explorer content during the 2026-09-06 coordinator check. GitHub Actions run `34067611421` for `Publish book explorer` completed with `success` for head SHA `55e1b5e980832d9b1fc974b5c5d20712fbf5f92a`. Run: https://github.com/dnrohr/strategies-for-elementary-school-math/actions/runs/34067611421.

## Release decision

`NOT READY`. The repository is build-clean and the method-count targets are met, but art, accessibility, citation verification, and persistent visual evidence remain incomplete.
