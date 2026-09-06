import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ROOT } from "./lib.mjs";
import { parseCsv, SOURCE_HEADER, validateSourceCsv } from "./validate.mjs";

const researchDirectory = path.join(ROOT, "research");
const sourceLogPath = path.join(researchDirectory, "source_log.csv");
const inboxDirectory = path.join(researchDirectory, "inbox");

function recordsFromCsv(source) {
  return parseCsv(source).slice(1).map(values => Object.fromEntries(SOURCE_HEADER.map((field, index) => [field, values[index]])));
}

function escapeCsv(value) {
  const text = String(value ?? "");
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

export function serializeSourceLog(records) {
  const lines = [SOURCE_HEADER.join(",")];
  for (const record of records) lines.push(SOURCE_HEADER.map(field => escapeCsv(record[field])).join(","));
  return `${lines.join("\n")}\n`;
}

export function buildBibliography(records) {
  const sections = [
    ["verified", "Verified for manuscript use"],
    ["screened", "Screened — full text still required"],
    ["lead", "Leads"]
  ];
  const output = [
    "# Working bibliography",
    "",
    "This view is generated from `research/source_log.csv`. A verified label means the directly relevant source text and logged claim were inspected; it does not make every claim in that source publication-ready.",
    ""
  ];
  for (const [status, heading] of sections) {
    const selected = records.filter(record => record.verification_status === status);
    if (!selected.length) continue;
    output.push(`## ${heading}`, "");
    for (const record of selected) output.push(`- **${record.source_id}.** ${record.citation} [Source](${record.doi_or_url})`);
    output.push("");
  }
  return `${output.join("\n").trimEnd()}\n`;
}

export async function mergeResearch({ consume = false } = {}) {
  const files = [];
  try {
    for (const entry of await fs.readdir(inboxDirectory, { withFileTypes: true })) if (entry.isFile() && entry.name.endsWith(".csv")) files.push(path.join(inboxDirectory, entry.name));
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  files.sort();
  if (!files.length) throw new Error("No research inbox CSV files found.");

  const sources = [{ file: sourceLogPath, text: await fs.readFile(sourceLogPath, "utf8") }];
  for (const file of files) sources.push({ file, text: await fs.readFile(file, "utf8") });
  const seen = new Set();
  const errors = sources.flatMap(({ file, text }) => validateSourceCsv(text, path.relative(ROOT, file).replaceAll("\\", "/"), seen));
  if (errors.length) throw new Error(`Research merge refused:\n${errors.map(error => `- ${error}`).join("\n")}`);

  const records = sources.flatMap(({ text }) => recordsFromCsv(text)).sort((left, right) => left.source_id.localeCompare(right.source_id));
  await fs.writeFile(sourceLogPath, serializeSourceLog(records), "utf8");
  await fs.writeFile(path.join(researchDirectory, "bibliography.md"), buildBibliography(records), "utf8");
  if (consume) {
    for (const file of files) await fs.unlink(file);
    if (!(await fs.readdir(inboxDirectory)).length) await fs.rmdir(inboxDirectory);
  }
  return { records: records.length, files: files.length };
}

async function main() {
  const result = await mergeResearch({ consume: process.argv.includes("--consume") });
  console.log(`Merged ${result.records} source records from ${result.files} inbox batch(es).`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await main();
