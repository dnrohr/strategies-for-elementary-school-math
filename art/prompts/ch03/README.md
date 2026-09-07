# CH03 art prompts

No raster assets are generated yet. These briefs are the source of truth for later illustration and layout. All numerals, arrows, labels, and quantity overlays must be added as exact vector/layout elements rather than generated inside raster art.

Required checks for every CH03 figure:

- 37 + 48 and every intermediate value are correct.
- The 15 ones in regrouping scenes are visible and exactly countable.
- The exchange is exactly 10 ones for 1 ten; the written carry must match.
- Number-line jumps are labeled by value and use correct direction.
- Currency is an optional analogy, not a culturally universal assumption.
- Hands and gestures, if added, receive anatomy QA; no raster text.

## Production-vector records

Fourteen 1200×800 SVGs named `ch03_m01_*.svg` through `ch03_m14_*.svg` implement the chapter gallery. Each is original, vector-only, and includes selectable labels, `role="img"`, canonical `aria-labelledby="title desc"`, and method-specific title/description text. Use semantic palette plus redundant labels, pattern, grouping, stroke style, arrow direction, or double result outlines.

Exact route index:

1. Split `37 = 30 + 7`, `48 = 40 + 8`; join 70 and 15 to 85.
2. Add 40 to 77, then exactly eight +1 arrows to 85.
3. Temporarily use 50: 37+50=87, then correct −2 to 85.
4. Split 48 into 43+5; bridge 37 to 80, then 85.
5. Transfer exactly 3 units: 37→40 and 48→45; total remains 85.
6. Align columns; explicitly explain carried 1 as `15 ones = 1 ten + 5 ones`.
7. Before panel has exactly 7 rods and 15 cubes; exchange 10; after has 8 rods and 5 cubes.
8. Top-down unit view has 7 rods and 15 ones grouped as 10+5; result 8 tens+5 ones.
9. Before has 7 dime tokens and 15 penny tokens; after has 8 dimes and 5 pennies; mark currency as optional analogy.
10. Proportional line shows +40 and +8, with decade ticks that prevent reading +40 as four units.
11. Mental page has exact carry and a non-anatomical motion trace.
12. Speech ribbons preserve 30+40=70, 7+8=15, and 70+15=85; include the ones exchange.
13. Mark 77 as a stepping-stone, not the final answer.
14. Sparse retrieval to 85; optional decomposition check; no brain, mystical, or fixed-type imagery.

Organic-art note: no figure strictly requires a person. M07/M09 physical manipulation and M11 imagined writing may receive later professionally illustrated gestures as composites. Do not draw crude vector anatomy; retain these SVGs as exact overlays and re-run anatomy/orientation QA if organic art is added.

Full provenance, alt-text intent, exact counts, and remaining QA are in `art/vectors/ch03/METHOD_ART_LEDGER.md`.
