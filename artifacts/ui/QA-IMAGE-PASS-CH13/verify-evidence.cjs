const fs = require('fs');
const path = require('path');
const assert = require('assert/strict');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/dnroh/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root=path.resolve(__dirname,'../../..');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
 const page=await browser.newPage({viewport:{width:1440,height:900}});
 const assets=fs.readdirSync(path.join(root,'art/vectors/ch13')).filter(f=>f.endsWith('.svg')).sort();
 const markups=fs.readdirSync(path.join(root,'qa/reports/ch13-image-markups')).filter(f=>f.endsWith('.svg')).sort();
 assert.equal(assets.length,11); assert.equal(markups.length,11);
 for(const f of assets){
  const svg=fs.readFileSync(path.join(root,'art/vectors/ch13',f),'utf8');
  await page.setContent(`<body style="margin:0">${svg}</body>`);
  const failures=await page.evaluate(()=>{
   const s=document.querySelector('svg'); const issues=[];
   for(const t of s.querySelectorAll('text')){const b=t.getBBox();if(b.x<0||b.y<0||b.x+b.width>1200||b.y+b.height>800)issues.push(t.textContent);}
   for(const p of s.querySelectorAll('[marker-end]')){const id=p.getAttribute('marker-end').slice(5,-1);if(!s.querySelector(`[id="${id}"]`))issues.push('missing marker '+id);}
   return issues;
  });
  assert.deepEqual(failures,[],f+' text containment and marker references');
  assert(fs.existsSync(path.join(__dirname,'final-'+f.replace('.svg','.png'))));
 }
 for(const f of markups){
  await page.setContent(`<body style="margin:0">${fs.readFileSync(path.join(root,'qa/reports/ch13-image-markups',f),'utf8')}</body>`);
  await page.screenshot({path:path.join(__dirname,'markup-'+f.replace('.svg','.png'))});
  const outside=await page.evaluate(()=>Array.from(document.querySelectorAll('text')).filter(t=>{const b=t.getBBox();return b.x<0||b.x+b.width>1440||b.y+b.height>900;}).map(t=>t.textContent));
  assert.deepEqual(outside,[],f+' markup text containment');
 }
 const chapter=path.join(root,'_site/chapters/add-two-thirds-five-eighths/index.html');
 await page.setViewportSize({width:390,height:844});
 await page.goto(pathToFileURL(chapter).href);
 await page.evaluate(()=>document.querySelectorAll('figure img').forEach(i=>i.loading='eager'));
 await page.waitForFunction(()=>Array.from(document.querySelectorAll('figure img')).every(i=>i.complete&&i.naturalWidth>0));
 const mapped=await page.locator('figure img').count();assert.equal(mapped,11);
 const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);assert.equal(overflow,false);
 await page.screenshot({path:path.join(__dirname,'integrated-narrow-opening.png')});
 for(const id of ['03','05','07','10']) await page.locator(`[data-method-figure="13-${id}"]`).screenshot({path:path.join(__dirname,`integrated-narrow-m${id}.png`)});
 await browser.close();
 console.log('PASS: 11 production SVGs; all text contained; all marker references resolve; 11 final renders; 11 valid contained markups; integrated chapter has 11 loaded figures and no overflow at390 px.');
})();
