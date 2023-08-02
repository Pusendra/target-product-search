import { TARGET_DOT_COM_BASE_URL } from "@/app/utils/api";
import puppeteer from "puppeteer";
import { scrollPageToBottom } from "puppeteer-autoscroll-down";

export async function POST(req) {
  try {
    const { input } = await req.json();

    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.setViewport({ width: 1920, height: 1080 });

    await page.goto(`${TARGET_DOT_COM_BASE_URL}/s?searchTerm=${input}`, {
      waitUntil: "load"
    });

    const placeholderElement = await page.$(".styles__StyledPlaceholder-sc-mjgam2-0.ebFbwC");
    if (!placeholderElement) {
      console.log("Placeholder element not present. Proceeding to the next step.");
    } else {
      await page.waitForSelector(".styles__Truncate-sc-1wcknu2-0.hcXfc", { visible: true });
      await scrollPageToBottom(page, {
        size: 110,
        delay: 250
      });

      const titleElements = await page.$$(".styles__Truncate-sc-1wcknu2-0.hcXfc");
      const imageElements = await page.$$(".styles__StyledLink-sc-vpsldm-0.kSbXRQ.h-display-block");

      const products = [];
      const titlesList = {};

      for (const titleElement of titleElements) {
        const titleLink = await titleElement.$("a");
        const title = await titleLink.evaluate((node) => node.textContent);
        const href = await titleLink.evaluate((node) => node.getAttribute("href"));

        titlesList[href] = {
          title: title,
          href: href
        };
      }

      for (const imageElement of imageElements) {
        const link = await imageElement.evaluate((node) => node.getAttribute("href"));

        const pictureElement = await imageElement.$("picture");
        const imgElement = await pictureElement.$("img");
        const firstImageLink = await imgElement.evaluate((node) => node.getAttribute("src"));

        if (titlesList.hasOwnProperty(link)) {
          const existingProduct = titlesList[link];
          existingProduct.imageLink = firstImageLink;
          products.push(existingProduct);
        }
      }

      await browser.close();

      const responseBody = JSON.stringify({
        message: "Search and submit success",
        downloads: products
      });

      return new Response(responseBody, { status: 200 });
    }
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ message: "Error occurred while processing request" }), {
      status: 500
    });
  }
}
