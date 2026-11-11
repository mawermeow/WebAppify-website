import { localizedPath, type Locale } from "@/lib/locales";
import { translator } from "@/lib/messages";
import { localizedChapters } from "@/lib/chapters";
import Link from "next/link";
import { Comparison } from "@/components/Comparison";
import { SampleCover } from "@/components/ReaderSimulation";
import { Brand, Download, Footer, Header } from "@/components/SiteChrome";

const features = [
  { icon: "focus", title: "Websites, without the browser clutter.", body: "Open a site without an address bar or tabs. In Display settings, extend web content to the screen edges." },
  { icon: "screen", title: "Desktop, when you need it.", body: "Request the desktop site when you want more room to work. Choose Auto, Mobile, or Desktop for each website." },
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
    <div className="preview-stage" aria-hidden="true">
      <div className="preview-screen"><SampleCover locale={locale} /></div>
    </div>
    <figcaption>iPhone Duo · {t("Inner display")} · {t("ILLUSTRATED PREVIEW")}</figcaption>
  </figure>;
}


export default function Home({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return <><Header locale={locale} path="/" /><main id="main">
    <section className="shell hero">
      <div><p className="eyebrow">iPhone Duo</p>
        <h1>{t("Browse the web full screen. Make every pixel count.")}</h1>
        <p className="hero-subtitle">{t("Unfold iPhone Duo and give the web page the space usually taken up by the address bar and tabs.")}</p>
        <p className="lede">{t("Save a mobile or desktop browsing mode for each website.")}</p>
        <div className="actions"><Download locale={locale} hero /><Link className="button secondary" href="#experience">{t("Compare on iPhone Duo")} <span aria-hidden="true">↓</span></Link></div>
      </div>
      <ProductPreview locale={locale} />
    </section>
    <section id="experience" className="section lab"><div className="shell">
      <p className="eyebrow section-index">{t("01 / IPHONE DUO")}</p>
      <h2>{t("What fits when you unfold iPhone Duo?")}</h2>
      <p className="lede">{t("Compare four ways to open a book, or switch to the whiteboard to see which editing tools fit alongside the canvas.")}</p>
      <Comparison locale={locale} chapters={localizedChapters[locale]} />
      <div className="duo-details">
        <article><h3>{t("Unfold and keep going")}</h3><p>{t("When you open or close your iPhone Duo, the viewer resizes in the same browsing session. The website decides how its layout responds.")}</p></article>
        <article><h3>{t("Save a layout for each site")}</h3><p>{t("Try Auto for reading and save a Desktop profile for your whiteboard. WebAppify reuses each site’s display setting when you open it again.")}</p></article>
      </div>
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
