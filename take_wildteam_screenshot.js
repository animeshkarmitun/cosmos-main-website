import puppeteer from 'puppeteer';

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 1000 });
    
    console.log('Navigating to local site...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 15000 });
    
    console.log('Finding and clicking WildTeam link/card...');
    await page.evaluate(() => {
      // Find all elements containing "WildTeam"
      const elements = Array.from(document.querySelectorAll('*'));
      const wildTeamCard = elements.find(el => {
        return el.textContent === 'WildTeam' && el.tagName === 'H3';
      });
      
      if (wildTeamCard) {
        // Find the clickable parent card
        const clickable = wildTeamCard.closest('div.cursor-pointer');
        if (clickable) {
           clickable.click();
        } else {
           wildTeamCard.click();
        }
      }
    });
    
    // Wait for the new page to render
    await new Promise(r => setTimeout(r, 2000));
    
    // Scroll down a bit to capture the content
    await page.evaluate(() => {
      window.scrollBy(0, 1500);
    });
    await new Promise(r => setTimeout(r, 1000));
    
    const screenshotPath = 'C:/Users/WEB/.gemini/antigravity/brain/af615303-eb74-48a8-a4c1-80ee586d73bd/wildteam_after.png';
    await page.screenshot({ path: screenshotPath });
    await browser.close();
    console.log('Screenshot taken at ' + screenshotPath);
  } catch (error) {
    console.error('Error taking screenshot:', error);
    process.exit(1);
  }
})();
