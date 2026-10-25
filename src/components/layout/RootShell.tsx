import type { ReactNode } from "react";
import type { Lang } from "@/config/site";
import { georgian, lexend } from "@/lib/fonts";
import "@/app/globals.css";

const bootScript = `(function(){document.documentElement.classList.add("js");})();`;

export function RootShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} className={`${lexend.variable} ${georgian.variable}`} suppressHydrationWarning>
      {/* eslint-disable-next-line @next/next/no-head-element -- App Router root layouts own <head>. */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
