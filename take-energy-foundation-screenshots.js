import puppeteer from "puppeteer";
import { mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, "screenshots", "energy-foundation");

(async () => {
  try {
    mkdirSync(OUTPUT_DIR, { recursive: true });

    console.log("Launching browser...");
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    async function goToEnergy(viewport) {
      await page.setViewport(viewport);
      await page.goto("http://localhost:3000", { waitUntil: "networkidle0", timeout: 30000 });
      await new Promise((r) => setTimeout(r, 2000));

      await page.evaluate(() => {
        const links = Array.from(document.querySelectorAll("a, button"));
        const energyLink = links.find((l) => l.textContent?.includes("Cosmos Energy"));
        if (energyLink) energyLink.click();
      });
      await new Promise((r) => setTimeout(r, 3000));

      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 400;
          const timer = setInterval(() => {
            window.scrollBy(0, distance);
            totalHeight += distance;
            if (totalHeight >= document.body.scrollHeight) {
              clearInterval(timer);
              resolve();
            }
          }, 100);
        });
      });
      await new Promise((r) => setTimeout(r, 2000));
      await page.evaluate(() => window.scrollTo(0, 0));
      await new Promise((r) => setTimeout(r, 1000));
    }

    console.log("Taking desktop screenshots...");
    await goToEnergy({ width: 1440, height: 1080 });
    await page.screenshot({ path: join(OUTPUT_DIR, "energy-new-desktop-full.png"), fullPage: true });
    await page.screenshot({ path: join(OUTPUT_DIR, "energy-new-desktop-viewport.png"), fullPage: false });

    console.log("Taking tablet screenshots...");
    await goToEnergy({ width: 768, height: 1024, isMobile: true });
    await page.screenshot({ path: join(OUTPUT_DIR, "energy-new-tablet-full.png"), fullPage: true });

    console.log("Taking mobile screenshots...");
    await goToEnergy({ width: 375, height: 812, isMobile: true });
    await page.screenshot({ path: join(OUTPUT_DIR, "energy-new-mobile-full.png"), fullPage: true });

    await browser.close();
    console.log(`All screenshots taken in ${OUTPUT_DIR}`);
  } catch (err) {
    console.error("Error:", err);
  }
})();
