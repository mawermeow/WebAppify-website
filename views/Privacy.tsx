import type { Locale } from "@/lib/locales";
import { translator } from "@/lib/messages";
import { Footer, Header } from "@/components/SiteChrome";

export default function PrivacyPage({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return <><Header locale={locale} path="/privacy/" /><main id="main" className="shell subpage">
    <span className="eyebrow">{t("DRAFT / PENDING REVIEW")}</span><h1>{t("Privacy policy")}</h1>
    <p>{t("The official privacy policy for WebAppify and this website is pending review. This page is a placeholder for the confirmed data handling practices, retention details, and privacy contact.")}</p>
  </main><Footer locale={locale} /></>;
}
