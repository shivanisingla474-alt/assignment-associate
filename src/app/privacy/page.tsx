import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { privacy } from "@/data/legal";

export const metadata: Metadata = { title: "Privacy policy", description: "How Assignment Associate handles the information you share when you enquire or message us." };
export default function Page() {
  return <LegalPage title="Privacy policy" intro="What we collect, how we use it and the choices you have." sections={privacy} />;
}
