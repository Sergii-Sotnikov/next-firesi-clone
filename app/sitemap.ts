import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://firetech.com.ua";
  const now = new Date();
  return [
    { url: `${base}/`,             lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/fipron`,       lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/certificates`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/instructions`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}