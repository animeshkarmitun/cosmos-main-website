const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");
const puppeteer = require("puppeteer");

const OUT_DIR = path.join(__dirname, "public", "images", "cosmos-books");

const books = [
  {
    id: "the-little-prince",
    filename: "the-little-prince.png",
    url: "https://cosmosbooks.com.bd/index.php?route=product/product&product_id=129",
  },
  {
    id: "art-against-genocide",
    filename: "art-against-genocide.png",
    url: "https://cosmosbooks.com.bd/index.php?route=product/product&product_id=125",
  },
  {
    id: "sundarbans",
    filename: "sundarbans.png",
    url: "https://cosmosbooks.com.bd/index.php?route=product/product&product_id=120",
  },
  {
    id: "bangabandhu",
    filename: "bangabandhu.png",
    url: "https://cosmosbooks.com.bd/index.php?route=product/product&product_id=126",
  },
  {
    id: "symphony-earth",
    filename: "symphony-earth.png",
    url: "https://cosmosbooks.com.bd/index.php?route=product/product&product_id=119",
  },
  {
    id: "ballads-paintings",
    filename: "shakoor.png",
    url: "https://cosmosbooks.com.bd/index.php?route=product/product&product_id=127",
  },
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    client
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          downloadFile(res.headers.location, dest).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          return;
        }
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on("finish", () => file.close(() => resolve(dest)));
        file.on("error", reject);
      })
      .on("error", reject);
  });
}

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const results = [];

  for (const book of books) {
    console.log(`Scraping: ${book.id} (${book.url})`);
    await page.goto(book.url, { waitUntil: "networkidle2", timeout: 60000 });

    const imageUrl = await page.evaluate(() => {
      const imgEl =
        document.querySelector(".thumbnails img") ||
        document.querySelector(".product-image img") ||
        document.querySelector("a.thumbnail img") ||
        document.querySelector("#content img");
      return imgEl ? imgEl.src : null;
    });

    if (!imageUrl) {
      console.error(`  No image found for ${book.id}`);
      continue;
    }

    const dest = path.join(OUT_DIR, book.filename);
    console.log(`  Downloading: ${imageUrl}`);
    console.log(`  -> ${dest}`);
    await downloadFile(imageUrl, dest);
    const size = fs.statSync(dest).size;
    console.log(`  Saved (${size} bytes)`);
    results.push({ id: book.id, filename: book.filename, imageUrl, size });
  }

  await browser.close();

  console.log("\n--- Summary ---");
  console.log(JSON.stringify(results, null, 2));
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
