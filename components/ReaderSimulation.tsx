"use client";

import { useState } from "react";
import type { Locale } from "@/lib/locales";
import { translator } from "@/lib/messages";
import type { Chapter } from "@/lib/chapters";
import { Reader } from "./Reader";

export const readingExperiences = {
  "Official app": { layout: "official", badge: "Narrow app window",
    note: "In this iPhone Duo capture, the official HyRead app opens in a narrow window, leaving unused space on the sides." },
  Safari: { layout: "browser", badge: "Address bar and tabs",
    note: "Safari uses the wider screen, but its address bar and tabs leave less vertical room for the book." },
  PWA: { layout: "pwa", badge: "Controls after navigation",
    note: "After opening the book from the installed HyRead web app, extra controls appear over the reading view. This is the navigation behavior in the captured session." },
  WebAppify: { layout: "focused", badge: "More room for the book",
    note: "In the WebAppify capture, the book uses nearly the full view without the browser bars shown in the other web sessions." },
} as const;

export type ReadingMethod = keyof typeof readingExperiences;

export function SampleCover({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return <div className="sample-cover">
    <p className="cover-kicker">{t("Field Notes")} / 01</p>
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="320" height="170" fill="#d9e6da"/>
      <circle cx="184" cy="42" r="16" fill="#e7b270"/>
      <path d="M0 99 53 59 118 99 169 65 248 99 320 70V170H0Z" fill="#7d9d87"/>
      <path d="M0 113 66 87 117 111 193 84 320 117V170H0Z" fill="#385f4c"/>
      <path d="M0 121H320V170H0Z" fill="#719789"/>
      <path d="M91 133h63m32 8h75m-225 11h41m74 8h63" fill="none" stroke="#d3e5d9" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M142 108h28l-6 6h-17zm15-20v18h-15z" fill="#f8f2d7"/>
    </svg>
    <h3>{t("THE SLOW HOURS")}</h3>
    <p className="cover-edition">{t("ORIGINAL ESSAYS")}</p>
    <p className="cover-progress">{t("Cover")} · 0%</p>
  </div>;
}

export function ReaderSimulation({ locale, method, chapters }: { locale: Locale; method: ReadingMethod; chapters: readonly Chapter[] }) {
  const t = translator(locale);
  const [reading, setReading] = useState(true);
  const { layout, note } = readingExperiences[method];

  return <div className="reader-simulation">
    <figure className="simulation-stage">
      <div className="reader-simulation-tools">
        <span className="eyebrow">iPhone Duo</span>
        <button type="button" className="text-link" onClick={() => setReading(!reading)}>{t(reading ? "Show cover" : "Read sample")}</button>
      </div>
      <div className="reader-preview" data-layout={layout}>
        {layout === "browser" && <div className="creative-browser" aria-hidden="true">
          <div className="creative-address"><span>‹</span><span>/demo/reader/</span><span>↻</span></div>
          <div className="creative-tab-strip"><span>{t("Field Notes")}</span><span>{t("Fieldwork Board")}</span><span>＋</span></div>
        </div>}
        <div className="reader-preview-page" data-reading={reading}>
          {reading ? <Reader locale={locale} chapters={chapters} /> : <SampleCover locale={locale} />}
        </div>
        {layout === "pwa" && reading && <div className="reader-preview-overlay" aria-hidden="true">
          <div><span>×</span><span>{t("Field Notes")}</span><span>⋯</span></div>
          <div><span>‹</span><span>↗ &nbsp; ↻</span></div>
        </div>}
      </div>
      <figcaption className="comparison-caption">
        <p className="reading-comparison-note" aria-live="polite">{t(note)}</p>
        <p>{t("Illustration based on one HyRead session on iPhone Duo.")}</p>
      </figcaption>
    </figure>
  </div>;
}
