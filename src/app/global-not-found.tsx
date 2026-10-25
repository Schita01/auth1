import type { Metadata } from "next";
import { RootShell } from "@/components/layout/RootShell";
import { LogoMark } from "@/components/layout/Logo";
import { routes } from "@/config/site";

export { viewport } from "@/lib/seo";

export const metadata: Metadata = {
  title: "404 · Khidi",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <RootShell lang="ka">
      <main id="main" className="section page not-found">
        <div className="wrap narrow">
          <LogoMark size={56} />
          <h1>404</h1>
          <p className="lead">ეს გვერდი ვერ მოიძებნა.</p>
          <p className="lead" lang="en">This page could not be found.</p>
          <div className="actions">
            <a className="button" href={routes.ka.home}>
              მთავარი გვერდი
            </a>
            <a className="button button-secondary" href={routes.en.home} lang="en" hrefLang="en">
              Home page
            </a>
          </div>
        </div>
      </main>
    </RootShell>
  );
}
