import { ButtonLink } from "./ButtonLink";
import { enquiryHref } from "@/data/catalog";

export function EnquiryPanel({ title, text, type, subject }: { title: string; text: string; type?: string; subject?: string }) {
  return (
    <aside aria-label="Enquire" className="rounded-md border-t-4 border-brand bg-paper-deep p-6">
      <h2 className="text-2xl font-medium">{title}</h2>
      <p className="mt-3 text-ink-soft">{text}</p>
      <ButtonLink href={enquiryHref({ type, subject })} className="mt-5 w-full">Get assignment help</ButtonLink>
      <p className="mt-3 text-sm text-ink-soft">We prepare a WhatsApp message for you. We receive it when you press send.</p>
    </aside>
  );
}
