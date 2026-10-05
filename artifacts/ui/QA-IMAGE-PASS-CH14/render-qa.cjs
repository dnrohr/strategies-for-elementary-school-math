const fs = require('fs');
const path = require('path');
const { chromium } = require('C:/Users/dnroh/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const sharp = require('C:/Users/dnroh/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root = path.resolve(__dirname, '../../..');
const phase = process.argv[2] || 'final';
(async () => {
  const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 800 }, deviceScaleFactor: 1 });
  const files = fs.readdirSync(path.join(root, 'art/vectors/ch14')).filter(f => f.endsWith('.svg')).sort();
  for (const file of files) {
    const svg = fs.readFileSync(path.join(root, 'art/vectors/ch14', file), 'utf8');
    await page.setContent(`<html><body style="margin:0">${svg}</body></html>`);
    await page.screenshot({ path: path.join(__dirname, `${phase}-${file.replace('.svg', '.png')}`) });
  }
  if (phase === 'final') {
    for (let i = 0; i < files.length; i += 3) {
      const html = files.slice(i, i + 3).map(f => `<section style="width:390px"><p style="font:14px Arial">${f}</p>${fs.readFileSync(path.join(root, 'art/vectors/ch14', f), 'utf8').replace('width="1200" height="800"', 'width="390" height="260"')}</section>`).join('');
      await page.setViewportSize({ width: 410, height: 930 });
      await page.setContent(`<html><body style="margin:10px">${html}</body></html>`);
      await page.screenshot({ path: path.join(__dirname, `narrow-${1 + i / 3}.png`), fullPage: true });
    }
    for (const n of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
      const f = files[n];
      await sharp(path.join(__dirname, `final-${f.replace('.svg', '.png')}`)).grayscale().toFile(path.join(__dirname, `grayscale-${f.replace('.svg', '.png')}`));
    }
  }
  await browser.close();
  console.log(`${phase}: rendered ${files.length} individual pictures${phase === 'final' ? ', four narrow sheets and eleven grayscale proofs' : ''}.`);
})();
