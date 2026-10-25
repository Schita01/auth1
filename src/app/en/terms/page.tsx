import { LegalPage } from "@/components/pages/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "terms");

export default function Page() {
  return <LegalPage lang="en" page="terms" />;
}
