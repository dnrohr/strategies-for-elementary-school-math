# Chapter image-pass progress

States: `queued` → `in_progress` → `complete`. Use `blocked` only when the current chapter cannot safely continue without user input or an external change. Resume `in_progress` or `blocked` work before selecting a queued chapter.

| Order | Chapter | Problem | Audit | Markups | Revisions | Visual evidence | State | Implementation commit | Notes |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | CH01 | `7 + 5 = ?` | 15/15 | 15/15 | complete | `artifacts/ui/QA-IMAGE-FIXES-CH01/` and `QA-IMAGE-FIXES-CH01-R2/` | `complete` | `1b29e7f`, follow-up `08f9612` | Baseline pass and reusable standards established. |
| 2 | CH02 | `15 − 8 = ?` | 13/13 | 13/13 | complete | `artifacts/ui/QA-IMAGE-PASS-CH02/` | `complete` | `2e215c8` | `QA-IMAGE-PASS-CH02`; 10 pictures revised, 3 retained with rationale; visual QA and full checks passed. |
| 3 | CH03 | `37 + 48 = ?` | 15/15 | 15/15 | complete | `artifacts/ui/QA-IMAGE-PASS-CH03/` | `complete` | `204e1f8` | `QA-IMAGE-PASS-CH03`; 4 pictures revised, 11 retained with rationale; visual QA and full checks passed. |
| 4 | CH04 | `72 − 39 = ?` | 13/13 | 13/13 | complete | `artifacts/ui/QA-IMAGE-PASS-CH04/` | `complete` | `39645de` | `QA-IMAGE-PASS-CH04`; 8 pictures revised, 5 retained with rationale; visual QA and full checks passed. |
| 5 | CH05 | `11 × 12 = ?` | 21/21 | 21/21 | complete | `artifacts/ui/QA-IMAGE-PASS-CH05/` | `complete` | `db83312` | `QA-IMAGE-PASS-CH05`; 6 pictures revised, 15 retained with rationale; both native rasters inspected; visual QA and full checks passed. |
| 6 | CH06 | `24 ÷ 6 = ?` | 13/13 | 13/13 | complete | `artifacts/ui/QA-IMAGE-PASS-CH06/` | `complete` | `527a2ce` | `QA-IMAGE-PASS-CH06`; 7 pictures revised or synchronized, 6 retained with rationale; native hand raster inspected; visual QA and full checks passed. |
| 7 | CH07 | `7 × 9 rectangle` | 13/13 | 13/13 | complete | `artifacts/ui/QA-IMAGE-PASS-CH07/` | `complete` | `6c1d4c1` | `QA-IMAGE-PASS-CH07`; 8 pictures revised, 5 retained with rationale; native hand raster inspected; visual QA and full checks passed. |
| 8 | CH08 | `3/4 of 20 = ?` | 11/11 | 11/11 | complete | `artifacts/ui/QA-IMAGE-PASS-CH08/` | `complete` | `a621f7d` | `QA-IMAGE-PASS-CH08`; 6 pictures revised, 5 retained with rationale; vector-only chapter, visual QA and full checks passed. |
| 9 | CH09 | `3/5 or 5/8?` | — | — | — | — | `queued` | — | — |
| 10 | CH10 | `23 shared by 5` | — | — | — | — | `queued` | — | — |
| 11 | CH11 | `27 × 46 = ?` | — | — | — | — | `queued` | — | — |
| 12 | CH12 | `378 + 596 + 247 = ?` | — | — | — | — | `queued` | — | — |
| 13 | CH13 | `2/3 + 5/8 = ?` | — | — | — | — | `queued` | — | — |
| 14 | CH14 | `3/4 + 2/3 + 5/12 = ?` | — | — | — | — | `queued` | — | — |

## Progress update rules

- At the beginning of work, change only the selected row to `in_progress` and add the task ID to Notes.
- While working, stage counts may be written as `N/total`; never write `complete` speculatively.
- On successful completion, record exact audit/markup counts, the evidence directory, and the implementation commit hash.
- Do not mark a row `complete` until the implementation commit exists and all completion criteria in `README.md` pass.
- Do not reorder chapters or skip a non-complete row.
