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

test("renderer can place method art immediately after its matching heading", () => {
  const rendered = renderMarkdown("## Method 08 — Example\n\nBody", {
    afterHeading: ({ level, text }) => level === 2 && text.startsWith("Method 08") ? '<figure data-method-figure="08-08"></figure>' : ""
  });
  assert.match(rendered, /<h2[^>]*>Method 08[^<]*<\/h2>\n<figure data-method-figure="08-08"><\/figure>\n<p>Body<\/p>/);
});

test("renderer gives repeated method subheadings unique scoped IDs", () => {
  const rendered = renderMarkdown("## Method 01 — First\n### Steps\n## Method 02 — Second\n### Steps\n### Steps");
  const ids = [...rendered.matchAll(/<h[1-6] id="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length);
  assert(ids.includes("method-01-first-steps"));
  assert(ids.includes("method-02-second-steps"));
  assert(ids.includes("method-02-second-steps-2"));
});

test("CH09 twentieths model preserves the half-unit endpoint", async () => {
  const chapter = await fs.readFile(path.join(ROOT, "book", "manuscript", "09_compare_fractions.md"), "utf8");
  assert(chapter.includes("5/8 = 12.5/20"));
  assert.match(chapter, /5\/8 ends halfway through the thirteenth unit, not at 13 full units/);
});

test("chapter vector assets carry accessible, raster-free metadata", async () => {
  for (let chapter = 0; chapter <= 14; chapter += 1) {
    const code = String(chapter).padStart(2, "0");
    const vectorDir = path.join(ROOT, "art", "vectors", `ch${code}`);
    const assets = (await fs.readdir(vectorDir)).filter(file => file.endsWith(".svg") && !/^ch\d{2}_m\d{2}_/.test(file));
    assert.equal(assets.length, 1, `CH${code} should have one chapter-level anchor SVG asset`);
    const svg = await fs.readFile(path.join(vectorDir, assets[0]), "utf8");
    assert.match(svg, /viewBox="0 0 1200 800"/);
    assert.match(svg, /role="img"/);
    assert.match(svg, /aria-labelledby="title desc"/);
    assert.match(svg, /<title id="title">[\s\S]+<\/title>/);
    assert.match(svg, /<desc id="desc">[\s\S]+<\/desc>/);
    assert(!/<image\b/i.test(svg), `CH${code} SVG must not embed raster images`);
  }
});

test("CH08 has one accessible production SVG for every method", async () => {
  const vectorDir = path.join(ROOT, "art", "vectors", "ch08");
  const assets = (await fs.readdir(vectorDir)).filter(file => /^ch08_m\d{2}_[a-z0-9-]+\.svg$/.test(file)).sort();
  assert.equal(assets.length, 10);
  assert.deepEqual(assets.map(file => file.match(/^ch08_m(\d{2})_/)[1]), ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]);
  for (const asset of assets) {
    const svg = await fs.readFile(path.join(vectorDir, asset), "utf8");
    assert.match(svg, /viewBox="0 0 1200 800"/);
    assert.match(svg, /role="img"/);
    assert.match(svg, /aria-labelledby="title desc"/);
    assert.match(svg, /<title id="title">[\s\S]+<\/title>/);
    assert.match(svg, /<desc id="desc">[\s\S]+<\/desc>/);
    assert(!/<image\b/i.test(svg), `${asset} must remain vector-only`);
  }

  const exactChecks = {
    "ch08_m01_four-equal-trays.svg": ["20 ÷ 4 = 5", "3 × 5 = 15"],
    "ch08_m02_one-fourth-then-triple.svg": ["1/4 of 20 = 5", "3 copies × 5 = 15"],
    "ch08_m03_divide-then-multiply.svg": ["÷ 4", "× 3", "(20 ÷ 4) × 3 = 15"],
    "ch08_m04_multiply-then-divide.svg": ["20 × 3 = 60", "60 ÷ 4 = 15", "(20 × 3) ÷ 4 = 15"],
    "ch08_m05_fraction-bar.svg": ["WHOLE = 20", "5 + 5 + 5 = 15"],
    "ch08_m06_four-by-five-array.svg": ["4 × 5 = 20", "3 × 5 = 15"],
    "ch08_m07_twenty-dollars.svg": ["$5 + $5 + $5 = $15", "all four = $20"],
    "ch08_m08_three-groups-rhythm.svg": ["5 + 5 + 5 = 15", "quarter left"],
    "ch08_m09_proportion.svg": ["x / 20 = 3 / 4", "4x = 60", "x = 15"],
    "ch08_m10_retrieve-and-check.svg": ["3/4 of 20", "three fives = 15", "four fives = 20"]
  };
  for (const [asset, fragments] of Object.entries(exactChecks)) {
    const svg = await fs.readFile(path.join(vectorDir, asset), "utf8");
    for (const fragment of fragments) assert(svg.includes(fragment), `${asset} should preserve exact label ${fragment}`);
  }
  for (const asset of ["ch08_m01_four-equal-trays.svg", "ch08_m06_four-by-five-array.svg", "ch08_m08_three-groups-rhythm.svg"]) {
    const svg = await fs.readFile(path.join(vectorDir, asset), "utf8");
    assert.equal((svg.match(/<circle\b/g) || []).length, 20, `${asset} should contain exactly 20 quantity circles`);
  }
});

test("CH01 has exact vector and composite art for all fourteen methods", async () => {
  const vectorDir = path.join(ROOT, "art", "vectors", "ch01");
  const compositeDir = path.join(ROOT, "art", "composites", "ch01");
  const vectorAssets = (await fs.readdir(vectorDir)).filter(file => /^ch01_m\d{2}_[a-z0-9-]+\.svg$/.test(file));
  const compositeAssets = (await fs.readdir(compositeDir)).filter(file => /^ch01_m\d{2}_[a-z0-9-]+\.svg$/.test(file));
  const assets = [...vectorAssets.map(file => ({ file, directory: vectorDir })), ...compositeAssets.map(file => ({ file, directory: compositeDir }))].sort((left, right) => left.file.localeCompare(right.file));
  assert.equal(assets.length, 14);
  assert.deepEqual(assets.map(({ file }) => file.match(/^ch01_m(\d{2})_/)[1]), ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"]);

  for (const { file, directory } of assets) {
    const svg = await fs.readFile(path.join(directory, file), "utf8");
    assert.match(svg, /viewBox="0 0 1200 800"/);
    assert.match(svg, /role="img"/);
    assert.match(svg, /aria-labelledby="title desc"/);
    assert.match(svg, /<title id="title">[\s\S]+<\/title>/);
    assert.match(svg, /<desc id="desc">[\s\S]+<\/desc>/);
    if (file.includes("m04")) assert.match(svg, /<image href="\.\.\/\.\.\/raster\/ch01\/ch01_m04_fingers-make-ten_raster\.png"/);
    else assert(!/<image\b/i.test(svg), `${file} must remain vector-only`);
  }

  const circleCounts = {
    "ch01_m01_count-every-object.svg": 12,
    "ch01_m05_make-ten.svg": 12,
    "ch01_m06_five-plus-five.svg": 12,
    "ch01_m07_double-seven-subtract-two.svg": 14,
    "ch01_m09_see-dot-chunks.svg": 12
  };
  for (const [file, expected] of Object.entries(circleCounts)) {
    const svg = await fs.readFile(path.join(vectorDir, file), "utf8");
    assert.equal((svg.match(/<circle\b/g) || []).length, expected, `${file} quantity circles`);
  }

  const unitLabelCounts = {
    "ch01_m02_count-on-from-seven.svg": 5,
    "ch01_m03_count-on-from-five.svg": 7,
    "ch01_m10_number-line-hops.svg": 5
  };
  for (const [file, expected] of Object.entries(unitLabelCounts)) {
    const svg = await fs.readFile(path.join(vectorDir, file), "utf8");
    assert.equal((svg.match(/>\+1<\/text>/g) || []).length, expected, `${file} unit-jump labels`);
  }
  const rhythm = await fs.readFile(path.join(vectorDir, "ch01_m12_counting-rhythm.svg"), "utf8");
  assert.equal((rhythm.match(/>tap [1-5]<\/text>/g) || []).length, 5);

  const raster = await fs.readFile(path.join(ROOT, "art", "raster", "ch01", "ch01_m04_fingers-make-ten_raster.png"));
  assert.equal(raster.readUInt32BE(16), 1536);
  assert.equal(raster.readUInt32BE(20), 1024);
});

test("CH02 has exact vector and composite art for all twelve methods", async () => {
  const vectorDir = path.join(ROOT, "art", "vectors", "ch02");
  const compositeDir = path.join(ROOT, "art", "composites", "ch02");
  const vectorAssets = (await fs.readdir(vectorDir)).filter(file => /^ch02_m\d{2}_[a-z0-9-]+\.svg$/.test(file));
  const compositeAssets = (await fs.readdir(compositeDir)).filter(file => /^ch02_m\d{2}_[a-z0-9-]+\.svg$/.test(file));
  const assets = [...vectorAssets.map(file => ({ file, directory: vectorDir })), ...compositeAssets.map(file => ({ file, directory: compositeDir }))].sort((left, right) => left.file.localeCompare(right.file));
  assert.equal(assets.length, 12);
  assert.deepEqual(assets.map(({ file }) => file.match(/^ch02_m(\d{2})_/)[1]), ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]);

  for (const { file, directory } of assets) {
    const svg = await fs.readFile(path.join(directory, file), "utf8");
    assert.match(svg, /viewBox="0 0 1200 800"/);
    assert.match(svg, /role="img"/);
    assert.match(svg, /aria-labelledby="title desc"/);
    assert.match(svg, /<title id="title">[\s\S]+<\/title>/);
    assert.match(svg, /<desc id="desc">[\s\S]+<\/desc>/);
    if (file.includes("m01") || file.includes("m08")) assert.match(svg, /<image href="\.\.\/\.\.\/raster\/ch02\/ch02_m(?:01|08)_[a-z0-9_-]+_raster\.png"/);
    else assert(!/<image\b/i.test(svg), `${file} must remain vector-only`);
  }

  const removal = await fs.readFile(path.join(compositeDir, "ch02_m01_remove-eight-counters.svg"), "utf8");
  const groupCount = (className) => ((removal.match(new RegExp(`<g class="${className}"[\\s\\S]*?<\\/g>`)) || [""])[0].match(/<circle\b/g) || []).length;
  assert.equal(groupCount("remaining-seven"), 7);
  assert.equal(groupCount("to-move-eight"), 8);
  assert.equal(groupCount("moved-eight"), 8);

  const countBack = await fs.readFile(path.join(vectorDir, "ch02_m02_count-back-eight-beats.svg"), "utf8");
  const arrowGroup = (countBack.match(/<g stroke="#087E8B"[^>]*marker-end="url\(#a\)">[\s\S]*?<\/g>/) || [""])[0];
  assert.equal((arrowGroup.match(/<path\b/g) || []).length, 8);
  const beatGroup = (countBack.match(/<g text-anchor="middle" font-size="21" font-weight="700" fill="#D97706">[\s\S]*?<\/g>/) || [""])[0];
  assert.equal((beatGroup.match(/<text\b/g) || []).length, 8);

  const tracking = await fs.readFile(path.join(compositeDir, "ch02_m08_eight-tracking-marks.svg"), "utf8");
  const trackingGroup = (tracking.match(/<g class="tracking-eight"[\s\S]*?<\/g>/) || [""])[0];
  assert.equal((trackingGroup.match(/<circle\b/g) || []).length, 8);

  const bar = await fs.readFile(path.join(vectorDir, "ch02_m09_eight-plus-seven-bar.svg"), "utf8");
  assert.equal((bar.match(/M\d+ 0v170/g) || []).length, 14);
  const tenAndFive = await fs.readFile(path.join(vectorDir, "ch02_m10_ten-and-five.svg"), "utf8");
  assert.equal((tenAndFive.match(/<circle\b/g) || []).length, 5);

  for (const file of ["ch02_m01_remove-eight-counters_raster.png", "ch02_m08_eight-tracking-marks_raster.png"]) {
    const raster = await fs.readFile(path.join(ROOT, "art", "raster", "ch02", file));
    assert.equal(raster.readUInt32BE(16), 1536);
    assert.equal(raster.readUInt32BE(20), 1024);
  }
});

test("CH03 has exact vector art for all fourteen methods", async () => {
  const vectorDir = path.join(ROOT, "art", "vectors", "ch03");
  const assets = (await fs.readdir(vectorDir)).filter(file => /^ch03_m\d{2}_[a-z0-9-]+\.svg$/.test(file)).sort();
  assert.equal(assets.length, 14);
  assert.deepEqual(assets.map(file => file.match(/^ch03_m(\d{2})_/)[1]), ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"]);

  for (const file of assets) {
    const svg = await fs.readFile(path.join(vectorDir, file), "utf8");
    assert.match(svg, /viewBox="0 0 1200 800"/);
    assert.match(svg, /role="img"/);
    assert.match(svg, /aria-labelledby="title desc"/);
    assert.match(svg, /<title id="title">[\s\S]+<\/title>/);
    assert.match(svg, /<desc id="desc">[\s\S]+<\/desc>/);
    assert(!/<image\b|<foreignObject\b/i.test(svg), `${file} must remain vector-only`);
  }

  const split = await fs.readFile(path.join(vectorDir, "ch03_m01_split-tens-and-ones.svg"), "utf8");
  for (const equation of ["30 + 40", "7 + 8", "70 + 15 = 85"]) assert(split.includes(equation));

  const jump = await fs.readFile(path.join(vectorDir, "ch03_m02_add-forty-then-eight.svg"), "utf8");
  const unitArrows = (jump.match(/<g stroke="#087E8B"[^>]*marker-end="url\(#a\)">[\s\S]*?<\/g>/) || [""])[0];
  assert.equal((unitArrows.match(/<path\b/g) || []).length, 8);
  const transfer = await fs.readFile(path.join(vectorDir, "ch03_m05_transfer-three.svg"), "utf8");
  assert.equal((transfer.match(/<circle\b/g) || []).length, 3);

  const exchange = await fs.readFile(path.join(vectorDir, "ch03_m07_exchange-ten-ones.svg"), "utf8");
  const beforeExchange = exchange.slice(exchange.indexOf('<g transform="translate(55 130)">'), exchange.indexOf('<path d="M575 405H655"'));
  const afterExchange = exchange.slice(exchange.indexOf('<g transform="translate(685 130)">'));
  assert.equal((beforeExchange.match(/<rect\b/g) || []).length, 23);
  assert.equal((afterExchange.match(/<rect\b/g) || []).length, 14);

  const rods = await fs.readFile(path.join(vectorDir, "ch03_m08_rods-and-loose-ones.svg"), "utf8");
  const rodGroup = (rods.match(/<g fill="#2764B8"[\s\S]*?<\/g>/) || [""])[0];
  const oneGroup = (rods.match(/<g fill="#D97706"[\s\S]*?<\/g>/) || [""])[0];
  assert.equal((rodGroup.match(/<rect\b/g) || []).length, 7);
  assert.equal((oneGroup.match(/<rect\b/g) || []).length, 15);

  const coins = await fs.readFile(path.join(vectorDir, "ch03_m09_eighty-five-cents.svg"), "utf8");
  const beforeCoins = coins.slice(coins.indexOf('<g transform="translate(55 135)">'), coins.indexOf('<path d="M580 405H645"'));
  const afterCoins = coins.slice(coins.indexOf('<g transform="translate(675 135)">'));
  assert.equal((beforeCoins.match(/<circle\b/g) || []).length, 22);
  assert.equal((afterCoins.match(/<circle\b/g) || []).length, 13);
});

test("CH04 has exact vector art for all twelve methods", async () => {
  const vectorDir = path.join(ROOT, "art", "vectors", "ch04");
  const assets = (await fs.readdir(vectorDir)).filter(file => /^ch04_m\d{2}_[a-z0-9-]+\.svg$/.test(file)).sort();
  assert.equal(assets.length, 12);
  assert.deepEqual(assets.map(file => file.match(/^ch04_m(\d{2})_/)[1]), ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]);
  for (const file of assets) {
    const svg = await fs.readFile(path.join(vectorDir, file), "utf8");
    assert.match(svg, /viewBox="0 0 1200 800"/);
    assert.match(svg, /role="img"/);
    assert.match(svg, /aria-labelledby="title desc"/);
    assert.match(svg, /<title id="title">[\s\S]+<\/title>/);
    assert.match(svg, /<desc id="desc">[\s\S]+<\/desc>/);
    assert(!/<image\b|<foreignObject\b/i.test(svg), `${file} must remain vector-only`);
    for (const value of ["72", "39", "33"]) assert(svg.includes(value), `${file} must include ${value}`);
  }

  const compensation = await fs.readFile(path.join(vectorDir, "ch04_m02_subtract-forty-repair-one.svg"), "utf8");
  for (const label of ["−40", "+1", "32", "33", "72 − 40 + 1 = 33"]) assert(compensation.includes(label));
  const distance = await fs.readFile(path.join(vectorDir, "ch04_m03_measure-the-gap.svg"), "utf8");
  for (const label of ["+1", "+30", "+2", "distance = 1 + 30 + 2 = 33"]) assert(distance.includes(label));

  const backJumps = await fs.readFile(path.join(vectorDir, "ch04_m06_jump-back-thirty-nine.svg"), "utf8");
  assert.equal((backJumps.match(/>−(?:30|9)<\/text>/g) || []).length, 2);
  const blocks = await fs.readFile(path.join(vectorDir, "ch04_m07_unbundle-base-ten.svg"), "utf8");
  const classCount = (className) => {
    const group = (blocks.match(new RegExp(`<g class="${className}"[\\s\\S]*?<\\/g>`)) || [""])[0];
    return (group.match(/<rect\b/g) || []).length;
  };
  assert.equal(classCount("before-seven-rods"), 7);
  assert.equal(classCount("before-two-cubes"), 2);
  assert.equal(classCount("regroup-six-rods"), 6);
  assert.equal(classCount("regroup-twelve-cubes"), 12);
  assert.equal(classCount("after-three-rods"), 3);
  assert.equal(classCount("after-three-cubes"), 3);

  const change = await fs.readFile(path.join(vectorDir, "ch04_m08_make-change.svg"), "utf8");
  const dimes = (change.match(/<g class="three-dimes"[\s\S]*?<\/g>/) || [""])[0];
  const pennies = (change.match(/<g class="three-pennies"[\s\S]*?<\/g>/) || [""])[0];
  assert.equal((dimes.match(/<circle\b/g) || []).length, 3);
  assert.equal((pennies.match(/<circle\b/g) || []).length, 3);
});

test("CH05 has exact accessible art for all twenty methods", async () => {
  const vectorDir = path.join(ROOT, "art", "vectors", "ch05");
  const compositeDir = path.join(ROOT, "art", "composites", "ch05");
  const vectorAssets = (await fs.readdir(vectorDir)).filter(file => /^ch05_m\d{2}_[a-z0-9-]+\.svg$/.test(file)).sort();
  const compositeAssets = (await fs.readdir(compositeDir)).filter(file => /^ch05_m\d{2}_[a-z0-9-]+\.svg$/.test(file)).sort();
  const assets = [...vectorAssets, ...compositeAssets].sort();
  assert.equal(assets.length, 20);
  assert.deepEqual(assets.map(file => file.match(/^ch05_m(\d{2})_/)[1]), Array.from({ length: 20 }, (_value, index) => String(index + 1).padStart(2, "0")));
  for (const file of assets) {
    const directory = compositeAssets.includes(file) ? compositeDir : vectorDir;
    const svg = await fs.readFile(path.join(directory, file), "utf8");
    assert.match(svg, /viewBox="0 0 1200 800"/);
    assert.match(svg, /role="img"/);
    assert.match(svg, /aria-labelledby="title desc"/);
    assert.match(svg, /<title id="title">[\s\S]+<\/title>/);
    assert.match(svg, /<desc id="desc">[\s\S]+<\/desc>/);
    for (const value of ["11", "12", "132"]) assert(svg.includes(value), `${file} must include ${value}`);
    if (directory === vectorDir) assert(!/<image\b|<foreignObject\b/i.test(svg), `${file} must remain vector-only`);
    else assert.match(svg, /<image href="\.\.\/\.\.\/raster\/ch05\/ch05_m(?:17|18)_[a-z0-9_-]+_raster\.png"/);
  }

  const squareMinusRow = await fs.readFile(path.join(vectorDir, "ch05_m04_square-minus-row.svg"), "utf8");
  assert.match(squareMinusRow, /pattern id="g" x="300" y="125" width="50" height="45"/);
  assert.match(squareMinusRow, /width="600" height="540" fill="url\(#g\)"/);
  const splitArea = await fs.readFile(path.join(vectorDir, "ch05_m05_eleven-tens-and-twos.svg"), "utf8");
  assert.match(splitArea, /pattern id="ten-grid" x="130" y="155" width="75" height="40"/);
  assert.match(splitArea, /pattern id="two-grid" x="880" y="155" width="75" height="40"/);
  assert.match(splitArea, /width="750" height="440" fill="url\(#ten-grid\)"/);
  assert.match(splitArea, /width="150" height="440" fill="url\(#two-grid\)"/);

  const repeated = await fs.readFile(path.join(vectorDir, "ch05_m06_repeated-addition.svg"), "utf8");
  assert.equal((repeated.match(/>12<\/text>/g) || []).length, 11);
  const beats = await fs.readFile(path.join(vectorDir, "ch05_m07_skip-count-beats.svg"), "utf8");
  assert.equal((beats.match(/<circle\b/g) || []).length, 11);
  const jumps = await fs.readFile(path.join(vectorDir, "ch05_m08_eleven-number-line-jumps.svg"), "utf8");
  const jumpGroup = (jumps.match(/<g class="eleven-jumps"[\s\S]*?<\/g>/) || [""])[0];
  const jumpLabels = (jumps.match(/<g class="eleven-jump-labels"[\s\S]*?<\/g>/) || [""])[0];
  assert.equal((jumpGroup.match(/<path\b/g) || []).length, 11);
  assert.equal((jumpLabels.match(/>\+12<\/text>/g) || []).length, 11);

  for (const [file, width, height] of [["ch05_m09_eleven-by-twelve-array.svg", "70", "45"], ["ch05_m10_rectangle-area.svg", "70", "45"]]) {
    const svg = await fs.readFile(path.join(vectorDir, file), "utf8");
    assert.match(svg, new RegExp(`<pattern id="g" x="180" y="150" width="${width}" height="${height}"`));
    assert.match(svg, /width="840" height="495" fill="url\(#g\)"/);
  }
  const bags = await fs.readFile(path.join(vectorDir, "ch05_m11_eleven-groups.svg"), "utf8");
  const bagGroup = (bags.match(/<g class="bags-eleven">[\s\S]*?<\/g>\s*<path/) || [""])[0];
  const dozen = (bags.match(/<g id="dozen"[\s\S]*?<\/g>/) || [""])[0];
  assert.equal((bagGroup.match(/<use href="#bag"/g) || []).length, 11);
  assert.equal((dozen.match(/<circle\b/g) || []).length, 12);
  assert.match(bags, /class="total-tray"/);

  const doubled = await fs.readFile(path.join(vectorDir, "ch05_m13_double-and-halve.svg"), "utf8");
  const sixGroups = (doubled.match(/<g class="six-groups-of-twenty-two"[\s\S]*?<\/g>/) || [""])[0];
  assert.equal((sixGroups.match(/<rect\b/g) || []).length, 6);
  assert.equal((sixGroups.match(/>22<\/text>/g) || []).length, 6);
  const fingers = await fs.readFile(path.join(compositeDir, "ch05_m17_fingers-group-counter.svg"), "utf8");
  const tallies = (fingers.match(/<g class="tally-eleven"[\s\S]*?<\/g>/) || [""])[0];
  const counters = (fingers.match(/<g class="counters-twelve"[\s\S]*?<\/g>/) || [""])[0];
  assert.equal((tallies.match(/<line\b/g) || []).length, 11);
  assert.equal((counters.match(/<circle\b/g) || []).length, 12);
  const tapping = await fs.readFile(path.join(compositeDir, "ch05_m18_tap-each-twelve.svg"), "utf8");
  const elevenBeats = (tapping.match(/<g class="beat-eleven"[\s\S]*?<\/g>/) || [""])[0];
  assert.equal((elevenBeats.match(/<circle\b/g) || []).length, 11);
  for (const total of [12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132]) assert(tapping.includes(`>${total}</text>`));
  for (const file of ["ch05_m17_fingers-group-counter_raster.png", "ch05_m18_tap-each-twelve_raster.png"]) {
    const raster = await fs.readFile(path.join(ROOT, "art", "raster", "ch05", file));
    assert.equal(raster.readUInt32BE(16), 1536);
    assert.equal(raster.readUInt32BE(20), 1024);
  }
});

test("CH06 has exact accessible art for all twelve division methods", async () => {
  const vectorDir = path.join(ROOT, "art", "vectors", "ch06");
  const compositeDir = path.join(ROOT, "art", "composites", "ch06");
  const vectorAssets = (await fs.readdir(vectorDir)).filter(file => /^ch06_m\d{2}_[a-z0-9-]+\.svg$/.test(file)).sort();
  const compositeAssets = (await fs.readdir(compositeDir)).filter(file => /^ch06_m\d{2}_[a-z0-9-]+\.svg$/.test(file)).sort();
  const assets = [...vectorAssets, ...compositeAssets].sort();
  assert.equal(assets.length, 12);
  assert.deepEqual(assets.map(file => file.match(/^ch06_m(\d{2})_/)[1]), Array.from({ length: 12 }, (_value, index) => String(index + 1).padStart(2, "0")));
  for (const file of assets) {
    const directory = compositeAssets.includes(file) ? compositeDir : vectorDir;
    const svg = await fs.readFile(path.join(directory, file), "utf8");
    assert.match(svg, /viewBox="0 0 1200 800"/);
    assert.match(svg, /role="img"/);
    assert.match(svg, /aria-labelledby="title desc"/);
    assert.match(svg, /<title id="title">[\s\S]+<\/title>/);
    assert.match(svg, /<desc id="desc">[\s\S]+<\/desc>/);
    if (directory === vectorDir) assert(!/<image\b|<foreignObject\b/i.test(svg), `${file} must remain vector-only`);
    else assert.match(svg, /<image href="\.\.\/\.\.\/raster\/ch06\/ch06_m09_finger-group-counter_raster\.png"/);
  }

  for (const file of ["ch06_m01_share-into-six.svg", "ch06_m02_four-groups-of-six.svg", "ch06_m06_four-by-six-array.svg", "ch06_m08_six-coin-piles.svg"]) {
    const svg = await fs.readFile(path.join(vectorDir, file), "utf8");
    assert.equal((svg.match(/<circle\b/g) || []).length, 24, `${file} must show exactly 24 counters`);
  }
  const sharing = await fs.readFile(path.join(vectorDir, "ch06_m01_share-into-six.svg"), "utf8");
  assert.equal((sharing.match(/<rect x="(?:55|430|805)" y="(?:155|425)"/g) || []).length, 6);
  const grouping = await fs.readFile(path.join(vectorDir, "ch06_m02_four-groups-of-six.svg"), "utf8");
  assert.equal(((grouping.match(/<g class="four-group-brackets"[\s\S]*?<\/g>/) || [""])[0].match(/<path\b/g) || []).length, 4);
  const family = await fs.readFile(path.join(vectorDir, "ch06_m03_inverse-six-times-four.svg"), "utf8");
  for (const fact of ["6 × 4 = 24", "4 × 6 = 24", "24 ÷ 6 = 4"]) assert(family.includes(fact));
  const jumps = await fs.readFile(path.join(vectorDir, "ch06_m04_skip-count-four-jumps.svg"), "utf8");
  assert.equal((jumps.match(/Q\d+ 240 \d+ 460/g) || []).length, 4);
  const ladder = await fs.readFile(path.join(vectorDir, "ch06_m05_subtract-six-four-times.svg"), "utf8");
  assert.equal((ladder.match(/<circle\b/g) || []).length, 5);
  assert.equal((ladder.match(/>\d · −6<\/text>/g) || []).length, 4);
  const decomposition = await fs.readFile(path.join(vectorDir, "ch06_m07_divide-by-two-then-three.svg"), "utf8");
  const terminalGroups = (decomposition.match(/<g class="six-terminal-groups"[\s\S]*?<\/g>/) || [""])[0];
  assert.equal((terminalGroups.match(/<rect\b/g) || []).length, 6);
  assert.equal((decomposition.match(/>12<\/text>/g) || []).length, 2);
  assert.equal((decomposition.match(/>4<\/text>/g) || []).length, 6);
  const bar = await fs.readFile(path.join(vectorDir, "ch06_m10_six-part-bar.svg"), "utf8");
  assert.equal((bar.match(/>4<\/text>/g) || []).length, 6);
  assert.equal((bar.match(/M(?:166\.667|333\.334|500|666\.667|833\.334) 0v220/g) || []).length, 5);
  const table = await fs.readFile(path.join(vectorDir, "ch06_m11_proportion-table.svg"), "utf8");
  for (const label of [">6</text>", ">24</text>", ">1</text>", ">4</text>", "÷ 6", "× 6", "6 × 4 = 24"]) assert(table.includes(label));
  assert.match(table, /class="reverse-times-six-arrow"/);
  const estimate = await fs.readFile(path.join(vectorDir, "ch06_m12_estimate-and-verify.svg"), "utf8");
  const blocks = (estimate.match(/<g class="four-blocks-of-six"[\s\S]*?<\/g>/) || [""])[0];
  assert.equal((blocks.match(/<rect\b/g) || []).length, 4);
  assert.match(estimate, /class="verification-loop"/);
  const fingers = await fs.readFile(path.join(compositeDir, "ch06_m09_finger-group-counter.svg"), "utf8");
  const fourJumps = (fingers.match(/<g class="four-jumps"[\s\S]*?<\/g>/) || [""])[0];
  assert.equal((fourJumps.match(/<path\b/g) || []).length, 4);
  const raster = await fs.readFile(path.join(ROOT, "art", "raster", "ch06", "ch06_m09_finger-group-counter_raster.png"));
  assert.equal(raster.readUInt32BE(16), 1536);
  assert.equal(raster.readUInt32BE(20), 1024);
});

test("CH07 has exact accessible art for all twelve area methods", async () => {
  const vectorDir = path.join(ROOT, "art", "vectors", "ch07");
  const compositeDir = path.join(ROOT, "art", "composites", "ch07");
  const vectorAssets = (await fs.readdir(vectorDir)).filter(file => /^ch07_m\d{2}_[a-z0-9-]+\.svg$/.test(file)).sort();
  const compositeAssets = (await fs.readdir(compositeDir)).filter(file => /^ch07_m\d{2}_[a-z0-9-]+\.svg$/.test(file)).sort();
  const assets = [...vectorAssets, ...compositeAssets].sort();
  assert.equal(assets.length, 12);
  assert.deepEqual(assets.map(file => file.match(/^ch07_m(\d{2})_/)[1]), Array.from({ length: 12 }, (_value, index) => String(index + 1).padStart(2, "0")));
  for (const file of assets) {
    const directory = compositeAssets.includes(file) ? compositeDir : vectorDir;
    const svg = await fs.readFile(path.join(directory, file), "utf8");
    assert.match(svg, /viewBox="0 0 1200 800"/);
    assert.match(svg, /role="img"/);
    assert.match(svg, /aria-labelledby="title desc"/);
    assert.match(svg, /<title id="title">[\s\S]+<\/title>/);
    assert.match(svg, /<desc id="desc">[\s\S]+<\/desc>/);
    assert(svg.includes("63"), `${file} must preserve the area 63`);
    if (directory === vectorDir) assert(!/<image\b|<foreignObject\b/i.test(svg), `${file} must remain vector-only`);
    else assert.match(svg, /<image href="\.\.\/\.\.\/raster\/ch07\/ch07_m08_place-final-tile_raster\.png"/);
  }

  const counted = await fs.readFile(path.join(vectorDir, "ch07_m02_count-unit-squares.svg"), "utf8");
  assert.match(counted, /pattern id="g" x="210" y="150" width="86" height="70"/);
  assert.match(counted, /width="774" height="490" fill="url\(#g\)"/);
  for (const checkpoint of [1, 9, 18, 27, 36, 45, 54, 63]) assert(counted.includes(`>${checkpoint}</text>`));
  const rows = await fs.readFile(path.join(vectorDir, "ch07_m03_seven-rows-of-nine.svg"), "utf8");
  const rowBands = (rows.match(/<g class="seven-row-bands"[\s\S]*?<\/g>/) || [""])[0];
  assert.equal((rowBands.match(/<rect\b/g) || []).length, 7);
  assert.equal((rows.match(/M\d+ 150v490/g) || []).length, 8);
  const rotated = await fs.readFile(path.join(vectorDir, "ch07_m04_rotate-nine-rows.svg"), "utf8");
  assert.match(rotated, /width="450" height="350" fill="url\(#a\)"/);
  assert.match(rotated, /width="350" height="450" fill="url\(#b\)"/);
  assert.match(rotated, /class="rotation-arrow"[\s\S]*marker-end="url\(#rotate-arrow\)"/);
  const compensation = await fs.readFile(path.join(vectorDir, "ch07_m05_ten-minus-seven.svg"), "utf8");
  assert.match(compensation, /pattern id="g" x="180" y="150" width="84" height="70"/);
  assert.match(compensation, /width="840" height="490" fill="url\(#g\)"/);
  assert.match(compensation, /class="seven-excess-cells" x="936" y="150" width="84" height="490"/);
  const splitRows = await fs.readFile(path.join(vectorDir, "ch07_m06_split-seven-five-two.svg"), "utf8");
  assert.match(splitRows, /class="five-by-nine" x="195" y="145" width="810" height="350"/);
  assert.match(splitRows, /class="two-by-nine" x="195" y="495" width="810" height="140"/);
  for (const equation of ["5 × 9 = 45", "2 × 9 = 18", "45 + 18 = 63"]) assert(splitRows.includes(equation));
  const splitColumns = await fs.readFile(path.join(vectorDir, "ch07_m07_split-nine-five-four.svg"), "utf8");
  assert.match(splitColumns, /class="seven-by-five" x="195" y="145" width="450" height="490"/);
  assert.match(splitColumns, /class="seven-by-four" x="645" y="145" width="360" height="490"/);
  for (const equation of ["7 × 5 = 35", "7 × 4 = 28", "35 + 28 = 63"]) assert(splitColumns.includes(equation));
  const finalTile = await fs.readFile(path.join(compositeDir, "ch07_m08_place-final-tile.svg"), "utf8");
  assert.match(finalTile, /pattern id="unit-grid" x="70" y="165" width="70" height="70"/);
  assert.match(finalTile, /class="sixty-three-cell-grid" x="70" y="165" width="630" height="490"/);
  assert.match(finalTile, /class="final-tile-target" x="630" y="585" width="70" height="70"/);
  const traversal = await fs.readFile(path.join(vectorDir, "ch07_m09_eye-traversal.svg"), "utf8");
  const scanGroup = (traversal.match(/<g class="seven-row-scans"[\s\S]*?<\/g>/) || [""])[0];
  const moveGroup = (traversal.match(/<g class="six-row-moves"[\s\S]*?<\/g>/) || [""])[0];
  assert.equal((scanGroup.match(/<path\b/g) || []).length, 7);
  assert.equal((moveGroup.match(/<path\b/g) || []).length, 6);
  const adjacent = await fs.readFile(path.join(vectorDir, "ch07_m10_add-two-areas.svg"), "utf8");
  assert.match(adjacent, /x="150" y="145" width="500" height="490"/);
  assert.match(adjacent, /x="650" y="145" width="400" height="490"/);
  const workspace = await fs.readFile(path.join(vectorDir, "ch07_m11_written-product.svg"), "utf8");
  assert.match(workspace, /pattern id="faint-grid" x="825" y="240" width="30" height="30"/);
  assert.match(workspace, /class="faint-seven-by-nine" x="825" y="240" width="270" height="210"/);
  const benchmark = await fs.readFile(path.join(vectorDir, "ch07_m12_benchmark-check.svg"), "utf8");
  assert.match(benchmark, /class="seven-by-ten" x="80" y="180" width="400" height="280"/);
  assert.match(benchmark, /class="seven-cell-difference" x="440" y="180" width="40" height="280"/);
  assert.match(benchmark, /class="seven-by-nine" x="720" y="180" width="360" height="280"/);
  const raster = await fs.readFile(path.join(ROOT, "art", "raster", "ch07", "ch07_m08_place-final-tile_raster.png"));
  assert.equal(raster.readUInt32BE(16), 1536);
  assert.equal(raster.readUInt32BE(20), 1024);
});

test("CH09 has exact accessible vector art for all ten fraction-comparison methods", async () => {
  const vectorDir = path.join(ROOT, "art", "vectors", "ch09");
  const assets = (await fs.readdir(vectorDir)).filter(file => /^ch09_m\d{2}_[a-z0-9-]+\.svg$/.test(file)).sort();
  assert.equal(assets.length, 10);
  assert.deepEqual(assets.map(file => file.match(/^ch09_m(\d{2})_/)[1]), Array.from({ length: 10 }, (_value, index) => String(index + 1).padStart(2, "0")));
  for (const file of assets) {
    const svg = await fs.readFile(path.join(vectorDir, file), "utf8");
    assert.match(svg, /viewBox="0 0 1200 800"/);
    assert.match(svg, /role="img"/);
    assert.match(svg, /aria-labelledby="title desc"/);
    assert.match(svg, /<title id="title">[\s\S]+<\/title>/);
    assert.match(svg, /<desc id="desc">[\s\S]+<\/desc>/);
    assert(!/<image\b|<foreignObject\b/i.test(svg), `${file} must remain vector-only`);
    assert(svg.includes("3/5") && svg.includes("5/8"), `${file} must preserve both compared fractions`);
  }

  const bars = await fs.readFile(path.join(vectorDir, "ch09_m01_equal-fraction-bars.svg"), "utf8");
  assert.match(bars, /x="240" y="190" width="480" height="110"/);
  assert.match(bars, /x="240" y="450" width="500" height="110"/);
  assert.match(bars, /width="800" height="110"/);
  const line = await fs.readFile(path.join(vectorDir, "ch09_m02_number-line-placement.svg"), "utf8");
  assert.match(line, /M180 420H980/);
  assert.match(line, /cx="660" cy="420"/);
  assert.match(line, /cx="680" cy="420"/);
  assert(line.includes("0.025 farther right"));
  const half = await fs.readFile(path.join(vectorDir, "ch09_m03_half-benchmark-gaps.svg"), "utf8");
  assert.match(half, /M600 300v-35h80v35/);
  assert.match(half, /M600 560v35h100v-35/);
  assert(half.includes("1/10") && half.includes("1/8"));
  const fortieths = await fs.readFile(path.join(vectorDir, "ch09_m04_common-denominator-fortieths.svg"), "utf8");
  assert.match(fortieths, /pattern id="grid" x="230" width="20"/);
  assert.match(fortieths, /width="480" height="100"/);
  assert.match(fortieths, /width="500" height="100"/);
  assert(fortieths.includes("24/40") && fortieths.includes("25/40"));
  const cross = await fs.readFile(path.join(vectorDir, "ch09_m05_cross-products.svg"), "utf8");
  for (const equation of ["3 × 8 = 24", "5 × 5 = 25", "24 &lt; 25, so 3/5 &lt; 5/8"]) assert(cross.includes(equation));
  assert.match(cross, /markerUnits="userSpaceOnUse"/);
  const decimals = await fs.readFile(path.join(vectorDir, "ch09_m06_aligned-decimals.svg"), "utf8");
  for (const value of ["3 ÷ 5", "5 ÷ 8", "0.600", "0.625"]) assert(decimals.includes(value));
  const complements = await fs.readFile(path.join(vectorDir, "ch09_m07_complements-to-one.svg"), "utf8");
  assert.match(complements, /x="710" y="215" width="320" height="110"/);
  assert.match(complements, /x="730" y="470" width="300" height="110"/);
  assert(complements.includes("2/5 = 0.400") && complements.includes("3/8 = 0.375"));
  const retrieval = await fs.readFile(path.join(vectorDir, "ch09_m08_retrieve-then-verify.svg"), "utf8");
  assert(retrieval.includes("RETRIEVE") && retrieval.includes("VERIFY") && retrieval.includes("5/8 &gt; 3/5"));
  const twentieths = await fs.readFile(path.join(vectorDir, "ch09_m09_twentieths-half-unit.svg"), "utf8");
  assert.match(twentieths, /pattern id="grid" x="230" width="40"/);
  assert.match(twentieths, /x="230" y="465" width="500" height="110"/);
  assert.match(twentieths, /M710 455v130/);
  assert.match(twentieths, /M730 455v130/);
  assert(twentieths.includes("12.5/20") && twentieths.includes("not 13 full units"));
  const proof = await fs.readFile(path.join(vectorDir, "ch09_m10_estimate-then-prove.svg"), "utf8");
  assert.match(proof, /pattern id="grid" x="230" width="12"/);
  assert.match(proof, /width="288" height="70"/);
  assert.match(proof, /width="300" height="70"/);
  assert(proof.includes("24/40 &lt; 25/40"));
});

test("CH10 has exact accessible vector art for all ten division-context methods", async () => {
  const vectorDir = path.join(ROOT, "art", "vectors", "ch10");
  const assets = (await fs.readdir(vectorDir)).filter(file => /^ch10_m\d{2}_[a-z0-9-]+\.svg$/.test(file)).sort();
  assert.equal(assets.length, 10);
  assert.deepEqual(assets.map(file => file.match(/^ch10_m(\d{2})_/)[1]), Array.from({ length: 10 }, (_value, index) => String(index + 1).padStart(2, "0")));
  for (const file of assets) {
    const svg = await fs.readFile(path.join(vectorDir, file), "utf8");
    assert.match(svg, /viewBox="0 0 1200 800"/);
    assert.match(svg, /role="img"/);
    assert.match(svg, /aria-labelledby="title desc"/);
    assert.match(svg, /<title id="title">[\s\S]+<\/title>/);
    assert.match(svg, /<desc id="desc">[\s\S]+<\/desc>/);
    assert(!/<image\b|<foreignObject\b/i.test(svg), `${file} must remain vector-only`);
  }
  const m01 = await fs.readFile(path.join(vectorDir, assets[0]), "utf8");
  assert.equal((m01.match(/<use href="#b"/g) || []).length, 5);
  assert.equal((m01.match(/<use href="#c" x="(?:535|600|665)" y="560"/g) || []).length, 3);
  assert(m01.includes("23 = 5 × 4 + 3"));
  const m02 = await fs.readFile(path.join(vectorDir, assets[1]), "utf8");
  assert.equal((m02.match(/<path d="M(?:970|770|570|370) 475Q/g) || []).length, 4);
  assert(m02.includes("23 → 18 → 13 → 8 → 3"));
  const m03 = await fs.readFile(path.join(vectorDir, assets[2]), "utf8");
  assert.equal((m03.match(/<use href="#row"/g) || []).length, 4);
  assert(m03.includes("5 × 4 = 20") && m03.includes("23 − 20 = 3"));
  const m04 = await fs.readFile(path.join(vectorDir, assets[3]), "utf8");
  assert.match(m04, /pattern id="cells" x="200" width="34"/);
  assert.match(m04, /x="200" y="300" width="782" height="130"/);
  assert.match(m04, /x="880" y="300" width="102" height="130"/);
  const m05 = await fs.readFile(path.join(vectorDir, assets[4]), "utf8");
  assert.equal((m05.match(/<use href="#cut"/g) || []).length, 3);
  assert.equal((m05.match(/<use href="#b"/g) || []).length, 5);
  assert(m05.includes("3 × 5 = 15 fifth-pieces") && m05.includes("3 pieces per bowl = 3/5 candy"));
  const m06 = await fs.readFile(path.join(vectorDir, assets[5]), "utf8");
  assert.equal((m06.match(/<path d="M(?:160|340|520|700) 465Q/g) || []).length, 4);
  for (const value of [">0</text>", ">5</text>", ">10</text>", ">15</text>", ">20</text>", ">23</text>", ">25</text>"]) assert(m06.includes(value));
  const m07 = await fs.readFile(path.join(vectorDir, assets[6]), "utf8");
  for (const value of ["4 × 5 = 20", "23 − 20 = 3", "23 ÷ 5 = 4 R3"]) assert(m07.includes(value));
  const m08 = await fs.readFile(path.join(vectorDir, assets[7]), "utf8");
  assert.equal((m08.match(/<use href="#five"/g) || []).length, 5);
  assert(m08.includes("25 − 2 = 23") && m08.includes("23 = 5 × 4 + 3"));
  const m09 = await fs.readFile(path.join(vectorDir, assets[8]), "utf8");
  assert.equal((m09.match(/<use href="#b"/g) || []).length, 5);
  assert(m09.includes("separate remainder plate · 3") && m09.includes("3 &lt; 5"));
  const m10 = await fs.readFile(path.join(vectorDir, assets[9]), "utf8");
  assert.equal((m10.match(/<use href="#share"/g) || []).length, 6);
  assert.equal((m10.match(/<use href="#fraction-share"/g) || []).length, 5);
  assert(m10.includes("4 R3") && m10.includes("4 3/5 each"));
});

test("CH11 has exact accessible vector art for all eighteen multiplication methods", async () => {
  const vectorDir = path.join(ROOT, "art", "vectors", "ch11");
  const assets = (await fs.readdir(vectorDir)).filter(file => /^ch11_m\d{2}_[a-z0-9-]+\.svg$/.test(file)).sort();
  assert.equal(assets.length, 18);
  assert.deepEqual(assets.map(file => file.match(/^ch11_m(\d{2})_/)[1]), Array.from({ length: 18 }, (_value, index) => String(index + 1).padStart(2, "0")));
  for (const file of assets) {
    const svg = await fs.readFile(path.join(vectorDir, file), "utf8");
    assert.match(svg, /viewBox="0 0 1200 800"/);
    assert.match(svg, /role="img"/);
    assert.match(svg, /aria-labelledby="title desc"/);
    assert.match(svg, /<title id="title">[\s\S]+<\/title>/);
    assert.match(svg, /<desc id="desc">[\s\S]+<\/desc>/);
    assert(!/<image\b|<foreignObject\b/i.test(svg), `${file} must remain vector-only`);
    assert(svg.includes("1,242"), `${file} must preserve the exact product`);
  }

  const m01 = await fs.readFile(path.join(vectorDir, assets[0]), "utf8");
  assert(m01.includes("30 × 40 ≈ 1,200") && m01.includes("Exact 1,242"));
  const m02 = await fs.readFile(path.join(vectorDir, assets[1]), "utf8");
  assert.match(m02, /x="180" y="175" width="696" height="380"/);
  assert.match(m02, /x="876" y="175" width="104\.4" height="380"/);
  assert(m02.includes("1,080 + 162 = 1,242"));
  const m03 = await fs.readFile(path.join(vectorDir, assets[2]), "utf8");
  assert.match(m03, /x="250" y="451\.3" width="700" height="103\.7"/);
  assert(m03.includes("920 + 322 = 1,242"));
  const m04 = await fs.readFile(path.join(vectorDir, assets[3]), "utf8");
  assert.equal((m04.match(/M150 \d+h500/g) || []).length, 30);
  assert.equal((m04.match(/M150 (?:639|656|673)h500/g) || []).length, 3);
  assert(m04.includes("1,380 − 138") && m04.includes("27 rows remain"));
  const m05 = await fs.readFile(path.join(vectorDir, assets[4]), "utf8");
  assert(m05.includes("27 × 50 = 1,350") && m05.includes("27 × 4 = 108") && m05.includes("1,350 − 108"));
  const m06 = await fs.readFile(path.join(vectorDir, assets[5]), "utf8");
  assert.match(m06, /x="250" y="495\.7" width="700" height="59\.3"/);
  assert(m06.includes("1,058 + 184 = 1,242"));
  const m07 = await fs.readFile(path.join(vectorDir, assets[6]), "utf8");
  assert(m07.includes("54 × 23") && m07.includes("54 × 20 = 1,080") && m07.includes("54 × 3 = 162"));
  const m08 = await fs.readFile(path.join(vectorDir, assets[7]), "utf8");
  assert.equal((m08.match(/<use href="#t"/g) || []).length, 27);
  assert(m08.includes("10 + 10 + 7 = 27 groups") && m08.includes("460 + 460 + 322"));
  const m09 = await fs.readFile(path.join(vectorDir, assets[8]), "utf8");
  assert.equal((m09.match(/M\d+ 3(?:40v80|50v60)/g) || []).length, 27);
  for (const milestone of ["10 → 460", "20 → 920", "27 → 1,242"]) assert(m09.includes(milestone));
  const m10 = await fs.readFile(path.join(vectorDir, assets[9]), "utf8");
  assert.match(m10, /x="210" y="170" width="696" height="378"/);
  assert.match(m10, /x="906" y="170" width="104\.4" height="378"/);
  assert(m10.includes("27 × 40 = 1,080") && m10.includes("27 × 6") && m10.includes("= 162"));
  const m11 = await fs.readFile(path.join(vectorDir, assets[10]), "utf8");
  for (const value of [">162</text>", ">1,080</text>", ">1,242</text>"]) assert(m11.includes(value));
  const m12 = await fs.readFile(path.join(vectorDir, assets[11]), "utf8");
  assert(m12.includes("27 × 40 = 1,080") && m12.includes("27 × 6 = 162") && m12.includes("same math, different format"));
  const m13 = await fs.readFile(path.join(vectorDir, assets[12]), "utf8");
  assert(m13.includes("27 × [40-unit bundle]") && m13.includes("27 × [6 singles]") && m13.includes("40 units"));
  const m14 = await fs.readFile(path.join(vectorDir, assets[13]), "utf8");
  for (const product of ["2×4 = 08", "7×4 = 28", "2×6 = 12", "7×6 = 42"]) assert(m14.includes(product));
  assert(m14.includes("14 → write 4, carry 1") && m14.includes("12 → write 2, carry 1"));
  const m15 = await fs.readFile(path.join(vectorDir, assets[14]), "utf8");
  assert(m15.includes("800 + 120 + 280 + 42 = 1,242"));
  const m16 = await fs.readFile(path.join(vectorDir, assets[15]), "utf8");
  for (const value of ["1 thousand", "2 hundreds", "4 tens", "2 ones", "1,000 + 200 + 40 + 2 = 1,242"]) assert(m16.includes(value));
  assert(m16.includes("trade 10 hundreds") && m16.includes("for 1 thousand"));
  const m17 = await fs.readFile(path.join(vectorDir, assets[16]), "utf8");
  assert.equal((m17.match(/<use href="#t"/g) || []).length, 27);
  assert(m17.includes("10 taps → 460") && m17.includes("7 taps → 322"));
  const m18 = await fs.readFile(path.join(vectorDir, assets[17]), "utf8");
  assert(m18.includes("APPROXIMATE") && m18.includes("30 × 40") && m18.includes("≈ 1,200"));
  assert(m18.includes("EXACT") && m18.includes("27 × 46") && m18.includes("= 1,242") && m18.includes("difference 42"));
  assert.match(m18, /M880 575v70M900 575v70/);
});

test("CH12 has exact accessible vector art for all eleven three-addend methods", async () => {
  const vectorDir = path.join(ROOT, "art", "vectors", "ch12");
  const assets = (await fs.readdir(vectorDir)).filter(file => /^ch12_m\d{2}_[a-z0-9-]+\.svg$/.test(file)).sort();
  assert.equal(assets.length, 11);
  assert.deepEqual(assets.map(file => file.match(/^ch12_m(\d{2})_/)[1]), Array.from({ length: 11 }, (_value, index) => String(index + 1).padStart(2, "0")));
  for (const file of assets) {
    const svg = await fs.readFile(path.join(vectorDir, file), "utf8");
    assert.match(svg, /viewBox="0 0 1200 800"/);
    assert.match(svg, /role="img"/);
    assert.match(svg, /aria-labelledby="title desc"/);
    assert.match(svg, /<title id="title">[\s\S]+<\/title>/);
    assert.match(svg, /<desc id="desc">[\s\S]+<\/desc>/);
    assert(!/<image\b|<foreignObject\b/i.test(svg), `${file} must remain vector-only`);
    assert(svg.includes("1,221"), `${file} must preserve the exact total`);
  }

  const m01 = await fs.readFile(path.join(vectorDir, assets[0]), "utf8");
  assert(m01.includes("(378 + 596) + 247 = 974 + 247 = 1,221"));
  const m02 = await fs.readFile(path.join(vectorDir, assets[1]), "utf8");
  assert(m02.includes("596 + 247 = 843") && m02.includes("378 + 843"));
  const m03 = await fs.readFile(path.join(vectorDir, assets[2]), "utf8");
  assert.equal((m03.match(/<use href="#u"/g) || []).length, 4);
  assert(m03.includes("596 + 4 = 600") && m03.includes("247 − 4 = 243") && m03.includes("378 + 600 + 243"));
  const m04 = await fs.readFile(path.join(vectorDir, assets[3]), "utf8");
  for (const subtotal of ["300 + 500 + 200", "70 + 90 + 40", "8 + 6 + 7", "1,000 + 200 + 21 = 1,221"]) assert(m04.includes(subtotal));
  const m05 = await fs.readFile(path.join(vectorDir, assets[4]), "utf8");
  for (const step of ["8 + 6 + 7 = 21", "7 + 9 + 4 + 2 = 22", "3 + 5 + 2 + 2 = 12", "write 1 · carry 2 tens", "write 2 · carry 2 hundreds"]) assert(m05.includes(step));
  assert.match(m05, /x="350" y="190"/);
  assert.match(m05, /x="382" y="190"/);
  const m06 = await fs.readFile(path.join(vectorDir, assets[5]), "utf8");
  assert(m06.includes("596 + 247") && m06.includes("= 843") && m06.includes("needs exactly 622") && m06.includes("843 − 622 = 221"));
  const m07 = await fs.readFile(path.join(vectorDir, assets[6]), "utf8");
  assert(m07.includes("378 + 247 = 625") && m07.includes("625 + 596"));
  const m08 = await fs.readFile(path.join(vectorDir, assets[7]), "utf8");
  assert(m08.includes("400 + 600 + 200") && m08.includes("≈ 1,200") && m08.includes("gap 21"));
  assert.match(m08, /M890 535v70M900 535v70/);
  const m09 = await fs.readFile(path.join(vectorDir, assets[8]), "utf8");
  for (const value of ["10 hundreds", "20 tens", "21 ones", "1 thousand", "2 hundreds", "2 tens", "1 one"]) assert(m09.includes(value));
  const m10 = await fs.readFile(path.join(vectorDir, assets[9]), "utf8");
  for (const state of ["10 hundreds", "20 tens", "21 ones", "22 tens", "12 hundreds", "1 thousand", "2 hundreds", "2 tens", "1 one"]) assert(m10.includes(state));
  for (const trade of ["20 ones → 2 tens", "20 tens → 2 hundreds", "10 hundreds → 1 thousand"]) assert(m10.includes(trade));
  assert.equal((m10.match(/marker-end="url\(#a\)"/g) || []).length, 3);
  assert.match(m10, /markerUnits="userSpaceOnUse"/);
  const m11 = await fs.readFile(path.join(vectorDir, assets[10]), "utf8");
  assert(!/<use\b/i.test(m11), "M11 must remain an abstract conservation diagram without concrete transfer tokens");
  assert(m11.includes("+4 at 596") && m11.includes("−4 at 247") && m11.includes("(596 + 4) + (247 − 4) = 596 + 247"));
});

test("CH13 has exact accessible vector art for all ten unlike-denominator methods", async () => {
  const vectorDir = path.join(ROOT, "art", "vectors", "ch13");
  const assets = (await fs.readdir(vectorDir)).filter(file => /^ch13_m\d{2}_[a-z0-9-]+\.svg$/.test(file)).sort();
  assert.equal(assets.length, 10);
  assert.deepEqual(assets.map(file => file.match(/^ch13_m(\d{2})_/)[1]), Array.from({ length: 10 }, (_value, index) => String(index + 1).padStart(2, "0")));
  for (const file of assets) {
    const svg = await fs.readFile(path.join(vectorDir, file), "utf8");
    assert.match(svg, /viewBox="0 0 1200 800"/);
    assert.match(svg, /role="img"/);
    assert.match(svg, /aria-labelledby="title desc"/);
    assert.match(svg, /<title id="title">[\s\S]+<\/title>/);
    assert.match(svg, /<desc id="desc">[\s\S]+<\/desc>/);
    assert(!/<image\b|<foreignObject\b/i.test(svg), `${file} must remain vector-only`);
    assert(svg.includes("31/24") || /(?:31|thirty-one) twenty-fourths/i.test(svg), `${file} must preserve the exact sum`);
  }
  const m01 = await fs.readFile(path.join(vectorDir, assets[0]), "utf8");
  assert.match(m01, /pattern id="g24" x="300" width="30"/);
  assert.match(m01, /width="480" height="70"/);
  assert.match(m01, /width="450" height="70"/);
  assert(m01.includes("16/24 + 15/24 = 31/24"));
  const m02 = await fs.readFile(path.join(vectorDir, assets[1]), "utf8");
  assert(m02.includes("thirds: 8 + 8 + 8 cells") && m02.includes("eighths: 3 cells in each bracket"));
  assert(m02.includes("16 units + 15 units = 31 units"));
  const m03 = await fs.readFile(path.join(vectorDir, assets[2]), "utf8");
  assert.match(m03, /width="440" height="140"/);
  assert.match(m03, /x="680" y="155" width="275" height="210"/);
  assert(m03.includes("separate counts") && m03.includes("24/24 · one whole"));
  const m04 = await fs.readFile(path.join(vectorDir, assets[3]), "utf8");
  assert(m04.includes("× 8/8") && m04.includes("× 3/3"));
  assert.match(m04, /width="220" height="70"/);
  assert.match(m04, /width="206\.25" height="70"/);
  assert.match(m04, /markerUnits="userSpaceOnUse"/);
  const m05 = await fs.readFile(path.join(vectorDir, assets[4]), "utf8");
  assert.equal((m05.match(/q10-30 20 0/g) || []).length, 15);
  assert.match(m05, /cx="420" cy="455"/);
  assert.match(m05, /cx="720" cy="455"/);
  assert(m05.includes("Eight jumps reach one whole; seven continue beyond it."));
  const m06 = await fs.readFile(path.join(vectorDir, assets[5]), "utf8");
  assert.match(m06, /M684 255v90/);
  assert(m06.includes("ESTIMATE") && m06.includes("EXACT") && m06.includes("1 7/24 ≈ 1.292"));
  const m07 = await fs.readFile(path.join(vectorDir, assets[6]), "utf8");
  assert(m07.includes("2 × 8 = 16") && m07.includes("5 × 3 = 15") && m07.includes("3 × 8 = 24 — not 3 + 8"));
  assert.match(m07, /markerUnits="userSpaceOnUse"/);
  const m08 = await fs.readFile(path.join(vectorDir, assets[7]), "utf8");
  assert.match(m08, /width="840" height="100"/);
  assert.match(m08, /width="245" height="100"/);
  assert(m08.includes("31/24 = 24/24 + 7/24"));
  const m09 = await fs.readFile(path.join(vectorDir, assets[8]), "utf8");
  assert(m09.includes("1.291666…") && m09.includes("repeating / approximate display"));
  assert(m09.includes("2/3 = 16/24") && m09.includes("5/8 = 15/24"));
  const m10 = await fs.readFile(path.join(vectorDir, assets[9]), "utf8");
  assert.equal((m10.match(/<rect\b/g) || []).length, 1);
  assert.equal((m10.match(/marker-end="url\(#a\)"/g) || []).length, 2);
  assert(m10.includes("Same common-unit mathematics; reported format may differ or be absent."));
});

test("CH14 has exact accessible vector art for all ten three-fraction methods", async () => {
  const vectorDir = path.join(ROOT, "art", "vectors", "ch14");
  const assets = (await fs.readdir(vectorDir)).filter(file => /^ch14_m\d{2}_[a-z0-9-]+\.svg$/.test(file)).sort();
  assert.equal(assets.length, 10);
  assert.deepEqual(assets.map(file => file.match(/^ch14_m(\d{2})_/)[1]), Array.from({ length: 10 }, (_value, index) => String(index + 1).padStart(2, "0")));
  for (const file of assets) {
    const svg = await fs.readFile(path.join(vectorDir, file), "utf8");
    assert.match(svg, /viewBox="0 0 1200 800"/);
    assert.match(svg, /role="img"/);
    assert.match(svg, /aria-labelledby="title desc"/);
    assert.match(svg, /<title id="title">[\s\S]+<\/title>/);
    assert.match(svg, /<desc id="desc">[\s\S]+<\/desc>/);
    assert(!/<image\b|<foreignObject\b/i.test(svg), `${file} must remain vector-only`);
    assert(svg.includes("22/12") || /22 twelfths/i.test(svg) || svg.includes("11/6 = 1 5/6"), `${file} must preserve the exact sum`);
  }
  const m01 = await fs.readFile(path.join(vectorDir, assets[0]), "utf8");
  assert.match(m01, /pattern id="grid" x="330" width="55"/);
  for (const width of ["495", "440", "275"]) assert(m01.includes(`width="${width}" height="72"`));
  assert(m01.includes("9/12 + 8/12 + 5/12 = 22/12"));
  const m02 = await fs.readFile(path.join(vectorDir, assets[1]), "utf8");
  for (const value of ["9/12 + 5/12 = 14/12", "14/12 ÷ 2/2 = 7/6", "7/6 + 4/6 = 11/6", "11/6 = 1 5/6"]) assert(m02.includes(value));
  assert.match(m02, /x="100" y="390" width="68" height="66"/);
  assert.match(m02, /x="690" y="390" width="340" height="66"/);
  const m03 = await fs.readFile(path.join(vectorDir, assets[2]), "utf8");
  assert(m03.includes("9/12 + 8/12") && m03.includes("= 17/12") && m03.includes("17/12 + 5/12") && m03.includes("= 22/12"));
  const m04 = await fs.readFile(path.join(vectorDir, assets[3]), "utf8");
  assert.equal((m04.match(/width="600" height="60"/g) || []).length, 3);
  assert(m04.includes("9 + 8 + 5 = 22 equal cells") && m04.includes("1 + 10/12 = 1 5/6"));
  const m05 = await fs.readFile(path.join(vectorDir, assets[4]), "utf8");
  assert.match(m05, /pattern id="ticks" x="100" width="40"/);
  for (const jump of ["+9/12", "+8/12", "+5/12"]) assert(m05.includes(jump));
  assert.equal((m05.match(/marker-end="url\(#a\)"/g) || []).length, 3);
  assert(m05.includes("9/12") && m05.includes("17/12") && m05.includes("22/12 = 11/6 = 1 5/6"));
  const m06 = await fs.readFile(path.join(vectorDir, assets[5]), "utf8");
  assert.match(m06, /M936 260v90/);
  assert(m06.includes("ESTIMATE") && m06.includes("EXACT") && m06.includes("11/6 = 1 5/6 ≈ 1.833"));
  const m07 = await fs.readFile(path.join(vectorDir, assets[6]), "utf8");
  for (const value of ["3/4 × 3/3 = 9/12", "2/3 × 4/4 = 8/12", "+ 5/12", "22/12", "÷ 2/2 → 11/6 = 1 5/6"]) assert(m07.includes(value));
  const m08 = await fs.readFile(path.join(vectorDir, assets[7]), "utf8");
  assert.match(m08, /width="600" height="95"/);
  assert.match(m08, /width="500" height="95"/);
  assert(m08.includes("10/12 ÷ 2/2") && m08.includes("= 5/6"));
  const m09 = await fs.readFile(path.join(vectorDir, assets[8]), "utf8");
  for (const phrase of ["3/4 → 9 twelfths", "2/3 → 8 twelfths", "5/12 → 5 twelfths", "9 + 8 + 5 = 22 twelfths"]) assert(m09.includes(phrase));
  assert(m09.includes("constructed account") && m09.includes("not required for correct reasoning"));
  const m10 = await fs.readFile(path.join(vectorDir, assets[9]), "utf8");
  assert.equal((m10.match(/<rect\b/g) || []).length, 1);
  assert.equal((m10.match(/marker-end="url\(#a\)"/g) || []).length, 2);
  assert(m10.includes("Same common-unit mathematics; reported format may differ or be absent."));
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

test("working bibliography matches canonical source verification statuses", async () => {
  const source = await fs.readFile(path.join(ROOT, "research", "source_log.csv"), "utf8");
  const [header, ...rows] = parseCsv(source);
  const records = rows.map(values => Object.fromEntries(header.map((field, index) => [field, values[index]])));
  const bibliography = await fs.readFile(path.join(ROOT, "research", "bibliography.md"), "utf8");
  assert.equal(bibliography, buildBibliography(records));
});

test("reader-facing manuscript cites only full-text-verified source records", async () => {
  const source = await fs.readFile(path.join(ROOT, "research", "source_log.csv"), "utf8");
  const [header, ...rows] = parseCsv(source);
  const statusIndex = header.indexOf("verification_status");
  const statuses = new Map(rows.map(values => [values[0], values[statusIndex]]));
  const manuscriptDir = path.join(ROOT, "book", "manuscript");
  const manuscriptFiles = (await fs.readdir(manuscriptDir)).filter(file => file.endsWith(".md"));
  const failures = [];
  for (const file of manuscriptFiles) {
    const manuscript = await fs.readFile(path.join(manuscriptDir, file), "utf8");
    const sourceIds = new Set(manuscript.match(/R\d{2}-(?:F|I)?\d{2,3}/g) || []);
    for (const sourceId of sourceIds) {
      if (statuses.get(sourceId) !== "verified") failures.push(`${file}: ${sourceId} is ${statuses.get(sourceId) || "missing"}`);
    }
  }
  assert.deepEqual(failures, []);
});

test("repository validates and build emits every manifest page", async () => {
  assert.deepEqual(await validateRepository(), []);
  await build();
  const manifest = JSON.parse(await fs.readFile(path.join(ROOT, "book", "CHAPTERS.json"), "utf8"));
  const explorer = await fs.readFile(path.join(ROOT, "_site", "index.html"), "utf8");
  assert.match(explorer, /class="skip-link"[^>]*href="#content"/);
  assert.match(explorer, /<label class="search">[\s\S]*<span>Filter chapters<\/span>[\s\S]*<input[^>]+data-chapter-search/);
  assert.match(explorer, /<button[^>]+aria-label="Use dark color theme"[^>]+aria-pressed="false"/);
  assert.equal((explorer.match(/<span aria-hidden="true">[AB]<\/span>/g) || []).length, 2);
  assert.match(explorer, /href="chapters\/frontmatter\/"/);
  for (const chapter of manifest) {
    const page = await fs.readFile(path.join(ROOT, "_site", "chapters", chapter.slug, "index.html"), "utf8");
    assert(page.includes(chapter.title.replaceAll("&", "&amp;")));
    assert.equal((page.match(/<h1\b/g) || []).length, 1, `${chapter.slug} should have one h1`);
    const ids = [...page.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(ids).size, ids.length, `${chapter.slug} should have unique element IDs`);
    const imageSources = [...page.matchAll(/<img[^>]+src="([^"]+)"/g)].map(match => match[1]);
    for (const imageSource of imageSources) {
      await fs.access(path.resolve(ROOT, "_site", "chapters", chapter.slug, imageSource));
    }
    if (chapter.chapter >= 0 && chapter.chapter <= 14) {
      assert.match(page, /<figure class="chapter-figure"><img[^>]+alt="[^"]+"/);
      assert.match(page, new RegExp(`assets/figures/ch${String(chapter.chapter).padStart(2, "0")}/[^\"]+\\.svg`));
    }
    const methodArtCounts = new Map([[1, 14], [2, 12], [3, 14], [4, 12], [5, 20], [6, 12], [7, 12], [8, 10], [9, 10], [10, 10], [11, 18], [12, 11], [13, 10], [14, 10]]);
    if (methodArtCounts.has(chapter.chapter)) {
      const code = String(chapter.chapter).padStart(2, "0");
      const expected = Array.from({ length: methodArtCounts.get(chapter.chapter) }, (_value, index) => String(index + 1).padStart(2, "0"));
      const figures = [...page.matchAll(new RegExp(`data-method-figure="${code}-(\\d{2})"`, "g"))].map(match => match[1]);
      assert.deepEqual(figures, expected);
      for (const method of figures) {
        const headingIndex = page.indexOf(`id="method-${method}-`);
        const figureIndex = page.indexOf(`data-method-figure="${code}-${method}"`);
        assert(headingIndex >= 0 && figureIndex > headingIndex, `CH${code} Method ${method} figure should follow its heading`);
      }
    }
  }
  const ch01Output = path.join(ROOT, "_site", "assets", "figures", "ch01");
  const composite = await fs.readFile(path.join(ch01Output, "ch01_m04_fingers-make-ten.svg"), "utf8");
  assert.match(composite, /<image href="data:image\/png;base64,/);
  await fs.access(path.join(ch01Output, "ch01_m04_fingers-make-ten_raster.png"));
  const ch02Output = path.join(ROOT, "_site", "assets", "figures", "ch02");
  for (const method of ["m01_remove-eight-counters", "m08_eight-tracking-marks"]) {
    const composite = await fs.readFile(path.join(ch02Output, `ch02_${method}.svg`), "utf8");
    assert.match(composite, /<image href="data:image\/png;base64,/);
    await fs.access(path.join(ch02Output, `ch02_${method}_raster.png`));
  }
  const ch05Output = path.join(ROOT, "_site", "assets", "figures", "ch05");
  for (const method of ["m17_fingers-group-counter", "m18_tap-each-twelve"]) {
    const composite = await fs.readFile(path.join(ch05Output, `ch05_${method}.svg`), "utf8");
    assert.match(composite, /<image href="data:image\/png;base64,/);
    await fs.access(path.join(ch05Output, `ch05_${method}_raster.png`));
  }
  const ch06Output = path.join(ROOT, "_site", "assets", "figures", "ch06");
  const ch06Composite = await fs.readFile(path.join(ch06Output, "ch06_m09_finger-group-counter.svg"), "utf8");
  assert.match(ch06Composite, /<image href="data:image\/png;base64,/);
  await fs.access(path.join(ch06Output, "ch06_m09_finger-group-counter_raster.png"));
  const ch07Output = path.join(ROOT, "_site", "assets", "figures", "ch07");
  const ch07Composite = await fs.readFile(path.join(ch07Output, "ch07_m08_place-final-tile.svg"), "utf8");
  assert.match(ch07Composite, /<image href="data:image\/png;base64,/);
  await fs.access(path.join(ch07Output, "ch07_m08_place-final-tile_raster.png"));
});
