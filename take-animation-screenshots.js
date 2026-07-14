import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { mkdirSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const OUTPUT_DIR = join(__dirname, "screenshots", "animation-enhancements");
mkdirSync(OUTPUT_DIR, { recursive: true });
const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function shot(page, name) {
  const file = join(OUTPUT_DIR, `${name}.png`);
  await page.screenshot({ path: file });
  console.log(`Saved: ${file}`);
}

(async () => {
  const browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"] });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page.goto(BASE_URL, { waitUntil: "networkidle2", timeout: 30000 });
    await page.waitForSelector("header", { timeout: 10000 });
    await sleep(1000);

    // 1. Hero (top)
    await page.evaluate(() => window.scrollTo(0, 0));
    await sleep(500);
    await shot(page, "01-hero");

    // 2. Logo marquee (scroll just below hero)
    await page.evaluate(() => {
      const m = document.querySelector('[aria-label="Cosmos Group divisions"]');
      if (m) m.scrollIntoView({ behavior: "instant", block: "center" });
    });
    await sleep(700);
    await shot(page, "02-logo-marquee");

    // 3. Impact teaser with count-up stats
    await page.evaluate(() => {
      const el = document.getElementById("impact-teaser");
      if (el) el.scrollIntoView({ behavior: "instant", block: "center" });
    });
    await sleep(1200); // allow count-up to animate + settle
    await shot(page, "03-impact-countup");

    // Read back stat values to confirm count-up produced real numbers
    const statTexts = await page.evaluate(() => {
      const el = document.getElementById("impact-teaser");
      if (!el) return [];
      return Array.from(el.querySelectorAll(".font-display")).map((n) => n.textContent);
    });
    console.log("Impact stats rendered as:", JSON.stringify(statTexts));

    // 4. Nav underline on hover — hover "About" link
    await page.evaluate(() => window.scrollTo(0, 0));
    await sleep(400);
    const hovered = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll("header nav a"));
      const about = links.find((a) => a.textContent && a.textContent.trim() === "About");
      if (about) { about.dispatchEvent(new MouseEvent("mouseover", { bubbles: true })); return true; }
      return false;
    });
    console.log("Hovered About link:", hovered);
    await sleep(500);
    await shot(page, "04-nav-underline-hover");

    // 5. Hero parallax — simulate a pointer move to the right edge & screenshot
    await page.mouse.move(1400, 450);
    await sleep(700);
    await shot(page, "05-hero-parallax-mouse-right");

    console.log("Done.");
  } catch (error) {
    console.error("Error:", error);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
})();
