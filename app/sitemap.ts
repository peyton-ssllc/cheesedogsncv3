import type { MetadataRoute } from "next";
import { business } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/menu", "/catering", "/locations", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${business.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/locations" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/catering" ? 0.95 : 0.8
  }));
}
