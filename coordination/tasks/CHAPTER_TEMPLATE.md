# Task `{TASK_ID}` — Chapter `{NN}`

## Objective

Develop the chapter from scaffold toward a research-supported, illustration-ready manuscript while preserving the distinction between computational strategy and subjective representation.

## Owned paths

- `book/manuscript/{chapter-file}.md`
- `research/chapters/ch{NN}/**`
- `art/prompts/ch{NN}/**`

Do not edit the global bibliography or shared templates. Put proposed global citations in `research/chapters/ch{NN}/handoff.md` for the research maintainer.

## Deliverables

- Strategy inventory meeting the target breadth without trivial duplicates
- 40–120 word constructed first-person accounts
- 3–6 mathematically correct steps per method
- Illustration brief, mathematical note, research note, and tags per method
- Cross-classification showing selected algorithms in multiple representational formats
- Completed chapter QA checklist with unresolved items clearly marked

## Checks

Run `npm run check`. Visually inspect the chapter in `npm run dev`. Do not promote status beyond `draft` without verified research and math review.
