# Visual system

The definitive direction is in `book/BOOK_SPEC.md`. This file is the implementation ledger for shared design decisions.

## Semantic palette

| Role | Color | Secondary encoding |
| --- | --- | --- |
| Starting quantity | Blue `#2764B8` | solid outline |
| Adjustment / addition | Orange `#D97706` | diagonal hatch |
| Removal / correction | Red `#C2413B` | strike / dashed outline |
| Result | Green `#287A55` | heavy double outline |
| Transformation | Purple `#7652A8` | dotted connector |
| Motion | Teal `#087E8B` | arrow / trail |
| Inactive structure | Gray `#68707A` | low-contrast fill |

Color never carries meaning alone. All diagrams require labels, pattern, shape, outline, or position as a redundant cue.

## Typography

Use a legible humanist sans-serif with a system fallback for the web prototype. Mathematical expressions remain selectable text whenever practical.

## Diagram conventions

- Use the shared primitives in `art/vectors/system/diagram-primitives.svg` for ten-frames, unit arrays, fraction bars, number-line ticks, and transformation arrows.
- Keep mathematical labels in selectable HTML/SVG text; never bake equations or quantities into raster artwork.
- Every quantity-bearing diagram gets a count note in its chapter brief and a redundant structural cue: grouping, outline, texture, position, or label in addition to color.
- Use a 4 px minimum stroke in print-sized exports and a 2 px minimum stroke at the web scale. Preserve a 16 px minimum gap around labels and controls.

## Accessibility and responsive rules

- Provide an informative `alt` description for every meaningful figure; use empty alt text only for decorative repeats.
- Pair color with pattern, stroke, shape, or position. The palette is checked against adjacent backgrounds and remains legible in grayscale.
- Keep diagrams inside a responsive wrapper with `max-width: 100%`, allow horizontal scrolling only for genuinely wide number lines, and never clip labels at narrow widths.
- Preserve visible keyboard focus and a logical reading order. The equation, legend, and figure description must remain understandable without hover, animation, or color perception.
- Record source, dimensions, intended chapter, quantity checks, and accessibility notes beside each production asset.

## Provenance ledger

The primitives are original, hand-authored SVG implementation assets. They contain no external imagery or generated raster text. Their canonical viewBox is `0 0 1200 800`; production exports may scale this viewBox without changing quantities or stroke semantics.
