import { localizedPath, type Locale } from "@/lib/locales";
import { translator } from "@/lib/messages";
import { localizedChapters } from "@/lib/chapters";
import Link from "next/link";
import { Comparison } from "@/components/Comparison";
import { Brand, Download, Footer, Header } from "@/components/SiteChrome";

const features = [
  { icon: "screen", title: "Desktop, when you need it.", body: "Request the desktop site when you want more room to work. Choose Auto, Mobile, or Desktop for each website." },
  { icon: "focus", title: "Websites, without the browser clutter.", body: "Open a saved site in its own focused viewer and decide whether to show the toolbar." },
  { icon: "tiles", title: "Your web apps, your way.", body: "Give each site a name and icon. Keep it in your library with its own display and link preferences." },
] as const;
const steps = [
  ["Add a website", "Paste a website address and give it a name."],
  ["Choose your experience", "Set its display mode and how external links open."],
  ["Open your web app", "Open it from your library, add a Home Screen shortcut, or keep a launch link in a note."],
] as const;

function FeatureIcon({ name }: { name: string }) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    {name === "screen" ? <path d="M4 6h24v16H4zM12 27h8m-4-5v5"/> : name === "focus" ? <path d="M12 5H5v7m15-7h7v7M5 20v7h7m15-7v7h-7M11 16h10"/> : <path d="M5 5h9v9H5zm13 0h9v9h-9zM5 18h9v9H5zm13 0h9v9h-9z"/>}
  </svg>;
}

function ProductPreview({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return <figure className="product-preview">
    <div className="preview-top"><span>{t("THE WEBAPPIFY LIBRARY")}</span><span>{t("ILLUSTRATED PREVIEW")}</span></div>
    <div className="preview-stage" aria-hidden="true">
      <div className="preview-library"><span className="preview-brand">▣ &nbsp; WEBAPPIFY</span><p>{t("My Web Apps")}</p>
        <div className="preview-apps">
          <div><i>◇</i><strong>{t("Fieldwork Board")}</strong><small>{t("Desktop")}</small></div>
          <div><i>≡</i><strong>{t("Field Notes")}</strong><small>{t("Mobile")}</small></div>
          <div><i>✳</i><strong>{t("Studio Journal")}</strong><small>{t("Auto")}</small></div>
        </div>
      </div>
      <div className="preview-settings"><div className="setting-icon">◇</div><strong>{t("Fieldwork Board")}</strong><small>{t("Website preferences")}</small>
        <div className="setting-row">{t("Display mode")} <b>{t("Desktop")}</b></div>
        <div className="setting-row">{t("Toolbar")} <b>{t("Hidden")}</b></div>
        <div className="setting-row">{t("External links")} <b>{t("Ask first")}</b></div>
      </div>
    </div>
    <figcaption><span className="status-dot" /> {t("One library. A different setup for each site.")}</figcaption>
  </figure>;
}


export default function Home({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return <><Header locale={locale} path="/" /><main id="main">
    <section className="shell hero">
      <div><p className="eyebrow"><span className="status-dot" /> {t("A PERSONAL WEB APP LIBRARY FOR IPHONE")}</p>
        <h1>{t("Make Any Website")}<br className="wide-break" />{locale === "ja" ? "" : " "}{t("into Your")}{locale === "ja" ? "" : " "}<em>{t("App.")}</em></h1>
        <p className="hero-subtitle">{t("Your favorite websites. Your preferred experience.")}</p>
        <p className="lede">{t("WebAppify lets you turn websites into personal web apps, choose desktop or mobile experiences, and browse without traditional browser distractions.")}</p>
        <div className="actions"><Download locale={locale} hero /><Link className="button secondary" href="#experience">{t("Explore the Demo")} <span aria-hidden="true">↓</span></Link></div>
      </div>
      <ProductPreview locale={locale} />
    </section>
    <section id="experience" className="section lab"><div className="shell">
      <p className="eyebrow section-index">{t("01 / THE EXPERIENCE")}</p>
      <h2>{t("Same Website.")}<br />{t("Different Experience.")}</h2>
      <p className="lede">{t("Discover how the way you open a website can change the way you use it.")}</p>
      <Comparison locale={locale} chapters={localizedChapters[locale]} />
    </div></section>
    <section id="features" className="shell section">
      <p className="eyebrow section-index">{t("02 / MADE PERSONAL")}</p><h2>{t("Make the web fit you.")}</h2>
      <div className="feature-grid">{features.map(feature => <article key={feature.icon}><FeatureIcon name={feature.icon} /><h3>{t(feature.title)}</h3><p>{t(feature.body)}</p></article>)}</div>
    </section>
    <section className="section steps-section"><div className="shell">
      <p className="eyebrow section-index">{t("03 / HOW IT WORKS")}</p><h2>{t("From website to web app.")}</h2>
      <ol className="step-grid list-none p-0">{steps.map(([title, body], index) => <li key={title}><span className="step-number" aria-hidden="true">0{index + 1}</span><FeatureIcon name={["tiles", "screen", "focus"][index]} /><h3>{t(title)}</h3><p>{t(body)}</p>
        {index === 2 && <Link className="text-link mt-3 inline-block" href={localizedPath(locale, "/support/#shortcuts")}>{t("Set up shortcuts")} <span aria-hidden="true">↗</span></Link>}
      </li>)}</ol>
    </div></section>
    <section id="download" className="shell section"><div className="download-panel"><Brand locale={locale} /><h2>{t("Your web, ready to open.")}</h2><p>{t("Keep your favorite sites one tap away in WebAppify.")}</p><Download locale={locale} /></div></section>
  </main><Footer locale={locale} /></>;
}
