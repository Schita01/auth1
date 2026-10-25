import { HomePage } from "@/components/pages/HomePage";
import { homeMetadata } from "@/lib/seo";

export const metadata = homeMetadata("en");

export default function Page() {
  return <HomePage lang="en" />;
}
