import puppeteer from 'puppeteer';

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    
    // Go to the events page or homepage where events are listed
    await page.goto('http://localhost:3000/events', { waitUntil: 'networkidle0', timeout: 15000 });
    
    // Wait for the Events page to render
    await new Promise(r => setTimeout(r, 2000));
    
    // Scroll down a bit to see the cards clearly
    await page.evaluate(() => {
      window.scrollBy(0, 300);
    });
    
    await new Promise(r => setTimeout(r, 1000));
    
    await page.screenshot({ path: 'C:/Users/WEB/.gemini/antigravity/brain/af615303-eb74-48a8-a4c1-80ee586d73bd/events_screenshot.png' });
    await browser.close();
    console.log('Screenshot taken!');
  } catch (error) {
    console.error('Error taking screenshot:', error);
    process.exit(1);
  }
})();
