import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ROOT, loadChapters, loadManifest, parseFrontMatter } from "./lib.mjs";

export const REQUIRED_FIELDS = ["chapter", "slug", "title", "part", "status", "strategy_target"];
export const REQUIRED_SECTIONS = ["Opening spread", "Strategy gallery", "Cross-classification", "Research notes", "Chapter QA"];
const VALID_STATUSES = new Set(["scaffold", "draft", "review", "final"]);
export const SOURCE_HEADER = ["source_id", "topic", "chapter", "citation", "source_type", "doi_or_url", "locator", "claim_supported", "evidence_notes", "verification_status", "verified_by", "verified_date"];
const SOURCE_STATUSES = new Set(["lead", "screened", "verified"]);

export function parseCsv(source) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let index = 0; index < source.length; index += 1) {
    const character = source[index];
    if (quoted) {
      if (character === '"' && source[index + 1] === '"') { field += '"'; index += 1; }
      else if (character === '"') quoted = false;
      else field += character;
    } else if (character === '"') quoted = true;
    else if (character === ",") { row.push(field); field = ""; }
    else if (character === "\n") { row.push(field.replace(/\r$/, "")); rows.push(row); row = []; field = ""; }
    else field += character;
  }
  if (quoted) throw new Error("unterminated quoted field");
  if (field || row.length) { row.push(field.replace(/\r$/, "")); rows.push(row); }
  return rows.filter(values => values.some(value => value !== ""));
}

export function validateSourceCsv(source, label, seenIds = new Set()) {
  const errors = [];
  let rows;
  try { rows = parseCsv(source); } catch (error) { return [`${label}: ${error.message}`]; }
  if (!rows.length || rows[0].join(",") !== SOURCE_HEADER.join(",")) return [`${label}: header does not match the research schema`];
  for (const [rowIndex, values] of rows.slice(1).entries()) {
    const line = rowIndex + 2;
    if (values.length !== SOURCE_HEADER.length) { errors.push(`${label}:${line}: expected ${SOURCE_HEADER.length} fields, found ${values.length}`); continue; }
    const record = Object.fromEntries(SOURCE_HEADER.map((field, index) => [field, values[index].trim()]));
    for (const field of SOURCE_HEADER.slice(0, 10)) if (!record[field]) errors.push(`${label}:${line}: missing ${field}`);
    if (seenIds.has(record.source_id)) errors.push(`${label}:${line}: duplicate source_id ${record.source_id}`);
    seenIds.add(record.source_id);
    if (!SOURCE_STATUSES.has(record.verification_status)) errors.push(`${label}:${line}: invalid verification_status ${record.verification_status}`);
    if (!/^https:\/\//.test(record.doi_or_url)) errors.push(`${label}:${line}: doi_or_url must be an HTTPS URL`);
    if (record.verification_status !== "lead" && (!record.verified_by || !/^\d{4}-\d{2}-\d{2}$/.test(record.verified_date))) errors.push(`${label}:${line}: screened/verified records require verified_by and YYYY-MM-DD verified_date`);
  }
  return errors;
}

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

  const seenSourceIds = new Set();
  const researchFiles = [path.join(ROOT, "research", "source_log.csv")];
  const inbox = path.join(ROOT, "research", "inbox");
  try {
    for (const entry of await fs.readdir(inbox, { withFileTypes: true })) if (entry.isFile() && entry.name.endsWith(".csv")) researchFiles.push(path.join(inbox, entry.name));
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  for (const file of researchFiles) {
    const label = path.relative(ROOT, file).replaceAll("\\", "/");
    errors.push(...validateSourceCsv(await fs.readFile(file, "utf8"), label, seenSourceIds));
  }
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
    const sourceRows = parseCsv(await fs.readFile(path.join(ROOT, "research", "source_log.csv"), "utf8")).length - 1;
    console.log(`Validated ${manifest.length} production entries and ${sourceRows} canonical research source record(s).`);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await main();
