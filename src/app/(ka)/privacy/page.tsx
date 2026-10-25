import { PrivacyPage } from "@/components/pages/PrivacyPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("ka", "privacy");

export default function Page() {
  return <PrivacyPage lang="ka" />;
}
