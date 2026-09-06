import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { build } from "../scripts/build.mjs";
import { ROOT, escapeHtml, parseFrontMatter, renderMarkdown } from "../scripts/lib.mjs";
import { buildBibliography, serializeSourceLog } from "../scripts/merge-research.mjs";
import { parseCsv, validateChapter, validateRepository, validateSourceCsv } from "../scripts/validate.mjs";

test("front matter parser preserves body and typed chapter number", () => {
  const parsed = parseFrontMatter("---\nchapter: 3\ntitle: \"Example\"\n---\n# Body");
  assert.equal(parsed.data.chapter, 3);
  assert.equal(parsed.data.title, "Example");
  assert.equal(parsed.body, "# Body");
});

test("chapter validator reports schema drift", () => {
  const errors = validateChapter({ chapter: 1, slug: "one" }, { data: { chapter: 2, slug: "two", status: "invented" }, body: "" });
  assert(errors.some(error => error.includes("chapter must match")));
  assert(errors.some(error => error.includes("invalid status")));
  assert(errors.some(error => error.includes("missing section")));
});

test("chapter validator enforces the method schema when methods are present", () => {
  const parsed = { data: { chapter: 1, slug: "one", title: "One", part: "I", status: "draft", strategy_target: "12" }, body: "## Opening spread\n## Strategy gallery\n## Cross-classification\n## Research notes\n## Chapter QA\n## Method 01\n### First-person account\n### Steps\n### Illustration brief\n### Mathematical note\n### Research note\n### Tags" };
  assert.deepEqual(validateChapter({ chapter: 1, slug: "one" }, parsed), []);
  assert(validateChapter({ chapter: 1, slug: "one" }, { ...parsed, body: parsed.body.replace("### Tags", "") }).some(error => error.includes("method schema")));
});

test("renderer escapes raw HTML while rendering basic Markdown", () => {
  const rendered = renderMarkdown("## Safe\n\n<script>alert(1)</script> and **bold**");
  assert(!rendered.includes("<script>"));
  assert(rendered.includes("&lt;script&gt;"));
  assert(rendered.includes("<strong>bold</strong>"));
  assert.equal(escapeHtml('a&"b'), "a&amp;&quot;b");
});

test("renderer converts pipe-delimited Markdown tables to semantic HTML", () => {
  const rendered = renderMarkdown("| Route | Format |\n| --- | --- |\n| Count | Spatial |\n| Retrieve | Abstract |");
  assert(rendered.includes("<table>"));
  assert(rendered.includes("<thead>"));
  assert(rendered.includes('<th scope="col">Route</th>'));
  assert(rendered.includes("<td>Spatial</td>"));
  assert(!rendered.includes("| Route | Format |"));
});

test("CH09 twentieths model preserves the half-unit endpoint", async () => {
  const chapter = await fs.readFile(path.join(ROOT, "book", "manuscript", "09_compare_fractions.md"), "utf8");
  assert(chapter.includes("5/8 = 12.5/20"));
  assert.match(chapter, /5\/8 ends halfway through the thirteenth unit, not at 13 full units/);
});

test("research CSV parser handles quoted commas and validates records", () => {
  const header = "source_id,topic,chapter,citation,source_type,doi_or_url,locator,claim_supported,evidence_notes,verification_status,verified_by,verified_date";
  const source = `${header}\nR01-001,addition,01,"Author, A. (2026). Title.",study,https://doi.org/10.example/test,Abstract,Claim,Checked,verified,Codex,2026-09-06\n`;
  assert.equal(parseCsv(source)[1][3], "Author, A. (2026). Title.");
  assert.deepEqual(validateSourceCsv(source, "example.csv"), []);
  const duplicateErrors = validateSourceCsv(source, "duplicate.csv", new Set(["R01-001"]));
  assert(duplicateErrors.some(error => error.includes("duplicate source_id")));
  const record = Object.fromEntries(parseCsv(source)[0].map((field, index) => [field, parseCsv(source)[1][index]]));
  assert.equal(parseCsv(serializeSourceLog([record]))[1][3], "Author, A. (2026). Title.");
  assert(buildBibliography([record]).includes("Verified for manuscript use"));
});

test("repository validates and build emits every manifest page", async () => {
  assert.deepEqual(await validateRepository(), []);
  await build();
  const manifest = JSON.parse(await fs.readFile(path.join(ROOT, "book", "CHAPTERS.json"), "utf8"));
  for (const chapter of manifest) {
    const page = await fs.readFile(path.join(ROOT, "_site", "chapters", chapter.slug, "index.html"), "utf8");
    assert(page.includes(chapter.title.replaceAll("&", "&amp;")));
    assert.equal((page.match(/<h1\b/g) || []).length, 1, `${chapter.slug} should have one h1`);
  }
});
