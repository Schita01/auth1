import localFont from "next/font/local";

/** Georgian body text. Rubik is listed first, so this only fills Georgian letters. */
export const notoGeorgian = localFont({
  src: "../fonts/NotoSansGeorgian.woff2",
  weight: "400 700",
  display: "swap",
  variable: "--font-georgian",
});

/** Georgian homepage headline only. */
export const datebashvili = localFont({
  src: "../fonts/Datebashvili.ttf",
  weight: "400",
  display: "swap",
  variable: "--font-display",
});
