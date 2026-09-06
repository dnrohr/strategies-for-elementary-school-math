# Research workspace

Research notes are working evidence records, not reader-facing prose. Add verified sources to `source_log.csv`; use `research/inbox/` for parallel-agent batches that a maintainer can merge safely.

Verification statuses are `lead`, `screened`, and `verified`. Only `verified` sources may support final claims.

- `lead`: promising record not yet checked closely.
- `screened`: citation and abstract or authoritative record checked; full text still required for final use.
- `verified`: the directly relevant article or manuscript text and the logged claim were inspected.

`npm run validate` checks the canonical log and any inbox batches for schema errors, missing fields, invalid statuses, malformed URLs/dates, and duplicate source IDs.

The maintainer merges completed inbox batches with `npm run research:merge`. The command refuses schema errors or duplicate IDs, regenerates `bibliography.md`, and consumes successfully merged inbox files.
