
import { site } from "@/config/site";

export type LegalSection = { heading: string; body?: string[]; list?: string[] };
export const legalUpdated = "October 2026";
const contact = `You can contact us on WhatsApp at ${site.whatsappDisplay}.`;

export const privacy: LegalSection[] = [
  { heading: "Who we are", body: [`${site.name} ("we", "us") provides assignment preparation and related academic support services. This policy explains what information we handle when you use this website and contact us.`] },
  { heading: "Information you give us", body: ["When you use the enquiry form or message us, you may give us:"], list: ["Your name and email address", "Your country and time zone", "Your assignment type, subject, level, word count and deadline", "A description of your assignment and any files or messages you share on WhatsApp"] },
  { heading: "How this website handles your details", body: ["The enquiry form on this website does not send your details to our servers. It builds a WhatsApp message from your answers and opens WhatsApp on your device. We receive your information only when you press send in WhatsApp."] },
  { heading: "How we use your information", list: ["To reply to your enquiry and understand what you need", "To plan and provide the help you ask for", "To keep reasonable records of our conversation with you"] },
  { heading: "WhatsApp", body: ["Messages and files you send through WhatsApp are also covered by WhatsApp's own terms and privacy policy. Please do not share identity document numbers, passwords or payment card details in the chat."] },
  { heading: "Cookies and analytics", body: ["This website does not use advertising or tracking cookies. If we add analytics in future, we will update this policy first."] },
  { heading: "Sharing your information", body: ["We do not sell your information. We share it only where the law requires, or with providers we need to run the website, such as hosting."] },
  { heading: "Keeping and deleting your information", body: ["We keep conversation records only as long as we need them to help you and for reasonable record keeping. You can ask us to delete your information by messaging us."] },
  { heading: "Your choices", body: ["Depending on where you live, you may have the right to ask what information we hold about you, to correct it or to have it deleted. Message us and we will respond."] },
  { heading: "Children", body: ["This website is not aimed at children under 13, and we do not knowingly collect information from them."] },
  { heading: "Changes to this policy", body: ["We may update this policy from time to time. The date at the top shows when it was last changed."] },
  { heading: "Contact", body: [contact] },
];

export const terms: LegalSection[] = [
  { heading: "About our service", body: [`${site.name} provides assignment preparation services based on the subject, assignment brief, formatting instructions and deadline shared by the customer. Services may include research, content development, structuring, referencing, formatting and proofreading, subject to the agreed requirements and applicable academic rules.`] },
  {
    heading: "Your responsibilities",
    list: [
      "You provide accurate information about your assignment, requirements and deadline",
      "You review the agreed scope, price and expected delivery timeline before proceeding",
      "You follow the academic rules and policies of your school, college or university",
      "You check which forms of external assignment assistance your institution permits",
    ],
  },
  { heading: "What we do not do", body: ["We do not sit exams or tests on anyone's behalf, impersonate students, access accounts without authorisation or help bypass plagiarism checks or other academic safeguards. Customers are responsible for ensuring that any use of our services complies with their institution's academic integrity policies."] },
  { heading: "No guarantee of results", body: ["Marks depend on your own work and on your institution's marking. We cannot guarantee any grade, result or admission outcome."] },
  { heading: "Fees and payment", body: ["Any fees are agreed with you on WhatsApp before work begins. Cancellation and refund terms, if any apply, are confirmed with you in the chat before you pay."] },
  { heading: "Timing", body: ["We agree timing with you based on the information you give. Late or incomplete information can change what is possible, and we will tell you if it does."] },
  { heading: "Your materials and ours", body: ["You should only share materials you have permission to provide. The permitted use of assignment materials and any deliverables will be subject to the arrangements agreed before work begins and applicable academic rules."] },
  { heading: "Acceptable use", body: ["Please be respectful in your messages. We may stop helping with a request that is unlawful, abusive or against our Academic integrity policy."] },
  { heading: "Limits of liability", body: ["To the extent the law allows, we are not responsible for indirect or consequential losses, or for how your institution responds to work you submit. Nothing in these terms limits liability that cannot legally be limited."] },
  { heading: "Changes to these terms", body: ["We may update these terms. The date at the top shows when they were last changed. Using the website or our service after a change means you accept the updated terms."] },
  { heading: "Contact", body: [contact] },
];

export const integrity: LegalSection[] = [
  { heading: "Our position", body: ["Our aim is to provide assignment preparation services tailored to the requirements customers share. Customers should review their institution's policies before using external assistance and remain responsible for complying with the rules that apply to their submissions."] },
  {
    heading: "What we do",
    list: [
      "Prepare assignment content according to the agreed brief and requirements",
      "Develop and organise research and relevant academic sources",
      "Structure content around the specified topic and instructions",
      "Assist with referencing, citations and formatting",
      "Proofread content for grammar, clarity and consistency",
      "Discuss requirements, deadlines and the agreed scope before work begins",
    ],
  },
  {
    heading: "What we will not do",
    list: [
      "Sit exams, tests or live assessments on behalf of a student",
      "Impersonate a student or use another person's login",
      "Help bypass plagiarism checks or other academic safeguards",
      "Claim guaranteed grades, marks or academic outcomes",
      "Accept requests that are unlawful or violate applicable policies",
    ],
  },
  { heading: "Your responsibility", body: ["You are responsible for reviewing your institution's academic integrity policy and ensuring that any external assistance you use is permitted. Disclose assistance where required by your institution."] },
  { heading: "If a request crosses the line", body: ["We may decline requests that involve impersonation, unauthorised access, evasion of academic safeguards or other unlawful activity."] },
  {
    heading: "Using our help well",
    list: [
      "Share accurate assignment instructions and requirements",
      "Review the agreed scope and delivery timeline",
      "Check your institution's rules on external academic assistance",
      "Cite sources and disclose assistance where required",
    ],
  },
  { heading: "Contact", body: [contact] },
];
