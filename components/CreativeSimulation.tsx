"use client";

import { useState } from "react";
import type { Locale } from "@/lib/locales";
import { translator } from "@/lib/messages";
import { Whiteboard } from "./Whiteboard";

const views = [
  { id: "landscape", device: "iPhone 17 Pro Max", orientation: "Landscape" },
  { id: "duo", device: "iPhone Duo", orientation: "Inner display" },
] as const;

const experiences = {
  Safari: { editing: "desktop", tools: "Desktop tools", chrome: "Browser controls visible",
    note: "Safari can request the desktop site. In this comparison, the desktop tools are available, while the address bar and tabs take up part of the view." },
  PWA: { editing: "compact", tools: "Compact tools", chrome: "Standalone window",
    note: "The installed web app in these captures opens without browser controls, but the site shows a compact layout with fewer editing tools. Other PWAs can behave differently." },
  WebAppify: { editing: "desktop", tools: "Desktop tools", chrome: "Focused viewer",
    note: "A saved Desktop profile keeps the desktop tools visible without Safari’s address bar or tabs. The site still decides which features are available." },
} as const;

export function CreativeSimulation({ locale, method }: { locale: Locale; method: keyof typeof experiences }) {
  const t = translator(locale);
  const [view, setView] = useState<(typeof views)[number]["id"]>("duo");
  const { editing, tools, chrome, note } = experiences[method];

  return <div className="creative-simulation">
    <fieldset className="device-fieldset">
      <legend>{t("Device view")}</legend>
      <div className="segments device-segments">
        {views.map(item => <label key={item.id}>
          <input type="radio" name="device-view" checked={view === item.id} onChange={() => setView(item.id)} />
          <span>{item.device}<small>{t(item.orientation)}</small></span>
        </label>)}
      </div>
    </fieldset>
    <p className="mode-note" aria-live="polite">{t(note)}</p>
    <figure className="simulation-stage creative-stage">
      <div className="creative-viewport" data-view={view}>
        <div className="creative-frame" data-method={method} data-editing={editing}>
          {method === "Safari" && <div className="creative-browser" aria-hidden="true">
            <div className="creative-address"><span>‹</span><span>/demo/whiteboard/</span><span>↻</span></div>
            <div className="creative-tab-strip"><span>{t("Fieldwork Board")}</span><span>{t("Field Notes")}</span><span>＋</span></div>
          </div>}
          <Whiteboard locale={locale} />
        </div>
      </div>
      <figcaption className="comparison-caption">
        <div className="comparison-badges"><span>{t(tools)}</span><span>{t(chrome)}</span></div>
        <p>{t("Illustrated from one captured site. Layouts and available tools vary by website.")}</p>
      </figcaption>
    </figure>
  </div>;
}
