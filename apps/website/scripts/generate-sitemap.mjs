import { SitemapStream, streamToPromise } from "sitemap";
import { writeFile } from "node:fs/promises";

const BASE_URL = "https://www.sandtongridtech.com";

const routes = [
  "/",
  "/about",
  "/services",
  "/case-studies",
  "/industries",
  "/resources",
  "/careers",
  "/contact",
];

const sitemap = new SitemapStream({
  hostname: BASE_URL,
});

routes.forEach((route) => {
  sitemap.write({
    url: route,
    changefreq: "weekly",
    priority: route === "/" ? 1.0 : 0.8,
  });
});

sitemap.end();

const xml = await streamToPromise(sitemap);

await writeFile("./public/sitemap.xml", xml.toString(), "utf-8");

console.log("✅ sitemap.xml generated successfully");
