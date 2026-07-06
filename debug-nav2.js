import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto("http://localhost:4174", { waitUntil: "networkidle2" });
  await new Promise((r) => setTimeout(r, 1000));

  // Find Home button using evaluateHandle
  const homeButton = await page.evaluateHandle(() => {
    const header = document.querySelector("header");
    if (!header) return null;
    const buttons = Array.from(header.querySelectorAll("button"));
    return buttons.find((b) => b.textContent?.includes("Home")) || null;
  });

  const box = await homeButton.boundingBox();
  console.log("Home button bounding box:", box);

  // Hover using page.mouse
  if (box) {
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await new Promise((r) => setTimeout(r, 800));
  }

  // Count visible dropdown buttons
  const dropdownInfo = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll("button"));
    return buttons
      .filter((b) => b.textContent?.includes("Home 2") || b.textContent?.includes("Home (Default)"))
      .map((b) => ({
        text: b.textContent?.trim(),
        visible: b.offsetParent !== null,
        rect: b.getBoundingClientRect(),
      }));
  });

  console.log("Dropdown buttons:", dropdownInfo);

  await browser.close();
})();
