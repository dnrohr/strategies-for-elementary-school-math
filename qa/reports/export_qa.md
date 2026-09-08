# Production export QA

Audit date: 2026-09-08

Task ID: `COORD-EXPORT`

Status: complete

## Deliverables

| Edition | Format | Pages | Size | SHA-256 |
| --- | --- | ---: | ---: | --- |
| Screen | PDF, 7.5 × 10 in | 231 | 25,649,728 bytes | `697E9C264280A21AD76567E98C83347FEF54FDD9DE6497133FD77393E56C7AD0` |
| Print | PDF, US Letter | 235 | 27,736,011 bytes | `26A87BF17F5044B798D1861B25EED83FD2AE738A3960F7D466E4DCE216DD2776` |
| Screen | Self-contained HTML | n/a | 27,935,076 bytes | `6FFC4E6CD785D7752D63BDE2C2E1FCC31FF8C54977EAF948975BDF288FC415B8` |
| Print | Self-contained HTML | n/a | 27,935,064 bytes | `20526405BB56D1A143436188B930971F46BD9DF627225017DE79D96C6C8C0348` |

Both PDFs are tagged and contain no encrypted content, forms, JavaScript, suspect objects, or empty text pages. The screen PDF contains 231 540×720-point pages; the print PDF contains 235 US Letter pages.

## Content verification

- `npm run verify:export` confirmed 16 production entries, 175 method figures, 190 embedded figures, two self-contained HTML editions, all 24 verified bibliography records, no screened source IDs, and valid non-empty PDF signatures.
- Text extraction with `pypdf` covered every PDF page. Both editions contain the cover title, Introduction, Notes and bibliography, and References; neither contains an empty extracted-text page or the internal labels `Illustration brief`, `Chapter QA`, `Editorial roadmap`, or `status: draft`.
- Internal production notes are removed from the exported HTML structure, not merely hidden with CSS. Reader-facing local images are embedded as data URLs.
- Final chapter and bibliography links were reviewed in the self-contained HTML. The exported References section is generated only from the verified portion of `research/bibliography.md`.

## Visual inspection

Poppler rendered all 231 screen pages and all 235 print pages. The complete contact-sheet sets were visually inspected for blank pages, clipped content, overflow, broken figures, inconsistent page framing, and stranded headings:

- `artifacts/ui/export-qa/screen-final-pages-001-100.jpg`
- `artifacts/ui/export-qa/screen-final-pages-101-200.jpg`
- `artifacts/ui/export-qa/screen-final-pages-201-231.jpg`
- `artifacts/ui/export-qa/print-final-pages-001-100.jpg`
- `artifacts/ui/export-qa/print-final-pages-101-200.jpg`
- `artifacts/ui/export-qa/print-final-pages-201-235.jpg`

Full-size inspection included the cover, contents, introduction, early and late method pages, representative division/fraction/multi-addend chapters, the verified references, and the constructed-account disclosure. The initial screen export was rejected because methods spilled across alternating pages; the accepted export reduces the screen typography and figure envelope while preserving readable, coherent one-page method presentations. Orphan chapter-running labels were also removed before acceptance.

## Commands run

- `npm run export`
- `npm run verify:export`
- `npm run build`
- bundled Python `pypdf` full-text extraction across both PDFs
- bundled Poppler `pdfinfo` and `pdftoppm` full-document rendering

## Public verification

GitHub Pages run `34249847689` successfully built and deployed release commit `536857610db9a2e8ca971f82e4bfc0b3c8093b1a`. Public GET requests returned all four downloads, and downloaded copies matched the SHA-256 values above byte for byte. The live home page exposed all three reader-facing download choices; the About page exposed both PDFs and both HTML editions.

Known gaps: none.
