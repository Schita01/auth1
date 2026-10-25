import { PrivacyPage } from "@/components/pages/PrivacyPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "privacy");

export default function Page() {
  return <PrivacyPage lang="en" />;
}
