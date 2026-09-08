# How We Think About Arithmetic

Production workspace for *How We Think About Arithmetic: Many Minds, One Problem*, an illustrated cognitive atlas of elementary-school mathematics.

## Start here

1. Read [`AGENTS.md`](AGENTS.md) for the collaboration contract.
2. Read [`book/BOOK_SPEC.md`](book/BOOK_SPEC.md) for the creative and epistemic requirements.
3. Use the ready-made prompts in [`coordination/LAUNCH_GUIDE.md`](coordination/LAUNCH_GUIDE.md), choose a task from [`coordination/TASKS.md`](coordination/TASKS.md), and work only in its declared paths.
4. Run `npm install`, then `npm run check` before committing.
5. Preview the book with `npm run dev` and open the printed local URL.

## Repository map

```text
book/                 canonical specification and manuscript
research/             evidence notes, bibliography, source log
art/                  art briefs, source vectors, composites, and provenance
layout/               shared visual system and layout guidance
coordination/         parallel-agent task packets and handoff rules
qa/                   editorial, mathematical, art, and citation checks
site/                  GitHub Pages templates and assets
scripts/               deterministic validation and site build tools
output/                final self-contained HTML and PDF editions
.github/workflows/     pull-request checks and Pages deployment
```

The generated site is written to `_site/` and is intentionally not committed. GitHub Actions builds and publishes it from `main`.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Serve the generated explorer and rebuild on edits |
| `npm run build` | Generate the static book explorer in `_site/` |
| `npm run export` | Regenerate self-contained HTML plus screen and print PDFs |
| `npm run verify:export` | Verify embedded figures, verified-only references, and PDF signatures |
| `npm run validate` | Check manuscript structure, metadata, links, and research records |
| `npm test` | Run automated tests for the validator and builder |
| `npm run check` | Run validation, tests, a production build, and export verification |

## Publishing

Every push to `main` runs the validation suite and deploys `_site/` to GitHub Pages, including the final downloadable editions under `_site/downloads/`. Pull requests run the same checks without deploying. In repository settings, Pages should use **GitHub Actions** as its source.
