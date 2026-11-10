import { localizedPath } from "@/lib/locales";
import type { Locale } from "@/lib/locales";
import { translator } from "@/lib/messages";
import Link from "next/link";
import { Footer, Header } from "@/components/SiteChrome";
import { demos } from "@/lib/site";


export default function DemoIndex({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return <><Header locale={locale} path="/demo/" /><main id="main" className="shell subpage">
    <span className="eyebrow">{t("THE WORKSPACES")}</span><h1>{t("Try it on your screen.")}</h1>
    <p>{t("Open either workspace in your browser or save its address in WebAppify. The tools and layout adapt to the space available.")}</p>
    <div className="demo-grid">{demos.map(demo => <Link className="demo-card" href={localizedPath(locale, `/demo/${demo.id}/`)} key={demo.id}>
      <span className="demo-icon" aria-hidden="true">{demo.id === "whiteboard" ? "◇" : "≡"}</span>
      <span className="eyebrow">{demo.index} / {t(demo.subtitle)}</span><h2>{t(demo.title)}</h2><p>{t(demo.description)}</p>
      <span className="text-link">{t("Open workspace")} <span aria-hidden="true">↗</span></span>
    </Link>)}</div>
  </main><Footer locale={locale} /></>;
}
