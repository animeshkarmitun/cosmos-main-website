import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto("http://localhost:4174", { waitUntil: "networkidle2" });
  await new Promise((r) => setTimeout(r, 1000));

  // Click Home dropdown
  await page.evaluate(() => {
    const header = document.querySelector("header");
    if (!header) return;
    const buttons = Array.from(header.querySelectorAll("button"));
    const homeButton = buttons.find((b) => b.textContent?.includes("Home"));
    console.log("Found home button:", homeButton?.textContent);
    if (homeButton) homeButton.click();
  });

  await new Promise((r) => setTimeout(r, 800));

  // Dump header HTML
  const headerHtml = await page.evaluate(() => {
    const header = document.querySelector("header");
    return header ? header.outerHTML : "No header found";
  });

  console.log("Header HTML (truncated):");
  console.log(headerHtml.substring(0, 3000));

  await browser.close();
})();
