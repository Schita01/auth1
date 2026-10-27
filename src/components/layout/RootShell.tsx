import type { ReactNode } from "react";
import type { Lang } from "@/config/site";
import { ScrollToTop } from "@/components/ScrollToTop";
import { datebashvili, notoGeorgian } from "@/lib/font-georgian";
import { dynaPuff } from "@/lib/font-logo";
import { rubik } from "@/lib/font-latin";
import "@/app/globals.css";

const bootScript = `(function(){document.documentElement.classList.add("js");})();`;

export function RootShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} className={`${rubik.variable} ${notoGeorgian.variable} ${datebashvili.variable} ${dynaPuff.variable}`} suppressHydrationWarning>
      {/* eslint-disable-next-line @next/next/no-head-element -- App Router root layouts own <head>. */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
