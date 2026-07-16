import puppeteer from "puppeteer";
import { mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, "screenshots", "foundation");

(async () => {
  try {
    mkdirSync(OUTPUT_DIR, { recursive: true });

    console.log("Launching browser...");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 1080 });

    console.log("Navigating to http://localhost:3000...");
    await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });

    console.log("Waiting for render...");
    await new Promise((r) => setTimeout(r, 2000));

    console.log("Navigating to Cosmos Foundation page...");
    await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll("a"));
      const foundationLink = links.find((l) => l.textContent.includes("Cosmos Foundation"));
      if (foundationLink) {
        foundationLink.click();
      } else {
        console.log("Link not found");
      }
    });

    await new Promise((r) => setTimeout(r, 2000));

    const screenshotPath = join(OUTPUT_DIR, "foundation-full.png");
    console.log("Taking screenshot...");
    await page.screenshot({ path: screenshotPath, fullPage: true });

    await browser.close();
    console.log(`Screenshot taken at ${screenshotPath}`);
  } catch (err) {
    console.error("Error:", err);
  }
})();
