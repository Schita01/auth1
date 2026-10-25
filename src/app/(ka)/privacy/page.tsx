import { LegalPage } from "@/components/pages/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("ka", "privacy");

export default function Page() {
  return <LegalPage lang="ka" page="privacy" />;
}
