import { Lexend, Noto_Sans_Georgian } from "next/font/google";

export const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-latin",
});

export const georgian = Noto_Sans_Georgian({
  subsets: ["georgian"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-georgian",
});
