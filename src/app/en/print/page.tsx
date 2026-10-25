import { PrintPage } from "@/components/pages/PrintPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "print");

export default function Page() {
  return <PrintPage lang="en" />;
}
