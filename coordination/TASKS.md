# Parallel Production Board

Task packets define conflict-free ownership. A coordinator can launch chapter tasks simultaneously because each chapter owns separate manuscript, research, and art-brief paths.

## Ready lanes

| Task | Focus | Primary output | Dependencies |
| --- | --- | --- | --- |
| `CH00` | Front matter and reader legend | `00_frontmatter.md` | visual system |
| `CH01`–`CH14` | One chapter apiece | chapter manuscript + scoped notes/briefs | topic research may proceed in parallel |
| `CH99` | Chapter notes and bibliography assembly | `99_notes_bibliography.md` | verified source log |
| `R01` | Arithmetic strategy development | verified research notes | none |
| `R02` | Fingers, embodiment, imagery, inner speech | verified research notes | none |
| `R03` | Fractions and proportional reasoning | verified research notes | none |
| `DESIGN` | Visual system and reusable diagram conventions | layout documentation/assets | book spec |
| `WEB` | Explorer behavior and accessibility | `site/`, `scripts/` | manuscript schema |
| `QA` | Cross-chapter audit | issue notes only | draft chapters |

## Suggested launch waves

**Wave 1:** `R01`, `R02`, `R03`, `DESIGN`.

**Wave 2:** `CH00`–`CH07`; each chapter agent consumes verified research as available but may inventory strategies immediately.

**Wave 3:** `CH08`–`CH14`, then `CH99` and `QA`.

Keep coordination conversational: task status lives in agent/task reports and commits, not a hot shared checkbox file.
