const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '../../..');
const verified = process.argv.includes('--verified');
const records = [
['Opening', 'three-fractions-in-twelfths',
 'Introduce the three addends as counts of one shared unit.',
 'Three 720-pixel wholes contain twelve 60-pixel cells each. Exact fills 540/480/300 show 9/8/5 cells. Hatch, labels, and separate rows supplement color. The warm paper field and one result card are balanced; the historical dense side calculation is already gone.',
 [['Retain','The current opening has equal units, a clean hierarchy, and no trajectories or edge-crowded side panel. Its equation card is accurately described in metadata.','Retain the picture and its exact native geometry.','retained with rationale',600,610]],
 'Count 12 cells per whole, marked 9/8/5; 22/12 = 11/6 = 1 5/6; no partial edge cells; headings and result remain contained; hatch and labels remain interpretable without color.'],
['M01 — common twelfths', 'ch14_m01_common-twelfths',
 'Rename fourths and thirds without changing their quantities.',
 'The three equal 660-pixel wholes and 55-pixel cells are already exact. Large conversion labels, hatch versus fill, and a single result card keep the picture quiet and auditable.',
 [['Moderate','All fine divisions look identical, hiding the original quarter and third boundaries promised by the brief. The brief also promises a 22-cell result, while the art has an equation card.','Add stronger boundaries every three cells in the quarter row and every four in the third row; synchronize the brief to the equation result card and describe these boundaries in metadata.','implemented',660,200]],
 'Quarter boundaries at x495/660/825; third boundaries at x550/770; fills 495/440/275 unchanged; twelve cells each; exact sum and original-unit grouping survive grayscale.'],
['M02 — strategic pairing', 'ch14_m02_strategic-pairing',
 'Combine fourths with twelfths, simplify that intermediate, then add thirds as sixths.',
 'The historical crowded bars were replaced by three numbered equation stages. Solid/dashed outlines and clear headings preserve sequence and unit changes. All addends and the 7/6 intermediate stay visible.',
 [['Moderate','The label “14/12 ÷ 2/2 = 7/6” is value preserving, but division by the whole fraction 2/2 does not express the separate numerator and denominator reduction.','Show (14 ÷ 2)/(12 ÷ 2) = 7/6 and explain that both counts are divided by two.','implemented',600,455],
  ['Minor','The manuscript/prompt/ledger describe a twelve-cell stage followed by a six-cell stage, but the current accepted layout is three equation cards.','Synchronize all scoped briefs and provenance to the numbered rename/pair/add cards.','implemented in scoped records',230,310]],
 '9/12 + 5/12 = 14/12; (14 ÷ 2)/(12 ÷ 2) = 7/6; 2/3 = 4/6; 7/6 + 4/6 = 11/6; three numbered stages; text stays inside each card; no nonexistent bars in current brief.'],
['M03 — staged first pair', 'ch14_m03_staged-first-pair',
 'Combine fourths and thirds before adding the already compatible five twelfths.',
 'Three separated cards preserve 17/12 and the ready 5/12, with warm restrained frames and a distinct simplification card. Directed connectors support reading order without crossing text.',
 [['Moderate','The reduction line uses division by 2/2 as shorthand for reducing numerator and denominator.','Write (22 ÷ 2)/(12 ÷ 2) = 11/6 explicitly.','implemented',600,600],
  ['Minor','Horizontal connector strokes continue beneath the small filled arrowheads.','Anchor markers at their bases with refX=0 and stop strokes 18 pixels before the old tip positions.','implemented',440,320],
  ['Minor','The manuscript brief promises a twelve-cell check strip which is absent.','Describe the three equation stages and separate result card accurately.','implemented in scoped records',600,390]],
 'Preserve 9/12 + 8/12 = 17/12; 17/12 + 5/12 = 22/12; explicit reduction to 11/6; connector ends x427/792, tips x445/810; no covered text or check-strip claim.'],
['M04 — equal bars', 'ch14_m04_equal-fraction-bars',
 'Accumulate the marked units of three equal fraction bars into a whole and remainder.',
 'Three source wholes are equal, with exact 9/8/5 marked counts and hatch/labels. The 12+10 result is mathematically correct, but its scale can be improved to make conservation visible.',
 [['Moderate','Source cells are 50 pixels wide while result cells shrink to 40 pixels without an explicit scale change. The result whole appears shorter than each source whole.','Keep 50-pixel cells in the result: 600 pixels for twelve plus 500 for ten. Label whole/remainder below the strip and synchronize brief/metadata.','implemented',650,590]],
 'Source wholes 600 pixels; every cell 50 pixels across all states; result x50–1150 with whole boundary x650; exactly 22 cells grouped 12+10; labels outside the cells; 1 + 10/12 = 1 5/6.'],
['M05 — number-line accumulation', 'ch14_m05_number-line-accumulation',
 'Add three displacements measured in twelfths on a proportional line.',
 'The 0–2 line spans 960 pixels with 40-pixel intervals. Arc lengths are horizontally correct and the dashed middle jump supplements color. Exact intermediate labels and result are prominent.',
 [['Moderate','Arc endpoints float 107 pixels above the number line. Filled heads overlap connector strokes, so the precise landings must be inferred from horizontal alignment.','Connect arcs to exact ticks at x100/460/780/980. Stop strokes at marker bases y473, place tips at y487, and move landing labels below the line.','implemented',780,380],
  ['Minor','The manuscript calls for jump brackets rather than the actual three directed arcs.','Synchronize the brief and ledger to proportional arcs meeting exact ticks.','implemented in scoped records',280,320]],
 'Twenty-four equal 40-pixel intervals; 0 x100, 1 x580, 2 x1060; 9/12 x460, 17/12 x780, 22/12 x980; three arcs with spans 360/320/200; labels clear of paths; visible heads; 22/12 = 11/6 = 1 5/6.'],
['M06 — estimate then exact', 'ch14_m06_estimate-then-exact',
 'Use a rough benchmark estimate as a check, then retain an exact equation proof.',
 'Dashed versus solid panels, ESTIMATE/EXACT headings, and approximate notation separate the two roles. The line places 1.8 correctly at x936 on the 0–2 range x180–1020. Both panels are spacious and the exact equation is large.',
 [['Retain','The current art correctly distinguishes the rough 1.8 marker from the separate exact 11/6 result; no extra exact-point overlay is needed.','Retain production SVG with its accurate estimate/proof metadata.','retained with rationale',600,560],
  ['Minor','The manuscript brief asks to place 22/12 on the benchmark line, although the final art uses a rough marker and a separate exact equation.','Synchronize the manuscript and current brief to the two distinct panels.','implemented in scoped records',936,290]],
 '0/1/2 positions x180/600/1020; 1.8 x936; exact 9/12 + 8/12 + 5/12 = 22/12; 11/6 = 1 5/6 ≈ 1.833; grayscale retains estimate/exact distinction.'],
['M07 — written column', 'ch14_m07_stacked-symbolic-algorithm',
 'Show common-unit conversions followed by addition of a written numerator column.',
 'Large conversion equations and aligned addends keep all three quantities present. Two spacious panels and an addition rule support hierarchy. The historical unit labels were enlarged already.',
 [['Moderate','The bottom shorthand “÷ 2/2 →” can be read as division of the whole fraction by one, and it mixes simplification with mixed-number interpretation on one line.','Use (22 ÷ 2)/(12 ÷ 2) = 11/6 on one line, then a larger 11/6 = 1 5/6 result beneath it. Synchronize metadata and brief.','implemented',890,585]],
 '3/4 × 3/3 = 9/12 and 2/3 × 4/4 = 8/12; unchanged + 5/12; written sum 22/12; component-wise reduction; mixed result on separate line; all text contained inside panels.'],
['M08 — whole and remainder', 'ch14_m08_whole-and-remainder',
 'Interpret twenty-two twelfths as one complete whole and five sixths remaining.',
 'The whole and remainder share exact 50-pixel cells. One 12-cell bracket and five two-cell remainder brackets make grouping auditable independently of color. No quantity vanishes during the rewrite.',
 [['Moderate','The reduction annotation “10/12 ÷ 2/2” does not explicitly show the two component divisions promised by the pairing brackets.','Replace with (10 ÷ 2)/(12 ÷ 2) = 5/6, keeping labels in the free space beside the remainder; update metadata/brief.','implemented',840,560]],
 'Whole 600 pixels/12 cells; remainder 500 pixels/10 cells; five 100-pixel pairing brackets; reduction yields 5/6; final 22/12 = 11/6 = 1 5/6; label clear of bar.'],
['M09 — verbal unit story', 'ch14_m09_verbal-unit-story',
 'Present a constructed inner script that keeps the common unit explicit.',
 'Four numbered speech-like cards already give a clear reading order. Phrases align above their equations; one subtle wave cue suggests auditory representation. The caveat says words are not required, and no portrait fixes the account to an identity.',
 [['Minor','Accessible metadata describes three thought-ribbon cards, but the picture contains four numbered cards including the sum.','Describe four cards and their rename/retain/add roles accurately.','implemented in SVG metadata',660,440],
  ['Minor','The manuscript/prompt ask for three short phrases routed to a result, whereas the accepted art has four speech-like statements and separate result.','Synchronize the scoped briefs to the current numbered layout; retain the art because its sequence and caveat are effective.','implemented in scoped records; visible artwork retained',330,145]],
 'Four cards numbered 1–4; 3/4 → 9 twelfths, 2/3 → 8, 5/12 → 5; 9 + 8 + 5 = 22 twelfths; exact result separate; metadata count four; constructed-account and no-required-inner-speech caveats preserved.'],
['M10 — external relation map', 'ch14_m10_abstract-common-unit',
 'Record the same computation externally without claiming to depict a non-sensory inner experience.',
 'Three generous numbered cards preserve original sum, equivalent twelfths, and final forms. Sparse typography and negative space make a restrained closing image. Explicit external-map framing and absence of sensory icons respect the account.',
 [['Minor','The vertical strokes extend into their filled marker heads.','Set marker refX=0; end strokes at y318/558 before the 12-pixel heads ending at y330/570.','implemented',600,330],
  ['Minor','The brief describes small branched nodes and a merge, while the actual image shows three numbered sum states.','Synchronize manuscript, prompt, and scoped ledger to the three-state relation map.','implemented in scoped records',600,465]],
 'Three complete sum states; both renamed addends and unchanged 5/12 retained; 22/12 = 11/6 = 1 5/6; clean head-base joins; external-record caption; no head, glow, or stable thinker type.']
];
const dir = path.join(root, 'qa/reports/ch14-image-markups'); fs.mkdirSync(dir,{recursive:true});
const esc = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const wrap = s => { const lines=[]; let line=''; for(const w of s.split(' ')){if((line+' '+w).length>62){lines.push(line);line=w;}else line+=(line?' ':'')+w;}if(line)lines.push(line);return lines; };
let report = '# CH14 picture improvement audit — 3/4 + 2/3 + 5/12\n\nTask: `QA-IMAGE-PASS-CH14` · Date: 2026-10-04\n\n## Reconciled inventory and review standard\n\n**11 reader-facing pictures: opening plus Methods 01–10. Audit coverage 11/11; numbered markup coverage 11/11 (100% each).** Reconciled against `book/CHAPTERS.json`, the ten manuscript methods, `scripts/build.mjs` filename mapping, `art/production_manifest.md`, scoped prompt/ledger, vector directory, and the historical read-only `image_review_ch14.md`. No chapter raster or composite files exist. Anatomy, image-generation prompts, and rejected generations are not applicable. All accepted art is repository-native SVG geometry and selectable text.\n\nBaseline renders were inspected individually at 1200×800 before revising. Each entry assesses mathematics, quantities, account fidelity, communication, aesthetic, proportions, composition, labels, joins, hierarchy, and non-color accessibility. Markup callouts reference baseline locations, and numbering matches each entry one-to-one. Final dispositions follow.\n\n';
records.forEach((r,i)=>{
 const [title,asset,purpose,works,findings,checks]=r; const number=String(i).padStart(2,'0'); const file=`${number}_${i?'method_'+number:'opening'}.svg`;
 report += `## ${number} — ${title}\n\nSource: \`art/vectors/ch14/${asset}.svg\` · [Numbered markup](./ch14-image-markups/${file})\n\n**Purpose.** ${purpose}\n\n**What works.** ${works}\n\n`;
 findings.forEach(([severity,finding,target,resolution],j)=>report+=`${j+1}. **${severity} — ${finding}**\n\n   **Revision target:** ${target}\n\n   **Disposition:** ${resolution}.\n\n`);
 report+=`**Objective acceptance checks.** ${checks}\n\n**Final visual QA.** Passed individual 1200×800 inspection, 390-pixel placement, and grayscale inspection. Exact quantities, readable dominant relationships, contained labels, clear joins, and non-color semantics verified. ${verified?'Complete repository check passed.':'Repository completion gate remains pending the test-scope handoff; chapter completion is not asserted.'}\n\n`;
 const png=fs.readFileSync(path.join(__dirname,`baseline-${asset}.png`)).toString('base64');
 let markup=`<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1100" viewBox="0 0 1440 1100" role="img" aria-labelledby="title desc"><title id="title">CH14 ${esc(title)} numbered audit markup</title><desc id="desc">Baseline preview with numbered callouts corresponding one-to-one to audit findings; final revisions and retained decisions are documented in the audit.</desc><rect width="1440" height="1100" fill="#FFFDF8"/><text x="30" y="50" font-family="Arial" font-size="28" fill="#18324A">${number} · ${esc(title)}</text><image x="20" y="110" width="720" height="480" href="data:image/png;base64,${png}"/>`;
 findings.forEach(([severity,finding,target,resolution,x,y],j)=>{
  const ax=20+x*.6,ay=110+y*.6,cy=130+j*280;
  markup+=`<path d="M${ax} ${ay}L770 ${cy+15}" stroke="#A63C34" stroke-width="2" fill="none"/><circle cx="${ax}" cy="${ay}" r="17" fill="#A63C34"/><text x="${ax}" y="${ay+6}" text-anchor="middle" font-family="Arial" font-size="20" fill="white">${j+1}</text><rect x="770" y="${cy-25}" width="630" height="260" rx="12" fill="#F8F2E7" stroke="#A63C34"/><text x="790" y="${cy+7}" font-family="Arial" font-size="23" fill="#A63C34">${j+1} · ${esc(severity)}</text>`;
  wrap(finding).forEach((line,k)=>markup+=`<text x="790" y="${cy+40+k*25}" font-family="Arial" font-size="20" fill="#18324A">${esc(line)}</text>`);
 });
 markup+='<text x="30" y="1040" font-family="Arial" font-size="22" fill="#5A6570">Baseline markup only · Audit records targets, exact acceptance checks, and final dispositions.</text></svg>\n';
 fs.writeFileSync(path.join(dir,file),markup);
});
report+='## Resolution and synchronization summary\n\n- 18 numbered findings: 16 revision/synchronization findings resolved, two retained decisions justified. No unresolved picture findings.\n- Nine production SVGs revised: M01/M02/M03/M04/M05/M07/M08/M10 artwork and M09 metadata. Opening and M06 retained with rationale.\n- Manuscript briefs, current prompts, scoped ledger/provenance, and accessible metadata synchronized. Lesson 12 applied by replacing ten repeated method disclaimers with “A solver might describe the experience this way”; book-level and chapter constructed-account disclosures remain intact.\n- Applied lessons 1/3/5/6/7/8/12/16: clean head joins, traceable units, preserve terms, equal geometry, clear lanes, restrained explanation, editorial framing, source partitions. Pattern-origin lesson 18 was inspected; existing CH14 patterns are already aligned correctly, so no speculative pattern edits were made.\n- No research sources, raster generation, external image provenance, or participant depictions added.\n- New reusable lesson proposed: show component-wise fraction reduction explicitly; division of a whole fraction by 2/2 preserves value but does not show the two component divisions.\n\n';
report+= 'All eleven final renders, all eleven grayscale proofs, four narrow sheets, eleven markup previews, and integrated narrow examples were inspected. Check results and handoff are in `artifacts/ui/QA-IMAGE-PASS-CH14/README.md`.\n\n';
report+= verified ? 'Final verification: 2026-10-05. The user authorized the narrow test-file scope handoff, and three CH14 assertions now require the explicit numerator/denominator reductions. Complete npm run check passed: validation, all 28 tests, build, and export verification. Diff whitespace checks passed. No known gaps remain. The implementation hash and completion state are recorded in the separate tracker commit through the task publishing sequence.\n' : 'Publishing gate is blocked: 27/28 tests pass, but three CH14 assertions in the shared test file require superseded reduction wording. An explicit scope handoff was requested. The reviewable three-assertion patch is saved in the task evidence folder and has not been applied. Export verification and diff whitespace checks pass. No implementation or tracker commit exists and nothing has been pushed.\n';
fs.writeFileSync(path.join(root,'qa/reports/ch14_picture_improvement_audit.md'), report);
console.log('Wrote 11 audit entries, 11 numbered markups, 18 findings.');
