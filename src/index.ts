import { chromium } from "playwright";
(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(
    "https://www.uniqlo.com/th/th/search/?q=%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B8%B7%E0%B8%94",
    { waitUntil: "networkidle" }
  );

  await page.locator("div.fr-toast div.close >button").click();
  await page.screenshot({ path: "img/fullpage_uniqlo.png" });

  const card = page.locator("article.fr-grid-item").nth(0);
  await card.screenshot({ path: "img/productcard_uniqlo.png" });

  console.log(await card.boundingBox());

  // const text = card.locator('.fr-product-card__info')
  // console.log(await text.boundingBox())

  await page.close();
  await browser.close();
})();
