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

test("repository validates and build emits every manifest page", async () => {
  assert.deepEqual(await validateRepository(), []);
  await build();
  const manifest = JSON.parse(await fs.readFile(path.join(ROOT, "book", "CHAPTERS.json"), "utf8"));
  const explorer = await fs.readFile(path.join(ROOT, "_site", "index.html"), "utf8");
  assert.match(explorer, /class="skip-link"[^>]*href="#content"/);
  assert.match(explorer, /<label class="search">[\s\S]*<span>Filter chapters<\/span>[\s\S]*<input[^>]+data-chapter-search/);
  assert.match(explorer, /<button[^>]+aria-label="Switch color theme"/);
  assert.match(explorer, /href="chapters\/frontmatter\/"/);
  for (const chapter of manifest) {
    const page = await fs.readFile(path.join(ROOT, "_site", "chapters", chapter.slug, "index.html"), "utf8");
    assert(page.includes(chapter.title.replaceAll("&", "&amp;")));
    assert.equal((page.match(/<h1\b/g) || []).length, 1, `${chapter.slug} should have one h1`);
    if (chapter.chapter >= 0 && chapter.chapter <= 14) {
      assert.match(page, /<figure class="chapter-figure"><img[^>]+alt="[^"]+"/);
      assert.match(page, new RegExp(`assets/figures/ch${String(chapter.chapter).padStart(2, "0")}/[^\"]+\\.svg`));
    }
    const methodArtCounts = new Map([[1, 14], [2, 12], [3, 14], [4, 12], [8, 10]]);
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
});
