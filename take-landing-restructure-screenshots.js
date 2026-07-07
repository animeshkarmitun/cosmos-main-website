import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { mkdirSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const OUTPUT_DIR = join(__dirname, "screenshots", "landing-restructure");
mkdirSync(OUTPUT_DIR, { recursive: true });
const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function shot(page, name) {
  const file = join(OUTPUT_DIR, `${name}.png`);
  await page.screenshot({ path: file });
  console.log(`Saved: ${file}`);
}

async function scrollToId(page, id) {
  await page.evaluate((sel) => {
    const el = document.getElementById(sel);
    if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
  }, id);
  await sleep(500);
}

async function clickExplore(page, id) {
  return page.evaluate((sel) => {
    const section = document.getElementById(sel);
    if (!section) return false;
    const btn = section.querySelector("button");
    if (btn) { btn.click(); return true; }
    return false;
  }, id);
}

(async () => {
  const browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"] });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page.goto(BASE_URL, { waitUntil: "networkidle2", timeout: 30000 });
    await page.waitForSelector("header", { timeout: 10000 });
    await sleep(800);

    // Walk through each landing teaser (scroll into view, reveal, capture)
    const teasers = [
      "impact-teaser",
      "services-teaser",
      "governance-teaser",
      "leadership-teaser",
      "our-commitment-section",
    ];
    for (let i = 0; i < teasers.length; i++) {
      await scrollToId(page, teasers[i]);
      await sleep(700);
      await shot(page, `${String(i + 1).padStart(2, "0")}-landing-${teasers[i]}`);
    }

    // ---- Navigate to TeamPage via leadership teaser ----
    const clicked = await clickExplore(page, "leadership-teaser");
    console.log("Clicked leadership Explore:", clicked);
    await sleep(1200);
    await page.evaluate(() => window.scrollTo(0, 0));
    await sleep(400);
    await shot(page, "06-teampage-hero");

    // Scroll to leadership roster
    await page.evaluate(() => {
      const headings = Array.from(document.querySelectorAll("h2"));
      const t = headings.find((h) => /Executive Leadership/i.test(h.textContent || ""));
      if (t) t.scrollIntoView({ behavior: "instant", block: "start" });
    });
    await sleep(700);
    await shot(page, "07-teampage-roster");

    // ---- Navigate to ServicesPage via header ----
    await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll("a"));
      const svc = links.find((a) => a.textContent && a.textContent.trim() === "Services");
      if (svc) svc.click();
    });
    await sleep(1200);
    await page.evaluate(() => window.scrollTo(0, 0));
    await sleep(400);
    await shot(page, "08-servicespage-hero");

    // Scroll to expanding portfolio
    await page.evaluate(() => {
      const headings = Array.from(document.querySelectorAll("h2"));
      const t = headings.find((h) => /Additional/i.test(h.textContent || ""));
      if (t) t.scrollIntoView({ behavior: "instant", block: "start" });
    });
    await sleep(700);
    await shot(page, "09-servicespage-capabilities");

    // ---- Mobile: landing leadership teaser ----
    await page.goto(BASE_URL, { waitUntil: "networkidle2" });
    await page.setViewport({ width: 375, height: 812 });
    await sleep(600);
    await scrollToId(page, "leadership-teaser");
    await sleep(500);
    await shot(page, "10-landing-leadership-mobile");

    console.log("All walkthrough screenshots captured.");
  } catch (error) {
    console.error("Error:", error);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
})();
