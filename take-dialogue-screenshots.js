import puppeteer from "puppeteer";
import { mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, "screenshots", "dialogue");

const VIEWPORTS = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 1080 },
];

async function goToDialogue(page) {
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1000));

  const clicked = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll("a, button"));
    const dialogueLink = links.find((el) =>
      (el.textContent || "").trim().includes("Cosmos Dialogue")
    );
    if (dialogueLink) {
      dialogueLink.click();
      return true;
    }
    return false;
  });

  if (!clicked) {
    throw new Error("Cosmos Dialogue link not found");
  }

  await page.waitForSelector("#dialogue-portal-page", { timeout: 15000 });
  await new Promise((r) => setTimeout(r, 1500));
}

(async () => {
  try {
    mkdirSync(OUTPUT_DIR, { recursive: true });

    console.log("Launching browser...");
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    for (const vp of VIEWPORTS) {
      console.log(`Capturing ${vp.name} (${vp.width}x${vp.height})...`);
      await page.setViewport({ width: vp.width, height: vp.height });
      await goToDialogue(page);

      const fullPath = join(OUTPUT_DIR, `dialogue-${vp.name}-full.png`);
      await page.screenshot({ path: fullPath, fullPage: true });
      console.log(`Saved ${fullPath}`);

      // Gallery section viewport capture
      await page.evaluate(() => {
        const headings = Array.from(document.querySelectorAll("h2"));
        const galleryHeading = headings.find((h) =>
          (h.textContent || "").includes("Dialogue in Action")
        );
        galleryHeading?.scrollIntoView({ behavior: "instant", block: "start" });
      });
      await new Promise((r) => setTimeout(r, 500));

      const galleryPath = join(OUTPUT_DIR, `dialogue-${vp.name}-gallery.png`);
      await page.screenshot({ path: galleryPath, fullPage: false });
      console.log(`Saved ${galleryPath}`);
    }

    await browser.close();
    console.log("Done.");
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
})();
