import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/locales";
import { translator } from "@/lib/messages";
import { Diagnostics } from "./Diagnostics";
import { LanguageMenu } from "./LanguageMenu";

export function DemoShell({ locale, path, title, children }: { locale: Locale; path: string; title: string; children: React.ReactNode }) {
  return <main id="main" className="demo-shell">
    <div className="demo-top"><Link className="text-link" href={localizedPath(locale, "/demo/")}>← {translator(locale)("All demos")}</Link>
      <h1>{title}</h1><LanguageMenu locale={locale} path={path} /></div>
    {children}
    <Diagnostics locale={locale} />
  </main>;
}
