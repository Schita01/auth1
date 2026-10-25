import { PrintPage } from "@/components/pages/PrintPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("ka", "print");

export default function Page() {
  return <PrintPage lang="ka" />;
}
