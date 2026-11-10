"use client";

import type { Locale } from "@/lib/locales";
import { translator } from "@/lib/messages";
import { useEffect, useState } from "react";

function measure() {
  const displayMode = ["fullscreen", "standalone", "minimal-ui", "browser"].find(
    mode => window.matchMedia(`(display-mode: ${mode})`).matches
  );
  return {
    "User-Agent": navigator.userAgent,
    "Viewport Width": `${document.documentElement.clientWidth} CSS px`,
    "Screen Width": `${screen.width} CSS px`,
    "Display Mode": displayMode,
    "Device Pixel Ratio": String(devicePixelRatio),
  } as const;
}

export function Diagnostics({ locale }: { locale: Locale }) {
  const t = translator(locale);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<ReturnType<typeof measure>>();
  useEffect(() => {
    if (!open) return;
    const refresh = () => setData(measure());
    const modes = ["fullscreen", "standalone", "minimal-ui", "browser"].map(mode => window.matchMedia(`(display-mode: ${mode})`));
    window.addEventListener("resize", refresh);
    modes.forEach(mode => mode.addEventListener("change", refresh));
    return () => {
      window.removeEventListener("resize", refresh);
      modes.forEach(mode => mode.removeEventListener("change", refresh));
    };
  }, [open]);
  return <details className="diagnostics" onToggle={event => {
    setOpen(event.currentTarget.open);
    if (event.currentTarget.open) setData(measure());
  }}>
    <summary>{t("Environment diagnostics")}</summary>
    {data && <dl>{(Object.keys(data) as (keyof typeof data)[]).map(key => <div key={key}><dt>{key === "User-Agent" ? key : t(key)}</dt><dd>{data[key] ?? t("Unknown")}</dd></div>)}</dl>}
  </details>;
}
