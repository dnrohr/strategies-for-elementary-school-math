# CH07 image review — Area of a 7 × 9 rectangle

Task ID: `QA-IMAGE-REVIEW`
Review date: 2026-09-08
Scope: the opening image and all 12 reader-facing method images, including full-resolution inspection of the tile-placement composite.

## Overall opinion

This is visually one of the strongest chapters. Rectangles, rows, and partitions stay coherent across methods. The remaining weaknesses are a few dense traversal paths, labels placed over grids, and an organic tile image whose empty field outweighs the mathematical action.

## Priority findings

- Refine Methods 02, 08, and 09 for clearer movement and composition.
- Move labels outside the countable grids in Methods 06 and 07.
- Keep Methods 03, 05, 10, and 12 as models for geometric clarity.

## Image-by-image review

| Image | Disposition | Opinion |
| --- | --- | --- |
| `art/vectors/ch07/area-seven-by-nine.svg` | Pass | The 5+4 partition is proportional, fully tiled, and clearly reconnects the partial areas to 63. |
| `art/vectors/ch07/ch07_m01_retrieve-sixty-three.svg` | Minor | The sparse rectangle-to-result treatment fits retrieval, though an empty rectangle communicates dimensions weakly without edge labels. |
| `art/vectors/ch07/ch07_m02_count-unit-squares.svg` | Major | The serpentine path is mathematically plausible but hard to trace because turns lack directional heads and only selected cumulative counts are labeled. Add small row-end arrows or number every row endpoint consistently. |
| `art/vectors/ch07/ch07_m03_seven-rows-of-nine.svg` | Pass | Alternating row shading and cumulative totals make seven equal rows immediately legible. |
| `art/vectors/ch07/ch07_m04_rotate-nine-rows.svg` | Minor | The before/after grids show preserved area well; the rotation arrow is somewhat bulky but does not obscure the shapes. |
| `art/vectors/ch07/ch07_m05_ten-minus-seven.svg` | Pass | The narrow hatched column makes “70 minus 7” exact and visually immediate. |
| `art/vectors/ch07/ch07_m06_split-seven-five-two.svg` | Minor | The 5-row/2-row partition is clear, but white calculation labels conceal cells. Put the equations outside the grid or use transparent edge labels. |
| `art/vectors/ch07/ch07_m07_split-nine-five-four.svg` | Minor | The vertical partition works well; again, large white labels cover too many cells and reduce countability. |
| `art/composites/ch07/ch07_m08_place-final-tile.svg` | Major | The hand and tile are anatomically plausible, but the hand floats in a large blank field and the dotted path lands near a tiny target. Crop tighter and show the final tile aligned squarely with the missing cell. |
| `art/vectors/ch07/ch07_m09_eye-traversal.svg` | Major | Row-by-row scanning is evident, but large turn arrows overlap the grid edge and nearby cumulative labels. Smaller heads outside the rectangle would clarify the six transitions. |
| `art/vectors/ch07/ch07_m10_add-two-areas.svg` | Pass | Two adjacent proportional areas with 35 and 28 form a direct, uncluttered composition to 63. |
| `art/vectors/ch07/ch07_m11_written-product.svg` | Pass | The large mental result and small exact grid successfully contrast numeral workspace with geometric context. |
| `art/vectors/ch07/ch07_m12_benchmark-check.svg` | Pass | Side-by-side 7×10 and 7×9 grids make the removed seven-cell column and exact benchmark check easy to see. |
