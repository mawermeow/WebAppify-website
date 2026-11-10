import type { MetadataRoute } from "next";
import { localizedPath, locales } from "@/lib/locales";
import { alternatePaths, routes } from "@/lib/routes";
import { absoluteUrl, siteUrl } from "@/lib/site";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return (["home", "demos", "whiteboard", "reader"] as const).flatMap(route => {
    const languages = Object.fromEntries(
      Object.entries(alternatePaths(route)).map(([locale, path]) => [locale, absoluteUrl(path)]),
    );
    return locales.map(locale => ({
      url: absoluteUrl(localizedPath(locale, routes[route])),
      alternates: { languages },
    }));
  });
}
