import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { terms } from "@/data/legal";

export const metadata: Metadata = { title: "Terms of service", description: "The terms for using Assignment Associate and our assignment help." };
export default function Page() {
  return <LegalPage title="Terms of service" intro="The ground rules for using this website and working with us." sections={terms} />;
}
