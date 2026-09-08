---
chapter: 99
slug: notes-bibliography
title: "Notes and bibliography"
part: "Back matter"
status: draft
strategy_target: "n/a"
---

# Notes and bibliography

## Opening spread

This back matter records what the book's research can and cannot support. The
strategy voices throughout the book are **constructed representative accounts**
unless a passage is explicitly identified as a sourced quotation. They make
possible ways of solving vivid; they are not reports from named children, and
they do not establish how often any person uses a particular strategy or mode
of experience.

The book keeps two questions separate: (1) what mathematical transformation is
being performed, and (2) what might that transformation feel or look like to a
solver. The first can often be checked from the written mathematics. The
second is an illustrative possibility unless a study directly measured it.
Working-memory interference, finger-related measures, response time, or brain
activation can make a representation plausible under particular conditions;
none of those measures is a transparent transcript of private experience.

## Strategy gallery

### How to read the notes

Each chapter handoff names the source IDs used during drafting. IDs refer to
the canonical ledger at [`research/source_log.csv`](../../research/source_log.csv),
which records the DOI or stable URL, locator, supported claim, evidence note,
and verification status. The human-readable bibliography is maintained at
[`research/bibliography.md`](../../research/bibliography.md).

**Verified** means that the directly relevant source text (or a complete
author/institution copy) and the bibliographic record were inspected for the
logged claim. The internal ledger also retains **screened** abstract-only leads,
but those records are deliberately excluded from reader-facing chapter claims
and from the coverage map below.

### Coverage map for the fraction and coordination chapters

| Chapter | Problem | Full-text-verified source IDs used |
| --- | --- | --- |
| CH08 | `3/4 of 20` | R03-004, R03-005, R03-006, R03-007, R03-012, R03-014 |
| CH09 | `3/5` versus `5/8` | R03-004, R03-005, R03-006, R03-007, R03-012, R03-014 |
| CH10 | 23 shared among 5 | R03-004, R03-012 |
| CH11 | `27 × 46` | R01-002, R01-007, R01-008, R01-013, R02-I04, R02-I05, R02-I07 |
| CH12 | `378 + 596 + 247` | R01-007, R01-008, R01-010, R02-I04, R02-I05, R02-I07 |
| CH13 | `2/3 + 5/8` | R01-007, R01-008, R03-004, R03-005, R03-006, R03-011, R03-012, R03-013, R03-014 |
| CH14 | `3/4 + 2/3 + 5/12` | R01-007, R01-008, R03-004, R03-005, R03-006, R03-011, R03-012, R03-013, R03-014 |

The map is an editorial audit, not a claim that every source applies equally
to every method. A verified paper may support a narrow claim about magnitude,
representation, or conceptual/procedural relations without supporting a
particular first-person account. Chapter handoffs are the more precise record
of each claim boundary.

### Earlier chapters and cross-book sources

The same distinction applies to CH00–CH07. Their handoffs identify sources
used for strategy development, conceptual/procedural interaction, fingers and
gesture, inner speech, and working-memory resources. Verified anchors include
R01-002, R01-007, R01-008, R01-010, R01-013, R01-014, R02-F01, R02-F02,
R02-F05, R02-F07, R02-I01, and R02-I04–R02-I07. Screened IDs retained in the
internal ledger do not support manuscript claims.

## Cross-classification

Not applicable.

## Research notes

### Evidence inventory

The Wave 1 ledger contains **42 non-duplicate records**: **24 verified** and
**18 screened**. Screened records have stable metadata and authoritative
abstract or record checks, but require direct full-text review before their
claims can be promoted. The current working bibliography separates these
groups explicitly.

Verified evidence supports bounded statements about overlapping and changing
strategy repertoires, conceptual/procedural interaction, fraction magnitude
and representations, task-sensitive finger measures, and heterogeneous inner
speech. It does **not** establish that a particular solver uses a depicted
phenomenology, that strategy categories are fixed learner types, that one
method is universally best, or that the chapter sequence is a universal path.

### Source-status protocol

Before a screened source is used to support reader-facing empirical prose:

1. inspect the full article or an authoritative complete copy;
2. confirm the exact sample, task, result, and locator;
3. narrow the claim to what the inspected text supports;
4. update `research/source_log.csv` and `research/bibliography.md` together;
5. ask the relevant chapter owner to recheck wording.

No chapter should silently upgrade a screened ID. If full text cannot be
obtained, keep the item in **Questions / leads** or remove the claim.

### Notes for CH08–CH14

The fraction chapters should distinguish fraction as quantity, operator,
measure, quotient, and part-whole relation rather than treating one diagram as
the fraction itself. Whole-number bias and common-denominator procedures are
useful topics for later review, but screened records must not be presented as
settled explanations. For CH13 and CH14, exact common-unit arithmetic is
mathematically checkable; the research notes concern representations and
learning, not the truth of the calculation.

CH10's sharing scene should distinguish equal sharing from a complete
whole-number quotient. If the five-way share is written as `4 3/5`, label the
remainder and unit explicitly. Do not imply that a fraction answer is an error
or that every solver imagines children, bowls, or candies.

CH11 and CH12 coordinate several transformations. Their adult-facing notes
should keep written format, working-memory demand, strategy selection, and
private imagery separate. A mental written algorithm is a constructed visual
possibility, not evidence that all solvers see an internal page.

### Constructed-account disclosure for layout

Retain this note near the first strategy gallery and wherever a spread could
resemble an interview transcript:

> The first-person descriptions in this book are constructed examples designed
> to make different plausible strategies vivid. They are not quotations from
> research participants unless explicitly identified as such.

## Chapter QA

- [x] The manuscript has the required five level-two sections.
- [x] Constructed first-person accounts are distinguished from empirical claims.
- [x] Verified and screened source statuses are defined and kept separate; only verified records support manuscript claims.
- [x] CH08–CH14 have explicit source-coverage entries and handoff references.
- [x] No new citation, participant detail, developmental claim, or quotation was invented.
- [x] Remove abstract-only screened records from reader-facing manuscript support.
- [ ] Perform final endnote, link, and quotation checks after substantive edits.
- [x] Complete final art and quantity review across the book.
- [x] Complete final broad accessibility and layout review across the book.

### Editorial roadmap

1. Run a chapter-by-chapter claim audit against the source ledger.
2. Add final endnotes and page locators after layout stabilizes.
3. Change chapter status from `draft` only after its own QA and citation review
   are recorded; reserve `final` for the complete production pass.
