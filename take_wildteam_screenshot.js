import puppeteer from "puppeteer";
import { mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, "screenshots", "wildteam");

(async () => {
  try {
    mkdirSync(OUTPUT_DIR, { recursive: true });

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 1000 });

    console.log("Navigating to local site...");
    await page.goto("http://localhost:3000", { waitUntil: "networkidle0", timeout: 15000 });

    console.log("Finding and clicking WildTeam link/card...");
    await page.evaluate(() => {
      const elements = Array.from(document.querySelectorAll("*"));
      const wildTeamCard = elements.find((el) => el.textContent === "WildTeam" && el.tagName === "H3");

      if (wildTeamCard) {
        const clickable = wildTeamCard.closest("div.cursor-pointer");
        if (clickable) {
          clickable.click();
        } else {
          wildTeamCard.click();
        }
      }
    });

    await new Promise((r) => setTimeout(r, 2000));

    await page.evaluate(() => {
      window.scrollBy(0, 1500);
    });
    await new Promise((r) => setTimeout(r, 1000));

    const screenshotPath = join(OUTPUT_DIR, "wildteam-after.png");
    await page.screenshot({ path: screenshotPath });
    await browser.close();
    console.log(`Screenshot taken at ${screenshotPath}`);
  } catch (error) {
    console.error("Error taking screenshot:", error);
    process.exit(1);
  }
})();
