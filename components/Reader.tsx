"use client";

import type { Locale } from "@/lib/locales";
import { translator } from "@/lib/messages";
import { useId, useRef, useState } from "react";
import type { Chapter } from "@/lib/chapters";

export function Reader({ locale, chapters }: { locale: Locale; chapters: readonly Chapter[] }) {
  const t = translator(locale);
  const [chapterIndex, setChapter] = useState(0);
  const [font, setFont] = useState(18);
  const [theme, setTheme] = useState<"light" | "dark">();
  const [contents, setContents] = useState<boolean>();
  const chapter = chapters[chapterIndex];
  const contentsId = useId();
  const contentsNav = useRef<HTMLElement>(null);

  return <div className="workspace-container"><section className="workspace reader" data-theme={theme} data-contents={contents === undefined ? undefined : String(contents)} aria-label={t("Field Notes reader")}>
    <header className="workspace-header"><span className="workspace-symbol" aria-hidden="true">≡</span>
      <div><strong>{t("Field Notes")}</strong><small>{t("THE SLOW HOURS")}</small></div><span className="workspace-tag">{t("ORIGINAL ESSAYS")}</span>
    </header>
    <div className="reader-toolbar" role="group" aria-label={t("Reading settings")}>
      <button className="tool contents-toggle" aria-controls={contentsId} aria-expanded={contents}
        onClick={() => setContents(!contentsNav.current?.getClientRects().length)}>
        <span aria-hidden="true">☰</span> <span className="contents-open">{t("Contents")}</span><span className="contents-close">{t("Hide contents")}</span>
      </button>
      <div className="type-controls">
        <button className="tool" aria-label={t("Decrease font size")} disabled={font <= 14} onClick={() => setFont(font - 2)}>A−</button>
        <output aria-label={t("Font size")}>{font}px</output>
        <button className="tool" aria-label={t("Increase font size")} disabled={font >= 28} onClick={() => setFont(font + 2)}>A+</button>
      </div>
      <label className="theme-label"><span>{t("Theme")}</span><select className="tool" aria-label={t("Reading theme")} value={theme ?? "system"} onChange={event => {
        const value = event.target.value;
        setTheme(value === "light" || value === "dark" ? value : undefined);
      }}><option value="system">{t("System")}</option><option value="light">{t("Light")}</option><option value="dark">{t("Dark")}</option></select></label>
    </div>
    <div className="reader-layout">
      <nav className="reader-contents" id={contentsId} ref={contentsNav} aria-label={t("Chapters")}>
        <p className="workspace-kicker">{t("IN THIS EDITION")}</p>
        <ol>{chapters.map(({ title }, index) => <li key={title}><button className="tool chapter-button" aria-current={chapterIndex === index ? "true" : undefined}
          onClick={() => setChapter(index)}><small>0{index + 1}</small> {title}</button></li>)}</ol>
      </nav>
      <article className="reader-page" style={{ fontSize: font }}>
        <p className="workspace-kicker">{t("CHAPTER {n}").replace("{n}", `0${chapterIndex + 1}`)} / {t("THE SLOW HOURS")}</p>
        <h2>{chapter.title}</h2><p className="chapter-deck">{chapter.deck}</p>
        {chapter.paragraphs.map(paragraph => <p className="chapter-text" key={paragraph}>{paragraph}</p>)}
        <div className="chapter-nav">
          <button className="tool" disabled={chapterIndex === 0} onClick={() => setChapter(chapterIndex - 1)}>← {t("Previous")}</button>
          <button className="tool" disabled={chapterIndex === chapters.length - 1} onClick={() => setChapter(chapterIndex + 1)}>{t("Next")} →</button>
        </div>
      </article>
    </div>
  </section></div>;
}
