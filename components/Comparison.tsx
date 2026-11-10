"use client";

import { useState } from "react";
import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/locales";
import { translator } from "@/lib/messages";
import type { Chapter } from "@/lib/chapters";
import { demos } from "@/lib/site";
import { CreativeSimulation } from "./CreativeSimulation";
import { ReaderSimulation, type ReadingMethod } from "./ReaderSimulation";

const webMethods = ["Safari", "PWA", "WebAppify"] as const;
const readingMethods = ["Official app", ...webMethods] as const;

export function Comparison({ locale, chapters }: { locale: Locale; chapters: readonly Chapter[] }) {
  const t = translator(locale);
  const [demoIndex, setDemo] = useState(0);
  const [method, setMethod] = useState<ReadingMethod>("WebAppify");
  const demo = demos[demoIndex];
  const isCreative = demo.id === "whiteboard";

  function changeWorkspace(index: number) {
    setDemo(index);
    if (demos[index].id === "whiteboard" && method === "Official app") setMethod("WebAppify");
  }

  return <div className="comparison">
    <div className="comparison-top"><span className="simulation-label"><span className="status-dot" /> {t("Interactive simulation")}</span>
      <Link className="text-link" href={localizedPath(locale, `/demo/${demo.id}/`)}>{t("Open real demo")} <span aria-hidden="true">↗</span></Link>
    </div>
    <div className="compare-controls">
      <fieldset><legend>{t("Choose a workspace")}</legend><div className="segments">
        {demos.map((item, index) => <label key={item.id}><input type="radio" name="workspace" checked={demoIndex === index} onChange={() => changeWorkspace(index)} /><span>{t(item.title)}</span></label>)}
      </div></fieldset>
      <fieldset><legend>{t("Opening method")}</legend><div className="segments">
        {(isCreative ? webMethods : readingMethods).map(item => <label key={item}>
          <input type="radio" name="method" checked={method === item} onChange={() => setMethod(item)} />
          <span>{item === "Official app" ? t(item) : item}</span>
        </label>)}
      </div></fieldset>
    </div>
    {isCreative
      ? <CreativeSimulation locale={locale} method={method === "Official app" ? "WebAppify" : method} />
      : <ReaderSimulation locale={locale} method={method} chapters={chapters} />}
  </div>;
}
