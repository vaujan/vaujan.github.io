const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto('http://localhost:3000/resume');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: '/tmp/resume-screenshot.png', fullPage: true });
  console.log('Screenshot saved to /tmp/resume-screenshot.png');
  await browser.close();
})();
