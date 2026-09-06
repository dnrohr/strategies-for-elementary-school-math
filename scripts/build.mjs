import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ROOT, escapeHtml, loadChapters, pageShell, renderMarkdown, writeFileEnsured } from "./lib.mjs";

const OUTPUT = path.join(ROOT, "_site");

function chapterCard(chapter) {
  const number = chapter.chapter === 0 ? "INTRO" : String(chapter.chapter).padStart(2, "0");
  return `<article class="chapter-card" data-search="${escapeHtml(`${chapter.title} ${chapter.part}`.toLowerCase())}">
    <a href="chapters/${chapter.slug}/" aria-label="Open ${escapeHtml(chapter.title)}">
      <span class="chapter-number">${number}</span>
      <span class="chapter-part">${escapeHtml(chapter.part)}</span>
      <h3>${escapeHtml(chapter.title)}</h3>
      <span class="card-meta"><span class="status status-${chapter.status}">${escapeHtml(chapter.status)}</span>${chapter.strategy_target !== "n/a" ? `<span>${escapeHtml(chapter.strategy_target)} strategies</span>` : ""}</span>
    </a>
  </article>`;
}

export async function build() {
  await fs.rm(OUTPUT, { recursive: true, force: true });
  const chapters = await loadChapters();
  const indexContent = `<section class="hero">
    <p class="eyebrow">An illustrated cognitive atlas</p>
    <h1>One answer.<br><em>Many minds.</em></h1>
    <p class="lede">Elementary arithmetic is simple enough to reveal something wonderfully complicated: two people can use the same mathematics and experience it very differently.</p>
    <a class="start-link" href="chapters/frontmatter/">Begin with your own mind <span aria-hidden="true">→</span></a>
  </section>
  <section class="atlas" aria-labelledby="atlas-title">
    <div class="section-heading"><div><p class="eyebrow">The working book</p><h2 id="atlas-title">Explore the chapters</h2></div>
    <label class="search"><span>Filter chapters</span><input type="search" data-chapter-search placeholder="Try “fractions”"></label></div>
    <p class="search-status" data-search-status aria-live="polite"></p>
    <div class="chapter-grid">${chapters.map(chapterCard).join("\n")}</div>
  </section>
  <section class="axis-panel"><p class="eyebrow">The recurring question</p><h2>What did you do—and how did it appear?</h2><div class="axis-grid"><article><span>A</span><h3>Computational strategy</h3><p>Counting, retrieval, decomposition, compensation, relationship, geometry, embodiment, or pattern.</p></article><article><span>B</span><h3>Mental representation</h3><p>Words, numerals, objects, space, movement, abstraction—or a changing mixture.</p></article></div></section>`;

  await writeFileEnsured(path.join(OUTPUT, "index.html"), pageShell({ title: "Explore", content: indexContent, description: "Explore many ways minds solve elementary arithmetic." }));

  for (let index = 0; index < chapters.length; index += 1) {
    const chapter = chapters[index];
    const prev = chapters[index - 1];
    const next = chapters[index + 1];
    const nav = `<nav class="chapter-nav" aria-label="Chapter navigation">${prev ? `<a href="../${prev.slug}/">← ${escapeHtml(prev.title)}</a>` : "<span></span>"}${next ? `<a href="../${next.slug}/">${escapeHtml(next.title)} →</a>` : ""}</nav>`;
    const manuscriptBody = chapter.body.replace(/^#\s+.+(?:\r?\n)+/, "");
    const content = `<article class="manuscript"><header class="chapter-hero"><a class="back-link" href="../../">← All chapters</a><p class="eyebrow">${escapeHtml(chapter.part)} · ${chapter.chapter === 0 ? "Introduction" : `Chapter ${chapter.chapter}`}</p><div class="chapter-title-row"><h1>${escapeHtml(chapter.title)}</h1><span class="status status-${chapter.status}">${escapeHtml(chapter.status)}</span></div>${chapter.strategy_target !== "n/a" ? `<p class="strategy-target">Target: ${escapeHtml(chapter.strategy_target)} genuinely distinct approaches</p>` : ""}</header><div class="prose">${renderMarkdown(manuscriptBody)}</div>${nav}</article>`;
    await writeFileEnsured(path.join(OUTPUT, "chapters", chapter.slug, "index.html"), pageShell({ title: chapter.title, root: "../../", content, description: `${chapter.title}, a chapter in How We Think About Arithmetic.` }));
  }

  const about = `<article class="manuscript"><header class="chapter-hero"><a class="back-link" href="../">← All chapters</a><p class="eyebrow">About this edition</p><h1>A book being made in public</h1></header><div class="prose"><p>This explorer is generated directly from the production manuscript. Status labels distinguish scaffolds from drafts and reviewed chapters.</p><h2>Editorial promise</h2><p>First-person descriptions are constructed examples unless explicitly identified as sourced quotations. They make plausible strategies vivid; they are not presented as research-participant testimony.</p><h2>Two independent axes</h2><p>The project distinguishes a solver’s mathematical transformation from the sensory, symbolic, spatial, embodied, or non-sensory format in which it may be experienced.</p></div></article>`;
  await writeFileEnsured(path.join(OUTPUT, "about", "index.html"), pageShell({ title: "About", root: "../", content: about, description: "Editorial and epistemic notes for the working edition." }));

  await fs.cp(path.join(ROOT, "site", "assets"), path.join(OUTPUT, "assets"), { recursive: true });
  await writeFileEnsured(path.join(OUTPUT, "404.html"), pageShell({ title: "Page not found", content: `<section class="not-found"><p class="eyebrow">404</p><h1>This path has no number line.</h1><p><a class="start-link" href="./">Return to the atlas</a></p></section>`, description: "Page not found." }));
  console.log(`Built ${chapters.length} production entries in ${path.relative(ROOT, OUTPUT)}.`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await build();
