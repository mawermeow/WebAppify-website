import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DemoShell } from "@/components/DemoShell";
import { Reader } from "@/components/Reader";
import { Whiteboard } from "@/components/Whiteboard";
import { localizedChapters } from "@/lib/chapters";
import { localizedPath, type Locale } from "@/lib/locales";
import { translator, type Message } from "@/lib/messages";
import { alternatePaths, findRoute, routes, type Route } from "@/lib/routes";
import { description, siteUrl, title } from "@/lib/site";
import Home from "./Home";
import Demos from "./Demos";
import Privacy from "./Privacy";
import Support from "./Support";

const titles = {
  home: "WebAppify — Websites, on your terms",
  demos: "Demos",
  whiteboard: "Creative Workspace",
  reader: "Reading Workspace",
  privacy: "Privacy",
  support: "Support",
} satisfies Record<Route, Message>;

const descriptions = {
  home: description,
  demos: "Open two responsive workspaces in your browser or in WebAppify.",
  whiteboard: "Move and connect ideas on the interactive Fieldwork Board.",
  reader: "Read three original essays and adjust the typography and theme.",
  privacy: description,
  support: description,
} satisfies Record<Route, Message>;

const openGraphLocales: Record<Locale, string> = { en: "en_US", "zh-TW": "zh_TW", ja: "ja_JP", ko: "ko_KR" };

export function pageMetadata(locale: Locale, slug?: string[]): Metadata {
  const route = findRoute(slug) ?? notFound();
  const t = translator(locale);
  const pageTitle = route === "home" ? t(titles.home) : `${t(titles[route])} · WebAppify`;
  const path = localizedPath(locale, routes[route]);
  const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
  return {
    metadataBase,
    title: pageTitle,
    description: t(descriptions[route]),
    ...(metadataBase ? { alternates: { canonical: path, languages: alternatePaths(route) } } : {}),
    ...(route === "privacy" || route === "support" ? { robots: { index: false } } : {}),
    openGraph: {
      title: pageTitle, description: t(descriptions[route]), siteName: title, type: "website",
      locale: openGraphLocales[locale],
      alternateLocale: Object.values(openGraphLocales).filter(value => value !== openGraphLocales[locale]),
      ...(metadataBase ? {
        url: path,
        ...(locale === "en" ? { images: [{ url: "/social.png", width: 1200, height: 630, alt: "WebAppify — Make Any Website into Your App." }] } : {}),
      } : {}),
    },
  };
}

export function SitePage({ locale, slug }: { locale: Locale; slug?: string[] }) {
  const route = findRoute(slug) ?? notFound();
  switch (route) {
    case "home": return <Home locale={locale} />;
    case "demos": return <Demos locale={locale} />;
    case "privacy": return <Privacy locale={locale} />;
    case "support": return <Support locale={locale} />;
    case "whiteboard":
    case "reader":
      return <DemoShell locale={locale} path={routes[route]} title={translator(locale)(titles[route])}>
        {route === "whiteboard" ? <Whiteboard locale={locale} /> : <Reader locale={locale} chapters={localizedChapters[locale]} />}
      </DemoShell>;
  }
}
