import fs from "node:fs/promises";
import path from "node:path";
import { ROOT } from "./lib.mjs";

const HTML_DIR = path.join(ROOT, "output", "html");
const PDF_DIR = path.join(ROOT, "output", "pdf");
const SCREEN_HTML = path.join(HTML_DIR, "how-we-think-about-arithmetic.html");
const PRINT_HTML = path.join(HTML_DIR, "how-we-think-about-arithmetic-print.html");
const SCREEN_PDF = path.join(PDF_DIR, "how-we-think-about-arithmetic-screen.pdf");
const PRINT_PDF = path.join(PDF_DIR, "how-we-think-about-arithmetic-print.pdf");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function verifiedSourceIds() {
  const source = await fs.readFile(path.join(ROOT, "research", "bibliography.md"), "utf8");
  const verified = source.split("## Verified for manuscript use")[1]?.split("## Screened")[0] || "";
  const screened = source.split("## Screened")[1] || "";
  return {
    verified: [...new Set(verified.match(/R\d{2}-[A-Z]?\d{2,3}/g) || [])],
    screened: [...new Set(screened.match(/R\d{2}-[A-Z]?\d{2,3}/g) || [])]
  };
}

async function checkHtml(file, edition, sourceIds) {
  const html = await fs.readFile(file, "utf8");
  assert(html.includes(`data-edition="${edition}"`), `${edition} HTML lacks its edition marker`);
  assert((html.match(/class="export-chapter"/g) || []).length === 16, `${edition} HTML must contain 16 entries`);
  assert((html.match(/data-method-figure=/g) || []).length === 175, `${edition} HTML must contain 175 method figures`);
  assert((html.match(/<img\b/g) || []).length === 190, `${edition} HTML must contain 190 total figures`);
  assert(!/<img[^>]+src="(?!data:)/.test(html), `${edition} HTML contains a non-embedded image`);
  assert(!/(Illustration brief|Chapter QA|Editorial roadmap|status: draft)/i.test(html), `${edition} HTML exposes internal production text`);
  assert(sourceIds.verified.length === 24, "Expected 24 verified bibliography records");
  for (const id of sourceIds.verified) assert(html.includes(id), `${edition} HTML omits verified source ${id}`);
  for (const id of sourceIds.screened) assert(!html.includes(id), `${edition} HTML exposes screened source ${id}`);
}

async function checkPdf(file) {
  const stat = await fs.stat(file);
  assert(stat.size > 1_000_000, `${path.basename(file)} is unexpectedly small`);
  const handle = await fs.open(file, "r");
  const signature = Buffer.alloc(5);
  await handle.read(signature, 0, 5, 0);
  await handle.close();
  assert(signature.toString("ascii") === "%PDF-", `${path.basename(file)} lacks a PDF signature`);
}

const sourceIds = await verifiedSourceIds();
await checkHtml(SCREEN_HTML, "screen", sourceIds);
await checkHtml(PRINT_HTML, "print", sourceIds);
await checkPdf(SCREEN_PDF);
await checkPdf(PRINT_PDF);
console.log("Verified two self-contained HTML editions, 190 embedded figures each, 24 verified sources, and two non-empty PDFs.");
