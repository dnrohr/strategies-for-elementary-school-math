# Site and accessibility QA audit

Task ID: `SITE-A11Y-QA`  
Audit date: 2026-09-06  
Status: `route and structure checks complete; persistent screenshot capture remains open`

## Verified

- Local server served `/`, CH01, CH05, CH08, and CH99 with HTTP 200.
- The explorer exposes skip navigation, a labeled search field, a theme control, chapter links, and chapter navigation.
- The generated chapter pages now contain exactly one `<h1>`; the manuscript's duplicate top-level heading is removed at build time and covered by a regression test.
- Cross-classification Markdown tables now render as semantic tables with table headers and cells.
- Current generated pages contain no `<img>` elements, so there are no missing image `alt` attributes in the current build. Final art assets will require a new accessibility pass when introduced.
- Desktop layout metrics for the flagship route showed document width 1265px against a 1280px viewport, with no horizontal overflow in the inspected state.
- Keyboard focus inspection on the explorer reached the skip link, brand link, theme toggle, start link, search field, and chapter links in logical order.
- Semantic tables now have responsive horizontal scrolling within the prose region, with readable borders, header contrast, and wrapping code labels.

## Open checks

- Capture persistent screenshots under `artifacts/ui/<task-id>/` at representative desktop and narrow widths.
- Verify keyboard focus order and theme-toggle behavior interactively at the narrow breakpoint; the desktop focus sequence is recorded above.
- Recheck asset loading, figure descriptions, contrast, and overflow after production art is added.
- Verify the deployed GitHub Pages base path and live workflow result after the final release batch.

No chapter status was promoted.
