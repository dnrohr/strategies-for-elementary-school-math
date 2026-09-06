import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { build } from "../scripts/build.mjs";
import { ROOT, escapeHtml, parseFrontMatter, renderMarkdown } from "../scripts/lib.mjs";
import { validateChapter, validateRepository } from "../scripts/validate.mjs";

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

test("renderer escapes raw HTML while rendering basic Markdown", () => {
  const rendered = renderMarkdown("## Safe\n\n<script>alert(1)</script> and **bold**");
  assert(!rendered.includes("<script>"));
  assert(rendered.includes("&lt;script&gt;"));
  assert(rendered.includes("<strong>bold</strong>"));
  assert.equal(escapeHtml('a&\"b'), "a&amp;&quot;b");
});

test("repository validates and build emits every manifest page", async () => {
  assert.deepEqual(await validateRepository(), []);
  await build();
  const manifest = JSON.parse(await fs.readFile(path.join(ROOT, "book", "CHAPTERS.json"), "utf8"));
  for (const chapter of manifest) {
    const page = await fs.readFile(path.join(ROOT, "_site", "chapters", chapter.slug, "index.html"), "utf8");
    assert(page.includes(chapter.title.replaceAll("&", "&amp;")));
  }
});
