import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ROOT, loadChapters, loadManifest, parseFrontMatter } from "./lib.mjs";

export const REQUIRED_FIELDS = ["chapter", "slug", "title", "part", "status", "strategy_target"];
export const REQUIRED_SECTIONS = ["Opening spread", "Strategy gallery", "Cross-classification", "Research notes", "Chapter QA"];
const VALID_STATUSES = new Set(["scaffold", "draft", "review", "final"]);

export function validateChapter(entry, parsed) {
  const errors = [];
  for (const field of REQUIRED_FIELDS) if (parsed.data[field] === undefined || parsed.data[field] === "") errors.push(`missing field ${field}`);
  if (parsed.data.chapter !== entry.chapter) errors.push(`chapter must match manifest (${entry.chapter})`);
  if (parsed.data.slug !== entry.slug) errors.push(`slug must match manifest (${entry.slug})`);
  if (!VALID_STATUSES.has(parsed.data.status)) errors.push(`invalid status ${parsed.data.status}`);
  for (const section of REQUIRED_SECTIONS) if (!parsed.body.includes(`## ${section}`)) errors.push(`missing section ${section}`);
  return errors;
}

export async function validateRepository() {
  const manifest = await loadManifest();
  const errors = [];
  const seen = new Set();
  for (const entry of manifest) {
    if (seen.has(entry.slug)) errors.push(`manifest: duplicate slug ${entry.slug}`);
    seen.add(entry.slug);
    try {
      const file = path.join(ROOT, "book", "manuscript", entry.file);
      const parsed = parseFrontMatter(await fs.readFile(file, "utf8"));
      for (const error of validateChapter(entry, parsed)) errors.push(`${entry.file}: ${error}`);
    } catch (error) {
      errors.push(`${entry.file}: ${error.message}`);
    }
  }

  const expectedHeader = "source_id,topic,chapter,citation,source_type,doi_or_url,locator,claim_supported,evidence_notes,verification_status,verified_by,verified_date";
  const sourceLog = await fs.readFile(path.join(ROOT, "research", "source_log.csv"), "utf8");
  if (sourceLog.trimEnd().split(/\r?\n/)[0] !== expectedHeader) errors.push("research/source_log.csv: header does not match the research schema");
  await loadChapters();
  return errors;
}

async function main() {
  const errors = await validateRepository();
  if (errors.length) {
    console.error(`Validation failed with ${errors.length} error(s):`);
    for (const error of errors) console.error(`- ${error}`);
    process.exitCode = 1;
  } else {
    const manifest = await loadManifest();
    console.log(`Validated ${manifest.length} production entries and the research schema.`);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await main();
