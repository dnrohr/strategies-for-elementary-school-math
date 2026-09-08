# Site accessibility QA evidence

Task ID: `SITE-A11Y-QA`  
Captured: 2026-09-08

The coordinator inspected the rendered explorer, flagship chapter, fraction chapter, and back matter. Persistent screenshots verify the narrow explorer, desktop fraction chapter, and narrow back matter:

- `home-narrow-fixed.png` — 500px narrow explorer; verifies mobile hero wrapping and navigation.
- `home-narrow-final.png` — current 500×900 explorer after unique-ID, contrast, and announced-theme fixes.
- `ch05-narrow-final.png` — current 500×900 flagship chapter showing contained opening art after the complete responsive audit.
- `fraction-desktop.png` — 1280px fraction chapter; verifies chapter hero, typography, status badge, spacing, and opening-spread readability.
- `backmatter-narrow.png` — 500px narrow CH99; verifies back-matter title wrapping and content flow.
- `ch09-fraction-comparison.png` — 1200×800 rendered SVG; verifies exact 40ths comparison and the 12.5/20 half-unit endpoint.
- `ch05-eleven-by-twelve.png` — 1200×800 rendered SVG; verifies an exact 11×12 array and the 110 + 22 distributive split.
- `ch07-area-seven-by-nine.png` — 1200×800 rendered SVG; verifies exactly 63 unit squares and the 35 + 28 area partition.
- `ch08-three-fourths-of-twenty.png` — 1200×800 rendered SVG; verifies 20 units in four equal groups, three selected groups, and total 15.
- `ch06-twenty-four-divided-by-six.png` — 1200×800 rendered SVG; verifies 24 units in six groups of four and the inverse multiplication check.
- `ch10-twenty-three-shared-by-five.png` — 1200×800 rendered SVG; verifies five groups of four plus three remainder units and the distinct fractional reading.
- `ch11-twenty-seven-times-forty-six.png` — 1200×800 rendered SVG; verifies the 27×40 and 27×6 partial products and total 1,242.
- `ch12-three-addends-regrouping.png` — 1200×800 rendered SVG; verifies column totals, carries, and total 1,221.
- `ch13-add-two-thirds-five-eighths.png` — 1200×800 rendered SVG; verifies common-denominator conversions and total 31/24 = 1 7/24.
- `ch14-three-fractions-in-twelfths.png` — 1200×800 rendered SVG; verifies twelfths conversions and total 22/12 = 11/6.
- `ch04-seventy-two-minus-thirty-nine.png` — 1200×800 rendered SVG; verifies separate removal/distance routes and exact +1, +30, +2 gap jumps.
- `ch03-thirty-seven-plus-forty-eight.png` — 1200×800 rendered SVG; verifies the 15-ones regrouping and final 85.
- `ch02-fifteen-minus-eight.png` — 1200×800 rendered SVG; verifies separate removal/distance routes and exact count-up jumps.
- `ch01-seven-plus-five.png` — 1200×800 rendered SVG; verifies seven plus five equals twelve and five count-on jumps.
- `ch00-frontmatter-axes.png` — 1200×800 rendered SVG; verifies separate strategy and mental-representation axes without fixed learner types.

DOM inspection now covers all 18 routes at 390×844 and 1440×900. Every route passed element-bound overflow, unique-ID, heading order, labels, image-source/alt, and semantic-table checks. Narrow keyboard order passed on the explorer and CH05; the theme control announces and persists state. Computed-text contrast passed in day and night palettes on the explorer, CH05, and CH99, and the chapter filter's polite live result was verified. Source and output tests cover every production figure.
