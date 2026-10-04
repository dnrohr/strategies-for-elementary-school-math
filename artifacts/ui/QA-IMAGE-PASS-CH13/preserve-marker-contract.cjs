// Apply after apply-revisions.cjs: preserve repository marker conventions.
const fs = require('fs');
const path = require('path');
const dir = path.resolve(__dirname,'../../../art/vectors/ch13');
const edit = (f, fn) => { const p=path.join(dir,f); fs.writeFileSync(p,fn(fs.readFileSync(p,'utf8'))); };
const marker = n => `<defs><marker id="a" markerWidth="${n}" markerHeight="${n}" refX="0" refY="${n/2}" orient="auto" markerUnits="userSpaceOnUse" viewBox="0 0 ${n} ${n}"><path d="M0 0L${n} ${n/2}L0 ${n}Z" fill="#7652A8"/></marker></defs>`;
const insert = (s,n) => s.replace('</desc>','</desc>'+marker(n));
edit('ch13_m04_scale-equivalent-fractions.svg',s => insert(s,18).replace('d="M260 260H422"','d="M260 260H422" marker-end="url(#a)"').replace('d="M260 535H422"','d="M260 535H422" marker-end="url(#a)"').replace(/<path d="M422 251L440 260L422 269Z"[^>]*\/>/,'').replace(/<path d="M422 526L440 535L422 544Z"[^>]*\/>/,''));
edit('ch13_m05_number-line-addition.svg',s => insert(s,14).replace('d="M420 490C420 285 580 285 580 478"','d="M420 490C420 285 580 285 580 478" marker-end="url(#a)"').replace('d="M580 492C580 360 720 360 720 474"','d="M580 492C580 360 720 360 720 474" marker-end="url(#a)"').replace(/<path d="M572 478L580 492L588 478Z"[^>]*\/>/,'').replace(/<path d="M712 474L720 488L728 474Z"[^>]*\/>/,''));
edit('ch13_m07_compact-symbolic-rule.svg',s => s.replace('y="290"','y="270"').replace('</text>\n<rect x="70" y="380"','</text><text x="600" y="315" text-anchor="middle" font-size="25">2/3 × 8/8 = 16/24; 5/8 × 3/3 = 15/24</text>\n<rect x="70" y="380"').replace('Multiply the denominators: 3 × 8, rather than 3 + 8.', 'Multiply denominators: 3 × 8 = 24—not 3 + 8.'));
edit('ch13_m10_abstract-common-unit.svg',s => insert(s,12).replace('d="M600 280V318"','d="M600 280V318" marker-end="url(#a)"').replace('d="M600 520V558"','d="M600 520V558" marker-end="url(#a)"').replace(/<path d="M594 318L600 330L606 318Z"[^>]*\/>/,'').replace(/<path d="M594 558L600 570L606 558Z"[^>]*\/>/,''));
console.log('Preserved marker contracts with refX=0 at head bases, plus M07 equivalence anchors.');
