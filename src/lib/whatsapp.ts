import { site, isWhatsAppConfigured } from "@/config/site";

export type Enquiry = {
  name: string; email: string; country: string; assignmentType: string; subject: string;
  level: string; wordCount: string; deadline: string; message: string; documents: string;
};

export function buildWhatsAppMessage(e: Enquiry): string {
  const lines = [
    `Hello ${site.name}, I would like help with an assignment.`,
    "",
    `Name: ${e.name}`,
    `Email: ${e.email}`,
    `Country: ${e.country}`,
    `Assignment type: ${e.assignmentType}`,
    `Subject: ${e.subject}`,
    ...(e.level ? [`Academic level: ${e.level}`] : []),
    ...(e.wordCount ? [`Word count: ${e.wordCount}`] : []),
    `Deadline: ${e.deadline || "Not specified"}`,
    "",
    "Requirements:",
    e.message,
  ];
  if (e.documents) lines.push("", `Documents: ${e.documents}`);
  return lines.join("\n");
}

/** Returns null when the business number is still the placeholder. */
export function buildWhatsAppUrl(text: string): string | null {
  if (!isWhatsAppConfigured()) return null;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
