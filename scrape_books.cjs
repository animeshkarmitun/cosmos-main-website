const puppeteer = require('puppeteer');

(async () => {
  const urls = [
    'https://cosmosbooks.com.bd/index.php?route=product/product&product_id=129',
    'https://cosmosbooks.com.bd/index.php?route=product/product&path=319&product_id=118',
    'https://cosmosbooks.com.bd/index.php?route=product/product&path=322&product_id=125',
    'https://cosmosbooks.com.bd/index.php?route=product/product&product_id=120'
  ];

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    for (const url of urls) {
      console.log(`\nFetching: ${url}`);
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      
      const data = await page.evaluate(() => {
        const titleEl = document.querySelector('h1.product-title') || document.querySelector('h1');
        const priceEl = document.querySelector('.price') || document.querySelector('.product-price');
        // Find the main image
        const imgEl = document.querySelector('.thumbnails img') || document.querySelector('.product-image img') || document.querySelector('a.thumbnail img');
        
        // Find description (usually in a tab-content or div with class description)
        const descEl = document.querySelector('#tab-description') || document.querySelector('.product-description');
        
        // Find author (usually in list items near the title)
        const items = Array.from(document.querySelectorAll('ul.list-unstyled li'));
        const authorLi = items.find(li => li.textContent.includes('Author') || li.textContent.includes('Brand'));
        
        return {
          title: titleEl ? titleEl.innerText.trim() : 'N/A',
          price: priceEl ? priceEl.innerText.trim().split('\n')[0] : 'N/A',
          image: imgEl ? imgEl.src : 'N/A',
          author: authorLi ? authorLi.innerText.trim() : 'N/A',
          description: descEl ? descEl.innerText.trim().substring(0, 300) + '...' : 'N/A'
        };
      });
      
      console.log(JSON.stringify(data, null, 2));
    }
    
    await browser.close();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
