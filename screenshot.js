import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  // Wait for the Team page to render
  await new Promise(r => setTimeout(r, 2000));
  
  // Scroll down a bit to see the cards clearly
  await page.evaluate(() => {
    window.scrollBy(0, 300);
  });
  
  await new Promise(r => setTimeout(r, 1000));
  
  await page.screenshot({ path: 'team_screenshot2.png' });
  await browser.close();
  console.log('Screenshot taken!');
})();
