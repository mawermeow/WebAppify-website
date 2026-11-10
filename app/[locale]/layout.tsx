import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/locales";
import { Document } from "@/views/Document";

export function generateStaticParams() {
  return locales.filter(locale => locale !== "en").map(locale => ({ locale }));
}

export default async function LocalizedLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <Document locale={locale}>{children}</Document>;
}
