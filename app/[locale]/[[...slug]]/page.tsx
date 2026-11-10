import { notFound } from "next/navigation";
import { isLocale } from "@/lib/locales";
import { pageSlugs } from "@/lib/routes";
import { pageMetadata, SitePage } from "@/views/SitePage";

type Props = { params: Promise<{ locale: string; slug?: string[] }> };
export const dynamicParams = false;
export const generateStaticParams = pageSlugs;

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return pageMetadata(locale, slug);
}

export default async function LocalizedPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <SitePage locale={locale} slug={slug} />;
}
