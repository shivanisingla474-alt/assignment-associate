import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { integrity } from "@/data/legal";

export const metadata: Metadata = { title: "Our Service Standards",description: "Learn about Assignment Associate's service standards, assignment preparation process and commitment to clear communication."};
export default function Page() {
  return <LegalPage title="Our Service Standards" intro="Learn how we approach assignment preparation, communicate requirements and maintain clear expectations throughout the process." sections={integrity} />;
}
