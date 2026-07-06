import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const OUTPUT_DIR = join(__dirname, "screenshots", "home-comparison");
const BASE_URL = "http://localhost:4174";

async function capturePage(browser, name, navigateToHome2 = false) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(BASE_URL, { waitUntil: "networkidle2" });

  // Wait for the app to render
  await page.waitForSelector("header", { timeout: 10000 });

  if (navigateToHome2) {
    // Hover over the Home dropdown to open it
    const homeButton = await page.evaluateHandle(() => {
      const header = document.querySelector("header");
      if (!header) return null;
      const buttons = Array.from(header.querySelectorAll("button"));
      return buttons.find((b) => b.textContent?.includes("Home")) || null;
    });

    if (homeButton) {
      await homeButton.hover();
      await new Promise((r) => setTimeout(r, 500));

      // Click Home 2 option
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll("button"));
        const home2Button = buttons.find((b) => b.textContent?.includes("Home 2"));
        if (home2Button) home2Button.click();
      });
      await new Promise((r) => setTimeout(r, 1500));
    }

    // Verify we switched to light theme
    const isLight = await page.evaluate(() => {
      const main = document.querySelector("main");
      return main ? main.classList.contains("bg-[#FAF8F5]") : false;
    });
    if (!isLight) {
      console.warn("Warning: Home 2 light theme not detected. Screenshot may show Home 1.");
    }
  }

  // Scroll to bottom to trigger animations, then back to top for screenshot
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 300;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 50);
    });
  });

  await new Promise((r) => setTimeout(r, 500));

  const fileName = join(OUTPUT_DIR, `${name}-desktop.png`);
  await page.screenshot({ path: fileName, fullPage: true });
  console.log(`Saved: ${fileName}`);

  // Mobile screenshot
  await page.setViewport({ width: 375, height: 812 });
  await new Promise((r) => setTimeout(r, 300));
  const mobileFileName = join(OUTPUT_DIR, `${name}-mobile.png`);
  await page.screenshot({ path: mobileFileName, fullPage: true });
  console.log(`Saved: ${mobileFileName}`);

  await page.close();
}

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });

  try {
    await capturePage(browser, "home-1", false);
    await capturePage(browser, "home-2", true);
    console.log("All screenshots captured successfully.");
  } catch (error) {
    console.error("Error capturing screenshots:", error);
  } finally {
    await browser.close();
  }
})();
