const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '../../..');
const records = [
['Opening — rename the units', 'add-two-thirds-five-eighths',
 'Introduce the unlike fractions through equivalent quantities and a common-unit sum.',
 'Equal whole lengths, exact fill lengths, hatching for the second addend, and a dominant result card give a warm, uncluttered introduction.',
 [
 ['Major', 'The 32 px tick pattern uses the global origin rather than the bar origin x=300. Partial edge cells undermine the claim of twenty-four equal units.', 'Anchor the pattern at x=300; preserve 768 px whole and 512/480 px fills.', 'implemented', 320,220],
 ['Minor', 'The accessible description promises three bars and a partitioned result, but the visible result is an equation card.', 'Describe two partitioned bars and one equation card faithfully.', 'implemented', 600,610]
 ], 'Exactly 24 equal 32 px cells per bar; 16/15 filled cells; no partial edge cells; 31/24=1+7/24; description matches visible content.'],
['M01 — common-unit strips', 'ch13_m01_common-unit-strips',
 'Preserve the original third and eighth units while refining both into twenty-fourths.',
 'The fine 30 px grid is subordinate to strong source boundaries, and the two filled regions have redundant solid/hatch encoding. The sum occupies one separate card.',
 [['Retain', 'The source-boundary rhythms are correctly different: every eight cells for thirds, every three for eighths. No extra arrows or duplicated result rails are needed.', 'Keep the production picture; synchronize the brief to two refined strips rather than a three-stage strip sequence.', 'retained with rationale; brief synchronized', 650,190]],
 '24 equal 30 px cells per 720 px whole; third boundaries x540/780; eighth boundaries x390 through930 every90; fills480/450; labels remain contained at390 px.'],
['M02 — count the unit fraction', 'ch13_m02_unit-fraction-count',
 'Explain how thirds and eighths count copies of the same one-twenty-fourth unit.',
 'Three brackets above and eight below make both grouping rhythms auditable. A large running-count equation preserves the denominator meaning.',
 [['Moderate', 'The detached reference cell is 110 px wide while actual cells are 30 px, with no enlargement label. It can imply a different unit size.', 'Use a detached 30 px cell and put its 1 cell / 1/24 labels beside it; describe the equal-width reference in metadata.', 'implemented',1025,310]],
 '24 cells; upper brackets three groups of eight, lower eight groups of three; reference width30 equals strip width30; 16+15=31; labels avoid reference outline.'],
['M03 — two separate 3×8 grids', 'ch13_m03_three-by-eight-grid',
 'Supply a common area unit without incorrectly treating overlapping marks as the sum.',
 'Two separate wholes, a dashed separator, and explicit 16/15 source counts avoid union-area confusion. The result length is proportional to24+7.',
 [
 ['Major', 'The right grid reuses the left pattern origin x=80 at x=680, a 600 px translation not divisible by55. It renders nine unequal columns with partial edge cells.', 'Draw the right grid at its own origin with seven internal verticals every55 px and two horizontals every70 px.', 'implemented',700,240],
 ['Moderate', 'The result strip has only two solid regions although its description and brief promise31 countable cells.', 'Add30 internal ticks at24 px intervals; put whole/remainder labels beneath, keeping the24+7 boundary dominant.', 'implemented',600,580]
 ], 'Each grid has exactly3 rows ×8 equal columns; 2×8=16 and5×3=15; result31 cells at24 px; first24 form a whole, remaining7 share the same width; no labels obscure cells.'],
['M04 — scale without changing value', 'ch13_m04_scale-equivalent-fractions',
 'Pair numerator and denominator scaling while preserving each fraction value.',
 'Large source/equivalent notation, two separated cards, unchanged proportional fills, and solid/dashed frames make the operations clear without relying on color.',
 [
 ['Minor', 'The connector strokes continue beneath filled marker heads instead of stopping at their bases.', 'Use triangular marker heads anchored at their bases (refX=0); stop strokes at x422, before tips at440.', 'implemented',435,260],
 ['Minor', 'The manuscript brief promises expanding cards and paired arrows; the art uses one ×8/8 or ×3/3 arrow and fixed-length bars.', 'Synchronize the brief to fixed whole/fill lengths and a single multiplication-by-one arrow per row.', 'implemented in manuscript/brief',865,335]
 ], '2/3×8/8=16/24 and5/8×3/3=15/24; whole widths330, fill220/206.25; clean head-base joins; no false physical stretching implication.'],
['M05 — cross one whole on a line', 'ch13_m05_number-line-addition',
 'Add fifteen twenty-fourth intervals as eight to the whole, then seven beyond.',
 'The0–2 line is proportional, the two grouped moves avoid the historical micro-arc clutter, and exact start/whole/result labels are prominent.',
 [
 ['Moderate', 'Arcs float above the line with endpoints shifted five pixels from the actual ticks. Their purple marker heads also obscure connector joins.', 'Use paths at exact x420→580→720; explicit heads touch destination dots without being hidden. Move the second label away from its trajectory.', 'implemented',575,445],
 ['Minor', 'Briefs and ledger still describe fifteen separate jumps although the accepted art uses two grouped moves.', 'Record15 equal intervals grouped as+8/24 and +7/24 in the manuscript, prompt, and ledger.', 'implemented in scoped records',650,350]
 ], '0 at100,1 at580,2 at1060;48 equal20 px intervals;16/24 at420,31/24 at720; moves span160/140 px; heads remain visible above dots; solid/dashed paths survive grayscale.'],
['M06 — estimate then prove', 'ch13_m06_estimate-then-prove',
 'Separate a magnitude estimate near1.3 from exact common-unit arithmetic.',
 'The estimate position is proportional and explicitly labeled; dashed versus solid frames, headings, and≈ notation preserve estimate/proof separation in grayscale.',
 [['Minor', 'Metadata and brief promise an exact-point or24-unit inset that is absent; the exact panel is an equation card.', 'Keep visible artwork; describe the existing equation proof faithfully in metadata and briefs.', 'implemented; visible composition retained',600,560]],
 'Benchmark positions180/600/684/1020 represent1/1¼/1.3/1½; exact31/24=1 7/24;≈1.292 is marked approximate; no claim of a nonexistent inset.'],
['M07 — compact symbolic rule', 'ch13_m07_compact-symbolic-rule',
 'Make the numerator cross-products and denominator product of the compact rule explicit.',
 'The previous straight conversion rows avoided historical crossings and kept both equivalent addends present. The denominator warning was mathematically correct.',
 [['Moderate', 'The visible conversion rows omit the compact numerator calculation promised by the account, and a dangling line connects only the lower row toward the sum. The cross-path/tray brief is also stale.', 'Replace with separate labeled numerator and denominator rows, followed by the complete compact formula and exact mixed result; synchronize metadata/briefs.', 'implemented',835,555]],
 'Numerator2×8+5×3=16+15=31; denominator3×8=24; formula(2×8+5×3)/(3×8)=31/24=1 7/24; no crossing or dangling paths; full formula contained at390 px.'],
['M08 — whole and remainder', 'ch13_m08_whole-and-remainder',
 'Interpret31 twenty-fourths as24 making one whole plus seven remaining units.',
 'Separate strips preserve one35 px unit size; precise brackets identify the whole and remainder. The displayed decomposition and mixed form make the conversion direct.',
 [['Retain', 'Both strip origins align to the35 px pattern and all31 cells are countable; brackets and explicit labels make color unnecessary.', 'Retain the production picture and its accurate brief/provenance.', 'retained as-is',300,590]],
 '24 equal35 px cells in840 px whole, seven in245 px remainder;31/24=24/24+7/24=1 7/24; brackets clear of labels.'],
['M09 — decimal check', 'ch13_m09_decimal-verification',
 'Use a finite repeating-decimal display as verification while retaining an exact fraction explanation.',
 'The warm vector display now fits the palette. Dashed verification and solid exact panels, headings, and both equivalent fractions prevent the display from posing as proof.',
 [['Retain', 'The picture correctly distinguishes finite display from exact fraction, with no raster text. The manuscript still promises a24-cell exact model that is absent.', 'Retain the picture; synchronize the manuscript to its exact-equivalence card. The existing prompt/ledger already describe that card.', 'retained with rationale; brief synchronized',880,385]],
 '2÷3+5÷8=1.291666…; exact31/24=1 7/24; both16/24 and15/24 present; dashed/solid separation persists in grayscale; no invented calculator/raster provenance.'],
['M10 — external explanatory record', 'ch13_m10_abstract-common-unit',
 'Explain the same computation without claiming to portray an abstract inner scene.',
 'Three numbered large cards preserve original sum, renamed sum, and exact result. The external-record caption and absence of sensory imagery respect the constructed account.',
 [
 ['Minor', 'Connector strokes continue beneath their small filled marker heads.', 'Stop strokes at y318/558; add explicit head triangles ending at330/570, preserving the gaps between cards.', 'implemented',600,330],
 ['Minor', 'The brief/prompt describe three small equivalence nodes rather than the current large numbered sum-state cards.', 'Describe the actual three states and external-explanation caption consistently; retain the no-sensory-identity constraint.', 'implemented in scoped records',600,430]
 ], 'Original2/3+5/8→16/24+15/24→31/24=1 7/24; no addend disappears; clear joins; caption remains outside cards; no head/brain/glow or fixed identity claim.']
];
for (const r of records) { for (const k of [0,2,3,5]) r[k] = r[k].replace(/([a-z])(?=\d)/g, '$1 '); for (const f of r[4]) for (const k of [1,2,3]) f[k] = f[k].replace(/([a-z])(?=\d)/g, '$1 '); }
const markupDir = path.join(root,'qa/reports/ch13-image-markups'); fs.mkdirSync(markupDir,{recursive:true});
const esc = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const wrap = (s,n=55) => { const a=[]; let line=''; for(const w of s.split(' ')){ if((line+' '+w).length>n){a.push(line);line=w;}else line+=(line?' ':'')+w;} if(line)a.push(line);return a; };
let report = '# CH13 picture improvement audit — 2/3 + 5/8\n\nTask: `QA-IMAGE-PASS-CH13` · Date: 2026-10-04\n\nInventory: **11 reader-facing pictures: opening plus Methods 01–10. Coverage: 11/11 audits and 11/11 numbered markup SVGs.** The manuscript, CHAPTERS.json, build mapping, production manifest, prompt, scoped ledger, vector folder, and historical review reconcile to these eleven SVGs. No CH13 raster/composite assets exist. Shared manifest prose retains a historical 15-jump phrase; a scoped handoff proposes its correction.\n\nEvery baseline and final picture was rendered separately in Chrome at 1200×800 and inspected individually. Findings below refer to the baseline; resolutions record the final disposition. Each entry assesses arithmetic, thought fidelity, communication, warm book aesthetic, composition/proportions, labels/joins, hierarchy, and non-color accessibility. Anatomy and generated-raster provenance are not applicable; all pictures have native SVG labels and repository-authored geometry.\n\n';
records.forEach((r,i) => {
  const [title,asset,purpose,works,findings,checks] = r; const number=String(i).padStart(2,'0');
  const markup=`${number}_${i?'method_'+number:'opening'}.svg`;
  report+=`## ${number} — ${title}\n\n[Markup](./ch13-image-markups/${markup}) · Source: \`art/vectors/ch13/${asset}.svg\`\n\n**Purpose.** ${purpose}\n\n**What works.** ${works}\n\n`;
  findings.forEach(([severity,finding,target,resolution],j) => { report+=`${j+1}. **${severity} — ${finding}**\n\n   **Revision target:** ${target} **Resolution:** ${resolution}.\n\n`; });
  report+=`**Objective acceptance checks.** ${checks}\n\n**Final visual QA.** Passed individual 1200×800 inspection and 390 px placement for counts, geometry, hierarchy, labels, clear paths, and containment. ${[0,1,2,3,5,6,9].includes(i)?'Material grayscale proof also passed.':'Non-color cues were verified directly; no additional grayscale sample was necessary.'}\n\n`;
  const png=fs.readFileSync(path.join(__dirname,`baseline-${asset}.png`)).toString('base64');
  let svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="900" viewBox="0 0 1440 900" role="img" aria-labelledby="title desc"><title id="title">CH13 ${esc(title)} numbered audit markup</title><desc id="desc">Baseline preview with numbered callouts mapped one-to-one to audit findings. Production revisions and retained decisions are recorded in the audit.</desc><rect width="1440" height="900" fill="#FFFDF8"/><text x="30" y="50" font-family="Arial" font-size="28" fill="#18324A">${number} · ${esc(title)}</text><image x="20" y="100" width="720" height="480" href="data:image/png;base64,${png}"/>`;
  findings.forEach(([sev,finding,target,res,x,y],j) => {
    const ax=20+x*.6, ay=100+y*.6, cy=130+j*265;
    svg+=`<path d="M${ax} ${ay}L770 ${cy+15}" stroke="#A63C34" stroke-width="2" fill="none"/><circle cx="${ax}" cy="${ay}" r="17" fill="#A63C34"/><text x="${ax}" y="${ay+6}" text-anchor="middle" font-family="Arial" font-size="20" fill="white">${j+1}</text><rect x="770" y="${cy-25}" width="630" height="245" rx="12" fill="#F8F2E7" stroke="#A63C34"/><text x="790" y="${cy+7}" font-family="Arial" font-size="23" fill="#A63C34">${j+1} · ${esc(sev)}</text>`;
    wrap(finding,62).forEach((line,k)=>svg+=`<text x="790" y="${cy+40+k*25}" font-family="Arial" font-size="20" fill="#18324A">${esc(line)}</text>`);
  });
  svg+='<text x="30" y="850" font-family="Arial" font-size="22" fill="#5A6570">Baseline markup only · See audit for revision targets, acceptance checks, and final resolutions.</text></svg>\n';
  fs.writeFileSync(path.join(markupDir,markup),svg);
});
report+='## Resolution summary\n\n- **11/11 audits and 11/11 numbered markups (100% each).**\n- **Eight production SVGs revised:** opening; M02/M03/M04/M05/M07/M10 artwork; M06 metadata only.\n- **Three production SVGs retained:** M01/M08/M09, with individual rationale. M01/M09 briefs were synchronized.\n- **16 numbered findings:** 13 revision/synchronization findings resolved and 3 retained decisions justified. No unresolved findings.\n- Manuscript illustration briefs, current prompt, scoped ledger/provenance, and accessible metadata agree with current art. Repeated method-level constructed-account boilerplate removed under lesson 12; chapter opening, method framing, research disclosure, and book-level disclosure preserved.\n- Applied reusable lessons 1/5/6/7/8/12/16: head-base joins, preserve terms, exact units, clear label lanes, restrained explanation, editorial framing, traceable original partitions.\n- No new research sources, generated images, or external artwork added.\n- All eleven final pictures inspected; four 390 px sheets and seven grayscale proofs passed. Evidence and complete check log: `artifacts/ui/QA-IMAGE-PASS-CH13/`.\n- Shared-file handoff: propose replacing the manifest’s historical “15 jumps” phrase with “15 intervals grouped into +8/24 and +7/24 moves”; no out-of-lane edits made.\n';
fs.writeFileSync(path.join(root,'qa/reports/ch13_picture_improvement_audit.md'),report);
console.log(`Wrote ${records.length} audits and markups; ${records.reduce((n,r)=>n+r[4].length,0)} numbered findings.`);
