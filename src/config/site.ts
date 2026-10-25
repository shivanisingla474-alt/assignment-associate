/**
 * Central site configuration. Edit values here; do not hardcode them in components.
 */
export const site = {
  name: "Assignment Associate",
  tagline: "Assignment help",

  /** Public website address. Set NEXT_PUBLIC_SITE_URL when you deploy (used for sitemap and sharing previews). */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Assignment help for students in any country. Work through your brief, plan your answer and improve your own draft with one-to-one support, then continue on WhatsApp.",

  /**
   * Business WhatsApp number: international format, digits only (no "+", spaces or dashes).
   * If this is not a valid number, the enquiry form will not open WhatsApp.
   */
  whatsappNumber: "917206221655",

  /** How the number is shown to visitors. */
  whatsappDisplay: "+91 72062 21655",

  /** Optional public contact email. Leave empty to hide it. */
  contactEmail: "",
} as const;

/** True only when a real number (digits, 8-15 long) has been configured. */
export function isWhatsAppConfigured(): boolean {
  return /^\d{8,15}$/.test(site.whatsappNumber);
}

export const routes = { home: "/", contact: "/contact" } as const;
