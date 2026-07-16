import puppeteer from "puppeteer";
import { mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, "screenshots", "team");

(async () => {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });

  await new Promise((r) => setTimeout(r, 2000));

  await page.evaluate(() => {
    window.scrollBy(0, 300);
  });

  await new Promise((r) => setTimeout(r, 1000));

  const screenshotPath = join(OUTPUT_DIR, "team-cards.png");
  await page.screenshot({ path: screenshotPath });
  await browser.close();
  console.log(`Screenshot taken at ${screenshotPath}`);
})();
