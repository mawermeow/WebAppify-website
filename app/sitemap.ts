import type { MetadataRoute } from "next";
import { localizedPath, locales } from "@/lib/locales";
import { alternatePaths, routes } from "@/lib/routes";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  const origin = siteUrl;
  return (["home", "demos", "whiteboard", "reader"] as const).flatMap(route => {
    const languages = Object.fromEntries(
      Object.entries(alternatePaths(route)).map(([locale, path]) => [locale, new URL(path, origin).href]),
    );
    return locales.map(locale => ({
      url: new URL(localizedPath(locale, routes[route]), origin).href,
      alternates: { languages },
    }));
  });
}
