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

- `npm run check` passed: validation, 7 tests, and build; 16 production entries and 42 canonical source records validated.
- `git diff --check` passed before this report was added.
- Local route inspection reached HTTP-served pages for the explorer, early chapter CH01, fraction chapter CH08, and back matter CH99. Representative visual evidence was captured in the coordinator session; persistent screenshot artifacts are still open.
- The former CH12 Method 06 displayed-equation P1 is resolved and recorded as resolved in `qa/reports/wave3_cross_chapter_audit.md`.

## Remaining blockers

- Final art assets and per-asset provenance, dimensions, alt text, contrast, and exact-quantity checks are not complete; current files are production briefs.
- An auditable chapter-by-chapter art manifest now records each brief, intended dimensions, exact quantity checks, and accessibility requirements in `art/production_manifest.md`; final rendering and visual sign-off remain open.
- Accessibility and responsive QA needs persistent screenshots under `artifacts/ui/<task-id>/` and narrow-width keyboard/focus verification; desktop focus order has been checked.
- Citation QA remains open for screened records; CH99 records 20 screened items requiring full-text inspection before stronger claims or final promotion.
- Citation ID/status audit found no missing source IDs and confirmed constructed-account disclosures; unresolved screened records are documented in `qa/reports/citation_serial_audit.md`.
- Editorial QA for CH01–CH07 found short constructed-account blocks below the 40-word template target; no filler edits were made and the issue is recorded in `qa/reports/editorial_ch00_ch07_audit.md`.
- CH09 Method 09 needs an exact half-unit endpoint check if rendered on a 20-unit line.
- The table-rendering defect is now fixed in `scripts/lib.mjs` with a regression test; semantic table output still needs visual review on representative pages.
- Site QA fixed duplicate chapter `<h1>` output and added a regression assertion; evidence and the persistent-PNG limitation are recorded in `artifacts/ui/site_accessibility_serial/README.md`. Narrow-width keyboard checks remain open.

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

All listed hashes were verified against `origin/main` at the time of their respective pushes. The final report-reconciliation commit is recorded by Git after this file update.

## GitHub Pages deployment

The current published URL `https://dnrohr.github.io/strategies-for-elementary-school-math/` returned HTTP 200 and contained the expected “One answer” explorer content during the 2026-09-06 coordinator check. GitHub Actions run `34066751813` for `Publish book explorer` completed with `success` for head SHA `8bcbd89cd2df7e4bf8fa5ca1edc30644d95518df`: https://github.com/dnrohr/strategies-for-elementary-school-math/actions/runs/34066751813.

## Release decision

`NOT READY`. The repository is build-clean and the method-count targets are met, but art, accessibility, citation verification, and persistent visual evidence remain incomplete.
