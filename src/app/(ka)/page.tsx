import { HomePage } from "@/components/pages/HomePage";
import { homeMetadata } from "@/lib/seo";

export const metadata = homeMetadata("ka");

export default function Page() {
  return <HomePage lang="ka" />;
}
