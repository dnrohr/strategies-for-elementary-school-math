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

function readSvgMetadata(source, fallback) {
  const title = source.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() || fallback;
  const description = source.match(/<desc[^>]*>([\s\S]*?)<\/desc>/i)?.[1]?.trim() || title;
  return { title, description };
}

function figureMarkup({ className, src, title, description, methodKey = "" }) {
  const dataAttribute = methodKey ? ` data-method-figure="${escapeHtml(methodKey)}"` : "";
  return `<figure class="${className}"${dataAttribute}><img src="${src}" alt="${escapeHtml(description)}" loading="lazy" decoding="async"><figcaption>${escapeHtml(title)}</figcaption></figure>`;
}

async function chapterArt(chapter) {
  if (chapter.chapter < 0 || chapter.chapter > 14) return { chapterFigure: "", methodFigures: new Map() };
  const code = String(chapter.chapter).padStart(2, "0");
  const sourceDirectories = [
    path.join(ROOT, "art", "vectors", `ch${code}`),
    path.join(ROOT, "art", "composites", `ch${code}`)
  ];
  const assets = [];
  for (const sourceDir of sourceDirectories) {
    try {
      for (const file of await fs.readdir(sourceDir)) if (file.endsWith(".svg")) assets.push({ file, sourceDir });
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }
  const destinationDir = path.join(OUTPUT, "assets", "figures", `ch${code}`);
  await fs.mkdir(destinationDir, { recursive: true });
  const methodFigures = new Map();
  const methodPattern = new RegExp(`^ch${code}_m(\\d{2})_[a-z0-9-]+\\.svg$`);
  const anchors = [];

  for (const { file: asset, sourceDir } of assets.sort((left, right) => left.file.localeCompare(right.file))) {
    let source = await fs.readFile(path.join(sourceDir, asset), "utf8");
    const metadata = readSvgMetadata(source, chapter.title);
    const rasterReference = source.match(new RegExp(`href="\\.\\.\\/\\.\\.\\/raster\\/ch${code}\\/([a-z0-9_-]+\\.png)"`));
    if (rasterReference) {
      const rasterFile = rasterReference[1];
      const rasterPath = path.join(ROOT, "art", "raster", `ch${code}`, rasterFile);
      const raster = await fs.readFile(rasterPath);
      await fs.copyFile(rasterPath, path.join(destinationDir, rasterFile));
      source = source.replace(rasterReference[0], `href="data:image/png;base64,${raster.toString("base64")}"`);
    }
    await fs.writeFile(path.join(destinationDir, asset), source, "utf8");
    const methodMatch = asset.match(methodPattern);
    if (methodMatch) {
      const methodNumber = methodMatch[1];
      if (methodFigures.has(methodNumber)) throw new Error(`CH${code} has more than one figure for Method ${methodNumber}`);
      methodFigures.set(methodNumber, figureMarkup({
        className: "method-figure",
        src: `../../assets/figures/ch${code}/${asset}`,
        title: metadata.title,
        description: metadata.description,
        methodKey: `${code}-${methodNumber}`
      }));
    } else {
      anchors.push({ asset, ...metadata });
    }
  }

  if (anchors.length > 1) throw new Error(`CH${code} has more than one chapter-level anchor SVG`);
  const chapterFigure = anchors.length === 1 ? figureMarkup({
    className: "chapter-figure",
    src: `../../assets/figures/ch${code}/${anchors[0].asset}`,
    title: anchors[0].title,
    description: anchors[0].description
  }) : "";
  return { chapterFigure, methodFigures };
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
    <div class="section-heading"><div><p class="eyebrow">The complete book</p><h2 id="atlas-title">Explore the chapters</h2></div>
    <label class="search"><span>Filter chapters</span><input type="search" data-chapter-search placeholder="Try “fractions”"></label></div>
    <p class="search-status" data-search-status aria-live="polite"></p>
    <div class="chapter-grid">${chapters.map(chapterCard).join("\n")}</div>
  </section>
  <section class="axis-panel" aria-labelledby="edition-title"><p class="eyebrow">Complete edition</p><h2 id="edition-title">Read it your way</h2><p>Explore every strategy here, or download the complete illustrated book.</p><p><a class="start-link" href="downloads/how-we-think-about-arithmetic-screen.pdf">Screen PDF</a> <a class="start-link" href="downloads/how-we-think-about-arithmetic-print.pdf">Print PDF</a> <a class="start-link" href="downloads/how-we-think-about-arithmetic.html">Self-contained HTML</a></p></section>
  <section class="axis-panel"><p class="eyebrow">The recurring question</p><h2>What did you do—and how did it appear?</h2><div class="axis-grid"><article><span aria-hidden="true">A</span><h3>Computational strategy</h3><p>Counting, retrieval, decomposition, compensation, relationship, geometry, embodiment, or pattern.</p></article><article><span aria-hidden="true">B</span><h3>Mental representation</h3><p>Words, numerals, objects, space, movement, abstraction—or a changing mixture.</p></article></div></section>`;

  await writeFileEnsured(path.join(OUTPUT, "index.html"), pageShell({ title: "Explore", content: indexContent, description: "Explore many ways minds solve elementary arithmetic." }));

  for (let index = 0; index < chapters.length; index += 1) {
    const chapter = chapters[index];
    const prev = chapters[index - 1];
    const next = chapters[index + 1];
    const nav = `<nav class="chapter-nav" aria-label="Chapter navigation">${prev ? `<a href="../${prev.slug}/">← ${escapeHtml(prev.title)}</a>` : "<span></span>"}${next ? `<a href="../${next.slug}/">${escapeHtml(next.title)} →</a>` : ""}</nav>`;
    const manuscriptBody = chapter.body.replace(/^#\s+.+(?:\r?\n)+/, "");
    const { chapterFigure, methodFigures } = await chapterArt(chapter);
    const manuscriptMethods = [...manuscriptBody.matchAll(/^## Method (\d{2})\b/gm)].map(match => match[1]);
    if (methodFigures.size && (methodFigures.size !== manuscriptMethods.length || manuscriptMethods.some(method => !methodFigures.has(method)))) {
      throw new Error(`CH${String(chapter.chapter).padStart(2, "0")} method art must cover every manuscript method once a method-art batch begins`);
    }
    const renderedBody = renderMarkdown(manuscriptBody, {
      afterHeading: ({ level, text }) => {
        if (level !== 2) return "";
        const methodNumber = text.match(/^Method (\d{2})\b/)?.[1];
        return methodNumber ? methodFigures.get(methodNumber) || "" : "";
      }
    });
    const content = `<article class="manuscript"><header class="chapter-hero"><a class="back-link" href="../../">← All chapters</a><p class="eyebrow">${escapeHtml(chapter.part)} · ${chapter.chapter === 0 ? "Introduction" : `Chapter ${chapter.chapter}`}</p><div class="chapter-title-row"><h1>${escapeHtml(chapter.title)}</h1><span class="status status-${chapter.status}">${escapeHtml(chapter.status)}</span></div>${chapter.strategy_target !== "n/a" ? `<p class="strategy-target">Target: ${escapeHtml(chapter.strategy_target)} genuinely distinct approaches</p>` : ""}</header>${chapterFigure}<div class="prose">${renderedBody}</div>${nav}</article>`;
    await writeFileEnsured(path.join(OUTPUT, "chapters", chapter.slug, "index.html"), pageShell({ title: chapter.title, root: "../../", content, description: `${chapter.title}, a chapter in How We Think About Arithmetic.` }));
  }

  const about = `<article class="manuscript"><header class="chapter-hero"><a class="back-link" href="../">← All chapters</a><p class="eyebrow">About this edition</p><h1>A complete illustrated cognitive atlas</h1></header><div class="prose"><p>This accessible explorer is generated directly from the final production manuscript. It contains 175 distinct methods across fourteen elementary arithmetic problems.</p><h2>Download the book</h2><p><a href="../downloads/how-we-think-about-arithmetic-screen.pdf">Screen-optimized PDF</a> · <a href="../downloads/how-we-think-about-arithmetic-print.pdf">Print-ready PDF</a> · <a href="../downloads/how-we-think-about-arithmetic.html">Self-contained screen HTML</a> · <a href="../downloads/how-we-think-about-arithmetic-print.html">Self-contained print HTML</a></p><h2>Editorial promise</h2><p>First-person descriptions are constructed examples unless explicitly identified as sourced quotations. They make plausible strategies vivid; they are not presented as research-participant testimony.</p><h2>Two independent axes</h2><p>The project distinguishes a solver’s mathematical transformation from the sensory, symbolic, spatial, embodied, or non-sensory format in which it may be experienced.</p></div></article>`;
  await writeFileEnsured(path.join(OUTPUT, "about", "index.html"), pageShell({ title: "About", root: "../", content: about, description: "Editorial and epistemic notes for the complete edition." }));

  const downloadSources = [
    path.join(ROOT, "output", "pdf", "how-we-think-about-arithmetic-screen.pdf"),
    path.join(ROOT, "output", "pdf", "how-we-think-about-arithmetic-print.pdf"),
    path.join(ROOT, "output", "html", "how-we-think-about-arithmetic.html"),
    path.join(ROOT, "output", "html", "how-we-think-about-arithmetic-print.html")
  ];
  await fs.mkdir(path.join(OUTPUT, "downloads"), { recursive: true });
  for (const source of downloadSources) {
    try {
      await fs.copyFile(source, path.join(OUTPUT, "downloads", path.basename(source)));
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }

  await fs.cp(path.join(ROOT, "site", "assets"), path.join(OUTPUT, "assets"), { recursive: true });
  await writeFileEnsured(path.join(OUTPUT, "404.html"), pageShell({ title: "Page not found", content: `<section class="not-found"><p class="eyebrow">404</p><h1>This path has no number line.</h1><p><a class="start-link" href="./">Return to the atlas</a></p></section>`, description: "Page not found." }));
  console.log(`Built ${chapters.length} production entries in ${path.relative(ROOT, OUTPUT)}.`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await build();
