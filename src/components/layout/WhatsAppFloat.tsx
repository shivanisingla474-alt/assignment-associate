import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { directChatUrl } from "@/lib/contact";

export function WhatsAppFloat() {
  const url = directChatUrl();
  if (!url) return null;
  return (
    <a
      href={url} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 inline-flex items-center gap-2 rounded-full bg-ink py-1.5 pl-1.5 pr-4 text-sm font-medium text-white shadow-lg shadow-black/25 ring-1 ring-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand"><WhatsAppIcon className="h-[1.15rem] w-[1.15rem]" /></span>
      Chat on WhatsApp
    </a>
  );
}
