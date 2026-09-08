# Site and accessibility QA audit

Task ID: `SITE-A11Y-QA`  
Audit date: 2026-09-08
Status: `complete`

## Verified

- Local server served `/`, CH01, CH05, CH08, and CH99 with HTTP 200.
- The explorer exposes skip navigation, a labeled search field, a theme control, chapter links, and chapter navigation.
- The generated chapter pages now contain exactly one `<h1>`; the manuscript's duplicate top-level heading is removed at build time and covered by a regression test.
- Cross-classification Markdown tables now render as semantic tables with table headers and cells.
- Generated CH00–CH14 pages now each include one canonical SVG figure with non-empty alt text; CH99 remains text-only. The vector suite and generated-page figure contract are covered by automated tests. The published CH05 route was also inspected at the app's narrow viewport: the figure and caption remain inside the content column with no visible horizontal overflow.
- Desktop layout metrics for the flagship route showed document width 1265px against a 1280px viewport, with no horizontal overflow in the inspected state.
- Keyboard focus inspection on the explorer reached the skip link, brand link, theme toggle, start link, search field, and chapter links in logical order.
- Semantic tables now have responsive horizontal scrolling within the prose region, with readable borders, header contrast, and wrapping code labels.
- Table headers now carry `scope="col"` for assistive technology.
- Persistent headless-Chrome screenshots now verify narrow explorer and back-matter wrapping plus desktop fraction layout; the mobile headline sizing was corrected and rechecked visually.
- A complete 18-route browser matrix (home, about, all 16 production entries) passed at both 390×844 and 1440×900: no element-bound overflow, duplicate IDs, heading-level skips, unlabeled controls, missing image sources/alt text, or malformed semantic tables were detected.
- Repeated method-subheading IDs were found during the 390 px sweep and fixed by scoping each level-three heading to its method. Automated output checks now require unique IDs on every production page.
- Every rendered image reference is now checked against an emitted file during the build test, in addition to source-asset exactness checks.
- Day and night palettes passed a computed-text WCAG contrast audit on the explorer, flagship CH05, and table-heavy CH99. The day accent was darkened for small text; night-specific semantic colors now maintain contrast against dark surfaces.
- The theme control exposes pressed state and a state-specific accessible name, and the selected theme persists across page navigation.
- Narrow keyboard traversal passed on the explorer and flagship chapter. Order begins with skip link, brand, theme control, then page-local navigation; the responsive table scroll region and chapter navigation remain keyboard reachable.
- The chapter filter remained labeled and announced `3 chapters match “fractions”.` through its polite live region.
- Reduced-motion CSS disables smooth scrolling and compresses transitions when the user requests reduced motion.

## Resolved during this pass

- Removed duplicate method-subheading IDs.
- Added programmatic emitted-image existence coverage.
- Corrected day/night semantic color contrast.
- Added announced theme state.
- Reconciled the full route matrix after all 175 method figures were integrated.

Final deployment/base-path verification remains a release operation rather than an accessibility defect. No chapter status was promoted by this audit alone.
