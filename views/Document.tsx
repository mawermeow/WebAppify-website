import type { Locale } from "@/lib/locales";
import { translator } from "@/lib/messages";
import "@/app/globals.css";
import "@/app/workspaces.css";

export function Document({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  return <html lang={locale}><body>
    <a className="skip" href="#main">{translator(locale)("Skip to content")}</a>{children}
  </body></html>;
}
