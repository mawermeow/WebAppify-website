import type { Locale } from "@/lib/locales";
import { translator } from "@/lib/messages";
import { Footer, Header } from "@/components/SiteChrome";

export default function SupportPage({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return <><Header locale={locale} path="/support/" /><main id="main" className="shell subpage">
    <span className="eyebrow">{t("DRAFT / PENDING REVIEW")}</span><h1>{t("Support")}</h1>
    <p>{t("Official support contact details and availability are pending confirmation.")}</p>
    <section id="shortcuts" className="mt-10 mb-8 max-w-prose">
      <h2 className="text-2xl font-bold">{t("Open a saved web app from Home Screen or a note")}</h2>
      <h3 className="mt-5 font-semibold">{t("Home Screen")}</h3>
      <p className="lede">{t("In Shortcuts, add WebAppify’s Open Web App Profile action and select a saved profile. Open the shortcut’s details and choose Add to Home Screen.")}</p>
      <h3 className="mt-5 font-semibold">{t("Notes and documents")}</h3>
      <p className="lede">{t("In the WebAppify library, open the saved profile’s ⋯ menu and choose Copy Shortcut Link. Paste it into a note or document that supports app links. Tap the link on a device with WebAppify and that profile to open the site.")}</p>
    </section>
    <p>{t("If a demo looks different from the comparison, expand Environment diagnostics on the demo page to see its actual viewport width, display mode, and User-Agent.")}</p>
  </main><Footer locale={locale} /></>;
}
