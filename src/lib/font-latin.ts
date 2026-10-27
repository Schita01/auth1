import localFont from "next/font/local";

/** English and other Latin text. */
export const rubik = localFont({
  src: "../fonts/Rubik-latin.woff2",
  weight: "400 700",
  display: "swap",
  variable: "--font-latin",
});
