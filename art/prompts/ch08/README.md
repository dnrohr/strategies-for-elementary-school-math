# CH08 method-art reproducible brief

The existing `three-fourths-of-twenty.svg` remains the opening-spread anchor. The method gallery uses ten independent 1200×800 production SVGs named `ch08_m01_*.svg` through `ch08_m10_*.svg`.

## Shared specification

- Warm off-white ground; humanist sans-serif SVG text; semantic colors from `layout/VISUAL_SYSTEM.md`.
- Starting quantity blue `#2764B8`; result/selection green `#287A55`; transformation purple `#7652A8`; rhythm orange `#D97706`; inactive structure gray `#68707A`.
- Never rely on color alone: pair selection with hatching, labels, check marks, position, brackets, or heavy/double outlines; inactive groups use labels and dashed outlines.
- Use SVG geometry and selectable SVG text only. No raster images, raster text, external assets, or embedded fonts.
- Every asset must declare `width="1200"`, `height="800"`, `viewBox="0 0 1200 800"`, `role="img"`, canonical `aria-labelledby="title desc"`, and unique useful title/description text.
- Exact invariant: 20 total; 4 equal groups/regions of 5; 3 selected groups/regions = 15. Do not introduce decorative countable marks that can be mistaken for quantity tokens.

## Method prompts

1. **Four equal trays:** four separate outlined trays, five counters per tray; first three hatched/solid-selected, fourth gray/dashed; bracket `3 trays × 5 = 15`.
2. **One fourth, then triple:** a 20-unit bar split into four exactly equal sections labeled 5; bracket the first quarter, then show three identical 5-unit copies totaling 15.
3. **Divide, then multiply:** sparse mental-workspace flow `20 → ÷4 → 5 → ×3 → 15`; add a subordinate four-group verification strip without competing quantities.
4. **Multiply, then divide:** stack three same-length bars labeled 20 to establish 60; directional transformation into four same-length shares labeled 15; state `(20 × 3) ÷ 4 = 15`.
5. **Fraction bar:** one long 20 bar with four mathematically equal regions labeled 5; hatch the first three; use a heavy double bracket for selected 15.
6. **Four-by-five array:** exactly twenty dots in four horizontal rows of five; select three whole rows using solid bands, leave one row dashed; row labels and a brace reinforce grouping.
7. **Twenty dollars:** four exact vector tokens labeled `$5`; select three using checks, hatch, and double outline; show `$15` and total `$20`.
8. **Three groups / rhythm:** four five-dot group panels preserve the whole; put one numbered beat marker above each of the first three groups and align verbal totals `five`, `ten`, `fifteen`; do not imply twenty individual taps.
9. **Proportion:** two aligned four-column bars; upper scale has one part per column and lower scale has five units per column; first three columns patterned; add `x/20 = 3/4`, `4x = 60`, `x = 15`.
10. **Retrieval plus verification:** use restrained negative space for `3/4 of 20 → 15`, avoiding mystical/neural imagery; follow with four 5-unit tiles, three selected, to verify 15 against the whole 20.

## Deliberate exceptions

The book specification prefers organic/composite art for hands, bodies, money, and physical gesture. In this exact-overlay lane, methods 07 and 08 deliberately use polished vector money tokens and abstract beat marks. This avoids crude SVG anatomy and preserves auditable quantities. No hands or bodies are depicted, so anatomy and left/right checks are not applicable. A future organic composite may be added by a separately owned lane while retaining these vectors as the mathematical overlays.

The asset-level provenance, counts, non-color cues, and remaining print checks are recorded in `art/vectors/ch08/METHOD_ART_LEDGER.md`.
