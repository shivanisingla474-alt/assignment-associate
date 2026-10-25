import type { Metadata } from "next";
import { Suspense } from "react";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageHeader } from "@/components/ui/PageHeader";
import { EnquiryForm } from "@/components/EnquiryForm";
import { site } from "@/config/site";
import { directChatUrl } from "@/lib/contact";

export const metadata: Metadata = { title: "Get assignment help", description: "Tell us about your assignment. We prepare a WhatsApp message with your details for you to send. Students welcome from every country." };

export default function ContactPage() {
  const chat = directChatUrl();
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Get assignment help" }]} />
      <PageHeader title="Tell us about your assignment" intro="Fill in the details below. We will prepare a WhatsApp message from your answers, and you send it to us from there." />
      <Container className="py-12">
        <Suspense fallback={<p>Loading form…</p>}><EnquiryForm /></Suspense>
        {chat && (
          <div className="mt-14 flex flex-col items-start justify-between gap-4 rounded-xl border border-rule bg-paper-deep p-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-lg font-medium">Prefer to message us directly?</p>
              <p className="text-ink-soft">Open a chat on WhatsApp at {site.whatsappDisplay} and describe your assignment there.</p>
            </div>
            <a href={chat} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-md bg-brand px-6 font-medium text-white transition-colors hover:bg-ink">
              <MessageCircle aria-hidden size={18} />Open WhatsApp
            </a>
          </div>
        )}
      </Container>
    </>
  );
}
