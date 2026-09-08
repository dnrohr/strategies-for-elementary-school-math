import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "./build.mjs";
import { ROOT, escapeHtml, loadChapters, renderMarkdown, writeFileEnsured } from "./lib.mjs";

const HTML_OUTPUT = path.join(ROOT, "output", "html");
const PDF_OUTPUT = path.join(ROOT, "output", "pdf");
const PDF_TEMP = path.join(ROOT, "tmp", "pdfs");

const MIME_TYPES = new Map([
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"]
]);

function assertInside(target, parent) {
  const relative = path.relative(parent, target);
  if (!relative || relative.startsWith("..") || path.isAbsolute(relative)) throw new Error(`Refusing operation outside ${parent}: ${target}`);
}

async function inlineImages(html, pageDirectory) {
  let result = html;
  const sources = [...new Set([...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map(match => match[1]))];
  for (const source of sources) {
    if (source.startsWith("data:")) continue;
    const assetPath = path.resolve(pageDirectory, source);
    const mimeType = MIME_TYPES.get(path.extname(assetPath).toLowerCase());
    if (!mimeType) throw new Error(`Unsupported export image type: ${assetPath}`);
    const dataUri = `data:${mimeType};base64,${(await fs.readFile(assetPath)).toString("base64")}`;
    result = result.replaceAll(`src="${source}"`, `src="${dataUri}"`);
  }
  return result.replaceAll(' loading="lazy"', "").replaceAll(' decoding="async"', "");
}

function prefixIds(html, prefix) {
  return html
    .replace(/\sid="([^"]+)"/g, (_match, id) => ` id="${prefix}-${id}"`)
    .replace(/href="#([^"]+)"/g, (_match, id) => `href="#${prefix}-${id}"`);
}

function cleanChapterArticle(article, chapter) {
  const code = chapter.chapter === 99 ? "ch99" : `ch${String(chapter.chapter).padStart(2, "0")}`;
  return prefixIds(article, code)
    .replace(/<a class="back-link"[\s\S]*?<\/a>/, "")
    .replace(/<span class="status[^>]*>[\s\S]*?<\/span>/, "")
    .replace(/<p class="strategy-target">[\s\S]*?<\/p>/, "")
    .replace(/<nav class="chapter-nav"[\s\S]*?<\/nav>/, "")
    .replace(/<h3 id="[^"]*-illustration-brief">[\s\S]*?<\/h3>\s*<p>[\s\S]*?<\/p>/g, "")
    .replace(/<h3 id="[^"]*-research-note">[\s\S]*?<\/h3>\s*<p>[\s\S]*?<\/p>/g, "")
    .replace(/<h2 id="[^"]*-chapter-qa">[\s\S]*?<\/h2>\s*<ul>[\s\S]*?<\/ul>/g, "")
    .replace(/<h3 id="[^"]*-editorial-roadmap">[\s\S]*?<\/h3>\s*<ol>[\s\S]*?<\/ol>/g, "")
    .replace(/<a href="(?:\.\.\/|\.\/)[^"]*">([\s\S]*?)<\/a>/g, "$1");
}

function exportCss(mode) {
  const screen = mode === "screen";
  const pageSize = screen ? "7.5in 10in" : "Letter";
  const paper = screen ? "#f5efe3" : "#ffffff";
  const card = screen ? "#fffdf7" : "#ffffff";
  const baseSize = screen ? "8.7pt" : "9.4pt";
  const pageMargin = screen ? ".42in .46in .55in" : ".55in .58in .68in";
  const figureHeight = screen ? "3.65in" : "4.35in";
  return `
    @page {
      size: ${pageSize};
      margin: ${pageMargin};
      @bottom-center { content: counter(page) "  ·  How We Think About Arithmetic"; color: #5f665f; font: 8pt "Segoe UI", sans-serif; }
    }
    :root { --paper:${paper}; --card:${card}; --ink:#17241f; --muted:#5f665f; --orange:#984500; --green:#287a55; --line:#cfc8bc; font-family:"Atkinson Hyperlegible","Segoe UI",Arial,sans-serif; }
    * { box-sizing:border-box; }
    html, body { margin:0; padding:0; color:var(--ink); background:var(--paper); font-size:${baseSize}; line-height:${screen ? "1.34" : "1.42"}; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
    body { counter-reset: chapter; }
    a { color:inherit; text-underline-offset:.16em; }
    .cover { min-height:8.6in; display:grid; align-content:center; break-after:page; position:relative; padding:.35in; }
    .cover::after { content:"12"; position:absolute; right:0; top:.15in; z-index:0; color:transparent; -webkit-text-stroke:1px #d8d1c5; font:700 220pt Georgia,serif; transform:rotate(6deg); }
    .cover > * { position:relative; z-index:1; }
    .kicker { color:var(--orange); font-weight:800; letter-spacing:.14em; text-transform:uppercase; }
    .cover h1 { max-width:6in; margin:.18in 0; font:500 48pt/1 Georgia,serif; letter-spacing:-.035em; }
    .cover h1 em { color:var(--green); font-weight:500; }
    .subtitle { max-width:5.3in; color:var(--muted); font-size:16pt; }
    .edition { margin-top:.5in; color:var(--muted); font-size:9pt; text-transform:uppercase; letter-spacing:.1em; }
    .contents { break-after:page; padding:.15in 0; }
    .contents h2, .references h2 { font:500 28pt Georgia,serif; }
    .contents ol { columns:2; column-gap:.35in; padding-left:.25in; }
    .contents li { break-inside:avoid; margin:0 0 .12in; }
    .export-chapter { counter-increment:chapter; }
    .chapter-hero { break-before:page; border-bottom:1px solid var(--line); padding:.15in 0 .3in; }
    .export-chapter:first-of-type .chapter-hero { break-before:auto; }
    .chapter-hero .eyebrow { color:var(--orange); font-size:8pt; font-weight:800; letter-spacing:.12em; text-transform:uppercase; }
    .chapter-title-row h1 { margin:.08in 0; font:500 32pt/1.03 Georgia,serif; letter-spacing:-.025em; }
    .chapter-figure, .method-figure { margin:.22in auto; padding:.12in; border:1px solid var(--line); border-radius:.12in; background:var(--card); break-inside:avoid; }
    .chapter-figure img, .method-figure img { display:block; width:100%; max-height:${figureHeight}; object-fit:contain; }
    figcaption { margin-top:.06in; color:var(--muted); font-size:7.6pt; }
    .prose { max-width:100%; }
    .prose h2 { margin:.24in 0 .12in; font:500 20pt/1.08 Georgia,serif; letter-spacing:-.018em; }
    .prose h2[id*="-method-"] { break-before:page; margin-top:0; font-size:${screen ? "20pt" : "23pt"}; }
    .prose h2[id$="-cross-classification"], .prose h2[id$="-research-notes"] { break-before:page; }
    .prose h3 { margin:${screen ? ".1in" : ".15in"} 0 .05in; font-size:${screen ? "8.7pt" : "10pt"}; text-transform:uppercase; letter-spacing:.055em; }
    .prose p { margin:.045in 0 ${screen ? ".08in" : ".12in"}; }
    .prose blockquote { margin:${screen ? ".08in" : ".12in"} 0; padding:${screen ? ".08in .14in" : ".12in .18in"}; border-left:4px solid var(--orange); background:var(--card); font:500 ${screen ? "10.5pt/1.3" : "12pt/1.38"} Georgia,serif; break-inside:avoid; }
    .prose ol, .prose ul { margin:.045in 0 ${screen ? ".08in" : ".13in"}; padding-left:.25in; }
    .prose li { margin:.025in 0; }
    .prose code { padding:.02in .045in; border-radius:.03in; background:#ebe5da; font-size:.92em; }
    .prose table { width:100%; border-collapse:collapse; font-size:8pt; }
    .prose th, .prose td { padding:.065in; border:1px solid var(--line); text-align:left; vertical-align:top; overflow-wrap:anywhere; }
    .prose th { background:#e9dfcc; }
    h3[id$="-illustration-brief"], h3[id$="-illustration-brief"] + p,
    h3[id$="-research-note"], h3[id$="-research-note"] + p,
    h2[id$="-chapter-qa"], h2[id$="-chapter-qa"] + ul,
    h3[id$="-editorial-roadmap"], h3[id$="-editorial-roadmap"] + ol { display:none; }
    .references { break-before:page; }
    .references li { margin-bottom:.1in; }
    .production-note { break-before:page; color:var(--muted); font-size:9pt; }
    @media print { a { text-decoration:none; } }
  `;
}

async function editionHtml(mode) {
  const chapters = await loadChapters();
  const articles = [];
  for (const chapter of chapters) {
    const pagePath = path.join(ROOT, "_site", "chapters", chapter.slug, "index.html");
    const page = await fs.readFile(pagePath, "utf8");
    const article = page.match(/<article class="manuscript">([\s\S]*)<\/article>/)?.[0];
    if (!article) throw new Error(`Could not extract chapter article for ${chapter.slug}`);
    const embedded = await inlineImages(cleanChapterArticle(article, chapter), path.dirname(pagePath));
    const code = chapter.chapter === 0 ? "Introduction" : chapter.chapter === 99 ? "Notes" : `Chapter ${chapter.chapter}`;
    articles.push(`<section class="export-chapter" id="chapter-${chapter.chapter}" aria-label="${escapeHtml(code)}">${embedded}</section>`);
  }
  const bibliography = await fs.readFile(path.join(ROOT, "research", "bibliography.md"), "utf8");
  const verified = bibliography.split("## Verified for manuscript use")[1]?.split("## Screened")[0]?.trim();
  if (!verified) throw new Error("Verified bibliography section is missing");
  const references = renderMarkdown(`## References\n\n${verified}`);
  const toc = chapters.map(chapter => `<li><a href="#chapter-${chapter.chapter}">${chapter.chapter === 0 ? "Introduction" : chapter.chapter === 99 ? "Notes and bibliography" : `Chapter ${chapter.chapter}`}: ${escapeHtml(chapter.title)}</a></li>`).join("");
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="An illustrated cognitive atlas of many ways to solve elementary arithmetic."><title>How We Think About Arithmetic · ${mode === "screen" ? "Screen" : "Print"} Edition</title><style>${exportCss(mode)}</style></head>
<body data-edition="${mode}"><section class="cover"><p class="kicker">An illustrated cognitive atlas</p><h1>How We Think<br><em>About Arithmetic</em></h1><p class="subtitle">Many Minds, One Problem</p><p class="edition">${mode === "screen" ? "Screen-optimized edition" : "Print-ready edition"} · September 2026</p></section><nav class="contents" aria-label="Contents"><h2>Contents</h2><ol>${toc}</ol></nav>${articles.join("\n")}<section class="references">${references}</section><section class="production-note"><h2>About this edition</h2><p>The first-person descriptions are constructed representative accounts, not research-participant quotations unless explicitly identified otherwise. Mathematical strategies and representational formats are classified independently. All reader-facing empirical source IDs in this edition map to full-text-verified records.</p></section></body></html>`;
}

async function existingEdge() {
  for (const candidate of [process.env.EDGE_PATH, "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe", "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe", "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge", "/usr/bin/microsoft-edge"].filter(Boolean)) {
    try { await fs.access(candidate); return candidate; } catch { /* try next */ }
  }
  throw new Error("Microsoft Edge was not found. Set EDGE_PATH to a Chromium-compatible browser executable.");
}

async function waitForPdf(pdfPath, timeoutMs = 60_000) {
  const started = Date.now();
  let previousSize = -1;
  let stableChecks = 0;
  while (Date.now() - started < timeoutMs) {
    try {
      const { size } = await fs.stat(pdfPath);
      if (size > 1024 && size === previousSize) stableChecks += 1;
      else stableChecks = 0;
      if (stableChecks >= 2) return;
      previousSize = size;
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  throw new Error(`Timed out waiting for PDF output: ${pdfPath}`);
}

async function renderPdf(edgePath, htmlPath, pdfPath, profilePath) {
  assertInside(pdfPath, PDF_OUTPUT);
  assertInside(profilePath, PDF_TEMP);
  await fs.rm(pdfPath, { force: true });
  await fs.rm(profilePath, { recursive: true, force: true });
  await fs.mkdir(profilePath, { recursive: true });
  const result = spawnSync(edgePath, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--no-pdf-header-footer",
    "--allow-file-access-from-files",
    `--user-data-dir=${profilePath}`,
    `--print-to-pdf=${pdfPath}`,
    pathToFileURL(htmlPath).href
  ], { encoding: "utf8", timeout: 180_000, maxBuffer: 4 * 1024 * 1024 });
  if (result.status !== 0) throw new Error(`PDF export failed (${result.status}): ${result.stderr || result.stdout}`);
  await waitForPdf(pdfPath);
  await fs.rm(profilePath, { recursive: true, force: true });
}

export async function exportBook() {
  await build();
  await fs.mkdir(HTML_OUTPUT, { recursive: true });
  await fs.mkdir(PDF_OUTPUT, { recursive: true });
  await fs.mkdir(PDF_TEMP, { recursive: true });
  const screenHtml = path.join(HTML_OUTPUT, "how-we-think-about-arithmetic.html");
  const printHtml = path.join(HTML_OUTPUT, "how-we-think-about-arithmetic-print.html");
  await writeFileEnsured(screenHtml, await editionHtml("screen"));
  await writeFileEnsured(printHtml, await editionHtml("print"));
  const edgePath = await existingEdge();
  await renderPdf(edgePath, screenHtml, path.join(PDF_OUTPUT, "how-we-think-about-arithmetic-screen.pdf"), path.join(PDF_TEMP, "edge-screen-profile"));
  await renderPdf(edgePath, printHtml, path.join(PDF_OUTPUT, "how-we-think-about-arithmetic-print.pdf"), path.join(PDF_TEMP, "edge-print-profile"));
  console.log("Exported self-contained HTML plus screen and print PDFs.");
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await exportBook();
