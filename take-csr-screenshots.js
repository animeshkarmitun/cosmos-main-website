import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { mkdirSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const OUTPUT_DIR = join(__dirname, "screenshots", "csr-page");
mkdirSync(OUTPUT_DIR, { recursive: true });

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Smoothly scroll through the whole page to trigger scroll-reveal animations,
// then optionally land at a specific element id.
async function revealAll(page, scrollToId) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 250;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 40);
    });
  });
  await sleep(400);
  if (scrollToId) {
    await page.evaluate((id) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
    }, scrollToId);
    await sleep(300);
  }
}

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

    // ---- 1. Landing page ----
    await page.goto(BASE_URL, { waitUntil: "networkidle2", timeout: 30000 });
    await page.waitForSelector("header", { timeout: 10000 });
    await sleep(800);

    // Scroll to the "Our Commitment" teaser
    await page.evaluate(() => {
      const el = document.getElementById("our-commitment-section");
      if (el) el.scrollIntoView({ behavior: "instant", block: "center" });
    });
    await sleep(600);
    await shot(page, "01-landing-teaser");

    // ---- 2. Navigate to CSR via the "Explore CSR" button ----
    const clicked = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll("button"));
      const btn = buttons.find((b) => {
        const t = b.textContent || "";
        return /Explore CSR/i.test(t) && b.closest("#our-commitment-section");
      });
      if (btn) { btn.click(); return true; }
      return false;
    });
    console.log("Clicked Explore CSR:", clicked);
    await sleep(1200);

    // Confirm we're on the CSR page
    const onCsr = await page.evaluate(
      () => !!document.querySelector("#csr-portal-page")
    );
    console.log("On CSR page:", onCsr);

    // Hero (top of page)
    await page.evaluate(() => window.scrollTo(0, 0));
    await sleep(500);
    await shot(page, "02-csr-hero");

    // Carousel (reveal + capture a second frame via next button)
    await page.evaluate(() => {
      const c = document.querySelector('[aria-roledescription="carousel"]');
      if (c) c.scrollIntoView({ behavior: "instant", block: "center" });
    });
    await sleep(700);
    await shot(page, "03-csr-carousel-frame-1");

    // click next
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button[aria-label="Next slide"]'));
      if (btns[0]) btns[0].click();
    });
    await sleep(900);
    await shot(page, "04-csr-carousel-frame-2");

    // Stats + sections (reveal all)
    await revealAll(page);
    await shot(page, "05-csr-stats");
    await page.evaluate(() => {
      const el = document.getElementById("csr-anti-tobacco");
      if (el) el.scrollIntoView({ behavior: "instant", block: "center" });
    });
    await sleep(400);
    await shot(page, "06-csr-section-antitobacco");

    // Founder quote
    await page.evaluate(() => {
      const quotes = Array.from(document.querySelectorAll("blockquote, h2, h3"));
      const q = quotes.find((n) => /Explore the Family/i.test(n.textContent || ""));
      if (q) {
        let node = q.parentElement;
        while (node && node.previousElementSibling) { node = node.previousElementSibling; break; }
      }
    });
    await revealAll(page);
    await page.evaluate(() => {
      const headings = Array.from(document.querySelectorAll("p"));
      const target = headings.find((p) => /truest balance sheet/i.test(p.textContent || ""));
      if (target) target.scrollIntoView({ behavior: "instant", block: "center" });
    });
    await sleep(400);
    await shot(page, "07-csr-quote");

    // Philanthropic grid
    await page.evaluate(() => {
      const headings = Array.from(document.querySelectorAll("h2"));
      const target = headings.find((h) => /Explore the Family/i.test(h.textContent || ""));
      if (target) target.scrollIntoView({ behavior: "instant", block: "center" });
    });
    await sleep(400);
    await shot(page, "08-csr-grid");

    // ---- 3. Mobile view of CSR hero + carousel ----
    await page.setViewport({ width: 375, height: 812 });
    await page.evaluate(() => window.scrollTo(0, 0));
    await sleep(500);
    await shot(page, "09-csr-hero-mobile");

    await page.evaluate(() => {
      const c = document.querySelector('[aria-roledescription="carousel"]');
      if (c) c.scrollIntoView({ behavior: "instant", block: "start" });
    });
    await sleep(500);
    await shot(page, "10-csr-carousel-mobile");

    // ---- 4. Footer with new CSR link ----
    await page.setViewport({ width: 1440, height: 900 });
    await page.evaluate(() => {
      const footer = document.querySelector("footer");
      if (footer) footer.scrollIntoView({ behavior: "instant", block: "start" });
    });
    await sleep(500);
    await shot(page, "11-footer-csr-link");

    console.log("All CSR screenshots captured.");
  } catch (error) {
    console.error("Error:", error);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
})();
