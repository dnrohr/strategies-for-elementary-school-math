import fs from "node:fs/promises";
import path from "node:path";

export const ROOT = path.resolve(import.meta.dirname, "..");
export const MANUSCRIPT_DIR = path.join(ROOT, "book", "manuscript");

export function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function parseFrontMatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error("Missing YAML front matter");
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim()) continue;
    const field = line.match(/^([a-z_]+):\s*(.*)$/);
    if (!field) throw new Error(`Invalid front matter line: ${line}`);
    let value = field[2].trim().replace(/^(["'])(.*)\1$/, "$2");
    if (/^-?\d+$/.test(value)) value = Number(value);
    data[field[1]] = value;
  }
  return { data, body: match[2].trim() };
}

function inlineMarkdown(value) {
  let text = escapeHtml(value);
  text = text.replace(/`([^`]+)`/g, "<code>$1</code>");
  text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_all, label, href) => {
    const safeHref = /^(https?:\/\/|\.\.\/|\.\/|#)/.test(href) ? href : "#";
    return `<a href="${escapeHtml(safeHref)}">${label}</a>`;
  });
  return text;
}

export function renderMarkdown(markdown) {
  const lines = markdown.split(/\r?\n/);
  const html = [];
  let paragraph = [];
  let listType = null;
  let quote = [];

  const flushParagraph = () => {
    if (paragraph.length) html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };
  const flushList = () => {
    if (listType) html.push(`</${listType}>`);
    listType = null;
  };
  const flushQuote = () => {
    if (quote.length) html.push(`<blockquote><p>${inlineMarkdown(quote.join(" "))}</p></blockquote>`);
    quote = [];
  };
  const flush = () => { flushParagraph(); flushList(); flushQuote(); };

  const tableRow = line => line.trim().replace(/^\||\|$/g, "").split("|").map(cell => cell.trim());

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    const bullet = line.match(/^[-*]\s+(.*)$/);
    const ordered = line.match(/^\d+\.\s+(.*)$/);
    const blockquote = line.match(/^>\s?(.*)$/);
    const separator = lines[index + 1]?.trim().match(/^\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?$/);
    if (!line.trim()) { flush(); continue; }
    if (line.trim().startsWith("|") && separator) {
      flush();
      const headers = tableRow(line);
      const rows = [];
      index += 2;
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        rows.push(tableRow(lines[index]));
        index += 1;
      }
      index -= 1;
      html.push(`<table><thead><tr>${headers.map(cell => `<th>${inlineMarkdown(cell)}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${headers.map((_header, cellIndex) => `<td>${inlineMarkdown(row[cellIndex] ?? "")}</td>`).join("")}</tr>`).join("")}</tbody></table>`);
    } else if (heading) {
      flush();
      const level = heading[1].length;
      const id = heading[2].toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      html.push(`<h${level} id="${id}">${inlineMarkdown(heading[2])}</h${level}>`);
    } else if (bullet || ordered) {
      flushParagraph(); flushQuote();
      const wanted = ordered ? "ol" : "ul";
      if (listType !== wanted) { flushList(); html.push(`<${wanted}>`); listType = wanted; }
      html.push(`<li>${inlineMarkdown((bullet || ordered)[1])}</li>`);
    } else if (blockquote) {
      flushParagraph(); flushList(); quote.push(blockquote[1]);
    } else {
      flushList(); flushQuote(); paragraph.push(line.trim());
    }
  }
  flush();
  return html.join("\n");
}

export async function loadManifest() {
  return JSON.parse(await fs.readFile(path.join(ROOT, "book", "CHAPTERS.json"), "utf8"));
}

export async function loadChapters() {
  const manifest = await loadManifest();
  return Promise.all(manifest.map(async entry => {
    const source = await fs.readFile(path.join(MANUSCRIPT_DIR, entry.file), "utf8");
    const parsed = parseFrontMatter(source);
    return { ...entry, ...parsed.data, body: parsed.body, source };
  }));
}

export function pageShell({ title, root = "./", content, description }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="theme-color" content="#f5efe3">
  <title>${escapeHtml(title)} · How We Think About Arithmetic</title>
  <link rel="stylesheet" href="${root}assets/styles.css">
  <script src="${root}assets/explorer.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#content">Skip to content</a>
  <header class="site-header">
    <a class="brand" href="${root}"><span aria-hidden="true" class="brand-mark">7+5</span><span>How We Think<br><strong>About Arithmetic</strong></span></a>
    <button class="theme-toggle" type="button" data-theme-toggle aria-label="Switch color theme">◐</button>
  </header>
  <main id="content">${content}</main>
  <footer><p>Many minds, one problem. <a href="${root}about/">About this edition</a></p></footer>
</body>
</html>`;
}

export async function writeFileEnsured(file, contents) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, contents, "utf8");
}
