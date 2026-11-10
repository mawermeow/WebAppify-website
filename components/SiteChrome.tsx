import { localizedPath, type Locale } from "@/lib/locales";
import { translator } from "@/lib/messages";
import { LanguageMenu } from "./LanguageMenu";
import Link from "next/link";
import { appStoreUrl } from "@/lib/site";

export function Mark() {
  return <svg className="mark" viewBox="0 0 36 36" fill="none" aria-hidden="true">
    <rect width="36" height="36" rx="10" fill="currentColor"/>
    <path d="M10 13h11v12H10zM15 10h11v12" stroke="var(--mark-ink)" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M11 17h9" stroke="var(--mark-ink)" strokeWidth="1.5"/>
  </svg>;
}

export function Brand({ locale }: { locale: Locale }) {
  return <Link className="brand" href={localizedPath(locale, "/")}><Mark />WebAppify</Link>;
}

export function Header({ locale, path }: { locale: Locale; path: string }) {
  const t = translator(locale);
  return <header className="site-header"><nav className="shell nav" aria-label={t("Main")}>
    <Brand locale={locale} />
    <div className="nav-links"><Link href={localizedPath(locale, "/#features")}>{t("Features")}</Link><Link href={localizedPath(locale, "/demo/")}>{t("Demos")}</Link></div>
    <Link className="nav-cta" href={localizedPath(locale, "/#download")}>{t("Get the app")} <span aria-hidden="true">↗</span></Link>
    <LanguageMenu locale={locale} path={path} />
  </nav></header>;
}

export function Footer({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return <footer className="shell site-footer"><Brand locale={locale} /><p>{t("Make the web yours.")}</p>
    <nav aria-label={t("Footer")}><Link href={localizedPath(locale, "/privacy/")}>{t("Privacy")}</Link><Link href={localizedPath(locale, "/support/")}>{t("Support")}</Link></nav>
  </footer>;
}

export function Download({ locale, hero = false }: { locale: Locale; hero?: boolean }) {
  const t = translator(locale);
  if (appStoreUrl) return <a className="button primary" href={appStoreUrl}>{t("Download for iPhone")} <span aria-hidden="true">↗</span></a>;
  if (hero) return <Link className="button primary" href="#download">{t("Download for iPhone")} <span aria-hidden="true">↘</span></Link>;
  return <span className="release-pill"><span aria-hidden="true" /> {t("Coming soon to iPhone")}</span>;
}
