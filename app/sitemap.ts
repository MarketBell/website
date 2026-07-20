import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const routes = [
    "",
    "/about",
    "/features",
    "/pricing",
    "/contact",
    "/legal/terms",
    "/legal/privacy",
    "/legal/refund",
    "/legal/shipping",
  ];

  const lastModified = new Date("2026-07-21");

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified,
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route.startsWith("/legal") ? 0.5 : 0.8,
  }));
}
