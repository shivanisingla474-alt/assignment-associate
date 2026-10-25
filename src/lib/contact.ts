import { site } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/** Link for a general chat (not the enquiry form). Null if no valid number is configured. */
export const directChatUrl = () => buildWhatsAppUrl(`Hello ${site.name}, I would like some help with an assignment.`);
