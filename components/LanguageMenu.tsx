import Link from "next/link";
import { languageNames, locales, localizedPath, type Locale } from "@/lib/locales";
import { translator } from "@/lib/messages";

export function LanguageMenu({ locale, path }: { locale: Locale; path: string }) {
  return <details className="language-menu">
    <summary><span className="sr-only">{translator(locale)("Language")} </span><span lang={locale}>{languageNames[locale]}</span></summary>
    <ul>{locales.map(language => <li key={language}>
      <Link href={localizedPath(language, path)} hrefLang={language} lang={language}
        aria-current={language === locale ? "page" : undefined}>{languageNames[language]}</Link>
    </li>)}</ul>
  </details>;
}
