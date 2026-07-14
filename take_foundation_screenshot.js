import puppeteer from 'puppeteer';

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 1080 });
    
    console.log('Navigating to http://localhost:3000...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    
    console.log('Waiting for render...');
    await new Promise(r => setTimeout(r, 2000));
    
    console.log('Navigating to Cosmos Foundation page...');
    await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a'));
      const foundationLink = links.find(l => l.textContent.includes('Cosmos Foundation'));
      if(foundationLink) {
        foundationLink.click();
      } else {
        console.log('Link not found');
      }
    });
    
    // Wait for the transition
    await new Promise(r => setTimeout(r, 2000));
    
    console.log('Taking screenshot...');
    await page.screenshot({ path: 'foundation_screenshot.png', fullPage: true });
    
    await browser.close();
    console.log('Screenshot taken successfully!');
  } catch (err) {
    console.error('Error:', err);
  }
})();
